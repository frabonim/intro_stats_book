var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-histograms",
  "level": "1",
  "url": "sec-histograms.html",
  "type": "Section",
  "number": "1.1",
  "title": "Histograms",
  "body": " Histograms    Describe the distribution of a quantitative variable using a histogram.  Read counts and intervals from a histogram.  Convert a count into a relative frequency and interpret it in context.  Apply the endpoint convention for assigning values to bins.  Explain how bin width affects the appearance of a distribution.     Our goal in data analysis is to describe patterns in data and build a useful summary of a group. A graph that summarizes the distribution of a variable lets us see two things at once: the possible values the variable takes, and how many individuals fall at each value or interval of values.  A dotplot does this well for small data sets. A histogram is an alternative that works far better for large ones. A histogram divides the variable values into equal-sized intervals and shows how many individuals fall in each one.     From dots to bars  Consider hip girth the measurement around the hips for adults who exercise regularly. The measurements range from cm to cm.  A dotplot of values is readable but crowded: each individual gets its own dot, and stacks near the center become tall and hard to count. The histogram fixes this in two steps.  Step one: choose bins. Divide the range into equal-sized intervals called bins . Here we use a bin width of cm, starting at .  Step two: count and draw. Count how many individuals fall in each bin, then draw a bar whose height is that count.   Hip girth measurements for adults who exercise regularly, with a bin width of cm.   A histogram of hip girth for 507 adults. The horizontal axis runs from 75 to 130 centimeters in bins of width 5. Bar heights rise from 2 at the left to a peak of 164 in the bin from 95 to 100 centimeters, then fall off to the right, reaching 1 in the final bin. The distribution is roughly bell-shaped with a slightly longer tail on the right.     The height of each bar is the count (also called the frequency ) of individuals in that bin. Reading the graph: adults have hip measurements between and cm, and adults fall between and cm.     In , what does the height of a bar tell you?      How many individuals have values falling inside that bin.    Correct. The height is the count, or frequency, for that interval.      The value of the variable for individuals in that bin.    The variable value is read off the horizontal axis. The height counts individuals.      The width of the interval that bin covers.    Every bin here has the same width, cm. The bars differ in height, not width.      The average hip girth of individuals in that bin.    A histogram shows counts, not averages. Nothing in the graph reports a mean.         A histogram is generally a better choice than a dotplot when the data set is large.    True. A dotplot draws one mark per individual, so with hundreds or thousands of values the stacks become impossible to read. A histogram groups individuals into bins, so the number of bars stays manageable no matter how many individuals there are.       The endpoint convention  A question comes up immediately. If one adult measures exactly cm, does that person belong to the bin from to , or the bin from to ? Both bins name as an endpoint, and counting the person twice or not at all would be wrong.  Statisticians settle this with a convention, applied consistently to every bin.   Which bin gets the endpoint?  A bin includes its left-hand endpoint and excludes its right-hand endpoint.  So the bin labeled to contains every individual with a value of or more, up to but not including . An adult measuring exactly cm belongs to the next bin.  Every histogram in this course follows this rule.   The convention is arbitrary the opposite choice would work equally well but applying it consistently guarantees that every individual is counted exactly once.     An adult in this study has a hip girth of exactly cm. Which bin counts this person?     The bin from to   Correct. A bin includes its left endpoint, so belongs to the bin that starts at .     The bin from to   That bin excludes its right endpoint, so it stops just short of . Review .     Both bins, since is a shared boundary   Counting one person twice would make the bar heights sum to more than . The convention exists precisely to prevent this.     Neither bin boundary values are excluded   Then this adult would vanish from the graph. Every individual lands in exactly one bin.         From counts to relative frequencies  A count answers how many, but often the more useful question is what fraction. Knowing that adults fall in a bin means little until you know whether the sample had people or . Dividing the count by the total gives a relative frequency , usually reported as a percentage.   Frequency distribution of hip girth for adults    Bin (cm)  Count  Relative frequency   to  to  to  to  to  to  to  to  to  to  to          Percentage in a single bin   Approximately what percentage of the sample has hip measurements between and cm?    Of the adults, fall in this bin.   About of the adults in this sample have hip girths of at least cm but less than cm.     Percentage across several bins   A pants manufacturer plans to produce three sizes of sweatpants. Size Large will fit hip girths of cm or more. What percentage of the sample will wear size Large?    No single bin answers this, so add the counts for every bin at cm and above:    About of the adults in this sample will wear size Large sweatpants.     Spotlight on percentages  Percent means per hundred. A percentage describes a number as a fraction out of .  Step 1 Identify the ratio. Fill in the blanks: (a part) out of (the group). The part is the subset with the special characteristic you care about.  Step 2 Calculate. Divide the part by the group size, then multiply by .  Step 3 Interpret in context. For every individuals in the group, this many will have the characteristic. Name the group and name the characteristic a percentage with no context is not an answer.   Applying that pattern to : the ratio is out of adults; the calculation gives ; and the interpretation is for every adults in this sample, about will wear size Large.     Using , approximately what percentage of the sample has a hip girth of at least cm but less than cm?     About   Correct: .     About   is the count, not a percentage. A percentage can never exceed when the part is a subset of the group.     About   This divides in the wrong direction ( , which is not a percentage at all). Divide the part by the group.     About   That is the bin from to cm. Check the row labels.         Approximately what percentage of the sample has a hip girth of less than cm?     About   Correct. Add the first four bins: , and .     About   That is only the bin from to . Less than includes every bin below it as well.     About   That is the percentage below cm. You included one bin too many.     About   This is the complement of the right answer the percentage at or above  cm.         You compute that of this sample has a hip girth of at least cm but less than cm. Write one complete sentence interpreting that number for someone who has not seen the data. Name the group, name the characteristic, and make the sentence stand on its own.     Something like: About out of every adults in this sample of regular exercisers have a hip girth of at least cm but less than cm.  A complete interpretation names the group (adults in this sample who exercise regularly), the characteristic (hip girth in that interval), and the size of the share. Writing only of the data restates the arithmetic without saying what it describes. Note also that this statement is about this sample , not about all adults everywhere.       Two axes, one picture  Because every relative frequency comes from dividing by the same total, rescaling the vertical axis from counts to percentages does not change the shape of the histogram at all. Only the numbers on the axis change.   The same data as , with the vertical axis showing relative frequency instead of count. The shape is identical.   A relative frequency histogram of hip girth for the same 507 adults. The bars have exactly the same shape as the frequency histogram, but the vertical axis now runs from 0 to 35 percent instead of 0 to 180 individuals, with the tallest bar at about 32 percent.     This matters most when comparing two groups of different sizes. Suppose you wanted to compare hip girth for these exercisers against a sample of non-exercisers. Counts would be useless every bar in the smaller group would be shorter simply because the group is smaller. Relative frequencies put both groups on the same scale, so differences in the bars mean differences in the distributions.     Why would you use relative frequency rather than count when comparing the hip girth distributions of two samples of different sizes?      Counts are affected by sample size, so the larger group would have taller bars regardless of its shape.    Correct. Dividing by the group total removes the effect of sample size, leaving only the shape of the distribution to compare.      Relative frequency changes the shape of the histogram to make differences easier to see.    The shape does not change at all compare with . Only the axis labels differ.      Counts cannot be computed when the sample sizes differ.    Counts are always computable. The problem is that they are not comparable across groups of different sizes.      Relative frequency is more precise than a count.    A relative frequency is derived from the count, so it carries no extra precision rounding usually loses a little.         When is a histogram the right graph?  A histogram describes the distribution of a quantitative variable one whose values are numbers that can be ordered and measured. Hip girth, exam score, household income, and reaction time all qualify.  A categorical variable, whose values are labels rather than measurements, calls for a bar graph instead. Eye color, academic major, and brand of phone have no natural numeric ordering, so there is nothing to divide into bins.  The visual difference reflects this. Histogram bars touch, because the bins are adjacent intervals on a continuous number line. Bar graph bars are drawn with gaps, because the categories are separate and their order on the page carries no meaning.     A researcher records the academic major of each student in a study. Which graph should she use to display this variable?      A bar graph, because major is a categorical variable.    Correct. Majors are labels, not measurements, so there are no intervals to bin.      A histogram, because she can count students in each major.    Being countable is not the same as being quantitative. A histogram needs values that can be divided into numeric intervals, and biology cannot be placed on a number line.      A histogram, after assigning each major a number.    Assigning arbitrary numbers to labels does not make the variable quantitative. The bins and the shape would be artifacts of whatever numbering was chosen.      Either one, since both display counts.    Both display counts, but a histogram also claims its horizontal axis is a meaningful numeric scale. For majors, that claim would be false.         Look at once more. In two or three sentences, describe what it tells you about hip girth among these adults. Where are most of the measurements concentrated, and is the picture symmetric or lopsided?     A good description might read: Hip measurements for these adults run from about to cm, with most values concentrated between and cm. The tallest bar covers to cm. The distribution is roughly bell-shaped but not quite symmetric: it has a longer tail stretching to the right, with a handful of adults measuring well above cm and no matching group at the low end.  The three things worth naming in any description of a distribution are where the values fall overall, where they cluster, and whether the two sides balance.       A histogram displays the distribution of a quantitative variable by dividing its values into equal-sized bins and drawing a bar whose height is the count, or frequency, of individuals in each bin. Bins include their left endpoint and exclude their right endpoint, so every individual is counted exactly once.  Dividing a count by the group total gives a relative frequency, usually written as a percentage. Relative frequencies allow comparison between groups of different sizes, and rescaling the vertical axis to show them does not change the shape of the graph.  Bin width is a choice made by whoever draws the graph. Wider bins smooth the distribution and hide detail; narrower bins reveal detail but can make random variation look meaningful.  Adapted from Concepts in Statistics (SUNY \/ Lumen Learning), CC BY 4.0. Hip girth measurements from the body dimensions data of Heinz, Peterson, Johnson, and Kerk (2003).   "
},
{
  "id": "sec-histograms-2",
  "level": "2",
  "url": "sec-histograms.html#sec-histograms-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "  Describe the distribution of a quantitative variable using a histogram.  Read counts and intervals from a histogram.  Convert a count into a relative frequency and interpret it in context.  Apply the endpoint convention for assigning values to bins.  Explain how bin width affects the appearance of a distribution.   "
},
{
  "id": "sec-histograms-3-2",
  "level": "2",
  "url": "sec-histograms.html#sec-histograms-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "histogram "
},
{
  "id": "subsec-building-histogram-4",
  "level": "2",
  "url": "sec-histograms.html#subsec-building-histogram-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bins "
},
{
  "id": "fig-hip-histogram",
  "level": "2",
  "url": "sec-histograms.html#fig-hip-histogram",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " Hip girth measurements for adults who exercise regularly, with a bin width of cm.   A histogram of hip girth for 507 adults. The horizontal axis runs from 75 to 130 centimeters in bins of width 5. Bar heights rise from 2 at the left to a peak of 164 in the bin from 95 to 100 centimeters, then fall off to the right, reaching 1 in the final bin. The distribution is roughly bell-shaped with a slightly longer tail on the right.    "
},
{
  "id": "subsec-building-histogram-7",
  "level": "2",
  "url": "sec-histograms.html#subsec-building-histogram-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "count frequency "
},
{
  "id": "check-bar-height",
  "level": "2",
  "url": "sec-histograms.html#check-bar-height",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "",
  "body": "  In , what does the height of a bar tell you?      How many individuals have values falling inside that bin.    Correct. The height is the count, or frequency, for that interval.      The value of the variable for individuals in that bin.    The variable value is read off the horizontal axis. The height counts individuals.      The width of the interval that bin covers.    Every bin here has the same width, cm. The bars differ in height, not width.      The average hip girth of individuals in that bin.    A histogram shows counts, not averages. Nothing in the graph reports a mean.     "
},
{
  "id": "check-histogram-vs-dotplot",
  "level": "2",
  "url": "sec-histograms.html#check-histogram-vs-dotplot",
  "type": "Checkpoint",
  "number": "1.1.3",
  "title": "",
  "body": "  A histogram is generally a better choice than a dotplot when the data set is large.    True. A dotplot draws one mark per individual, so with hundreds or thousands of values the stacks become impossible to read. A histogram groups individuals into bins, so the number of bars stays manageable no matter how many individuals there are.   "
},
{
  "id": "check-endpoint-bin",
  "level": "2",
  "url": "sec-histograms.html#check-endpoint-bin",
  "type": "Checkpoint",
  "number": "1.1.4",
  "title": "",
  "body": "  An adult in this study has a hip girth of exactly cm. Which bin counts this person?     The bin from to   Correct. A bin includes its left endpoint, so belongs to the bin that starts at .     The bin from to   That bin excludes its right endpoint, so it stops just short of . Review .     Both bins, since is a shared boundary   Counting one person twice would make the bar heights sum to more than . The convention exists precisely to prevent this.     Neither bin boundary values are excluded   Then this adult would vanish from the graph. Every individual lands in exactly one bin.     "
},
{
  "id": "subsec-relative-frequency-2",
  "level": "2",
  "url": "sec-histograms.html#subsec-relative-frequency-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "relative frequency "
},
{
  "id": "table-hip-frequencies",
  "level": "2",
  "url": "sec-histograms.html#table-hip-frequencies",
  "type": "Table",
  "number": "1.1.5",
  "title": "Frequency distribution of hip girth for <span class=\"process-math\">\\(507\\)<\/span> adults",
  "body": " Frequency distribution of hip girth for adults    Bin (cm)  Count  Relative frequency   to  to  to  to  to  to  to  to  to  to  to        "
},
{
  "id": "ex-relative-frequency-one-bin",
  "level": "2",
  "url": "sec-histograms.html#ex-relative-frequency-one-bin",
  "type": "Example",
  "number": "1.1.6",
  "title": "Percentage in a single bin.",
  "body": " Percentage in a single bin   Approximately what percentage of the sample has hip measurements between and cm?    Of the adults, fall in this bin.   About of the adults in this sample have hip girths of at least cm but less than cm.   "
},
{
  "id": "ex-sweatpants",
  "level": "2",
  "url": "sec-histograms.html#ex-sweatpants",
  "type": "Example",
  "number": "1.1.7",
  "title": "Percentage across several bins.",
  "body": " Percentage across several bins   A pants manufacturer plans to produce three sizes of sweatpants. Size Large will fit hip girths of cm or more. What percentage of the sample will wear size Large?    No single bin answers this, so add the counts for every bin at cm and above:    About of the adults in this sample will wear size Large sweatpants.   "
},
{
  "id": "check-compute-relfreq",
  "level": "2",
  "url": "sec-histograms.html#check-compute-relfreq",
  "type": "Checkpoint",
  "number": "1.1.8",
  "title": "",
  "body": "  Using , approximately what percentage of the sample has a hip girth of at least cm but less than cm?     About   Correct: .     About   is the count, not a percentage. A percentage can never exceed when the part is a subset of the group.     About   This divides in the wrong direction ( , which is not a percentage at all). Divide the part by the group.     About   That is the bin from to cm. Check the row labels.     "
},
{
  "id": "check-cumulative",
  "level": "2",
  "url": "sec-histograms.html#check-cumulative",
  "type": "Checkpoint",
  "number": "1.1.9",
  "title": "",
  "body": "  Approximately what percentage of the sample has a hip girth of less than cm?     About   Correct. Add the first four bins: , and .     About   That is only the bin from to . Less than includes every bin below it as well.     About   That is the percentage below cm. You included one bin too many.     About   This is the complement of the right answer the percentage at or above  cm.     "
},
{
  "id": "check-interpret-percent",
  "level": "2",
  "url": "sec-histograms.html#check-interpret-percent",
  "type": "Checkpoint",
  "number": "1.1.10",
  "title": "",
  "body": "  You compute that of this sample has a hip girth of at least cm but less than cm. Write one complete sentence interpreting that number for someone who has not seen the data. Name the group, name the characteristic, and make the sentence stand on its own.     Something like: About out of every adults in this sample of regular exercisers have a hip girth of at least cm but less than cm.  A complete interpretation names the group (adults in this sample who exercise regularly), the characteristic (hip girth in that interval), and the size of the share. Writing only of the data restates the arithmetic without saying what it describes. Note also that this statement is about this sample , not about all adults everywhere.   "
},
{
  "id": "fig-hip-relative",
  "level": "2",
  "url": "sec-histograms.html#fig-hip-relative",
  "type": "Figure",
  "number": "1.1.11",
  "title": "",
  "body": " The same data as , with the vertical axis showing relative frequency instead of count. The shape is identical.   A relative frequency histogram of hip girth for the same 507 adults. The bars have exactly the same shape as the frequency histogram, but the vertical axis now runs from 0 to 35 percent instead of 0 to 180 individuals, with the tallest bar at about 32 percent.    "
},
{
  "id": "check-why-relative",
  "level": "2",
  "url": "sec-histograms.html#check-why-relative",
  "type": "Checkpoint",
  "number": "1.1.12",
  "title": "",
  "body": "  Why would you use relative frequency rather than count when comparing the hip girth distributions of two samples of different sizes?      Counts are affected by sample size, so the larger group would have taller bars regardless of its shape.    Correct. Dividing by the group total removes the effect of sample size, leaving only the shape of the distribution to compare.      Relative frequency changes the shape of the histogram to make differences easier to see.    The shape does not change at all compare with . Only the axis labels differ.      Counts cannot be computed when the sample sizes differ.    Counts are always computable. The problem is that they are not comparable across groups of different sizes.      Relative frequency is more precise than a count.    A relative frequency is derived from the count, so it carries no extra precision rounding usually loses a little.     "
},
{
  "id": "subsec-when-histogram-2",
  "level": "2",
  "url": "sec-histograms.html#subsec-when-histogram-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quantitative "
},
{
  "id": "subsec-when-histogram-3",
  "level": "2",
  "url": "sec-histograms.html#subsec-when-histogram-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "categorical "
},
{
  "id": "check-variable-type",
  "level": "2",
  "url": "sec-histograms.html#check-variable-type",
  "type": "Checkpoint",
  "number": "1.1.13",
  "title": "",
  "body": "  A researcher records the academic major of each student in a study. Which graph should she use to display this variable?      A bar graph, because major is a categorical variable.    Correct. Majors are labels, not measurements, so there are no intervals to bin.      A histogram, because she can count students in each major.    Being countable is not the same as being quantitative. A histogram needs values that can be divided into numeric intervals, and biology cannot be placed on a number line.      A histogram, after assigning each major a number.    Assigning arbitrary numbers to labels does not make the variable quantitative. The bins and the shape would be artifacts of whatever numbering was chosen.      Either one, since both display counts.    Both display counts, but a histogram also claims its horizontal axis is a meaningful numeric scale. For majors, that claim would be false.     "
},
{
  "id": "check-describe-distribution",
  "level": "2",
  "url": "sec-histograms.html#check-describe-distribution",
  "type": "Checkpoint",
  "number": "1.1.14",
  "title": "",
  "body": "  Look at once more. In two or three sentences, describe what it tells you about hip girth among these adults. Where are most of the measurements concentrated, and is the picture symmetric or lopsided?     A good description might read: Hip measurements for these adults run from about to cm, with most values concentrated between and cm. The tallest bar covers to cm. The distribution is roughly bell-shaped but not quite symmetric: it has a longer tail stretching to the right, with a handful of adults measuring well above cm and no matching group at the low end.  The three things worth naming in any description of a distribution are where the values fall overall, where they cluster, and whether the two sides balance.   "
},
{
  "id": "sec-histogram-bins",
  "level": "1",
  "url": "sec-histogram-bins.html",
  "type": "Section",
  "number": "1.2",
  "title": "How Bins Shape the Picture",
  "body": " How Bins Shape the Picture    Explain how bin width and starting point change the appearance of a histogram.  Recognize that shape, center, and spread read from a histogram are partly artifacts of binning.  Identify histograms whose bins are too wide or too narrow to be useful.  Choose a bin width appropriate to the context of the data.     We now have two graphs that summarize the distribution of a quantitative variable: the dotplot and the histogram. From a dotplot we described the pattern in the data with statements about shape , center , and spread .  We have to be more careful making the same statements from a histogram. A dotplot shows every individual value, so its appearance is fixed by the data. A histogram shows grouped values, and the grouping is a choice. Our perception of shape, center, and spread can change depending on how the bins are defined.     The same data, three ways  Twenty-one students took an exam. Here are their scores:  , , , , , , , , , , , , , , , , , , , ,  Below are three histograms built from exactly these twenty-one numbers. Nothing about the data changed between them.   Bin width , first bin starting at . The distribution looks symmetric with a single central peak.   A histogram of 21 exam scores using bins of width 20 starting at 40. There are three bars: 6 students from 40 to 60, 9 students from 60 to 80, and 6 students from 80 to 100. The picture is perfectly symmetric with a peak in the middle.      Bin width , first bin still starting at . Now it appears that most students scored between and .   A histogram of the same 21 exam scores using bins of width 10 starting at 40. The six bars have heights 2, 4, 4, 5, 4, and 2. The tallest bar covers scores from 70 to 80.      Bin width still , but the first bin now starts at . The distribution now looks slightly skewed to the right, and typical scores appear to fall between and .   A histogram of the same 21 exam scores using bins of width 10 starting at 45 instead of 40. The six bars have heights 3, 4, 6, 4, 3, and 1. The tallest bar now covers scores from 65 to 75, and a short bar at the far right gives the distribution a slight rightward tail.     These are not small differences. is perfectly symmetric. leans right. Reading , you would say most students scored in the s. Reading , you would say typical students scored between and . Same twenty-one students.     All three histograms above display exactly the same twenty-one exam scores.    True, and this is the point of the section. Nothing about the data changed. Only the bin width and the starting point of the first bin changed, and that was enough to alter the apparent shape of the distribution.       Why the grouping changes the picture  Five students scored in the s: , , , , and . Follow just those five through the three graphs.  In , all five land in the middle bin together with the four students who scored , , , and . They disappear into a group of nine.  In , those five form a bin entirely of their own, because no other student scored between and . That is the highlighted bar, and it is what makes the s look like the typical performance.  In , the five get split: , , and fall in the bin from to , while and fall in the bin from to . The group of five never appears as a group at all.  When we change the bins, the data gets grouped differently, and the different grouping changes the appearance of the histogram. Nothing deceptive is happening. Every one of these graphs is an accurate count.     Why do the five students who scored in the s form their own bar in but not in ?      The shifted bins cut through the middle of the group, splitting it across two bars.    Correct. The boundary at falls between and , dividing a group that the other binning kept together.      The shifted histogram uses a wider bin, so more students are absorbed into each bar.    Both histograms use a bin width of . Only the starting point changed.      Some of those students are excluded from the shifted histogram.    Every student appears in every histogram. All three have bars summing to .      The shifted histogram sorts the scores differently before binning.    Binning does not depend on the order of the data. Each value is simply placed into whichever interval contains it.         Choosing a bin width  If three defensible choices give three different pictures, which one should we use? There is no formula, but there are two failure modes to avoid.   Two ways to go wrong  Bins too wide. Grouping the data into only a few bins produces a skyscraper a couple of towering bars that say almost nothing about variability within the group.  Bins too narrow. Grouping the data into very many bins produces a pancake a long row of bars one or two units tall, where random gaps look like real features and no pattern is visible.  Between those extremes, prefer a bin width that means something in context.   That last point is what settles the exam-score example. Of the three graphs, is the most useful summary not because -point bins are mathematically optimal, but because -point intervals starting at round numbers correspond to letter grades. The bins carry meaning the reader already understands.  A good practice is to look at more than one binning before describing a distribution, and to be suspicious of any feature that appears under one choice and vanishes under another.     A student builds a histogram of commute times using just two bins. What is the problem?      Two bins hide almost all the variability the graph is a skyscraper that says little more than a single count would.    Correct. With bins that wide, individuals with very different commute times get lumped together, and the shape of the distribution is invisible.      Histograms are required to have at least five bins.    There is no such rule. The guidance in is about usefulness, not a minimum count.      The bar heights will not add up to .    They will. Every individual lands in exactly one bin no matter how wide the bins are.      Two bins will make the distribution look skewed when it is symmetric.    The real problem is more basic: with two bars there is essentially no shape to read at all, skewed or otherwise.         A researcher graphs the ages of survey respondents using a bin width of one year, producing about bars that are mostly , , or units tall. What should she do?      Widen the bins, so the overall pattern becomes visible.    Correct. This is the pancake problem. With values spread over bins, the bar heights are mostly noise.      Narrow the bins further, to show even more detail.    That makes it worse. The graph already shows more detail than observations can support.      Remove the bins with a count of zero.    Deleting empty bins would break the numeric scale on the horizontal axis and misrepresent where the gaps in the data are.      Collect more data, since histograms require large samples.    More data would help, but it is not necessary. A sensible bin width will give a readable histogram of these values.         Suppose you are graphing the annual household incomes of families in a county, where values range from near to about . Propose a bin width, and give one sentence defending it. What makes your choice meaningful to a reader?     Many answers are defensible. A bin width of gives about sixteen bars across the range enough to show shape without becoming a pancake and the boundaries fall at round figures that readers can hold in their heads.  A bin width of would give forty bars, which is probably too many unless the county is large. A bin width of would give four, which is a skyscraper.  The strongest answers do what the exam-score example did: tie the bin boundaries to something the audience already recognizes, such as federal poverty thresholds or tax brackets.       Descriptions of shape, center, and spread read from a histogram are affected by how the bins are defined. Changing the bin width, or keeping the width and shifting the starting point, regroups the data and can change the apparent shape of the distribution.  Avoid bins so wide that the graph becomes a skyscraper hiding all variability, and bins so narrow that it becomes a pancake showing only noise. When a bin width has meaning in context, prefer it.  A dotplot does not have this problem, because it shows every individual value. That is the trade: the histogram handles large data sets, and pays for it with a dependence on the binning choice.  Adapted from Concepts in Statistics (SUNY \/ Lumen Learning), CC BY 4.0.   "
},
{
  "id": "sec-histogram-bins-2",
  "level": "2",
  "url": "sec-histogram-bins.html#sec-histogram-bins-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "  Explain how bin width and starting point change the appearance of a histogram.  Recognize that shape, center, and spread read from a histogram are partly artifacts of binning.  Identify histograms whose bins are too wide or too narrow to be useful.  Choose a bin width appropriate to the context of the data.   "
},
{
  "id": "fig-bins-wide",
  "level": "2",
  "url": "sec-histogram-bins.html#fig-bins-wide",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " Bin width , first bin starting at . The distribution looks symmetric with a single central peak.   A histogram of 21 exam scores using bins of width 20 starting at 40. There are three bars: 6 students from 40 to 60, 9 students from 60 to 80, and 6 students from 80 to 100. The picture is perfectly symmetric with a peak in the middle.    "
},
{
  "id": "fig-bins-medium",
  "level": "2",
  "url": "sec-histogram-bins.html#fig-bins-medium",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " Bin width , first bin still starting at . Now it appears that most students scored between and .   A histogram of the same 21 exam scores using bins of width 10 starting at 40. The six bars have heights 2, 4, 4, 5, 4, and 2. The tallest bar covers scores from 70 to 80.    "
},
{
  "id": "fig-bins-shifted",
  "level": "2",
  "url": "sec-histogram-bins.html#fig-bins-shifted",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " Bin width still , but the first bin now starts at . The distribution now looks slightly skewed to the right, and typical scores appear to fall between and .   A histogram of the same 21 exam scores using bins of width 10 starting at 45 instead of 40. The six bars have heights 3, 4, 6, 4, 3, and 1. The tallest bar now covers scores from 65 to 75, and a short bar at the far right gives the distribution a slight rightward tail.    "
},
{
  "id": "check-same-data",
  "level": "2",
  "url": "sec-histogram-bins.html#check-same-data",
  "type": "Checkpoint",
  "number": "1.2.4",
  "title": "",
  "body": "  All three histograms above display exactly the same twenty-one exam scores.    True, and this is the point of the section. Nothing about the data changed. Only the bin width and the starting point of the first bin changed, and that was enough to alter the apparent shape of the distribution.   "
},
{
  "id": "check-five-students",
  "level": "2",
  "url": "sec-histogram-bins.html#check-five-students",
  "type": "Checkpoint",
  "number": "1.2.5",
  "title": "",
  "body": "  Why do the five students who scored in the s form their own bar in but not in ?      The shifted bins cut through the middle of the group, splitting it across two bars.    Correct. The boundary at falls between and , dividing a group that the other binning kept together.      The shifted histogram uses a wider bin, so more students are absorbed into each bar.    Both histograms use a bin width of . Only the starting point changed.      Some of those students are excluded from the shifted histogram.    Every student appears in every histogram. All three have bars summing to .      The shifted histogram sorts the scores differently before binning.    Binning does not depend on the order of the data. Each value is simply placed into whichever interval contains it.     "
},
{
  "id": "check-skyscraper",
  "level": "2",
  "url": "sec-histogram-bins.html#check-skyscraper",
  "type": "Checkpoint",
  "number": "1.2.6",
  "title": "",
  "body": "  A student builds a histogram of commute times using just two bins. What is the problem?      Two bins hide almost all the variability the graph is a skyscraper that says little more than a single count would.    Correct. With bins that wide, individuals with very different commute times get lumped together, and the shape of the distribution is invisible.      Histograms are required to have at least five bins.    There is no such rule. The guidance in is about usefulness, not a minimum count.      The bar heights will not add up to .    They will. Every individual lands in exactly one bin no matter how wide the bins are.      Two bins will make the distribution look skewed when it is symmetric.    The real problem is more basic: with two bars there is essentially no shape to read at all, skewed or otherwise.     "
},
{
  "id": "check-pancake",
  "level": "2",
  "url": "sec-histogram-bins.html#check-pancake",
  "type": "Checkpoint",
  "number": "1.2.7",
  "title": "",
  "body": "  A researcher graphs the ages of survey respondents using a bin width of one year, producing about bars that are mostly , , or units tall. What should she do?      Widen the bins, so the overall pattern becomes visible.    Correct. This is the pancake problem. With values spread over bins, the bar heights are mostly noise.      Narrow the bins further, to show even more detail.    That makes it worse. The graph already shows more detail than observations can support.      Remove the bins with a count of zero.    Deleting empty bins would break the numeric scale on the horizontal axis and misrepresent where the gaps in the data are.      Collect more data, since histograms require large samples.    More data would help, but it is not necessary. A sensible bin width will give a readable histogram of these values.     "
},
{
  "id": "check-defend-bins",
  "level": "2",
  "url": "sec-histogram-bins.html#check-defend-bins",
  "type": "Checkpoint",
  "number": "1.2.8",
  "title": "",
  "body": "  Suppose you are graphing the annual household incomes of families in a county, where values range from near to about . Propose a bin width, and give one sentence defending it. What makes your choice meaningful to a reader?     Many answers are defensible. A bin width of gives about sixteen bars across the range enough to show shape without becoming a pancake and the boundaries fall at round figures that readers can hold in their heads.  A bin width of would give forty bars, which is probably too many unless the county is large. A bin width of would give four, which is a skyscraper.  The strongest answers do what the exam-score example did: tie the bin boundaries to something the audience already recognizes, such as federal poverty thresholds or tax brackets.   "
},
{
  "id": "sec-describing-distributions",
  "level": "1",
  "url": "sec-describing-distributions.html",
  "type": "Section",
  "number": "1.3",
  "title": "Describing a Distribution",
  "body": " Describing a Distribution    Describe the shape of a distribution as skewed, symmetric, or uniform.  Identify the approximate center and spread of a distribution from a histogram.  Recognize outliers as values falling outside the overall pattern.  Write a paragraph summarizing a distribution, supported by percentages.     Reading a histogram is a skill; writing down what you read is a separate one. This section builds a routine for turning a graph into a paragraph. The routine has four parts, always in the same order: shape, center, spread, and outliers.     A worked example: ages of Oscar winners  Here are the ages of the actresses who won the Academy Award for Best Actress each year from through thirty-two winners in all.  , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,   Ages of Academy Award winners for Best Actress, , in bins of width years.   A histogram of the ages of 32 Best Actress winners. Bars rise sharply from age 20 to a peak of 9 winners in the bin from 30 to 35, then fall away to the right. After age 50 the graph is empty except for three isolated bars of height one near ages 61, 74, and 80. The distribution is clearly skewed to the right.     Now work through the four parts in order.  Shape. The distribution of ages appears skewed to the right. Most winners are young: ( of ) were under , and ( of ) were or younger. The long thin tail stretching toward is what makes the distribution right-skewed.  Center. The distribution appears centered between and years. That single bin holds ( of ) of the winners, more than any other.  Spread. The ages run from about to about , so the overall range is approximately years. There is a great deal of variability in the ages of Best Actress winners.  Outliers. Winners older than are unusual. There are three such values, one each in the intervals , , and . Each is separated from the main body of the data by at least one empty bin.     Why is the distribution in described as skewed to the right rather than to the left?      The long, thin tail of the distribution extends toward the higher values on the right.    Correct. Skew is named for the direction of the tail, not the direction of the bulk of the data.      Most of the data is piled up on the left side of the graph.    That is a true observation, and it does accompany right skew, but it is not the definition. Skew is named for the tail.      The tallest bar is to the right of the center of the graph.    The tallest bar is at to , well to the left of the midpoint of the axis.      The values increase from left to right along the axis.    That is true of every histogram and has nothing to do with skew.         In this data set, the winner aged is identified as an outlier. What does that mean?      Her age falls well outside the overall pattern of the rest of the data.    Correct. An outlier is a value that stands apart from the pattern, separated from the main body of the distribution.      Her age was recorded incorrectly and should be removed.    An outlier may be a recording error, but it may also be a perfectly real and interesting value. Jessica Tandy really did win at . Never delete a value just because it is unusual.      She is the oldest person in the data set.    She is, but being the maximum does not by itself make a value an outlier. The -year-old winners are near the top of the main group and are not outliers.      Her age is more than twice the mean age.    No such rule defines an outlier. The judgment is about whether the value sits outside the overall pattern.         Turning observations into a paragraph  Four separate observations are not yet a description. The next step is to assemble them into prose that someone who has not seen the graph could follow.  Here is a plain-language version:   Between and , the Oscar for Best Actress was awarded most often to young actresses: ( of ) of the winners were or younger, with ( of ) between and years of age. Winners ranged in age from about to about , but only of the were over .   And here is the same description using the formal vocabulary of this chapter:   Between and , the Oscar for Best Actress was awarded most often to young actresses. The distribution of ages is skewed to the right: ( of ) of the winners were or younger, with the center of the distribution between and years of age. With winners ranging in age from about to about , the overall range of the distribution is about . But much of this variability is due to three outliers who were older than when they won.   Both paragraphs are good. Notice what they have in common: every claim about the shape is backed by a number, and every number is attached to a unit and a group. Skewed to the right on its own is an assertion. Skewed to the right: of winners were or younger is evidence.   Describing a distribution  Shape. Skewed left, skewed right, symmetric with a central peak, or roughly uniform. Not every distribution fits one of these neatly say so when it does not.  Center. A typical value, or the interval where the data clusters.  Spread. How much the values vary. The overall range (largest minus smallest) is one measure; a typical range covering most of the data is another.  Outliers. Any values falling outside the overall pattern.  Then write it as prose, supporting each claim with a percentage.      Which of these is the strongest description of the Oscar age distribution?      The distribution is skewed right; of the winners ( ) were under , with three older outliers at , , and .    Correct. It names the shape, supports it with a percentage, and identifies the outliers specifically.      The distribution is skewed right.    True but unsupported. A reader has no way to judge how pronounced the skew is.      The bars are , , , , , , , , , , , , .    This reports the graph without describing it. A description tells the reader what the pattern means .      Young actresses win more Oscars because Hollywood discriminates against older women.    This leaps from description to causal explanation. The data shows the pattern; it does not establish why the pattern exists.         Suppose a histogram of the amount students spent on textbooks this semester is roughly symmetric, centered near , with values ranging from to and no gaps or isolated bars.  Write a two- or three-sentence description of this distribution using the shape-center-spread-outliers routine.     Something like: The distribution of textbook spending is roughly symmetric with a single central peak. Spending is centered near , and values range from about to about , an overall range of roughly . There are no outliers no student's spending falls outside the overall pattern.  Saying explicitly that there are no outliers is worth doing. A reader cannot tell the difference between I checked and found none and I forgot to look unless you say so.       A vocabulary of shapes  Four shapes come up often enough to have names.  A distribution is skewed to the right when its tail extends toward larger values, as in . Income, home prices, and waiting times are commonly right-skewed, because there is usually a floor near zero but no ceiling.  A distribution is skewed to the left when its tail extends toward smaller values. Scores on an easy exam often look this way: most students cluster near the top, with a few trailing down.  A distribution is symmetric with a central peak , often called bell-shaped , when the two halves mirror each other around a single high point. Heights, and many measurement errors, look like this.  A distribution is uniform when all bars are roughly the same height, meaning values are spread evenly across the range.  Not every distribution fits one of these categories, and forcing a name onto a shape that does not have one is worse than describing it plainly. A distribution with two separate peaks, for instance, often signals that two different groups have been mixed together.     A histogram of the time it takes customers to be served at a bank shows most customers served quickly, with a long tail of a few customers who waited a very long time. What is the shape?     Skewed to the right   Correct. The tail extends toward the large values, which is typical of waiting times: service cannot take less than zero time, but it can take a very long time.     Skewed to the left   Left skew means the tail points toward small values. Here the unusual customers are the slow ones.     Symmetric with a central peak   A symmetric distribution would have as many unusually fast services as unusually slow ones. The long one-sided tail rules this out.     Uniform   Uniform means the bars are all about the same height. Here most customers are concentrated at the short end.         If a histogram does not match one of the four named shapes, the bin width must be wrong and should be adjusted until it does.    False. Many real distributions genuinely do not have a simple shape, and adjusting the bins until the data matches a name you wanted is a way to mislead yourself. If a distribution has two peaks or an irregular pattern, describe what you actually see that irregularity is often the most interesting thing in the data.       To describe the distribution of a quantitative variable, report the overall pattern shape, center, and spread and any deviations from that pattern, meaning outliers.  Shape may be skewed left, skewed right, symmetric with a central peak, or uniform, and some distributions fit none of these. Center is a typical value representing the group. Spread describes how the data varies; the overall range is one measure. Outliers are values falling outside the overall pattern.  Assemble these observations into a paragraph, and support each claim about shape with a percentage. A description without numbers is an opinion.  Adapted from Concepts in Statistics (SUNY \/ Lumen Learning), CC BY 4.0. Academy Award data from the Academy of Motion Picture Arts and Sciences.   "
},
{
  "id": "sec-describing-distributions-2",
  "level": "2",
  "url": "sec-describing-distributions.html#sec-describing-distributions-2",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": "  Describe the shape of a distribution as skewed, symmetric, or uniform.  Identify the approximate center and spread of a distribution from a histogram.  Recognize outliers as values falling outside the overall pattern.  Write a paragraph summarizing a distribution, supported by percentages.   "
},
{
  "id": "fig-oscar-ages",
  "level": "2",
  "url": "sec-describing-distributions.html#fig-oscar-ages",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " Ages of Academy Award winners for Best Actress, , in bins of width years.   A histogram of the ages of 32 Best Actress winners. Bars rise sharply from age 20 to a peak of 9 winners in the bin from 30 to 35, then fall away to the right. After age 50 the graph is empty except for three isolated bars of height one near ages 61, 74, and 80. The distribution is clearly skewed to the right.    "
},
{
  "id": "check-skew-direction",
  "level": "2",
  "url": "sec-describing-distributions.html#check-skew-direction",
  "type": "Checkpoint",
  "number": "1.3.2",
  "title": "",
  "body": "  Why is the distribution in described as skewed to the right rather than to the left?      The long, thin tail of the distribution extends toward the higher values on the right.    Correct. Skew is named for the direction of the tail, not the direction of the bulk of the data.      Most of the data is piled up on the left side of the graph.    That is a true observation, and it does accompany right skew, but it is not the definition. Skew is named for the tail.      The tallest bar is to the right of the center of the graph.    The tallest bar is at to , well to the left of the midpoint of the axis.      The values increase from left to right along the axis.    That is true of every histogram and has nothing to do with skew.     "
},
{
  "id": "check-outlier-meaning",
  "level": "2",
  "url": "sec-describing-distributions.html#check-outlier-meaning",
  "type": "Checkpoint",
  "number": "1.3.3",
  "title": "",
  "body": "  In this data set, the winner aged is identified as an outlier. What does that mean?      Her age falls well outside the overall pattern of the rest of the data.    Correct. An outlier is a value that stands apart from the pattern, separated from the main body of the distribution.      Her age was recorded incorrectly and should be removed.    An outlier may be a recording error, but it may also be a perfectly real and interesting value. Jessica Tandy really did win at . Never delete a value just because it is unusual.      She is the oldest person in the data set.    She is, but being the maximum does not by itself make a value an outlier. The -year-old winners are near the top of the main group and are not outliers.      Her age is more than twice the mean age.    No such rule defines an outlier. The judgment is about whether the value sits outside the overall pattern.     "
},
{
  "id": "check-percent-support",
  "level": "2",
  "url": "sec-describing-distributions.html#check-percent-support",
  "type": "Checkpoint",
  "number": "1.3.4",
  "title": "",
  "body": "  Which of these is the strongest description of the Oscar age distribution?      The distribution is skewed right; of the winners ( ) were under , with three older outliers at , , and .    Correct. It names the shape, supports it with a percentage, and identifies the outliers specifically.      The distribution is skewed right.    True but unsupported. A reader has no way to judge how pronounced the skew is.      The bars are , , , , , , , , , , , , .    This reports the graph without describing it. A description tells the reader what the pattern means .      Young actresses win more Oscars because Hollywood discriminates against older women.    This leaps from description to causal explanation. The data shows the pattern; it does not establish why the pattern exists.     "
},
{
  "id": "check-write-description",
  "level": "2",
  "url": "sec-describing-distributions.html#check-write-description",
  "type": "Checkpoint",
  "number": "1.3.5",
  "title": "",
  "body": "  Suppose a histogram of the amount students spent on textbooks this semester is roughly symmetric, centered near , with values ranging from to and no gaps or isolated bars.  Write a two- or three-sentence description of this distribution using the shape-center-spread-outliers routine.     Something like: The distribution of textbook spending is roughly symmetric with a single central peak. Spending is centered near , and values range from about to about , an overall range of roughly . There are no outliers no student's spending falls outside the overall pattern.  Saying explicitly that there are no outliers is worth doing. A reader cannot tell the difference between I checked and found none and I forgot to look unless you say so.   "
},
{
  "id": "subsec-shape-vocabulary-3",
  "level": "2",
  "url": "sec-describing-distributions.html#subsec-shape-vocabulary-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "skewed to the right "
},
{
  "id": "subsec-shape-vocabulary-4",
  "level": "2",
  "url": "sec-describing-distributions.html#subsec-shape-vocabulary-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "skewed to the left "
},
{
  "id": "subsec-shape-vocabulary-5",
  "level": "2",
  "url": "sec-describing-distributions.html#subsec-shape-vocabulary-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric with a central peak bell-shaped "
},
{
  "id": "subsec-shape-vocabulary-6",
  "level": "2",
  "url": "sec-describing-distributions.html#subsec-shape-vocabulary-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "uniform "
},
{
  "id": "check-shape-name",
  "level": "2",
  "url": "sec-describing-distributions.html#check-shape-name",
  "type": "Checkpoint",
  "number": "1.3.6",
  "title": "",
  "body": "  A histogram of the time it takes customers to be served at a bank shows most customers served quickly, with a long tail of a few customers who waited a very long time. What is the shape?     Skewed to the right   Correct. The tail extends toward the large values, which is typical of waiting times: service cannot take less than zero time, but it can take a very long time.     Skewed to the left   Left skew means the tail points toward small values. Here the unusual customers are the slow ones.     Symmetric with a central peak   A symmetric distribution would have as many unusually fast services as unusually slow ones. The long one-sided tail rules this out.     Uniform   Uniform means the bars are all about the same height. Here most customers are concentrated at the short end.     "
},
{
  "id": "check-two-peaks",
  "level": "2",
  "url": "sec-describing-distributions.html#check-two-peaks",
  "type": "Checkpoint",
  "number": "1.3.7",
  "title": "",
  "body": "  If a histogram does not match one of the four named shapes, the bin width must be wrong and should be adjusted until it does.    False. Many real distributions genuinely do not have a simple shape, and adjusting the bins until the data matches a name you wanted is a way to mislead yourself. If a distribution has two peaks or an irregular pattern, describe what you actually see that irregularity is often the most interesting thing in the data.   "
},
{
  "id": "sec-comparing-distributions",
  "level": "1",
  "url": "sec-comparing-distributions.html",
  "type": "Section",
  "number": "1.4",
  "title": "Comparing Two Distributions",
  "body": " Comparing Two Distributions    Compare two distributions using histograms drawn on identical scales.  Use a benchmark value to compare groups quantitatively.  Write a comparative paragraph that emphasizes differences between groups.  Distinguish an association observed in data from a causal claim.     So far we have described one distribution at a time. Most interesting statistical questions involve a comparison: does this group differ from that one? Histograms answer such questions well, provided they are drawn carefully.  Our descriptions still focus on the overall pattern shape, center, and spread and on deviations from it. But comparison adds a tool: because histograms make percentages easy to compute, we can compare specific intervals of values directly.     Smoking and birth weight  Does smoking during pregnancy affect birth weight? To investigate, doctors collected data on new mothers who gave birth at a hospital in Massachusetts during the s. Of these, did not smoke during pregnancy and did.   Birth weights of babies born to mothers, by smoking status    Birth weight (grams)  Nonsmokers  Smokers   to  to  to  to  to  to  to  to  to         As always, left endpoints are included in the bin and right endpoints are not, so a baby weighing exactly grams belongs to the interval to .   Birth weights of babies born to the mothers who did not smoke during pregnancy.   A histogram of birth weights for babies of nonsmoking mothers. Bars rise gradually from zero at 500 grams to a peak of 29 in the bin from 3000 to 3500 grams, with a nearly equal bar of 27 next to it, then drop off quickly. The distribution leans slightly to the left, with a thin tail toward the low weights.      Birth weights of babies born to the mothers who smoked during pregnancy. The horizontal scale, the bin width, and the vertical scale all match .   A histogram of birth weights for babies of smoking mothers, drawn on exactly the same axes as the previous figure. The peak of 22 occurs in the bin from 2000 to 2500 grams, noticeably further left than the nonsmokers' peak, and the bars fall away toward the heavier weights with almost nothing above 4000 grams.      Why the scales must match  Both histograms use the same horizontal range, the same bin width, and the same vertical scale. This is not decoration it is what makes the comparison valid.  If the two graphs used different bin widths, differences in the bars might be artifacts of the binning rather than differences in the babies. If they used different vertical scales, a taller bar in one graph would not mean more babies. Matching all three lets you compare the pictures directly.      Why is it important that and use identical axes?      So that differences you see between the two pictures reflect differences in the data rather than differences in how the graphs were drawn.    Correct. With matched scales and bin widths, a visual difference is a real difference.      So that the two groups have the same number of individuals.    The groups have different sizes and and matching the axes does not change that.      Because histograms of the same variable are required to use the same bins.    No such requirement exists in general. It is a deliberate choice made here because we intend to compare.      So the percentages in each bin will be equal.    The percentages are not equal and are not expected to be. Finding where they differ is the whole point.         Shape, center, and spread for each group  Nonsmokers. The distribution of birth weights appears skewed slightly to the left. Weights for this group fall between approximately and grams, an overall range of about grams. Nearly half of these babies weighed between and grams:   with fewer babies in the lower weight ranges.  Smokers. The distribution appears slightly skewed to the right. Weights fall between approximately and grams, also an overall range of about grams. Nearly half of these babies weighed between and grams:   with fewer babies in the heavier weight ranges.  Two things are worth noticing. The overall ranges are identical at about grams, so spread alone does not distinguish the groups. What differs is where the bulk of each distribution sits: the nonsmokers' typical range is a full grams heavier.  A caution carried over from the previous sections: because the choice of bin width affects the shape of a histogram, we cannot make precise statements about center and spread here. Our sense of the typical range is itself affected by the binning.     Both groups have an overall range of about grams. What does that tell you?      The two groups are similarly variable, so range alone does not distinguish them the difference lies elsewhere.    Correct. Equal ranges with different centers is exactly the pattern here: the smokers' distribution is shifted lower, not narrower.      The two distributions are essentially the same.    Range is only one feature. The peaks sit a full grams apart, which is a substantial difference.      Smoking has no effect on birth weight.    The ranges match, but the locations of the distributions do not. Look at where each peak falls.      The two groups must be the same size.    Range says nothing about group size. These groups contain and mothers.         Comparing with a benchmark  Another strategy for comparing distributions is to pick a meaningful cutoff value a benchmark and compute what percentage of each group falls beyond it. Benchmarks that come from outside the data, such as medical definitions, are especially persuasive because nobody can accuse you of choosing the cutoff to favor a conclusion.   Low birth weight   Doctors define low birth weight as a weight below grams. Compare the percentage of smokers and nonsmokers whose babies met this definition.    Nonsmokers:  babies weighed less than grams.   Smokers:  babies weighed less than grams.   Note that the raw counts are nearly identical, versus , while the percentages differ enormously. This is why relative frequency matters when group sizes differ.     Macrosomia   A condition called macrosomia , informally big baby syndrome, is defined as a birth weight of grams or more. Compare the two groups.    Nonsmokers:  babies weighed grams or more.   Smokers: only baby weighed grams or more.        In , nonsmokers and smokers had low-birth-weight babies nearly the same count. Why is it misleading to stop there?      The groups are different sizes, so the same count represents a much larger share of the smokers.    Correct. Thirty out of is a far bigger fraction than out of versus .      The counts were measured with different bin widths.    Both groups use identical bins. The issue is group size, not binning.      Counts are always less accurate than percentages.    Counts are exact. The problem is that they are not comparable across groups of different sizes.      The benchmark of grams is arbitrary.    It is a standard medical definition, not an arbitrary choice. And the issue here would remain at any cutoff.         Using , approximately what percentage of babies born to nonsmokers weighed grams or more?     About   Correct: , and .     About   That is the percentage between and grams. or more also includes the two heaviest bins.     About   is the count, not the percentage. Divide by the group total of .     About   This divides by , the total number of mothers in the study. When describing nonsmokers, the group is the nonsmokers.         Writing the comparison  Now assemble everything into prose. The key difference from a single-group description: emphasize the comparison . A paragraph that describes group A fully, then describes group B fully, leaves the reader to do the comparing. Do it for them.   In this observational study, we compared mothers who smoked during pregnancy to mothers who did not. The variable is the birth weight of their babies.  Both groups showed a lot of variability in birth weight, with identical overall range estimates of about grams, and there was substantial overlap between the distributions. Nonsmokers had babies weighing between approximately and grams; smokers had babies weighing between approximately and grams.  However, we observe important differences in the typical ranges for the two groups. For nonsmokers, nearly half the babies weighed between and grams ( of , or ), with fewer babies in the lower ranges. For smokers, nearly half weighed between and grams ( of , or ), with fewer babies in the heavier ranges.  Using the medical definition of low birth weight, below grams, smokers in this study had a much higher incidence: ( of ) of babies born to nonsmokers met the definition, compared to ( of ) of babies born to smokers. In this study, smoking is associated with lower birth weights, though the variability in the data suggests that other variables also contribute to birth weight.   Read that last sentence again. It says smoking is associated with lower birth weights not that smoking causes them. This is an observational study: nobody assigned mothers to smoke or not smoke. Mothers who smoke may differ from mothers who do not in many other ways that also affect birth weight. The data establishes a clear association, and stops there.     Based on this study, which conclusion is appropriate?      In this group of mothers, smoking during pregnancy was associated with lower birth weights.    Correct. It describes an association, names the group studied, and claims nothing beyond what the data supports.      Smoking during pregnancy causes low birth weight.    This is an observational study, not an experiment. Mothers chose whether to smoke, and may differ in other ways that affect birth weight.      If a mother smokes, her baby will have low birth weight.    Nearly of the smokers' babies were not low birth weight. The association is about rates across a group, not a prediction for any individual.      Smoking has no relationship to birth weight, since both groups had the same range.    Equal ranges do not mean equal distributions. The low-birth-weight rate differs by more than percentage points.         Using , write two sentences comparing the rate of macrosomia between the two groups. Include both percentages, and be careful about what the comparison does and does not establish.     Something like: Babies born to nonsmoking mothers were about five times as likely to meet the definition of macrosomia: ( of ) compared to ( of ) for smokers. However, this comparison rests on a single macrosomic baby in the smoking group, so the difference should be treated cautiously.  The second sentence is what separates a good answer from an adequate one. A percentage built on a count of one is fragile if that single baby had weighed slightly less, the smokers' rate would be . Reporting the underlying counts alongside the percentages lets a reader see this for themselves.       Dotplots and histograms compared  We now have two graphs for the distribution of a quantitative variable. Neither is better in general; each highlights different aspects of the data.   Choosing between a dotplot and a histogram     Dotplot  Histogram    Individual values  visible  not visible    Large data sets  becomes unreadable  handles them well    Shape, center, spread  unaffected by construction  affected by bin choice    Overall range  exact  approximate    Percentages  tedious to compute  easy to compute     There are no rules dictating which to use. With a small data set where individual values matter, a dotplot. With hundreds of observations, or when you intend to work with percentages, a histogram.     A researcher has reaction times for participants and wants readers to be able to see each individual value, including the exact fastest and slowest times. Which graph should she use?      A dotplot, since individual values stay visible and the exact range can be read off.    Correct. With only values there is no crowding problem, and binning would hide exactly what she wants to show.      A histogram, since it is the more standard graph.    A histogram would group her twelve values into a handful of bars, hiding the individual times and leaving the exact range unreadable.      A histogram with a very small bin width, so each value gets its own bar.    At that point you have built a dotplot the hard way, with a graph that invites readers to misjudge the empty bins.      Either one, since both display the same information.    They do not. A histogram discards individual values by design, which is precisely what she needs to avoid here.         You can read the exact overall range of a data set from its histogram.    False. A histogram tells you only which bin the smallest and largest values fall into. In we can say the lightest baby weighed somewhere between and grams, but not exactly how much. A dotplot shows the actual values, so the range can be computed exactly.       To compare the distributions of a quantitative variable for two groups, draw histograms on identical horizontal scales, with identical bin widths and identical vertical scales. Describe the shape, center, and spread of each, note any outliers, and most importantly say explicitly how the groups differ.  Use percentages rather than counts whenever the groups are different sizes. A benchmark value drawn from outside the data, such as a medical threshold, makes a comparison concrete and hard to dispute.  Finally, describe what the data shows and no more. An observational study can establish that two things are associated. It cannot, on its own, establish that one causes the other.  Adapted from Concepts in Statistics (SUNY \/ Lumen Learning), CC BY 4.0. Birth weight data from Hosmer and Lemeshow, collected at Baystate Medical Center, Springfield, Massachusetts, .   "
},
{
  "id": "sec-comparing-distributions-2",
  "level": "2",
  "url": "sec-comparing-distributions.html#sec-comparing-distributions-2",
  "type": "Objectives",
  "number": "1.4",
  "title": "",
  "body": "  Compare two distributions using histograms drawn on identical scales.  Use a benchmark value to compare groups quantitatively.  Write a comparative paragraph that emphasizes differences between groups.  Distinguish an association observed in data from a causal claim.   "
},
{
  "id": "table-birthweight",
  "level": "2",
  "url": "sec-comparing-distributions.html#table-birthweight",
  "type": "Table",
  "number": "1.4.1",
  "title": "Birth weights of babies born to <span class=\"process-math\">\\(189\\)<\/span> mothers, by smoking status",
  "body": " Birth weights of babies born to mothers, by smoking status    Birth weight (grams)  Nonsmokers  Smokers   to  to  to  to  to  to  to  to  to        "
},
{
  "id": "fig-nonsmokers",
  "level": "2",
  "url": "sec-comparing-distributions.html#fig-nonsmokers",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": " Birth weights of babies born to the mothers who did not smoke during pregnancy.   A histogram of birth weights for babies of nonsmoking mothers. Bars rise gradually from zero at 500 grams to a peak of 29 in the bin from 3000 to 3500 grams, with a nearly equal bar of 27 next to it, then drop off quickly. The distribution leans slightly to the left, with a thin tail toward the low weights.    "
},
{
  "id": "fig-smokers",
  "level": "2",
  "url": "sec-comparing-distributions.html#fig-smokers",
  "type": "Figure",
  "number": "1.4.3",
  "title": "",
  "body": " Birth weights of babies born to the mothers who smoked during pregnancy. The horizontal scale, the bin width, and the vertical scale all match .   A histogram of birth weights for babies of smoking mothers, drawn on exactly the same axes as the previous figure. The peak of 22 occurs in the bin from 2000 to 2500 grams, noticeably further left than the nonsmokers' peak, and the bars fall away toward the heavier weights with almost nothing above 4000 grams.    "
},
{
  "id": "check-same-scales",
  "level": "2",
  "url": "sec-comparing-distributions.html#check-same-scales",
  "type": "Checkpoint",
  "number": "1.4.4",
  "title": "",
  "body": "  Why is it important that and use identical axes?      So that differences you see between the two pictures reflect differences in the data rather than differences in how the graphs were drawn.    Correct. With matched scales and bin widths, a visual difference is a real difference.      So that the two groups have the same number of individuals.    The groups have different sizes and and matching the axes does not change that.      Because histograms of the same variable are required to use the same bins.    No such requirement exists in general. It is a deliberate choice made here because we intend to compare.      So the percentages in each bin will be equal.    The percentages are not equal and are not expected to be. Finding where they differ is the whole point.     "
},
{
  "id": "check-range-same",
  "level": "2",
  "url": "sec-comparing-distributions.html#check-range-same",
  "type": "Checkpoint",
  "number": "1.4.5",
  "title": "",
  "body": "  Both groups have an overall range of about grams. What does that tell you?      The two groups are similarly variable, so range alone does not distinguish them the difference lies elsewhere.    Correct. Equal ranges with different centers is exactly the pattern here: the smokers' distribution is shifted lower, not narrower.      The two distributions are essentially the same.    Range is only one feature. The peaks sit a full grams apart, which is a substantial difference.      Smoking has no effect on birth weight.    The ranges match, but the locations of the distributions do not. Look at where each peak falls.      The two groups must be the same size.    Range says nothing about group size. These groups contain and mothers.     "
},
{
  "id": "subsec-benchmarks-2",
  "level": "2",
  "url": "sec-comparing-distributions.html#subsec-benchmarks-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "benchmark "
},
{
  "id": "ex-low-birth-weight",
  "level": "2",
  "url": "sec-comparing-distributions.html#ex-low-birth-weight",
  "type": "Example",
  "number": "1.4.6",
  "title": "Low birth weight.",
  "body": " Low birth weight   Doctors define low birth weight as a weight below grams. Compare the percentage of smokers and nonsmokers whose babies met this definition.    Nonsmokers:  babies weighed less than grams.   Smokers:  babies weighed less than grams.   Note that the raw counts are nearly identical, versus , while the percentages differ enormously. This is why relative frequency matters when group sizes differ.   "
},
{
  "id": "ex-macrosomia",
  "level": "2",
  "url": "sec-comparing-distributions.html#ex-macrosomia",
  "type": "Example",
  "number": "1.4.7",
  "title": "Macrosomia.",
  "body": " Macrosomia   A condition called macrosomia , informally big baby syndrome, is defined as a birth weight of grams or more. Compare the two groups.    Nonsmokers:  babies weighed grams or more.   Smokers: only baby weighed grams or more.    "
},
{
  "id": "check-counts-vs-percents",
  "level": "2",
  "url": "sec-comparing-distributions.html#check-counts-vs-percents",
  "type": "Checkpoint",
  "number": "1.4.8",
  "title": "",
  "body": "  In , nonsmokers and smokers had low-birth-weight babies nearly the same count. Why is it misleading to stop there?      The groups are different sizes, so the same count represents a much larger share of the smokers.    Correct. Thirty out of is a far bigger fraction than out of versus .      The counts were measured with different bin widths.    Both groups use identical bins. The issue is group size, not binning.      Counts are always less accurate than percentages.    Counts are exact. The problem is that they are not comparable across groups of different sizes.      The benchmark of grams is arbitrary.    It is a standard medical definition, not an arbitrary choice. And the issue here would remain at any cutoff.     "
},
{
  "id": "check-benchmark-compute",
  "level": "2",
  "url": "sec-comparing-distributions.html#check-benchmark-compute",
  "type": "Checkpoint",
  "number": "1.4.9",
  "title": "",
  "body": "  Using , approximately what percentage of babies born to nonsmokers weighed grams or more?     About   Correct: , and .     About   That is the percentage between and grams. or more also includes the two heaviest bins.     About   is the count, not the percentage. Divide by the group total of .     About   This divides by , the total number of mothers in the study. When describing nonsmokers, the group is the nonsmokers.     "
},
{
  "id": "check-association",
  "level": "2",
  "url": "sec-comparing-distributions.html#check-association",
  "type": "Checkpoint",
  "number": "1.4.10",
  "title": "",
  "body": "  Based on this study, which conclusion is appropriate?      In this group of mothers, smoking during pregnancy was associated with lower birth weights.    Correct. It describes an association, names the group studied, and claims nothing beyond what the data supports.      Smoking during pregnancy causes low birth weight.    This is an observational study, not an experiment. Mothers chose whether to smoke, and may differ in other ways that affect birth weight.      If a mother smokes, her baby will have low birth weight.    Nearly of the smokers' babies were not low birth weight. The association is about rates across a group, not a prediction for any individual.      Smoking has no relationship to birth weight, since both groups had the same range.    Equal ranges do not mean equal distributions. The low-birth-weight rate differs by more than percentage points.     "
},
{
  "id": "check-write-comparison",
  "level": "2",
  "url": "sec-comparing-distributions.html#check-write-comparison",
  "type": "Checkpoint",
  "number": "1.4.11",
  "title": "",
  "body": "  Using , write two sentences comparing the rate of macrosomia between the two groups. Include both percentages, and be careful about what the comparison does and does not establish.     Something like: Babies born to nonsmoking mothers were about five times as likely to meet the definition of macrosomia: ( of ) compared to ( of ) for smokers. However, this comparison rests on a single macrosomic baby in the smoking group, so the difference should be treated cautiously.  The second sentence is what separates a good answer from an adequate one. A percentage built on a count of one is fragile if that single baby had weighed slightly less, the smokers' rate would be . Reporting the underlying counts alongside the percentages lets a reader see this for themselves.   "
},
{
  "id": "table-dotplot-histogram",
  "level": "2",
  "url": "sec-comparing-distributions.html#table-dotplot-histogram",
  "type": "Table",
  "number": "1.4.12",
  "title": "Choosing between a dotplot and a histogram",
  "body": " Choosing between a dotplot and a histogram     Dotplot  Histogram    Individual values  visible  not visible    Large data sets  becomes unreadable  handles them well    Shape, center, spread  unaffected by construction  affected by bin choice    Overall range  exact  approximate    Percentages  tedious to compute  easy to compute    "
},
{
  "id": "check-choose-graph",
  "level": "2",
  "url": "sec-comparing-distributions.html#check-choose-graph",
  "type": "Checkpoint",
  "number": "1.4.13",
  "title": "",
  "body": "  A researcher has reaction times for participants and wants readers to be able to see each individual value, including the exact fastest and slowest times. Which graph should she use?      A dotplot, since individual values stay visible and the exact range can be read off.    Correct. With only values there is no crowding problem, and binning would hide exactly what she wants to show.      A histogram, since it is the more standard graph.    A histogram would group her twelve values into a handful of bars, hiding the individual times and leaving the exact range unreadable.      A histogram with a very small bin width, so each value gets its own bar.    At that point you have built a dotplot the hard way, with a graph that invites readers to misjudge the empty bins.      Either one, since both display the same information.    They do not. A histogram discards individual values by design, which is precisely what she needs to avoid here.     "
},
{
  "id": "check-exact-range",
  "level": "2",
  "url": "sec-comparing-distributions.html#check-exact-range",
  "type": "Checkpoint",
  "number": "1.4.14",
  "title": "",
  "body": "  You can read the exact overall range of a data set from its histogram.    False. A histogram tells you only which bin the smallest and largest values fall into. In we can say the lightest baby weighed somewhere between and grams, but not exactly how much. A dotplot shows the actual values, so the range can be computed exactly.   "
},
{
  "id": "sec-intro-normal",
  "level": "1",
  "url": "sec-intro-normal.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction to the Normal Distribution",
  "body": " Introduction to the Normal Distribution    Recognize the shape and defining features of a normal distribution.  Identify the two parameters and from the notation .  Describe how changing or changes the graph.  Recognize situations where a normal model is not appropriate.     The normal distribution is the most important continuous distribution in statistics. It is also, as one textbook puts it, the most widely abused. Its graph is the familiar bell curve, and you will meet it in psychology, business, economics, nursing, the physical sciences, and mathematics. Many IQ scores are approximately normal. Real-estate prices often are. Some of your instructors may use a normal distribution to help determine your grade.  This chapter studies the normal distribution, the standard normal distribution, and their applications.     Two parameters determine everything  The normal distribution has exactly two parameters two numerical descriptive measures: the mean and the standard deviation . If is a quantity with a normal distribution, we write   Read this aloud as is normally distributed with mean and standard deviation . Those two numbers are the whole specification. Nothing else about the distribution is left to choose.   Normal distribution notation   The notation means that is normally distributed with mean and standard deviation . For example, describes a normal distribution with mean and standard deviation .    The probability density function the formula that produces the curve is   It is a complicated function. Do not memorize it. You will never need to evaluate it by hand. It appears here only so you can see that and are the only quantities in it that change from one normal distribution to the next.     A statistician writes . What is the standard deviation of ?       Correct. In the notation , the mean comes first and the standard deviation second.       That is the mean. The second number in the notation is the standard deviation.     , since   No square root is needed. The notation lists the standard deviation directly, not the variance.     There is not enough information.   There is. The two parameters in the notation completely determine a normal distribution see .         Shape, symmetry, and the effect of the parameters  The curve is symmetric about a vertical line drawn through the mean . Because of that symmetry, the mean and the median of a normal distribution are the same number, and both sit at the peak of the curve.  Since the total area under any probability density curve must equal , the two parameters act in different ways.   What each parameter controls  A change in  shifts the graph left or right without changing its shape.  A change in changes the shape : the curve becomes fatter and shorter as grows, skinnier and taller as shrinks. The area stays fixed at either way.   Because and can be any numbers at all, there are infinitely many normal distributions. One of them is special enough to get its own name: the standard normal distribution , with and . The next section shows how every other normal distribution can be converted into that one.     Two normal distributions have the same mean, but the first has and the second has . How do their graphs compare?      They peak at the same place, but the second curve is wider and shorter.    Correct. Equal means put the peaks in the same place; the larger standard deviation spreads the area out, which forces the curve lower.      The second curve is shifted to the right of the first.    Shifting is what a change in does. These two distributions have the same mean.      The second curve is wider and also taller, since it covers more area.    Both curves enclose area exactly . A wider curve must therefore be shorter, not taller.      The graphs are identical, since the mean determines the curve.    It takes both parameters. Review .         For any normal distribution, the mean and the median are equal.    True. The curve is symmetric about a vertical line through , so half the area lies on each side of the mean which is exactly what makes it the median as well.       Where the normal model does not apply  The normal distribution is extremely useful, but it cannot be applied to everything in the real world. A normal model assumes the data is symmetric about its center, with values trailing off at the same rate in both directions, and with no hard boundary nearby.  Plenty of real quantities violate this. Household income is strongly right-skewed: there is a floor at zero and a long tail of very high earners. The time until a lightbulb burns out is skewed as well. The number of children in a family is a count, not a continuous measurement, and takes only whole-number values. Applying a normal model to data like this produces answers that look authoritative and are wrong.     Think of a quantity you could measure on the students at this college that would not be well described by a normal distribution. Name it, and in one sentence say what feature of it breaks the normal model.     Many answers work. Some examples:  Money spent on textbooks this semester: bounded below by zero and right-skewed, with most students clustered low and a few spending a great deal.  Number of siblings: a count that takes only whole-number values and cannot be negative.  Hours slept the night before an exam: often bounded above by physical limits and skewed by a group of students who barely slept.  The common features to look for are skew, a hard boundary near the bulk of the data, and whole-number-only values.       The normal distribution is continuous, bell-shaped, and symmetric about its mean. It is specified completely by two parameters: the mean and the standard deviation , written . Changing shifts the graph; changing changes its width. Because the curve is symmetric, the mean and median coincide. The special case , is the standard normal distribution, which the next section develops.  Adapted from Introductory Statistics (OpenStax \/ Lumen Learning), CC BY 4.0.   "
},
{
  "id": "sec-intro-normal-2",
  "level": "2",
  "url": "sec-intro-normal.html#sec-intro-normal-2",
  "type": "Objectives",
  "number": "2.1",
  "title": "",
  "body": "  Recognize the shape and defining features of a normal distribution.  Identify the two parameters and from the notation .  Describe how changing or changes the graph.  Recognize situations where a normal model is not appropriate.   "
},
{
  "id": "def-normal-notation",
  "level": "2",
  "url": "sec-intro-normal.html#def-normal-notation",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Normal distribution notation.",
  "body": " Normal distribution notation   The notation means that is normally distributed with mean and standard deviation . For example, describes a normal distribution with mean and standard deviation .   "
},
{
  "id": "check-normal-notation",
  "level": "2",
  "url": "sec-intro-normal.html#check-normal-notation",
  "type": "Checkpoint",
  "number": "2.1.2",
  "title": "",
  "body": "  A statistician writes . What is the standard deviation of ?       Correct. In the notation , the mean comes first and the standard deviation second.       That is the mean. The second number in the notation is the standard deviation.     , since   No square root is needed. The notation lists the standard deviation directly, not the variance.     There is not enough information.   There is. The two parameters in the notation completely determine a normal distribution see .     "
},
{
  "id": "subsec-normal-shape-5",
  "level": "2",
  "url": "sec-intro-normal.html#subsec-normal-shape-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard normal distribution "
},
{
  "id": "check-sigma-effect",
  "level": "2",
  "url": "sec-intro-normal.html#check-sigma-effect",
  "type": "Checkpoint",
  "number": "2.1.3",
  "title": "",
  "body": "  Two normal distributions have the same mean, but the first has and the second has . How do their graphs compare?      They peak at the same place, but the second curve is wider and shorter.    Correct. Equal means put the peaks in the same place; the larger standard deviation spreads the area out, which forces the curve lower.      The second curve is shifted to the right of the first.    Shifting is what a change in does. These two distributions have the same mean.      The second curve is wider and also taller, since it covers more area.    Both curves enclose area exactly . A wider curve must therefore be shorter, not taller.      The graphs are identical, since the mean determines the curve.    It takes both parameters. Review .     "
},
{
  "id": "check-mean-median",
  "level": "2",
  "url": "sec-intro-normal.html#check-mean-median",
  "type": "Checkpoint",
  "number": "2.1.4",
  "title": "",
  "body": "  For any normal distribution, the mean and the median are equal.    True. The curve is symmetric about a vertical line through , so half the area lies on each side of the mean which is exactly what makes it the median as well.   "
},
{
  "id": "check-not-normal",
  "level": "2",
  "url": "sec-intro-normal.html#check-not-normal",
  "type": "Checkpoint",
  "number": "2.1.5",
  "title": "",
  "body": "  Think of a quantity you could measure on the students at this college that would not be well described by a normal distribution. Name it, and in one sentence say what feature of it breaks the normal model.     Many answers work. Some examples:  Money spent on textbooks this semester: bounded below by zero and right-skewed, with most students clustered low and a few spending a great deal.  Number of siblings: a count that takes only whole-number values and cannot be negative.  Hours slept the night before an exam: often bounded above by physical limits and skewed by a group of students who barely slept.  The common features to look for are skew, a hard boundary near the bulk of the data, and whole-number-only values.   "
},
{
  "id": "sec-standard-normal",
  "level": "1",
  "url": "sec-standard-normal.html",
  "type": "Section",
  "number": "2.2",
  "title": "The Standard Normal Distribution",
  "body": " The Standard Normal Distribution    Compute a -score from a value, a mean, and a standard deviation.  Interpret a -score as a number of standard deviations above or below the mean.  Recover an original value from a -score.  Apply the Empirical Rule to a normal distribution.     Two exam scores, and , tell you almost nothing on their own. If the first exam had a mean of and the second a mean of , the lower raw score is the better performance. Comparing values across different distributions requires putting them on a common scale, and this section builds that scale.     Standardizing: the -score  The standard normal distribution is a normal distribution of standardized values called -scores . A -score is measured in units of the standard deviation. If a distribution has mean and standard deviation , then the value sits three standard deviations above the mean, since .   -score   If is normally distributed with , the -score of a value is   The -score reports how many standard deviations lies above or below . Values above the mean have positive  -scores; values below have negative  -scores. If , then .    The transformation in produces a new distribution mean , standard deviation no matter what and you started with.   Computing two -scores   Suppose , so and . Find and interpret the -scores for and .    For :   So is two standard deviations to the right of the mean. Check by reversing: .  For :   So is about standard deviations to the left of the mean. Check: .       A student computes a -score of for her value. What does this tell her?      Her value is standard deviations below the mean.    Correct. The negative sign places the value below the mean, and the size counts standard deviations.      Her value is standard deviations above the mean.    Check the sign. A negative -score means the value is below the mean.      Her value is units below the mean.    Close, but a -score counts standard deviations , not the original units. If , then means units below the mean.      Her value is times smaller than the mean.    A -score is not a ratio. It measures distance from the mean in units of .       Weight change   Some doctors believe a person can lose five pounds on average in a month by reducing fat intake and exercising. Let be the weight lost in pounds in one month, with . Interpret the -scores for a person who lost pounds and a person who gained three pounds.    For a loss of pounds, :   This person is standard deviations to the right of the mean.  A gain of three pounds is a loss of pounds, so :   This person is four standard deviations to the left of the mean a genuinely unusual outcome.       In , a negative value of is meaningful: it represents weight gained rather than lost.    Right. The variable records weight lost , so a negative amount lost is a gain. Always ask what the variable measures before deciding whether a value is possible.       Comparing values across distributions  Suppose and . We found that gives . For ,   Both values sit exactly two standard deviations to the right of their own means, even though and are nowhere near each other numerically. This is what -scores are for. If records weight gain for one group and records weight gain for a second group, then and represent the same standardized gain relative to their own groups.   Heights in Chile, 2009 2010   The mean height of 15- to 18-year-old males from Chile in 2009 2010 was cm with standard deviation cm, so .  (a) Interpret the -score for a male who is cm tall.  (b) A male has . How tall is he?    (a) , so cm is about standard deviations below the mean.  (b) Solving for gives   so cm.     Two forms of one relationship  From a value to a -score: .  From a -score back to a value: .  These are the same equation. Which one you use depends on which quantity you are missing.      A distribution has and . You are told a value has -score and asked for the value itself. Which computation gives the answer?       Correct this is , giving .       That is the standardizing formula, but you already have the -score. You need to go the other direction.       The -score is multiplied by , not divided by it.       Review the box . The mean is added, and the -score multiplies the standard deviation.       Comparing two generations   From 1984 to 1985, the mean height of 15- to 18-year-old Chilean males was cm with standard deviation cm, so . Recall for 2009 2010.  Compare a 2009 male of height cm with a 1984 male of height cm.     Both fall exactly standard deviations below their own means. Relative to their own generations, these two heights are equally short even though the raw measurements differ by more than two centimeters.       In , the 1984 male is taller in centimeters than the 2009 male, yet both have the same -score. In one or two sentences, explain to a classmate how both of those statements can be true at the same time.     The two men are being measured against different reference groups. The 1984 population was taller on average ( versus ), so a taller raw height is needed to occupy the same relative position. A -score describes position within a distribution, not absolute size, so identical -scores mean identical standing in their respective populations.       The Empirical Rule  Because every normal distribution becomes the same standard normal distribution after standardizing, one set of percentages applies to all of them.   The Empirical Rule   If , then approximately:   of values lie between and , that is, between and .  of values lie between and .  of values lie between and .   Almost every value lies within three standard deviations of the mean.     Applying the rule   Suppose is normal with mean and standard deviation . Find the three Empirical Rule intervals.    About lie between and .  About lie between and .  About lie between and .  Every one of these is just . The Empirical Rule needs no table and no technology only arithmetic.       Scores on an entrance exam are approximately normal with points and points. About of scores lie between which two values?     and   Correct. corresponds to two standard deviations: .     and   That is , which captures about of scores, not .     and   That is , which captures about of scores.     and   This interval is far too narrow. Each step out from the mean is a full standard deviation of points.       The Empirical Rule for Chilean heights   For 15- to 18-year-old Chilean males in 1984 1985, . Apply the Empirical Rule.     Empirical Rule intervals for    Percent  Interval  Heights (cm)  -scores    about   to  and    about   to  and    about   to  and          A 15-year-old Chilean male in 1984 measured cm. Using , what can you say?      He is outside the interval, so his height is unusual for this population.    Correct. The interval ends at cm, so fewer than of this population is this tall or taller.      He is within the interval, so his height is typical.    The interval ends at cm, and .      His height is impossible under a normal distribution.    A normal distribution assigns nonzero probability to every value. Unusual is not the same as impossible.      Nothing, because the Empirical Rule only applies to the standard normal distribution.    The Empirical Rule applies to every normal distribution that is the point of standardizing.         A -score is a standardized value. Standardizing any normal distribution produces , with mean and standard deviation . A -score reports how many standard deviations a value lies above or below its mean, which makes values from different distributions directly comparable.  Standardize a value: .  Recover a value: .  Empirical Rule: about , , and of values lie within one, two, and three standard deviations of the mean.  Adapted from Introductory Statistics (OpenStax \/ Lumen Learning), CC BY 4.0. Chilean height data from the London School of Hygiene and Tropical Medicine (2009).   "
},
{
  "id": "sec-standard-normal-2",
  "level": "2",
  "url": "sec-standard-normal.html#sec-standard-normal-2",
  "type": "Objectives",
  "number": "2.2",
  "title": "",
  "body": "  Compute a -score from a value, a mean, and a standard deviation.  Interpret a -score as a number of standard deviations above or below the mean.  Recover an original value from a -score.  Apply the Empirical Rule to a normal distribution.   "
},
{
  "id": "subsec-zscore-2",
  "level": "2",
  "url": "sec-standard-normal.html#subsec-zscore-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard normal distribution -scores "
},
{
  "id": "def-zscore",
  "level": "2",
  "url": "sec-standard-normal.html#def-zscore",
  "type": "Definition",
  "number": "2.2.1",
  "title": "<span class=\"process-math\">\\(z\\)<\/span>-score.",
  "body": " -score   If is normally distributed with , the -score of a value is   The -score reports how many standard deviations lies above or below . Values above the mean have positive  -scores; values below have negative  -scores. If , then .   "
},
{
  "id": "ex-zscore-basic",
  "level": "2",
  "url": "sec-standard-normal.html#ex-zscore-basic",
  "type": "Example",
  "number": "2.2.2",
  "title": "Computing two <span class=\"process-math\">\\(z\\)<\/span>-scores.",
  "body": " Computing two -scores   Suppose , so and . Find and interpret the -scores for and .    For :   So is two standard deviations to the right of the mean. Check by reversing: .  For :   So is about standard deviations to the left of the mean. Check: .   "
},
{
  "id": "check-zscore-sign",
  "level": "2",
  "url": "sec-standard-normal.html#check-zscore-sign",
  "type": "Checkpoint",
  "number": "2.2.3",
  "title": "",
  "body": "  A student computes a -score of for her value. What does this tell her?      Her value is standard deviations below the mean.    Correct. The negative sign places the value below the mean, and the size counts standard deviations.      Her value is standard deviations above the mean.    Check the sign. A negative -score means the value is below the mean.      Her value is units below the mean.    Close, but a -score counts standard deviations , not the original units. If , then means units below the mean.      Her value is times smaller than the mean.    A -score is not a ratio. It measures distance from the mean in units of .     "
},
{
  "id": "ex-weight-loss",
  "level": "2",
  "url": "sec-standard-normal.html#ex-weight-loss",
  "type": "Example",
  "number": "2.2.4",
  "title": "Weight change.",
  "body": " Weight change   Some doctors believe a person can lose five pounds on average in a month by reducing fat intake and exercising. Let be the weight lost in pounds in one month, with . Interpret the -scores for a person who lost pounds and a person who gained three pounds.    For a loss of pounds, :   This person is standard deviations to the right of the mean.  A gain of three pounds is a loss of pounds, so :   This person is four standard deviations to the left of the mean a genuinely unusual outcome.   "
},
{
  "id": "check-zscore-negative-x",
  "level": "2",
  "url": "sec-standard-normal.html#check-zscore-negative-x",
  "type": "Checkpoint",
  "number": "2.2.5",
  "title": "",
  "body": "  In , a negative value of is meaningful: it represents weight gained rather than lost.    Right. The variable records weight lost , so a negative amount lost is a gain. Always ask what the variable measures before deciding whether a value is possible.   "
},
{
  "id": "ex-chile-2009",
  "level": "2",
  "url": "sec-standard-normal.html#ex-chile-2009",
  "type": "Example",
  "number": "2.2.6",
  "title": "Heights in Chile, 2009–2010.",
  "body": " Heights in Chile, 2009 2010   The mean height of 15- to 18-year-old males from Chile in 2009 2010 was cm with standard deviation cm, so .  (a) Interpret the -score for a male who is cm tall.  (b) A male has . How tall is he?    (a) , so cm is about standard deviations below the mean.  (b) Solving for gives   so cm.   "
},
{
  "id": "check-which-formula",
  "level": "2",
  "url": "sec-standard-normal.html#check-which-formula",
  "type": "Checkpoint",
  "number": "2.2.7",
  "title": "",
  "body": "  A distribution has and . You are told a value has -score and asked for the value itself. Which computation gives the answer?       Correct this is , giving .       That is the standardizing formula, but you already have the -score. You need to go the other direction.       The -score is multiplied by , not divided by it.       Review the box . The mean is added, and the -score multiplies the standard deviation.     "
},
{
  "id": "ex-chile-compare",
  "level": "2",
  "url": "sec-standard-normal.html#ex-chile-compare",
  "type": "Example",
  "number": "2.2.8",
  "title": "Comparing two generations.",
  "body": " Comparing two generations   From 1984 to 1985, the mean height of 15- to 18-year-old Chilean males was cm with standard deviation cm, so . Recall for 2009 2010.  Compare a 2009 male of height cm with a 1984 male of height cm.     Both fall exactly standard deviations below their own means. Relative to their own generations, these two heights are equally short even though the raw measurements differ by more than two centimeters.   "
},
{
  "id": "check-explain-comparison",
  "level": "2",
  "url": "sec-standard-normal.html#check-explain-comparison",
  "type": "Checkpoint",
  "number": "2.2.9",
  "title": "",
  "body": "  In , the 1984 male is taller in centimeters than the 2009 male, yet both have the same -score. In one or two sentences, explain to a classmate how both of those statements can be true at the same time.     The two men are being measured against different reference groups. The 1984 population was taller on average ( versus ), so a taller raw height is needed to occupy the same relative position. A -score describes position within a distribution, not absolute size, so identical -scores mean identical standing in their respective populations.   "
},
{
  "id": "thm-empirical-rule",
  "level": "2",
  "url": "sec-standard-normal.html#thm-empirical-rule",
  "type": "Theorem",
  "number": "2.2.10",
  "title": "The Empirical Rule.",
  "body": " The Empirical Rule   If , then approximately:   of values lie between and , that is, between and .  of values lie between and .  of values lie between and .   Almost every value lies within three standard deviations of the mean.   "
},
{
  "id": "ex-empirical-basic",
  "level": "2",
  "url": "sec-standard-normal.html#ex-empirical-basic",
  "type": "Example",
  "number": "2.2.11",
  "title": "Applying the rule.",
  "body": " Applying the rule   Suppose is normal with mean and standard deviation . Find the three Empirical Rule intervals.    About lie between and .  About lie between and .  About lie between and .  Every one of these is just . The Empirical Rule needs no table and no technology only arithmetic.   "
},
{
  "id": "check-empirical-interval",
  "level": "2",
  "url": "sec-standard-normal.html#check-empirical-interval",
  "type": "Checkpoint",
  "number": "2.2.12",
  "title": "",
  "body": "  Scores on an entrance exam are approximately normal with points and points. About of scores lie between which two values?     and   Correct. corresponds to two standard deviations: .     and   That is , which captures about of scores, not .     and   That is , which captures about of scores.     and   This interval is far too narrow. Each step out from the mean is a full standard deviation of points.     "
},
{
  "id": "ex-chile-empirical",
  "level": "2",
  "url": "sec-standard-normal.html#ex-chile-empirical",
  "type": "Example",
  "number": "2.2.13",
  "title": "The Empirical Rule for Chilean heights.",
  "body": " The Empirical Rule for Chilean heights   For 15- to 18-year-old Chilean males in 1984 1985, . Apply the Empirical Rule.     Empirical Rule intervals for    Percent  Interval  Heights (cm)  -scores    about   to  and    about   to  and    about   to  and      "
},
{
  "id": "check-unusual",
  "level": "2",
  "url": "sec-standard-normal.html#check-unusual",
  "type": "Checkpoint",
  "number": "2.2.15",
  "title": "",
  "body": "  A 15-year-old Chilean male in 1984 measured cm. Using , what can you say?      He is outside the interval, so his height is unusual for this population.    Correct. The interval ends at cm, so fewer than of this population is this tall or taller.      He is within the interval, so his height is typical.    The interval ends at cm, and .      His height is impossible under a normal distribution.    A normal distribution assigns nonzero probability to every value. Unusual is not the same as impossible.      Nothing, because the Empirical Rule only applies to the standard normal distribution.    The Empirical Rule applies to every normal distribution that is the point of standardizing.     "
},
{
  "id": "sec-using-normal",
  "level": "1",
  "url": "sec-using-normal.html",
  "type": "Section",
  "number": "2.3",
  "title": "Using the Normal Distribution",
  "body": " Using the Normal Distribution    Interpret a normal probability as an area under the curve.  Use the complement rule to convert between left and right areas.  Choose between a probability calculation and a percentile calculation based on what the question gives you.  Find percentiles, quartiles, and middle intervals of a normal distribution.     The previous section converted values into -scores. This section puts that machinery to work answering the questions people actually ask: how likely is a value this large, and what value separates the top ten percent from everyone else?     Probability is area  For a continuous distribution, the probability that falls below some value is the area under the curve to the left of . We write this . Normal tables, computers, and calculators all do the same job: they report that area.  Since the total area under the curve is , the area to the right follows immediately.   Left areas, right areas  is the area to the left of a vertical line through .  is the area to the right.  For a continuous distribution, and are the same number, and likewise for and . A single point has zero area, so including or excluding the endpoint changes nothing.   That last point surprises people. In a continuous distribution, for every single value of not because the value is impossible, but because a single point has no width and therefore no area.     For a normal distribution, you compute . What is ?       Correct: . The two areas must add to .       That is the area to the left . Unless is the mean, the two sides are not equal.       A probability can never be negative. Subtract from rather than negating.      It cannot be found without knowing and .    The complement rule needs nothing beyond the left area. Review .         For a normal distribution, and are the same number.    True. The normal distribution is continuous, so the single point contributes zero area. Including or excluding the endpoint has no effect. This is not true for discrete distributions.       Two kinds of question, two tools  Nearly every normal distribution problem is one of two types, and telling them apart is most of the work.   Which calculation do you need?    You are given  You want  Calculator    a value  a probability (an area)  normalcdf    a probability (an area)  a value  invNorm     On a TI-83+ or TI-84, both commands live under 2nd DISTR . The syntax is  normalcdf(lower value, upper value, mean, standard deviation)  invNorm(area to the left, mean, standard deviation)  For a one-sided area with normalcdf , you still need two endpoints, so use a number far out in the tail: 1E99 for the right end, -1E99 for the left. Enter 1E99 by pressing 1 , then the EE key, then 99 .   Final exam scores   Final exam scores in a statistics class were normally distributed with a mean of and a standard deviation of , so .  (a) Find the probability that a randomly selected student scored more than .  (b) Find the probability that a randomly selected student scored less than .  (c) Find the 90th percentile the score with of scores below it.  (d) Find the 70th percentile.    (a) Sketch the curve and shade to the right of . Using normalcdf(65, 1E99, 63, 5) = 0.3446 .  You can also standardize first: . The area to the left of is , so the area to the right is .  About of students scored above .  (b) normalcdf(-1E99, 85, 63, 5) \\approx 1 . A score of is more than four standard deviations above the mean, so essentially every student scored below it.  (c) Here you are given an area and want a value, so use invNorm(0.90, 63, 5) = 69.4 .  The 90th percentile is : ninety percent of scores fall at or below , and ten percent at or above. A value like this is often called a critical value .  (d) invNorm(0.70, 63, 5) = 65.6 . Seventy percent of scores fall at or below .       Heights are normally distributed with inches and inches. You want to find the height that separates the shortest from everyone else. Which calculation does the job?     invNorm(0.25, 64, 3)   Correct. You were handed an area and asked for a value, so you need the inverse.     normalcdf(-1E99, 0.25, 64, 3)   This treats as a height rather than as an area. Check .     normalcdf(25, 1E99, 64, 3)   This finds the probability of a height above inches, which is not what was asked.     invNorm(0.75, 64, 3)   Close, but invNorm always takes the area to the left . The shortest is a left area of .       Computer use at home   Suppose the average time a household personal computer is used for entertainment is two hours per day, with times normally distributed and a standard deviation of half an hour, so .  (a) Find the probability that such a computer is used for entertainment between and hours per day.  (b) Find the maximum number of hours per day used by the bottom quartile of households.    (a) You want the area between two values, so both endpoints go straight into the command: normalcdf(1.8, 2.75, 2, 0.5) = 0.5886 .  (b) The bottom quartile is the lowest , so find with : invNorm(0.25, 2, 0.5) = 1.66 .  The bottom quartile of households uses the computer at most hours per day for entertainment.       Golf scores for a school team are normally distributed with mean and standard deviation . What is the probability that a randomly selected golfer scored less than ?     About   Correct. is exactly one standard deviation below the mean, and about of a normal distribution lies below that point. ( normalcdf(-1E99, 65, 68, 3) .)     About   That is the area to the right of . The question asks for scores less than  .     About   That is the total area in both tails beyond one standard deviation. You want only the left one.     About   The Empirical Rule's is the area between  and standard deviations, not a tail area.         Percentiles and interpretation  A percentile is only useful if you can say what it means in words. The sentence pattern is always the same: p percent of the population is at or below this value, and the remaining percent is at or above it.   Ages of smartphone users   In the United States, the ages of smartphone users aged 13 to 55+ approximately follow a normal distribution with mean years and standard deviation years.  (a) Find the probability that a randomly selected user is between and years old.  (b) Find the probability that a user is at most years old.  (c) Find the 80th percentile and interpret it in a complete sentence.    (a) normalcdf(23, 64.7, 36.9, 13.9) = 0.8186  (b) normalcdf(-1E99, 50.8, 36.9, 13.9) = 0.8413  (c) invNorm(0.80, 36.9, 13.9) = 48.6  The 80th percentile is years. Eighty percent of smartphone users aged 13 to 55+ are years old or younger, and twenty percent are or older.       For the smartphone users in , the 30th percentile is years. Write one complete sentence interpreting this number for someone who has never taken a statistics course.     Thirty percent of smartphone users aged 13 to 55+ are years old or younger, and the other seventy percent are years old or older.  A good interpretation names the percentage, the value, the population, and the direction. Saying only the 30th percentile is restates the arithmetic without explaining it.     Quartiles and the interquartile range   Using the same smartphone distribution, :  (a) Calculate the interquartile range.  (b) Forty percent of users are at least what age?    (a) The quartiles are the 25th and 75th percentiles:  invNorm(0.75, 36.9, 13.9) = 46.2754 , so .  invNorm(0.25, 36.9, 13.9) = 27.5246 , so .   (b) At least means greater than or equal to, so is the area to the right . Since invNorm wants a left area, convert first: .  invNorm(0.60, 36.9, 13.9) = 40.4215  Forty percent of users are at least years old.       Exam scores are normal with and . You want the score that the top of students exceeded. What area should you give invNorm ?       Correct. The top is a right area, and invNorm requires the area to the left: .       That would give the score separating the bottom  . Convert the right area to a left area first.       That returns the mean, which splits the distribution in half.       invNorm takes a probability between and , not a percentage.         Finding a middle interval  A question like the middle of values fall between what two numbers? requires one extra step. The middle area is centered on the mean, so whatever is left over splits evenly between the two tails.   Strategy for a middle interval  To find the middle of a distribution, first compute the leftover area , then split it in half. Each tail gets .  The lower endpoint is at left area . The upper endpoint is at left area .    Mandarin oranges   A citrus farmer finds that the diameters of mandarin oranges from his farm follow a normal distribution with mean cm and standard deviation cm.  (a) Find the probability that a randomly selected orange has diameter larger than cm.  (b) The middle of oranges have diameters between what two values?  (c) Find the 90th percentile and interpret it.    (a) normalcdf(6, 1E99, 5.85, 0.24) = 0.2660 . About of the oranges are larger than cm.  (b) The leftover area is , so each tail has area . The lower endpoint is the 40th percentile and the upper endpoint is the 60th percentile.  invNorm(0.40, 5.85, 0.24) = 5.79 cm  invNorm(0.60, 5.85, 0.24) = 5.91 cm  The middle of oranges are between cm and cm in diameter.  (c) invNorm(0.90, 5.85, 0.24) = 6.16 cm. Ninety percent of the mandarin oranges from this farm have a diameter of cm or less.       You want the middle of a normal distribution. What are the two left areas you feed to invNorm ?     and   Correct. The leftover area is , split into two tails of each. These two values are exactly and .     and   That describes the entire upper half, not a middle interval. Review .     and   That is the lower half of the distribution, and has no finite value attached to it.     and   Both of these return the mean, giving an interval of zero width.         Probability for a normal distribution is area under the curve. is the area to the left, and is the area to the right. For a continuous distribution, endpoints do not matter: .  Given a value and asked for a probability, use normalcdf . Given a probability and asked for a value, use invNorm , which always takes the area to the left . For a middle interval of area , each tail holds .  Adapted from Introductory Statistics (OpenStax \/ Lumen Learning), CC BY 4.0. Smartphone user data from Smart Phone Users, By The Numbers, Visual.ly, 2013.   "
},
{
  "id": "sec-using-normal-2",
  "level": "2",
  "url": "sec-using-normal.html#sec-using-normal-2",
  "type": "Objectives",
  "number": "2.3",
  "title": "",
  "body": "  Interpret a normal probability as an area under the curve.  Use the complement rule to convert between left and right areas.  Choose between a probability calculation and a percentile calculation based on what the question gives you.  Find percentiles, quartiles, and middle intervals of a normal distribution.   "
},
{
  "id": "check-complement",
  "level": "2",
  "url": "sec-using-normal.html#check-complement",
  "type": "Checkpoint",
  "number": "2.3.1",
  "title": "",
  "body": "  For a normal distribution, you compute . What is ?       Correct: . The two areas must add to .       That is the area to the left . Unless is the mean, the two sides are not equal.       A probability can never be negative. Subtract from rather than negating.      It cannot be found without knowing and .    The complement rule needs nothing beyond the left area. Review .     "
},
{
  "id": "check-endpoint",
  "level": "2",
  "url": "sec-using-normal.html#check-endpoint",
  "type": "Checkpoint",
  "number": "2.3.2",
  "title": "",
  "body": "  For a normal distribution, and are the same number.    True. The normal distribution is continuous, so the single point contributes zero area. Including or excluding the endpoint has no effect. This is not true for discrete distributions.   "
},
{
  "id": "table-two-tools",
  "level": "2",
  "url": "sec-using-normal.html#table-two-tools",
  "type": "Table",
  "number": "2.3.3",
  "title": "Which calculation do you need?",
  "body": " Which calculation do you need?    You are given  You want  Calculator    a value  a probability (an area)  normalcdf    a probability (an area)  a value  invNorm    "
},
{
  "id": "ex-final-exam",
  "level": "2",
  "url": "sec-using-normal.html#ex-final-exam",
  "type": "Example",
  "number": "2.3.4",
  "title": "Final exam scores.",
  "body": " Final exam scores   Final exam scores in a statistics class were normally distributed with a mean of and a standard deviation of , so .  (a) Find the probability that a randomly selected student scored more than .  (b) Find the probability that a randomly selected student scored less than .  (c) Find the 90th percentile the score with of scores below it.  (d) Find the 70th percentile.    (a) Sketch the curve and shade to the right of . Using normalcdf(65, 1E99, 63, 5) = 0.3446 .  You can also standardize first: . The area to the left of is , so the area to the right is .  About of students scored above .  (b) normalcdf(-1E99, 85, 63, 5) \\approx 1 . A score of is more than four standard deviations above the mean, so essentially every student scored below it.  (c) Here you are given an area and want a value, so use invNorm(0.90, 63, 5) = 69.4 .  The 90th percentile is : ninety percent of scores fall at or below , and ten percent at or above. A value like this is often called a critical value .  (d) invNorm(0.70, 63, 5) = 65.6 . Seventy percent of scores fall at or below .   "
},
{
  "id": "check-which-tool",
  "level": "2",
  "url": "sec-using-normal.html#check-which-tool",
  "type": "Checkpoint",
  "number": "2.3.5",
  "title": "",
  "body": "  Heights are normally distributed with inches and inches. You want to find the height that separates the shortest from everyone else. Which calculation does the job?     invNorm(0.25, 64, 3)   Correct. You were handed an area and asked for a value, so you need the inverse.     normalcdf(-1E99, 0.25, 64, 3)   This treats as a height rather than as an area. Check .     normalcdf(25, 1E99, 64, 3)   This finds the probability of a height above inches, which is not what was asked.     invNorm(0.75, 64, 3)   Close, but invNorm always takes the area to the left . The shortest is a left area of .     "
},
{
  "id": "ex-computer-time",
  "level": "2",
  "url": "sec-using-normal.html#ex-computer-time",
  "type": "Example",
  "number": "2.3.6",
  "title": "Computer use at home.",
  "body": " Computer use at home   Suppose the average time a household personal computer is used for entertainment is two hours per day, with times normally distributed and a standard deviation of half an hour, so .  (a) Find the probability that such a computer is used for entertainment between and hours per day.  (b) Find the maximum number of hours per day used by the bottom quartile of households.    (a) You want the area between two values, so both endpoints go straight into the command: normalcdf(1.8, 2.75, 2, 0.5) = 0.5886 .  (b) The bottom quartile is the lowest , so find with : invNorm(0.25, 2, 0.5) = 1.66 .  The bottom quartile of households uses the computer at most hours per day for entertainment.   "
},
{
  "id": "check-golf",
  "level": "2",
  "url": "sec-using-normal.html#check-golf",
  "type": "Checkpoint",
  "number": "2.3.7",
  "title": "",
  "body": "  Golf scores for a school team are normally distributed with mean and standard deviation . What is the probability that a randomly selected golfer scored less than ?     About   Correct. is exactly one standard deviation below the mean, and about of a normal distribution lies below that point. ( normalcdf(-1E99, 65, 68, 3) .)     About   That is the area to the right of . The question asks for scores less than  .     About   That is the total area in both tails beyond one standard deviation. You want only the left one.     About   The Empirical Rule's is the area between  and standard deviations, not a tail area.     "
},
{
  "id": "ex-smartphone",
  "level": "2",
  "url": "sec-using-normal.html#ex-smartphone",
  "type": "Example",
  "number": "2.3.8",
  "title": "Ages of smartphone users.",
  "body": " Ages of smartphone users   In the United States, the ages of smartphone users aged 13 to 55+ approximately follow a normal distribution with mean years and standard deviation years.  (a) Find the probability that a randomly selected user is between and years old.  (b) Find the probability that a user is at most years old.  (c) Find the 80th percentile and interpret it in a complete sentence.    (a) normalcdf(23, 64.7, 36.9, 13.9) = 0.8186  (b) normalcdf(-1E99, 50.8, 36.9, 13.9) = 0.8413  (c) invNorm(0.80, 36.9, 13.9) = 48.6  The 80th percentile is years. Eighty percent of smartphone users aged 13 to 55+ are years old or younger, and twenty percent are or older.   "
},
{
  "id": "check-interpret-percentile",
  "level": "2",
  "url": "sec-using-normal.html#check-interpret-percentile",
  "type": "Checkpoint",
  "number": "2.3.9",
  "title": "",
  "body": "  For the smartphone users in , the 30th percentile is years. Write one complete sentence interpreting this number for someone who has never taken a statistics course.     Thirty percent of smartphone users aged 13 to 55+ are years old or younger, and the other seventy percent are years old or older.  A good interpretation names the percentage, the value, the population, and the direction. Saying only the 30th percentile is restates the arithmetic without explaining it.   "
},
{
  "id": "ex-iqr",
  "level": "2",
  "url": "sec-using-normal.html#ex-iqr",
  "type": "Example",
  "number": "2.3.10",
  "title": "Quartiles and the interquartile range.",
  "body": " Quartiles and the interquartile range   Using the same smartphone distribution, :  (a) Calculate the interquartile range.  (b) Forty percent of users are at least what age?    (a) The quartiles are the 25th and 75th percentiles:  invNorm(0.75, 36.9, 13.9) = 46.2754 , so .  invNorm(0.25, 36.9, 13.9) = 27.5246 , so .   (b) At least means greater than or equal to, so is the area to the right . Since invNorm wants a left area, convert first: .  invNorm(0.60, 36.9, 13.9) = 40.4215  Forty percent of users are at least years old.   "
},
{
  "id": "check-at-least",
  "level": "2",
  "url": "sec-using-normal.html#check-at-least",
  "type": "Checkpoint",
  "number": "2.3.11",
  "title": "",
  "body": "  Exam scores are normal with and . You want the score that the top of students exceeded. What area should you give invNorm ?       Correct. The top is a right area, and invNorm requires the area to the left: .       That would give the score separating the bottom  . Convert the right area to a left area first.       That returns the mean, which splits the distribution in half.       invNorm takes a probability between and , not a percentage.     "
},
{
  "id": "ex-oranges",
  "level": "2",
  "url": "sec-using-normal.html#ex-oranges",
  "type": "Example",
  "number": "2.3.12",
  "title": "Mandarin oranges.",
  "body": " Mandarin oranges   A citrus farmer finds that the diameters of mandarin oranges from his farm follow a normal distribution with mean cm and standard deviation cm.  (a) Find the probability that a randomly selected orange has diameter larger than cm.  (b) The middle of oranges have diameters between what two values?  (c) Find the 90th percentile and interpret it.    (a) normalcdf(6, 1E99, 5.85, 0.24) = 0.2660 . About of the oranges are larger than cm.  (b) The leftover area is , so each tail has area . The lower endpoint is the 40th percentile and the upper endpoint is the 60th percentile.  invNorm(0.40, 5.85, 0.24) = 5.79 cm  invNorm(0.60, 5.85, 0.24) = 5.91 cm  The middle of oranges are between cm and cm in diameter.  (c) invNorm(0.90, 5.85, 0.24) = 6.16 cm. Ninety percent of the mandarin oranges from this farm have a diameter of cm or less.   "
},
{
  "id": "check-middle-area",
  "level": "2",
  "url": "sec-using-normal.html#check-middle-area",
  "type": "Checkpoint",
  "number": "2.3.13",
  "title": "",
  "body": "  You want the middle of a normal distribution. What are the two left areas you feed to invNorm ?     and   Correct. The leftover area is , split into two tails of each. These two values are exactly and .     and   That describes the entire upper half, not a middle interval. Review .     and   That is the lower half of the distribution, and has no finite value attached to it.     and   Both of these return the mean, giving an interval of zero width.     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
