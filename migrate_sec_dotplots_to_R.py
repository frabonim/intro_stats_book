#!/usr/bin/env python3
"""Migrate sec-dotplots.ptx from embedded Asymptote to R-generated figures.

Targeted changes only:
  * add/replace a marked sec-dotplots block in tools/figures.R;
  * run tools/figures.R to generate SVG and PDF assets;
  * add source="R-generated/..." to two existing <image> elements;
  * remove only the <asymptote> children of those image elements.

The script is idempotent, makes one-time backups, validates exact match counts,
and writes files atomically. Run it from anywhere inside the repository:

    python3 migrate_sec_dotplots_to_R.py

Use --no-generate only if you intentionally want to edit source without running R:

    python3 migrate_sec_dotplots_to_R.py --no-generate
"""

from __future__ import annotations

import argparse
import os
import re
import shutil
import subprocess
import sys
import tempfile
import xml.etree.ElementTree as ET
from pathlib import Path

R_START = "# r-figures:sec-dotplots:start"
R_END = "# r-figures:sec-dotplots:end"

R_BLOCK = r'''# r-figures:sec-dotplots:start
# ---- ch-data-display / sec-dotplots -----------------------
# Cereal protein data from Consumer Reports, as recorded in the section source.
cereal_names <- c(
  "Apple Jacks", "Cap'n Crunch", "Cheerios", "Cinnamon Toast Crunch",
  "Cocoa Puffs", "Corn Pops", "Count Chocula", "Froot Loops",
  "Frosted Flakes", "Frosted Mini-Wheats", "Fruity Pebbles",
  "Golden Grahams", "Honey Graham Ohs", "Honey Nut Cheerios",
  "Honeycomb", "Kix", "Life", "Lucky Charms", "Rice Krispies",
  "Smacks", "Trix"
)
cereal_protein <- c(2, 1, 6, 1, 1, 1, 1, 2, 2, 3, 2, 1, 2, 3, 2, 2, 4, 2, 2, 2, 1)
stopifnot(
  length(cereal_names) == 21L,
  length(cereal_protein) == 21L,
  identical(as.integer(table(factor(cereal_protein, levels = 1:6))),
            c(7L, 10L, 2L, 1L, 0L, 1L))
)

plot_cereal_casevalue <- function() {
  old <- par(no.readonly = TRUE)
  on.exit(par(old))
  par(
    family = "sans", fg = book_colors$ink, col.axis = book_colors$ink,
    col.lab = book_colors$ink, las = 1, bty = "n", xaxs = "i", yaxs = "i",
    mar = c(3.6, 10.6, 0.8, 0.8), mgp = c(2.2, 0.6, 0), tcl = -0.25
  )
  positions <- barplot(
    rev(cereal_protein),
    names.arg = rev(cereal_names),
    horiz = TRUE,
    xlim = c(0, 6.6),
    axes = FALSE,
    col = book_colors$gray,
    border = book_colors$ink,
    xlab = "Protein (grams per serving)",
    cex.names = 0.72,
    space = 0.25
  )
  axis(1, at = 0:6)
  invisible(positions)
}
render_book_figure(
  "cereal-casevalue", plot_cereal_casevalue,
  width = 7.5, height = 7.2
)

plot_cereal_dotplot <- function() {
  stacked_dotplot(
    cereal_protein,
    xlim = c(0.4, 6.7),
    xlabel = "Protein (grams per serving)",
    tick_by = 1
  )
}
render_book_figure(
  "cereal-dotplot", plot_cereal_dotplot,
  width = 6.5, height = 4.2
)
# r-figures:sec-dotplots:end
'''

FIGURES = {
    "image-cereal-casevalue": "R-generated/cereal-casevalue",
    "image-cereal-dotplot": "R-generated/cereal-dotplot",
}


def find_root(start: Path) -> Path:
    for candidate in (start, *start.parents):
        if (candidate / "source" / "sec-dotplots.ptx").is_file() and (
            candidate / "tools" / "figures.R"
        ).is_file():
            return candidate
    raise SystemExit(
        "Could not find the repository root containing source/sec-dotplots.ptx "
        "and tools/figures.R."
    )


def newline_style(text: str) -> str:
    return "\r\n" if "\r\n" in text else "\n"


def replace_or_insert_r_block(text: str) -> str:
    start_count = text.count(R_START)
    end_count = text.count(R_END)
    if start_count != end_count:
        raise ValueError("tools/figures.R has an unmatched sec-dotplots marker")
    if start_count > 1:
        raise ValueError("tools/figures.R has duplicate sec-dotplots marker blocks")

    nl = newline_style(text)
    block = R_BLOCK.replace("\n", nl).rstrip() + nl

    if start_count == 1:
        pattern = re.compile(
            rf"(?ms)^{re.escape(R_START)}$.*?^{re.escape(R_END)}[ \t]*(?:\r?\n)?"
        )
        updated, count = pattern.subn(lambda _m: block, text)
        if count != 1:
            raise ValueError("Could not replace the existing sec-dotplots R block")
        return updated

    # Keep the final success message final. It is the stable semantic anchor in
    # the current file and avoids rewriting any unrelated R code.
    anchor = re.compile(
        r'(?m)^message\("All statistical figures generated successfully in ", OUT\)[ \t]*$'
    )
    matches = list(anchor.finditer(text))
    if len(matches) != 1:
        raise ValueError(
            "Expected exactly one final success-message anchor in tools/figures.R; "
            f"found {len(matches)}"
        )
    pos = matches[0].start()
    prefix = text[:pos]
    if not prefix.endswith(("\n\n", "\r\n\r\n")):
        prefix = prefix.rstrip("\r\n") + nl + nl
    return prefix + block + nl + text[pos:]


def migrate_image(text: str, image_id: str, source: str) -> str:
    # Locate precisely one complete image element by its xml:id. This preserves
    # caption, description, indentation, and all surrounding section content.
    element_pattern = re.compile(
        rf'(?ms)<image\b(?=[^>]*\bxml:id="{re.escape(image_id)}")[^>]*>.*?</image>'
    )
    matches = list(element_pattern.finditer(text))
    if len(matches) != 1:
        raise ValueError(
            f"Expected exactly one <image> element with xml:id={image_id!r}; "
            f"found {len(matches)}"
        )

    original = matches[0].group(0)
    opening_match = re.match(r"(?s)<image\b[^>]*>", original)
    if opening_match is None:
        raise ValueError(f"Could not parse opening tag for {image_id}")
    opening = opening_match.group(0)

    source_match = re.search(r'\bsource="([^"]*)"', opening)
    if source_match:
        if source_match.group(1) != source:
            opening = re.sub(
                r'\bsource="[^"]*"', f'source="{source}"', opening, count=1
            )
    else:
        # Add only one attribute, immediately before the closing angle bracket.
        opening = opening[:-1] + f' source="{source}">'

    body = opening + original[opening_match.end():]
    asy_pattern = re.compile(r"(?ms)^[ \t]*<asymptote>.*?</asymptote>[ \t]*(?:\r?\n)?")
    body, removed = asy_pattern.subn("", body)
    if removed not in (0, 1):
        raise ValueError(f"Expected at most one Asymptote block in {image_id}; found {removed}")

    # Idempotent reruns see no Asymptote block, but first migration must either
    # remove one or find an already-correct source attribute.
    if removed == 0 and source_match is None:
        raise ValueError(f"No Asymptote block found in unmigrated image {image_id}")
    if "<asymptote>" in body or "</asymptote>" in body:
        raise ValueError(f"Asymptote markup remains in {image_id}")

    return text[:matches[0].start()] + body + text[matches[0].end():]


def validate_ptx(text: str) -> None:
    try:
        ET.fromstring(text)
    except ET.ParseError as exc:
        raise ValueError(f"Updated sec-dotplots.ptx is not well-formed XML: {exc}") from exc

    if "<asymptote>" in text or "</asymptote>" in text:
        raise ValueError("sec-dotplots.ptx still contains Asymptote markup")
    for image_id, source in FIGURES.items():
        pattern = re.compile(
            rf'<image\b(?=[^>]*\bxml:id="{re.escape(image_id)}")'
            rf'(?=[^>]*\bsource="{re.escape(source)}")[^>]*>'
        )
        if len(pattern.findall(text)) != 1:
            raise ValueError(f"Could not verify source for {image_id}")


def atomic_write(path: Path, text: str) -> None:
    data = text.encode("utf-8")
    fd, temporary = tempfile.mkstemp(prefix=f".{path.name}.", dir=path.parent)
    try:
        with os.fdopen(fd, "wb") as handle:
            handle.write(data)
            handle.flush()
            os.fsync(handle.fileno())
        os.replace(temporary, path)
    except BaseException:
        try:
            os.unlink(temporary)
        except FileNotFoundError:
            pass
        raise


def backup_once(root: Path, path: Path) -> None:
    destination = root / ".backups" / "migrate_sec_dotplots_to_R" / path.relative_to(root)
    if destination.exists():
        return
    destination.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(path, destination)
    print(f"backup    {path.relative_to(root)} -> {destination.relative_to(root)}")


def verify_assets(root: Path) -> None:
    for basename in ("cereal-casevalue", "cereal-dotplot"):
        for suffix in ("svg", "pdf"):
            path = root / "assets" / "R-generated" / f"{basename}.{suffix}"
            if not path.is_file() or path.stat().st_size <= 100:
                raise RuntimeError(f"Missing or too-small generated asset: {path}")
        svg = root / "assets" / "R-generated" / f"{basename}.svg"
        try:
            ET.parse(svg)
        except ET.ParseError as exc:
            raise RuntimeError(f"Generated SVG is not well-formed XML: {svg}: {exc}") from exc


def report(path: Path, root: Path, before: str, after: str) -> None:
    state = "unchanged" if before == after else "updated"
    print(f"{state:9} {path.relative_to(root)} ({len(after.encode('utf-8'))} bytes)")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--no-generate",
        action="store_true",
        help="edit source files without invoking Rscript or checking assets",
    )
    args = parser.parse_args()

    root = find_root(Path.cwd().resolve())
    r_path = root / "tools" / "figures.R"
    ptx_path = root / "source" / "sec-dotplots.ptx"

    r_before = r_path.read_text(encoding="utf-8")
    ptx_before = ptx_path.read_text(encoding="utf-8")

    r_after = replace_or_insert_r_block(r_before)
    ptx_after = ptx_before
    for image_id, source in FIGURES.items():
        ptx_after = migrate_image(ptx_after, image_id, source)
    validate_ptx(ptx_after)

    if "assets\", \"R-generated" not in r_after and 'assets", "R-generated' not in r_after:
        raise ValueError("tools/figures.R does not set output to assets/R-generated")

    backup_once(root, r_path)
    backup_once(root, ptx_path)

    # Update figures.R first, then generate and validate the assets. Do not alter
    # the PTX references unless figure generation succeeds.
    if r_after != r_before:
        atomic_write(r_path, r_after)
    report(r_path, root, r_before, r_after)

    if not args.no_generate:
        print("running   Rscript tools/figures.R")
        result = subprocess.run(
            ["Rscript", "tools/figures.R"],
            cwd=root,
            text=True,
        )
        if result.returncode != 0:
            raise RuntimeError(
                "R figure generation failed. sec-dotplots.ptx was not changed. "
                "Fix the first R error and rerun this script."
            )
        verify_assets(root)
        print("verified  cereal-casevalue.svg/.pdf and cereal-dotplot.svg/.pdf")
    else:
        print("skipped   R generation and asset validation (--no-generate)")

    if ptx_after != ptx_before:
        atomic_write(ptx_path, ptx_after)
    report(ptx_path, root, ptx_before, ptx_after)

    # Verify actual final source.
    validate_ptx(ptx_path.read_text(encoding="utf-8"))
    final_r = r_path.read_text(encoding="utf-8")
    if final_r.count(R_START) != 1 or final_r.count(R_END) != 1:
        raise RuntimeError("Post-write R marker validation failed")

    print("\nMigration complete. Run:")
    print("  pretext build web")
    print("  pretext build print")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (ValueError, RuntimeError, OSError, subprocess.SubprocessError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        raise SystemExit(1)
