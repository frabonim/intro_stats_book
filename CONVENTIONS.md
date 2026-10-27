# Authoring Conventions

Conversion of *Concepts in Statistics* (SUNY / Lumen Learning, CC BY 4.0)
and *Introductory Statistics* (OpenStax / Lumen, CC BY 4.0) into PreTeXt
for Math 107, hosted on Runestone Academy.

This file is normative. If generated output disagrees with it, the output
is wrong.

---

## 1. Purpose and audience

An interactive reader with **recorded reading checks** interleaved in the
prose. Students read, answer, and get credit for engaging. Questions are
comprehension gates, not computational practice.

**No randomization. No symbolic answer checking.** Every exercise is
Tier 1: multiple choice, true/false, or recorded short answer. If a
question seems to need randomized values, rewrite it as a conceptual
question instead.

---

## 2. Repository layout
intro_stats_book/ 
├── CONVENTIONS.md ← this file 
├── SOURCES.md ← provenance + repair ledger 
├── README.md 
├── LICENSE 
├── project.ptx 
├── requirements.txt 
├── publication/ 
│   ├── publication.ptx ← web target 
│   ├── runestone.ptx ← Runestone target 
│   └── print.ptx ← PDF target 
├── source/ 
│   ├── main.ptx 
│   ├── docinfo.ptx 
│   ├── frontmatter.ptx 
│   ├── backmatter.ptx 
│   ├── ch-.ptx ← chapter wrappers (includes only) 
│   └── sec-.ptx ← one file per section 
├── assets/ 
│   ├── external/ ← hand-made images, committed 
│   └── generated/ ← Asymptote output, COMMITTED (see §9) 
├── tools/ 
│   ├── build_batch_*.py ← generated batch writers 
│   └── figures.R ← R alternatives for all figures 
└── output/ ← gitignored


**One section per file.** Chapter files contain `xi:include` statements
and an `<introduction>`, nothing else.

---

## 3. Naming

| Prefix | Applies to | Example |
|---|---|---|
| `ch-` | chapter file and `xml:id` | `ch-data-display` |
| `sec-` | section file and `xml:id` | `sec-histograms` |
| `subsec-` | subsection `xml:id` | `subsec-bin-width` |
| `def-` | definition | `def-zscore` |
| `thm-` | theorem | `thm-empirical-rule` |
| `ex-` | worked example | `ex-sweatpants` |
| `check-` | reading check exercise | `check-bar-height` |
| `fig-` | figure | `fig-oscar-ages` |
| `image-` | image inside a figure | `image-oscar-ages` |
| `table-` | table | `table-birthweight` |
| `asm-` | assemblage | `asm-endpoint-rule` |

All lowercase, hyphen-separated, descriptive not numeric. **Never number
an `xml:id`** — numbering is PreTeXt's job and renumbering on
reorganization is the whole point.

Every structural element that might ever be cross-referenced gets an
`xml:id`, even if nothing references it yet.

---

## 4. Section template

Every section follows this shape:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<section xml:id="sec-NAME">
  <title>Title Case Title</title>

  <objectives>
    <ul>
      <li><p>Verb-first learning objective.</p></li>
    </ul>
  </objectives>

  <introduction>
    <p>Motivation. Why this section exists.</p>
  </introduction>

  <subsection xml:id="subsec-NAME">
    <title>Sentence case title</title>
    <p>Prose.</p>
    <example xml:id="ex-NAME"> ... </example>
    <exercise xml:id="check-NAME"> ... </exercise>
  </subsection>

  <conclusion>
    <title>Summary</title>
    <p>What to retain.</p>
    <p>Adapted from <pubtitle>SOURCE</pubtitle> (PUBLISHER), CC BY 4.0.</p>
  </conclusion>
</section>
Rhythm: prose → example → reading check, repeated. Roughly one reading check per major idea. Target 5–10 per section. If a section exceeds 10, it is probably two sections.

Section titles are Title Case. Subsection titles are sentence case.

---

## 5. Reading checks
Multiple choice — the default
xml

<exercise xml:id="check-NAME">
  <statement>
    <p>Question.</p>
  </statement>
  <choices randomize="yes">
    <choice correct="yes">
      <statement><p>Correct option.</p></statement>
      <feedback><p>Why it is right, restating the principle.</p></feedback>
    </choice>
    <choice>
      <statement><p>Distractor.</p></statement>
      <feedback><p>Names the specific misconception.</p></feedback>
    </choice>
  </choices>
</exercise>
Rules:

Four choices. Always exactly four.
randomize="yes" on every <choices>.
Every choice gets <feedback>, including the correct one.
Distractors encode real errors — sign flips, wrong formula direction, count-vs-percentage confusion, reversed inequality. Never filler.
Feedback on a wrong answer names the mistake and points to the relevant <xref> where useful. Never just "Incorrect."
True/false
xml

<exercise xml:id="check-NAME">
  <statement correct="yes">
    <p>Claim.</p>
  </statement>
  <feedback>
    <p>True/False, then the reasoning.</p>
  </feedback>
</exercise>
Use correct="no" for false statements. Feedback always opens with the word True or False, then explains. Use sparingly — roughly one per section, for a subtlety worth isolating.

Recorded short answer
xml

<exercise xml:id="check-NAME">
  <statement>
    <p>Prompt specifying length: "in one or two sentences...".</p>
    <response/>
  </statement>
  <solution>
    <p>A model answer.</p>
    <p>What separates a strong answer from an adequate one.</p>
  </solution>
</exercise>

Rules:

<response/> goes inside <statement>, after the prompt.
Always specify a length in the prompt.
<solution> has two paragraphs: a model answer, then a note on what distinguishes a good one. Never only the model answer.
1–2 per section. These carry the interpretation work.
On Runestone, set these to the interaction-credit autograde mode.
6. Cross-references
xml

<xref ref="ex-sweatpants"/>                  <!-- numbered target -->
<xref ref="asm-endpoint-rule" text="title"/> <!-- unnumbered target -->
Unnumbered targets require text="title". Omitting it is a build error, not a warning.

Unnumbered	Numbered
<assemblage>	<definition> <theorem>
<aside>	<example> <remark>
<paragraphs>	<figure> <table>
<objectives>	<me> with xml:id, divisions
Reference the element, never the number: write <xref ref="fig-oscar-ages"/>, not "Figure 2.3.1."

---

## 7. Markup conventions
Need	Use	Not
Inline math	<m>x</m>	$x$
Display math	<me> or <men> if referenced	$$
Em dash	<mdash/>	— or --
En dash (ranges)	<ndash/>	–
Non-breaking space	<nbsp/>	
Quotation	<q>text</q>	"text"
Code, commands, calculator syntax	<c>invNorm(0.9, 63, 5)</c>	italics
New term, first use	<term>histogram</term>	bold
Emphasis	<em>	<i>
Source title	<pubtitle>	italics
Quoted block	<blockquote>	
Percent signs in math must be escaped: <m>95\%</m>.

The structural rule that bites: a division contains loose <p> elements or subdivisions, never both at the same level. Chapter prose goes in <introduction>.

In Asymptote blocks, < and > must be written &lt; and &gt;.

---

## 8. Figures
Every <image> needs a <description> — a full prose account of what the graph shows, sufficient for a student who cannot see it. This is an accessibility requirement, not a nicety, and Title II compliance depends on it. Describe the shape and the reading, not just the axes.

xml

<figure xml:id="fig-NAME">
  <caption>What the figure shows and why.</caption>
  <image width="85%" xml:id="image-NAME">
    <description>Full prose description.</description>
    <asymptote>
      ...
    </asymptote>
  </image>
</figure>
Asymptote is the default — it builds inside PreTeXt with no external pipeline and produces vector output for all targets.

Every figure also gets an R equivalent in tools/figures.R, so the data is reproducible and the figure can be regenerated from source if a count changes.

⚠️ right = FALSE in every R hist() call. The book teaches left-closed bins [a, b). R's default is the opposite and would silently contradict the text.

When two histograms are to be compared, they must share horizontal range, bin width, and vertical scale (ylim in R).

---

## 9. Generated assets are committed
assets/generated/ is in version control, not gitignored.

Runestone builds from the repo. Committing the generated images means their build does not need Asymptote installed, and a fresh clone builds without pretext generate.

Regenerate and commit whenever a figure's data changes:

```bash
pretext generate asymptote
git add assets/generated
```
---

## 10. Source fidelity and repairs
Lumen's pages contain arithmetic and data errors. We fix them.

Every repair is logged in SOURCES.md with the page URL, the erroneous text, the correction, and the reasoning. Non-negotiable — this is a CC BY derivative and the changes must be traceable.

Common categories seen so far: internally inconsistent totals, a figure computed one way in the solution and stated another way in the summary, dropped "or equal to" in inequalities, percentages that do not follow from the stated counts, under-specified frequency tables.

When source data is incomplete, reconstruct a self-consistent version that preserves every published anchor value, and say so in SOURCES.md. Prefer the real dataset where one exists (openintro::bdims, MASS::birthwt).

Expanding beyond the source
Adding material the source omits is encouraged where students stumble. Mark such additions in SOURCES.md as added, not in source.

Broken interactives
Lumen's "Learn By Doing" and "Did I Get This" widgets are dead links. Replace each with native PreTeXt reading checks covering the same idea.

## 11. Attribution
Every section's <conclusion> ends with an attribution paragraph:

xml

<p>Adapted from <pubtitle>Concepts in Statistics</pubtitle>
(SUNY / Lumen Learning), CC BY 4.0. Birth weight data from Hosmer and
Lemeshow, Baystate Medical Center, Springfield, Massachusetts,
<m>1986</m>.</p>
Name the original work, the publisher, the license, and the provenance of any real dataset.

---

## 12. Sectioning policy
Lumen page boundaries are not section boundaries. Their pages are sized for LMS pacing. Consolidate 2–4 related pages into one PreTeXt section when they form a single idea; split a page that carries two.

Target: a section a student can read in one sitting, roughly 1,500–3,000 words with 5–10 reading checks.

Record the page-to-section mapping in SOURCES.md.

## 13. Batch generation protocol
New content arrives as a single Python script in tools/, which writes multiple .ptx files. One paste, one run.

Requirements for generated scripts:

Every .ptx body is an r"""...""" raw string. Without the r prefix, \frac becomes a formfeed and \bar a backspace, silently corrupting every formula.
A control-character check that exits nonzero if any body contains \f, \b, or \v.
Skip files that already exist unless --force is passed.
Print each file written with its byte count.
Chapter wiring (xi:include lines) emitted or reported, not left implicit.

## 14. Build and verify

```bash

pretext build web && pretext view web      # authoring loop
pretext build runestone                    # before pushing
pretext build print                        # periodically — catches
                                           # HTML-only assumptions
```

Before committing a batch:

1. pretext build web completes with no errors
2. Every new reading check answers correctly and shows feedback
3. Every figure renders with a description present
4. Read the section top to bottom — does the rhythm work?
5. SOURCES.md updated with pages converted and repairs made

---

## 15. Known gotchas
Symptom	Cause
<xref> wants to build text using a number	Unnumbered target; add text="title"
not well-formed on an Asymptote block	Raw < or >; escape to &lt; / &gt;
Reading checks render as blue links	<knowl exercise-inline="no"/> missing from publication file
Formulas contain invisible junk	A """ string lost its r prefix
Figure build fails, markup is fine	Asymptote not installed; use pretext build web -g
Section contents vanish	Loose <p> mixed with subdivisions

