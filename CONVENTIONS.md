# Project Conventions

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

Use svglite for SVG and the standard grDevices::pdf() device with family = "Helvetica" and useDingbats = FALSE for PDF. Do not require Cairo or XQuartz for ordinary statistical figures.

Every histogram must use left-closed bins `[a,b)`. Base R `hist()` calls must
set `right = FALSE`. Comparable histograms must share range, breaks, and scale.

Avoid relying on interactive devices, IDE state, working-directory changes, or
unseeded randomness. Set a seed for simulated data. Close every graphics device,
even when plotting fails.

The script must verify expected SVG and PDF files exist and are nonempty.

<!-- graphics-migration-lessons:start -->

### 11.1 Canonical paths and section markers

R-generated statistical figures belong in `assets/R-generated/`. A PreTeXt image references an asset as `R-generated/NAME`, without a filename extension. The R pipeline must generate both `assets/R-generated/NAME.svg` and `assets/R-generated/NAME.pdf` from the same data and plotting function.

Do not introduce alternate R-figure directories such as `assets/generated/`, `source/assets/generated/`, or `assets/external/`. Existing non-R assets are unaffected by this rule.

Every section-owned block in `tools/figures.R` uses exactly one marker pair:

    # r-figures:SECTION-ID:start
    ...
    # r-figures:SECTION-ID:end

Use the PreTeXt section ID for `SECTION-ID`. On rerun, replace the complete marked block; never append a second implementation for the same section. Batch-number markers may still be used in files whose ownership is genuinely batch-based, but R graphics ownership is section-based.

### 11.2 Stable anchors and targeted edits

Prefer paired ownership markers. When migrating unmarked legacy code, locate it with stable semantic anchors such as an `xml:id`, variable assignment, plotting-function name, render call, section ID, or chapter include. Do not depend on line numbers, indentation, whitespace, decorative comments, or an exact number of hyphens.

Every anchor expected to be unique must match exactly once. If it is absent or duplicated, stop before modifying dependent files and report the anchor and match count. After locating unmarked legacy R code, wrap it in the standard section marker pair so later runs do not repeat heuristic discovery.

Modify existing shared files with targeted Python string or XML operations. Do not rewrite an entire existing PTX, R, chapter, or ledger file merely to change one block. Preserve newline style, surrounding comments, whitespace, and unrelated content where practical. XML parsing is required for validation, but serializing an entire PTX tree is not required and should be avoided unless a canonical full rewrite is intentional.

### 11.3 Graphics transaction order

A generator that adds or changes R figures must use this transaction order:

1. Read all affected files and construct the complete proposed text state in memory.
2. Validate anchors, marker pairs, XML, IDs, references, and declared asset names before writing.
3. Install or replace the section-owned block in `tools/figures.R` atomically.
4. Run the complete `Rscript tools/figures.R` pipeline.
5. Verify every expected SVG and PDF exists and is nonempty, and parse each SVG as XML.
6. Only after successful asset generation, update PTX image references, chapter wiring, and `SOURCES.md` atomically.
7. Parse the final PTX and repeat the relevant repository checks.

If R generation fails, do not install new PTX references to assets that were not successfully generated. A failure may leave a valid R-block update in place, but must leave the prior PTX figure source and ledger state intact.

### 11.4 Data reconciliation and assertions

A statistical figure must agree with every representation of its data and conclusions:

- the authoritative or reconstructed dataset;
- computed frequencies and bin counts;
- assertions in `tools/figures.R`;
- PreTeXt tables;
- captions and image descriptions;
- worked calculations;
- percentages, totals, and aggregate claims in the prose;
- corresponding provenance notes in `SOURCES.md`.

When authoritative observation-level data are available, derive frequencies from those data instead of preserving stale transcribed vectors. Assert the complete expected count vector as well as the important aggregate claims used in the lesson. Totals alone are insufficient because offsetting bin errors can preserve a total.

If an assertion reveals stale authored material, reconcile all affected representations in the same generator. Record the correction and authority used in `SOURCES.md`.

### 11.5 Whole-pipeline failure behavior

`tools/figures.R` is a sequential production pipeline. One failed package check, assertion, device operation, or path operation can prevent every later figure from being generated. Diagnose the first direct R error; do not treat missing later assets as independent failures.

A generator must run the complete `tools/figures.R`, not only an isolated new block. This verifies that shared helpers and all earlier assertions still permit a clean production run.

### 11.6 Migration completeness

When a section is fully migrated from Asymptote to R, verify all of the following:

- no `<asymptote>` element remains in that section;
- every migrated `<image>` has the expected extensionless `R-generated/NAME` source;
- every source resolves to matching SVG and PDF assets under `assets/R-generated/`;
- the old implementation was removed rather than retained in parallel;
- no duplicate R block was introduced;
- captions, descriptions, IDs, widths, and surrounding content were preserved unless the batch intentionally revises them;
- the SVG and PDF are inspected in the built web and print outputs.

Remove embedded Asymptote source from a migrated PTX image. Delete only obsolete source-controlled assets that are uniquely owned by that image and explicitly identified by the generator. Do not broadly delete PreTeXt build directories, generated caches, or assets outside the generator's ownership.

<!-- graphics-migration-lessons:end -->

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
