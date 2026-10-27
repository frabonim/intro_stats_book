---
name: OER to PreTeXt Conversion
description: Convert open-license textbook pages (Lumen, OpenStax, LibreTexts) into PreTeXt sections with interactive reading checks, delivered as a single git patch file that adds sections, rewires chapters, and updates the project's source ledger.
---

# OER to PreTeXt Conversion

Convert open-license textbook web pages into PreTeXt source for an
interactive textbook, typically hosted on Runestone Academy.

## Before writing anything

1. **Fetch the actual pages.** Never work from titles or memory. If a URL
   404s or returns site boilerplate, search for the real slug and refetch.
2. **Fetch the project's `CONVENTIONS.md` and `SOURCES.md`** from the
   repository. They are normative and override anything here.
3. **Fetch every existing file the patch will modify** — the chapter
   wrapper, `SOURCES.md`, any section being edited. Context lines in a
   diff must match the target byte for byte, so they have to come from
   the live file, not from memory or from an earlier turn in the
   conversation.

If the repository cannot be read, say so and ask the user to push before
proceeding. Do not guess at context lines.

## Deliverable: one git patch

Output a single unified diff covering the whole batch — new section
files, the chapter wrapper rewiring, the companion R file, the
`SOURCES.md` ledger entry, and any deletions. The user saves one file and
applies it once.

Deliver it inside a fenced block marked `diff`, and name it
`tools/patches/batch-NN.patch`.

Apply instructions to give with every patch:

```
git apply --recount --check tools/patches/batch-NN.patch   # dry run
git apply --recount         tools/patches/batch-NN.patch   # apply
```

## Patch mechanics

These details are not negotiable; a malformed patch fails to apply.

- **Always instruct the user to pass `--recount`.** Hunk headers written
  by hand carry unreliable line counts. `--recount` makes git derive them
  from the hunk body instead, which removes the largest source of
  failure.
- **Omit `index` lines.** Do not fabricate blob hashes. `git apply` does
  not need them.
- **New files** take this form:

  ```
  diff --git a/source/sec-name.ptx b/source/sec-name.ptx
  new file mode 100644
  --- /dev/null
  +++ b/source/sec-name.ptx
  @@ -0,0 +1,1 @@
  +<?xml version="1.0" encoding="UTF-8"?>
  ```

- **Deleted files** use `deleted file mode 100644`, `--- a/path`,
  `+++ /dev/null`, and a body of `-` lines.
- **Every line of file content gets a `+` prefix**, including blank
  lines, which become a bare `+`.
- **Never emit trailing whitespace** on a `+` line. `git apply` treats it
  as an error by default.
- **One `diff --git` stanza per file**, in a sensible order: new files,
  then modifications, then deletions.
- **Keep content lines under about 72 columns.** This is already the
  house style for PreTeXt prose, and it matters here because a line long
  enough to wrap in a chat window arrives as a broken diff.
- For edits to existing files, quote **three lines of unchanged
  context** above and below each change, taken verbatim from the fetched
  file.

Tell the user to save the patch exactly — download it, or
`pbpaste > tools/patches/batch-NN.patch` — and never to retype it.

Committing is left to the user. Mention `git am` only if they ask for
automatic commit creation; plain `git apply` is more forgiving.

## When a patch fails to apply

Give this escalation in the response, once, briefly:

1. `git apply --recount --3way <patch>` — falls back to a merge, which
   usually succeeds when only surrounding context has drifted.
2. If that leaves conflicts, resolve them like any merge conflict.
3. If it fails outright, the working copy has diverged from what was
   fetched. Ask the user to push, then regenerate the patch against
   current state.

## Updating the source ledger

The patch includes a hunk against `SOURCES.md`. Re-application is
naturally prevented — the context will no longer match — so no guard
logic is needed, but still open each block with a marker comment such as
`<!-- batch:03 -->` so a human can scan the file.

Anchor the insertion **before** a stable trailing section such as
`## Datasets` when one exists, so the file stays organized as it grows.
Also update the conversion-status table, matching its existing columns.

The ledger block records, for each converted page: the source slug, the
resulting `xml:id`, every repair made with the erroneous text and the
correction, every dataset reconstruction, and anything marked
*added, not in source*.

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
say so in the ledger.

## Source fidelity

OER pages contain arithmetic and data errors. Fix them, and record every
fix in the `SOURCES.md` hunk.

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

## Edits to existing content

A patch can modify and delete files, so cleanup work is shippable rather
than merely described. Two rules:

- **Describe any destructive change in prose before the patch**, naming
  the file and what is being removed, so the user can decline it.
- **Keep destructive hunks separable.** Put removals in their own
  `diff --git` stanza so the user can drop that stanza and still apply
  the rest.

Never modify a file that was not fetched in this turn.

## Response shape

1. One or two sentences on anything notable found while fetching
2. Any edit to existing content, flagged in prose
3. The patch, in a `diff` fence
4. The two apply commands
5. One specific thing to watch on the first build

Ledger entries do not need to be reproduced in the response — the patch
writes them.
