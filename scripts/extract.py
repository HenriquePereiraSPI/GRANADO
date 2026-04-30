"""
Extrator do HTML monolitico (MES_Granado_v28_SinoticoMF.html) para o projeto React.

Gera:
  - src/styles/globals.css        (conteudo do <style>)
  - src/legacy/screens.js         (mapa id -> innerHTML de cada <div class="screen">)
  - src/legacy/modals.js          (mapa id -> innerHTML de cada <div class="modal-overlay">)
  - src/legacy/scripts.js         (concatenacao dos <script>)
  - src/legacy/manifest.json      (lista de telas e modais detectados)

Uso:
  python scripts/extract.py [--src ../MES_Granado_v28_SinoticoMF.html]
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_SRC = ROOT.parent / "MES_Granado_v28_SinoticoMF.html"


def read_html(src: Path) -> str:
    return src.read_text(encoding="utf-8")


def extract_style(html: str) -> str:
    """
    Extrai TODOS os blocos <style> do HTML monolitico, concatenando-os.
    O HTML original tem multiplos blocos (um geral + um para o "modo TV" dos
    relatorios) — usar `re.search` (singular) deixava o segundo bloco pra
    tras e quebrava o CSS das telas de relatorio.
    """
    blocks = re.findall(r"<style>([\s\S]*?)</style>", html)
    if not blocks:
        raise RuntimeError("Nenhum bloco <style> encontrado.")
    parts: list[str] = []
    for i, block in enumerate(blocks):
        sep = "\n\n/* ========================================================== */\n"
        sep += f"/* CSS BLOCK #{i + 1} (de {len(blocks)}) */\n"
        sep += "/* ========================================================== */\n\n"
        parts.append(sep + block.strip())
    return "\n\n".join(parts).strip()


def extract_scripts(html: str) -> str:
    """
    Coleta apenas <script> blocks NO NIVEL RAIZ do documento — ou seja,
    fora de qualquer <div class="screen"> ou <div class="modal-overlay">.
    Os scripts inline dessas containers ficam dentro do innerHTML do screen/modal
    e sao re-executados pelo LegacyScreen/Modals quando a tela monta.
    """
    # Remove conteudo de todos os screens/modals para isolar scripts top-level
    cleaned = html
    # Para cada div class="screen" id="screen-X" — substitui por placeholder
    for class_name in ("screen", "modal-overlay"):
        pattern = re.compile(
            r'<div[^>]*\bclass="[^"]*\b' + class_name + r'\b[^"]*"[^>]*\bid="[^"]+"[^>]*>'
            r'|<div[^>]*\bid="[^"]+"[^>]*\bclass="[^"]*\b' + class_name + r'\b[^"]*"[^>]*>'
        )
        # remove iterativamente (cada match -> cortar ate o </div> balanceado)
        while True:
            m = pattern.search(cleaned)
            if not m:
                break
            close_after = find_balanced_div(cleaned, m.start())
            if close_after == -1:
                break
            # substitui pelo placeholder
            cleaned = cleaned[: m.start()] + "<!-- removed -->" + cleaned[close_after:]

    blocks = re.findall(r"<script>([\s\S]*?)</script>", cleaned)
    if not blocks:
        return ""
    return "\n\n/* ========================================================== */\n\n".join(b.strip() for b in blocks)


def find_balanced_div(html: str, start_idx: int) -> int:
    """
    Dado o indice do '<' inicial de uma tag <div ...>, retorna o indice imediatamente
    apos o </div> que a fecha (depth-aware).
    """
    i = start_idx
    depth = 0
    n = len(html)
    while i < n:
        if html[i] == "<":
            # comentario?
            if html.startswith("<!--", i):
                end = html.find("-->", i + 4)
                if end == -1:
                    return -1
                i = end + 3
                continue
            # tag de abertura ou fechamento?
            if html.startswith("</div", i):
                end = html.find(">", i)
                if end == -1:
                    return -1
                depth -= 1
                i = end + 1
                if depth == 0:
                    return i
                continue
            if html.startswith("<div", i) and (i + 4 < n) and html[i + 4] in " \t\n>":
                end = html.find(">", i)
                if end == -1:
                    return -1
                # auto-close (<div ... />) — improvavel, mas seguro:
                if html[end - 1] == "/":
                    if depth == 0:
                        return end + 1
                    i = end + 1
                    continue
                depth += 1
                i = end + 1
                continue
        i += 1
    return -1


def extract_blocks_by_class(html: str, class_name: str, id_prefix: str | None = None) -> dict[str, str]:
    """
    Encontra todos os <div class="<class_name> ..." id="..."> e retorna mapa id -> innerHTML.
    Quando id_prefix e fornecido, filtra ids que comecam com o prefixo (sem incluir o prefixo na chave).
    """
    out: dict[str, str] = {}
    pattern = re.compile(
        r'<div[^>]*\bclass="([^"]*)"[^>]*\bid="([^"]+)"[^>]*>'
        r'|<div[^>]*\bid="([^"]+)"[^>]*\bclass="([^"]*)"[^>]*>'
    )
    for m in pattern.finditer(html):
        cls = m.group(1) or m.group(4)
        elem_id = m.group(2) or m.group(3)
        if not cls or not elem_id:
            continue
        # checa se a classe contem class_name como token
        tokens = cls.split()
        if class_name not in tokens:
            continue
        if id_prefix and not elem_id.startswith(id_prefix):
            continue
        # extrai conteudo balanceado
        open_start = m.start()
        open_end = m.end()
        close_after = find_balanced_div(html, open_start)
        if close_after == -1:
            print(f"AVISO: nao foi possivel fechar <div id={elem_id}>", file=sys.stderr)
            continue
        # remove a tag de fechamento final
        # close_after aponta apos o </div> da abertura
        # innerHTML = html[open_end : close_after - len('</div>')]
        end_tag = "</div>"
        inner_end = close_after - len(end_tag)
        inner = html[open_end:inner_end].strip("\n")
        key = elem_id[len(id_prefix):] if id_prefix else elem_id
        out[key] = inner
    return out


def to_js_module(name: str, mapping: dict[str, str]) -> str:
    """
    Converte mapping para um modulo ES exportando const NAME = { 'key': 'html', ... }.
    Usa template literals para preservar quebras e escapar somente backticks/${.
    """
    lines = [f"// AUTO-GERADO por scripts/extract.py — NAO EDITE.", "", f"export const {name} = {{"]
    for k in sorted(mapping.keys()):
        v = mapping[k]
        # escapa backticks e ${ para template literal
        v_escaped = v.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
        lines.append(f"  {json.dumps(k)}: `{v_escaped}`,")
    lines.append("};")
    lines.append("")
    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--src", default=str(DEFAULT_SRC))
    args = parser.parse_args()

    src = Path(args.src)
    if not src.exists():
        print(f"Arquivo fonte nao encontrado: {src}", file=sys.stderr)
        sys.exit(1)

    print(f"Lendo {src} ...")
    html = read_html(src)

    # 1) CSS
    css = extract_style(html)
    css_path = ROOT / "src" / "styles" / "globals.css"
    css_path.parent.mkdir(parents=True, exist_ok=True)
    css_path.write_text(css, encoding="utf-8")
    print(f"  -> {css_path.relative_to(ROOT)} ({len(css):,} bytes)")

    # 2) Scripts
    scripts = extract_scripts(html)
    sc_path = ROOT / "src" / "legacy" / "scripts.js"
    sc_path.parent.mkdir(parents=True, exist_ok=True)
    header = (
        "// AUTO-GERADO por scripts/extract.py — NAO EDITE.\n"
        "// Concatenacao de todos os blocos <script> do HTML original.\n"
        "// Carregado uma vez no boot do React via injectLegacyScripts().\n"
        "/* eslint-disable */\n\n"
    )
    sc_path.write_text(header + scripts + "\n", encoding="utf-8")
    print(f"  -> {sc_path.relative_to(ROOT)} ({len(scripts):,} bytes)")

    # 3) Screens
    screens = extract_blocks_by_class(html, "screen", id_prefix="screen-")
    screens_path = ROOT / "src" / "legacy" / "screens.js"
    screens_path.write_text(to_js_module("SCREENS", screens), encoding="utf-8")
    print(f"  -> {screens_path.relative_to(ROOT)} ({len(screens)} telas)")

    # 4) Modals
    modals = extract_blocks_by_class(html, "modal-overlay", id_prefix=None)
    # filtra so os que comecam com 'modal-'
    modals = {k: v for k, v in modals.items() if k.startswith("modal-")}
    modals_path = ROOT / "src" / "legacy" / "modals.js"
    modals_path.write_text(to_js_module("MODALS", modals), encoding="utf-8")
    print(f"  -> {modals_path.relative_to(ROOT)} ({len(modals)} modais)")

    # 5) Manifest
    manifest = {
        "screens": sorted(screens.keys()),
        "modals": sorted(modals.keys()),
        "source": str(src),
    }
    manifest_path = ROOT / "src" / "legacy" / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"  -> {manifest_path.relative_to(ROOT)}")

    print("\nResumo:")
    print(f"  Telas:  {len(screens)}")
    print(f"  Modais: {len(modals)}")
    print(f"  Scripts: {len(scripts):,} chars")


if __name__ == "__main__":
    main()
