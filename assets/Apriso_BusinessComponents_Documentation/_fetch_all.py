"""
Walk xmlTree.xml and download/convert every Business Component method.

Folder layout:
  <Flat-Category>/<Component>/<MethodName>.md

The flat category concatenates nested BRANCH names with spaces, just like
Apriso_DB_Docs does. Examples:
  Apriso > Common > Alert      -> "Apriso Common Alert/"
  Apriso > Certification       -> "Apriso Certification/"

Skips methods whose .md file already exists.
"""

import sys
import time
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from _fetch_methods import xml_to_md, fetch_xml  # reuse

OUT_ROOT = Path(__file__).parent
TREE_PATH = OUT_ROOT / "_xmlTree.xml"
MAX_WORKERS = 12


def walk_components(branch, parents):
    """Yield (flat_category_name, component_name, [METHOD elements]) for this branch and recurse."""
    path = parents + [branch.get("name")]
    flat_category = " ".join(path)
    for comp in branch.findall("COMPONENT"):
        comp_name = comp.get("name")
        methods = comp.findall("METHOD")
        if methods:
            yield (flat_category, comp_name, methods)
    for sub in branch.findall("BRANCH"):
        yield from walk_components(sub, path)


def process_method(category: str, component: str, method_el) -> tuple[str, str]:
    method_id = method_el.get("id")
    method_name = method_el.get("name")
    xml_name = f"Method_{method_id}.xml"
    out_dir = OUT_ROOT / category / component
    out_file = out_dir / f"{method_name}.md"
    if out_file.exists():
        return ("SKIP", f"{category}/{component}/{method_name}")
    try:
        out_dir.mkdir(parents=True, exist_ok=True)
        data = fetch_xml(xml_name)
        md = xml_to_md(data)
        out_file.write_text(md, encoding="utf-8")
        return ("OK", f"{category}/{component}/{method_name}")
    except Exception as e:
        return ("FAIL", f"{category}/{component}/{method_name}: {e}")


def main():
    tree = ET.parse(TREE_PATH).getroot()
    group = tree.find("./GROUP[@name='Components by Category']")
    if group is None:
        print("Could not find 'Components by Category' group in xmlTree.xml")
        sys.exit(1)

    work = []
    for top in group.findall("BRANCH"):
        for category, component, methods in walk_components(top, []):
            for m in methods:
                work.append((category, component, m))

    total = len(work)
    print(f"Total methods to process: {total}")
    print(f"Workers: {MAX_WORKERS}")
    print()

    started = time.time()
    counts = {"OK": 0, "SKIP": 0, "FAIL": 0}
    failures = []

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as ex:
        futures = {ex.submit(process_method, c, k, m): (c, k, m) for c, k, m in work}
        done = 0
        for fut in as_completed(futures):
            status, msg = fut.result()
            counts[status] += 1
            done += 1
            if status == "FAIL":
                failures.append(msg)
            if done % 100 == 0 or done == total:
                elapsed = time.time() - started
                rate = done / elapsed if elapsed > 0 else 0
                eta = (total - done) / rate if rate > 0 else 0
                print(f"[{done}/{total}] OK={counts['OK']} SKIP={counts['SKIP']} FAIL={counts['FAIL']} | {rate:.1f}/s | ETA {eta:.0f}s")

    print()
    print(f"Done in {time.time()-started:.1f}s. OK={counts['OK']} SKIP={counts['SKIP']} FAIL={counts['FAIL']}")
    if failures:
        print()
        print("Failures (first 50):")
        for f in failures[:50]:
            print(f"  {f}")


if __name__ == "__main__":
    main()
