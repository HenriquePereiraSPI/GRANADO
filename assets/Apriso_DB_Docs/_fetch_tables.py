"""
Fetch Apriso DB table XML files and convert to markdown.

Usage:
    python _fetch_tables.py "<category>" <xml_file_1> <xml_file_2> ...

Example:
    python _fetch_tables.py "Access Control" \
        Table_BUSINESS_OBJECT_SolutionAuthoring.xml \
        Table_ROLE_Operational.xml
"""

import sys
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

BASE_URL = "https://mes-teste.granado.com.br/apriso/Help/en-us/DB/XMLs/"
OUT_ROOT = Path(__file__).parent


def text(el, tag, default=""):
    child = el.find(tag)
    if child is None:
        return default
    return (child.text or "").strip()


def fetch_xml(xml_name: str) -> bytes:
    url = BASE_URL + xml_name
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def xml_to_md(xml_bytes: bytes) -> str:
    root = ET.fromstring(xml_bytes)

    name = text(root, "NAME")
    dbtype = text(root, "DBTYPE")
    sdescr = text(root, "SDESCR")
    cdescr = text(root, "CDESCR")

    lines = []
    lines.append(f"# {name}")
    lines.append("")
    lines.append(f"**Database:** {dbtype}")
    lines.append("")
    if sdescr:
        lines.append(f"**Description:** {sdescr}")
        lines.append("")
    if cdescr:
        lines.append(cdescr)
        lines.append("")

    columns = root.findall("COLUMN")
    if columns:
        lines.append("## Columns")
        lines.append("")
        lines.append("| Name | Data Type | Nullable | Default | Primary | FK To | Description |")
        lines.append("|------|-----------|----------|---------|---------|-------|-------------|")
        for c in columns:
            nm = text(c, "NAME")
            dt = text(c, "DATATYPE")
            nu = text(c, "NULLABLE")
            de = text(c, "DEFAULT")
            pk = text(c, "PRIMARY")
            sd = text(c, "SDESCRIPTION").replace("|", "\\|").replace("\n", " ")
            fk = ""
            foreign = c.find("FOREIGN")
            if foreign is not None:
                ref = foreign.find("REFTABLE")
                if ref is not None and ref.text:
                    fk = ref.text.strip()
            lines.append(f"| {nm} | {dt} | {nu} | {de} | {pk} | {fk} | {sd} |")
        lines.append("")

    pk = root.find("PKCONST")
    if pk is not None and (text(pk, "NAME") or text(pk, "COLUMN")):
        lines.append("## Primary Key")
        lines.append("")
        lines.append(f"- **{text(pk, 'NAME')}** on `{text(pk, 'COLUMN')}`")
        lines.append("")

    fkf = root.findall("FKFCONST")
    if fkf:
        lines.append("## Foreign Keys (this table -> other)")
        lines.append("")
        for f in fkf:
            lines.append(f"- **{text(f, 'NAME')}** — {text(f, 'TABLE')} (`{text(f, 'COLUMN')}`)")
        lines.append("")

    fkt = root.findall("FKTCONST")
    if fkt:
        lines.append("## Referenced By (other tables -> this)")
        lines.append("")
        for f in fkt:
            lines.append(f"- **{text(f, 'NAME')}** — {text(f, 'TABLE')} (`{text(f, 'COLUMN')}`)")
        lines.append("")

    bkf = root.findall("BKFCONST")
    bkf = [b for b in bkf if text(b, "TABLE") or text(b, "COLUMN")]
    if bkf:
        lines.append("## Business Keys (this table -> other)")
        lines.append("")
        for b in bkf:
            lines.append(f"- {text(b, 'TABLE')} (`{text(b, 'COLUMN')}`)")
        lines.append("")

    bkt = root.findall("BKTCONST")
    bkt = [b for b in bkt if text(b, "TABLE") or text(b, "COLUMN")]
    if bkt:
        lines.append("## Business Keys (other -> this table)")
        lines.append("")
        for b in bkt:
            lines.append(f"- {text(b, 'TABLE')} (`{text(b, 'COLUMN')}`)")
        lines.append("")

    chk = root.findall("CHECKCONST")
    chk = [c for c in chk if text(c, "NAME") or text(c, "EXPRESSION")]
    if chk:
        lines.append("## Check Constraints")
        lines.append("")
        for c in chk:
            lines.append(f"- **{text(c, 'NAME')}**: {text(c, 'EXPRESSION')}")
        lines.append("")

    uq = root.findall("UNIQUEINDEXES")
    if uq:
        lines.append("## Unique Indexes")
        lines.append("")
        for u in uq:
            lines.append(f"- **{text(u, 'NAME')}** on `{text(u, 'COLUMN')}`")
        lines.append("")

    nu = root.findall("NONUNIQUEINDEXES")
    if nu:
        lines.append("## Non-Unique Indexes")
        lines.append("")
        for n in nu:
            lines.append(f"- **{text(n, 'NAME')}** on `{text(n, 'COLUMN')}`")
        lines.append("")

    return "\n".join(lines).rstrip() + "\n"


def table_label_from_xml_name(xml_name: str) -> str:
    # Table_BUSINESS_OBJECT_SolutionAuthoring.xml -> BUSINESS_OBJECT
    base = xml_name
    if base.startswith("Table_"):
        base = base[len("Table_"):]
    if base.endswith(".xml"):
        base = base[:-4]
    for suffix in ("_SolutionAuthoring", "_Operational", "_LocalizationRepository", "_Archiving"):
        if base.endswith(suffix):
            base = base[: -len(suffix)]
            break
    return base


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)
    category = sys.argv[1]
    xml_names = sys.argv[2:]
    out_dir = OUT_ROOT / category
    out_dir.mkdir(parents=True, exist_ok=True)

    for xml_name in xml_names:
        try:
            data = fetch_xml(xml_name)
        except Exception as e:
            print(f"  FAIL  {xml_name}: {e}")
            continue
        md = xml_to_md(data)
        label = table_label_from_xml_name(xml_name)
        out_file = out_dir / f"{label}.md"
        out_file.write_text(md, encoding="utf-8")
        print(f"  OK    {xml_name} -> {out_file.relative_to(OUT_ROOT)}")


if __name__ == "__main__":
    main()
