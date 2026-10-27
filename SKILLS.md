---
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

<!-- generator-migration-lessons:start -->

## Repository retrieval and local authority

When repository files must be inspected remotely, prefer GitHub's contents API or raw-content endpoint over rendered HTML. These preserve source bytes and XML markup more reliably. Decode Base64 content returned by the contents API before analysis.

Remote content is evidence for authoring the generator, but the user's local checkout is authoritative when the generator runs. The generator must inspect local files, validate semantic preconditions, and stop safely when their structure differs from what was expected. Never assume the remote default branch includes the user's latest local work.

## Migration state model

Every migration or repair generator must explicitly handle three valid states:

1. **Unmigrated:** make the intended changes.
2. **Partially migrated:** complete the migration without duplicating correct work.
3. **Already migrated:** validate the final state and report files as unchanged.

A mixed, contradictory, or ambiguous state is not a fourth valid state. Stop with an actionable diagnostic rather than guessing. Idempotency means that rerunning the generator validates and preserves an already-correct result.

## Stable preconditions and diagnostics

Use paired ownership markers whenever they exist. For unmarked legacy material, use stable executable or semantic anchors: IDs, assignments, function names, render calls, image sources, and neighboring structural elements. Never use decorative-comment width, exact hyphen counts, line numbers, or incidental whitespace as a required anchor.

For each failed precondition, report:

- the file inspected;
- the semantic anchor or state sought;
- the expected match count or valid states;
- the actual match count or observed state;
- whether any files had already changed;
- which dependent edits were intentionally withheld.

Prefer diagnostics such as "expected one `hw26` assignment and one `income` render call; found 0 and 1" over a generic "could not locate block."

## Correcting a failed generator

If a delivered generator fails because of an overly strict anchor or incomplete state handling, provide a corrected complete generator. Do not require a manual edit to work around the defect. The replacement must tolerate every safe partial edit the earlier run may have completed.

Repair the generator rather than broadly reverting the repository. Use backups only to recover from actual corruption, not as the routine response to a localized or safely interrupted migration.

## Graphics migration execution

For R graphics work, use `assets/R-generated/` for output and extensionless `R-generated/NAME` sources in PreTeXt. Use one `# r-figures:SECTION-ID:start` and `# r-figures:SECTION-ID:end` pair per section.

Construct and validate all proposed changes first. Update the R block, run the complete `Rscript tools/figures.R`, and verify all expected SVG/PDF pairs before installing new PTX references or ledger claims. If R fails, leave dependent PTX and `SOURCES.md` edits unapplied.

Reconcile datasets, complete count vectors, assertions, tables, descriptions, captions, calculations, and prose claims. Do not accept matching totals as proof that individual bins are correct.

For a completed Asymptote-to-R migration, verify no `<asymptote>` remains in the section and no duplicate R implementation exists.

## Migration delivery report

For a graphics migration, report:

- every PTX image ID migrated;
- every extensionless image source installed;
- the section marker pair used in `tools/figures.R`;
- every SVG/PDF asset stem generated and verified;
- whether `SOURCES.md` and chapter wiring changed;
- whether any Asymptote remains in the section;
- validations run and validations skipped;
- commands for web and print inspection.

<!-- generator-migration-lessons:end -->

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
