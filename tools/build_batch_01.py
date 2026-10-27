#!/usr/bin/env python3
"""build_batch_01.py - dotplots and data types.

Run from the repository root:
    python3 tools/build_batch_01.py
    python3 tools/build_batch_01.py --force
"""

import pathlib
import shutil
import sys

ROOT = pathlib.Path.cwd()
SRC = ROOT / "source"
TOOLS = ROOT / "tools"

F = {}

# =============================================================
# Categorical vs. Quantitative Data
# =============================================================
F["sec-variable-types.ptx"] = r"""
<?xml version="1.0" encoding="UTF-8"?>

<section xml:id="sec-variable-types">
  <title>Categorical and Quantitative Variables</title>

  <objectives>
    <ul>
      <li><p>Identify the individuals and the variables in a
      data set.</p></li>
      <li><p>Distinguish between categorical and quantitative
      variables in context.</p></li>
      <li><p>Recognize categorical variables that are recorded
      using numbers.</p></li>
      <li><p>Explain why the type of a variable determines how
      it can be analyzed.</p></li>
    </ul>
  </objectives>

  <introduction>
    <p>Everything in this chapter depends on a distinction that
    sounds trivial and is not: some variables are measurements,
    and some are labels. Which kind you have determines which
    graphs are legitimate, which summaries mean anything, and
    which calculations are nonsense.</p>
  </introduction>

  <!-- ========================================================= -->
  <subsection xml:id="subsec-individuals-variables">
    <title>Individuals and variables</title>

    <p>Data consists of <term>individuals</term> and
    <term>variables</term> that give us information about those
    individuals.</p>

    <p>An individual can be a person, but it need not be. It can
    be an object, a place, a transaction, or an
    event<mdash/>whatever the rows of your data table represent.
    A variable is an attribute recorded about each individual: a
    measurement or a label.</p>

    <example xml:id="ex-medical-records">
      <title>Medical records</title>
      <statement>
        <p>In a study of factors connected to low birth weight,
        researchers recorded information about mothers who gave
        birth at a hospital in Massachusetts. Identify the
        individuals and the variables.</p>
      </statement>
      <solution>
        <p>The <em>individuals</em> are the
        patients<mdash/>the mothers.</p>
        <p>There are six <em>variables</em>:</p>
        <ul>
          <li><p>Mother's age at delivery, in years</p></li>
          <li><p>Mother's weight prior to pregnancy, in
          pounds</p></li>
          <li><p>Whether the mother smoked during pregnancy
          (yes, no)</p></li>
          <li><p>Number of doctor visits during the first
          trimester</p></li>
          <li><p>Mother's race (Caucasian, African American,
          Asian, and so on)</p></li>
          <li><p>Baby's birth weight, in grams</p></li>
        </ul>
        <p>Notice that the baby's birth weight is recorded as a
        variable about the <em>mother</em>, because the mother
        is the individual. Deciding what the individuals are is
        the first thing to settle about any data set, and it is
        not always obvious.</p>
      </solution>
    </example>

    <exercise xml:id="check-individuals">
      <statement>
        <p>A used-car dealership records the make, model, year,
        mileage, and sale price of every car it sold last year.
        What are the individuals in this data set?</p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement><p>The cars that were sold</p></statement>
          <feedback>
            <p>Correct. Each car gets one row, with five pieces
            of information recorded about it.</p>
          </feedback>
        </choice>
        <choice>
          <statement><p>The five pieces of information
          recorded</p></statement>
          <feedback>
            <p>Those are the variables, not the
            individuals.</p>
          </feedback>
        </choice>
        <choice>
          <statement><p>The customers who bought the
          cars</p></statement>
          <feedback>
            <p>Nothing was recorded about the customers. Every
            variable listed describes a car.</p>
          </feedback>
        </choice>
        <choice>
          <statement><p>The dealership</p></statement>
          <feedback>
            <p>There is only one dealership, so it cannot be
            what the rows represent. The data set has one row
            per car sold.</p>
          </feedback>
        </choice>
      </choices>
    </exercise>
  </subsection>

  <!-- ========================================================= -->
  <subsection xml:id="subsec-two-types">
    <title>Two types of variable</title>

    <definition xml:id="def-categorical">
      <title>Categorical variable</title>
      <statement>
        <p>A <term>categorical variable</term> takes category or
        label values and places each individual into one of
        several groups. Each observation falls in exactly one
        category, and the categories are mutually exclusive.</p>
      </statement>
    </definition>

    <definition xml:id="def-quantitative">
      <title>Quantitative variable</title>
      <statement>
        <p>A <term>quantitative variable</term> takes numerical
        values that represent some kind of measurement or count.
        Arithmetic on those values<mdash/>averaging them,
        subtracting one from another<mdash/>produces something
        meaningful.</p>
      </statement>
    </definition>

    <p>Return to <xref ref="ex-medical-records"/>. Whether the
    mother smoked is categorical: every mother is either a
    smoker or a nonsmoker, and those two groups do not overlap.
    Race is categorical for the same reason. Age is
    quantitative: a mother can be <m>18</m> years old or
    <m>40</m> years old, and the difference between those
    numbers means something real. Weight and birth weight are
    quantitative as well.</p>

    <p>Number of doctor visits is also quantitative. It takes
    only whole-number values, which makes it a <em>count</em>
    rather than a measurement, but counts are numbers you can
    meaningfully average: a group averaging <m>3.4</m> visits
    really did make more visits than a group averaging
    <m>1.2</m>.</p>

    <exercise xml:id="check-classify-basic">
      <statement>
        <p>Which of these variables from
        <xref ref="ex-medical-records"/> is
        <em>categorical</em>?</p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement><p>Whether the mother smoked during
          pregnancy</p></statement>
          <feedback>
            <p>Correct. It sorts each mother into one of two
            mutually exclusive groups, and the values are labels
            rather than measurements.</p>
          </feedback>
        </choice>
        <choice>
          <statement><p>Number of doctor visits in the first
          trimester</p></statement>
          <feedback>
            <p>This is a count, and counts are quantitative. An
            average number of visits is a meaningful
            quantity.</p>
          </feedback>
        </choice>
        <choice>
          <statement><p>Baby's birth weight in
          grams</p></statement>
          <feedback>
            <p>A measurement in grams is quantitative.</p>
          </feedback>
        </choice>
        <choice>
          <statement><p>Mother's weight prior to
          pregnancy</p></statement>
          <feedback>
            <p>Also a measurement, and therefore
            quantitative.</p>
          </feedback>
        </choice>
      </choices>
    </exercise>

    <exercise xml:id="check-count-quantitative">
      <statement correct="yes">
        <p>A variable that takes only whole-number values, such
        as the number of doctor visits, can still be
        quantitative.</p>
      </statement>
      <feedback>
        <p>True. What makes a variable quantitative is that its
        values are numbers on which arithmetic is meaningful,
        not that those numbers can take any value in between.
        Counts qualify.</p>
      </feedback>
    </exercise>
  </subsection>

  <!-- ========================================================= -->
  <subsection xml:id="subsec-numeric-categorical">
    <title>Numbers that are not measurements</title>

    <p>Here is where the distinction earns its keep. Some
    categorical variables are recorded using numbers, and
    nothing about the appearance of the data warns you.</p>

    <p>A patient ID number is written with digits, but averaging
    patient IDs produces nothing. A zip code is a number that
    does not measure anything; the fact that <m>18018</m> is
    larger than <m>18015</m> tells you nothing about either
    place. A survey that codes responses as
    <m>1 = \text{Democrat}</m>, <m>2 = \text{Republican}</m>,
    <m>3 = \text{Independent}</m> has a categorical variable
    wearing a numeric disguise. The mean of those codes would be
    a number, and it would mean nothing at all.</p>

    <assemblage xml:id="asm-numeric-test">
      <title>A test for numeric variables</title>
      <p>When a variable is recorded as numbers, ask two
      questions.</p>
      <p><em>Does the order mean anything?</em> Is a larger
      value genuinely more of something?</p>
      <p><em>Does the difference mean anything?</em> Is the gap
      between <m>3</m> and <m>5</m> the same kind of thing as
      the gap between <m>7</m> and <m>9</m>?</p>
      <p>If either answer is no, the variable is categorical no
      matter how it is written down.</p>
    </assemblage>

    <exercise xml:id="check-patient-id">
      <statement>
        <p>A data set of hospital patients includes a column
        labeled <q>Patient ID,</q> containing values like
        <m>10427</m> and <m>10428</m>. What type of variable is
        this?</p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement>
            <p>Categorical, because the numbers are labels
            rather than measurements</p>
          </statement>
          <feedback>
            <p>Correct. Patient <m>10428</m> is not <q>more</q>
            than patient <m>10427</m> in any sense, and the
            difference between the IDs measures nothing.</p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>Quantitative, because the values are numbers</p>
          </statement>
          <feedback>
            <p>Being written as a number is not enough. Apply
            the test in
            <xref ref="asm-numeric-test" text="title"/>:
            neither the order nor the differences carry
            meaning.</p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>Quantitative, because you could compute an
            average of them</p>
          </statement>
          <feedback>
            <p>You could compute it, but the result would be
            meaningless. Being computable is not the same as
            being meaningful.</p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>Neither<mdash/>identifiers are not
            variables</p>
          </statement>
          <feedback>
            <p>It is a variable: it is a piece of information
            recorded about each individual. It is simply a
            categorical one.</p>
          </feedback>
        </choice>
      </choices>
    </exercise>

    <exercise xml:id="check-cereal-shelf">
      <statement>
        <p>Consumer Reports analyzed <m>77</m> breakfast
        cereals, recording for each one its calories per
        serving, grams of sugar, and the shelf it sat on in the
        store, coded <m>1</m>, <m>2</m>, or <m>3</m> from the
        floor up. Which of these three variables is
        categorical?</p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement><p>Shelf</p></statement>
          <feedback>
            <p>Correct. The codes name three locations. Shelf
            <m>3</m> is not <q>three times</q> shelf <m>1</m>,
            and an average shelf of <m>2.1</m> describes no
            actual place.</p>
          </feedback>
        </choice>
        <choice>
          <statement><p>Calories per serving</p></statement>
          <feedback>
            <p>A measurement in calories. Quantitative.</p>
          </feedback>
        </choice>
        <choice>
          <statement><p>Grams of sugar</p></statement>
          <feedback>
            <p>A measurement in grams. Quantitative.</p>
          </feedback>
        </choice>
        <choice>
          <statement><p>All three are quantitative</p></statement>
          <feedback>
            <p>Two of them are. The shelf number labels a
            location rather than measuring a quantity.</p>
          </feedback>
        </choice>
      </choices>
    </exercise>
  </subsection>

  <!-- ========================================================= -->
  <subsection xml:id="subsec-why-type-matters">
    <title>Why the type decides the analysis</title>

    <p>How we analyze data depends on the type of data we
    have.</p>

    <p>Because quantitative data is numerical, there are clear
    numerical ways to describe an average, a spread, and a
    shape. The graphs in the rest of this
    chapter<mdash/>dotplots and histograms<mdash/>all place
    values on a numeric axis, which only works if the values are
    genuinely numeric.</p>

    <p>For categorical data, none of that applies. There is no
    average eye color and no spread of political party. Instead
    we work with <em>counts</em> and <em>proportions</em>: how
    many individuals fall in each category, and what share of
    the whole that represents. The corresponding graph is a bar
    graph, whose bars are drawn with gaps because the categories
    have no numeric order.</p>

    <p>This chapter concentrates on quantitative variables.
    Categorical variables get full treatment later, in the
    chapter on relationships in categorical data.</p>

    <exercise xml:id="check-own-variables">
      <statement>
        <p>Name one categorical variable and one quantitative
        variable that a college could record about each of its
        students. For each one, say in a few words why it is the
        type you claim.</p>
        <response/>
      </statement>
      <solution>
        <p>For example: <q>Residency status (on-campus,
        off-campus, commuter) is categorical, because it sorts
        each student into one of three groups and the values are
        labels. Credits completed is quantitative, because it is
        a count, and the difference between <m>30</m> and
        <m>60</m> credits means something real.</q></p>
        <p>The explanation is what matters here. A strong answer
        says <em>why</em><mdash/>labels versus measurements, or
        whether differences between values carry meaning. Watch
        out for a variable like <q>class year</q> coded
        <m>1</m> through <m>4</m>: the order does mean
        something, but it is still usually treated as
        categorical, and a borderline case explained well is a
        better answer than an easy case explained poorly.</p>
      </solution>
    </exercise>
  </subsection>

  <!-- ========================================================= -->
  <conclusion>
    <title>Summary</title>
    <p>Data consists of individuals and the variables recorded
    about them. A categorical variable sorts individuals into
    mutually exclusive groups using labels. A quantitative
    variable takes numerical values representing a measurement
    or a count, on which arithmetic is meaningful.</p>
    <p>Some categorical variables are recorded as
    numbers<mdash/>patient IDs, zip codes, coded survey
    responses. Test them by asking whether their order and their
    differences mean anything. If not, they are categorical.</p>
    <p>The type determines the analysis: quantitative variables
    get numeric summaries and dotplots or histograms;
    categorical variables get counts, proportions, and bar
    graphs.</p>
    <p>Adapted from <pubtitle>Concepts in Statistics</pubtitle>
    (SUNY / Lumen Learning), CC BY 4.0. Medical records example
    based on data from Hosmer and Lemeshow, Baystate Medical
    Center, Springfield, Massachusetts, <m>1986</m>.</p>
  </conclusion>
</section>
"""

# =============================================================
# Dotplots (1 of 2)
# =============================================================
F["sec-dotplots.ptx"] = r"""
<?xml version="1.0" encoding="UTF-8"?>

<section xml:id="sec-dotplots">
  <title>Dotplots</title>

  <objectives>
    <ul>
      <li><p>Explain why a table is a poor tool for seeing
      patterns in data.</p></li>
      <li><p>Distinguish a case-value graph from a
      dotplot.</p></li>
      <li><p>Read counts and values from a dotplot.</p></li>
      <li><p>Describe the distribution of a quantitative
      variable using a dotplot.</p></li>
    </ul>
  </objectives>

  <introduction>
    <p>When we work with data, it usually arrives as a table. A
    table is excellent for looking up one individual: you find
    the row, you read the value. But in data analysis we are
    rarely interested in an individual. We want to describe a
    <em>group</em>, and patterns in a group are nearly
    impossible to see in a table.</p>

    <p>For that reason, the first step in data analysis is
    almost always to graph the distribution of the variable. A
    good graph shows two things at once: the possible values of
    the variable, and the number of individuals at each
    value.</p>
  </introduction>

  <!-- ========================================================= -->
  <subsection xml:id="subsec-case-value">
    <title>A graph that does not help</title>

    <p>Consider the protein content of breakfast cereals
    marketed to children. The individuals are the cereals; the
    variable is grams of protein in a serving. Here is one way
    to graph it.</p>

    <figure xml:id="fig-cereal-casevalue">
      <caption>A <term>case-value graph</term> of protein
      content for <m>21</m> children's cereals. Each bar is one
      cereal.</caption>
      <image width="75%" xml:id="image-cereal-casevalue">
        <description>A horizontal bar chart with one bar for
        each of 21 named children's cereals, showing grams of
        protein per serving. Most bars extend to 1 or 2 grams.
        Cheerios has by far the longest bar at 6 grams, and Life
        reaches 4 grams. Because the cereals are listed
        alphabetically rather than by protein content, finding
        how many cereals share a given protein value requires
        scanning every bar individually.</description>
        <asymptote>
unitsize(0.80cm, 0.345cm);
defaultpen(fontsize(6.2pt));

string[] NAME = {
  "Apple Jacks","Cap'n Crunch","Cheerios",
  "Cinnamon Toast Crunch","Cocoa Puffs","Corn Pops",
  "Count Chocula","Froot Loops","Frosted Flakes",
  "Frosted Mini-Wheats","Fruity Pebbles","Golden Grahams",
  "Honey Graham Ohs","Honey Nut Cheerios","Honeycomb",
  "Kix","Life","Lucky Charms","Rice Krispies",
  "Smacks","Trix"};
real[] P = {2,1,6,1,1,1,1,2,2,3,2,1,2,3,2,2,4,2,2,2,1};

for (int i = 0; i &lt; NAME.length; ++i) {
  real y = NAME.length - i;
  filldraw((0,y-0.32)--(P[i],y-0.32)--(P[i],y+0.32)
           --(0,y+0.32)--cycle, paleblue, black+0.3bp);
  label(NAME[i], (-0.12,y), W);
}

draw((0,0.3)--(6.6,0.3), black+0.6bp);
for (real t = 0; t &lt;= 6; t += 1) {
  draw((t,0.3)--(t,0.0), black+0.4bp);
  label(format("%g", t), (t,-0.15), S);
}
label("Protein (grams per serving)", (3.3,-1.35));
        </asymptote>
      </image>
    </figure>

    <p>This is a <term>case-value graph</term>. You can see the
    name of each individual case and the variable value for that
    case. Apple Jacks has <m>2</m> grams of protein in a
    serving; Cheerios has <m>6</m>.</p>

    <p>For summarizing a distribution, this graph is a poor
    choice. Ask it a simple question: <em>how many cereals have
    <m>2</m> grams of protein?</em> There is no way to answer
    without moving down the whole list and counting bars of
    matching length. In that respect a case-value graph is
    barely better than the table it came from. We cannot see
    patterns, and we cannot read off the number of individuals
    at a given value.</p>

    <exercise xml:id="check-casevalue-problem">
      <statement>
        <p>What is the main weakness of the case-value graph in
        <xref ref="fig-cereal-casevalue"/> as a summary of the
        distribution?</p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement>
            <p>It does not show how many cereals share a given
            protein value.</p>
          </statement>
          <feedback>
            <p>Correct. A summary of a distribution needs to
            show the number of individuals at each value, and
            this graph forces you to count bars one at a
            time.</p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>It leaves out some of the cereals.</p>
          </statement>
          <feedback>
            <p>All <m>21</m> cereals appear. Showing every
            individual is in fact what makes the graph crowded
            rather than informative.</p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>The protein values are inaccurate.</p>
          </statement>
          <feedback>
            <p>The values are fine. The problem is the
            organization, not the numbers.</p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>Protein is a categorical variable, so it should
            not be graphed this way.</p>
          </statement>
          <feedback>
            <p>Grams of protein is a measurement, so it is
            quantitative. A dotplot or histogram is
            appropriate<mdash/>just not this graph.</p>
          </feedback>
        </choice>
      </choices>
    </exercise>
  </subsection>

  <!-- ========================================================= -->
  <subsection xml:id="subsec-dotplot">
    <title>The dotplot</title>

    <p>Here is a second graph of exactly the same <m>21</m>
    cereals.</p>

    <figure xml:id="fig-cereal-dotplot">
      <caption>A <term>dotplot</term> of protein content for the
      same <m>21</m> children's cereals. Each dot is one
      cereal.</caption>
      <image width="65%" xml:id="image-cereal-dotplot">
        <description>A dotplot of protein content for 21
        children's cereals. The horizontal axis runs from 1 to 6
        grams. Stacks of dots sit above 1 gram with 7 cereals,
        above 2 grams with 10 cereals, above 3 grams with 2
        cereals, above 4 grams with 1 cereal, and above 6 grams
        with 1 cereal. Nothing appears above 5 grams. The bulk
        of the data sits at the low end, with a single isolated
        dot far to the right at 6 grams.</description>
        <asymptote>
unitsize(0.95cm, 0.30cm);
defaultpen(fontsize(8pt));

real[] V = {1,2,3,4,6};
int[]  N = {7,10,2,1,1};

for (int i = 0; i &lt; V.length; ++i) {
  for (int j = 1; j &lt;= N[i]; ++j) {
    dot((V[i], j), linewidth(5.5bp)+blue);
  }
}

draw((0.4,0)--(6.7,0), black+0.6bp);
for (real t = 1; t &lt;= 6; t += 1) {
  draw((t,0)--(t,-0.45), black+0.4bp);
  label(format("%g", t), (t,-0.75), S);
}
label("Protein (grams per serving)", (3.55,-2.4));
        </asymptote>
      </image>
    </figure>

    <p>In a dotplot, each dot represents one
    individual<mdash/>here, one cereal. The numbers along the
    horizontal axis are the variable values. The height of each
    stack is the count of individuals at that value.</p>

    <p>Now the earlier question answers itself. Ten children's
    cereals have <m>2</m> grams of protein in a serving. No
    counting required: you read the height of the stack.</p>

    <exercise xml:id="check-dot-meaning">
      <statement>
        <p>In <xref ref="fig-cereal-dotplot"/>, what does a
        single dot represent?</p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement><p>One cereal</p></statement>
          <feedback>
            <p>Correct. In a dotplot each individual contributes
            exactly one dot, placed above its value.</p>
          </feedback>
        </choice>
        <choice>
          <statement><p>One gram of protein</p></statement>
          <feedback>
            <p>Grams are read from the horizontal axis. The dots
            count individuals.</p>
          </feedback>
        </choice>
        <choice>
          <statement><p>The average protein content of a group
          of cereals</p></statement>
          <feedback>
            <p>No averaging happens in a dotplot. Each dot is
            one raw observation.</p>
          </feedback>
        </choice>
        <choice>
          <statement><p>A range of protein values</p></statement>
          <feedback>
            <p>That describes a histogram bar, which covers an
            interval. A dot sits at a single value.</p>
          </feedback>
        </choice>
      </choices>
    </exercise>

    <exercise xml:id="check-read-dotplot">
      <statement>
        <p>Using <xref ref="fig-cereal-dotplot"/>, how many of
        these cereals have <m>3</m> or more grams of protein in
        a serving?</p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement><p><m>4</m></p></statement>
          <feedback>
            <p>Correct: two cereals at <m>3</m> grams, one at
            <m>4</m>, and one at <m>6</m>.</p>
          </feedback>
        </choice>
        <choice>
          <statement><p><m>2</m></p></statement>
          <feedback>
            <p>That counts only the stack at <m>3</m> grams.
            <q><m>3</m> or more</q> includes everything to the
            right as well.</p>
          </feedback>
        </choice>
        <choice>
          <statement><p><m>3</m></p></statement>
          <feedback>
            <p>Check again<mdash/>there are stacks at <m>3</m>,
            <m>4</m>, and <m>6</m> grams, and the first of those
            holds two cereals.</p>
          </feedback>
        </choice>
        <choice>
          <statement><p><m>17</m></p></statement>
          <feedback>
            <p>That is the number with <em>fewer</em> than
            <m>3</m> grams: seven at <m>1</m> gram plus ten at
            <m>2</m> grams.</p>
          </feedback>
        </choice>
      </choices>
    </exercise>
  </subsection>

  <!-- ========================================================= -->
  <subsection xml:id="subsec-reading-dotplot">
    <title>Describing what you see</title>

    <p>With the dotplot in front of us, describing the
    distribution is straightforward. Four observations cover
    it:</p>

    <ul>
      <li><p>The amount of protein varies from <m>1</m> to
      <m>6</m> grams per serving.</p></li>
      <li><p>Most of the cereals have <m>1</m> or <m>2</m> grams
      of protein. Seventeen of the twenty-one fall at those two
      values.</p></li>
      <li><p>Larger amounts of protein are less
      typical.</p></li>
      <li><p>One cereal has <m>6</m> grams of protein. That much
      protein is unusual for this group of children's
      cereals.</p></li>
    </ul>

    <p>Together those four statements are a good summary of the
    data. Notice that each of them is a claim about the
    <em>group</em>, not about any one cereal, and that none of
    them could have been read off the case-value graph without
    substantial work.</p>

    <exercise xml:id="check-dotplot-vs-table">
      <statement correct="no">
        <p>A dotplot shows less information than the table of
        values it was built from.</p>
      </statement>
      <feedback>
        <p>False, at least for a small data set. Every
        individual value is still visible in a
        dotplot<mdash/>you could reconstruct the full list of
        twenty-one protein values from
        <xref ref="fig-cereal-dotplot"/>. What the dotplot drops
        is the <em>names</em>, and in exchange it makes the
        pattern in the group immediately visible.</p>
      </feedback>
    </exercise>

    <exercise xml:id="check-describe-protein">
      <statement>
        <p>A parent looks at
        <xref ref="fig-cereal-dotplot"/> and says,
        <q>Children's cereals are a good source of
        protein<mdash/>one of them has <m>6</m> grams.</q> In
        two or three sentences, explain what is wrong with
        reasoning from that single cereal, and say what the
        dotplot actually shows about the group.</p>
        <response/>
      </statement>
      <solution>
        <p>Something like: <q>The <m>6</m>-gram cereal is a
        single unusual case, not a typical one. Seventeen of the
        twenty-one cereals have only <m>1</m> or <m>2</m> grams
        of protein per serving, so the typical children's cereal
        is a poor source of protein. Quoting the maximum
        describes one product, not the group.</q></p>
        <p>The distinction between a statement about an
        individual and a statement about a distribution is the
        point of this whole chapter. A strong answer names the
        actual bulk of the data rather than only asserting that
        the claim is misleading.</p>
      </solution>
    </exercise>
  </subsection>

  <!-- ========================================================= -->
  <conclusion>
    <title>Summary</title>
    <p>A table and a case-value graph both display individuals
    well and distributions badly. Neither lets you see how many
    individuals share a given value without counting.</p>
    <p>A dotplot places one dot per individual above that
    individual's value on a numeric axis. The height of each
    stack is the count of individuals at that value, which makes
    the distribution visible at a glance: where values cluster,
    how far they spread, and which values are unusual.</p>
    <p>Adapted from <pubtitle>Concepts in Statistics</pubtitle>
    (SUNY / Lumen Learning), CC BY 4.0. Cereal nutrition data
    from Consumer Reports.</p>
  </conclusion>
</section>
"""

# =============================================================
# Dotplots (2 of 2)
# =============================================================
F["sec-shape-center-spread.ptx"] = r"""
<?xml version="1.0" encoding="UTF-8"?>

<section xml:id="sec-shape-center-spread">
  <title>Shape, Center, Spread, and Outliers</title>

  <objectives>
    <ul>
      <li><p>Describe the shape of a distribution as
      right-skewed, left-skewed, symmetric with a central peak,
      or uniform.</p></li>
      <li><p>Identify a typical value as an informal measure of
      center.</p></li>
      <li><p>Distinguish the overall range from a typical
      range.</p></li>
      <li><p>Identify outliers as observations falling outside
      the overall pattern.</p></li>
      <li><p>Write a paragraph comparing two
      distributions.</p></li>
    </ul>
  </objectives>

  <introduction>
    <p>A dotplot shows a pattern. Describing that pattern
    reliably takes vocabulary, and the vocabulary is always the
    same four items: <em>shape</em>, <em>center</em>,
    <em>spread</em>, and any <em>outliers</em><mdash/>the
    exceptions to the pattern.</p>

    <p>This section introduces all four informally. Precise
    definitions of center and spread come later in the chapter;
    for now the goal is to look at a distribution and say
    something true and useful about it.</p>
  </introduction>

  <!-- ========================================================= -->
  <subsection xml:id="subsec-shape">
    <title>Shape</title>

    <p>To describe the shape of a distribution, imagine
    sketching an outline around the dots to emphasize the
    general trend, then ignore the small bumps. Four shapes are
    common enough to have names.</p>

    <p>A distribution is <term>skewed to the right</term> when
    the data clusters on the left with a tail tapering off to
    the right: a lot of data at lower values, smaller amounts at
    higher values.</p>

    <figure xml:id="fig-sugar-adult">
      <caption>Grams of sugar per serving in <m>36</m> adult
      cereals. The distribution is skewed to the
      right.</caption>
      <image width="78%" xml:id="image-sugar-adult">
        <description>A dotplot of sugar content in 36 adult
        cereals, with the horizontal axis running from 0 to 15
        grams. Tall stacks sit at the low end, peaking at 6
        cereals above 3 grams, and the stacks shrink steadily as
        sugar increases, trailing off to single dots near 12 and
        14 grams. The tail extends to the right.</description>
        <asymptote>
unitsize(0.50cm, 0.33cm);
defaultpen(fontsize(7.5pt));

real[] V = {0,1,2,3,4,5,6,7,8,9,10,11,12,14};
int[]  N = {4,3,4,6,4,3,3,2,1,1, 2, 1, 1, 1};

for (int i = 0; i &lt; V.length; ++i) {
  for (int j = 1; j &lt;= N[i]; ++j) {
    dot((V[i], j), linewidth(5bp)+heavyblue);
  }
}

draw((-0.6,0)--(15.6,0), black+0.6bp);
for (real t = 0; t &lt;= 15; t += 1) {
  draw((t,0)--(t,-0.40), black+0.4bp);
  label(format("%g", t), (t,-0.70), S);
}
label("Sugar (g per serving), adult cereals", (7.5,-2.3));
        </asymptote>
      </image>
    </figure>

    <p>A distribution is <term>skewed to the left</term> when
    the data clusters on the right with a tail tapering off to
    the left.</p>

    <figure xml:id="fig-sugar-children">
      <caption>Grams of sugar per serving in <m>21</m>
      children's cereals, on the same scale as
      <xref ref="fig-sugar-adult"/>. This distribution is skewed
      to the left.</caption>
      <image width="78%" xml:id="image-sugar-children">
        <description>A dotplot of sugar content in 21 children's
        cereals, drawn on the same horizontal scale as the adult
        cereal dotplot. The data clusters at the high end, with
        the tallest stack of 4 cereals above 12 grams and three
        cereals at 13 grams. Single dots trail down toward the
        low end at 7, 6, 5, 3, and 1 gram. The tail extends to
        the left.</description>
        <asymptote>
unitsize(0.50cm, 0.33cm);
defaultpen(fontsize(7.5pt));

real[] V = {1,3,5,6,7,8,9,10,11,12,13,14,15};
int[]  N = {1,1,1,1,1,1,2, 2, 2, 4, 3, 1, 1};

for (int i = 0; i &lt; V.length; ++i) {
  for (int j = 1; j &lt;= N[i]; ++j) {
    dot((V[i], j), linewidth(5bp)+heavyred);
  }
}

draw((-0.6,0)--(15.6,0), black+0.6bp);
for (real t = 0; t &lt;= 15; t += 1) {
  draw((t,0)--(t,-0.40), black+0.4bp);
  label(format("%g", t), (t,-0.70), S);
}
label("Sugar (g per serving), children's cereals",
      (7.5,-2.3));
        </asymptote>
      </image>
    </figure>

    <p>A distribution is <term>symmetric with a central
    peak</term>, also called <term>bell-shaped</term>, when
    there is a single high point with tails falling away at
    about the same rate in both directions.</p>

    <figure xml:id="fig-calories-children">
      <caption>Calories per serving in <m>21</m> children's
      cereals. This distribution is roughly symmetric with a
      central peak.</caption>
      <image width="70%" xml:id="image-calories-children">
        <description>A dotplot of calories per serving for 21
        children's cereals. The horizontal axis runs from 90 to
        150 calories in steps of 10. The stacks are 1, 4, 8, 4,
        2, 1, and 1, giving a single clear peak at 110 calories
        with the counts falling away at a similar rate on both
        sides.</description>
        <asymptote>
unitsize(0.085cm, 0.30cm);
defaultpen(fontsize(7.5pt));

real[] V = {90,100,110,120,130,140,150};
int[]  N = { 1,  4,  8,  4,  2,  1,  1};

for (int i = 0; i &lt; V.length; ++i) {
  for (int j = 1; j &lt;= N[i]; ++j) {
    dot((V[i], j), linewidth(5bp)+heavygreen);
  }
}

draw((85,0)--(156,0), black+0.6bp);
for (real t = 90; t &lt;= 150; t += 10) {
  draw((t,0)--(t,-0.45), black+0.4bp);
  label(format("%g", t), (t,-0.80), S);
}
label("Calories per serving", (120,-2.6));
        </asymptote>
      </image>
    </figure>

    <p>A distribution is <term>uniform</term> when the dots form
    a roughly rectangular shape: about the same amount of data
    at every value.</p>

    <figure xml:id="fig-last-digit">
      <caption>The last digit of <m>47</m> students' telephone
      numbers. The distribution is roughly uniform.</caption>
      <image width="68%" xml:id="image-last-digit">
        <description>A dotplot of the final digit of 47
        telephone numbers, with the horizontal axis showing the
        digits 0 through 9. Every stack is either 4 or 5 dots
        tall, so the dots form a nearly flat rectangular block
        with no peak and no tail.</description>
        <asymptote>
unitsize(0.72cm, 0.30cm);
defaultpen(fontsize(7.5pt));

real[] V = {0,1,2,3,4,5,6,7,8,9};
int[]  N = {5,4,5,5,4,5,5,4,5,5};

for (int i = 0; i &lt; V.length; ++i) {
  for (int j = 1; j &lt;= N[i]; ++j) {
    dot((V[i], j), linewidth(5bp)+purple);
  }
}

draw((-0.6,0)--(9.6,0), black+0.6bp);
for (real t = 0; t &lt;= 9; t += 1) {
  draw((t,0)--(t,-0.45), black+0.4bp);
  label(format("%g", t), (t,-0.80), S);
}
label("Last digit of telephone number", (4.5,-2.6));
        </asymptote>
      </image>
    </figure>

    <p>Not every distribution fits one of these four names, and
    forcing a label onto a shape that does not have one is worse
    than describing it plainly. A distribution with two separate
    peaks, for instance, often means two different groups have
    been mixed together<mdash/>which is more interesting than
    any of the four names.</p>

    <exercise xml:id="check-skew-name">
      <statement>
        <p>Why is <xref ref="fig-sugar-children"/> described as
        skewed to the <em>left</em>, when most of its dots are
        on the right?</p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement>
            <p>Skew is named for the direction of the tail, and
            this tail stretches toward the lower values.</p>
          </statement>
          <feedback>
            <p>Correct. The cluster is on the right; the thin
            tail trailing down to <m>1</m> gram is on the left,
            and the tail is what names the skew.</p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>Because the distribution was drawn on the same
            scale as the adult cereals.</p>
          </statement>
          <feedback>
            <p>The matched scale makes comparison fair, but it
            does not determine the shape.</p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>Because children's cereals have more sugar than
            adult cereals.</p>
          </statement>
          <feedback>
            <p>That is true and is a statement about center, not
            shape. A distribution can be left-skewed anywhere on
            the axis.</p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>Because the tallest stack is left of the middle
            of the axis.</p>
          </statement>
          <feedback>
            <p>The tallest stack is at <m>12</m> grams, which is
            well to the right.</p>
          </feedback>
        </choice>
      </choices>
    </exercise>

    <exercise xml:id="check-uniform">
      <statement>
        <p>What makes <xref ref="fig-last-digit"/> a uniform
        distribution?</p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement>
            <p>Every value occurs about equally often, so the
            dots form a roughly rectangular block.</p>
          </statement>
          <feedback>
            <p>Correct. With no peak and no tail, there is no
            value that counts as typical and none that counts as
            unusual.</p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>All the values are whole numbers.</p>
          </statement>
          <feedback>
            <p>Whole-number values appear in the protein and
            sugar dotplots too, and those are not uniform.</p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>The values run from <m>0</m> to <m>9</m> with no
            gaps.</p>
          </statement>
          <feedback>
            <p>Having no gaps is not enough<mdash/>a bell-shaped
            distribution can also have no gaps. Uniform means
            the stacks are all about the same
            <em>height</em>.</p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>There are exactly <m>47</m> observations.</p>
          </statement>
          <feedback>
            <p>Sample size has nothing to do with shape.</p>
          </feedback>
        </choice>
      </choices>
    </exercise>
  </subsection>

  <!-- ========================================================= -->
  <subsection xml:id="subsec-center-spread">
    <title>Center and spread</title>

    <p>Shape alone is not a description. We also want to say
    where the data sits and how much it varies.</p>

    <p>For <term>center</term>, identify a <em>typical
    value</em>: a single value of the variable chosen to
    represent the whole group. For now, reading off the most
    common value is enough. Precise methods come later in this
    chapter.</p>

    <p>For <term>spread</term><mdash/>also called
    <term>variability</term><mdash/>we use two
    descriptions.</p>

    <assemblage xml:id="asm-two-ranges">
      <title>Two kinds of range</title>
      <p>The <term>overall range</term> is the distance from the
      smallest value to the largest:</p>
      <p><m>\text{range} = \text{largest} - \text{smallest}</m></p>
      <p>A <term>typical range</term> is an interval covering
      the bulk of the data, found by looking at where the dots
      clump. It deliberately ignores the extremes.</p>
      <p>Both are useful, and they answer different questions.
      The overall range tells you what is possible; the typical
      range tells you what is ordinary.</p>
    </assemblage>

    <p>The difference matters because a single extreme
    observation can inflate the overall range enormously while
    telling you nothing about what is usual. We will see exactly
    that in the cereal comparison below.</p>

    <exercise xml:id="check-overall-range">
      <statement>
        <p>Using <xref ref="fig-sugar-children"/>, what is the
        overall range of sugar content in children's
        cereals?</p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement><p><m>14</m> grams</p></statement>
          <feedback>
            <p>Correct: the largest value is <m>15</m> grams and
            the smallest is <m>1</m> gram, and
            <m>15 - 1 = 14</m>.</p>
          </feedback>
        </choice>
        <choice>
          <statement><p><m>15</m> grams</p></statement>
          <feedback>
            <p>That is the largest value, not the range. The
            range is a difference.</p>
          </feedback>
        </choice>
        <choice>
          <statement><p>From <m>9</m> to <m>13</m>
          grams</p></statement>
          <feedback>
            <p>That is a reasonable <em>typical</em> range, but
            the overall range uses the extremes.</p>
          </feedback>
        </choice>
        <choice>
          <statement><p><m>12</m> grams</p></statement>
          <feedback>
            <p><m>12</m> is the most common value<mdash/>a
            measure of center, not spread.</p>
          </feedback>
        </choice>
      </choices>
    </exercise>

    <exercise xml:id="check-typical-vs-overall">
      <statement correct="yes">
        <p>Two distributions can have the same overall range
        while differing substantially in where their values are
        concentrated.</p>
      </statement>
      <feedback>
        <p>True, and the two cereal dotplots are exactly such a
        pair. Both span <m>14</m> grams, yet adult cereals
        cluster near <m>0</m> to <m>6</m> grams and children's
        cereals near <m>9</m> to <m>13</m>. Reporting only the
        overall range would make the two groups look
        identical.</p>
      </feedback>
    </exercise>
  </subsection>

  <!-- ========================================================= -->
  <subsection xml:id="subsec-comparing-cereals">
    <title>Putting it together: comparing two groups</title>

    <example xml:id="ex-cereal-sugar">
      <title>Sugar in adult and children's cereals</title>
      <statement>
        <p>Use shape, center, and spread to compare
        <xref ref="fig-sugar-adult"/> with
        <xref ref="fig-sugar-children"/>.</p>
      </statement>
      <solution>
        <p><em>Compare the shapes.</em> Sugar content in adult
        cereals is skewed to the right: many adult cereals have
        less than <m>8</m> grams of sugar per serving, with a
        smaller number containing high amounts. Sugar in
        children's cereals is skewed to the left: many have more
        than <m>8</m> grams, with a smaller number at low
        amounts.</p>
        <p>There is nothing special about the number <m>8</m>.
        It is a convenient reference point for describing the
        opposite trends.</p>

        <p><em>Compare the centers.</em> A typical adult cereal
        has <m>3</m> grams of sugar per serving. A typical
        children's cereal has <m>12</m> grams.</p>

        <p><em>Compare the spreads.</em> Adult cereals run from
        <m>0</m> to <m>14</m> grams, children's cereals from
        <m>1</m> to <m>15</m>. Both have an overall range of
        <m>14</m> grams, since <m>14 - 0 = 14</m> and
        <m>15 - 1 = 14</m>.</p>
        <p>The typical ranges tell a different story. Typical
        adult cereals have between <m>0</m> and <m>6</m> grams
        of sugar per serving; typical children's cereals have
        between <m>9</m> and <m>13</m>.</p>
      </solution>
    </example>

    <p>Now tie the observations into a single paragraph. Here is
    a plain-language version:</p>

    <blockquote>
      <p>In this sample, children's cereals have more sugar per
      serving than adult cereals. A typical children's cereal
      has <m>12</m> grams of sugar in a serving. It is not
      uncommon for children's cereals to have <m>9</m> to
      <m>13</m> grams, but it is unusual for one to have less
      than <m>8</m> grams. A typical adult cereal has <m>3</m>
      grams of sugar. It is not uncommon for adult cereals to
      have <m>0</m> to <m>6</m> grams. Larger amounts are less
      common.</p>
    </blockquote>

    <p>And the same comparison in the formal vocabulary of this
    section:</p>

    <blockquote>
      <p>In this sample, children's cereals have more sugar per
      serving than adult cereals. The distribution of sugar in
      children's cereals is skewed left with an overall range of
      <m>14</m> grams; typical children's cereals have <m>9</m>
      to <m>13</m> grams per serving, with <m>12</m> grams the
      most common amount. The distribution of sugar in adult
      cereals is skewed right with the same overall range of
      <m>14</m> grams; typical adult cereals have <m>0</m> to
      <m>6</m> grams, with <m>3</m> grams the most common
      amount.</p>
    </blockquote>

    <p>Both paragraphs lead with the comparison rather than
    describing one group fully and then the other. That is
    deliberate: a reader should not have to do the comparing
    themselves.</p>

    <exercise xml:id="check-reference-point">
      <statement>
        <p>The comparison uses <m>8</m> grams as a dividing
        line. What is the status of that number?</p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement>
            <p>It is a convenient reference point chosen to
            describe the opposite trends, with no special
            meaning.</p>
          </statement>
          <feedback>
            <p>Correct, and the text says so explicitly.
            Choosing a round number near where the two
            distributions cross makes the contrast easy to
            state.</p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>It is the nutritional threshold above which a
            cereal is considered high in sugar.</p>
          </statement>
          <feedback>
            <p>No such definition is being used here. Compare
            this with the genuine medical benchmarks you will
            meet later, such as the <m>2500</m>-gram definition
            of low birth weight.</p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>It is the average sugar content across both
            groups combined.</p>
          </statement>
          <feedback>
            <p>No average was computed. It is simply a
            convenient round number.</p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>It is the midpoint of the overall range.</p>
          </statement>
          <feedback>
            <p>The ranges run <m>0</m> to <m>14</m> and
            <m>1</m> to <m>15</m>, whose midpoints are <m>7</m>
            and <m>8</m>. The choice was a convenience, not a
            calculation.</p>
          </feedback>
        </choice>
      </choices>
    </exercise>
  </subsection>

  <!-- ========================================================= -->
  <subsection xml:id="subsec-outliers">
    <title>Outliers</title>

    <p><term>Outliers</term> are observations that fall outside
    the overall pattern of the distribution. A precise rule for
    identifying them comes later in this chapter. For now, use
    judgment: look for values that are exceptions to the general
    trend, usually separated from the rest of the data by a
    visible gap.</p>

    <figure xml:id="fig-wrist">
      <caption>Wrist girth in centimeters for <m>40</m> adults.
      Two observations at the right, marked in red, fall outside
      the overall pattern. The smallest observation, marked in
      gold, does not.</caption>
      <image width="78%" xml:id="image-wrist">
        <description>A dotplot of wrist girth for 40 adults,
        with the horizontal axis running from about 13.5 to 20
        centimeters. The dots form a single mound peaking at
        15.5 centimeters and tapering off smoothly in both
        directions, ending at 18 centimeters. Two isolated red
        dots sit at 19.5 and 20 centimeters, separated from the
        mound by a gap of more than a centimeter with nothing in
        between. The smallest value, a gold dot at 13.5
        centimeters, sits directly adjacent to the rest of the
        data with no gap.</description>
        <asymptote>
unitsize(1.05cm, 0.30cm);
defaultpen(fontsize(7.5pt));

real[] V = {13.5,14.0,14.5,15.0,15.5,
            16.0,16.5,17.0,17.5,18.0};
int[]  N = {   1,   2,   4,   6,   7,
               6,   5,   4,   2,   1};

for (int i = 1; i &lt; V.length; ++i) {
  for (int j = 1; j &lt;= N[i]; ++j) {
    dot((V[i], j), linewidth(5bp)+heavyblue);
  }
}
dot((13.5,1), linewidth(5.5bp)+orange);
dot((19.5,1), linewidth(5.5bp)+red);
dot((20.0,1), linewidth(5.5bp)+red);

draw((13.1,0)--(20.5,0), black+0.6bp);
for (real t = 14; t &lt;= 20; t += 1) {
  draw((t,0)--(t,-0.45), black+0.4bp);
  label(format("%g", t), (t,-0.80), S);
}
label("Wrist girth (cm)", (16.8,-2.5));
        </asymptote>
      </image>
    </figure>

    <p>The two values at the right are separated from the main
    body of the data by a gap of more than a centimeter. They
    are plausible candidates for outliers.</p>

    <p>The smallest observation is a different matter. It is the
    minimum, but it sits immediately adjacent to the next value
    with no gap<mdash/>it is the end of the pattern, not an
    exception to it. Being the largest or smallest value in a
    data set does not by itself make an observation an
    outlier.</p>

    <exercise xml:id="check-not-outlier">
      <statement>
        <p>Why is the smallest wrist measurement in
        <xref ref="fig-wrist"/> <em>not</em> considered an
        outlier?</p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement>
            <p>It is adjacent to the rest of the data,
            continuing the pattern rather than standing apart
            from it.</p>
          </statement>
          <feedback>
            <p>Correct. The dots taper off smoothly to that
            value with no gap, so it is simply where the
            distribution ends.</p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>Outliers can only occur at the high end of a
            distribution.</p>
          </statement>
          <feedback>
            <p>Outliers can occur at either end. A low value
            separated from the pattern by a gap would
            qualify.</p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>There is only one such observation, and outliers
            come in pairs.</p>
          </statement>
          <feedback>
            <p>A single observation can certainly be an outlier.
            What matters is its separation from the
            pattern.</p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>It is within the overall range of the data.</p>
          </statement>
          <feedback>
            <p>Every observation is within the overall range by
            definition, including the two red ones.</p>
          </feedback>
        </choice>
      </choices>
    </exercise>

    <exercise xml:id="check-write-description-dotplot">
      <statement>
        <p>Using <xref ref="fig-calories-children"/>, write a
        two- or three-sentence description of the distribution
        of calories in children's cereals. Cover shape, center,
        spread, and whether there are any outliers.</p>
        <response/>
      </statement>
      <solution>
        <p>Something like: <q>The distribution of calories in
        children's cereals is roughly symmetric with a central
        peak at <m>110</m> calories per serving, which is also a
        reasonable typical value. Calories range from <m>90</m>
        to <m>150</m>, an overall range of <m>60</m> calories,
        with most cereals falling between <m>100</m> and
        <m>120</m>. There are no outliers: the counts taper off
        gradually on both sides with no isolated values.</q></p>
        <p>Stating explicitly that there are no outliers is
        worth doing<mdash/>a reader cannot otherwise tell
        whether you looked. Note also that this distribution has
        a slightly longer right tail than left, so <q>roughly
        symmetric</q> is more honest than <q>symmetric.</q>
        Hedging accurately is better than overstating.</p>
      </solution>
    </exercise>
  </subsection>

  <!-- ========================================================= -->
  <conclusion>
    <title>Summary</title>
    <p>To describe the distribution of a quantitative variable,
    report the overall pattern<mdash/>shape, center, and
    spread<mdash/>together with any deviations from that
    pattern, which are the outliers.</p>
    <p>Shape may be skewed right, skewed left, symmetric with a
    central peak, or uniform; some distributions fit none of
    these. Center is a typical value representing the group.
    Spread may be reported as an overall range, largest minus
    smallest, or as a typical range covering the bulk of the
    data. Outliers are observations falling outside the overall
    pattern, and being the largest or smallest value is not
    enough to qualify.</p>
    <p>When comparing two groups, lead with the comparison and
    support every claim with specific values.</p>
    <p>Adapted from <pubtitle>Concepts in Statistics</pubtitle>
    (SUNY / Lumen Learning), CC BY 4.0. Cereal nutrition data
    from Consumer Reports; wrist measurements from the body
    dimensions data of Heinz, Peterson, Johnson, and Kerk
    (2003).</p>
  </conclusion>
</section>
"""

# =============================================================
# Chapter wrapper
# =============================================================
CHAPTER = r"""
<?xml version='1.0' encoding='utf-8'?>

<chapter xml:id="ch-data-display"
         xmlns:xi="http://www.w3.org/2001/XInclude">
  <title>Summarizing Data Graphically and Numerically</title>

  <introduction>
    <p>Every statistical investigation begins with a research
    question and then moves through the same three stages, in
    the same order.</p>

    <ol>
      <li><p><em>Produce data.</em> Decide what to measure, then
      collect the measurements. Who will be studied, how will
      they be chosen, and what will be recorded about each
      one?</p></li>
      <li><p><em>Explore the data.</em> Analyze and summarize
      what you collected. This stage is also called
      <term>exploratory data analysis</term>, and it is the
      subject of this chapter.</p></li>
      <li><p><em>Draw a conclusion.</em> Use the data, together
      with probability and statistical inference, to say
      something about the larger population the data came
      from.</p></li>
    </ol>

    <p>The previous chapter dealt with the first stage: methods
    for collecting reliable data. This chapter deals with the
    second. We will not reach the third<mdash/>inference<mdash/>until
    much later.</p>

    <p>The order is not negotiable, and it is not merely
    procedural. A conclusion drawn from data that was collected
    badly is worthless no matter how sophisticated the analysis.
    And an analysis that skips straight to a conclusion without
    first looking at the data is how people end up reporting
    averages of distributions that have two separate peaks, or
    fitting straight lines to curves.</p>

    <p>So before we can model data, we have to look at it. This
    chapter develops the tools for describing how the values of
    a single quantitative variable are distributed: what values
    occur, how often each one occurs, and which ones are
    unusual.</p>
  </introduction>

  <xi:include href="./sec-variable-types.ptx"/>
  <xi:include href="./sec-dotplots.ptx"/>
  <xi:include href="./sec-shape-center-spread.ptx"/>
  <xi:include href="./sec-histograms.ptx"/>
  <xi:include href="./sec-histogram-bins.ptx"/>
  <xi:include href="./sec-describing-distributions.ptx"/>
  <xi:include href="./sec-comparing-distributions.ptx"/>

</chapter>
"""

# =============================================================
# R equivalents
# =============================================================
RCODE = r"""
# figures-dotplots.R
# R equivalents for the dotplot figures in ch-data-display.
#
# NOTE: cereal protein, sugar, and calorie values are
# RECONSTRUCTED to reproduce every fact stated on the Lumen
# pages. The authoritative source is the Consumer Reports /
# UCI "cereals" dataset (77 cereals). See SOURCES.md.

dotplot <- function(x, xlab, col = "steelblue") {
  stripchart(x, method = "stack", offset = 0.7,
             pch = 19, cex = 1.1, col = col, xlab = xlab)
}

# ---- sec-dotplots ------------------------------------
protein <- c(rep(1, 7), rep(2, 10), rep(3, 2), 4, 6)
stopifnot(length(protein) == 21)
stopifnot(sum(protein == 2) == 10)
dotplot(protein, "Protein (grams per serving)")

# ---- sec-shape-center-spread -------------------------
sugar_adult <- c(rep(0,4), rep(1,3), rep(2,4), rep(3,6),
                 rep(4,4), rep(5,3), rep(6,3), rep(7,2),
                 8, 9, 10, 10, 11, 12, 14)
stopifnot(length(sugar_adult) == 36)
diff(range(sugar_adult))          # 14

sugar_child <- c(1, 3, 5, 6, 7, 8, rep(9,2), rep(10,2),
                 rep(11,2), rep(12,4), rep(13,3), 14, 15)
stopifnot(length(sugar_child) == 21)
diff(range(sugar_child))          # 14

calories <- c(90, rep(100,4), rep(110,8), rep(120,4),
              rep(130,2), 140, 150)
stopifnot(length(calories) == 21)

last_digit <- c(rep(0,5), rep(1,4), rep(2,5), rep(3,5),
                rep(4,4), rep(5,5), rep(6,5), rep(7,4),
                rep(8,5), rep(9,5))
stopifnot(length(last_digit) == 47)

wrist <- c(13.5, rep(14.0,2), rep(14.5,4), rep(15.0,6),
           rep(15.5,7), rep(16.0,6), rep(16.5,5),
           rep(17.0,4), rep(17.5,2), 18.0, 19.5, 20.0)
stopifnot(length(wrist) == 40)

# Real wrist girth data, for comparison:
# library(openintro); bdims$wri.gi
"""


# =============================================================
def check(name, body):
    """Catch paste damage before writing anything."""
    for ch in "\f\b\v\a":
        if ch in body:
            return f"{name}: control char (lost r prefix)"
    if "<?xml" not in body[:80]:
        return f"{name}: missing XML declaration"
    return None


def main():
    force = "--force" in sys.argv

    if not SRC.is_dir():
        print("!! no ./source directory here.")
        print("!! run this from the repository root.")
        sys.exit(1)

    items = list(F.items())
    items.append(("ch-data-display.ptx", CHAPTER))

    errs = [e for e in (check(n, b) for n, b in items) if e]
    if errs:
        print("!! aborting, file bodies look damaged:")
        for e in errs:
            print("   ", e)
        sys.exit(1)

    TOOLS.mkdir(exist_ok=True)
    print("source dir:", SRC, "\n")

    for name, body in F.items():
        body = body.lstrip("\n")
        tgt = SRC / name
        if tgt.exists() and not force:
            print("  skip (exists)  ", name)
            continue
        tgt.write_text(body, encoding="utf-8")
        print("  wrote %6d bytes  %s" % (len(body), name))

    chap = SRC / "ch-data-display.ptx"
    if chap.exists():
        bak = SRC / "ch-data-display.ptx.bak"
        shutil.copy2(chap, bak)
        print("\n  backed up       ", bak.name)
    chap.write_text(CHAPTER.lstrip("\n"), encoding="utf-8")
    print("  rewrote         ch-data-display.ptx")

    rf = TOOLS / "figures-dotplots.R"
    rf.write_text(RCODE.lstrip("\n"), encoding="utf-8")
    print("  wrote           tools/figures-dotplots.R")

    stale = SRC / "sec-big-picture.ptx"
    if stale.exists():
        print("\n  NOTE: sec-big-picture.ptx exists but is no")
        print("  longer included. Safe to delete.")

    print("\nSection order now:")
    order = [
        "sec-variable-types",
        "sec-dotplots",
        "sec-shape-center-spread",
        "sec-histograms",
        "sec-histogram-bins",
        "sec-describing-distributions",
        "sec-comparing-distributions",
    ]
    for i, n in enumerate(order, 1):
        print("  %d. %s" % (i, n))

    print("\nNext: pretext build web && pretext view web")
    print("(slow first build, 6 new Asymptote figures)")


if __name__ == "__main__":
    main()