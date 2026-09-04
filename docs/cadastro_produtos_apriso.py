# -*- coding: utf-8 -*-
"""
Cadastro de produtos no Apriso a partir de um Excel.

Le o arquivo Excel (uma linha = um produto), monta o payload JSON no formato
esperado pelo web service GRD_CreateProductWS e chama a API (POST) UMA VEZ por
produto, pois o servico espera 1 produto por chamada.

Uso basico:
    # 1) Simulacao (NAO chama a API) - gera os payloads e um relatorio previo:
    python cadastro_produtos_apriso.py

    # 2) Testar de verdade apenas 1 produto:
    python cadastro_produtos_apriso.py --execute --limit 1

    # 3) Enviar tudo de verdade:
    python cadastro_produtos_apriso.py --execute

    # Outras opcoes uteis:
    #   --start 100         comeca da linha 100 (0-based, util para retomar)
    #   --limit 50          processa no maximo 50 linhas
    #   --delay 0.2         espera 0.2s entre chamadas
    #   --no-verify-ssl     ignora validacao do certificado SSL
    #   --payload-object    envia payload como objeto JSON (em vez de string)

Requisitos:
    pip install pandas openpyxl requests
"""

import argparse
import csv
import json
import math
import os
import sys
import time
from datetime import datetime

import pandas as pd
import requests

# ---------------------------------------------------------------------------
# Configuracao padrao (pode ser sobrescrita por argumentos de linha de comando)
# ---------------------------------------------------------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

EXCEL_PATH = os.path.join(BASE_DIR, "Carga_Cad_Item.xlsx")
SHEET_NAME = "Planilha1"
API_URL = "https://MES-TESTE.granado.com.br/apriso/httpServices/operations/GRD_CreateProductWS"

# Nome do parametro de entrada do web service (visto na tela: Inputs -> "payload")
INPUT_PARAM_NAME = "payload"

# ---------------------------------------------------------------------------
# Mapeamento dos campos que serao enviados (somente os do JSON de exemplo).
# Chave = coluna no Excel  ->  Valor = nome do campo no JSON.
# Para adicionar/remover um campo, basta editar os dicionarios abaixo.
# ---------------------------------------------------------------------------
# Campos que ficam na RAIZ do payload
ROOT_FIELDS = {
    "messageId": "messageId",
}
# Campos que ficam dentro do objeto "product"
PRODUCT_FIELDS = {
    "product.productCode": "productCode",
    "itemShort": "itemShort",              # no Excel e coluna de topo; no JSON vai em product
    "product.description": "description",
    "product.descriptionLong": "descriptionLong",
    "product.uom": "uom",
}
# Coluna do Excel com as conversoes de UOM (array de arrays -> array de objetos)
COL_UOM_CONVERSIONS = "product.uomConversions"

# Timeout (segundos) de cada requisicao HTTP
HTTP_TIMEOUT = 60


# ---------------------------------------------------------------------------
# Funcoes auxiliares
# ---------------------------------------------------------------------------
def _is_empty(value):
    """Considera vazio: None, NaN (float) ou string em branco."""
    if value is None:
        return True
    if isinstance(value, float) and math.isnan(value):
        return True
    if isinstance(value, str) and value.strip() == "":
        return True
    return False


def _clean_scalar(value):
    """Normaliza um valor escalar vindo do Excel para o JSON."""
    if _is_empty(value):
        return ""
    return str(value).strip()


def _format_number(value):
    """
    Formata um numero para JSON SEM notacao cientifica.
    Ex.: 0.00001 -> "0.00001" (e nao "1e-05"), 1000000.0 -> "1000000".
    O DFC do Apriso nao interpreta notacao cientifica (retorna null reference).
    """
    if isinstance(value, int):
        return str(value)
    s = ("%.10f" % value).rstrip("0").rstrip(".")
    return s if s else "0"


def _to_json(value):
    """
    Serializa um valor para string JSON controlando a formatacao dos numeros
    (usa _format_number para evitar notacao cientifica). Strings usam json.dumps
    para escapar corretamente aspas, acentos, etc.
    """
    if isinstance(value, dict):
        itens = ["%s:%s" % (json.dumps(k, ensure_ascii=False), _to_json(v))
                 for k, v in value.items()]
        return "{" + ",".join(itens) + "}"
    if isinstance(value, list):
        return "[" + ",".join(_to_json(v) for v in value) + "]"
    if isinstance(value, bool):
        return "true" if value else "false"
    if value is None:
        return "null"
    if isinstance(value, (int, float)):
        return _format_number(value)
    return json.dumps(value, ensure_ascii=False)


def _parse_uom_conversions(raw):
    """
    Converte o valor da coluna uomConversions.

    No Excel vem como array de arrays, ex.:
        [["CM","CC",1.0],["KG","GR",1000.0]]
    O Apriso espera array de objetos, ex.:
        [{"UOMFrom":"CM","UOMTo":"CC","Factor":1.0}, ...]
    """
    if _is_empty(raw):
        return []
    data = json.loads(raw)
    result = []
    for item in data:
        # Se ja vier como objeto, mantem; se vier como lista [from, to, factor], converte
        if isinstance(item, dict):
            result.append(
                {
                    "UOMFrom": item.get("UOMFrom", item.get("uomFrom")),
                    "UOMTo": item.get("UOMTo", item.get("uomTo")),
                    "Factor": float(item.get("Factor", item.get("factor"))),
                }
            )
        else:
            uom_from, uom_to, factor = item[0], item[1], item[2]
            result.append(
                {"UOMFrom": uom_from, "UOMTo": uom_to, "Factor": float(factor)}
            )
    return result


def build_product_payload(row):
    """
    Monta o dicionario do payload a partir de uma linha (Series do pandas),
    usando apenas os campos definidos em ROOT_FIELDS / PRODUCT_FIELDS e a
    coluna de conversoes de UOM.
    """
    root = {}
    for col, key in ROOT_FIELDS.items():
        root[key] = _clean_scalar(row.get(col))

    product = {}
    for col, key in PRODUCT_FIELDS.items():
        product[key] = _clean_scalar(row.get(col))

    product["uomConversions"] = _parse_uom_conversions(row.get(COL_UOM_CONVERSIONS))

    root["product"] = product
    return root


def build_request_body(product_payload, payload_as_object):
    """
    Monta o corpo do POST no formato que o web service do Apriso espera.

    O endpoint httpServices espera os parametros dentro de um wrapper "Inputs".
    O input se chama 'payload' (tipo Char) e recebe o JSON do produto como STRING
    (o DFC faz JsonConvert.DeserializeObject(payload)):
        {"Inputs": {"payload": "<json do produto como string>"}}   (padrao)
    ou, se --payload-object, o payload vai como objeto:
        {"Inputs": {"payload": {<json do produto>}}}
    """
    if payload_as_object:
        inner = {INPUT_PARAM_NAME: product_payload}
    else:
        # String: usa _to_json para numeros em decimal (o DFC nao aceita 1e-05)
        inner = {INPUT_PARAM_NAME: _to_json(product_payload)}
    return {"Inputs": inner}


def parse_apriso_response(resp):
    """
    Interpreta a resposta do Apriso.

    Formato observado:
        {"Outputs": {"__Routing__": 0,
                     "Outputs": "{\"Success\":1,\"Message\":\"...\"}"}}

    Retorna (sucesso: bool, mensagem: str).
    """
    try:
        data = resp.json()
        inner = data.get("Outputs", {}).get("Outputs")
        if isinstance(inner, str):
            inner = json.loads(inner)
        if isinstance(inner, dict):
            success = str(inner.get("Success", "")).strip() in ("1", "true", "True")
            return success, str(inner.get("Message", "")).strip()
    except Exception:
        pass
    # Sem o formato esperado: considera sucesso apenas pelo HTTP 2xx
    text = (resp.text or "").strip().replace("\r", " ").replace("\n", " ")
    return (200 <= resp.status_code < 300), text


# ---------------------------------------------------------------------------
# Programa principal
# ---------------------------------------------------------------------------
def main():
    parser = argparse.ArgumentParser(
        description="Cadastra produtos no Apriso a partir de um Excel (1 chamada por produto)."
    )
    parser.add_argument("--excel", default=EXCEL_PATH, help="Caminho do arquivo Excel.")
    parser.add_argument("--sheet", default=SHEET_NAME, help="Nome da aba do Excel.")
    parser.add_argument("--url", default=API_URL, help="URL da API do Apriso.")
    parser.add_argument(
        "--execute",
        action="store_true",
        help="Chama a API de verdade. Sem esta flag, apenas simula (dry-run).",
    )
    parser.add_argument("--start", type=int, default=0, help="Linha inicial (0-based).")
    parser.add_argument(
        "--limit", type=int, default=None, help="Quantidade maxima de linhas a processar."
    )
    parser.add_argument(
        "--delay", type=float, default=0.0, help="Pausa (segundos) entre chamadas."
    )
    parser.add_argument(
        "--timeout", type=int, default=HTTP_TIMEOUT, help="Timeout HTTP (segundos)."
    )
    parser.add_argument(
        "--no-verify-ssl",
        action="store_true",
        help="Nao valida o certificado SSL (util para ambientes internos/self-signed).",
    )
    parser.add_argument(
        "--payload-object",
        action="store_true",
        help="Envia o payload como objeto JSON em vez de string.",
    )
    args = parser.parse_args()

    if not os.path.isfile(args.excel):
        sys.exit("ERRO: arquivo Excel nao encontrado: %s" % args.excel)

    print("Lendo Excel: %s (aba: %s)" % (args.excel, args.sheet))
    df = pd.read_excel(args.excel, sheet_name=args.sheet, dtype=str)
    total = len(df)
    print("Total de linhas no arquivo: %d" % total)

    # Recorte (start / limit)
    end = total if args.limit is None else min(total, args.start + args.limit)
    df_slice = df.iloc[args.start:end]
    print("Processando linhas %d ate %d (%d linhas)." % (args.start, end - 1, len(df_slice)))

    if not args.execute:
        print("\n*** MODO SIMULACAO (dry-run) — a API NAO sera chamada. ***")
        print("*** Use --execute para enviar de verdade.                 ***\n")

    if args.no_verify_ssl:
        requests.packages.urllib3.disable_warnings()  # type: ignore

    # Arquivo de resultados
    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    result_path = os.path.join(BASE_DIR, "resultado_cadastro_%s.csv" % ts)
    sample_path = os.path.join(BASE_DIR, "payload_exemplo_%s.json" % ts)

    session = requests.Session()
    headers = {"Content-Type": "application/json", "Accept": "application/json"}

    ok_count = 0
    err_count = 0
    first_payload_saved = False

    with open(result_path, "w", newline="", encoding="utf-8-sig") as fout:
        writer = csv.writer(fout, delimiter=";")
        writer.writerow(
            ["linha", "messageId", "itemShort", "productCode",
             "http_status", "sucesso", "resposta_ou_erro"]
        )

        for pos, (idx, row) in enumerate(df_slice.iterrows(), start=1):
            message_id = _clean_scalar(row.get("messageId", ""))
            item_short = _clean_scalar(row.get("itemShort", ""))
            product_code = _clean_scalar(row.get("product.productCode", ""))

            # Monta payload
            try:
                product_payload = build_product_payload(row)
                body = build_request_body(product_payload, args.payload_object)
            except Exception as exc:  # erro ao montar/parsear a linha
                err_count += 1
                msg = "Falha ao montar payload: %s" % exc
                print("[%d/%d] linha %d ERRO_MONTAGEM: %s" % (pos, len(df_slice), idx, msg))
                writer.writerow([idx, message_id, item_short, product_code, "", "NAO", msg])
                fout.flush()
                continue

            # Salva um exemplo do primeiro payload montado (para conferencia)
            if not first_payload_saved:
                with open(sample_path, "w", encoding="utf-8") as fs:
                    json.dump(body, fs, ensure_ascii=False, indent=2)
                print("Exemplo de corpo do POST salvo em: %s" % sample_path)
                first_payload_saved = True

            if not args.execute:
                # Simulacao: apenas registra que montou com sucesso
                writer.writerow([idx, message_id, item_short, product_code, "", "SIMULADO", "OK (dry-run)"])
                if pos <= 3 or pos % 500 == 0:
                    print("[%d/%d] linha %d SIMULADO (%s)" % (pos, len(df_slice), idx, product_code))
                continue

            # Chamada real
            try:
                resp = session.post(
                    args.url,
                    data=json.dumps(body, ensure_ascii=False).encode("utf-8"),
                    headers=headers,
                    timeout=args.timeout,
                    verify=not args.no_verify_ssl,
                )
                status = resp.status_code
                success, mensagem = parse_apriso_response(resp)
                if len(mensagem) > 1000:
                    mensagem = mensagem[:1000] + "...(truncado)"

                if success:
                    ok_count += 1
                    flag = "SIM"
                else:
                    err_count += 1
                    flag = "NAO"

                writer.writerow([idx, message_id, item_short, product_code, status, flag, mensagem])
                print("[%d/%d] linha %d %s HTTP %s (%s) %s" % (
                    pos, len(df_slice), idx, "OK" if success else "ERRO",
                    status, product_code, mensagem))

            except Exception as exc:
                err_count += 1
                msg = "Excecao na chamada: %s" % exc
                writer.writerow([idx, message_id, item_short, product_code, "", "NAO", msg])
                print("[%d/%d] linha %d ERRO_HTTP: %s" % (pos, len(df_slice), idx, msg))

            fout.flush()

            if args.delay > 0:
                time.sleep(args.delay)

    # Resumo final
    print("\n" + "=" * 60)
    print("RESUMO")
    print("  Linhas processadas : %d" % len(df_slice))
    if args.execute:
        print("  Sucesso            : %d" % ok_count)
        print("  Erro               : %d" % err_count)
    else:
        print("  (modo simulacao — nenhuma chamada foi feita)")
    print("  Relatorio          : %s" % result_path)
    print("=" * 60)


if __name__ == "__main__":
    main()
