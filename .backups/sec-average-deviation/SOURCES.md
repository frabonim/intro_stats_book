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
| | Mean and Median (1 of 2) | `sec-mean-median` | done |
| | Mean and Median (2 of 2) | `sec-choosing-center` | done |
| | Interquartile Range and Boxplots (1 of 3) | `sec-quartiles-iqr` | done |
| | Interquartile Range and Boxplots (2 of 3) | `sec-boxplots` | done |
| | Interquartile Range and Boxplots (3 of 3) | `sec-comparing-boxplots` | done |


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

**Graphics migration.** The three exam-score histograms are generated from the reconstructed 21-value dataset in `tools/figures.R` as SVG and PDF assets under `assets/R-generated`. Counts are computed with left-closed bins `[a,b)` and asserted against the published vectors: 6/9/6, 2/4/4/5/4/2, and 3/4/6/4/3/1.

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

**Graphics migration.** The Best Actress age histogram is generated from the 32 published ages in `tools/figures.R` as SVG and PDF assets under `assets/R-generated`. The script uses left-closed five-year bins `[a,b)` and asserts the histogram counts and the numerical claims used in the text.

### Histograms (4 of 4)

**Smokers' 2000–3000 count stated two ways.** Observation paragraph:
"16 + 22 = 38, 38/74 = 51%." Summary paragraph: "40 of 74, 54%." The
first is correct; 38/74 = 51.4%. Corrected.

**Birth-weight bin counts reconciled to the authoritative data.** The
left-closed 500-gram histograms are computed directly from
`MASS::birthwt`. The complete nonsmoker vector is 0/3/8/18/22/28/28/6/2
and the smoker vector is 1/1/6/22/16/17/10/1/0. These preserve the
published aggregate comparisons: low birth weight counts 29 versus 30,
3000–4000 gram nonsmoker count 56, 2000–3000 gram smoker count 38, and
macrosomia counts 8 versus 1.

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

<!-- batch:05 -->
### Mean and Median (1 of 2)
`/chapter/mean-and-median-1-of-2` → `sec-mean-median`

Three dead "Learn By Doing" widgets replaced with native
reading checks.

*Added, not in source:* the even-`n` median (source only ever
shows odd `n`); the caution that repeated values break the
"as much data below as above" claim, which the source states
without qualification; an ordering error check.

### Mean and Median (2 of 2)
`/chapter/mean-and-median-2-of-2` → `sec-choosing-center`

**Homework scores reconstructed to satisfy all four source pages.**
The source never publishes these 26 scores and reports only rounded
summaries. Standard Deviation (4 of 4) supplies further anchors for the
same student: Q1 82, Q3 89, IQR 7, and SD 17.6. An SD of 17.6 is
arithmetically impossible if the twenty-five non-zero scores all lie
between 80 and 90, so the earlier reconstruction was replaced rather
than extended.

Current dataset (26 integers, total 2127):

    0, 72, 74, 77, 80, 81, 82, 82, 83, 83, 84, 84, 84,
    85, 85, 86, 87, 87, 88, 89, 90, 91, 92, 92, 94, 95

It reproduces every published value: mean 81.808 (reported as 81.8),
median 84.5, Q1 82, Q3 89, IQR 7, and sample standard deviation 17.616
(reported as 17.6). Quartiles use `fivenum()`, the hinge convention
verified against the published Best Actress five-number summary used in
`sec-boxplots`; R's default `quantile(type = 7)` does not reproduce that
summary. Removing the 0 gives mean 85.08, median 85, SD 5.77 - the
contrast the source asserts but does not compute. Correcting the 0 to an
85 gives mean 85.08 and median 85, as `check-outlier-correction` states.
The zero moves the mean 3.27 points but the median only 0.5, a ratio of
just over six to one.

Dependent material reconciled in the same pass: the prose claim that the
twenty-five non-zero scores lie between 80 and 90 (they now run 72 to
95), the `image-outlier-scores` description, and the assertions in
`tools/figures.R`. The figure itself was migrated off embedded Asymptote,
which had the old scores hardcoded in the diagram source.

**Ten-score illustration unspecified.** Source says a zero
among 10 scores moves the mean "into the C grade range" but
gives no data. Reconstructed as 0, 80, 82, 84, 85, 85, 86,
87, 88, 88: mean 76.5, median 85.

**Income data not published.** Source gives only mean
$24,000 and median $16,900 for a 2000 census sample.
Reconstructed a frequency table per 1,000 people
(340, 232, 168, 100, 55, 35, 20, 15, 10, 10 across $10k bins,
plus 15 above $100k averaging $165k) reproducing the median
exactly and the mean to $23,980.

Dead PhET-style simulation at the end of the page replaced
with native reading checks.

*Added, not in source:* the term **resistant**, which the
source describes at length but never names; the skew-direction
rule (mean > median under right skew); the salary-with-founder
decision exercise.

**Graphics migration.** The homework-score dotplot and income histogram are generated by the marked `sec-choosing-center` block in `tools/figures.R` as SVG and PDF assets under `assets/R-generated/`. The PreTeXt source uses extensionless image references for web and print.

<!-- batch:iqr-boxplots:start -->
### Interquartile Range and Boxplots (1 of 3)
`/chapter/interquartile-range-and-boxplots-1-of-3/` → `sec-quartiles-iqr`

**Exam-score observations unavailable.** The source publishes Class A and Class B summaries and sample sizes but not the underlying scores. The comparison figure therefore plots the published summaries directly rather than inventing observations. Verified: both ranges are 55 and both medians are 74.5; the IQRs are 7.5 and 28.

**Fence illustration reconstructed.** The source publishes `Q1 = 15`, `Q3 = 18`, fences 10.5 and 22.5, and outliers 10, 24, 27, and 29, but not every plotted value. The R dotplot uses those anchors and an illustrative interior set. Added, not in source: values equal to a fence are not outside it; an outlier flag does not by itself justify deletion.

### Interquartile Range and Boxplots (2 of 3)
`/chapter/interquartile-range-and-boxplots-2-of-3/` → `sec-boxplots`

The Best Actress example reuses the 32 published ages already documented under Histograms (3 of 4). Its stated five-number summary is minimum 21, Q1 32, median 35, Q3 41.5, maximum 80; the upper fence is 55.75 and the high outliers are 61, 74, and 80.

**Four same-boxplot datasets unavailable.** The source image and simulation do not publish their observations. Replaced with an explicitly pedagogical schematic showing that sample size and interior pattern are hidden by a shared five-number summary. Added, not in source: the distinction between a fence and an observed whisker endpoint.

### Interquartile Range and Boxplots (3 of 3)
`/chapter/interquartile-range-and-boxplots-3-of-3/` → `sec-comparing-boxplots`

The source publishes the Best Actress summary and the Best Actor summary `31, 37, 42.5, 48, 76`, with IQR 11 and age 76 identified as the actor outlier, but does not publish the actor-age list on this lesson page. The actor comparison is therefore a summary-based schematic. Its right whisker endpoint is illustrative and is not presented as an observed published value.

**Shape language qualified.** The source infers right skew from half-ranges. Because different interior patterns can share a boxplot, revised this to "suggests right skew" and directs readers to dotplots or histograms for detailed shape.

**Graphics.** The three sections use six R-generated figures. `tools/figures.R` generates matching SVG/PDF assets under `assets/R-generated/` using section-owned marker blocks and asserts all published numerical anchors. Broken Learn By Doing widgets are replaced with native PreTeXt reading checks.
<!-- batch:iqr-boxplots:end -->

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

