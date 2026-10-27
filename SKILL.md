---
name: OER to PreTeXt Conversion
description: Convert open-license textbook pages (Lumen, OpenStax, LibreTexts) into PreTeXt sections with interactive reading checks, delivered as a single runnable Python batch script that also updates the project's source ledger.
---

# OER to PreTeXt Conversion

Convert open-license textbook web pages into PreTeXt source for an
interactive textbook, typically hosted on Runestone Academy.

## Before writing anything

1. **Fetch the actual pages.** Never work from titles or memory. If a URL
   404s or returns site boilerplate, search for the real slug and refetch.
2. **Fetch the project's `CONVENTIONS.md` and `SOURCES.md`** from the
   repository if one exists. They are normative and override anything here.
3. **Fetch the chapter file** you will be modifying, so include ordering
   and existing `xml:id` values are known rather than guessed.

## Deliverable: one script, not many code blocks

Output a single Python file that writes all the `.ptx` files, rewrites the
chapter wrapper, writes any companion R file, **and appends the source
ledger entries to `SOURCES.md`**. The user pastes once and runs once.

Requirements:

- Every `.ptx` body is an `r"""..."""` **raw string**. Without the `r`,
  `\frac` becomes a formfeed and `\bar` a backspace, silently corrupting
  every formula.
- **Keep Python scaffolding lines under ~55 characters.** Long lines wrap
  in chat UIs and the wrap arrives as a real newline, producing syntax
  errors. Line length inside the XML strings is harmless.
- Use `pathlib.Path.cwd()`, never `__file__` — the user may pipe the
  script to the interpreter.
- Validate before writing: abort if any body contains control characters
  or is missing its XML declaration.
- Skip existing files unless `--force`; back up any file being rewritten.
- Print each file written with its byte count, then the resulting section
  order and the next command to run.

## Updating the source ledger

The script appends its conversion record to `SOURCES.md` automatically.
This must be **idempotent** — re-running, including with `--force`, must
not duplicate entries.

Pattern:

- Give the batch a unique marker comment, e.g. `<!-- batch:03 -->`,
  placed as the first line of the block it writes.
- Before writing, read `SOURCES.md` and check for that marker. If present,
  print `ledger entry already recorded` and skip; if `--force` is passed,
  replace the existing block in place rather than appending.
- Insert the block **before** a stable trailing section such as
  `## Datasets` when one exists, so the file stays organized as it grows.
  Fall back to appending at the end if no anchor is found.
- If `SOURCES.md` does not exist, create it with a minimal header rather
  than failing.
- Also update the conversion-status table when the project keeps one,
  matching its existing column layout.

The ledger block records, for each converted page: the source slug, the
resulting `xml:id`, every repair made with the erroneous text and the
correction, every dataset reconstruction, and anything marked
*added, not in source*.

Still print the ledger block to the console as it is written, so the user
can see what was recorded without opening the file.

## Section structure

```
objectives -> introduction -> subsections -> conclusion
```

Each subsection: prose -> worked example -> reading check. Section titles
in Title Case, subsection titles in sentence case. The conclusion is
titled "Summary" and ends with an attribution paragraph naming the
original work, publisher, license, and the provenance of any real data.

**Source page boundaries are not section boundaries.** OER platforms
split pages for LMS pacing. Consolidate related pages into one section
when they form a single idea; split a page carrying two. Target a
section readable in one sitting.

## Reading checks

Default to multiple choice with exactly four options, `randomize="yes"`,
and `<feedback>` on every option including the correct one. Distractors
must encode real student errors — sign flips, reversed inequalities,
count-versus-percentage confusion, formula applied in the wrong
direction. Feedback on a wrong answer names the specific misconception
and cross-references the relevant element. Never "Incorrect."

Use true/false sparingly, about one per section, for a subtlety worth
isolating. Feedback opens with the word True or False.

Include one or two recorded short-answer items per section using
`<response/>` inside `<statement>`. Always specify a length in the
prompt. The `<solution>` gets two paragraphs: a model answer, then what
separates a strong answer from an adequate one.

Target five to ten checks per section. More than ten suggests the
section should be split.

## Markup discipline

- `<m>` for inline math, `<me>` for display. Never `$`.
- `<mdash/>`, `<ndash/>`, `<nbsp/>`, `<q>`, `<c>`, `<term>`, `<em>`.
- Escape percent signs in math: `<m>95\%</m>`.
- In Asymptote blocks, `<` and `>` must be `&lt;` and `&gt;`.
- **A division contains loose paragraphs or subdivisions, never both.**
  Chapter prose goes in `<introduction>`.
- `<xref>` to an unnumbered target — assemblage, aside, paragraphs,
  objectives — **requires `text="title"`** or the build fails.

## Figures

Asymptote inline by default; it builds inside PreTeXt with no external
pipeline. Every `<image>` needs a `<description>` giving a full prose
account of what the graph shows — the shape and the reading, not just
the axes. This is an accessibility requirement.

Supply an R equivalent for every figure in a companion file, so the
underlying data is reproducible. Where the source omits its data,
reconstruct a dataset that reproduces every published anchor value and
say so explicitly in the ledger.

## Source fidelity

OER pages contain arithmetic and data errors. Fix them, and record every
fix in the ledger block the script writes.

Recurring error classes worth checking:

- A figure computed one way in a solution and stated differently in the
  summary
- Totals that do not follow from the stated counts
- Dropped "or equal to" in inequalities
- Under-specified frequency tables
- Percentages inconsistent with their own numerators

Prefer a real dataset where one exists. Verify stated claims against it.

Broken interactive widgets in the source are replaced with native
reading checks covering the same idea.

Adding material the source omits is encouraged where students stumble.
Mark such additions as "added, not in source."

## Flag, do not perform, destructive edits

When new content overlaps or supersedes something already in the
repository, say so explicitly and propose the edit. Do not silently
rewrite files outside the batch. The chapter wrapper and `SOURCES.md`
are the only existing files the script may modify.

## Response shape

1. One or two sentences on anything notable found while fetching
2. The batch script
3. Any outstanding conflicts with existing content, flagged
4. One specific thing to watch on the first build

The source-ledger entries no longer need to be reproduced in the
response — the script writes them.
