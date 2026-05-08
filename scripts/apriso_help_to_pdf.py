"""
Apriso 2025 online help -> PDF crawler.

Targets the MadCap Flare TriPane skin used at media.3ds.com (Process
Builder Help and similar). Walks the #toc tree and saves each topic as a
PDF.

Login: the 3DEXPERIENCE portal requires authentication. The script uses a
persistent Chrome profile so you log in once interactively and the cookies
stay on disk for subsequent runs.

Why we don't literally click the Flare "Print" button: that button calls
window.print() inside the topic iframe, which opens the native OS print
dialog. Automating that dialog is fragile (requires --kiosk-printing plus
a "Save as PDF" printer configured as default). We use Chrome DevTools
`Page.printToPDF` instead, which produces an equivalent PDF without any
dialog and works in headless mode.

Why we navigate directly to topic URLs (instead of clicking TOC links):
in TriPane, topics load inside <iframe id="topic"> so clicking a TOC link
doesn't change the browser URL. Each TOC <a> already points to a real
.htm file; we just visit those directly. Bonus: the resulting PDFs contain
only the topic content, not the surrounding skin (header/sidebar/print
toolbar).

------------------------------------------------------------------------
Setup
------------------------------------------------------------------------

    pip install "selenium>=4.10"

    # 1) One-time login. Opens Chrome with a fresh profile in ./chrome-profile
    #    Log in to 3DEXPERIENCE in the window, then press Enter in the terminal.
    python scripts/apriso_help_to_pdf.py --setup

    # 2) Crawl. Provide the help index URL and an output folder.
    python scripts/apriso_help_to_pdf.py \
        --url "https://media.3ds.com/support/DELMIA-Apriso/2025/Online/ProcessBuilder/index.htm" \
        --out "./apriso-pdfs"

    # Optional: only list URLs that would be downloaded (no PDFs written)
    python scripts/apriso_help_to_pdf.py --url "<help index>" --list

    # Optional: run headless (browser not visible) once you've validated
    python scripts/apriso_help_to_pdf.py --url "<help index>" --out "./pdfs" --headless

The script skips files already present in --out, so you can interrupt and
resume.
"""

from __future__ import annotations

import argparse
import base64
import re
import sys
import time
from pathlib import Path

from selenium import webdriver
from selenium.common.exceptions import (
    ElementClickInterceptedException,
    ElementNotInteractableException,
    StaleElementReferenceException,
)
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait


# CSS selectors that match collapsed nodes in the MadCap Flare TOC tree.
# Order matters: we try the most specific first (the toggle arrow) before
# falling back to the whole node. Generic selectors are kept as fallbacks
# for non-Flare help systems.
EXPAND_SELECTORS = [
    ".MCTreeNode.MCTreeNode-closed > a.MCTreeNodeToggle",
    ".MCTreeNode.MCTreeNode-closed",
    '[aria-expanded="false"]',
    ".tree-node-children-closed",
    ".toc-closed",
]

# Default TOC container. The MadCap Flare TriPane skin used by Apriso 2025
# renders the tree inside <section id="toc">.
DEFAULT_TOC_SELECTOR = "#toc"


def make_driver(profile_dir: Path, headless: bool) -> webdriver.Chrome:
    opts = Options()
    opts.add_argument(f"--user-data-dir={profile_dir.resolve()}")
    opts.add_argument("--window-size=1400,900")
    if headless:
        opts.add_argument("--headless=new")
    return webdriver.Chrome(options=opts)


def setup(profile_dir: Path, login_url: str) -> None:
    print(f"Opening Chrome with profile: {profile_dir.resolve()}")
    print(f"Navigate to / log in at: {login_url}")
    driver = make_driver(profile_dir, headless=False)
    try:
        driver.get(login_url)
        input("After you finish logging in, press Enter here to save the session and close. ")
    finally:
        driver.quit()
    print("Done. Run again without --setup to crawl.")


def wait_for_toc(driver, toc_selector: str, timeout: int = 30) -> None:
    """The Flare TOC is populated by JS after page load; wait for it."""
    print("Waiting for TOC to render...")
    WebDriverWait(driver, timeout).until(
        lambda d: len(
            d.find_elements(By.CSS_SELECTOR, f"{toc_selector} .MCTreeNode, {toc_selector} a[href]")
        )
        > 0
    )


def expand_all_toc(driver, toc_selector: str, max_passes: int = 40) -> None:
    """Click every collapsed TOC node until none remain."""
    print("Expanding TOC...")
    for pass_num in range(max_passes):
        clicked = 0
        for sel in EXPAND_SELECTORS:
            scoped = f"{toc_selector} {sel}"
            try:
                els = driver.find_elements(By.CSS_SELECTOR, scoped)
            except Exception:
                els = []
            for el in els:
                try:
                    driver.execute_script("arguments[0].scrollIntoView({block:'center'});", el)
                    el.click()
                    clicked += 1
                    time.sleep(0.05)
                except (
                    ElementClickInterceptedException,
                    ElementNotInteractableException,
                    StaleElementReferenceException,
                    Exception,
                ):
                    pass
        if clicked == 0:
            print(f"  TOC fully expanded after {pass_num} pass(es).")
            return
        time.sleep(0.4)
    print("  Reached max expansion passes; some nodes may still be collapsed.")


def collect_toc_links(driver, toc_selector: str) -> list[tuple[str, str]]:
    """Return [(title, absolute_url), ...] in TOC order, deduplicated."""
    anchors = driver.find_elements(By.CSS_SELECTOR, f"{toc_selector} a[href]")
    seen: set[str] = set()
    links: list[tuple[str, str]] = []
    for a in anchors:
        try:
            href = a.get_attribute("href") or ""
            title = (a.text or "").strip()
        except StaleElementReferenceException:
            continue
        if not href or not title:
            continue
        if href.startswith(("javascript:", "#", "mailto:")):
            continue
        # Normalize: drop the fragment so the same topic isn't downloaded twice.
        href_clean = href.split("#", 1)[0]
        if href_clean in seen:
            continue
        seen.add(href_clean)
        links.append((title, href_clean))
    return links


def save_pdf(driver, url: str, dest: Path) -> None:
    driver.get(url)
    try:
        WebDriverWait(driver, 15).until(
            EC.presence_of_element_located((By.TAG_NAME, "body"))
        )
    except Exception:
        pass
    # Give JS-driven content a moment to settle.
    time.sleep(1.2)

    # Render with the print stylesheet (matches what the Flare Print button
    # would produce inside the iframe).
    try:
        driver.execute_cdp_cmd("Emulation.setEmulatedMedia", {"media": "print"})
    except Exception:
        pass

    pdf = driver.execute_cdp_cmd(
        "Page.printToPDF",
        {
            "printBackground": True,
            "preferCSSPageSize": True,
            "marginTop": 0.4,
            "marginBottom": 0.4,
            "marginLeft": 0.4,
            "marginRight": 0.4,
        },
    )
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(base64.b64decode(pdf["data"]))


def safe_filename(name: str, max_len: int = 80) -> str:
    name = re.sub(r"\s+", " ", name).strip()
    name = re.sub(r"[^\w\-. ]", "_", name)
    return name[:max_len] or "untitled"


def crawl(args: argparse.Namespace) -> int:
    driver = make_driver(args.profile, headless=args.headless)
    try:
        driver.get(args.url)
        wait_for_toc(driver, args.toc)
        expand_all_toc(driver, args.toc)
        # Small settle after final expansion so newly-revealed nodes finish
        # their slide animation before we read hrefs.
        time.sleep(1.0)
        links = collect_toc_links(driver, args.toc)

        if not links:
            print(
                "No TOC links found. The page may use different markup; try "
                "passing --toc with a CSS selector that matches the sidebar "
                "container.",
                file=sys.stderr,
            )
            return 2

        print(f"Found {len(links)} topics.")
        if args.list:
            for title, href in links:
                print(f"  {title}  ->  {href}")
            return 0

        args.out.mkdir(parents=True, exist_ok=True)
        failures = 0
        for i, (title, href) in enumerate(links, 1):
            fname = f"{i:03d}_{safe_filename(title)}.pdf"
            dest = args.out / fname
            if dest.exists():
                print(f"[{i}/{len(links)}] skip (exists): {fname}")
                continue
            print(f"[{i}/{len(links)}] {title}")
            try:
                save_pdf(driver, href, dest)
                print(f"            -> {dest}")
            except Exception as e:
                failures += 1
                print(f"            FAILED: {e}", file=sys.stderr)

        print(f"Done. {len(links) - failures} saved, {failures} failed.")
        return 0 if failures == 0 else 1
    finally:
        driver.quit()


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__.strip().split("\n")[0])
    p.add_argument(
        "--setup",
        action="store_true",
        help="Open Chrome to log in once. Saves session to --profile.",
    )
    p.add_argument("--url", help="Help index URL (required unless --setup).")
    p.add_argument(
        "--out",
        type=Path,
        default=Path("./apriso-pdfs"),
        help="Folder where PDFs are saved (default: ./apriso-pdfs).",
    )
    p.add_argument(
        "--profile",
        type=Path,
        default=Path("./chrome-profile"),
        help="Chrome user-data-dir for persistent login (default: ./chrome-profile).",
    )
    p.add_argument(
        "--toc",
        default=DEFAULT_TOC_SELECTOR,
        help=f"CSS selector for the TOC container. Default: {DEFAULT_TOC_SELECTOR!r}",
    )
    p.add_argument(
        "--list",
        action="store_true",
        help="Print discovered URLs without downloading anything.",
    )
    p.add_argument("--headless", action="store_true", help="Run Chrome headless.")
    args = p.parse_args()

    if args.setup:
        login_url = args.url or "https://media.3ds.com/support/DELMIA-Apriso/2025/Online/ProcessBuilder/index.htm"
        setup(args.profile, login_url)
        return

    if not args.url:
        p.error("--url is required (unless --setup).")

    sys.exit(crawl(args))


if __name__ == "__main__":
    main()
