#!/usr/bin/env python3
"""Adopt the R-first graphics strategy for intro_stats_book.

Writes complete replacements for:
  * CONVENTIONS.md
  * SKILLS.md
  * tools/figures.R

If SKILL.md is the obsolete singular PreTeXt Statistics Converter skill, it is
removed after SKILLS.md is written. Existing target files are backed up once in
.backups/update_graphics_strategy/. All writes are atomic and the script is
idempotent.

Run from anywhere inside the repository:
    python3 update_graphics_strategy.py
"""

from __future__ import annotations

import os
import re
import shutil
import sys
import tempfile
from pathlib import Path


CONVENTIONS = r'''# Project Conventions

These conventions govern conversion of open educational statistics material
into PreTeXt for this repository. They are normative. If another instruction
conflicts with this file, this file wins.

## 1. Purpose

The project converts openly licensed statistics material into a coherent,
accessible, interactive PreTeXt textbook for Runestone Academy. Conversion is
not page-for-page transcription. Material may be combined, split, corrected,
reorganized, or supplemented when that improves the book. Record substantive
changes in `SOURCES.md`.

## 2. Required reading

Before preparing a batch, read:

- `CONVENTIONS.md`
- `SOURCES.md`
- every source page being converted
- the affected chapter wrapper and neighboring sections
- every existing file the batch will modify
- `tools/figures.R`

Do not work from page titles, stale excerpts, memory, or guessed repository
state. If current files cannot be read, stop and request them.

## 3. Python generators are the only delivery format

Deliver every batch as one runnable Python script in `tools/`, normally
`tools/build_batch_NN.py`. Do not use git patches or manual paste-in steps.

One execution must make every required batch edit, including:

- creating or revising `.ptx` sections
- updating chapter `xi:include` elements
- updating detailed provenance and status in `SOURCES.md`
- updating `tools/figures.R`
- generating or validating required figure assets when dependencies exist
- making any other edit required for a buildable batch

A batch is incomplete if the user must manually add includes, ledger entries,
R code, or routine configuration after running the generator.

## 4. Generator safety

### 4.1 Raw strings and control characters

Store complete PreTeXt bodies in raw triple-quoted strings. Before writing,
reject formfeed, backspace, and vertical-tab characters. A missing raw-string
prefix can silently corrupt commands such as `\frac` and `\bar`.

### 4.2 Validate before writing

Read all inputs and construct the complete proposed repository state in memory.
Validate it before modifying any file. Write temporary files in the destination
directory and replace targets atomically. A failure must not leave partial or
one-line files.

### 4.3 Idempotent shared-file edits

Use paired, batch-owned markers in shared files:

    <!-- batch:NN:start -->
    ...
    <!-- batch:NN:end -->

Use `# batch:NN:start` and `# batch:NN:end` in R and Python. Replace the marked
block on rerun; never append a duplicate. If exactly one marker exists, stop.

Use stable semantic anchors, not line numbers. Stop if an expected unique anchor
is absent or duplicated.

### 4.4 Existing files and force mode

Do not silently replace an existing section. By default, create missing
batch-owned files and report existing ones. A supported `--force` option may
replace only files explicitly owned by that batch; it must never overwrite
unrelated work.

### 4.5 Reporting

Report each created, updated, unchanged, or skipped path and its final byte
count. End with validation status for XML, IDs, references, chapter wiring,
`SOURCES.md`, `tools/figures.R`, and figure assets. Exit nonzero on failure.

## 5. IDs and naming

Use lowercase, hyphen-separated descriptive IDs. Never encode display numbers.

| Prefix | Element | Example |
|---|---|---|
| `ch-` | chapter | `ch-data-display` |
| `sec-` | section | `sec-histograms` |
| `subsec-` | subsection | `subsec-bin-width` |
| `def-` | definition | `def-zscore` |
| `thm-` | theorem | `thm-empirical-rule` |
| `ex-` | example | `ex-sweatpants` |
| `check-` | reading check | `check-bar-height` |
| `fig-` | figure | `fig-oscar-ages` |
| `image-` | image | `image-oscar-ages` |
| `table-` | table | `table-birthweight` |
| `asm-` | assemblage | `asm-endpoint-rule` |
| `summary-` | conclusion | `summary-mean-median` |

Scan the complete source tree for proposed IDs before writing. Scan the proposed
and final repository state for duplicate `xml:id` values. Fail on duplicates.

## 6. Section structure

A normal section contains, in order:

1. objectives
2. introduction
3. concept-focused subsections
4. conclusion

Use Title Case for section titles and sentence case for subsection titles. Do
not mix loose paragraphs and subdivisions at the same structural level.
Chapter-level prose belongs in `<introduction>`.

Do not put `<title>` inside a traditional division's `<introduction>` or
`<conclusion>`; current PreTeXt deprecates and ignores it. Give conclusions
IDs such as `summary-mean-median`.

Organize by ideas, not source-page boundaries. Record combinations and splits
in `SOURCES.md`. A section normally has 1,500-3,000 words and 5-10 checks.

## 7. Objectives and pedagogy

Objectives must be observable and verb-first: calculate, compare, explain,
interpret, or choose. Avoid vague objectives such as “understand.”

Use the rhythm prose, worked example, reading check. Introduce notation only
when needed and connect calculations to interpretation.

## 8. Reading checks

Tier 1 multiple-choice checks are the default. Each has exactly four choices,
`randomize="yes"`, one correct answer unless explicitly designed otherwise,
and substantive feedback on every choice. Distractors must model plausible
errors. Never use feedback that says only “Incorrect.”

Use true/false sparingly, normally no more than once per section. Feedback must
begin with `True` or `False` and explain the reasoning.

Use one or two recorded short responses when interpretation matters. Include
`<response/>`, state the expected length, and provide a two-paragraph solution:
a model answer followed by criteria distinguishing strong from adequate work.

## 9. Modern PreTeXt markup

Use semantic PreTeXt markup.

| Need | Markup |
|---|---|
| inline math | `<m>...</m>` |
| display math | `<md><mrow>...</mrow></md>` |
| em dash | `<mdash/>` |
| en dash | `<ndash/>` |
| nonbreaking space | `<nbsp/>` |
| quotation | `<q>...</q>` |
| literal code | `<c>...</c>` |
| first use of term | `<term>...</term>` |
| emphasis or source title | `<em>...</em>` |

Do not introduce deprecated `<me>`, `<men>`, or `<dollar/>`. Use a bare `$` for
currency in prose. Escape percent signs inside math, as in `<m>95\%</m>`.

Reference elements by ID, never hardcoded number. Ensure every target exists.
Use the explicit text mode PreTeXt requires when referencing an unnumbered
target.

## 10. Graphics strategy

### 10.1 Default: R for statistical graphics

R is the production engine for 2D data-driven statistical graphics, including
histograms, dotplots, scatterplots, boxplots, density plots, and sampling
distributions. `tools/figures.R` is both the reproducibility record and the
production source.

Generate SVG for HTML/Runestone and PDF for print from the same plotting
function and data. Commit both assets. Remote builds must not require R.

Use an extensionless image source in PreTeXt when the project configuration
selects SVG for HTML and PDF for print. Keep generated statistical figures in
the repository's configured external-assets directory.

Do not maintain parallel Asymptote and R implementations of the same statistical
plot. Once an R-generated figure replaces an embedded Asymptote figure, remove
the obsolete Asymptote source and generated assets.

### 10.2 Typography and style

Use one repository-wide R graphics theme. SVG figures use a generic
`sans-serif` family so browser text follows a suitable installed web font. PDF
figures use the configured print family when available. Exact font identity
cannot be shared across HTML and LaTeX targets; prioritize a consistent visual
system: sizes, weights, spacing, colors, line widths, and margins.

Keep SVG labels as text when practical. All essential information must remain
available in the PreTeXt `<description>`; an SVG alone is not sufficient
alternative text.

### 10.3 PreFigure

Use PreFigure selectively for structured conceptual diagrams where semantic
annotation, navigable accessibility, or tactile output provides a clear
benefit: number lines, balancing-point diagrams, probability trees, area
models, and geometric probability.

Do not use PreFigure merely to recreate an ordinary statistical plot that R
produces more directly.

### 10.4 Asymptote

Asymptote is optional, not the default. Use it only when it is demonstrably
simpler or more capable than R or PreFigure for a particular custom diagram.
Document the reason in the generator or `SOURCES.md`.

If Asymptote is used, XML-escape comparison operators, explicitly initialize
all array entries before reading them, and test both SVG and HTML output.

## 11. R figure requirements

`tools/figures.R` must run from the repository root with:

    Rscript tools/figures.R

It must create output directories as needed and fail loudly on missing packages,
invalid data, or unwritable output paths.

Each figure should be defined by a plotting function and passed to one helper
that opens SVG and PDF devices. The same function and data must generate both.

Prefer `svglite` for clean SVG text output. Use `cairo_pdf` for PDF when
available, with a safe fallback to `pdf`. Declare required packages near the
top of the file.

Every histogram must use left-closed bins `[a,b)`. Base R `hist()` calls must
set `right = FALSE`. Comparable histograms must share range, breaks, and scale.

Avoid relying on interactive devices, IDE state, working-directory changes, or
unseeded randomness. Set a seed for simulated data. Close every graphics device,
even when plotting fails.

The script must verify expected SVG and PDF files exist and are nonempty.

## 12. Figure accessibility

Every `<image>` requires a meaningful `<description>` stating:

- graph type
- axes and units
- overall shape
- notable values, groups, gaps, or outliers
- comparisons or marked summaries
- the intended interpretation

Do not merely repeat the caption or list axis labels. Do not encode meaning by
color alone. Use direct labels, shapes, line styles, or redundant cues.

## 13. Source fidelity and provenance

Verify source claims rather than copying blindly. Source material may contain
arithmetic errors, inconsistent counts, missing data, broken widgets, or
conflicting summaries.

Record every repair in `SOURCES.md`, including source page, destination section,
problem, correction, reasoning, and data provenance. Mark pedagogical additions
as `Added, not in source.` Replace broken widgets with native PreTeXt checks.

When source data is unavailable, reconstruct data only when it can reproduce all
published anchors. Document assumptions and constraints in `SOURCES.md` and the
section attribution.

## 14. `SOURCES.md` and chapter wiring

Every generator updates `SOURCES.md` idempotently. Update the conversion-status
table, page-to-section mapping, repairs, reconstructions, added material,
replaced interactives, and dataset provenance while preserving existing layout.

Every generator also updates chapter wrappers automatically. Add each include
exactly once, preserve path style, place it in pedagogical order, and verify the
file exists. Stop if the expected neighboring anchor is absent.

## 15. Attribution

Each section conclusion ends with attribution naming the original work,
publisher, license, and provenance of real or reconstructed data when relevant.

## 16. Validation

Before a batch is complete:

1. Run the generator.
2. Run it again and verify idempotency.
3. Parse changed XML.
4. scan repository-wide for duplicate IDs and unresolved references.
5. verify chapter includes, `SOURCES.md`, and `tools/figures.R` blocks.
6. run `Rscript tools/figures.R` when figures changed.
7. verify every expected SVG and PDF is nonempty and SVG parses as XML.
8. build web and Runestone targets.
9. build print periodically.
10. read new sections and verify every exercise branch.
11. inspect figures in both HTML and PDF output.

Typical commands:

    python3 tools/build_batch_NN.py
    python3 tools/build_batch_NN.py
    Rscript tools/figures.R
    pretext build web
    pretext view web
    pretext build runestone
    pretext build print

Do not mix a PreTeXt CLI upgrade or unrelated repository-wide cleanup into a
content batch unless required for that batch.

## 17. Known issues

Keep `directories/@external` in exactly one place. If it appears in both
`docinfo` and the publication file, PreTeXt warns and uses the `docinfo` value.
Resolve that in a dedicated maintenance task.

A missing image during an HTML build is often downstream of an earlier asset
failure. Diagnose the first direct error.

## 18. Completion standard

A batch is complete only when one Python command creates the full intended
repository state, including source, chapter wiring, ledger entries, R figure
source, generated assets when dependencies are available, and validations.
No manual paste-in step is acceptable.
'''


SKILLS = r'''---
name: PreTeXt Statistics Converter
description: Convert open statistics lessons into repository-ready PreTeXt batches using one complete, idempotent Python generator and R-produced 2D graphics.
---

# PreTeXt Statistics Converter

Use this skill to convert source lessons, revise conversion batches, create
statistical figures, or diagnose batch-generated build failures in this
repository.

## Authority

Read `CONVENTIONS.md` and `SOURCES.md` first. They are normative. If this skill
conflicts with repository conventions, the repository conventions win.

Deliver one downloadable Python generator. Never deliver git patches or a
manual edit checklist as the primary solution.

## Inspect before authoring

Read the complete source pages, affected chapter wrapper, neighboring sections,
all existing files to be changed, `SOURCES.md`, and `tools/figures.R`. Do not
invent anchors, include order, IDs, or table layouts from stale context.

If current repository content is unavailable, request it rather than guessing.

## Analyze the sources

For each page:

1. identify its learning goals and conceptual sequence;
2. inventory examples, exercises, figures, data, simulations, and widgets;
3. verify numerical claims;
4. identify broken interactives, missing data, and contradictions;
5. decide whether pages should be combined or split;
6. record repairs, reconstructions, and additions for `SOURCES.md`.

Correct source errors openly. Reconstruct unavailable data only when the result
matches every published anchor, and document the assumptions.

## Design the section

Use objectives, introduction, concept-focused subsections, worked examples,
reading checks, conclusion, and attribution. Organize by ideas rather than URLs.
Use descriptive, repository-wide unique IDs and modern PreTeXt markup.

Multiple-choice checks have four randomized choices and feedback for every
choice. Distractors model plausible errors. Recorded responses state expected
length and include a model answer plus strong-versus-adequate criteria.

## Graphics

Use R as the default production engine for 2D statistical graphics. Generate
SVG for web and PDF for print from the same plotting function and data in
`tools/figures.R`. Commit generated assets so Runestone does not need R.

Use PreFigure selectively for conceptual diagrams that benefit from semantic
annotations, screen-reader navigation, or tactile output. Use Asymptote only
when it is clearly better suited than R or PreFigure.

Every image needs a substantive PreTeXt description. Do not rely on color alone.

For R figures:

- use the repository-wide graphics theme;
- keep SVG text as text when practical;
- use left-closed histogram bins with `right = FALSE`;
- use identical data and plotting logic for SVG and PDF;
- set seeds for simulation;
- verify output files are nonempty;
- ensure SVG parses as XML;
- avoid interactive-device or IDE assumptions.

## Generator contract

The generator must perform all batch work:

- write or revise batch-owned `.ptx` files;
- update chapter includes;
- update detailed and tabular entries in `SOURCES.md`;
- add or replace the batch block in `tools/figures.R`;
- generate figure assets when R and required packages are available;
- validate XML, IDs, references, wiring, provenance, and assets;
- report every changed or unchanged file.

Do not leave routine edits for the user.

Store PreTeXt bodies in raw triple-quoted strings and reject control characters.
Build the complete proposed state in memory, validate it, then write atomically.
Use paired marker blocks in shared files and stable semantic anchors. The second
run must not duplicate or alter already-correct content.

Do not silently overwrite an existing section. A `--force` option may replace
only files explicitly owned by the batch.

## Validation

Before writing, verify:

- well-formed generated XML;
- no control-character corruption;
- repository-wide unique IDs;
- valid cross-reference targets;
- one chapter include per generated section;
- complete marker pairs;
- no duplicated ledger rows or R blocks;
- consistency among prose, calculations, R data, and plots;
- image descriptions and attribution;
- expected SVG/PDF output declarations.

After writing, parse changed XML again, repeat the ID scan, verify includes and
marker blocks, and run figure generation when available.

Recommend or run:

    Rscript tools/figures.R
    pretext build web
    pretext build runestone

## Diagnosing failures

Separate blocking errors from unrelated warnings and deprecations. Diagnose the
first direct failure rather than downstream missing-asset messages.

Inspect actual on-disk source before treating chat-rendered backslashes as real.
Identify exactly which files the generator owns; do not recommend a broad revert
for a localized failure.

For R figure failures, run `Rscript tools/figures.R`, identify the first package,
data, device, or path error, and correct the generator or shared R pipeline.

For legacy Asymptote failures, extract the exact diagram, decode XML entities,
and test SVG and HTML directly. When practical, migrate ordinary statistical
plots to R instead of expanding the Asymptote workaround.

## Delivery

Provide:

1. one downloadable Python generator;
2. concise run instructions;
3. the files it creates or modifies;
4. source repairs and reconstructions;
5. validations performed and checks skipped;
6. visual items to inspect in web and print.

If the user reports a batch error, correct the generator rather than supplying
an isolated manual edit unless the user explicitly asks only for diagnosis.

## Completion standard

The batch is complete only when one Python generator creates the entire intended
repository state and leaves it ready for web, Runestone, and print validation
without manual paste-in work.
'''


FIGURES_R = r'''# figures.R — production source for 2D statistical graphics
#
# Run from the repository root:
#   Rscript tools/figures.R
#
# Each plotting function is rendered from the same data to SVG (web/Runestone)
# and PDF (print). Generated assets are committed; remote builds do not need R.
#
# CONVENTION: histogram bins are left-closed [a,b), so every hist() call uses
# right = FALSE.

required <- c("openintro", "MASS", "svglite")
missing <- required[!vapply(required, requireNamespace, logical(1), quietly = TRUE)]
if (length(missing)) {
  stop(
    "Missing R package(s): ", paste(missing, collapse = ", "),
    ". Install with install.packages(c(",
    paste(sprintf("\"%s\"", missing), collapse = ", "), "))."
  )
}

OUT <- file.path("assets", "external")
dir.create(OUT, showWarnings = FALSE, recursive = TRUE)

book_colors <- list(
  ink = "#1F2933",
  blue = "#1769AA",
  red = "#B33A3A",
  gray = "#D9DEE3",
  grid = "#E8EBEE"
)

book_par <- function() {
  par(
    family = "sans", fg = book_colors$ink, col.axis = book_colors$ink,
    col.lab = book_colors$ink, las = 1, bty = "n", xaxs = "i", yaxs = "i",
    mgp = c(2.25, 0.65, 0), tcl = -0.25, mar = c(3.8, 4.0, 1.2, 0.8)
  )
}

render_book_figure <- function(name, plot_fun, width = 7, height = 4) {
  stopifnot(is.character(name), length(name) == 1L, is.function(plot_fun))
  svg_path <- file.path(OUT, paste0(name, ".svg"))
  pdf_path <- file.path(OUT, paste0(name, ".pdf"))

  svglite::svglite(svg_path, width = width, height = height,
                   system_fonts = list(sans = "sans-serif"))
  svg_open <- TRUE
  tryCatch(
    { plot_fun(); invisible(dev.off()); svg_open <- FALSE },
    error = function(e) {
      if (svg_open && dev.cur() > 1L) dev.off()
      stop("Failed to render ", svg_path, ": ", conditionMessage(e))
    }
  )

  pdf_device <- if (capabilities("cairo")) grDevices::cairo_pdf else grDevices::pdf
  pdf_device(pdf_path, width = width, height = height, family = "sans")
  pdf_open <- TRUE
  tryCatch(
    { plot_fun(); invisible(dev.off()); pdf_open <- FALSE },
    error = function(e) {
      if (pdf_open && dev.cur() > 1L) dev.off()
      stop("Failed to render ", pdf_path, ": ", conditionMessage(e))
    }
  )

  for (path in c(svg_path, pdf_path)) {
    info <- file.info(path)
    if (!file.exists(path) || is.na(info$size) || info$size <= 100L) {
      stop("Figure output is missing or too small: ", path)
    }
  }
  message("wrote ", svg_path, " and ", pdf_path)
}

stacked_dotplot <- function(values, xlim, xlabel, mean_value = NULL,
                            median_value = NULL, tick_by = NULL) {
  book_par()
  tab <- table(values)
  xs <- as.numeric(names(tab))
  max_stack <- max(tab)
  ylim <- c(-0.65, max_stack + 1.15)
  plot(NA, xlim = xlim, ylim = ylim, axes = FALSE, xlab = xlabel, ylab = "")
  axis(1, at = if (is.null(tick_by)) pretty(xlim) else
       seq(ceiling(xlim[1] / tick_by) * tick_by, xlim[2], by = tick_by))
  abline(h = 0, col = book_colors$ink, lwd = 1)
  for (j in seq_along(xs)) {
    points(rep(xs[j], tab[j]), seq_len(tab[j]), pch = 21,
           bg = book_colors$ink, col = book_colors$ink, cex = 0.9)
  }
  if (!is.null(mean_value)) {
    abline(v = mean_value, col = book_colors$red, lty = 2, lwd = 1.5)
    text(mean_value, max_stack + 0.65, paste("mean", format(mean_value)),
         col = book_colors$red, pos = 2, xpd = NA)
  }
  if (!is.null(median_value)) {
    abline(v = median_value, col = book_colors$blue, lty = 3, lwd = 1.5)
    text(median_value, max_stack + 0.2,
         paste("median", format(median_value)), col = book_colors$blue,
         pos = 4, xpd = NA)
  }
}

# ---- ch-data-display / sec-histograms --------------------
hip <- openintro::bdims$hip.gi
stopifnot(length(hip) == 507L)
hip_breaks <- seq(75, 130, by = 5)
print(table(cut(hip, breaks = hip_breaks, right = FALSE)))

plot_hip_histogram <- function() {
  book_par()
  hist(hip, breaks = hip_breaks, right = FALSE, col = book_colors$gray,
       border = book_colors$ink, main = "", xlab = "Hip girth",
       ylab = "Frequency", xlim = range(hip_breaks))
}
render_book_figure("hip-girth-histogram", plot_hip_histogram)

# ---- ch-data-display / sec-comparing-distributions -------
ns <- MASS::birthwt$bwt[MASS::birthwt$smoke == 0]
sm <- MASS::birthwt$bwt[MASS::birthwt$smoke == 1]
stopifnot(length(ns) == 115L, length(sm) == 74L)
message("Low birth weight: nonsmoking=", mean(ns < 2500),
        ", smoking=", mean(sm < 2500))
message("Macrosomia: nonsmoking=", mean(ns >= 4000),
        ", smoking=", mean(sm >= 4000))

birth_breaks <- seq(500, 5000, by = 500)
birth_max <- max(
  hist(ns, breaks = birth_breaks, right = FALSE, plot = FALSE)$counts,
  hist(sm, breaks = birth_breaks, right = FALSE, plot = FALSE)$counts
)

plot_birthweight_comparison <- function() {
  old <- par(no.readonly = TRUE); on.exit(par(old))
  par(mfrow = c(2, 1), family = "sans", fg = book_colors$ink,
      col.axis = book_colors$ink, col.lab = book_colors$ink,
      las = 1, bty = "n", mgp = c(2.1, 0.6, 0), tcl = -0.25,
      mar = c(3.2, 4.0, 1.8, 0.8))
  hist(ns, breaks = birth_breaks, right = FALSE, col = book_colors$gray,
       border = book_colors$ink, main = "Mother did not smoke",
       xlab = "Birth weight (grams)", ylab = "Frequency",
       xlim = range(birth_breaks), ylim = c(0, birth_max))
  hist(sm, breaks = birth_breaks, right = FALSE, col = book_colors$gray,
       border = book_colors$ink, main = "Mother smoked",
       xlab = "Birth weight (grams)", ylab = "Frequency",
       xlim = range(birth_breaks), ylim = c(0, birth_max))
}
render_book_figure("birthweight-smoking-comparison",
                   plot_birthweight_comparison, width = 7, height = 7)

# ---- ch-data-display / sec-mean-median -------------------
beth <- c(70, 80, 80, 80, 85, 86, 90, 90, 95)
stopifnot(mean(beth) == 84, median(beth) == 85,
          abs(sum(beth - mean(beth))) < 1e-12)

plot_beth_scores <- function() {
  stacked_dotplot(beth, c(68, 97), "Homework score",
                  mean_value = mean(beth), median_value = median(beth),
                  tick_by = 5)
}
render_book_figure("beth-scores", plot_beth_scores, width = 7, height = 3.5)

# ---- ch-data-display / sec-choosing-center ---------------
# Reconstructed data; see SOURCES.md.
hw26 <- c(0, 80, 81, 82, 82, 83, 83, rep(84, 6), 85, 85,
          86, 86, 86, 87, 87, 87, 88, 88, 88, 89, 90)
stopifnot(length(hw26) == 26L, sum(hw26) == 2127,
          median(hw26) == 84.5)
message("Homework mean=", mean(hw26), ", median=", median(hw26))
message("Without zero: mean=", mean(hw26[-1]),
        ", median=", median(hw26[-1]))

hw10 <- c(0, 80, 82, 84, 85, 85, 86, 87, 88, 88)
stopifnot(mean(hw10) == 76.5, median(hw10) == 85)

plot_outlier_scores <- function() {
  stacked_dotplot(hw26, c(-3, 95), "Homework score",
                  mean_value = round(mean(hw26), 1),
                  median_value = median(hw26), tick_by = 10)
}
render_book_figure("outlier-scores", plot_outlier_scores,
                   width = 7.5, height = 3.8)

# Reconstructed census-frequency table; see SOURCES.md.
income_counts <- c(340, 232, 168, 100, 55, 35, 20, 15, 10, 10)
income_left <- seq(0, 90, by = 10)
income_mid <- income_left + 5
income_over_100_count <- 15
income_over_100_mean <- 165
income_mean <- (sum(income_mid * income_counts) +
                income_over_100_count * income_over_100_mean) / 1000
income_median <- 10 + (500 - income_counts[1]) / income_counts[2] * 10
stopifnot(abs(income_mean - 23.98) < 1e-10,
          abs(income_median - 16.8965517) < 1e-6,
          sum(income_counts) + income_over_100_count == 1000)

plot_income <- function() {
  book_par()
  ylim <- c(0, 400)
  plot(NA, xlim = c(0, 105), ylim = ylim, xlab = "Income (thousands of dollars)",
       ylab = "People per 1,000", axes = FALSE)
  rect(income_left, 0, income_left + 10, income_counts,
       col = book_colors$gray, border = book_colors$ink)
  axis(1, at = seq(0, 100, by = 20))
  axis(2)
  abline(v = income_mean, col = book_colors$red, lty = 2, lwd = 1.5)
  abline(v = income_median, col = book_colors$blue, lty = 3, lwd = 1.5)
  text(income_mean, 315, "mean", col = book_colors$red, pos = 4)
  text(income_median, 370, "median", col = book_colors$blue, pos = 2)
}
render_book_figure("income", plot_income, width = 7, height = 4.2)

message("All statistical figures generated successfully in ", OUT)
'''


def find_repo_root(start: Path) -> Path:
    for candidate in (start, *start.parents):
        if (candidate / "source").is_dir() and (candidate / "tools").is_dir():
            return candidate
    raise SystemExit(
        "Could not find repository root. Run this script from inside a checkout "
        "containing source/ and tools/."
    )


def validate_text(label: str, text: str) -> None:
    if not text.endswith("\n"):
        raise SystemExit(f"Internal error: {label} lacks a final newline")
    bad = {"formfeed": "\f", "backspace": "\b", "vertical tab": "\v"}
    found = [name for name, char in bad.items() if char in text]
    if found:
        raise SystemExit(f"Internal error: {label} contains {', '.join(found)}")


def atomic_write(path: Path, content: str) -> str:
    encoded = content.encode("utf-8")
    if path.exists() and path.read_bytes() == encoded:
        return "unchanged"
    path.parent.mkdir(parents=True, exist_ok=True)
    fd, temp_name = tempfile.mkstemp(prefix=f".{path.name}.", dir=path.parent)
    try:
        with os.fdopen(fd, "wb") as handle:
            handle.write(encoded)
            handle.flush()
            os.fsync(handle.fileno())
        os.replace(temp_name, path)
    except BaseException:
        try:
            os.unlink(temp_name)
        except FileNotFoundError:
            pass
        raise
    return "updated" if path.exists() else "created"


def backup_once(root: Path, paths: list[Path]) -> None:
    backup_root = root / ".backups" / "update_graphics_strategy"
    for path in paths:
        if not path.exists():
            continue
        relative = path.relative_to(root)
        destination = backup_root / relative
        if not destination.exists():
            destination.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(path, destination)
            print(f"backup  {relative} -> {destination.relative_to(root)}")


def is_old_converter_skill(text: str) -> bool:
    return (
        "name: PreTeXt Statistics Converter" in text
        and "## Python generator contract" in text
    )


def main() -> int:
    root = find_repo_root(Path.cwd().resolve())
    targets = {
        root / "CONVENTIONS.md": CONVENTIONS,
        root / "SKILLS.md": SKILLS,
        root / "tools" / "figures.R": FIGURES_R,
    }
    singular = root / "SKILL.md"

    for path, content in targets.items():
        validate_text(str(path), content)

    # Lightweight internal validation before touching the checkout.
    if "R is the production engine" not in CONVENTIONS:
        raise SystemExit("Internal validation failed: missing R-first convention")
    if "Git patches are not used" in CONVENTIONS:
        raise SystemExit("Internal validation failed: obsolete patch wording remains")
    if 'right = FALSE' not in FIGURES_R:
        raise SystemExit("Internal validation failed: histogram convention missing")
    if re.search(r"mean\(hw26\s*,\s*\[", FIGURES_R):
        raise SystemExit("Internal validation failed: malformed R indexing")

    backup_paths = list(targets)
    if singular.exists():
        backup_paths.append(singular)
    backup_once(root, backup_paths)

    # Prepare all bytes before any atomic replacements.
    prepared = {path: content.encode("utf-8") for path, content in targets.items()}
    for path, data in prepared.items():
        status = "unchanged" if path.exists() and path.read_bytes() == data else (
            "updated" if path.exists() else "created"
        )
        atomic_write(path, data.decode("utf-8"))
        print(f"{status:9} {path.relative_to(root)} ({len(data)} bytes)")

    if singular.exists():
        old = singular.read_text(encoding="utf-8", errors="replace")
        if is_old_converter_skill(old):
            singular.unlink()
            print("removed   SKILL.md (obsolete singular skill; backup retained)")
        else:
            print("kept      SKILL.md (content was not recognized as the obsolete skill)")

    # Verify actual on-disk state.
    for path, data in prepared.items():
        if path.read_bytes() != data:
            raise SystemExit(f"Post-write verification failed: {path}")

    print("\nDone. The R script now produces SVG and PDF assets in assets/external/.")
    print("Next commands:")
    print("  Rscript tools/figures.R")
    print("  pretext build web")
    print("  pretext build runestone")
    print("  pretext build print")
    print("\nNote: existing .ptx files still containing embedded Asymptote are not")
    print("rewritten by this policy migration. Convert their <image> elements to")
    print("extensionless R-generated sources in the next content-maintenance batch.")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except KeyboardInterrupt:
        print("Interrupted; no non-atomic write was performed.", file=sys.stderr)
        raise SystemExit(130)
