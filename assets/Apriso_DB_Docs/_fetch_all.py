"""
Walk xmlTree.xml and download/convert every table under "Tables by Category".

Folder layout is FLAT: nested BRANCHes are concatenated with spaces.
  Common > Alerting  ->  "Common Alerting/"
  Production > Inventory > Lots -> "Production Inventory Lots/"

Skips tables whose .md file already exists.
"""

import sys
import time
import urllib.request
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from _fetch_tables import xml_to_md, fetch_xml, BASE_URL  # reuse

OUT_ROOT = Path(__file__).parent
TREE_PATH = OUT_ROOT / "_xmlTree.xml"
MAX_WORKERS = 8


def walk_branches(branch, parents):
    """Yield (flat_category_name, [TABLE elements...]) for this branch and recurse."""
    path = parents + [branch.get("name")]
    tables = [t for t in branch.findall("TABLE")]
    if tables:
        yield (" ".join(path), tables)
    for sub in branch.findall("BRANCH"):
        yield from walk_branches(sub, path)


def process_table(category: str, table_el) -> tuple[str, str]:
    name = table_el.get("name")
    dbtype = table_el.get("dbtype")
    xml_name = f"Table_{name}_{dbtype}.xml"
    out_dir = OUT_ROOT / category
    out_file = out_dir / f"{name}.md"
    if out_file.exists():
        return ("SKIP", f"{category}/{name}")
    out_dir.mkdir(parents=True, exist_ok=True)
    try:
        data = fetch_xml(xml_name)
        md = xml_to_md(data)
        out_file.write_text(md, encoding="utf-8")
        return ("OK", f"{category}/{name}")
    except Exception as e:
        return ("FAIL", f"{category}/{name}: {e}")


def main():
    tree = ET.parse(TREE_PATH).getroot()
    group = tree.find("./GROUP[@name='Tables by Category']")
    if group is None:
        print("Could not find 'Tables by Category' group in xmlTree.xml")
        sys.exit(1)

    work = []
    for top in group.findall("BRANCH"):
        for category, tables in walk_branches(top, []):
            for t in tables:
                work.append((category, t))

    total = len(work)
    print(f"Total tables to process: {total}")
    print(f"Workers: {MAX_WORKERS}")
    print()

    started = time.time()
    counts = {"OK": 0, "SKIP": 0, "FAIL": 0}
    failures = []

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as ex:
        futures = {ex.submit(process_table, c, t): (c, t) for c, t in work}
        done = 0
        for fut in as_completed(futures):
            status, msg = fut.result()
            counts[status] += 1
            done += 1
            if status == "FAIL":
                failures.append(msg)
            if done % 50 == 0 or done == total:
                elapsed = time.time() - started
                rate = done / elapsed if elapsed > 0 else 0
                eta = (total - done) / rate if rate > 0 else 0
                print(f"[{done}/{total}] OK={counts['OK']} SKIP={counts['SKIP']} FAIL={counts['FAIL']} | {rate:.1f}/s | ETA {eta:.0f}s")

    print()
    print(f"Done in {time.time()-started:.1f}s. OK={counts['OK']} SKIP={counts['SKIP']} FAIL={counts['FAIL']}")
    if failures:
        print()
        print("Failures:")
        for f in failures[:50]:
            print(f"  {f}")


if __name__ == "__main__":
    main()
