#!/usr/bin/env python3
"""Batch 05 - Mean and Median (Lumen pages 1 of 2 and 2 of 2).

Writes:
    source/sec-mean-median.ptx
    source/sec-choosing-center.ptx

Usage:
    python3 tools/gen_batch_05.py --force
"""

import os
import sys

SRC = "source"

SEC_MEAN_MEDIAN = r"""<?xml version="1.0" encoding="UTF-8"?>
<section xml:id="sec-mean-median">
  <title>Mean and Median</title>

  <objectives xml:id="objectives-mean-median">
    <ul>
      <li>
        <p>Calculate the mean of a quantitative data set and
        interpret it as a fair share.</p>
      </li>
      <li>
        <p>Explain why the mean is the balancing point of a
        distribution.</p>
      </li>
      <li>
        <p>Locate the median of a data set with an odd or an
        even number of values.</p>
      </li>
    </ul>
  </objectives>

  <introduction>
    <p>
      So far we have described the center of a distribution by
      pointing at it. We looked at a dotplot or a histogram,
      found where the values piled up, and called that a typical
      value. That is a real skill, but it is not a number, and
      two people looking at the same picture can point at two
      different places.
    </p>
    <p>
      This section replaces the pointing with arithmetic. There
      are two standard measures of center, the <term>mean</term>
      and the <term>median</term>, and they answer slightly
      different questions. For some distributions they land in
      almost the same place. For others they are far apart, and
      which one you report changes the story the data tells.
      Here we learn to compute both and to say what each one
      actually measures.
    </p>
  </introduction>

  <subsection xml:id="subsec-the-mean">
    <title>The mean</title>

    <p>
      The mean is the ordinary average. Add the data values,
      then divide by how many there are. We write it
      <m>\bar{x}</m> and say <q>x-bar</q>.
    </p>

    <me>\bar{x} = \frac{\sum x}{n}</me>

    <p>
      The symbol <m>\sum</m> is an instruction to add up
      whatever follows it, so <m>\sum x</m> means the sum of all
      the data values. The letter <m>n</m> is the number of data
      values.
    </p>

    <example xml:id="ex-quiz-mean">
      <title>Calculating a mean</title>
      <statement>
        <p>
          Find the mean of three quiz scores: 70, 85, and 82.
        </p>
      </statement>
      <solution>
        <p>
          There are three scores, so <m>n = 3</m>.
        </p>
        <me>\bar{x} = \frac{\sum x}{n}
          = \frac{70 + 85 + 82}{3}
          = \frac{237}{3} = 79</me>
        <p>
          The mean quiz score is 79.
        </p>
      </solution>
    </example>

    <exercise xml:id="check-mean-compute">
      <statement>
        <p>
          A data set contains the values 6, 7, 11, and 16. What
          is the mean?
        </p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement><p>10</p></statement>
          <feedback>
            <p>
              Correct. The values sum to 40 and there are four
              of them, so <m>\bar{x} = 40/4 = 10</m>.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement><p>9</p></statement>
          <feedback>
            <p>
              That is the median, the value halfway between 7
              and 11. The mean uses the sizes of the values, not
              just their order.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement><p>13.3</p></statement>
          <feedback>
            <p>
              This divides 40 by 3. Divide by <m>n</m>, the
              number of data values, which is 4 here. A common
              slip is to count the plus signs instead of the
              values.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement><p>40</p></statement>
          <feedback>
            <p>
              That is <m>\sum x</m>, the total. The mean divides
              that total by <m>n</m>.
            </p>
          </feedback>
        </choice>
      </choices>
    </exercise>
  </subsection>

  <subsection xml:id="subsec-fair-share">
    <title>The mean as a fair share</title>

    <p>
      Beth's nine homework scores are 70, 80, 80, 80, 85, 86,
      90, 90, and 95. Her scores vary, but the mean gives one
      number for her typical performance.
    </p>

    <me>\bar{x} = \frac{70 + 80 + 80 + 80 + 85 + 86 + 90 + 90
      + 95}{9} = \frac{756}{9} = 84</me>

    <p>
      Here is a useful way to read that 84. Suppose we took all
      756 of Beth's points and redistributed them evenly across
      the nine assignments. Each assignment would receive
      exactly 84 points, because
      <m>\frac{9(84)}{9} = \frac{756}{9} = 84</m>. The mean is
      the score she would have earned on every assignment if she
      had earned the same score on all of them. For this reason
      the mean is called the <term>fair share</term> measure of
      center.
    </p>

    <p>
      Notice what the mean does not do. Beth never actually
      scored an 84 on anything. The mean tells us nothing about
      any individual assignment and nothing about how much her
      scores bounced around.
    </p>

    <figure xml:id="fig-beth-scores">
      <caption>Beth's nine homework scores, with the mean and
      the median marked.</caption>
      <image xml:id="image-beth-scores" width="85%">
        <description>
          A dotplot of nine homework scores running from 70 to
          95. There is a single dot at 70, well to the left of
          everything else, then a stack of three dots at 80, one
          dot each at 85 and 86, a stack of two dots at 90, and
          one dot at 95. The bulk of the scores sit between 80
          and 90. A dashed line at 84 marks the mean and a
          dashed line at 85 marks the median; the two fall
          almost on top of each other, near the middle of the
          main cluster, with the low score of 70 pulling the
          mean slightly below the median.
        </description>
        <asymptote>
size(14cm,5cm,IgnoreAspect);
real[] s = {70,80,80,80,85,86,90,90,95};
draw((68,0)--(97,0), black);
for(int t = 70; t &lt;= 95; t += 5){
  draw((t,0)--(t,-0.25));
  label(string(t), (t,-0.3), S);
}
int[] cnt = new int[40];
for(int i = 0; i &lt; s.length; ++i){
  int k = round(s[i]) - 68;
  cnt[k] += 1;
  dot((s[i], 0.4*cnt[k]), black);
}
draw((84,-0.15)--(84,1.9), red+dashed);
label("mean 84", (84,1.9), NW, red);
draw((85,-0.15)--(85,1.5), blue+dashed);
label("median 85", (85,1.5), NE, blue);
label("Homework score", (82.5,-1.0));
        </asymptote>
      </image>
    </figure>

    <exercise xml:id="check-fair-share">
      <statement>
        <p>
          A student has 10 homework scores with a mean of 84.
          How many homework points does the student have in
          total?
        </p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement><p>840</p></statement>
          <feedback>
            <p>
              Correct. Since <m>\bar{x} = \sum x / n</m>, the
              total is <m>\sum x = n \bar{x} = 10(84) = 840</m>.
              This is the fair-share idea run backward.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement><p>84</p></statement>
          <feedback>
            <p>
              That is the mean itself, the share each assignment
              would receive. The total is that share multiplied
              by the number of assignments.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement><p>8.4</p></statement>
          <feedback>
            <p>
              This divides by <m>n</m> a second time. The mean
              has already been divided once; recovering the
              total requires multiplying.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>It cannot be found without the individual
            scores.</p>
          </statement>
          <feedback>
            <p>
              The individual scores are not recoverable, but the
              total is. The mean and <m>n</m> determine
              <m>\sum x</m> exactly, even though many different
              data sets produce the same total.
            </p>
          </feedback>
        </choice>
      </choices>
    </exercise>
  </subsection>

  <subsection xml:id="subsec-balancing-point">
    <title>The mean as a balancing point</title>

    <p>
      There is a second way to see the mean, and it explains why
      the mean behaves the way it does later in the course.
      Measure the distance from each data value to the mean,
      counting distances below the mean as negative and
      distances above as positive. These signed distances are
      called <term>deviations</term>.
    </p>

    <table xml:id="table-deviations">
      <title>Deviations from the mean of 84</title>
      <tabular halign="center">
        <row header="yes" bottom="minor">
          <cell>Score</cell>
          <cell>Deviation</cell>
        </row>
        <row><cell>70</cell><cell><m>-14</m></cell></row>
        <row><cell>80</cell><cell><m>-4</m></cell></row>
        <row><cell>80</cell><cell><m>-4</m></cell></row>
        <row><cell>80</cell><cell><m>-4</m></cell></row>
        <row><cell>85</cell><cell><m>+1</m></cell></row>
        <row><cell>86</cell><cell><m>+2</m></cell></row>
        <row><cell>90</cell><cell><m>+6</m></cell></row>
        <row><cell>90</cell><cell><m>+6</m></cell></row>
        <row bottom="minor">
          <cell>95</cell><cell><m>+11</m></cell>
        </row>
        <row><cell>Total</cell><cell><m>0</m></cell></row>
      </tabular>
    </table>

    <p>
      The deviations below the mean total <m>-26</m> and the
      deviations above the mean total <m>+26</m>. They cancel
      exactly. Picture the dotplot as a plank with a weight at
      each data value: the plank balances at 84 and nowhere
      else. The mean is the only measure of center with this
      property, and it is the reason a single extreme value can
      drag the mean a long way, a point we take up in
      <xref ref="sec-choosing-center"/>.
    </p>

    <exercise xml:id="check-balance-deviation">
      <statement>
        <p>
          In a data set, the deviations of the values that fall
          below the mean add up to <m>-38</m>. What do the
          deviations of the values above the mean add up to?
        </p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement><p><m>+38</m></p></statement>
          <feedback>
            <p>
              Correct. All deviations together sum to zero, so
              the positive deviations must exactly offset the
              negative ones. This holds for every data set.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement><p><m>-38</m></p></statement>
          <feedback>
            <p>
              This repeats the sign of the deviations below the
              mean. Values above the mean produce positive
              deviations.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement><p><m>0</m></p></statement>
          <feedback>
            <p>
              Zero is the total of <em>all</em> the deviations,
              not the total of the ones above the mean. See
              <xref ref="table-deviations"/>.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>It depends on how many values are above the
            mean.</p>
          </statement>
          <feedback>
            <p>
              The count does not matter. One value far above the
              mean can balance many values slightly below it,
              but the totals still cancel.
            </p>
          </feedback>
        </choice>
      </choices>
    </exercise>

    <exercise xml:id="check-mean-not-a-value">
      <statement>
        <p>
          True or false: the mean of a data set must be equal to
          one of the values in the data set.
        </p>
        <choices>
          <choice correct="no">
            <statement><p>True</p></statement>
            <feedback>
              <p>
                False. Beth's mean is 84 and she never scored an
                84 on any assignment. The mean is a summary of
                the whole group, not a report of any one
                observation, and it need not be a possible value
                at all <mdash/> a mean household size of 2.6
                people is perfectly ordinary.
              </p>
            </feedback>
          </choice>
          <choice correct="yes">
            <statement><p>False</p></statement>
            <feedback>
              <p>
                False, correctly identified. Beth's mean of 84
                does not appear anywhere in her list of scores.
                The mean describes the group, and it can land on
                a value no individual could have.
              </p>
            </feedback>
          </choice>
        </choices>
      </statement>
    </exercise>
  </subsection>

  <subsection xml:id="subsec-the-median">
    <title>The median</title>

    <p>
      The <term>median</term> is the middle of the data once the
      values are written in order from smallest to largest. It
      splits the ordered list in half: roughly as many values
      fall below it as above it.
    </p>

    <example xml:id="ex-median-odd">
      <title>Median with an odd number of values</title>
      <statement>
        <p>
          Find the median of Beth's homework scores: 70, 80, 80,
          80, 85, 86, 90, 90, 95.
        </p>
      </statement>
      <solution>
        <p>
          The scores are already in order and there are nine of
          them, so the middle one is the fifth. Counting in from
          either end gives 85. Four scores lie below it and four
          lie above it, so the median is 85.
        </p>
      </solution>
    </example>

    <p>
      With an odd number of values there is a single value in
      the middle. With an even number there are two, and the
      median is the number halfway between them.
    </p>

    <example xml:id="ex-median-even">
      <title>Median with an even number of values</title>
      <statement>
        <p>
          Beth's next eight scores are 72, 80, 84, 86, 88, 90,
          92, 95. Find the median.
        </p>
      </statement>
      <solution>
        <p>
          There are eight values, so the two middle ones are the
          fourth and fifth: 86 and 88. The median is their
          average.
        </p>
        <me>\frac{86 + 88}{2} = 87</me>
        <p>
          The median is 87, which is not one of her scores. Like
          the mean, the median need not be a value in the data
          set.
        </p>
      </solution>
    </example>

    <p>
      One caution about the phrase <q>as much data below as
      above.</q> When values repeat, the split is not always
      exact. In the data set 4, 7, 7, 7, 9 the median is 7, yet
      only one value lies strictly below it. The median is best
      understood as the value in the middle <em>position</em> of
      the ordered list, which is exactly why it cares only about
      order.
    </p>

    <exercise xml:id="check-median-even">
      <statement>
        <p>
          Find the median of 12, 15, 18, 20, 21, 25.
        </p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement><p>19</p></statement>
          <feedback>
            <p>
              Correct. With six values the two middle ones are
              18 and 20, and <m>(18+20)/2 = 19</m>.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement><p>18</p></statement>
          <feedback>
            <p>
              This is the lower of the two middle values. With
              an even count, neither middle value is the median
              by itself; average them.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement><p>20</p></statement>
          <feedback>
            <p>
              This is the upper of the two middle values.
              Averaging 18 and 20 gives the median.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement><p>18.5</p></statement>
          <feedback>
            <p>
              This is the mean, <m>111/6 = 18.5</m>. The two are
              close here, but the median is found from position
              in the ordered list, not from a total.
            </p>
          </feedback>
        </choice>
      </choices>
    </exercise>

    <exercise xml:id="check-median-order">
      <statement>
        <p>
          A classmate finds the median of 9, 3, 14, 5, 8 by
          taking the third number written down and reports 14.
          What went wrong?
        </p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement>
            <p>The values were not put in order first; the
            median is 8.</p>
          </statement>
          <feedback>
            <p>
              Correct. Ordered, the data is 3, 5, 8, 9, 14, and
              the third value is 8. The median is the middle of
              the <em>ordered</em> list, never the middle of the
              list as recorded.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>Nothing; 14 is the median of these five
            values.</p>
          </statement>
          <feedback>
            <p>
              14 is the largest value, not the middle one.
              Sorting first gives 3, 5, 8, 9, 14, with 8 in the
              middle.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>With five values the median must be the average
            of two numbers.</p>
          </statement>
          <feedback>
            <p>
              Averaging two middle values is the procedure for
              an <em>even</em> count. Five values have a single
              middle position, the third.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>The median should have been found by adding the
            values and dividing by 5.</p>
          </statement>
          <feedback>
            <p>
              That computes the mean, which here is 7.8. The
              median is a position in the ordered list.
            </p>
          </feedback>
        </choice>
      </choices>
    </exercise>

    <exercise xml:id="check-center-limits">
      <statement>
        <p>
          Beth's mean homework score is 84 and her median is 85.
          In two or three sentences, explain what these two
          numbers do <em>not</em> tell Beth about her homework
          performance.
        </p>
        <response/>
      </statement>
      <solution>
        <p>
          Neither number says anything about an individual
          assignment: Beth never earned an 84, and knowing the
          center does not reveal that one score was as low as 70
          while another was 95. Neither number describes
          variability, so two students with wildly different
          consistency could post the same mean and median. They
          also say nothing about shape or about trend over time,
          so an upward climb and a downward slide can look
          identical.
        </p>
        <p>
          An adequate answer says the center does not describe
          individual values. A strong answer names a second
          missing feature <mdash/> spread, shape, or order in
          time <mdash/> and explains why that matters, for
          instance that Beth cannot tell from 84 alone whether
          she is improving or whether one disaster is dragging
          her down.
        </p>
      </solution>
    </exercise>
  </subsection>

  <conclusion xml:id="summary-mean-median">
    <p>
      The mean is the average: add the values and divide by
      <m>n</m>, so <m>\bar{x} = \sum x / n</m>. It is the fair
      share each observation would receive if the total were
      divided evenly, and it is the balancing point of the
      distribution, the one location where the deviations above
      and below cancel to zero.
    </p>
    <p>
      The median is the middle of the ordered data. With an odd
      number of values it is the single middle value; with an
      even number it is the average of the two middle values.
      Because it depends only on position, the median ignores
      how far away the extreme values sit <mdash/> a fact that
      turns out to matter a great deal.
    </p>
    <p>
      Neither measure describes an individual observation, and
      neither describes spread. Both can equal a value that no
      one in the data set actually has.
    </p>
    <p>
      Adapted from <em>Concepts in Statistics</em>
      (SUNY / Lumen Learning), CC BY 4.0.
    </p>
  </conclusion>
</section>
"""


SEC_CHOOSING_CENTER = r"""<?xml version="1.0" encoding="UTF-8"?>
<section xml:id="sec-choosing-center">
  <title>Choosing a Measure of Center</title>

  <objectives xml:id="objectives-choosing-center">
    <ul>
      <li>
        <p>Explain why the median is resistant to outliers and
        the mean is not.</p>
      </li>
      <li>
        <p>Predict how skewness pulls the mean away from the
        median.</p>
      </li>
      <li>
        <p>Choose the mean or the median to summarize a
        distribution, based on its shape.</p>
      </li>
    </ul>
  </objectives>

  <introduction>
    <p>
      We now have two numbers competing for the title of center,
      and nothing yet tells us which to report. The answer is
      not a matter of taste. It depends on the shape of the
      distribution and on whether outliers are present, which
      means it depends on having looked at the data first.
    </p>
  </introduction>

  <subsection xml:id="subsec-outliers-and-resistance">
    <title>What an outlier does to each measure</title>

    <p>
      A student has 26 homework scores. Twenty-five of them fall
      between 80 and 90, which is solid B work. One assignment
      was never turned in and recorded as 0.
    </p>

    <figure xml:id="fig-outlier-scores">
      <caption>Twenty-six homework scores, one of which is an
      outlier at 0.</caption>
      <image xml:id="image-outlier-scores" width="90%">
        <description>
          A dotplot of 26 homework scores. Twenty-five dots form
          a single tight mound between 80 and 90, tallest at 84
          where six dots stack up, tapering to one dot each at
          80, 81, 89, and 90. Far to the left, separated by a
          gap of eighty points with nothing in it, sits a single
          dot at 0. The median of 84.5 falls inside the mound,
          while the mean of 81.8 is pulled to the left of the
          mound, toward the lone low score.
        </description>
        <asymptote>
size(15cm,5cm,IgnoreAspect);
real[] s = {0,80,81,82,82,83,83,84,84,84,84,84,84,
            85,85,86,86,86,87,87,87,88,88,88,89,90};
draw((-3,0)--(95,0), black);
for(int t = 0; t &lt;= 90; t += 10){
  draw((t,0)--(t,-0.25));
  label(string(t), (t,-0.3), S);
}
int[] cnt = new int[101];
for(int i = 0; i &lt; s.length; ++i){
  int k = round(s[i]);
  cnt[k] += 1;
  dot((s[i], 0.4*cnt[k]), black);
}
draw((84.5,-0.15)--(84.5,3.2), blue+dashed);
label("median 84.5", (84.5,3.2), NE, blue);
draw((81.8,-0.15)--(81.8,3.8), red+dashed);
label("mean 81.8", (81.8,3.8), NW, red);
label("Homework score", (45,-1.0));
        </asymptote>
      </image>
    </figure>

    <example xml:id="ex-zero-score">
      <title>One zero, two answers</title>
      <statement>
        <p>
          For the 26 scores in
          <xref ref="fig-outlier-scores"/>, the median is 84.5
          and the mean is 81.8. Which better summarizes this
          student's homework performance?
        </p>
      </statement>
      <solution>
        <p>
          The median. Throw out the 0 and recompute: the median
          of the remaining 25 scores is 85, barely different
          from 84.5, while their mean is 85.1, more than three
          points above 81.8. The single missing assignment moves
          the mean six times as far as it moves the median.
        </p>
        <p>
          The reason is structural. The median depends only on
          <em>order</em>, and changing the lowest score from 0
          to 50 or to 79 would not change which value sits in
          the middle position. The mean adds every score into a
          total, so every score, however extreme, gets a vote
          proportional to its size. At 81.8 the mean suggests
          this student is a shaky B, which misrepresents
          twenty-five assignments of consistent work.
        </p>
      </solution>
    </example>

    <p>
      A measure of center that is barely moved by extreme values
      is called <term>resistant</term>. The median is resistant;
      the mean is not.
    </p>

    <p>
      How much damage one outlier does depends on how much
      company it has. Suppose the teacher assigned only 10
      homeworks and the student's scores were 0, 80, 82, 84, 85,
      85, 86, 87, 88, 88. The median is still 85, but the mean
      drops to <m>765/10 = 76.5</m>, out of the B range and into
      the C range. The same zero, spread across fewer
      assignments, pulls much harder.
    </p>

    <exercise xml:id="check-outlier-correction">
      <statement>
        <p>
          Suppose the missing assignment in
          <xref ref="fig-outlier-scores"/> is found and the 0 is
          corrected to an 85. What happens to the mean and the
          median?
        </p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement>
            <p>The mean rises by more than three points; the
            median rises by half a point.</p>
          </statement>
          <feedback>
            <p>
              Correct. The mean goes from 81.8 to 85.1, while
              the median moves only from 84.5 to 85. Replacing
              an extreme value changes the total a great deal
              and the middle position hardly at all.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>Both rise by about three points.</p>
          </statement>
          <feedback>
            <p>
              This treats the two measures as interchangeable.
              The median is resistant: the corrected score
              simply moves from the bottom of the ordered list
              into the middle of it, shifting the middle
              position by one place.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>The median rises by more than three points; the
            mean barely moves.</p>
          </statement>
          <feedback>
            <p>
              This reverses the roles. The mean is the sensitive
              one, because every value enters the total; see
              <xref ref="ex-zero-score"/>.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>Neither changes, because only one value out of 26
            was altered.</p>
          </statement>
          <feedback>
            <p>
              A single value can matter enormously when it is
              far from the rest. That is the whole point of an
              outlier.
            </p>
          </feedback>
        </choice>
      </choices>
    </exercise>

    <exercise xml:id="check-sample-size-effect">
      <statement>
        <p>
          A score of 0 is added to a set of homework scores that
          otherwise average about 85. In which case does the
          zero pull the mean down the most?
        </p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement>
            <p>When there are few other scores, such as 9.</p>
          </statement>
          <feedback>
            <p>
              Correct. With nine other scores the mean falls to
              about 76.5; with twenty-five others it falls only
              to about 81.8. The lost points are divided among
              fewer assignments, so each one absorbs more of the
              damage.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>When there are many other scores, such as 100.</p>
          </statement>
          <feedback>
            <p>
              This has it backward. A large <m>n</m> dilutes an
              outlier: dividing the same 85 lost points among
              101 assignments moves the mean less than one
              point.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>The effect is the same regardless of how many
            scores there are.</p>
          </statement>
          <feedback>
            <p>
              The size of the effect is the lost points divided
              by <m>n</m>, so <m>n</m> controls it directly.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>The zero has no effect on the mean in either
            case, only on the median.</p>
          </statement>
          <feedback>
            <p>
              This has the two measures exactly backward. The
              zero enters the total, so it always affects the
              mean; the median is the one it may leave
              untouched.
            </p>
          </feedback>
        </choice>
      </choices>
    </exercise>

    <exercise xml:id="check-median-outlier-removal">
      <statement>
        <p>
          True or false: removing an outlier from a data set
          always changes the median.
        </p>
        <choices>
          <choice correct="no">
            <statement><p>True</p></statement>
            <feedback>
              <p>
                False. Removing a value does shift the middle
                position by half a step, but the value sitting
                there may not change. In 0, 85, 85, 85, 85 the
                median is 85, and dropping the 0 leaves the
                median at 85. Even when the median does move, it
                moves to a neighboring value, never a long
                distance, which is what resistance means.
              </p>
            </feedback>
          </choice>
          <choice correct="yes">
            <statement><p>False</p></statement>
            <feedback>
              <p>
                False, correctly identified. The middle position
                shifts when a value is removed, but the number
                occupying it may be identical, and at most it
                moves to an adjacent value. Compare the mean,
                which must change whenever the removed value
                differs from the mean.
              </p>
            </feedback>
          </choice>
        </choices>
      </statement>
    </exercise>
  </subsection>

  <subsection xml:id="subsec-skewed-distributions">
    <title>Skewness pulls the mean</title>

    <p>
      Outliers are not the only thing that separates the two
      measures. A long tail does it too, even when no single
      value stands out as unusual.
    </p>

    <p>
      <xref ref="fig-income"/> shows the personal incomes of a
      large sample of individuals from United States census
      data for the year 2000. The distribution is strongly
      skewed to the right, which is typical of income data
      everywhere: most people cluster at the low end and a thin
      tail stretches far to the right.
    </p>

    <figure xml:id="fig-income">
      <caption>Personal income, United States census sample,
      2000. Fifteen people in every thousand earned more than
      $100,000 and are not shown.</caption>
      <image xml:id="image-income" width="85%">
        <description>
          A histogram of personal income with bars ten thousand
          dollars wide. The tallest bar is the first, covering
          incomes under ten thousand dollars, and each bar after
          it is shorter than the one before, so the distribution
          falls away steadily to the right with a long thin
          tail. The bars above fifty thousand dollars are only a
          few percent as tall as the first. The median of about
          sixteen thousand nine hundred dollars sits inside the
          second bar, near the bulk of the data, while the mean
          of about twenty-four thousand dollars is dragged to
          the right of it, into the much shorter third bar,
          by the small number of very high incomes.
        </description>
        <asymptote>
size(13cm,6cm,IgnoreAspect);
real[] h = {340,232,168,100,55,35,20,15,10,10};
real bw = 10;
for(int i = 0; i &lt; h.length; ++i){
  real x0 = i*bw;
  filldraw((x0,0)--(x0+bw,0)--(x0+bw,h[i])--(x0,h[i])--cycle,
           lightgray, black);
}
draw((0,0)--(108,0), black);
for(int t = 0; t &lt;= 100; t += 20){
  draw((t,0)--(t,-10));
  label(string(t), (t,-12), S);
}
draw((16.9,0)--(16.9,390), blue+dashed);
label("median", (16.9,390), N, blue);
draw((24,0)--(24,320), red+dashed);
label("mean", (24,320), NE, red);
label("Income (thousands of dollars)", (54,-42));
label(rotate(90)*"People per 1,000", (-9,180));
        </asymptote>
      </image>
    </figure>

    <example xml:id="ex-skewed-income">
      <title>Which number is the typical income?</title>
      <statement>
        <p>
          For this sample the mean income is
          $24,000 and the median income is
          $16,900. Which figure better represents a
          typical person in the sample?
        </p>
      </statement>
      <solution>
        <p>
          The median. More than half the sample earns under
          $20,000, so a reported average of
          $24,000 is above what most of these people
          make. The relatively few large incomes in the right
          tail enter the total at full size and drag the mean
          upward, while the median only registers them as
          <q>more values above the middle,</q> which they would
          be at any size.
        </p>
        <p>
          This is why income is almost always reported as a
          median. A headline average income can rise while most
          individual incomes fall, simply because the top of the
          distribution pulled away.
        </p>
      </solution>
    </example>

    <p>
      The pattern generalizes. In a right-skewed distribution
      the mean is usually greater than the median; in a
      left-skewed distribution the mean is usually less than the
      median; in a roughly symmetric distribution the two land
      close together. A useful way to remember it: the mean
      chases the tail.
    </p>

    <exercise xml:id="check-skew-mean-median">
      <statement>
        <p>
          A distribution of house prices is strongly skewed to
          the right. What should you expect of its mean and
          median?
        </p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement>
            <p>The mean is larger than the median.</p>
          </statement>
          <feedback>
            <p>
              Correct. The expensive houses in the right tail
              inflate the total, and therefore the mean, while
              the median only counts them as values above the
              middle.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>The median is larger than the mean.</p>
          </statement>
          <feedback>
            <p>
              That is the left-skewed pattern. A tail stretching
              to the right pulls the mean to the right, above
              the median.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>They are equal, since both measure center.</p>
          </statement>
          <feedback>
            <p>
              They are close only when the distribution is
              roughly symmetric. The whole reason to compare
              them is that skewness separates them.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>The mean is larger, and the median is therefore
            not a valid summary.</p>
          </statement>
          <feedback>
            <p>
              The first half is right but the conclusion is
              backward. Under skewness the median is the
              <em>more</em> trustworthy summary, which is why
              home prices are reported as medians.
            </p>
          </feedback>
        </choice>
      </choices>
    </exercise>
  </subsection>

  <subsection xml:id="subsec-choosing">
    <title>Guidelines for choosing</title>

    <assemblage xml:id="asm-choosing-center">
      <title>Choosing a measure of center</title>
      <p>
        Use the <term>mean</term> only when the distribution is
        reasonably symmetric with a single central peak and no
        outliers.
      </p>
      <p>
        Use the <term>median</term> in every other case
        <mdash/> whenever the distribution is skewed or
        outliers are present.
      </p>
      <p>
        Always plot the data first. Shape is not visible in a
        list of numbers, and you cannot choose between these
        two measures until you have seen it.
      </p>
    </assemblage>

    <p>
      That last instruction is the one students skip, and it is
      the one that matters most. The mean and the median can be
      computed from any list of numbers without ever looking at
      the distribution, and both will return a perfectly
      respectable answer for data that has two separate peaks,
      or a value recorded as <m>-99</m> for <q>missing.</q> The
      graph is what tells you whether the number you just
      computed means anything.
    </p>

    <exercise xml:id="check-choose-measure">
      <statement>
        <p>
          You are summarizing the annual salaries of the 40
          employees of a small company. Thirty-nine earn between
          $45,000 and $80,000; the founder earns
          $900,000. Which summary should you report, and
          why?
        </p>
      </statement>
      <choices randomize="yes">
        <choice correct="yes">
          <statement>
            <p>The median, because the founder's salary is an
            outlier that would inflate the mean.</p>
          </statement>
          <feedback>
            <p>
              Correct. The founder alone adds roughly
              $20,000 to the mean salary, describing a
              company no employee works for. The median stays
              inside the range where thirty-nine of them
              actually are.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>The mean, because it uses all 40 salaries and the
            median ignores most of them.</p>
          </statement>
          <feedback>
            <p>
              Using every value is exactly the problem here. The
              median does account for all 40 observations
              <mdash/> it needs the full ordered list to find
              the middle <mdash/> but it refuses to let one
              extreme value dominate.
            </p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>The mean, after deleting the founder's salary as
            a data-entry error.</p>
          </statement>
          <feedback>
            <p>
              Nothing suggests an error; the salary is real.
              Values are deleted only when they are known to be
              wrong, and <q>inconvenient</q> is not the same as
              <q>wrong.</q>
            </p>
          </feedback>
        </choice>
        <choice>
          <statement>
            <p>Either one, since with 40 employees a single
            salary cannot matter much.</p>
          </statement>
          <feedback>
            <p>
              A value more than ten times the typical salary
              matters at any realistic <m>n</m>. Here it shifts
              the mean by about $20,000.
            </p>
          </feedback>
        </choice>
      </choices>
    </exercise>

    <exercise xml:id="check-home-prices">
      <statement>
        <p>
          A news report states that the average home price in a
          neighborhood is $650,000 while the median home
          price is $310,000. In two or three sentences,
          say what this gap tells you about the shape of the
          distribution and which figure you would quote to
          someone house-hunting there.
        </p>
        <response/>
      </statement>
      <solution>
        <p>
          A mean more than double the median says the
          distribution is strongly skewed to the right: a small
          number of very expensive homes inflates the total
          while leaving the middle of the ordered list alone.
          Half the homes in the neighborhood sell for under
          $310,000, so the median is what a buyer should
          be told; the $650,000 average describes a
          house that is far from typical.
        </p>
        <p>
          An adequate answer identifies right skew and picks the
          median. A strong answer explains the mechanism
          <mdash/> that the high prices enter the mean at full
          value but register with the median only as values
          above the middle <mdash/> and states what the median
          guarantees, namely that half the homes fall on each
          side of it.
        </p>
      </solution>
    </exercise>
  </subsection>

  <conclusion xml:id="summary-choosing-center">
    <p>
      The mean and the median answer to different masters. The
      mean adds every value into a total, so an outlier or a
      long tail drags it; the median depends only on position in
      the ordered list, so extreme values barely move it. A
      measure with that stability is called resistant, and the
      median is resistant while the mean is not.
    </p>
    <p>
      Report the mean for distributions that are reasonably
      symmetric with a single peak and no outliers. Report the
      median otherwise. When the two are far apart, that gap is
      itself information: it signals skewness or an extreme
      value, and the direction of the gap tells you which way
      the tail runs.
    </p>
    <p>
      None of this can be decided from a list of numbers. Plot
      the data first, every time.
    </p>
    <p>
      Adapted from <em>Concepts in Statistics</em>
      (SUNY / Lumen Learning), CC BY 4.0. Income distribution
      based on United States census data for 2000 as reported in
      the source; the underlying counts are reconstructed to
      reproduce the published mean and median.
    </p>
  </conclusion>
</section>
"""

FILES = {
    "sec-mean-median.ptx": SEC_MEAN_MEDIAN,
    "sec-choosing-center.ptx": SEC_CHOOSING_CENTER,
}

CONTROL_CHARS = {
    "\f": "\\f (formfeed)",
    "\b": "\\b (backspace)",
    "\v": "\\v (vertical tab)",
}


def check_control_chars():
    failed = False
    for name, body in FILES.items():
        for char, label in CONTROL_CHARS.items():
            if char in body:
                idx = body.index(char)
                line = body.count("\n", 0, idx) + 1
                sys.stderr.write(
                    f"FATAL: {name} contains {label} at line {line}.\n"
                )
                failed = True
    if failed:
        sys.exit(1)


def main():
    force = "--force" in sys.argv
    check_control_chars()

    if not os.path.isdir(SRC):
        sys.stderr.write(f"FATAL: no '{SRC}' directory here.\n")
        sys.exit(1)

    for name, body in sorted(FILES.items()):
        path = os.path.join(SRC, name)
        if os.path.exists(path) and not force:
            print(f"skip  {path} (exists) - use --force")
            continue
        with open(path, "w", encoding="utf-8", newline="\n") as handle:
            handle.write(body)
        print(f"write {path} ({len(body.encode('utf-8'))} bytes)")


if __name__ == "__main__":
    main()
