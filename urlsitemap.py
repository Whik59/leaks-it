#!/usr/bin/env python3
"""
Simple CLI helper to fetch a sitemap.xml and dump every <loc> URL into urls.txt.

Usage:
    python urlsitemap.py "https://example.com/sitemap.xml"
"""

from __future__ import annotations

import sys
import xml.etree.ElementTree as ET
from pathlib import Path

import requests

SITEMAP_NS = "{http://www.sitemaps.org/schemas/sitemap/0.9}"


def extract_urls(xml_bytes: bytes) -> list[str]:
    """Parse sitemap XML bytes and return all <loc> text entries."""
    root = ET.fromstring(xml_bytes)
    urls = []
    for url_node in root.findall(f"{SITEMAP_NS}url"):
        loc_text = url_node.findtext(f"{SITEMAP_NS}loc")
        if loc_text:
            urls.append(loc_text.strip())
    return urls


def main() -> None:
    if len(sys.argv) != 2:
        script = Path(sys.argv[0]).name
        print(f"Usage: {script} https://example.com/sitemap.xml")
        sys.exit(1)

    sitemap_url = sys.argv[1]
    response = requests.get(sitemap_url, timeout=30)
    response.raise_for_status()

    urls = extract_urls(response.content)

    output_path = Path("urls.txt")
    output_path.write_text("\n".join(urls), encoding="utf-8")

    print(f"Wrote {len(urls)} URLs to {output_path.resolve()}")


if __name__ == "__main__":
    main()


