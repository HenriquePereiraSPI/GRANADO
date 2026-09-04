# -*- coding: utf-8 -*-
"""
Envia os produtos do Excel (Carga_Cad_Item.xlsx) para o GRD_CreateProductWS,
UMA chamada por produto, no formato FLAT confirmado:

    {
      "Inputs": {
        "messageId": "...",
        "productCode": "...",
        "itemShort": "...",
        "description": "...",
        "descriptionLong": "...",
        "uom": "...",
        "uomConversions": [ {"UOMFrom":"..","UOMTo":"..","Factor":..}, ... ]
      }
    }

Uso:
    python enviar_produtos_apriso.py                 # simula (dry-run), nao chama a API
    python enviar_produtos_apriso.py --execute --limit 1   # envia 1 produto (teste)
    python enviar_produtos_apriso.py --execute             # envia TODOS
    Opcoes: --start N  --limit N  --delay S  --no-verify-ssl

Requisitos: pip install pandas openpyxl requests
"""

import argparse
import csv
import importlib.util
import json
import os
import sys
import time
from datetime import datetime

import pandas as pd
import requests

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Reaproveita os helpers do script original (_clean_scalar, _parse_uom_conversions,
# _to_json/_format_number -> numeros SEM notacao cientifica, parse_apriso_response).
_spec = importlib.util.spec_from_file_location(
    "cad", os.path.join(BASE_DIR, "cadastro_produtos_apriso.py")
)
cad = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(cad)

EXCEL_PATH = os.path.join(BASE_DIR, "Carga_Cad_Item.xlsx")
SHEET_NAME = "Planilha1"
API_URL = "https://MES-WEB-QA.granado.com.br/apriso/httpServices/operations/GRD_CreateProductWS"

# Autenticacao (mantenha em segredo — nao versionar publicamente)
API_KEY = "5a674fe5-ea40-420b-8a95-439602f86b58"
CLIENT_APPLICATION = "20583ac7-1a1f-442d-9794-b771de53771b"

HTTP_TIMEOUT = 60


def build_body(row):
    """Monta o corpo FLAT (dentro de 'Inputs') e serializa sem notacao cientifica."""
    inputs = {
        "messageId": cad._clean_scalar(row.get("messageId")),
        "productCode": cad._clean_scalar(row.get("product.productCode")),
        "itemShort": cad._clean_scalar(row.get("itemShort")),
        "description": cad._clean_scalar(row.get("product.description")),
        "descriptionLong": cad._clean_scalar(row.get("product.descriptionLong")),
        "uom": cad._clean_scalar(row.get("product.uom")),
        "uomConversions": cad._parse_uom_conversions(row.get("product.uomConversions")),
    }
    # _to_json evita 1e-05 (o DFC do Apriso nao aceita notacao cientifica)
    return '{"Inputs":' + cad._to_json(inputs) + "}"


def main():
    p = argparse.ArgumentParser(description="Envia produtos ao GRD_CreateProductWS (1 chamada por produto).")
    p.add_argument("--excel", default=EXCEL_PATH)
    p.add_argument("--sheet", default=SHEET_NAME)
    p.add_argument("--url", default=API_URL)
    p.add_argument("--execute", action="store_true", help="Chama a API de verdade (sem isso, so simula).")
    p.add_argument("--start", type=int, default=0)
    p.add_argument("--limit", type=int, default=None)
    p.add_argument("--delay", type=float, default=0.0)
    p.add_argument("--timeout", type=int, default=HTTP_TIMEOUT)
    p.add_argument("--no-verify-ssl", action="store_true")
    args = p.parse_args()

    if not os.path.isfile(args.excel):
        sys.exit("ERRO: Excel nao encontrado: %s" % args.excel)

    df = pd.read_excel(args.excel, sheet_name=args.sheet, dtype=str)
    total = len(df)
    end = total if args.limit is None else min(total, args.start + args.limit)
    df_slice = df.iloc[args.start:end]
    print("Excel: %s (aba %s) — %d linhas. Processando %d..%d (%d)."
          % (args.excel, args.sheet, total, args.start, end - 1, len(df_slice)))
    if not args.execute:
        print("*** MODO SIMULACAO (dry-run) — a API NAO sera chamada. Use --execute. ***")

    if args.no_verify_ssl:
        requests.packages.urllib3.disable_warnings()  # type: ignore

    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "ApiKey " + API_KEY,
        "X-Client-Application": CLIENT_APPLICATION,
    }

    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    result_path = os.path.join(BASE_DIR, "resultado_envio_%s.csv" % ts)
    session = requests.Session()
    ok = err = 0

    with open(result_path, "w", newline="", encoding="utf-8-sig") as fout:
        w = csv.writer(fout, delimiter=";")
        w.writerow(["linha", "messageId", "productCode", "itemShort", "http_status", "sucesso", "resposta"])

        for pos, (idx, row) in enumerate(df_slice.iterrows(), start=1):
            mid = cad._clean_scalar(row.get("messageId"))
            pcode = cad._clean_scalar(row.get("product.productCode"))
            ishort = cad._clean_scalar(row.get("itemShort"))
            try:
                body = build_body(row)
            except Exception as exc:
                err += 1
                w.writerow([idx, mid, pcode, ishort, "", "NAO", "Falha ao montar: %s" % exc])
                print("[%d/%d] linha %d ERRO_MONTAGEM: %s" % (pos, len(df_slice), idx, exc))
                continue

            if not args.execute:
                w.writerow([idx, mid, pcode, ishort, "", "SIMULADO", "OK (dry-run)"])
                if pos <= 3:
                    print("[%d/%d] linha %d SIMULADO (%s)" % (pos, len(df_slice), idx, pcode))
                continue

            try:
                resp = session.post(
                    args.url,
                    data=body.encode("utf-8"),
                    headers=headers,
                    timeout=args.timeout,
                    verify=not args.no_verify_ssl,
                )
                success, msg = cad.parse_apriso_response(resp)
                if len(msg) > 1000:
                    msg = msg[:1000] + "...(truncado)"
                if success:
                    ok += 1
                    flag = "SIM"
                else:
                    err += 1
                    flag = "NAO"
                w.writerow([idx, mid, pcode, ishort, resp.status_code, flag, msg])
                print("[%d/%d] linha %d %s HTTP %s (%s) %s"
                      % (pos, len(df_slice), idx, "OK" if success else "ERRO",
                         resp.status_code, pcode, msg))
            except Exception as exc:
                err += 1
                w.writerow([idx, mid, pcode, ishort, "", "NAO", "Excecao: %s" % exc])
                print("[%d/%d] linha %d ERRO_HTTP: %s" % (pos, len(df_slice), idx, exc))

            fout.flush()
            if args.delay > 0:
                time.sleep(args.delay)

    print("\n" + "=" * 56)
    print("RESUMO  processadas=%d  sucesso=%d  erro=%d" % (len(df_slice), ok, err))
    print("Relatorio: %s" % result_path)
    print("=" * 56)


if __name__ == "__main__":
    main()
