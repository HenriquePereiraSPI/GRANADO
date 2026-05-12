"""
Converte todos os PDFs de assets/Apriso2025_Documentation/*.pdf para .md
na mesma pasta, limpando header/footer de impressao.
Mantem os PDFs originais.
"""
import re
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).parent

# Regex: header do tipo "01/05/2026, 11:53  Overview"
RX_HEADER = re.compile(r"^\s*\d{2}/\d{2}/\d{4},?\s+\d{2}:\d{2}\b.*$")
# Regex: URL de footer
RX_URL_FOOT = re.compile(r"^\s*https?://media\.3ds\.com/.*$")
# Regex: copyright / help version
RX_COPYRIGHT = re.compile(r"^\s*(Copyright Dassault|Help version:).*$")
# Regex: paginacao tipo "1/1" sozinha
RX_PAGENUM = re.compile(r"^\s*\d+/\d+\s*$")


def title_from_filename(stem: str) -> str:
    # "Process Builder Help - Foo Bar" -> "Foo Bar"
    prefix = "Process Builder Help - "
    if stem.startswith(prefix):
        return stem[len(prefix):]
    return stem


def clean_lines(text: str) -> str:
    out = []
    for line in text.splitlines():
        if RX_HEADER.match(line):
            continue
        if RX_URL_FOOT.match(line):
            continue
        if RX_COPYRIGHT.match(line):
            continue
        if RX_PAGENUM.match(line):
            continue
        out.append(line.rstrip())

    # Colapsa multiplos enters consecutivos (>2)
    cleaned = "\n".join(out)
    cleaned = re.sub(r"\n{3,}", "\n\n", cleaned)
    # Remove espacos em branco no inicio/fim
    return cleaned.strip()


def remove_redundant_title(body: str, title: str) -> str:
    """Se a primeira linha do body for igual ao titulo, remove (evita duplicacao com h1)."""
    lines = body.splitlines()
    if not lines:
        return body
    first = lines[0].strip()
    if first.lower() == title.lower():
        # Remove a primeira linha e qualquer linha vazia depois
        i = 1
        while i < len(lines) and not lines[i].strip():
            i += 1
        return "\n".join(lines[i:]).strip()
    return body


def convert_one(pdf: Path) -> tuple[bool, str]:
    try:
        result = subprocess.run(
            ["pdftotext", "-layout", "-enc", "UTF-8", str(pdf), "-"],
            capture_output=True,
            text=True,
            encoding="utf-8",
            timeout=60,
        )
    except subprocess.TimeoutExpired:
        return False, "timeout"
    except FileNotFoundError:
        return False, "pdftotext nao encontrado"

    if result.returncode != 0:
        return False, f"pdftotext erro: {result.stderr[:200]}"

    title = title_from_filename(pdf.stem)
    body = clean_lines(result.stdout)
    body = remove_redundant_title(body, title)

    md = f"# {title}\n\n{body}\n"

    out_path = pdf.with_suffix(".md")
    out_path.write_text(md, encoding="utf-8", newline="\n")
    return True, str(out_path.name)


def main():
    pdfs = sorted(HERE.glob("*.pdf"))
    if not pdfs:
        print("Nenhum PDF encontrado em", HERE)
        sys.exit(1)

    print(f"Convertendo {len(pdfs)} PDFs...")
    ok = 0
    fail = []
    for i, pdf in enumerate(pdfs, 1):
        success, info = convert_one(pdf)
        if success:
            ok += 1
            if i % 25 == 0 or i == len(pdfs):
                print(f"  [{i}/{len(pdfs)}] ok")
        else:
            fail.append((pdf.name, info))
            print(f"  [{i}/{len(pdfs)}] FALHOU: {pdf.name} -> {info}")

    print(f"\nConcluido: {ok} ok, {len(fail)} falhas")
    if fail:
        print("Falhas:")
        for n, info in fail:
            print(f"  - {n}: {info}")


if __name__ == "__main__":
    main()
