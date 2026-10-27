---
name: PreTeXt Statistics Converter
description: Convert open statistics source material into repository-ready PreTeXt batches using one complete, idempotent Python generator.
---

# PreTeXt Statistics Converter

Use this skill when converting source lessons into PreTeXt for this statistics textbook repository, revising an existing conversion batch, or diagnosing a batch-generated build failure.

## Governing rule

Read `CONVENTIONS.md` and `SOURCES.md` before doing any conversion work. They are normative. If this skill conflicts with repository conventions, the repository conventions win.

Deliver each batch as one downloadable Python generator. Do not deliver git patches, manual paste-in blocks, or instructions that leave routine repository edits for the user.

The generator must produce the complete intended repository state, including section files, chapter wiring, source-ledger updates, reproducibility code, and validation.

## Required inputs

Before drafting a batch, inspect:

- `CONVENTIONS.md`
- `SOURCES.md`
- the complete source pages being converted
- the current chapter wrapper
- nearby sections before and after the insertion point
- any existing files the batch will modify
- `tools/figures.R`
- current publication or build configuration when it affects output

Do not infer the structure of an existing file from rendered output, old conversation text, or a previous repository state.

If current file contents are unavailable, ask the user to push the repository state or provide the necessary files. Do not manufacture context lines, anchors, table layouts, or include order.

## Source analysis

For every source page:

1. Identify the learning goals and conceptual sequence.
2. Decide whether source-page boundaries should be preserved, combined, or split.
3. Inventory examples, exercises, figures, datasets, simulations, and widgets.
4. Verify every numerical claim and calculation.
5. Identify inaccessible, broken, or nonportable interactives.
6. Identify missing data, contradictory values, unclear endpoints, and unsupported claims.
7. Determine which material must be reconstructed or added for pedagogy.
8. Record every repair and addition for `SOURCES.md`.

Do not silently copy a source error. Correct it and document the correction.

When underlying data is unavailable, reconstruct a self-consistent dataset only if it reproduces all published anchor values. Clearly label the reconstruction in the source ledger and section attribution.

## Batch design

Organize material by ideas rather than source URLs. A typical section contains:

1. objectives
2. introduction
3. concept-focused subsections
4. worked examples
5. reading checks
6. conclusion
7. attribution

Keep section length and exercise density consistent with `CONVENTIONS.md`.

Use semantic, descriptive, repository-wide unique `xml:id` values. Never encode display numbers in IDs.

Before generating content, search the complete repository state for every proposed ID. Before writing files, scan the complete proposed state for duplicates.

## Interaction design

Replace broken or unsuitable source widgets with native PreTeXt interactions.

For multiple-choice reading checks:

- provide exactly four choices
- use `randomize="yes"`
- include one correct answer unless the prompt explicitly requires otherwise
- give feedback on every choice
- make distractors represent plausible misconceptions
- explain the error rather than merely marking it wrong

Use true/false sparingly and only for subtle claims worth isolating.

For recorded short responses:

- state the expected response length
- include `<response/>`
- provide a model response
- explain what distinguishes an adequate response from a strong one

Verify every answer, distractor, and feedback statement mathematically and conceptually.

## Figures

Prefer Asymptote for production diagrams and maintain a reproducible equivalent in `tools/figures.R`.

Every image must include a meaningful description covering the graph type, axes and units, shape, important values or features, and intended interpretation.

For small fixed dotplots, prefer literal `pair[]` coordinates over mutable counting logic.

Never assume that an Asymptote array allocated with `new int[n]`, `new real[n]`, or a similar constructor is zero-initialized. Initialize every element before reading or incrementing it.

Inside PreTeXt Asymptote blocks, XML-escape comparison operators. Decode those entities when extracting the code for standalone tests.

Test every new or changed Asymptote figure in both formats:

    asy -f svg figure.asy
    asy -f html figure.asy

Do not claim that a figure works merely because extraction succeeded or the SVG target compiled.

Check generated Asymptote for accidental Markdown escapes such as `\*` or `\_`. Do not diagnose a rendered chat escape as an on-disk error without first inspecting the actual file.

## Python generator contract

Name the batch generator according to repository conventions, normally:

    tools/build_batch_NN.py

The generator must make all required edits. This normally includes:

- creating or replacing batch-owned `.ptx` files
- adding chapter `xi:include` entries in pedagogical order
- updating detailed provenance in `SOURCES.md`
- updating the conversion-status table in `SOURCES.md`
- adding or replacing the batch-owned block in `tools/figures.R`
- making any other batch-required repository edit
- validating the proposed repository state
- reporting the result

Do not tell the user to add includes, ledger entries, or R code manually after running the generator.

### Raw strings

Store complete PreTeXt bodies in raw triple-quoted Python strings. This prevents commands such as `\bar` and `\frac` from becoming control characters.

Before writing, scan generated bodies for at least:

- formfeed
- backspace
- vertical tab

Abort before changing files if any are found.

### Idempotency

The generator must be safe to run repeatedly.

For shared files, use unique batch-owned marker blocks. Replace the existing block on rerun; do not append another copy.

Use the comment syntax appropriate to each file type. If only one marker of a start/end pair exists, abort with a clear error.

Use stable semantic anchors rather than line numbers. If an anchor is absent or unexpectedly duplicated, stop instead of guessing.

### Existing files

Do not silently overwrite existing section files.

Default behavior should create missing batch-owned sections and report existing ones. If `--force` is supported, it may replace only explicitly batch-owned files.

A force option must never overwrite unrelated content.

### Failure safety

Compute and validate all new file contents before writing anything.

Write through temporary files in the same directory and replace targets atomically. A validation or runtime failure must not leave a one-line file, partial file, or half-updated batch.

If the batch spans multiple files, prepare the entire transaction first. Do not update shared files if section validation has already failed.

### Complete shared-file edits

The generator must update chapter wrappers using the current repository's path and formatting style. It must add each section exactly once and verify that the referenced file exists.

The generator must update `SOURCES.md` without disrupting its current table structure or headings. It must record:

- source page and destination section mapping
- conversion status
- repairs
- reconstructed data
- added material
- replaced interactives
- dataset provenance

The generator must update `tools/figures.R` with reproducible data and calculations for all new figures. Histogram code must follow the repository's endpoint convention.

## PreTeXt markup

Follow the installed project's supported PreTeXt syntax and the repository's conventions.

For new display mathematics, use `<md>` with `<mrow>` rather than deprecated `<me>` or `<men>`.

Use a bare `$` for currency in prose rather than deprecated currency elements.

Do not place a `<title>` inside a traditional division's `<introduction>` or `<conclusion>` when the installed PreTeXt version deprecates and ignores it.

Use semantic elements for terms, quotations, emphasis, code, punctuation, and cross-references.

Never hardcode generated numbering. Reference targets by ID.

When cross-referencing an unnumbered target, use the appropriate explicit text mode required by PreTeXt.

## Validation before writing

Before changing repository files, validate the complete proposed state for:

- control characters in generated PreTeXt
- well-formed XML
- unique `xml:id` values repository-wide
- valid cross-reference targets
- exactly one chapter include per generated section
- complete and paired batch markers
- nonduplicated `SOURCES.md` rows and entries
- nonduplicated `tools/figures.R` blocks
- suspicious Asymptote escape sequences
- explicit Asymptote array initialization
- consistency between plotted data, prose, calculations, and R code
- presence of descriptions for every image
- presence of attribution and provenance

When available, compile extracted Asymptote before writing. If external tools are unavailable, report the skipped check accurately and provide the exact command the user should run.

## Validation after writing

After writing, the generator must verify the actual files again. At minimum:

- parse changed XML files
- scan all source files for duplicate IDs
- confirm all inserted chapter includes
- confirm the source-ledger marker block and status entries
- confirm the R marker block
- report file paths and byte counts

Recommend or run, as appropriate:

    pretext generate asymptote
    pretext build web
    pretext build runestone

Run the generator a second time conceptually or through an idempotency check. A second run must not create duplicate content.

## Diagnosing failures

Separate blocking errors from informational notices and unrelated deprecations.

For each message, determine:

- whether it blocks the build
- whether the current batch introduced it
- which file and ID it names
- whether it is a source error, generator error, asset error, configuration issue, or deprecation

Do not recommend reverting the entire repository when the generator owns only a small set of files. Identify exactly what it changed.

When diagnosing pasted source, verify actual on-disk text with a direct inspection command before assuming that chat-rendered backslashes or escapes exist in the file.

For Asymptote failures:

1. extract the exact diagram
2. decode XML entities
3. compile SVG
4. compile HTML
5. use the first direct Asymptote error rather than downstream missing-asset messages

A missing generated asset is often a consequence of an earlier compile failure, not the primary cause.

## Response and delivery

When the task is complete, provide:

1. one downloadable Python generator
2. concise run instructions
3. a summary of files the generator owns or modifies
4. a summary of source repairs and reconstructions
5. validation commands and any checks that could not be run
6. known visual or build items to inspect

Do not bury required actions in long prose. Do not provide a second manual-edit pathway.

If the user reports an error, correct the generator rather than supplying an isolated edit, unless the user explicitly requests only a diagnosis.

## Completion standard

A conversion batch is complete only when running one Python generator against the current repository state performs every necessary batch edit and leaves the project ready for asset generation and builds without manual paste-in work.
