# Source Ledger

Provenance, page mapping, and repairs for every converted page.

Source: *Concepts in Statistics*, SUNY / Lumen Learning, CC BY 4.0
https://courses.lumenlearning.com/suny-wmopen-concepts-statistics/

Excluded by policy: all **StatTutor** and **Assignment** pages.

---

## Conversion status

| Module | Lumen pages | PreTeXt section | Status |
|---|---|---|---|
| Summarizing Data Graphically | Histograms (1 of 4) | `sec-histograms` | done |
| | Histograms (2 of 4) | `sec-histogram-bins` | done |
| | Histograms (3 of 4) | `sec-describing-distributions` | done |
| | Histograms (4 of 4) | `sec-comparing-distributions` | done |

OpenStax *Introductory Statistics* (separate source):

| Lumen page | PreTeXt section | Status |
|---|---|---|
| Introduction to the Normal Distribution | `sec-intro-normal` | done |
| The Standard Normal Distribution | `sec-standard-normal` | done |
| Using the Normal Distribution | `sec-using-normal` | done |

---

## Repairs

### Histograms (1 of 4)

**Frequency table incomplete and inconsistent.** Source gives only two
bin counts (48, 97) and the sum `97+42+15+3+1 = 158` for 100 cm and
above — five bins ending at 125 — while stating the range runs to 128 cm.
Reconstructed a complete 11-bin table totaling 507 that preserves both
published anchor counts, the 158 total, and the 79–128 range. Final three
bins set to 2, 1, 1.

**Percentage interpretation used a phantom number.** Source computes
31.2%, then writes "29.6 will wear a large" and "29.6% of the adults."
158/507 = 0.3116. Corrected to 31.2% throughout.

**Broken "Learn By Doing" widgets** replaced with 10 native reading
checks.

*Added, not in source:* relative-frequency axis figure; bin-width
discussion (later removed in favor of part 2); histogram vs. bar graph;
describing-a-distribution short answer.

### Histograms (2 of 4)

*Added, not in source:* explicit 21-value exam score dataset. Source
shows three histograms but never publishes the underlying scores.
Constructed a dataset consistent with every stated feature, including
the five students in the 70s and the described shape under each binning.

### Histograms (3 of 4)

**"56% (18 of 32) of the winners are under the age of 35."** Actual count
under 35 is 15 (46.9%). 18/32 = 56.25% exactly, and 18 is the count aged
**35 or younger**. Dropped "or equal to." Corrected throughout.

Companion claim "91% (29 of 32) under 50" verified exact against the real
list of Best Actress winners 1970–2001 — this is what confirmed the
dataset.

**Outlier interval misstated.** Source lists outliers in 60–65, 70–75,
75–80. Under the left-closed convention the book itself teaches, age 80
belongs to **80–85**. Corrected.

### Histograms (4 of 4)

**Smokers' 2000–3000 count stated two ways.** Observation paragraph:
"16 + 22 = 38, 38/74 = 51%." Summary paragraph: "40 of 74, 54%." The
first is correct; 38/74 = 51.4%. Corrected.

**Two smoker bins unspecified.** Source pins down seven of nine bins;
3000–3500 and 3500–4000 never appear. Reconstructed as 15 and 12 to
total 74 while preserving the stated slight right skew. Authoritative
data is `MASS::birthwt`.

### Using the Normal Distribution

**Q₃ stated two ways.** Exam percentile exercise gives `Q3 = 91.9` then
says the middle 50% runs to `91.1`. Correct: 81 + 0.6745(15) = 91.1.

**16th-percentile answer shows a `normalcdf` call** returning 0.9998 —
a probability, not a percentile. Correct: `invNorm(0.16, 5.85, 0.24)`
= 5.61 cm.

**"Middle 45%" solution computes the middle 40%** — uses the 30th and
70th percentiles. True middle 45% has tails of 0.275, giving 5.71 and
5.99 cm.

---

## Datasets

| Data | Source | R access |
|---|---|---|
| Hip girth, 507 adults | Heinz, Peterson, Johnson & Kerk (2003) | `openintro::bdims$hip.gi` |
| Birth weight, 189 mothers | Hosmer & Lemeshow, Baystate Medical Center, 1986 | `MASS::birthwt` |
| Best Actress ages 1970–2001 | AMPAS | hardcoded in `tools/figures.R` |### Why It Matters: Summarizing Data Graphically and Numerically
`/chapter/introduction-2` → folded into `ch-data-display`
chapter introduction. Too short to be a section; no reading
checks, no recorded credit.

### Categorical vs. Quantitative Data
`/chapter/what-is-data` → `sec-variable-types`

Broken "Learn By Doing" widgets (US Census sample; Consumer
Reports cereals) replaced with native reading checks.

*Added, not in source:* the numeric-but-categorical problem
(patient ID, zip code, coded survey responses) and the
order/difference test. The source does not raise this, and it is
the most common student error on this topic.

### Dotplots (1 of 2)
`/chapter/dotplots-1-of-2` → `sec-dotplots`

**Protein values reconstructed.** Source shows both graphs but
publishes no data. Built 21 children's cereals reproducing every
stated fact: range 1–6 g, exactly 10 cereals at 2 g, most at 1
or 2 g, one at 6 g. Cereal names are real; individual protein
values are not verified against Consumer Reports.

### Dotplots (2 of 2)
`/chapter/dotplots-2-of-2` → `sec-shape-center-spread`

**Sugar, calorie, phone-digit, and wrist data reconstructed.**
Each reconstruction reproduces all stated values: adult sugar
0–14 with mode 3 and typical range 0–6; children's sugar 1–15
with mode 12 and typical range 9–13; both overall ranges exactly
14; phone digits n = 47, roughly uniform; wrist data with two
high outliers and a non-outlier minimum.

*Added, not in source:* explicit statement that being the max or
min does not make a value an outlier. The source implies this
with color coding but never says it.

**Overlap:** `sec-describing-distributions` §shape-vocabulary
duplicates the shape definitions introduced here. Scheduled for
removal.