"""
Fetch Apriso Business Component method XML files and convert to markdown.

Usage:
    python _fetch_methods.py "<category>" "<component>" <xml_file_1> <xml_file_2> ...

Example:
    python _fetch_methods.py "Apriso Certification" "CertificationClassController" \
        Method_FlexNet.BusinessFacade.Certification.Controllers.CertificationClassController_CreateCertificationClass.xml
"""

import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

BASE_URL = "https://mes-teste.granado.com.br/apriso/Help/en-us/BC/XMLs/"
OUT_ROOT = Path(__file__).parent


def text(el, tag, default=""):
    if el is None:
        return default
    child = el.find(tag)
    if child is None:
        return default
    return (child.text or "").strip()


def fetch_xml(xml_name: str) -> bytes:
    url = BASE_URL + xml_name
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def inner_html(el) -> str:
    """Serialize an element's children back to HTML-ish text (for blocks like <p>, <ul>...)."""
    if el is None:
        return ""
    parts = []
    if el.text:
        parts.append(el.text)
    for child in el:
        parts.append(ET.tostring(child, encoding="unicode", method="html"))
    return "".join(parts).strip()


def html_to_md(html: str) -> str:
    """Very small HTML->Markdown conversion, enough for the kinds of fragments seen in BC docs."""
    if not html:
        return ""
    s = html
    # normalise whitespace inside tags
    s = re.sub(r"\s+", " ", s)
    # block-level rewrites
    s = re.sub(r"<\s*br\s*/?\s*>", "\n", s, flags=re.I)
    s = re.sub(r"<\s*p\s*>", "\n\n", s, flags=re.I)
    s = re.sub(r"<\s*/\s*p\s*>", "\n", s, flags=re.I)
    s = re.sub(r"<\s*ul\s*>", "\n", s, flags=re.I)
    s = re.sub(r"<\s*/\s*ul\s*>", "\n", s, flags=re.I)
    s = re.sub(r"<\s*ol\s*>", "\n", s, flags=re.I)
    s = re.sub(r"<\s*/\s*ol\s*>", "\n", s, flags=re.I)
    s = re.sub(r"<\s*li\s*>", "\n- ", s, flags=re.I)
    s = re.sub(r"<\s*/\s*li\s*>", "", s, flags=re.I)
    # inline rewrites
    s = re.sub(r"<\s*(b|strong)\s*>", "**", s, flags=re.I)
    s = re.sub(r"<\s*/\s*(b|strong)\s*>", "**", s, flags=re.I)
    s = re.sub(r"<\s*(i|em)\s*>", "*", s, flags=re.I)
    s = re.sub(r"<\s*/\s*(i|em)\s*>", "*", s, flags=re.I)
    s = re.sub(r"<\s*code\s*>", "`", s, flags=re.I)
    s = re.sub(r"<\s*/\s*code\s*>", "`", s, flags=re.I)
    # strip remaining tags
    s = re.sub(r"<[^>]+>", "", s)
    # decode HTML entities (minimal set)
    s = (s.replace("&nbsp;", " ")
          .replace("&amp;", "&")
          .replace("&lt;", "<")
          .replace("&gt;", ">")
          .replace("&quot;", '"')
          .replace("&#160;", " "))
    # collapse blank lines
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def render_section(title: str, body_md: str, lines: list):
    if not body_md or not body_md.strip():
        return
    lines.append(f"## {title}")
    lines.append("")
    lines.append(body_md)
    lines.append("")


def xml_to_md(xml_bytes: bytes) -> str:
    root = ET.fromstring(xml_bytes)

    name = text(root, "MName")
    category = text(root, "Category")
    assembly = text(root, "AssemblyName")
    klass = text(root, "Class")
    status = text(root, "Status")
    keywords = text(root, "Keywords")

    lines = []
    lines.append(f"# {name}")
    lines.append("")
    if category:
        lines.append(f"**Category:** {category}")
    if klass:
        lines.append(f"**Class:** `{klass}`")
    if assembly:
        lines.append(f"**Assembly:** `{assembly}`")
    if status:
        lines.append(f"**Status:** {status}")
    if keywords:
        lines.append(f"**Keywords:** {keywords}")
    lines.append("")

    # Description
    descs = root.findall("./MDescriptions/MDescription")
    if descs:
        lines.append("## Description")
        lines.append("")
        for d in descs:
            body = html_to_md(inner_html(d.find("Description")))
            if body:
                lines.append(body)
                lines.append("")
            cap = (d.findtext("Caption") or "").strip()
            if cap:
                lines.append(f"*{cap}*")
                lines.append("")

    # Parameters
    params = root.findall("./ParamInfo/Param")
    if params:
        lines.append("## Parameters")
        lines.append("")
        lines.append("| IO | Name | Type | Required | Description |")
        lines.append("|----|------|------|----------|-------------|")
        for p in params:
            io = text(p, "IO")
            nm = text(p, "Name")
            dt = text(p, "DType")
            rq = text(p, "Required")
            ds = html_to_md(inner_html(p.find("IO_Description"))).replace("|", "\\|").replace("\n", " ")
            lines.append(f"| {io} | {nm} | {dt} | {rq} | {ds} |")
        lines.append("")

    # Description parameters (Short/Medium/Extended etc.)
    dparams = root.findall("./DIParamInfo/DParam")
    if dparams:
        lines.append("## Description Parameters")
        lines.append("")
        lines.append("| Name | Type | Description |")
        lines.append("|------|------|-------------|")
        for p in dparams:
            nm = text(p, "DIName")
            dt = text(p, "DIDType")
            ds = html_to_md(inner_html(p.find("DIDescription"))).replace("|", "\\|").replace("\n", " ")
            lines.append(f"| {nm} | {dt} | {ds} |")
        lines.append("")

    # Rules
    rules = root.find("Rules")
    if rules is not None:
        render_section("Validations", html_to_md(inner_html(rules.find("Validations"))), lines)
        render_section("System Processing", html_to_md(inner_html(rules.find("SystemProcessing"))), lines)

    # Conditions
    cond = root.find("Conditions")
    if cond is not None:
        render_section("Pre-Conditions", html_to_md(inner_html(cond.find("PreConditions"))), lines)
        render_section("Published Events", html_to_md(inner_html(cond.find("PublishedEvents"))), lines)
        render_section("History Recording in Production", html_to_md(inner_html(cond.find("HistRecProd"))), lines)
        render_section("Host Integration Support", html_to_md(inner_html(cond.find("HostIntSupp"))), lines)

    # Extension points
    render_section("Extension Points", html_to_md(inner_html(root.find("ExtensionPoints"))), lines)

    # Impacted tables
    tables = root.findall("./ImpactedTables/Table")
    tables = [t for t in tables if text(t, "TableName") or text(t, "FieldName") or text(t, "BCParamVal")]
    if tables:
        lines.append("## Impacted Tables")
        lines.append("")
        lines.append("| Table | Field | BC Param |")
        lines.append("|-------|-------|----------|")
        for t in tables:
            tn = text(t, "TableName")
            fn = text(t, "FieldName")
            bp = text(t, "BCParamVal")
            lines.append(f"| {tn} | {fn} | {bp} |")
        lines.append("")

    return "\n".join(lines).rstrip() + "\n"


def method_label_from_xml_name(xml_name: str) -> str:
    """Method_<class-id>_<MethodName>.xml -> MethodName"""
    base = xml_name
    if base.startswith("Method_"):
        base = base[len("Method_"):]
    if base.endswith(".xml"):
        base = base[:-4]
    # method id format: <fully.qualified.Class>_<MethodName>
    if "_" in base:
        return base.rsplit("_", 1)[1]
    return base


def component_label_from_xml_name(xml_name: str) -> str:
    """Method_<full.namespace.ClassName>_<Method>.xml -> ClassName"""
    base = xml_name
    if base.startswith("Method_"):
        base = base[len("Method_"):]
    if base.endswith(".xml"):
        base = base[:-4]
    if "_" in base:
        class_path = base.rsplit("_", 1)[0]
    else:
        class_path = base
    return class_path.rsplit(".", 1)[-1]


def main():
    if len(sys.argv) < 4:
        print(__doc__)
        sys.exit(1)
    category = sys.argv[1]
    component = sys.argv[2]
    xml_names = sys.argv[3:]
    out_dir = OUT_ROOT / category / component
    out_dir.mkdir(parents=True, exist_ok=True)

    for xml_name in xml_names:
        try:
            data = fetch_xml(xml_name)
        except Exception as e:
            print(f"  FAIL  {xml_name}: {e}")
            continue
        md = xml_to_md(data)
        label = method_label_from_xml_name(xml_name)
        out_file = out_dir / f"{label}.md"
        out_file.write_text(md, encoding="utf-8")
        print(f"  OK    {xml_name} -> {out_file.relative_to(OUT_ROOT)}")


if __name__ == "__main__":
    main()
