# Project Conventions

These conventions govern the conversion of open educational resources into
PreTeXt for this repository. They are normative. Generated content, generator
scripts, source-ledger entries, chapter wiring, figures, and exercises must all
follow them.

When these conventions conflict with general conversion guidance, this file
wins.

## 1. Project purpose

This project converts openly licensed statistics material into a coherent,
accessible, interactive PreTeXt textbook for Runestone Academy.

The goal is not a page-for-page transcription. Source pages may be combined,
split, corrected, reorganized, or supplemented when that improves the book.
All substantive changes must be traceable in `SOURCES.md`.

## 2. Normative source files

Before generating a batch, read:

- `CONVENTIONS.md`
- `SOURCES.md`
- every chapter wrapper the batch will modify
- every existing section the batch will modify
- `tools/figures.R`
- the actual source pages being converted

Do not work from page titles, memory, stale excerpts, or guessed repository
state.

If a source URL fails, locate and read the actual page before proceeding. If
the repository cannot be read, stop and ask for the current state to be pushed
or supplied. Never invent context for an existing file.

## 3. Delivery format: Python generators only

Every batch is delivered as one runnable Python script in `tools/`, normally
named:

    tools/build_batch_NN.py

Git patches are not used.

The generator must perform the entire batch without manual follow-up edits. It
must create or update all required files, including:

- new or revised `.ptx` section files
- chapter wrapper `xi:include` wiring
- `SOURCES.md` conversion-status and provenance entries
- `tools/figures.R` additions or revisions
- any other source or configuration file required by the batch

A batch is incomplete if the user must paste includes, ledger entries, R code,
or other edits by hand after running the generator.

The generator must be safe to rerun. It must either make no duplicate changes
or replace a batch-owned block deterministically.

Typical usage:

    python3 tools/build_batch_NN.py

Use `--force` only when the batch intentionally supports replacing generated
section files. Existing unrelated content must never be overwritten merely
because `--force` was supplied.

## 4. Generator requirements

### 4.1 Raw strings for PreTeXt

Every complete `.ptx` body in a Python generator must use a raw triple-quoted
string:

    BODY = r'''<?xml version="1.0" encoding="UTF-8"?>
    ...
    '''

A non-raw string can silently convert `\frac` into a formfeed and `\bar` into
a backspace.

The generator must reject control-character corruption before writing any
file. At minimum, scan all generated PreTeXt bodies for:

- formfeed, `\f`
- backspace, `\b`
- vertical tab, `\v`

Exit nonzero before making changes if any are found.

### 4.2 Atomic and failure-safe writes

Validate all generated content before changing repository files.

For each existing file that will be changed:

1. Read its current content.
2. Compute the complete new content in memory.
3. Validate the result.
4. Write to a temporary file in the same directory.
5. Replace the original atomically.

Do not leave a file half-written if validation or execution fails.

The generator should make a timestamped backup only when a destructive
replacement cannot be reconstructed from version control. Routine batch-owned
block replacement does not require backups.

### 4.3 Idempotent marker blocks

Edits to shared files must use unique marker comments. For batch 5, for
example:

    <!-- batch:05:start -->
    ...batch-owned content...
    <!-- batch:05:end -->

On rerun, replace the content between the markers. If the markers are absent,
insert the block at the designated stable anchor. Never append a second copy.

Use the comment syntax appropriate to the target file:

- Markdown and XML: `<!-- batch:NN:start -->`
- R: `# batch:NN:start`
- Python: `# batch:NN:start`

If only one of a start/end marker pair exists, stop with a clear error instead
of guessing.

### 4.4 Existing-file anchors

Insertions into existing files must use stable semantic anchors, not hardcoded
line numbers.

Examples:

- place new chapter includes after a named existing include
- place source-ledger provenance before `## Datasets`
- place conversion-status rows inside the existing status table
- place R code after the appropriate chapter/section heading

If an expected anchor is absent or occurs more than once when uniqueness is
required, stop and explain the mismatch.

### 4.5 Skip and overwrite behavior

A generator must not silently overwrite an existing section file.

Default behavior:

- create a missing generated section
- leave an existing section unchanged and report it
- still verify shared-file wiring and batch markers

With `--force`:

- replace only files explicitly owned by that batch
- never replace unrelated files
- still perform all validations before writing

### 4.6 Reporting

For every file created or changed, print:

- the path
- whether it was created, updated, unchanged, or skipped
- the final byte count

At the end, report:

- all section files handled
- all chapter includes verified
- the `SOURCES.md` block verified
- the `tools/figures.R` block verified
- duplicate-ID scan status
- control-character scan status
- Asymptote validation status
- recommended build commands

Exit nonzero on any failed validation.

## 5. Naming and IDs

Use lowercase, hyphen-separated, descriptive IDs. Never encode display
numbers in an `xml:id`; PreTeXt owns numbering.

| Prefix | Applies to | Example |
|---|---|---|
| `ch-` | chapter file and chapter ID | `ch-data-display` |
| `sec-` | section file and section ID | `sec-histograms` |
| `subsec-` | subsection | `subsec-bin-width` |
| `def-` | definition | `def-zscore` |
| `thm-` | theorem | `thm-empirical-rule` |
| `ex-` | worked example | `ex-sweatpants` |
| `check-` | reading check | `check-bar-height` |
| `fig-` | figure | `fig-oscar-ages` |
| `image-` | image inside a figure | `image-oscar-ages` |
| `table-` | table | `table-birthweight` |
| `asm-` | assemblage | `asm-endpoint-rule` |
| `summary-` | conclusion ID | `summary-mean-median` |

Every structural element that may be cross-referenced should receive an ID.

Before writing files, scan the entire repository for every proposed ID. After
constructing the new repository state in memory, perform a repository-wide
duplicate-ID scan. A descriptive ID can still collide with an earlier one.

A portable Python duplicate-ID check is preferred over shell-specific `grep`
options. The generator must fail before writing if any new duplicate would be
introduced.

## 6. Section structure

A normal section follows this order:

1. objectives
2. introduction
3. subsections
4. conclusion

Section titles use Title Case. Subsection titles use sentence case.

A division contains loose paragraphs or subdivisions, never both at the same
level. Chapter-level prose belongs in `<introduction>`.

Current PreTeXt deprecates a `<title>` inside `<introduction>` or
`<conclusion>`. Do not add one. A conclusion is identified with a descriptive
ID such as `summary-mean-median` and functions as the section summary without
a child title.

The usual rhythm is:

    prose -> worked example -> reading check

Target a section that can be read in one sitting, usually about 1,500-3,000
words and 5-10 reading checks. More than 10 checks usually indicates that the
section should be split.

Source-page boundaries are not section boundaries. Combine two to four source
pages when they form one idea; split a page when it contains distinct ideas.
Record the mapping in `SOURCES.md`.

## 7. Learning objectives

Objectives must be observable and verb-first. Avoid vague verbs such as
"understand" when a measurable action is available.

Good examples:

- Calculate the mean of a quantitative data set.
- Explain why an outlier changes the mean more than the median.
- Choose an appropriate measure of center from a distribution's shape.

## 8. Reading checks

Reading checks are Tier 1 interactions for Runestone.

### 8.1 Multiple choice

Multiple-choice checks are the default. Every item must have:

- exactly four choices
- `randomize="yes"`
- one correct choice unless the prompt explicitly supports another structure
- feedback on every choice, including the correct one

Distractors must represent plausible student errors, such as:

- sign reversal
- reversed inequality
- wrong formula direction
- count-versus-percentage confusion
- mean-versus-median confusion
- wrong denominator
- failure to order data

Wrong-answer feedback names the misconception and explains how to correct it.
Never use feedback that says only "Incorrect."

### 8.2 True/false

Use true/false sparingly, usually no more than one per section, for a subtle
point worth isolating.

Feedback begins with the word `True` or `False`, followed by the reasoning.

### 8.3 Recorded short answer

Include one or two recorded short-answer items per section when interpretation
matters.

Use `<response/>` inside `<statement>`. The prompt must specify an expected
length, such as "in two or three sentences."

The `<solution>` must contain two paragraphs:

1. a model response
2. what distinguishes a strong response from an adequate one

Configure these for the project's interaction-credit mode on Runestone.

## 9. Cross-references

Reference elements by ID, never by a hardcoded display number.

An `<xref>` to an unnumbered target, including an assemblage, aside,
objectives block, or paragraph, requires `text="title"` when the target does
not otherwise supply suitable generated text. Omitting it can cause a build
failure.

All referenced IDs must exist in the repository state produced by the
generator.

## 10. PreTeXt markup

Use semantic PreTeXt markup rather than typographic substitutions.

| Need | Use |
|---|---|
| Inline math | `<m>...</m>` |
| Display math | `<md><mrow>...</mrow></md>` |
| Em dash | `<mdash/>` |
| En dash | `<ndash/>` |
| Nonbreaking space | `<nbsp/>` |
| Quotation | `<q>...</q>` |
| Code or commands | `<c>...</c>` |
| First use of a term | `<term>...</term>` |
| Emphasis | `<em>...</em>` |
| Source title | `<em>...</em>` |

Do not introduce deprecated `<me>` or `<men>` elements. Existing deprecated
math should be migrated in a dedicated cleanup batch rather than mixed into an
unrelated content batch.

Use a bare `$` for currency in prose. Do not use the deprecated `<dollar/>`
element. A currency symbol in prose is not a math delimiter.

Percent signs inside math must be escaped, for example:

    <m>95\%</m>

Do not use Markdown syntax inside PreTeXt prose.

## 11. Figures and accessibility

Asymptote is the default production format for diagrams.

Every `<image>` must contain a `<description>` that gives a meaningful prose
account of:

- the graph type
- axes and units
- overall shape
- notable values, groups, gaps, or outliers
- the interpretation students should draw

A description that merely repeats the caption or lists the axes is not
sufficient.

Every Asymptote figure must have a reproducible R equivalent in
`tools/figures.R`. The generator must create or update the corresponding
batch-owned R block automatically.

When source data is unavailable, reconstruct a self-consistent data set that
reproduces every published anchor value. Record the reconstruction and its
constraints in `SOURCES.md`.

For histogram code in R, every `hist()` call must use `right = FALSE`, because
the book teaches left-closed bins `[a, b)`.

Histograms intended for visual comparison must share horizontal range, bin
width, and vertical scale.

## 12. Asymptote rules

### 12.1 XML escaping

Inside a PreTeXt `<asymptote>` element, XML-sensitive comparison operators
must be escaped:

- `<` as `&lt;`
- `>` as `&gt;`
- `<=` as `&lt;=`
- `>=` as `&gt;=`

When extracting code into a standalone `.asy` file for testing, decode those
entities back to normal Asymptote operators.

### 12.2 Array initialization

Do not assume arrays allocated with `new int[n]`, `new real[n]`, or similar
constructors contain zero values. Asymptote can report an uninitialized read.

This is invalid:

    int[] count = new int[101];
    count[k] += 1;

Initialize every element before reading or incrementing it:

    int[] count = new int[101];
    for (int i = 0; i < count.length; ++i) {
      count[i] = 0;
    }

In embedded PreTeXt, encode the loop comparison as `i &lt; count.length`.

For a small fixed dotplot, prefer literal `pair[]` coordinates. They are easier
to audit, reproduce in R, and compile reliably than mutable stacking logic.

### 12.3 Markdown-escape corruption

Do not introduce Markdown escapes into Asymptote. In particular, multiplication
is `*`, not `\*`.

A generator should scan embedded Asymptote blocks for suspicious sequences
such as `\*` and `\_`. Do not ban all backslashes, because legitimate TeX labels
may contain them.

Do not infer that a backslash visible in a chat-rendered paste exists on disk.
Verify the actual file before diagnosing an escape problem.

### 12.4 Compilation tests

Every new or changed Asymptote figure must be tested as both SVG and HTML before
the batch is considered complete.

The generator should:

1. extract each embedded Asymptote block
2. decode XML entities
3. write a temporary `.asy` file
4. run `asy -f svg`
5. run `asy -f html`
6. report the figure ID and result
7. remove temporary files

If Asymptote is not installed, report the skipped validation clearly. Do not
claim that the figure compiled.

Testing only SVG is insufficient for a web build.

## 13. Generated assets

Generated assets are committed repository assets. Runestone builds must not
depend on Asymptote being installed on the remote builder.

After figure data or Asymptote changes, regenerate assets:

    pretext generate asymptote

Then add the generated files under the repository's configured generated-assets
directory.

The generator may invoke asset generation only when the project environment is
known to support it. Otherwise it must print the exact command and verify that
the expected source figures are wired correctly.

## 14. Source fidelity and repairs

Source material can contain arithmetic errors, inconsistent counts, broken
widgets, missing data, dropped inequality endpoints, and conflicting summaries.
Verify claims instead of copying them blindly.

Every repair must be documented in `SOURCES.md` with:

- source page title and URL or slug
- resulting PreTeXt section ID
- erroneous or incomplete source statement
- correction or reconstruction
- reasoning or calculation
- provenance of any replacement data

Material added for pedagogy must be marked `Added, not in source.`

Broken source interactives are replaced with native PreTeXt reading checks
covering the same idea.

Prefer an authoritative real data set when one exists. Verify all stated claims
against it.

## 15. `SOURCES.md`

Every generator updates `SOURCES.md` automatically and idempotently.

For each batch, update:

- the conversion-status table
- the detailed page-to-section mapping
- all repairs
- all reconstructed data
- all added material
- relevant dataset provenance

Use a marker block such as:

    <!-- batch:05:start -->
    ...
    <!-- batch:05:end -->

Place detailed provenance before the stable `## Datasets` heading when that
heading exists. Preserve the file's existing organization and table columns.

If the batch row already exists outside the marker block, stop rather than
creating a duplicate.

## 16. Chapter wiring

Every generator updates chapter wrappers automatically.

For each generated section:

- add exactly one `xi:include`
- place it in pedagogically correct order
- preserve the wrapper's existing formatting and path style
- verify that the referenced file exists
- verify that the include is not duplicated elsewhere

If the expected neighboring include is missing, stop instead of inserting at a
guessed location.

## 17. Attribution

Every section conclusion ends with an attribution paragraph naming:

- the original work
- the publisher
- the license
- provenance of any real data used

Typical form:

    <p>
      Adapted from <em>Concepts in Statistics</em>
      (SUNY / Lumen Learning), CC BY 4.0.
    </p>

Add data provenance to the same paragraph when applicable.

## 18. Build and verification

Before a batch is considered complete:

1. Run the generator once.
2. Run it again and confirm that the second run is idempotent.
3. Confirm no duplicate `xml:id` values exist.
4. Confirm no generated body contains control characters.
5. Compile every new Asymptote figure as SVG and HTML.
6. Regenerate required assets.
7. Build the web target.
8. Build the Runestone target before pushing.
9. Build print periodically to catch HTML-only assumptions.
10. Read each new section from beginning to end.
11. Verify every reading-check answer and every feedback branch.
12. Confirm that every image has a meaningful description.
13. Confirm that `SOURCES.md`, chapter wrappers, and `tools/figures.R` were
    updated by the generator.

Typical commands:

    python3 tools/build_batch_NN.py
    python3 tools/build_batch_NN.py
    pretext generate asymptote
    pretext build web
    pretext view web
    pretext build runestone
    pretext build print

A newer PreTeXt release notice is informational. Upgrade the project in a
separate maintenance task unless the current batch specifically requires it.
Do not mix a CLI/project-format upgrade into a content conversion batch.

## 19. Configuration warnings

Keep the external-assets directory setting in exactly one place. If
`directories/@external` is specified in both `docinfo` and the publication
file, PreTeXt uses one value and emits a warning. Resolve that configuration in
a dedicated maintenance change.

Do not combine unrelated repository-wide cleanup with a content batch unless
the cleanup is necessary for the batch to build.

## 20. Known gotchas

| Symptom | Likely cause | Resolution |
|---|---|---|
| Formula contains invisible junk | A `.ptx` body lost its raw-string prefix | Restore `r'''...'''` and run the control-character check |
| Asymptote reports an uninitialized array value | An array element was incremented before initialization | Initialize every element or use literal coordinates |
| Asymptote works standalone but XML fails | Raw `<` or `>` remains in the embedded block | Escape operators as XML entities |
| SVG works but web asset fails | HTML target was not tested | Compile both `asy -f svg` and `asy -f html` |
| Duplicate-ID build error | A proposed ID already exists elsewhere | Run a repository-wide duplicate-ID scan before writing |
| Cross-reference tries to use a number for an unnumbered target | Missing `text="title"` | Add the required text mode or reference a numbered target |
| Section contents disappear | Loose content and subdivisions were mixed | Restructure the division |
| Reading checks appear as ordinary links or vanish | Publication or Runestone interaction configuration is wrong | Check target configuration and exercise structure |
| Generated figure is missing on Runestone | Generated assets were not regenerated and committed | Run asset generation and commit the output |
| Currency markup causes deprecation warnings | Deprecated `<dollar/>` was used | Use a bare `$` in prose |
| Conclusion title is ignored | `<title>` was placed in `<conclusion>` | Remove the child title and retain a `summary-...` ID |
| Display math causes deprecation warnings | Deprecated `<me>` or `<men>` was added | Use `<md>` with `<mrow>` |
| Batch duplicates ledger or R content on rerun | Shared-file edits were appended without markers | Replace an idempotent batch-owned marker block |

## 21. Completion standard

A batch is complete only when one Python command can produce the entire intended
repository state from the current checked-out project, including source files,
chapter wiring, source ledger, reproducibility code, and validations.

No manual paste-in steps are part of an acceptable batch delivery.
