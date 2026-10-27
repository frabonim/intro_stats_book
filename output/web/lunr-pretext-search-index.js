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
  "id": "sec-variable-types",
  "level": "1",
  "url": "sec-variable-types.html",
  "type": "Section",
  "number": "1.1",
  "title": "Categorical and Quantitative Variables",
  "body": " Categorical and Quantitative Variables    Identify the individuals and the variables in a data set.  Distinguish between categorical and quantitative variables in context.  Recognize categorical variables that are recorded using numbers.  Explain why the type of a variable determines how it can be analyzed.     Everything in this chapter depends on a distinction that sounds trivial and is not: some variables are measurements, and some are labels. Which kind you have determines which graphs are legitimate, which summaries mean anything, and which calculations are nonsense.     Individuals and variables  Data consists of individuals and variables that give us information about those individuals.  An individual can be a person, but it need not be. It can be an object, a place, a transaction, or an event whatever the rows of your data table represent. A variable is an attribute recorded about each individual: a measurement or a label.   Medical records   In a study of factors connected to low birth weight, researchers recorded information about mothers who gave birth at a hospital in Massachusetts. Identify the individuals and the variables.    The individuals are the patients the mothers.  There are six variables :   Mother's age at delivery, in years  Mother's weight prior to pregnancy, in pounds  Whether the mother smoked during pregnancy (yes, no)  Number of doctor visits during the first trimester  Mother's race (Caucasian, African American, Asian, and so on)  Baby's birth weight, in grams   Notice that the baby's birth weight is recorded as a variable about the mother , because the mother is the individual. Deciding what the individuals are is the first thing to settle about any data set, and it is not always obvious.      A used-car dealership records the make, model, year, mileage, and sale price of every car it sold last year. What are the individuals in this data set?     The cars that were sold   Correct. Each car gets one row, with five pieces of information recorded about it.     The five pieces of information recorded   Those are the variables, not the individuals.     The customers who bought the cars   Nothing was recorded about the customers. Every variable listed describes a car.     The dealership   There is only one dealership, so it cannot be what the rows represent. The data set has one row per car sold.         Two types of variable   Categorical variable   A categorical variable takes category or label values and places each individual into one of several groups. Each observation falls in exactly one category, and the categories are mutually exclusive.     Quantitative variable   A quantitative variable takes numerical values that represent some kind of measurement or count. Arithmetic on those values averaging them, subtracting one from another produces something meaningful.    Return to . Whether the mother smoked is categorical: every mother is either a smoker or a nonsmoker, and those two groups do not overlap. Race is categorical for the same reason. Age is quantitative: a mother can be years old or years old, and the difference between those numbers means something real. Weight and birth weight are quantitative as well.  Number of doctor visits is also quantitative. It takes only whole-number values, which makes it a count rather than a measurement, but counts are numbers you can meaningfully average: a group averaging visits really did make more visits than a group averaging .    Which of these variables from is categorical ?     Whether the mother smoked during pregnancy   Correct. It sorts each mother into one of two mutually exclusive groups, and the values are labels rather than measurements.     Number of doctor visits in the first trimester   This is a count, and counts are quantitative. An average number of visits is a meaningful quantity.     Baby's birth weight in grams   A measurement in grams is quantitative.     Mother's weight prior to pregnancy   Also a measurement, and therefore quantitative.        A variable that takes only whole-number values, such as the number of doctor visits, can still be quantitative.    True. What makes a variable quantitative is that its values are numbers on which arithmetic is meaningful, not that those numbers can take any value in between. Counts qualify.       Numbers that are not measurements  Here is where the distinction earns its keep. Some categorical variables are recorded using numbers, and nothing about the appearance of the data warns you.  A patient ID number is written with digits, but averaging patient IDs produces nothing. A zip code is a number that does not measure anything; the fact that is larger than tells you nothing about either place. A survey that codes responses as , , has a categorical variable wearing a numeric disguise. The mean of those codes would be a number, and it would mean nothing at all.   A test for numeric variables  When a variable is recorded as numbers, ask two questions.  Does the order mean anything? Is a larger value genuinely more of something?  Does the difference mean anything? Is the gap between and the same kind of thing as the gap between and ?  If either answer is no, the variable is categorical no matter how it is written down.     A data set of hospital patients includes a column labeled Patient ID, containing values like and . What type of variable is this?      Categorical, because the numbers are labels rather than measurements    Correct. Patient is not more than patient in any sense, and the difference between the IDs measures nothing.      Quantitative, because the values are numbers    Being written as a number is not enough. Apply the test in : neither the order nor the differences carry meaning.      Quantitative, because you could compute an average of them    You could compute it, but the result would be meaningless. Being computable is not the same as being meaningful.      Neither identifiers are not variables    It is a variable: it is a piece of information recorded about each individual. It is simply a categorical one.        Consumer Reports analyzed breakfast cereals, recording for each one its calories per serving, grams of sugar, and the shelf it sat on in the store, coded , , or from the floor up. Which of these three variables is categorical?     Shelf   Correct. The codes name three locations. Shelf is not three times shelf , and an average shelf of describes no actual place.     Calories per serving   A measurement in calories. Quantitative.     Grams of sugar   A measurement in grams. Quantitative.     All three are quantitative   Two of them are. The shelf number labels a location rather than measuring a quantity.         Why the type decides the analysis  How we analyze data depends on the type of data we have.  Because quantitative data is numerical, there are clear numerical ways to describe an average, a spread, and a shape. The graphs in the rest of this chapter dotplots and histograms all place values on a numeric axis, which only works if the values are genuinely numeric.  For categorical data, none of that applies. There is no average eye color and no spread of political party. Instead we work with counts and proportions : how many individuals fall in each category, and what share of the whole that represents. The corresponding graph is a bar graph, whose bars are drawn with gaps because the categories have no numeric order.  This chapter concentrates on quantitative variables. Categorical variables get full treatment later, in the chapter on relationships in categorical data.    Name one categorical variable and one quantitative variable that a college could record about each of its students. For each one, say in a few words why it is the type you claim.     For example: Residency status (on-campus, off-campus, commuter) is categorical, because it sorts each student into one of three groups and the values are labels. Credits completed is quantitative, because it is a count, and the difference between and credits means something real.  The explanation is what matters here. A strong answer says why labels versus measurements, or whether differences between values carry meaning. Watch out for a variable like class year coded through : the order does mean something, but it is still usually treated as categorical, and a borderline case explained well is a better answer than an easy case explained poorly.       Data consists of individuals and the variables recorded about them. A categorical variable sorts individuals into mutually exclusive groups using labels. A quantitative variable takes numerical values representing a measurement or a count, on which arithmetic is meaningful.  Some categorical variables are recorded as numbers patient IDs, zip codes, coded survey responses. Test them by asking whether their order and their differences mean anything. If not, they are categorical.  The type determines the analysis: quantitative variables get numeric summaries and dotplots or histograms; categorical variables get counts, proportions, and bar graphs.  Adapted from Concepts in Statistics (SUNY \/ Lumen Learning), CC BY 4.0. Medical records example based on data from Hosmer and Lemeshow, Baystate Medical Center, Springfield, Massachusetts, .   "
},
{
  "id": "sec-variable-types-2",
  "level": "2",
  "url": "sec-variable-types.html#sec-variable-types-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "  Identify the individuals and the variables in a data set.  Distinguish between categorical and quantitative variables in context.  Recognize categorical variables that are recorded using numbers.  Explain why the type of a variable determines how it can be analyzed.   "
},
{
  "id": "subsec-individuals-variables-2",
  "level": "2",
  "url": "sec-variable-types.html#subsec-individuals-variables-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "individuals variables "
},
{
  "id": "ex-medical-records",
  "level": "2",
  "url": "sec-variable-types.html#ex-medical-records",
  "type": "Example",
  "number": "1.1.1",
  "title": "Medical records.",
  "body": " Medical records   In a study of factors connected to low birth weight, researchers recorded information about mothers who gave birth at a hospital in Massachusetts. Identify the individuals and the variables.    The individuals are the patients the mothers.  There are six variables :   Mother's age at delivery, in years  Mother's weight prior to pregnancy, in pounds  Whether the mother smoked during pregnancy (yes, no)  Number of doctor visits during the first trimester  Mother's race (Caucasian, African American, Asian, and so on)  Baby's birth weight, in grams   Notice that the baby's birth weight is recorded as a variable about the mother , because the mother is the individual. Deciding what the individuals are is the first thing to settle about any data set, and it is not always obvious.   "
},
{
  "id": "check-individuals",
  "level": "2",
  "url": "sec-variable-types.html#check-individuals",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "",
  "body": "  A used-car dealership records the make, model, year, mileage, and sale price of every car it sold last year. What are the individuals in this data set?     The cars that were sold   Correct. Each car gets one row, with five pieces of information recorded about it.     The five pieces of information recorded   Those are the variables, not the individuals.     The customers who bought the cars   Nothing was recorded about the customers. Every variable listed describes a car.     The dealership   There is only one dealership, so it cannot be what the rows represent. The data set has one row per car sold.     "
},
{
  "id": "def-categorical",
  "level": "2",
  "url": "sec-variable-types.html#def-categorical",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Categorical variable.",
  "body": " Categorical variable   A categorical variable takes category or label values and places each individual into one of several groups. Each observation falls in exactly one category, and the categories are mutually exclusive.   "
},
{
  "id": "def-quantitative",
  "level": "2",
  "url": "sec-variable-types.html#def-quantitative",
  "type": "Definition",
  "number": "1.1.4",
  "title": "Quantitative variable.",
  "body": " Quantitative variable   A quantitative variable takes numerical values that represent some kind of measurement or count. Arithmetic on those values averaging them, subtracting one from another produces something meaningful.   "
},
{
  "id": "check-classify-basic",
  "level": "2",
  "url": "sec-variable-types.html#check-classify-basic",
  "type": "Checkpoint",
  "number": "1.1.5",
  "title": "",
  "body": "  Which of these variables from is categorical ?     Whether the mother smoked during pregnancy   Correct. It sorts each mother into one of two mutually exclusive groups, and the values are labels rather than measurements.     Number of doctor visits in the first trimester   This is a count, and counts are quantitative. An average number of visits is a meaningful quantity.     Baby's birth weight in grams   A measurement in grams is quantitative.     Mother's weight prior to pregnancy   Also a measurement, and therefore quantitative.     "
},
{
  "id": "check-count-quantitative",
  "level": "2",
  "url": "sec-variable-types.html#check-count-quantitative",
  "type": "Checkpoint",
  "number": "1.1.6",
  "title": "",
  "body": "  A variable that takes only whole-number values, such as the number of doctor visits, can still be quantitative.    True. What makes a variable quantitative is that its values are numbers on which arithmetic is meaningful, not that those numbers can take any value in between. Counts qualify.   "
},
{
  "id": "check-patient-id",
  "level": "2",
  "url": "sec-variable-types.html#check-patient-id",
  "type": "Checkpoint",
  "number": "1.1.7",
  "title": "",
  "body": "  A data set of hospital patients includes a column labeled Patient ID, containing values like and . What type of variable is this?      Categorical, because the numbers are labels rather than measurements    Correct. Patient is not more than patient in any sense, and the difference between the IDs measures nothing.      Quantitative, because the values are numbers    Being written as a number is not enough. Apply the test in : neither the order nor the differences carry meaning.      Quantitative, because you could compute an average of them    You could compute it, but the result would be meaningless. Being computable is not the same as being meaningful.      Neither identifiers are not variables    It is a variable: it is a piece of information recorded about each individual. It is simply a categorical one.     "
},
{
  "id": "check-cereal-shelf",
  "level": "2",
  "url": "sec-variable-types.html#check-cereal-shelf",
  "type": "Checkpoint",
  "number": "1.1.8",
  "title": "",
  "body": "  Consumer Reports analyzed breakfast cereals, recording for each one its calories per serving, grams of sugar, and the shelf it sat on in the store, coded , , or from the floor up. Which of these three variables is categorical?     Shelf   Correct. The codes name three locations. Shelf is not three times shelf , and an average shelf of describes no actual place.     Calories per serving   A measurement in calories. Quantitative.     Grams of sugar   A measurement in grams. Quantitative.     All three are quantitative   Two of them are. The shelf number labels a location rather than measuring a quantity.     "
},
{
  "id": "check-own-variables",
  "level": "2",
  "url": "sec-variable-types.html#check-own-variables",
  "type": "Checkpoint",
  "number": "1.1.9",
  "title": "",
  "body": "  Name one categorical variable and one quantitative variable that a college could record about each of its students. For each one, say in a few words why it is the type you claim.     For example: Residency status (on-campus, off-campus, commuter) is categorical, because it sorts each student into one of three groups and the values are labels. Credits completed is quantitative, because it is a count, and the difference between and credits means something real.  The explanation is what matters here. A strong answer says why labels versus measurements, or whether differences between values carry meaning. Watch out for a variable like class year coded through : the order does mean something, but it is still usually treated as categorical, and a borderline case explained well is a better answer than an easy case explained poorly.   "
},
{
  "id": "sec-dotplots",
  "level": "1",
  "url": "sec-dotplots.html",
  "type": "Section",
  "number": "1.2",
  "title": "Dotplots",
  "body": " Dotplots    Explain why a table is a poor tool for seeing patterns in data.  Distinguish a case-value graph from a dotplot.  Read counts and values from a dotplot.  Describe the distribution of a quantitative variable using a dotplot.     When we work with data, it usually arrives as a table. A table is excellent for looking up one individual: you find the row, you read the value. But in data analysis we are rarely interested in an individual. We want to describe a group , and patterns in a group are nearly impossible to see in a table.  For that reason, the first step in data analysis is almost always to graph the distribution of the variable. A good graph shows two things at once: the possible values of the variable, and the number of individuals at each value.     A graph that does not help  Consider the protein content of breakfast cereals marketed to children. The individuals are the cereals; the variable is grams of protein in a serving. Here is one way to graph it.   A case-value graph of protein content for children's cereals. Each bar is one cereal.   A horizontal bar chart with one bar for each of 21 named children's cereals, showing grams of protein per serving. Most bars extend to 1 or 2 grams. Cheerios has by far the longest bar at 6 grams, and Life reaches 4 grams. Because the cereals are listed alphabetically rather than by protein content, finding how many cereals share a given protein value requires scanning every bar individually.     This is a case-value graph . You can see the name of each individual case and the variable value for that case. Apple Jacks has grams of protein in a serving; Cheerios has .  For summarizing a distribution, this graph is a poor choice. Ask it a simple question: how many cereals have grams of protein? There is no way to answer without moving down the whole list and counting bars of matching length. In that respect a case-value graph is barely better than the table it came from. We cannot see patterns, and we cannot read off the number of individuals at a given value.    What is the main weakness of the case-value graph in as a summary of the distribution?      It does not show how many cereals share a given protein value.    Correct. A summary of a distribution needs to show the number of individuals at each value, and this graph forces you to count bars one at a time.      It leaves out some of the cereals.    All cereals appear. Showing every individual is in fact what makes the graph crowded rather than informative.      The protein values are inaccurate.    The values are fine. The problem is the organization, not the numbers.      Protein is a categorical variable, so it should not be graphed this way.    Grams of protein is a measurement, so it is quantitative. A dotplot or histogram is appropriate just not this graph.         The dotplot  Here is a second graph of exactly the same cereals.   A dotplot of protein content for the same children's cereals. Each dot is one cereal.   A dotplot of protein content for 21 children's cereals. The horizontal axis runs from 1 to 6 grams. Stacks of dots sit above 1 gram with 7 cereals, above 2 grams with 10 cereals, above 3 grams with 2 cereals, above 4 grams with 1 cereal, and above 6 grams with 1 cereal. Nothing appears above 5 grams. The bulk of the data sits at the low end, with a single isolated dot far to the right at 6 grams.     In a dotplot, each dot represents one individual here, one cereal. The numbers along the horizontal axis are the variable values. The height of each stack is the count of individuals at that value.  Now the earlier question answers itself. Ten children's cereals have grams of protein in a serving. No counting required: you read the height of the stack.    In , what does a single dot represent?     One cereal   Correct. In a dotplot each individual contributes exactly one dot, placed above its value.     One gram of protein   Grams are read from the horizontal axis. The dots count individuals.     The average protein content of a group of cereals   No averaging happens in a dotplot. Each dot is one raw observation.     A range of protein values   That describes a histogram bar, which covers an interval. A dot sits at a single value.        Using , how many of these cereals have or more grams of protein in a serving?       Correct: two cereals at grams, one at , and one at .       That counts only the stack at grams. or more includes everything to the right as well.       Check again there are stacks at , , and grams, and the first of those holds two cereals.       That is the number with fewer than grams: seven at gram plus ten at grams.         Describing what you see  With the dotplot in front of us, describing the distribution is straightforward. Four observations cover it:   The amount of protein varies from to grams per serving.  Most of the cereals have or grams of protein. Seventeen of the twenty-one fall at those two values.  Larger amounts of protein are less typical.  One cereal has grams of protein. That much protein is unusual for this group of children's cereals.   Together those four statements are a good summary of the data. Notice that each of them is a claim about the group , not about any one cereal, and that none of them could have been read off the case-value graph without substantial work.    A dotplot shows less information than the table of values it was built from.    False, at least for a small data set. Every individual value is still visible in a dotplot you could reconstruct the full list of twenty-one protein values from . What the dotplot drops is the names , and in exchange it makes the pattern in the group immediately visible.      A parent looks at and says, Children's cereals are a good source of protein one of them has grams. In two or three sentences, explain what is wrong with reasoning from that single cereal, and say what the dotplot actually shows about the group.     Something like: The -gram cereal is a single unusual case, not a typical one. Seventeen of the twenty-one cereals have only or grams of protein per serving, so the typical children's cereal is a poor source of protein. Quoting the maximum describes one product, not the group.  The distinction between a statement about an individual and a statement about a distribution is the point of this whole chapter. A strong answer names the actual bulk of the data rather than only asserting that the claim is misleading.       A table and a case-value graph both display individuals well and distributions badly. Neither lets you see how many individuals share a given value without counting.  A dotplot places one dot per individual above that individual's value on a numeric axis. The height of each stack is the count of individuals at that value, which makes the distribution visible at a glance: where values cluster, how far they spread, and which values are unusual.  Adapted from Concepts in Statistics (SUNY \/ Lumen Learning), CC BY 4.0. Cereal nutrition data from Consumer Reports.   "
},
{
  "id": "sec-dotplots-2",
  "level": "2",
  "url": "sec-dotplots.html#sec-dotplots-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "  Explain why a table is a poor tool for seeing patterns in data.  Distinguish a case-value graph from a dotplot.  Read counts and values from a dotplot.  Describe the distribution of a quantitative variable using a dotplot.   "
},
{
  "id": "fig-cereal-casevalue",
  "level": "2",
  "url": "sec-dotplots.html#fig-cereal-casevalue",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " A case-value graph of protein content for children's cereals. Each bar is one cereal.   A horizontal bar chart with one bar for each of 21 named children's cereals, showing grams of protein per serving. Most bars extend to 1 or 2 grams. Cheerios has by far the longest bar at 6 grams, and Life reaches 4 grams. Because the cereals are listed alphabetically rather than by protein content, finding how many cereals share a given protein value requires scanning every bar individually.    "
},
{
  "id": "subsec-case-value-4",
  "level": "2",
  "url": "sec-dotplots.html#subsec-case-value-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "case-value graph "
},
{
  "id": "check-casevalue-problem",
  "level": "2",
  "url": "sec-dotplots.html#check-casevalue-problem",
  "type": "Checkpoint",
  "number": "1.2.2",
  "title": "",
  "body": "  What is the main weakness of the case-value graph in as a summary of the distribution?      It does not show how many cereals share a given protein value.    Correct. A summary of a distribution needs to show the number of individuals at each value, and this graph forces you to count bars one at a time.      It leaves out some of the cereals.    All cereals appear. Showing every individual is in fact what makes the graph crowded rather than informative.      The protein values are inaccurate.    The values are fine. The problem is the organization, not the numbers.      Protein is a categorical variable, so it should not be graphed this way.    Grams of protein is a measurement, so it is quantitative. A dotplot or histogram is appropriate just not this graph.     "
},
{
  "id": "fig-cereal-dotplot",
  "level": "2",
  "url": "sec-dotplots.html#fig-cereal-dotplot",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " A dotplot of protein content for the same children's cereals. Each dot is one cereal.   A dotplot of protein content for 21 children's cereals. The horizontal axis runs from 1 to 6 grams. Stacks of dots sit above 1 gram with 7 cereals, above 2 grams with 10 cereals, above 3 grams with 2 cereals, above 4 grams with 1 cereal, and above 6 grams with 1 cereal. Nothing appears above 5 grams. The bulk of the data sits at the low end, with a single isolated dot far to the right at 6 grams.    "
},
{
  "id": "check-dot-meaning",
  "level": "2",
  "url": "sec-dotplots.html#check-dot-meaning",
  "type": "Checkpoint",
  "number": "1.2.4",
  "title": "",
  "body": "  In , what does a single dot represent?     One cereal   Correct. In a dotplot each individual contributes exactly one dot, placed above its value.     One gram of protein   Grams are read from the horizontal axis. The dots count individuals.     The average protein content of a group of cereals   No averaging happens in a dotplot. Each dot is one raw observation.     A range of protein values   That describes a histogram bar, which covers an interval. A dot sits at a single value.     "
},
{
  "id": "check-read-dotplot",
  "level": "2",
  "url": "sec-dotplots.html#check-read-dotplot",
  "type": "Checkpoint",
  "number": "1.2.5",
  "title": "",
  "body": "  Using , how many of these cereals have or more grams of protein in a serving?       Correct: two cereals at grams, one at , and one at .       That counts only the stack at grams. or more includes everything to the right as well.       Check again there are stacks at , , and grams, and the first of those holds two cereals.       That is the number with fewer than grams: seven at gram plus ten at grams.     "
},
{
  "id": "check-dotplot-vs-table",
  "level": "2",
  "url": "sec-dotplots.html#check-dotplot-vs-table",
  "type": "Checkpoint",
  "number": "1.2.6",
  "title": "",
  "body": "  A dotplot shows less information than the table of values it was built from.    False, at least for a small data set. Every individual value is still visible in a dotplot you could reconstruct the full list of twenty-one protein values from . What the dotplot drops is the names , and in exchange it makes the pattern in the group immediately visible.   "
},
{
  "id": "check-describe-protein",
  "level": "2",
  "url": "sec-dotplots.html#check-describe-protein",
  "type": "Checkpoint",
  "number": "1.2.7",
  "title": "",
  "body": "  A parent looks at and says, Children's cereals are a good source of protein one of them has grams. In two or three sentences, explain what is wrong with reasoning from that single cereal, and say what the dotplot actually shows about the group.     Something like: The -gram cereal is a single unusual case, not a typical one. Seventeen of the twenty-one cereals have only or grams of protein per serving, so the typical children's cereal is a poor source of protein. Quoting the maximum describes one product, not the group.  The distinction between a statement about an individual and a statement about a distribution is the point of this whole chapter. A strong answer names the actual bulk of the data rather than only asserting that the claim is misleading.   "
},
{
  "id": "sec-shape-center-spread",
  "level": "1",
  "url": "sec-shape-center-spread.html",
  "type": "Section",
  "number": "1.3",
  "title": "Shape, Center, Spread, and Outliers",
  "body": " Shape, Center, Spread, and Outliers    Describe the shape of a distribution as right-skewed, left-skewed, symmetric with a central peak, or uniform.  Identify a typical value as an informal measure of center.  Distinguish the overall range from a typical range.  Identify outliers as observations falling outside the overall pattern.  Write a paragraph comparing two distributions.     A dotplot shows a pattern. Describing that pattern reliably takes vocabulary, and the vocabulary is always the same four items: shape , center , spread , and any outliers the exceptions to the pattern.  This section introduces all four informally. Precise definitions of center and spread come later in the chapter; for now the goal is to look at a distribution and say something true and useful about it.     Shape  To describe the shape of a distribution, imagine sketching an outline around the dots to emphasize the general trend, then ignore the small bumps. Four shapes are common enough to have names.  A distribution is skewed to the right when the data clusters on the left with a tail tapering off to the right: a lot of data at lower values, smaller amounts at higher values.   Grams of sugar per serving in adult cereals. The distribution is skewed to the right.   A dotplot of sugar content in 36 adult cereals, with the horizontal axis running from 0 to 15 grams. Tall stacks sit at the low end, peaking at 6 cereals above 3 grams, and the stacks shrink steadily as sugar increases, trailing off to single dots near 12 and 14 grams. The tail extends to the right.     A distribution is skewed to the left when the data clusters on the right with a tail tapering off to the left.   Grams of sugar per serving in children's cereals, on the same scale as . This distribution is skewed to the left.   A dotplot of sugar content in 21 children's cereals, drawn on the same horizontal scale as the adult cereal dotplot. The data clusters at the high end, with the tallest stack of 4 cereals above 12 grams and three cereals at 13 grams. Single dots trail down toward the low end at 7, 6, 5, 3, and 1 gram. The tail extends to the left.     A distribution is symmetric with a central peak , also called bell-shaped , when there is a single high point with tails falling away at about the same rate in both directions.   Calories per serving in children's cereals. This distribution is roughly symmetric with a central peak.   A dotplot of calories per serving for 21 children's cereals. The horizontal axis runs from 90 to 150 calories in steps of 10. The stacks are 1, 4, 8, 4, 2, 1, and 1, giving a single clear peak at 110 calories with the counts falling away at a similar rate on both sides.     A distribution is uniform when the dots form a roughly rectangular shape: about the same amount of data at every value.   The last digit of students' telephone numbers. The distribution is roughly uniform.   A dotplot of the final digit of 47 telephone numbers, with the horizontal axis showing the digits 0 through 9. Every stack is either 4 or 5 dots tall, so the dots form a nearly flat rectangular block with no peak and no tail.     Not every distribution fits one of these four names, and forcing a label onto a shape that does not have one is worse than describing it plainly. A distribution with two separate peaks, for instance, often means two different groups have been mixed together which is more interesting than any of the four names.    Why is described as skewed to the left , when most of its dots are on the right?      Skew is named for the direction of the tail, and this tail stretches toward the lower values.    Correct. The cluster is on the right; the thin tail trailing down to gram is on the left, and the tail is what names the skew.      Because the distribution was drawn on the same scale as the adult cereals.    The matched scale makes comparison fair, but it does not determine the shape.      Because children's cereals have more sugar than adult cereals.    That is true and is a statement about center, not shape. A distribution can be left-skewed anywhere on the axis.      Because the tallest stack is left of the middle of the axis.    The tallest stack is at grams, which is well to the right.        What makes a uniform distribution?      Every value occurs about equally often, so the dots form a roughly rectangular block.    Correct. With no peak and no tail, there is no value that counts as typical and none that counts as unusual.      All the values are whole numbers.    Whole-number values appear in the protein and sugar dotplots too, and those are not uniform.      The values run from to with no gaps.    Having no gaps is not enough a bell-shaped distribution can also have no gaps. Uniform means the stacks are all about the same height .      There are exactly observations.    Sample size has nothing to do with shape.         Center and spread  Shape alone is not a description. We also want to say where the data sits and how much it varies.  For center , identify a typical value : a single value of the variable chosen to represent the whole group. For now, reading off the most common value is enough. Precise methods come later in this chapter.  For spread also called variability we use two descriptions.   Two kinds of range  The overall range is the distance from the smallest value to the largest:   A typical range is an interval covering the bulk of the data, found by looking at where the dots clump. It deliberately ignores the extremes.  Both are useful, and they answer different questions. The overall range tells you what is possible; the typical range tells you what is ordinary.   The difference matters because a single extreme observation can inflate the overall range enormously while telling you nothing about what is usual. We will see exactly that in the cereal comparison below.    Using , what is the overall range of sugar content in children's cereals?     grams   Correct: the largest value is grams and the smallest is gram, and .     grams   That is the largest value, not the range. The range is a difference.     From to grams   That is a reasonable typical range, but the overall range uses the extremes.     grams   is the most common value a measure of center, not spread.        Two distributions can have the same overall range while differing substantially in where their values are concentrated.    True, and the two cereal dotplots are exactly such a pair. Both span grams, yet adult cereals cluster near to grams and children's cereals near to . Reporting only the overall range would make the two groups look identical.       Putting it together: comparing two groups   Sugar in adult and children's cereals   Use shape, center, and spread to compare with .    Compare the shapes. Sugar content in adult cereals is skewed to the right: many adult cereals have less than grams of sugar per serving, with a smaller number containing high amounts. Sugar in children's cereals is skewed to the left: many have more than grams, with a smaller number at low amounts.  There is nothing special about the number . It is a convenient reference point for describing the opposite trends.  Compare the centers. A typical adult cereal has grams of sugar per serving. A typical children's cereal has grams.  Compare the spreads. Adult cereals run from to grams, children's cereals from to . Both have an overall range of grams, since and .  The typical ranges tell a different story. Typical adult cereals have between and grams of sugar per serving; typical children's cereals have between and .    Now tie the observations into a single paragraph. Here is a plain-language version:   In this sample, children's cereals have more sugar per serving than adult cereals. A typical children's cereal has grams of sugar in a serving. It is not uncommon for children's cereals to have to grams, but it is unusual for one to have less than grams. A typical adult cereal has grams of sugar. It is not uncommon for adult cereals to have to grams. Larger amounts are less common.   And the same comparison in the formal vocabulary of this section:   In this sample, children's cereals have more sugar per serving than adult cereals. The distribution of sugar in children's cereals is skewed left with an overall range of grams; typical children's cereals have to grams per serving, with grams the most common amount. The distribution of sugar in adult cereals is skewed right with the same overall range of grams; typical adult cereals have to grams, with grams the most common amount.   Both paragraphs lead with the comparison rather than describing one group fully and then the other. That is deliberate: a reader should not have to do the comparing themselves.    The comparison uses grams as a dividing line. What is the status of that number?      It is a convenient reference point chosen to describe the opposite trends, with no special meaning.    Correct, and the text says so explicitly. Choosing a round number near where the two distributions cross makes the contrast easy to state.      It is the nutritional threshold above which a cereal is considered high in sugar.    No such definition is being used here. Compare this with the genuine medical benchmarks you will meet later, such as the -gram definition of low birth weight.      It is the average sugar content across both groups combined.    No average was computed. It is simply a convenient round number.      It is the midpoint of the overall range.    The ranges run to and to , whose midpoints are and . The choice was a convenience, not a calculation.         Outliers  Outliers are observations that fall outside the overall pattern of the distribution. A precise rule for identifying them comes later in this chapter. For now, use judgment: look for values that are exceptions to the general trend, usually separated from the rest of the data by a visible gap.   Wrist girth in centimeters for adults. Two observations at the right, marked in red, fall outside the overall pattern. The smallest observation, marked in gold, does not.   A dotplot of wrist girth for 40 adults, with the horizontal axis running from about 13.5 to 20 centimeters. The dots form a single mound peaking at 15.5 centimeters and tapering off smoothly in both directions, ending at 18 centimeters. Two isolated red dots sit at 19.5 and 20 centimeters, separated from the mound by a gap of more than a centimeter with nothing in between. The smallest value, a gold dot at 13.5 centimeters, sits directly adjacent to the rest of the data with no gap.     The two values at the right are separated from the main body of the data by a gap of more than a centimeter. They are plausible candidates for outliers.  The smallest observation is a different matter. It is the minimum, but it sits immediately adjacent to the next value with no gap it is the end of the pattern, not an exception to it. Being the largest or smallest value in a data set does not by itself make an observation an outlier.    Why is the smallest wrist measurement in  not considered an outlier?      It is adjacent to the rest of the data, continuing the pattern rather than standing apart from it.    Correct. The dots taper off smoothly to that value with no gap, so it is simply where the distribution ends.      Outliers can only occur at the high end of a distribution.    Outliers can occur at either end. A low value separated from the pattern by a gap would qualify.      There is only one such observation, and outliers come in pairs.    A single observation can certainly be an outlier. What matters is its separation from the pattern.      It is within the overall range of the data.    Every observation is within the overall range by definition, including the two red ones.        Using , write a two- or three-sentence description of the distribution of calories in children's cereals. Cover shape, center, spread, and whether there are any outliers.     Something like: The distribution of calories in children's cereals is roughly symmetric with a central peak at calories per serving, which is also a reasonable typical value. Calories range from to , an overall range of calories, with most cereals falling between and . There are no outliers: the counts taper off gradually on both sides with no isolated values.  Stating explicitly that there are no outliers is worth doing a reader cannot otherwise tell whether you looked. Note also that this distribution has a slightly longer right tail than left, so roughly symmetric is more honest than symmetric. Hedging accurately is better than overstating.       To describe the distribution of a quantitative variable, report the overall pattern shape, center, and spread together with any deviations from that pattern, which are the outliers.  Shape may be skewed right, skewed left, symmetric with a central peak, or uniform; some distributions fit none of these. Center is a typical value representing the group. Spread may be reported as an overall range, largest minus smallest, or as a typical range covering the bulk of the data. Outliers are observations falling outside the overall pattern, and being the largest or smallest value is not enough to qualify.  When comparing two groups, lead with the comparison and support every claim with specific values.  Adapted from Concepts in Statistics (SUNY \/ Lumen Learning), CC BY 4.0. Cereal nutrition data from Consumer Reports; wrist measurements from the body dimensions data of Heinz, Peterson, Johnson, and Kerk (2003).   "
},
{
  "id": "sec-shape-center-spread-2",
  "level": "2",
  "url": "sec-shape-center-spread.html#sec-shape-center-spread-2",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": "  Describe the shape of a distribution as right-skewed, left-skewed, symmetric with a central peak, or uniform.  Identify a typical value as an informal measure of center.  Distinguish the overall range from a typical range.  Identify outliers as observations falling outside the overall pattern.  Write a paragraph comparing two distributions.   "
},
{
  "id": "subsec-shape-3",
  "level": "2",
  "url": "sec-shape-center-spread.html#subsec-shape-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "skewed to the right "
},
{
  "id": "fig-sugar-adult",
  "level": "2",
  "url": "sec-shape-center-spread.html#fig-sugar-adult",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " Grams of sugar per serving in adult cereals. The distribution is skewed to the right.   A dotplot of sugar content in 36 adult cereals, with the horizontal axis running from 0 to 15 grams. Tall stacks sit at the low end, peaking at 6 cereals above 3 grams, and the stacks shrink steadily as sugar increases, trailing off to single dots near 12 and 14 grams. The tail extends to the right.    "
},
{
  "id": "subsec-shape-5",
  "level": "2",
  "url": "sec-shape-center-spread.html#subsec-shape-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "skewed to the left "
},
{
  "id": "fig-sugar-children",
  "level": "2",
  "url": "sec-shape-center-spread.html#fig-sugar-children",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": " Grams of sugar per serving in children's cereals, on the same scale as . This distribution is skewed to the left.   A dotplot of sugar content in 21 children's cereals, drawn on the same horizontal scale as the adult cereal dotplot. The data clusters at the high end, with the tallest stack of 4 cereals above 12 grams and three cereals at 13 grams. Single dots trail down toward the low end at 7, 6, 5, 3, and 1 gram. The tail extends to the left.    "
},
{
  "id": "subsec-shape-7",
  "level": "2",
  "url": "sec-shape-center-spread.html#subsec-shape-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric with a central peak bell-shaped "
},
{
  "id": "fig-calories-children",
  "level": "2",
  "url": "sec-shape-center-spread.html#fig-calories-children",
  "type": "Figure",
  "number": "1.3.3",
  "title": "",
  "body": " Calories per serving in children's cereals. This distribution is roughly symmetric with a central peak.   A dotplot of calories per serving for 21 children's cereals. The horizontal axis runs from 90 to 150 calories in steps of 10. The stacks are 1, 4, 8, 4, 2, 1, and 1, giving a single clear peak at 110 calories with the counts falling away at a similar rate on both sides.    "
},
{
  "id": "subsec-shape-9",
  "level": "2",
  "url": "sec-shape-center-spread.html#subsec-shape-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "uniform "
},
{
  "id": "fig-last-digit",
  "level": "2",
  "url": "sec-shape-center-spread.html#fig-last-digit",
  "type": "Figure",
  "number": "1.3.4",
  "title": "",
  "body": " The last digit of students' telephone numbers. The distribution is roughly uniform.   A dotplot of the final digit of 47 telephone numbers, with the horizontal axis showing the digits 0 through 9. Every stack is either 4 or 5 dots tall, so the dots form a nearly flat rectangular block with no peak and no tail.    "
},
{
  "id": "check-skew-name",
  "level": "2",
  "url": "sec-shape-center-spread.html#check-skew-name",
  "type": "Checkpoint",
  "number": "1.3.5",
  "title": "",
  "body": "  Why is described as skewed to the left , when most of its dots are on the right?      Skew is named for the direction of the tail, and this tail stretches toward the lower values.    Correct. The cluster is on the right; the thin tail trailing down to gram is on the left, and the tail is what names the skew.      Because the distribution was drawn on the same scale as the adult cereals.    The matched scale makes comparison fair, but it does not determine the shape.      Because children's cereals have more sugar than adult cereals.    That is true and is a statement about center, not shape. A distribution can be left-skewed anywhere on the axis.      Because the tallest stack is left of the middle of the axis.    The tallest stack is at grams, which is well to the right.     "
},
{
  "id": "check-uniform",
  "level": "2",
  "url": "sec-shape-center-spread.html#check-uniform",
  "type": "Checkpoint",
  "number": "1.3.6",
  "title": "",
  "body": "  What makes a uniform distribution?      Every value occurs about equally often, so the dots form a roughly rectangular block.    Correct. With no peak and no tail, there is no value that counts as typical and none that counts as unusual.      All the values are whole numbers.    Whole-number values appear in the protein and sugar dotplots too, and those are not uniform.      The values run from to with no gaps.    Having no gaps is not enough a bell-shaped distribution can also have no gaps. Uniform means the stacks are all about the same height .      There are exactly observations.    Sample size has nothing to do with shape.     "
},
{
  "id": "subsec-center-spread-3",
  "level": "2",
  "url": "sec-shape-center-spread.html#subsec-center-spread-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "center "
},
{
  "id": "subsec-center-spread-4",
  "level": "2",
  "url": "sec-shape-center-spread.html#subsec-center-spread-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "spread variability "
},
{
  "id": "asm-two-ranges-2",
  "level": "2",
  "url": "sec-shape-center-spread.html#asm-two-ranges-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "overall range "
},
{
  "id": "asm-two-ranges-4",
  "level": "2",
  "url": "sec-shape-center-spread.html#asm-two-ranges-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "typical range "
},
{
  "id": "check-overall-range",
  "level": "2",
  "url": "sec-shape-center-spread.html#check-overall-range",
  "type": "Checkpoint",
  "number": "1.3.7",
  "title": "",
  "body": "  Using , what is the overall range of sugar content in children's cereals?     grams   Correct: the largest value is grams and the smallest is gram, and .     grams   That is the largest value, not the range. The range is a difference.     From to grams   That is a reasonable typical range, but the overall range uses the extremes.     grams   is the most common value a measure of center, not spread.     "
},
{
  "id": "check-typical-vs-overall",
  "level": "2",
  "url": "sec-shape-center-spread.html#check-typical-vs-overall",
  "type": "Checkpoint",
  "number": "1.3.8",
  "title": "",
  "body": "  Two distributions can have the same overall range while differing substantially in where their values are concentrated.    True, and the two cereal dotplots are exactly such a pair. Both span grams, yet adult cereals cluster near to grams and children's cereals near to . Reporting only the overall range would make the two groups look identical.   "
},
{
  "id": "ex-cereal-sugar",
  "level": "2",
  "url": "sec-shape-center-spread.html#ex-cereal-sugar",
  "type": "Example",
  "number": "1.3.9",
  "title": "Sugar in adult and children’s cereals.",
  "body": " Sugar in adult and children's cereals   Use shape, center, and spread to compare with .    Compare the shapes. Sugar content in adult cereals is skewed to the right: many adult cereals have less than grams of sugar per serving, with a smaller number containing high amounts. Sugar in children's cereals is skewed to the left: many have more than grams, with a smaller number at low amounts.  There is nothing special about the number . It is a convenient reference point for describing the opposite trends.  Compare the centers. A typical adult cereal has grams of sugar per serving. A typical children's cereal has grams.  Compare the spreads. Adult cereals run from to grams, children's cereals from to . Both have an overall range of grams, since and .  The typical ranges tell a different story. Typical adult cereals have between and grams of sugar per serving; typical children's cereals have between and .   "
},
{
  "id": "check-reference-point",
  "level": "2",
  "url": "sec-shape-center-spread.html#check-reference-point",
  "type": "Checkpoint",
  "number": "1.3.10",
  "title": "",
  "body": "  The comparison uses grams as a dividing line. What is the status of that number?      It is a convenient reference point chosen to describe the opposite trends, with no special meaning.    Correct, and the text says so explicitly. Choosing a round number near where the two distributions cross makes the contrast easy to state.      It is the nutritional threshold above which a cereal is considered high in sugar.    No such definition is being used here. Compare this with the genuine medical benchmarks you will meet later, such as the -gram definition of low birth weight.      It is the average sugar content across both groups combined.    No average was computed. It is simply a convenient round number.      It is the midpoint of the overall range.    The ranges run to and to , whose midpoints are and . The choice was a convenience, not a calculation.     "
},
{
  "id": "subsec-outliers-2",
  "level": "2",
  "url": "sec-shape-center-spread.html#subsec-outliers-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Outliers "
},
{
  "id": "fig-wrist",
  "level": "2",
  "url": "sec-shape-center-spread.html#fig-wrist",
  "type": "Figure",
  "number": "1.3.11",
  "title": "",
  "body": " Wrist girth in centimeters for adults. Two observations at the right, marked in red, fall outside the overall pattern. The smallest observation, marked in gold, does not.   A dotplot of wrist girth for 40 adults, with the horizontal axis running from about 13.5 to 20 centimeters. The dots form a single mound peaking at 15.5 centimeters and tapering off smoothly in both directions, ending at 18 centimeters. Two isolated red dots sit at 19.5 and 20 centimeters, separated from the mound by a gap of more than a centimeter with nothing in between. The smallest value, a gold dot at 13.5 centimeters, sits directly adjacent to the rest of the data with no gap.    "
},
{
  "id": "check-not-outlier",
  "level": "2",
  "url": "sec-shape-center-spread.html#check-not-outlier",
  "type": "Checkpoint",
  "number": "1.3.12",
  "title": "",
  "body": "  Why is the smallest wrist measurement in  not considered an outlier?      It is adjacent to the rest of the data, continuing the pattern rather than standing apart from it.    Correct. The dots taper off smoothly to that value with no gap, so it is simply where the distribution ends.      Outliers can only occur at the high end of a distribution.    Outliers can occur at either end. A low value separated from the pattern by a gap would qualify.      There is only one such observation, and outliers come in pairs.    A single observation can certainly be an outlier. What matters is its separation from the pattern.      It is within the overall range of the data.    Every observation is within the overall range by definition, including the two red ones.     "
},
{
  "id": "check-write-description-dotplot",
  "level": "2",
  "url": "sec-shape-center-spread.html#check-write-description-dotplot",
  "type": "Checkpoint",
  "number": "1.3.13",
  "title": "",
  "body": "  Using , write a two- or three-sentence description of the distribution of calories in children's cereals. Cover shape, center, spread, and whether there are any outliers.     Something like: The distribution of calories in children's cereals is roughly symmetric with a central peak at calories per serving, which is also a reasonable typical value. Calories range from to , an overall range of calories, with most cereals falling between and . There are no outliers: the counts taper off gradually on both sides with no isolated values.  Stating explicitly that there are no outliers is worth doing a reader cannot otherwise tell whether you looked. Note also that this distribution has a slightly longer right tail than left, so roughly symmetric is more honest than symmetric. Hedging accurately is better than overstating.   "
},
{
  "id": "sec-histograms",
  "level": "1",
  "url": "sec-histograms.html",
  "type": "Section",
  "number": "1.4",
  "title": "Histograms",
  "body": " Histograms    Describe the distribution of a quantitative variable using a histogram.  Read counts and intervals from a histogram.  Convert a count into a relative frequency and interpret it in context.  Apply the endpoint convention for assigning values to bins.  Explain how bin width affects the appearance of a distribution.     Our goal in data analysis is to describe patterns in data and build a useful summary of a group. A graph that summarizes the distribution of a variable lets us see two things at once: the possible values the variable takes, and how many individuals fall at each value or interval of values.  A dotplot does this well for small data sets. A histogram is an alternative that works far better for large ones. A histogram divides the variable values into equal-sized intervals and shows how many individuals fall in each one.     From dots to bars  Consider hip girth the measurement around the hips for adults who exercise regularly. The measurements range from cm to cm.  A dotplot of values is readable but crowded: each individual gets its own dot, and stacks near the center become tall and hard to count. The histogram fixes this in two steps.  Step one: choose bins. Divide the range into equal-sized intervals called bins . Here we use a bin width of cm, starting at .  Step two: count and draw. Count how many individuals fall in each bin, then draw a bar whose height is that count.   Hip girth measurements for adults who exercise regularly, with a bin width of cm.   A histogram of hip girth for 507 adults. The horizontal axis runs from 75 to 130 centimeters in bins of width 5. Bar heights rise from 2 at the left to a peak of 164 in the bin from 95 to 100 centimeters, then fall off to the right, reaching 1 in the final bin. The distribution is roughly bell-shaped with a slightly longer tail on the right.     The height of each bar is the count (also called the frequency ) of individuals in that bin. Reading the graph: adults have hip measurements between and cm, and adults fall between and cm.     In , what does the height of a bar tell you?      How many individuals have values falling inside that bin.    Correct. The height is the count, or frequency, for that interval.      The value of the variable for individuals in that bin.    The variable value is read off the horizontal axis. The height counts individuals.      The width of the interval that bin covers.    Every bin here has the same width, cm. The bars differ in height, not width.      The average hip girth of individuals in that bin.    A histogram shows counts, not averages. Nothing in the graph reports a mean.         A histogram is generally a better choice than a dotplot when the data set is large.    True. A dotplot draws one mark per individual, so with hundreds or thousands of values the stacks become impossible to read. A histogram groups individuals into bins, so the number of bars stays manageable no matter how many individuals there are.       The endpoint convention  A question comes up immediately. If one adult measures exactly cm, does that person belong to the bin from to , or the bin from to ? Both bins name as an endpoint, and counting the person twice or not at all would be wrong.  Statisticians settle this with a convention, applied consistently to every bin.   Which bin gets the endpoint?  A bin includes its left-hand endpoint and excludes its right-hand endpoint.  So the bin labeled to contains every individual with a value of or more, up to but not including . An adult measuring exactly cm belongs to the next bin.  Every histogram in this course follows this rule.   The convention is arbitrary the opposite choice would work equally well but applying it consistently guarantees that every individual is counted exactly once.     An adult in this study has a hip girth of exactly cm. Which bin counts this person?     The bin from to   Correct. A bin includes its left endpoint, so belongs to the bin that starts at .     The bin from to   That bin excludes its right endpoint, so it stops just short of . Review .     Both bins, since is a shared boundary   Counting one person twice would make the bar heights sum to more than . The convention exists precisely to prevent this.     Neither bin boundary values are excluded   Then this adult would vanish from the graph. Every individual lands in exactly one bin.         From counts to relative frequencies  A count answers how many, but often the more useful question is what fraction. Knowing that adults fall in a bin means little until you know whether the sample had people or . Dividing the count by the total gives a relative frequency , usually reported as a percentage.   Frequency distribution of hip girth for adults    Bin (cm)  Count  Relative frequency   to  to  to  to  to  to  to  to  to  to  to          Percentage in a single bin   Approximately what percentage of the sample has hip measurements between and cm?    Of the adults, fall in this bin.   About of the adults in this sample have hip girths of at least cm but less than cm.     Percentage across several bins   A pants manufacturer plans to produce three sizes of sweatpants. Size Large will fit hip girths of cm or more. What percentage of the sample will wear size Large?    No single bin answers this, so add the counts for every bin at cm and above:    About of the adults in this sample will wear size Large sweatpants.     Spotlight on percentages  Percent means per hundred. A percentage describes a number as a fraction out of .  Step 1 Identify the ratio. Fill in the blanks: (a part) out of (the group). The part is the subset with the special characteristic you care about.  Step 2 Calculate. Divide the part by the group size, then multiply by .  Step 3 Interpret in context. For every individuals in the group, this many will have the characteristic. Name the group and name the characteristic a percentage with no context is not an answer.   Applying that pattern to : the ratio is out of adults; the calculation gives ; and the interpretation is for every adults in this sample, about will wear size Large.     Using , approximately what percentage of the sample has a hip girth of at least cm but less than cm?     About   Correct: .     About   is the count, not a percentage. A percentage can never exceed when the part is a subset of the group.     About   This divides in the wrong direction ( , which is not a percentage at all). Divide the part by the group.     About   That is the bin from to cm. Check the row labels.         Approximately what percentage of the sample has a hip girth of less than cm?     About   Correct. Add the first four bins: , and .     About   That is only the bin from to . Less than includes every bin below it as well.     About   That is the percentage below cm. You included one bin too many.     About   This is the complement of the right answer the percentage at or above  cm.         You compute that of this sample has a hip girth of at least cm but less than cm. Write one complete sentence interpreting that number for someone who has not seen the data. Name the group, name the characteristic, and make the sentence stand on its own.     Something like: About out of every adults in this sample of regular exercisers have a hip girth of at least cm but less than cm.  A complete interpretation names the group (adults in this sample who exercise regularly), the characteristic (hip girth in that interval), and the size of the share. Writing only of the data restates the arithmetic without saying what it describes. Note also that this statement is about this sample , not about all adults everywhere.       Two axes, one picture  Because every relative frequency comes from dividing by the same total, rescaling the vertical axis from counts to percentages does not change the shape of the histogram at all. Only the numbers on the axis change.   The same data as , with the vertical axis showing relative frequency instead of count. The shape is identical.   A relative frequency histogram of hip girth for the same 507 adults. The bars have exactly the same shape as the frequency histogram, but the vertical axis now runs from 0 to 35 percent instead of 0 to 180 individuals, with the tallest bar at about 32 percent.     This matters most when comparing two groups of different sizes. Suppose you wanted to compare hip girth for these exercisers against a sample of non-exercisers. Counts would be useless every bar in the smaller group would be shorter simply because the group is smaller. Relative frequencies put both groups on the same scale, so differences in the bars mean differences in the distributions.     Why would you use relative frequency rather than count when comparing the hip girth distributions of two samples of different sizes?      Counts are affected by sample size, so the larger group would have taller bars regardless of its shape.    Correct. Dividing by the group total removes the effect of sample size, leaving only the shape of the distribution to compare.      Relative frequency changes the shape of the histogram to make differences easier to see.    The shape does not change at all compare with . Only the axis labels differ.      Counts cannot be computed when the sample sizes differ.    Counts are always computable. The problem is that they are not comparable across groups of different sizes.      Relative frequency is more precise than a count.    A relative frequency is derived from the count, so it carries no extra precision rounding usually loses a little.         When is a histogram the right graph?  A histogram describes the distribution of a quantitative variable one whose values are numbers that can be ordered and measured. Hip girth, exam score, household income, and reaction time all qualify.  A categorical variable, whose values are labels rather than measurements, calls for a bar graph instead. Eye color, academic major, and brand of phone have no natural numeric ordering, so there is nothing to divide into bins.  The visual difference reflects this. Histogram bars touch, because the bins are adjacent intervals on a continuous number line. Bar graph bars are drawn with gaps, because the categories are separate and their order on the page carries no meaning.     A researcher records the academic major of each student in a study. Which graph should she use to display this variable?      A bar graph, because major is a categorical variable.    Correct. Majors are labels, not measurements, so there are no intervals to bin.      A histogram, because she can count students in each major.    Being countable is not the same as being quantitative. A histogram needs values that can be divided into numeric intervals, and biology cannot be placed on a number line.      A histogram, after assigning each major a number.    Assigning arbitrary numbers to labels does not make the variable quantitative. The bins and the shape would be artifacts of whatever numbering was chosen.      Either one, since both display counts.    Both display counts, but a histogram also claims its horizontal axis is a meaningful numeric scale. For majors, that claim would be false.         Look at once more. In two or three sentences, describe what it tells you about hip girth among these adults. Where are most of the measurements concentrated, and is the picture symmetric or lopsided?     A good description might read: Hip measurements for these adults run from about to cm, with most values concentrated between and cm. The tallest bar covers to cm. The distribution is roughly bell-shaped but not quite symmetric: it has a longer tail stretching to the right, with a handful of adults measuring well above cm and no matching group at the low end.  The three things worth naming in any description of a distribution are where the values fall overall, where they cluster, and whether the two sides balance.       A histogram displays the distribution of a quantitative variable by dividing its values into equal-sized bins and drawing a bar whose height is the count, or frequency, of individuals in each bin. Bins include their left endpoint and exclude their right endpoint, so every individual is counted exactly once.  Dividing a count by the group total gives a relative frequency, usually written as a percentage. Relative frequencies allow comparison between groups of different sizes, and rescaling the vertical axis to show them does not change the shape of the graph.  Bin width is a choice made by whoever draws the graph. Wider bins smooth the distribution and hide detail; narrower bins reveal detail but can make random variation look meaningful.  Adapted from Concepts in Statistics (SUNY \/ Lumen Learning), CC BY 4.0. Hip girth measurements from the body dimensions data of Heinz, Peterson, Johnson, and Kerk (2003).   "
},
{
  "id": "sec-histograms-2",
  "level": "2",
  "url": "sec-histograms.html#sec-histograms-2",
  "type": "Objectives",
  "number": "1.4",
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
  "number": "1.4.1",
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
  "number": "1.4.2",
  "title": "",
  "body": "  In , what does the height of a bar tell you?      How many individuals have values falling inside that bin.    Correct. The height is the count, or frequency, for that interval.      The value of the variable for individuals in that bin.    The variable value is read off the horizontal axis. The height counts individuals.      The width of the interval that bin covers.    Every bin here has the same width, cm. The bars differ in height, not width.      The average hip girth of individuals in that bin.    A histogram shows counts, not averages. Nothing in the graph reports a mean.     "
},
{
  "id": "check-histogram-vs-dotplot",
  "level": "2",
  "url": "sec-histograms.html#check-histogram-vs-dotplot",
  "type": "Checkpoint",
  "number": "1.4.3",
  "title": "",
  "body": "  A histogram is generally a better choice than a dotplot when the data set is large.    True. A dotplot draws one mark per individual, so with hundreds or thousands of values the stacks become impossible to read. A histogram groups individuals into bins, so the number of bars stays manageable no matter how many individuals there are.   "
},
{
  "id": "check-endpoint-bin",
  "level": "2",
  "url": "sec-histograms.html#check-endpoint-bin",
  "type": "Checkpoint",
  "number": "1.4.4",
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
  "number": "1.4.5",
  "title": "Frequency distribution of hip girth for <span class=\"process-math\">\\(507\\)<\/span> adults",
  "body": " Frequency distribution of hip girth for adults    Bin (cm)  Count  Relative frequency   to  to  to  to  to  to  to  to  to  to  to        "
},
{
  "id": "ex-relative-frequency-one-bin",
  "level": "2",
  "url": "sec-histograms.html#ex-relative-frequency-one-bin",
  "type": "Example",
  "number": "1.4.6",
  "title": "Percentage in a single bin.",
  "body": " Percentage in a single bin   Approximately what percentage of the sample has hip measurements between and cm?    Of the adults, fall in this bin.   About of the adults in this sample have hip girths of at least cm but less than cm.   "
},
{
  "id": "ex-sweatpants",
  "level": "2",
  "url": "sec-histograms.html#ex-sweatpants",
  "type": "Example",
  "number": "1.4.7",
  "title": "Percentage across several bins.",
  "body": " Percentage across several bins   A pants manufacturer plans to produce three sizes of sweatpants. Size Large will fit hip girths of cm or more. What percentage of the sample will wear size Large?    No single bin answers this, so add the counts for every bin at cm and above:    About of the adults in this sample will wear size Large sweatpants.   "
},
{
  "id": "check-compute-relfreq",
  "level": "2",
  "url": "sec-histograms.html#check-compute-relfreq",
  "type": "Checkpoint",
  "number": "1.4.8",
  "title": "",
  "body": "  Using , approximately what percentage of the sample has a hip girth of at least cm but less than cm?     About   Correct: .     About   is the count, not a percentage. A percentage can never exceed when the part is a subset of the group.     About   This divides in the wrong direction ( , which is not a percentage at all). Divide the part by the group.     About   That is the bin from to cm. Check the row labels.     "
},
{
  "id": "check-cumulative",
  "level": "2",
  "url": "sec-histograms.html#check-cumulative",
  "type": "Checkpoint",
  "number": "1.4.9",
  "title": "",
  "body": "  Approximately what percentage of the sample has a hip girth of less than cm?     About   Correct. Add the first four bins: , and .     About   That is only the bin from to . Less than includes every bin below it as well.     About   That is the percentage below cm. You included one bin too many.     About   This is the complement of the right answer the percentage at or above  cm.     "
},
{
  "id": "check-interpret-percent",
  "level": "2",
  "url": "sec-histograms.html#check-interpret-percent",
  "type": "Checkpoint",
  "number": "1.4.10",
  "title": "",
  "body": "  You compute that of this sample has a hip girth of at least cm but less than cm. Write one complete sentence interpreting that number for someone who has not seen the data. Name the group, name the characteristic, and make the sentence stand on its own.     Something like: About out of every adults in this sample of regular exercisers have a hip girth of at least cm but less than cm.  A complete interpretation names the group (adults in this sample who exercise regularly), the characteristic (hip girth in that interval), and the size of the share. Writing only of the data restates the arithmetic without saying what it describes. Note also that this statement is about this sample , not about all adults everywhere.   "
},
{
  "id": "fig-hip-relative",
  "level": "2",
  "url": "sec-histograms.html#fig-hip-relative",
  "type": "Figure",
  "number": "1.4.11",
  "title": "",
  "body": " The same data as , with the vertical axis showing relative frequency instead of count. The shape is identical.   A relative frequency histogram of hip girth for the same 507 adults. The bars have exactly the same shape as the frequency histogram, but the vertical axis now runs from 0 to 35 percent instead of 0 to 180 individuals, with the tallest bar at about 32 percent.    "
},
{
  "id": "check-why-relative",
  "level": "2",
  "url": "sec-histograms.html#check-why-relative",
  "type": "Checkpoint",
  "number": "1.4.12",
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
  "number": "1.4.13",
  "title": "",
  "body": "  A researcher records the academic major of each student in a study. Which graph should she use to display this variable?      A bar graph, because major is a categorical variable.    Correct. Majors are labels, not measurements, so there are no intervals to bin.      A histogram, because she can count students in each major.    Being countable is not the same as being quantitative. A histogram needs values that can be divided into numeric intervals, and biology cannot be placed on a number line.      A histogram, after assigning each major a number.    Assigning arbitrary numbers to labels does not make the variable quantitative. The bins and the shape would be artifacts of whatever numbering was chosen.      Either one, since both display counts.    Both display counts, but a histogram also claims its horizontal axis is a meaningful numeric scale. For majors, that claim would be false.     "
},
{
  "id": "check-describe-distribution",
  "level": "2",
  "url": "sec-histograms.html#check-describe-distribution",
  "type": "Checkpoint",
  "number": "1.4.14",
  "title": "",
  "body": "  Look at once more. In two or three sentences, describe what it tells you about hip girth among these adults. Where are most of the measurements concentrated, and is the picture symmetric or lopsided?     A good description might read: Hip measurements for these adults run from about to cm, with most values concentrated between and cm. The tallest bar covers to cm. The distribution is roughly bell-shaped but not quite symmetric: it has a longer tail stretching to the right, with a handful of adults measuring well above cm and no matching group at the low end.  The three things worth naming in any description of a distribution are where the values fall overall, where they cluster, and whether the two sides balance.   "
},
{
  "id": "sec-histogram-bins",
  "level": "1",
  "url": "sec-histogram-bins.html",
  "type": "Section",
  "number": "1.5",
  "title": "How Bins Shape the Picture",
  "body": " How Bins Shape the Picture    Explain how bin width and starting point change the appearance of a histogram.  Recognize that shape, center, and spread read from a histogram are partly artifacts of binning.  Identify histograms whose bins are too wide or too narrow to be useful.  Choose a bin width appropriate to the context of the data.     We now have two graphs that summarize the distribution of a quantitative variable: the dotplot and the histogram. From a dotplot we described the pattern in the data with statements about shape , center , and spread .  We have to be more careful making the same statements from a histogram. A dotplot shows every individual value, so its appearance is fixed by the data. A histogram shows grouped values, and the grouping is a choice. Our perception of shape, center, and spread can change depending on how the bins are defined.     The same data, three ways  Twenty-one students took an exam. Here are their scores:  , , , , , , , , , , , , , , , , , , , ,  Below are three histograms built from exactly these twenty-one numbers. Nothing about the data changed between them.   Bin width , first bin starting at . The distribution looks symmetric with a single central peak.   A histogram of 21 exam scores using bins of width 20 starting at 40. There are three bars: 6 students from 40 to 60, 9 students from 60 to 80, and 6 students from 80 to 100. The picture is perfectly symmetric with a peak in the middle.      Bin width , first bin still starting at . Now it appears that most students scored between and .   A histogram of the same 21 exam scores using bins of width 10 starting at 40. The six bars have heights 2, 4, 4, 5, 4, and 2. The tallest bar covers scores from 70 to 80.      Bin width still , but the first bin now starts at . The distribution now looks slightly skewed to the right, and typical scores appear to fall between and .   A histogram of the same 21 exam scores using bins of width 10 starting at 45 instead of 40. The six bars have heights 3, 4, 6, 4, 3, and 1. The tallest bar now covers scores from 65 to 75, and a short bar at the far right gives the distribution a slight rightward tail.     These are not small differences. is perfectly symmetric. leans right. Reading , you would say most students scored in the s. Reading , you would say typical students scored between and . Same twenty-one students.     All three histograms above display exactly the same twenty-one exam scores.    True, and this is the point of the section. Nothing about the data changed. Only the bin width and the starting point of the first bin changed, and that was enough to alter the apparent shape of the distribution.       Why the grouping changes the picture  Five students scored in the s: , , , , and . Follow just those five through the three graphs.  In , all five land in the middle bin together with the four students who scored , , , and . They disappear into a group of nine.  In , those five form a bin entirely of their own, because no other student scored between and . That is the highlighted bar, and it is what makes the s look like the typical performance.  In , the five get split: , , and fall in the bin from to , while and fall in the bin from to . The group of five never appears as a group at all.  When we change the bins, the data gets grouped differently, and the different grouping changes the appearance of the histogram. Nothing deceptive is happening. Every one of these graphs is an accurate count.     Why do the five students who scored in the s form their own bar in but not in ?      The shifted bins cut through the middle of the group, splitting it across two bars.    Correct. The boundary at falls between and , dividing a group that the other binning kept together.      The shifted histogram uses a wider bin, so more students are absorbed into each bar.    Both histograms use a bin width of . Only the starting point changed.      Some of those students are excluded from the shifted histogram.    Every student appears in every histogram. All three have bars summing to .      The shifted histogram sorts the scores differently before binning.    Binning does not depend on the order of the data. Each value is simply placed into whichever interval contains it.         Choosing a bin width  If three defensible choices give three different pictures, which one should we use? There is no formula, but there are two failure modes to avoid.   Two ways to go wrong  Bins too wide. Grouping the data into only a few bins produces a skyscraper a couple of towering bars that say almost nothing about variability within the group.  Bins too narrow. Grouping the data into very many bins produces a pancake a long row of bars one or two units tall, where random gaps look like real features and no pattern is visible.  Between those extremes, prefer a bin width that means something in context.   That last point is what settles the exam-score example. Of the three graphs, is the most useful summary not because -point bins are mathematically optimal, but because -point intervals starting at round numbers correspond to letter grades. The bins carry meaning the reader already understands.  A good practice is to look at more than one binning before describing a distribution, and to be suspicious of any feature that appears under one choice and vanishes under another.     A student builds a histogram of commute times using just two bins. What is the problem?      Two bins hide almost all the variability the graph is a skyscraper that says little more than a single count would.    Correct. With bins that wide, individuals with very different commute times get lumped together, and the shape of the distribution is invisible.      Histograms are required to have at least five bins.    There is no such rule. The guidance in is about usefulness, not a minimum count.      The bar heights will not add up to .    They will. Every individual lands in exactly one bin no matter how wide the bins are.      Two bins will make the distribution look skewed when it is symmetric.    The real problem is more basic: with two bars there is essentially no shape to read at all, skewed or otherwise.         A researcher graphs the ages of survey respondents using a bin width of one year, producing about bars that are mostly , , or units tall. What should she do?      Widen the bins, so the overall pattern becomes visible.    Correct. This is the pancake problem. With values spread over bins, the bar heights are mostly noise.      Narrow the bins further, to show even more detail.    That makes it worse. The graph already shows more detail than observations can support.      Remove the bins with a count of zero.    Deleting empty bins would break the numeric scale on the horizontal axis and misrepresent where the gaps in the data are.      Collect more data, since histograms require large samples.    More data would help, but it is not necessary. A sensible bin width will give a readable histogram of these values.         Suppose you are graphing the annual household incomes of families in a county, where values range from near to about . Propose a bin width, and give one sentence defending it. What makes your choice meaningful to a reader?     Many answers are defensible. A bin width of gives about sixteen bars across the range enough to show shape without becoming a pancake and the boundaries fall at round figures that readers can hold in their heads.  A bin width of would give forty bars, which is probably too many unless the county is large. A bin width of would give four, which is a skyscraper.  The strongest answers do what the exam-score example did: tie the bin boundaries to something the audience already recognizes, such as federal poverty thresholds or tax brackets.       Descriptions of shape, center, and spread read from a histogram are affected by how the bins are defined. Changing the bin width, or keeping the width and shifting the starting point, regroups the data and can change the apparent shape of the distribution.  Avoid bins so wide that the graph becomes a skyscraper hiding all variability, and bins so narrow that it becomes a pancake showing only noise. When a bin width has meaning in context, prefer it.  A dotplot does not have this problem, because it shows every individual value. That is the trade: the histogram handles large data sets, and pays for it with a dependence on the binning choice.  Adapted from Concepts in Statistics (SUNY \/ Lumen Learning), CC BY 4.0.   "
},
{
  "id": "sec-histogram-bins-2",
  "level": "2",
  "url": "sec-histogram-bins.html#sec-histogram-bins-2",
  "type": "Objectives",
  "number": "1.5",
  "title": "",
  "body": "  Explain how bin width and starting point change the appearance of a histogram.  Recognize that shape, center, and spread read from a histogram are partly artifacts of binning.  Identify histograms whose bins are too wide or too narrow to be useful.  Choose a bin width appropriate to the context of the data.   "
},
{
  "id": "fig-bins-wide",
  "level": "2",
  "url": "sec-histogram-bins.html#fig-bins-wide",
  "type": "Figure",
  "number": "1.5.1",
  "title": "",
  "body": " Bin width , first bin starting at . The distribution looks symmetric with a single central peak.   A histogram of 21 exam scores using bins of width 20 starting at 40. There are three bars: 6 students from 40 to 60, 9 students from 60 to 80, and 6 students from 80 to 100. The picture is perfectly symmetric with a peak in the middle.    "
},
{
  "id": "fig-bins-medium",
  "level": "2",
  "url": "sec-histogram-bins.html#fig-bins-medium",
  "type": "Figure",
  "number": "1.5.2",
  "title": "",
  "body": " Bin width , first bin still starting at . Now it appears that most students scored between and .   A histogram of the same 21 exam scores using bins of width 10 starting at 40. The six bars have heights 2, 4, 4, 5, 4, and 2. The tallest bar covers scores from 70 to 80.    "
},
{
  "id": "fig-bins-shifted",
  "level": "2",
  "url": "sec-histogram-bins.html#fig-bins-shifted",
  "type": "Figure",
  "number": "1.5.3",
  "title": "",
  "body": " Bin width still , but the first bin now starts at . The distribution now looks slightly skewed to the right, and typical scores appear to fall between and .   A histogram of the same 21 exam scores using bins of width 10 starting at 45 instead of 40. The six bars have heights 3, 4, 6, 4, 3, and 1. The tallest bar now covers scores from 65 to 75, and a short bar at the far right gives the distribution a slight rightward tail.    "
},
{
  "id": "check-same-data",
  "level": "2",
  "url": "sec-histogram-bins.html#check-same-data",
  "type": "Checkpoint",
  "number": "1.5.4",
  "title": "",
  "body": "  All three histograms above display exactly the same twenty-one exam scores.    True, and this is the point of the section. Nothing about the data changed. Only the bin width and the starting point of the first bin changed, and that was enough to alter the apparent shape of the distribution.   "
},
{
  "id": "check-five-students",
  "level": "2",
  "url": "sec-histogram-bins.html#check-five-students",
  "type": "Checkpoint",
  "number": "1.5.5",
  "title": "",
  "body": "  Why do the five students who scored in the s form their own bar in but not in ?      The shifted bins cut through the middle of the group, splitting it across two bars.    Correct. The boundary at falls between and , dividing a group that the other binning kept together.      The shifted histogram uses a wider bin, so more students are absorbed into each bar.    Both histograms use a bin width of . Only the starting point changed.      Some of those students are excluded from the shifted histogram.    Every student appears in every histogram. All three have bars summing to .      The shifted histogram sorts the scores differently before binning.    Binning does not depend on the order of the data. Each value is simply placed into whichever interval contains it.     "
},
{
  "id": "check-skyscraper",
  "level": "2",
  "url": "sec-histogram-bins.html#check-skyscraper",
  "type": "Checkpoint",
  "number": "1.5.6",
  "title": "",
  "body": "  A student builds a histogram of commute times using just two bins. What is the problem?      Two bins hide almost all the variability the graph is a skyscraper that says little more than a single count would.    Correct. With bins that wide, individuals with very different commute times get lumped together, and the shape of the distribution is invisible.      Histograms are required to have at least five bins.    There is no such rule. The guidance in is about usefulness, not a minimum count.      The bar heights will not add up to .    They will. Every individual lands in exactly one bin no matter how wide the bins are.      Two bins will make the distribution look skewed when it is symmetric.    The real problem is more basic: with two bars there is essentially no shape to read at all, skewed or otherwise.     "
},
{
  "id": "check-pancake",
  "level": "2",
  "url": "sec-histogram-bins.html#check-pancake",
  "type": "Checkpoint",
  "number": "1.5.7",
  "title": "",
  "body": "  A researcher graphs the ages of survey respondents using a bin width of one year, producing about bars that are mostly , , or units tall. What should she do?      Widen the bins, so the overall pattern becomes visible.    Correct. This is the pancake problem. With values spread over bins, the bar heights are mostly noise.      Narrow the bins further, to show even more detail.    That makes it worse. The graph already shows more detail than observations can support.      Remove the bins with a count of zero.    Deleting empty bins would break the numeric scale on the horizontal axis and misrepresent where the gaps in the data are.      Collect more data, since histograms require large samples.    More data would help, but it is not necessary. A sensible bin width will give a readable histogram of these values.     "
},
{
  "id": "check-defend-bins",
  "level": "2",
  "url": "sec-histogram-bins.html#check-defend-bins",
  "type": "Checkpoint",
  "number": "1.5.8",
  "title": "",
  "body": "  Suppose you are graphing the annual household incomes of families in a county, where values range from near to about . Propose a bin width, and give one sentence defending it. What makes your choice meaningful to a reader?     Many answers are defensible. A bin width of gives about sixteen bars across the range enough to show shape without becoming a pancake and the boundaries fall at round figures that readers can hold in their heads.  A bin width of would give forty bars, which is probably too many unless the county is large. A bin width of would give four, which is a skyscraper.  The strongest answers do what the exam-score example did: tie the bin boundaries to something the audience already recognizes, such as federal poverty thresholds or tax brackets.   "
},
{
  "id": "sec-describing-distributions",
  "level": "1",
  "url": "sec-describing-distributions.html",
  "type": "Section",
  "number": "1.6",
  "title": "Describing a Distribution",
  "body": " Describing a Distribution    Describe the shape of a distribution as skewed, symmetric, or uniform.  Identify the approximate center and spread of a distribution from a histogram.  Recognize outliers as values falling outside the overall pattern.  Write a paragraph summarizing a distribution, supported by percentages.     Reading a histogram is a skill; writing down what you read is a separate one. This section builds a routine for turning a graph into a paragraph. The routine has four parts, always in the same order: shape, center, spread, and outliers.     A worked example: ages of Oscar winners  Here are the ages of the actresses who won the Academy Award for Best Actress each year from through thirty-two winners in all.  , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,   Ages of Academy Award winners for Best Actress, , in bins of width years.   A histogram of the ages of 32 Best Actress winners. Bars rise sharply from age 20 to a peak of 9 winners in the bin from 30 to 35, then fall away to the right. After age 50 the graph is empty except for three isolated bars of height one near ages 61, 74, and 80. The distribution is clearly skewed to the right.     Now work through the four parts in order.  Shape. The distribution of ages appears skewed to the right. Most winners are young: ( of ) were under , and ( of ) were or younger. The long thin tail stretching toward is what makes the distribution right-skewed.  Center. The distribution appears centered between and years. That single bin holds ( of ) of the winners, more than any other.  Spread. The ages run from about to about , so the overall range is approximately years. There is a great deal of variability in the ages of Best Actress winners.  Outliers. Winners older than are unusual. There are three such values, one each in the intervals , , and . Each is separated from the main body of the data by at least one empty bin.     Why is the distribution in described as skewed to the right rather than to the left?      The long, thin tail of the distribution extends toward the higher values on the right.    Correct. Skew is named for the direction of the tail, not the direction of the bulk of the data.      Most of the data is piled up on the left side of the graph.    That is a true observation, and it does accompany right skew, but it is not the definition. Skew is named for the tail.      The tallest bar is to the right of the center of the graph.    The tallest bar is at to , well to the left of the midpoint of the axis.      The values increase from left to right along the axis.    That is true of every histogram and has nothing to do with skew.         In this data set, the winner aged is identified as an outlier. What does that mean?      Her age falls well outside the overall pattern of the rest of the data.    Correct. An outlier is a value that stands apart from the pattern, separated from the main body of the distribution.      Her age was recorded incorrectly and should be removed.    An outlier may be a recording error, but it may also be a perfectly real and interesting value. Jessica Tandy really did win at . Never delete a value just because it is unusual.      She is the oldest person in the data set.    She is, but being the maximum does not by itself make a value an outlier. The -year-old winners are near the top of the main group and are not outliers.      Her age is more than twice the mean age.    No such rule defines an outlier. The judgment is about whether the value sits outside the overall pattern.         Turning observations into a paragraph  Four separate observations are not yet a description. The next step is to assemble them into prose that someone who has not seen the graph could follow.  Here is a plain-language version:   Between and , the Oscar for Best Actress was awarded most often to young actresses: ( of ) of the winners were or younger, with ( of ) between and years of age. Winners ranged in age from about to about , but only of the were over .   And here is the same description using the formal vocabulary of this chapter:   Between and , the Oscar for Best Actress was awarded most often to young actresses. The distribution of ages is skewed to the right: ( of ) of the winners were or younger, with the center of the distribution between and years of age. With winners ranging in age from about to about , the overall range of the distribution is about . But much of this variability is due to three outliers who were older than when they won.   Both paragraphs are good. Notice what they have in common: every claim about the shape is backed by a number, and every number is attached to a unit and a group. Skewed to the right on its own is an assertion. Skewed to the right: of winners were or younger is evidence.   Describing a distribution  Shape. Skewed left, skewed right, symmetric with a central peak, or roughly uniform. Not every distribution fits one of these neatly say so when it does not.  Center. A typical value, or the interval where the data clusters.  Spread. How much the values vary. The overall range (largest minus smallest) is one measure; a typical range covering most of the data is another.  Outliers. Any values falling outside the overall pattern.  Then write it as prose, supporting each claim with a percentage.      Which of these is the strongest description of the Oscar age distribution?      The distribution is skewed right; of the winners ( ) were under , with three older outliers at , , and .    Correct. It names the shape, supports it with a percentage, and identifies the outliers specifically.      The distribution is skewed right.    True but unsupported. A reader has no way to judge how pronounced the skew is.      The bars are , , , , , , , , , , , , .    This reports the graph without describing it. A description tells the reader what the pattern means .      Young actresses win more Oscars because Hollywood discriminates against older women.    This leaps from description to causal explanation. The data shows the pattern; it does not establish why the pattern exists.         Suppose a histogram of the amount students spent on textbooks this semester is roughly symmetric, centered near , with values ranging from to and no gaps or isolated bars.  Write a two- or three-sentence description of this distribution using the shape-center-spread-outliers routine.     Something like: The distribution of textbook spending is roughly symmetric with a single central peak. Spending is centered near , and values range from about to about , an overall range of roughly . There are no outliers no student's spending falls outside the overall pattern.  Saying explicitly that there are no outliers is worth doing. A reader cannot tell the difference between I checked and found none and I forgot to look unless you say so.       To describe the distribution of a quantitative variable, report the overall pattern shape, center, and spread and any deviations from that pattern, meaning outliers.  Shape may be skewed left, skewed right, symmetric with a central peak, or uniform, and some distributions fit none of these. Center is a typical value representing the group. Spread describes how the data varies; the overall range is one measure. Outliers are values falling outside the overall pattern.  Assemble these observations into a paragraph, and support each claim about shape with a percentage. A description without numbers is an opinion.  Adapted from Concepts in Statistics (SUNY \/ Lumen Learning), CC BY 4.0. Academy Award data from the Academy of Motion Picture Arts and Sciences.   "
},
{
  "id": "sec-describing-distributions-2",
  "level": "2",
  "url": "sec-describing-distributions.html#sec-describing-distributions-2",
  "type": "Objectives",
  "number": "1.6",
  "title": "",
  "body": "  Describe the shape of a distribution as skewed, symmetric, or uniform.  Identify the approximate center and spread of a distribution from a histogram.  Recognize outliers as values falling outside the overall pattern.  Write a paragraph summarizing a distribution, supported by percentages.   "
},
{
  "id": "fig-oscar-ages",
  "level": "2",
  "url": "sec-describing-distributions.html#fig-oscar-ages",
  "type": "Figure",
  "number": "1.6.1",
  "title": "",
  "body": " Ages of Academy Award winners for Best Actress, , in bins of width years.   A histogram of the ages of 32 Best Actress winners. Bars rise sharply from age 20 to a peak of 9 winners in the bin from 30 to 35, then fall away to the right. After age 50 the graph is empty except for three isolated bars of height one near ages 61, 74, and 80. The distribution is clearly skewed to the right.    "
},
{
  "id": "check-skew-direction",
  "level": "2",
  "url": "sec-describing-distributions.html#check-skew-direction",
  "type": "Checkpoint",
  "number": "1.6.2",
  "title": "",
  "body": "  Why is the distribution in described as skewed to the right rather than to the left?      The long, thin tail of the distribution extends toward the higher values on the right.    Correct. Skew is named for the direction of the tail, not the direction of the bulk of the data.      Most of the data is piled up on the left side of the graph.    That is a true observation, and it does accompany right skew, but it is not the definition. Skew is named for the tail.      The tallest bar is to the right of the center of the graph.    The tallest bar is at to , well to the left of the midpoint of the axis.      The values increase from left to right along the axis.    That is true of every histogram and has nothing to do with skew.     "
},
{
  "id": "check-outlier-meaning",
  "level": "2",
  "url": "sec-describing-distributions.html#check-outlier-meaning",
  "type": "Checkpoint",
  "number": "1.6.3",
  "title": "",
  "body": "  In this data set, the winner aged is identified as an outlier. What does that mean?      Her age falls well outside the overall pattern of the rest of the data.    Correct. An outlier is a value that stands apart from the pattern, separated from the main body of the distribution.      Her age was recorded incorrectly and should be removed.    An outlier may be a recording error, but it may also be a perfectly real and interesting value. Jessica Tandy really did win at . Never delete a value just because it is unusual.      She is the oldest person in the data set.    She is, but being the maximum does not by itself make a value an outlier. The -year-old winners are near the top of the main group and are not outliers.      Her age is more than twice the mean age.    No such rule defines an outlier. The judgment is about whether the value sits outside the overall pattern.     "
},
{
  "id": "check-percent-support",
  "level": "2",
  "url": "sec-describing-distributions.html#check-percent-support",
  "type": "Checkpoint",
  "number": "1.6.4",
  "title": "",
  "body": "  Which of these is the strongest description of the Oscar age distribution?      The distribution is skewed right; of the winners ( ) were under , with three older outliers at , , and .    Correct. It names the shape, supports it with a percentage, and identifies the outliers specifically.      The distribution is skewed right.    True but unsupported. A reader has no way to judge how pronounced the skew is.      The bars are , , , , , , , , , , , , .    This reports the graph without describing it. A description tells the reader what the pattern means .      Young actresses win more Oscars because Hollywood discriminates against older women.    This leaps from description to causal explanation. The data shows the pattern; it does not establish why the pattern exists.     "
},
{
  "id": "check-write-description",
  "level": "2",
  "url": "sec-describing-distributions.html#check-write-description",
  "type": "Checkpoint",
  "number": "1.6.5",
  "title": "",
  "body": "  Suppose a histogram of the amount students spent on textbooks this semester is roughly symmetric, centered near , with values ranging from to and no gaps or isolated bars.  Write a two- or three-sentence description of this distribution using the shape-center-spread-outliers routine.     Something like: The distribution of textbook spending is roughly symmetric with a single central peak. Spending is centered near , and values range from about to about , an overall range of roughly . There are no outliers no student's spending falls outside the overall pattern.  Saying explicitly that there are no outliers is worth doing. A reader cannot tell the difference between I checked and found none and I forgot to look unless you say so.   "
},
{
  "id": "sec-comparing-distributions",
  "level": "1",
  "url": "sec-comparing-distributions.html",
  "type": "Section",
  "number": "1.7",
  "title": "Comparing Two Distributions",
  "body": " Comparing Two Distributions    Compare two distributions using histograms drawn on identical scales.  Use a benchmark value to compare groups quantitatively.  Write a comparative paragraph that emphasizes differences between groups.  Distinguish an association observed in data from a causal claim.     So far we have described one distribution at a time. Most interesting statistical questions involve a comparison: does this group differ from that one? Histograms answer such questions well, provided they are drawn carefully.  Our descriptions still focus on the overall pattern shape, center, and spread and on deviations from it. But comparison adds a tool: because histograms make percentages easy to compute, we can compare specific intervals of values directly.     Smoking and birth weight  Does smoking during pregnancy affect birth weight? To investigate, doctors collected data on new mothers who gave birth at a hospital in Massachusetts during the s. Of these, did not smoke during pregnancy and did.   Birth weights of babies born to mothers, by smoking status    Birth weight (grams)  Nonsmokers  Smokers   to  to  to  to  to  to  to  to  to         As always, left endpoints are included in the bin and right endpoints are not, so a baby weighing exactly grams belongs to the interval to .   Birth weights of babies born to the mothers who did not smoke during pregnancy.   A histogram of birth weights for babies of nonsmoking mothers. Bars rise gradually from zero at 500 grams to a peak of 29 in the bin from 3000 to 3500 grams, with a nearly equal bar of 27 next to it, then drop off quickly. The distribution leans slightly to the left, with a thin tail toward the low weights.      Birth weights of babies born to the mothers who smoked during pregnancy. The horizontal scale, the bin width, and the vertical scale all match .   A histogram of birth weights for babies of smoking mothers, drawn on exactly the same axes as the previous figure. The peak of 22 occurs in the bin from 2000 to 2500 grams, noticeably further left than the nonsmokers' peak, and the bars fall away toward the heavier weights with almost nothing above 4000 grams.      Why the scales must match  Both histograms use the same horizontal range, the same bin width, and the same vertical scale. This is not decoration it is what makes the comparison valid.  If the two graphs used different bin widths, differences in the bars might be artifacts of the binning rather than differences in the babies. If they used different vertical scales, a taller bar in one graph would not mean more babies. Matching all three lets you compare the pictures directly.      Why is it important that and use identical axes?      So that differences you see between the two pictures reflect differences in the data rather than differences in how the graphs were drawn.    Correct. With matched scales and bin widths, a visual difference is a real difference.      So that the two groups have the same number of individuals.    The groups have different sizes and and matching the axes does not change that.      Because histograms of the same variable are required to use the same bins.    No such requirement exists in general. It is a deliberate choice made here because we intend to compare.      So the percentages in each bin will be equal.    The percentages are not equal and are not expected to be. Finding where they differ is the whole point.         Shape, center, and spread for each group  Nonsmokers. The distribution of birth weights appears skewed slightly to the left. Weights for this group fall between approximately and grams, an overall range of about grams. Nearly half of these babies weighed between and grams:   with fewer babies in the lower weight ranges.  Smokers. The distribution appears slightly skewed to the right. Weights fall between approximately and grams, also an overall range of about grams. Nearly half of these babies weighed between and grams:   with fewer babies in the heavier weight ranges.  Two things are worth noticing. The overall ranges are identical at about grams, so spread alone does not distinguish the groups. What differs is where the bulk of each distribution sits: the nonsmokers' typical range is a full grams heavier.  A caution carried over from the previous sections: because the choice of bin width affects the shape of a histogram, we cannot make precise statements about center and spread here. Our sense of the typical range is itself affected by the binning.     Both groups have an overall range of about grams. What does that tell you?      The two groups are similarly variable, so range alone does not distinguish them the difference lies elsewhere.    Correct. Equal ranges with different centers is exactly the pattern here: the smokers' distribution is shifted lower, not narrower.      The two distributions are essentially the same.    Range is only one feature. The peaks sit a full grams apart, which is a substantial difference.      Smoking has no effect on birth weight.    The ranges match, but the locations of the distributions do not. Look at where each peak falls.      The two groups must be the same size.    Range says nothing about group size. These groups contain and mothers.         Comparing with a benchmark  Another strategy for comparing distributions is to pick a meaningful cutoff value a benchmark and compute what percentage of each group falls beyond it. Benchmarks that come from outside the data, such as medical definitions, are especially persuasive because nobody can accuse you of choosing the cutoff to favor a conclusion.   Low birth weight   Doctors define low birth weight as a weight below grams. Compare the percentage of smokers and nonsmokers whose babies met this definition.    Nonsmokers:  babies weighed less than grams.   Smokers:  babies weighed less than grams.   Note that the raw counts are nearly identical, versus , while the percentages differ enormously. This is why relative frequency matters when group sizes differ.     Macrosomia   A condition called macrosomia , informally big baby syndrome, is defined as a birth weight of grams or more. Compare the two groups.    Nonsmokers:  babies weighed grams or more.   Smokers: only baby weighed grams or more.        In , nonsmokers and smokers had low-birth-weight babies nearly the same count. Why is it misleading to stop there?      The groups are different sizes, so the same count represents a much larger share of the smokers.    Correct. Thirty out of is a far bigger fraction than out of versus .      The counts were measured with different bin widths.    Both groups use identical bins. The issue is group size, not binning.      Counts are always less accurate than percentages.    Counts are exact. The problem is that they are not comparable across groups of different sizes.      The benchmark of grams is arbitrary.    It is a standard medical definition, not an arbitrary choice. And the issue here would remain at any cutoff.         Using , approximately what percentage of babies born to nonsmokers weighed grams or more?     About   Correct: , and .     About   That is the percentage between and grams. or more also includes the two heaviest bins.     About   is the count, not the percentage. Divide by the group total of .     About   This divides by , the total number of mothers in the study. When describing nonsmokers, the group is the nonsmokers.         Writing the comparison  Now assemble everything into prose. The key difference from a single-group description: emphasize the comparison . A paragraph that describes group A fully, then describes group B fully, leaves the reader to do the comparing. Do it for them.   In this observational study, we compared mothers who smoked during pregnancy to mothers who did not. The variable is the birth weight of their babies.  Both groups showed a lot of variability in birth weight, with identical overall range estimates of about grams, and there was substantial overlap between the distributions. Nonsmokers had babies weighing between approximately and grams; smokers had babies weighing between approximately and grams.  However, we observe important differences in the typical ranges for the two groups. For nonsmokers, nearly half the babies weighed between and grams ( of , or ), with fewer babies in the lower ranges. For smokers, nearly half weighed between and grams ( of , or ), with fewer babies in the heavier ranges.  Using the medical definition of low birth weight, below grams, smokers in this study had a much higher incidence: ( of ) of babies born to nonsmokers met the definition, compared to ( of ) of babies born to smokers. In this study, smoking is associated with lower birth weights, though the variability in the data suggests that other variables also contribute to birth weight.   Read that last sentence again. It says smoking is associated with lower birth weights not that smoking causes them. This is an observational study: nobody assigned mothers to smoke or not smoke. Mothers who smoke may differ from mothers who do not in many other ways that also affect birth weight. The data establishes a clear association, and stops there.     Based on this study, which conclusion is appropriate?      In this group of mothers, smoking during pregnancy was associated with lower birth weights.    Correct. It describes an association, names the group studied, and claims nothing beyond what the data supports.      Smoking during pregnancy causes low birth weight.    This is an observational study, not an experiment. Mothers chose whether to smoke, and may differ in other ways that affect birth weight.      If a mother smokes, her baby will have low birth weight.    Nearly of the smokers' babies were not low birth weight. The association is about rates across a group, not a prediction for any individual.      Smoking has no relationship to birth weight, since both groups had the same range.    Equal ranges do not mean equal distributions. The low-birth-weight rate differs by more than percentage points.         Using , write two sentences comparing the rate of macrosomia between the two groups. Include both percentages, and be careful about what the comparison does and does not establish.     Something like: Babies born to nonsmoking mothers were about five times as likely to meet the definition of macrosomia: ( of ) compared to ( of ) for smokers. However, this comparison rests on a single macrosomic baby in the smoking group, so the difference should be treated cautiously.  The second sentence is what separates a good answer from an adequate one. A percentage built on a count of one is fragile if that single baby had weighed slightly less, the smokers' rate would be . Reporting the underlying counts alongside the percentages lets a reader see this for themselves.       Dotplots and histograms compared  We now have two graphs for the distribution of a quantitative variable. Neither is better in general; each highlights different aspects of the data.   Choosing between a dotplot and a histogram     Dotplot  Histogram    Individual values  visible  not visible    Large data sets  becomes unreadable  handles them well    Shape, center, spread  unaffected by construction  affected by bin choice    Overall range  exact  approximate    Percentages  tedious to compute  easy to compute     There are no rules dictating which to use. With a small data set where individual values matter, a dotplot. With hundreds of observations, or when you intend to work with percentages, a histogram.     A researcher has reaction times for participants and wants readers to be able to see each individual value, including the exact fastest and slowest times. Which graph should she use?      A dotplot, since individual values stay visible and the exact range can be read off.    Correct. With only values there is no crowding problem, and binning would hide exactly what she wants to show.      A histogram, since it is the more standard graph.    A histogram would group her twelve values into a handful of bars, hiding the individual times and leaving the exact range unreadable.      A histogram with a very small bin width, so each value gets its own bar.    At that point you have built a dotplot the hard way, with a graph that invites readers to misjudge the empty bins.      Either one, since both display the same information.    They do not. A histogram discards individual values by design, which is precisely what she needs to avoid here.         You can read the exact overall range of a data set from its histogram.    False. A histogram tells you only which bin the smallest and largest values fall into. In we can say the lightest baby weighed somewhere between and grams, but not exactly how much. A dotplot shows the actual values, so the range can be computed exactly.       To compare the distributions of a quantitative variable for two groups, draw histograms on identical horizontal scales, with identical bin widths and identical vertical scales. Describe the shape, center, and spread of each, note any outliers, and most importantly say explicitly how the groups differ.  Use percentages rather than counts whenever the groups are different sizes. A benchmark value drawn from outside the data, such as a medical threshold, makes a comparison concrete and hard to dispute.  Finally, describe what the data shows and no more. An observational study can establish that two things are associated. It cannot, on its own, establish that one causes the other.  Adapted from Concepts in Statistics (SUNY \/ Lumen Learning), CC BY 4.0. Birth weight data from Hosmer and Lemeshow, collected at Baystate Medical Center, Springfield, Massachusetts, .   "
},
{
  "id": "sec-comparing-distributions-2",
  "level": "2",
  "url": "sec-comparing-distributions.html#sec-comparing-distributions-2",
  "type": "Objectives",
  "number": "1.7",
  "title": "",
  "body": "  Compare two distributions using histograms drawn on identical scales.  Use a benchmark value to compare groups quantitatively.  Write a comparative paragraph that emphasizes differences between groups.  Distinguish an association observed in data from a causal claim.   "
},
{
  "id": "table-birthweight",
  "level": "2",
  "url": "sec-comparing-distributions.html#table-birthweight",
  "type": "Table",
  "number": "1.7.1",
  "title": "Birth weights of babies born to <span class=\"process-math\">\\(189\\)<\/span> mothers, by smoking status",
  "body": " Birth weights of babies born to mothers, by smoking status    Birth weight (grams)  Nonsmokers  Smokers   to  to  to  to  to  to  to  to  to        "
},
{
  "id": "fig-nonsmokers",
  "level": "2",
  "url": "sec-comparing-distributions.html#fig-nonsmokers",
  "type": "Figure",
  "number": "1.7.2",
  "title": "",
  "body": " Birth weights of babies born to the mothers who did not smoke during pregnancy.   A histogram of birth weights for babies of nonsmoking mothers. Bars rise gradually from zero at 500 grams to a peak of 29 in the bin from 3000 to 3500 grams, with a nearly equal bar of 27 next to it, then drop off quickly. The distribution leans slightly to the left, with a thin tail toward the low weights.    "
},
{
  "id": "fig-smokers",
  "level": "2",
  "url": "sec-comparing-distributions.html#fig-smokers",
  "type": "Figure",
  "number": "1.7.3",
  "title": "",
  "body": " Birth weights of babies born to the mothers who smoked during pregnancy. The horizontal scale, the bin width, and the vertical scale all match .   A histogram of birth weights for babies of smoking mothers, drawn on exactly the same axes as the previous figure. The peak of 22 occurs in the bin from 2000 to 2500 grams, noticeably further left than the nonsmokers' peak, and the bars fall away toward the heavier weights with almost nothing above 4000 grams.    "
},
{
  "id": "check-same-scales",
  "level": "2",
  "url": "sec-comparing-distributions.html#check-same-scales",
  "type": "Checkpoint",
  "number": "1.7.4",
  "title": "",
  "body": "  Why is it important that and use identical axes?      So that differences you see between the two pictures reflect differences in the data rather than differences in how the graphs were drawn.    Correct. With matched scales and bin widths, a visual difference is a real difference.      So that the two groups have the same number of individuals.    The groups have different sizes and and matching the axes does not change that.      Because histograms of the same variable are required to use the same bins.    No such requirement exists in general. It is a deliberate choice made here because we intend to compare.      So the percentages in each bin will be equal.    The percentages are not equal and are not expected to be. Finding where they differ is the whole point.     "
},
{
  "id": "check-range-same",
  "level": "2",
  "url": "sec-comparing-distributions.html#check-range-same",
  "type": "Checkpoint",
  "number": "1.7.5",
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
  "number": "1.7.6",
  "title": "Low birth weight.",
  "body": " Low birth weight   Doctors define low birth weight as a weight below grams. Compare the percentage of smokers and nonsmokers whose babies met this definition.    Nonsmokers:  babies weighed less than grams.   Smokers:  babies weighed less than grams.   Note that the raw counts are nearly identical, versus , while the percentages differ enormously. This is why relative frequency matters when group sizes differ.   "
},
{
  "id": "ex-macrosomia",
  "level": "2",
  "url": "sec-comparing-distributions.html#ex-macrosomia",
  "type": "Example",
  "number": "1.7.7",
  "title": "Macrosomia.",
  "body": " Macrosomia   A condition called macrosomia , informally big baby syndrome, is defined as a birth weight of grams or more. Compare the two groups.    Nonsmokers:  babies weighed grams or more.   Smokers: only baby weighed grams or more.    "
},
{
  "id": "check-counts-vs-percents",
  "level": "2",
  "url": "sec-comparing-distributions.html#check-counts-vs-percents",
  "type": "Checkpoint",
  "number": "1.7.8",
  "title": "",
  "body": "  In , nonsmokers and smokers had low-birth-weight babies nearly the same count. Why is it misleading to stop there?      The groups are different sizes, so the same count represents a much larger share of the smokers.    Correct. Thirty out of is a far bigger fraction than out of versus .      The counts were measured with different bin widths.    Both groups use identical bins. The issue is group size, not binning.      Counts are always less accurate than percentages.    Counts are exact. The problem is that they are not comparable across groups of different sizes.      The benchmark of grams is arbitrary.    It is a standard medical definition, not an arbitrary choice. And the issue here would remain at any cutoff.     "
},
{
  "id": "check-benchmark-compute",
  "level": "2",
  "url": "sec-comparing-distributions.html#check-benchmark-compute",
  "type": "Checkpoint",
  "number": "1.7.9",
  "title": "",
  "body": "  Using , approximately what percentage of babies born to nonsmokers weighed grams or more?     About   Correct: , and .     About   That is the percentage between and grams. or more also includes the two heaviest bins.     About   is the count, not the percentage. Divide by the group total of .     About   This divides by , the total number of mothers in the study. When describing nonsmokers, the group is the nonsmokers.     "
},
{
  "id": "check-association",
  "level": "2",
  "url": "sec-comparing-distributions.html#check-association",
  "type": "Checkpoint",
  "number": "1.7.10",
  "title": "",
  "body": "  Based on this study, which conclusion is appropriate?      In this group of mothers, smoking during pregnancy was associated with lower birth weights.    Correct. It describes an association, names the group studied, and claims nothing beyond what the data supports.      Smoking during pregnancy causes low birth weight.    This is an observational study, not an experiment. Mothers chose whether to smoke, and may differ in other ways that affect birth weight.      If a mother smokes, her baby will have low birth weight.    Nearly of the smokers' babies were not low birth weight. The association is about rates across a group, not a prediction for any individual.      Smoking has no relationship to birth weight, since both groups had the same range.    Equal ranges do not mean equal distributions. The low-birth-weight rate differs by more than percentage points.     "
},
{
  "id": "check-write-comparison",
  "level": "2",
  "url": "sec-comparing-distributions.html#check-write-comparison",
  "type": "Checkpoint",
  "number": "1.7.11",
  "title": "",
  "body": "  Using , write two sentences comparing the rate of macrosomia between the two groups. Include both percentages, and be careful about what the comparison does and does not establish.     Something like: Babies born to nonsmoking mothers were about five times as likely to meet the definition of macrosomia: ( of ) compared to ( of ) for smokers. However, this comparison rests on a single macrosomic baby in the smoking group, so the difference should be treated cautiously.  The second sentence is what separates a good answer from an adequate one. A percentage built on a count of one is fragile if that single baby had weighed slightly less, the smokers' rate would be . Reporting the underlying counts alongside the percentages lets a reader see this for themselves.   "
},
{
  "id": "table-dotplot-histogram",
  "level": "2",
  "url": "sec-comparing-distributions.html#table-dotplot-histogram",
  "type": "Table",
  "number": "1.7.12",
  "title": "Choosing between a dotplot and a histogram",
  "body": " Choosing between a dotplot and a histogram     Dotplot  Histogram    Individual values  visible  not visible    Large data sets  becomes unreadable  handles them well    Shape, center, spread  unaffected by construction  affected by bin choice    Overall range  exact  approximate    Percentages  tedious to compute  easy to compute    "
},
{
  "id": "check-choose-graph",
  "level": "2",
  "url": "sec-comparing-distributions.html#check-choose-graph",
  "type": "Checkpoint",
  "number": "1.7.13",
  "title": "",
  "body": "  A researcher has reaction times for participants and wants readers to be able to see each individual value, including the exact fastest and slowest times. Which graph should she use?      A dotplot, since individual values stay visible and the exact range can be read off.    Correct. With only values there is no crowding problem, and binning would hide exactly what she wants to show.      A histogram, since it is the more standard graph.    A histogram would group her twelve values into a handful of bars, hiding the individual times and leaving the exact range unreadable.      A histogram with a very small bin width, so each value gets its own bar.    At that point you have built a dotplot the hard way, with a graph that invites readers to misjudge the empty bins.      Either one, since both display the same information.    They do not. A histogram discards individual values by design, which is precisely what she needs to avoid here.     "
},
{
  "id": "check-exact-range",
  "level": "2",
  "url": "sec-comparing-distributions.html#check-exact-range",
  "type": "Checkpoint",
  "number": "1.7.14",
  "title": "",
  "body": "  You can read the exact overall range of a data set from its histogram.    False. A histogram tells you only which bin the smallest and largest values fall into. In we can say the lightest baby weighed somewhere between and grams, but not exactly how much. A dotplot shows the actual values, so the range can be computed exactly.   "
},
{
  "id": "sec-mean-median",
  "level": "1",
  "url": "sec-mean-median.html",
  "type": "Section",
  "number": "1.8",
  "title": "Mean and Median",
  "body": " Mean and Median     Calculate the mean of a quantitative data set and interpret it as a fair share.    Explain why the mean is the balancing point of a distribution.    Locate the median of a data set with an odd or an even number of values.      So far we have described the center of a distribution by pointing at it. We looked at a dotplot or a histogram, found where the values piled up, and called that a typical value. That is a real skill, but it is not a number, and two people looking at the same picture can point at two different places.  This section replaces the pointing with arithmetic. There are two standard measures of center, the mean and the median , and they answer slightly different questions. For some distributions they land in almost the same place. For others they are far apart, and which one you report changes the story the data tells. Here we learn to compute both and to say what each one actually measures.    The mean  The mean is the ordinary average. Add the data values, then divide by how many there are. We write it and say x-bar .   The symbol is an instruction to add up whatever follows it, so means the sum of all the data values. The letter is the number of data values.   Calculating a mean   Find the mean of three quiz scores: 70, 85, and 82.    There are three scores, so .   The mean quiz score is 79.      A data set contains the values 6, 7, 11, and 16. What is the mean?     10   Correct. The values sum to 40 and there are four of them, so .     9   That is the median, the value halfway between 7 and 11. The mean uses the sizes of the values, not just their order.     13.3   This divides 40 by 3. Divide by , the number of data values, which is 4 here. A common slip is to count the plus signs instead of the values.     40   That is , the total. The mean divides that total by .        The mean as a fair share  Beth's nine homework scores are 70, 80, 80, 80, 85, 86, 90, 90, and 95. Her scores vary, but the mean gives one number for her typical performance.   Here is a useful way to read that 84. Suppose we took all 756 of Beth's points and redistributed them evenly across the nine assignments. Each assignment would receive exactly 84 points, because . The mean is the score she would have earned on every assignment if she had earned the same score on all of them. For this reason the mean is called the fair share measure of center.  Notice what the mean does not do. Beth never actually scored an 84 on anything. The mean tells us nothing about any individual assignment and nothing about how much her scores bounced around.   Beth's nine homework scores, with the mean and the median marked.   A dotplot of nine homework scores running from 70 to 95. There is a single dot at 70, well to the left of everything else, then a stack of three dots at 80, one dot each at 85 and 86, a stack of two dots at 90, and one dot at 95. The bulk of the scores sit between 80 and 90. A dashed line at 84 marks the mean and a dashed line at 85 marks the median; the two fall almost on top of each other, near the middle of the main cluster, with the low score of 70 pulling the mean slightly below the median.       A student has 10 homework scores with a mean of 84. How many homework points does the student have in total?     840   Correct. Since , the total is . This is the fair-share idea run backward.     84   That is the mean itself, the share each assignment would receive. The total is that share multiplied by the number of assignments.     8.4   This divides by a second time. The mean has already been divided once; recovering the total requires multiplying.      It cannot be found without the individual scores.    The individual scores are not recoverable, but the total is. The mean and determine exactly, even though many different data sets produce the same total.        The mean as a balancing point  There is a second way to see the mean, and it explains why the mean behaves the way it does later in the course. Measure the distance from each data value to the mean, counting distances below the mean as negative and distances above as positive. These signed distances are called deviations .   Deviations from the mean of 84    Score  Deviation   70  80  80  80  85  86  90  90   95   Total    The deviations below the mean total and the deviations above the mean total . They cancel exactly. Picture the dotplot as a plank with a weight at each data value: the plank balances at 84 and nowhere else. The mean is the only measure of center with this property, and it is the reason a single extreme value can drag the mean a long way, a point we take up in .    In a data set, the deviations of the values that fall below the mean add up to . What do the deviations of the values above the mean add up to?       Correct. All deviations together sum to zero, so the positive deviations must exactly offset the negative ones. This holds for every data set.       This repeats the sign of the deviations below the mean. Values above the mean produce positive deviations.       Zero is the total of all the deviations, not the total of the ones above the mean. See .      It depends on how many values are above the mean.    The count does not matter. One value far above the mean can balance many values slightly below it, but the totals still cancel.        True or false: the mean of a data set must be equal to one of the values in the data set.    True   False. Beth's mean is 84 and she never scored an 84 on any assignment. The mean is a summary of the whole group, not a report of any one observation, and it need not be a possible value at all a mean household size of 2.6 people is perfectly ordinary.     False   False, correctly identified. Beth's mean of 84 does not appear anywhere in her list of scores. The mean describes the group, and it can land on a value no individual could have.         The median  The median is the middle of the data once the values are written in order from smallest to largest. It splits the ordered list in half: roughly as many values fall below it as above it.   Median with an odd number of values   Find the median of Beth's homework scores: 70, 80, 80, 80, 85, 86, 90, 90, 95.    The scores are already in order and there are nine of them, so the middle one is the fifth. Counting in from either end gives 85. Four scores lie below it and four lie above it, so the median is 85.    With an odd number of values there is a single value in the middle. With an even number there are two, and the median is the number halfway between them.   Median with an even number of values   Beth's next eight scores are 72, 80, 84, 86, 88, 90, 92, 95. Find the median.    There are eight values, so the two middle ones are the fourth and fifth: 86 and 88. The median is their average.   The median is 87, which is not one of her scores. Like the mean, the median need not be a value in the data set.    One caution about the phrase as much data below as above. When values repeat, the split is not always exact. In the data set 4, 7, 7, 7, 9 the median is 7, yet only one value lies strictly below it. The median is best understood as the value in the middle position of the ordered list, which is exactly why it cares only about order.    Find the median of 12, 15, 18, 20, 21, 25.     19   Correct. With six values the two middle ones are 18 and 20, and .     18   This is the lower of the two middle values. With an even count, neither middle value is the median by itself; average them.     20   This is the upper of the two middle values. Averaging 18 and 20 gives the median.     18.5   This is the mean, . The two are close here, but the median is found from position in the ordered list, not from a total.        A classmate finds the median of 9, 3, 14, 5, 8 by taking the third number written down and reports 14. What went wrong?      The values were not put in order first; the median is 8.    Correct. Ordered, the data is 3, 5, 8, 9, 14, and the third value is 8. The median is the middle of the ordered list, never the middle of the list as recorded.      Nothing; 14 is the median of these five values.    14 is the largest value, not the middle one. Sorting first gives 3, 5, 8, 9, 14, with 8 in the middle.      With five values the median must be the average of two numbers.    Averaging two middle values is the procedure for an even count. Five values have a single middle position, the third.      The median should have been found by adding the values and dividing by 5.    That computes the mean, which here is 7.8. The median is a position in the ordered list.        Beth's mean homework score is 84 and her median is 85. In two or three sentences, explain what these two numbers do not tell Beth about her homework performance.     Neither number says anything about an individual assignment: Beth never earned an 84, and knowing the center does not reveal that one score was as low as 70 while another was 95. Neither number describes variability, so two students with wildly different consistency could post the same mean and median. They also say nothing about shape or about trend over time, so an upward climb and a downward slide can look identical.  An adequate answer says the center does not describe individual values. A strong answer names a second missing feature spread, shape, or order in time and explains why that matters, for instance that Beth cannot tell from 84 alone whether she is improving or whether one disaster is dragging her down.      The mean is the average: add the values and divide by , so . It is the fair share each observation would receive if the total were divided evenly, and it is the balancing point of the distribution, the one location where the deviations above and below cancel to zero.  The median is the middle of the ordered data. With an odd number of values it is the single middle value; with an even number it is the average of the two middle values. Because it depends only on position, the median ignores how far away the extreme values sit a fact that turns out to matter a great deal.  Neither measure describes an individual observation, and neither describes spread. Both can equal a value that no one in the data set actually has.  Adapted from Concepts in Statistics (SUNY \/ Lumen Learning), CC BY 4.0.   "
},
{
  "id": "objectives-mean-median",
  "level": "2",
  "url": "sec-mean-median.html#objectives-mean-median",
  "type": "Objectives",
  "number": "1.8",
  "title": "",
  "body": "   Calculate the mean of a quantitative data set and interpret it as a fair share.    Explain why the mean is the balancing point of a distribution.    Locate the median of a data set with an odd or an even number of values.    "
},
{
  "id": "sec-mean-median-3-2",
  "level": "2",
  "url": "sec-mean-median.html#sec-mean-median-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mean median "
},
{
  "id": "ex-quiz-mean",
  "level": "2",
  "url": "sec-mean-median.html#ex-quiz-mean",
  "type": "Example",
  "number": "1.8.1",
  "title": "Calculating a mean.",
  "body": " Calculating a mean   Find the mean of three quiz scores: 70, 85, and 82.    There are three scores, so .   The mean quiz score is 79.   "
},
{
  "id": "check-mean-compute",
  "level": "2",
  "url": "sec-mean-median.html#check-mean-compute",
  "type": "Checkpoint",
  "number": "1.8.2",
  "title": "",
  "body": "  A data set contains the values 6, 7, 11, and 16. What is the mean?     10   Correct. The values sum to 40 and there are four of them, so .     9   That is the median, the value halfway between 7 and 11. The mean uses the sizes of the values, not just their order.     13.3   This divides 40 by 3. Divide by , the number of data values, which is 4 here. A common slip is to count the plus signs instead of the values.     40   That is , the total. The mean divides that total by .     "
},
{
  "id": "subsec-fair-share-4",
  "level": "2",
  "url": "sec-mean-median.html#subsec-fair-share-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fair share "
},
{
  "id": "fig-beth-scores",
  "level": "2",
  "url": "sec-mean-median.html#fig-beth-scores",
  "type": "Figure",
  "number": "1.8.3",
  "title": "",
  "body": " Beth's nine homework scores, with the mean and the median marked.   A dotplot of nine homework scores running from 70 to 95. There is a single dot at 70, well to the left of everything else, then a stack of three dots at 80, one dot each at 85 and 86, a stack of two dots at 90, and one dot at 95. The bulk of the scores sit between 80 and 90. A dashed line at 84 marks the mean and a dashed line at 85 marks the median; the two fall almost on top of each other, near the middle of the main cluster, with the low score of 70 pulling the mean slightly below the median.    "
},
{
  "id": "check-fair-share",
  "level": "2",
  "url": "sec-mean-median.html#check-fair-share",
  "type": "Checkpoint",
  "number": "1.8.4",
  "title": "",
  "body": "  A student has 10 homework scores with a mean of 84. How many homework points does the student have in total?     840   Correct. Since , the total is . This is the fair-share idea run backward.     84   That is the mean itself, the share each assignment would receive. The total is that share multiplied by the number of assignments.     8.4   This divides by a second time. The mean has already been divided once; recovering the total requires multiplying.      It cannot be found without the individual scores.    The individual scores are not recoverable, but the total is. The mean and determine exactly, even though many different data sets produce the same total.     "
},
{
  "id": "subsec-balancing-point-2",
  "level": "2",
  "url": "sec-mean-median.html#subsec-balancing-point-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "deviations "
},
{
  "id": "table-deviations",
  "level": "2",
  "url": "sec-mean-median.html#table-deviations",
  "type": "Table",
  "number": "1.8.5",
  "title": "Deviations from the mean of 84",
  "body": " Deviations from the mean of 84    Score  Deviation   70  80  80  80  85  86  90  90   95   Total   "
},
{
  "id": "check-balance-deviation",
  "level": "2",
  "url": "sec-mean-median.html#check-balance-deviation",
  "type": "Checkpoint",
  "number": "1.8.6",
  "title": "",
  "body": "  In a data set, the deviations of the values that fall below the mean add up to . What do the deviations of the values above the mean add up to?       Correct. All deviations together sum to zero, so the positive deviations must exactly offset the negative ones. This holds for every data set.       This repeats the sign of the deviations below the mean. Values above the mean produce positive deviations.       Zero is the total of all the deviations, not the total of the ones above the mean. See .      It depends on how many values are above the mean.    The count does not matter. One value far above the mean can balance many values slightly below it, but the totals still cancel.     "
},
{
  "id": "check-mean-not-a-value",
  "level": "2",
  "url": "sec-mean-median.html#check-mean-not-a-value",
  "type": "Checkpoint",
  "number": "1.8.7",
  "title": "",
  "body": "  True or false: the mean of a data set must be equal to one of the values in the data set.    True   False. Beth's mean is 84 and she never scored an 84 on any assignment. The mean is a summary of the whole group, not a report of any one observation, and it need not be a possible value at all a mean household size of 2.6 people is perfectly ordinary.     False   False, correctly identified. Beth's mean of 84 does not appear anywhere in her list of scores. The mean describes the group, and it can land on a value no individual could have.      "
},
{
  "id": "subsec-the-median-2",
  "level": "2",
  "url": "sec-mean-median.html#subsec-the-median-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "median "
},
{
  "id": "ex-median-odd",
  "level": "2",
  "url": "sec-mean-median.html#ex-median-odd",
  "type": "Example",
  "number": "1.8.8",
  "title": "Median with an odd number of values.",
  "body": " Median with an odd number of values   Find the median of Beth's homework scores: 70, 80, 80, 80, 85, 86, 90, 90, 95.    The scores are already in order and there are nine of them, so the middle one is the fifth. Counting in from either end gives 85. Four scores lie below it and four lie above it, so the median is 85.   "
},
{
  "id": "ex-median-even",
  "level": "2",
  "url": "sec-mean-median.html#ex-median-even",
  "type": "Example",
  "number": "1.8.9",
  "title": "Median with an even number of values.",
  "body": " Median with an even number of values   Beth's next eight scores are 72, 80, 84, 86, 88, 90, 92, 95. Find the median.    There are eight values, so the two middle ones are the fourth and fifth: 86 and 88. The median is their average.   The median is 87, which is not one of her scores. Like the mean, the median need not be a value in the data set.   "
},
{
  "id": "check-median-even",
  "level": "2",
  "url": "sec-mean-median.html#check-median-even",
  "type": "Checkpoint",
  "number": "1.8.10",
  "title": "",
  "body": "  Find the median of 12, 15, 18, 20, 21, 25.     19   Correct. With six values the two middle ones are 18 and 20, and .     18   This is the lower of the two middle values. With an even count, neither middle value is the median by itself; average them.     20   This is the upper of the two middle values. Averaging 18 and 20 gives the median.     18.5   This is the mean, . The two are close here, but the median is found from position in the ordered list, not from a total.     "
},
{
  "id": "check-median-order",
  "level": "2",
  "url": "sec-mean-median.html#check-median-order",
  "type": "Checkpoint",
  "number": "1.8.11",
  "title": "",
  "body": "  A classmate finds the median of 9, 3, 14, 5, 8 by taking the third number written down and reports 14. What went wrong?      The values were not put in order first; the median is 8.    Correct. Ordered, the data is 3, 5, 8, 9, 14, and the third value is 8. The median is the middle of the ordered list, never the middle of the list as recorded.      Nothing; 14 is the median of these five values.    14 is the largest value, not the middle one. Sorting first gives 3, 5, 8, 9, 14, with 8 in the middle.      With five values the median must be the average of two numbers.    Averaging two middle values is the procedure for an even count. Five values have a single middle position, the third.      The median should have been found by adding the values and dividing by 5.    That computes the mean, which here is 7.8. The median is a position in the ordered list.     "
},
{
  "id": "check-center-limits",
  "level": "2",
  "url": "sec-mean-median.html#check-center-limits",
  "type": "Checkpoint",
  "number": "1.8.12",
  "title": "",
  "body": "  Beth's mean homework score is 84 and her median is 85. In two or three sentences, explain what these two numbers do not tell Beth about her homework performance.     Neither number says anything about an individual assignment: Beth never earned an 84, and knowing the center does not reveal that one score was as low as 70 while another was 95. Neither number describes variability, so two students with wildly different consistency could post the same mean and median. They also say nothing about shape or about trend over time, so an upward climb and a downward slide can look identical.  An adequate answer says the center does not describe individual values. A strong answer names a second missing feature spread, shape, or order in time and explains why that matters, for instance that Beth cannot tell from 84 alone whether she is improving or whether one disaster is dragging her down.   "
},
{
  "id": "sec-choosing-center",
  "level": "1",
  "url": "sec-choosing-center.html",
  "type": "Section",
  "number": "1.9",
  "title": "Choosing a Measure of Center",
  "body": " Choosing a Measure of Center     Explain why the median is resistant to outliers and the mean is not.    Predict how skewness pulls the mean away from the median.    Choose the mean or the median to summarize a distribution, based on its shape.      We now have two numbers competing for the title of center, and nothing yet tells us which to report. The answer is not a matter of taste. It depends on the shape of the distribution and on whether outliers are present, which means it depends on having looked at the data first.    What an outlier does to each measure  A student has 26 homework scores. Twenty-five of them fall between 80 and 90, which is solid B work. One assignment was never turned in and recorded as 0.   Twenty-six homework scores, one of which is an outlier at 0.   A dotplot of 26 homework scores. Twenty-five dots form a single tight mound between 80 and 90, tallest at 84 where six dots stack up, tapering to one dot each at 80, 81, 89, and 90. Far to the left, separated by a gap of eighty points with nothing in it, sits a single dot at 0. The median of 84.5 falls inside the mound, while the mean of 81.8 is pulled to the left of the mound, toward the lone low score.      One zero, two answers   For the 26 scores in , the median is 84.5 and the mean is 81.8. Which better summarizes this student's homework performance?    The median. Throw out the 0 and recompute: the median of the remaining 25 scores is 85, barely different from 84.5, while their mean is 85.1, more than three points above 81.8. The single missing assignment moves the mean six times as far as it moves the median.  The reason is structural. The median depends only on order , and changing the lowest score from 0 to 50 or to 79 would not change which value sits in the middle position. The mean adds every score into a total, so every score, however extreme, gets a vote proportional to its size. At 81.8 the mean suggests this student is a shaky B, which misrepresents twenty-five assignments of consistent work.    A measure of center that is barely moved by extreme values is called resistant . The median is resistant; the mean is not.  How much damage one outlier does depends on how much company it has. Suppose the teacher assigned only 10 homeworks and the student's scores were 0, 80, 82, 84, 85, 85, 86, 87, 88, 88. The median is still 85, but the mean drops to , out of the B range and into the C range. The same zero, spread across fewer assignments, pulls much harder.    Suppose the missing assignment in is found and the 0 is corrected to an 85. What happens to the mean and the median?      The mean rises by more than three points; the median rises by half a point.    Correct. The mean goes from 81.8 to 85.1, while the median moves only from 84.5 to 85. Replacing an extreme value changes the total a great deal and the middle position hardly at all.      Both rise by about three points.    This treats the two measures as interchangeable. The median is resistant: the corrected score simply moves from the bottom of the ordered list into the middle of it, shifting the middle position by one place.      The median rises by more than three points; the mean barely moves.    This reverses the roles. The mean is the sensitive one, because every value enters the total; see .      Neither changes, because only one value out of 26 was altered.    A single value can matter enormously when it is far from the rest. That is the whole point of an outlier.        A score of 0 is added to a set of homework scores that otherwise average about 85. In which case does the zero pull the mean down the most?      When there are few other scores, such as 9.    Correct. With nine other scores the mean falls to about 76.5; with twenty-five others it falls only to about 81.8. The lost points are divided among fewer assignments, so each one absorbs more of the damage.      When there are many other scores, such as 100.    This has it backward. A large dilutes an outlier: dividing the same 85 lost points among 101 assignments moves the mean less than one point.      The effect is the same regardless of how many scores there are.    The size of the effect is the lost points divided by , so controls it directly.      The zero has no effect on the mean in either case, only on the median.    This has the two measures exactly backward. The zero enters the total, so it always affects the mean; the median is the one it may leave untouched.        True or false: removing an outlier from a data set always changes the median.    True   False. Removing a value does shift the middle position by half a step, but the value sitting there may not change. In 0, 85, 85, 85, 85 the median is 85, and dropping the 0 leaves the median at 85. Even when the median does move, it moves to a neighboring value, never a long distance, which is what resistance means.     False   False, correctly identified. The middle position shifts when a value is removed, but the number occupying it may be identical, and at most it moves to an adjacent value. Compare the mean, which must change whenever the removed value differs from the mean.         Skewness pulls the mean  Outliers are not the only thing that separates the two measures. A long tail does it too, even when no single value stands out as unusual.   shows the personal incomes of a large sample of individuals from United States census data for the year 2000. The distribution is strongly skewed to the right, which is typical of income data everywhere: most people cluster at the low end and a thin tail stretches far to the right.   Personal income, United States census sample, 2000. Fifteen people in every thousand earned more than $100,000 and are not shown.   A histogram of personal income with bars ten thousand dollars wide. The tallest bar is the first, covering incomes under ten thousand dollars, and each bar after it is shorter than the one before, so the distribution falls away steadily to the right with a long thin tail. The bars above fifty thousand dollars are only a few percent as tall as the first. The median of about sixteen thousand nine hundred dollars sits inside the second bar, near the bulk of the data, while the mean of about twenty-four thousand dollars is dragged to the right of it, into the much shorter third bar, by the small number of very high incomes.      Which number is the typical income?   For this sample the mean income is $24,000 and the median income is $16,900. Which figure better represents a typical person in the sample?    The median. More than half the sample earns under $20,000, so a reported average of $24,000 is above what most of these people make. The relatively few large incomes in the right tail enter the total at full size and drag the mean upward, while the median only registers them as more values above the middle, which they would be at any size.  This is why income is almost always reported as a median. A headline average income can rise while most individual incomes fall, simply because the top of the distribution pulled away.    The pattern generalizes. In a right-skewed distribution the mean is usually greater than the median; in a left-skewed distribution the mean is usually less than the median; in a roughly symmetric distribution the two land close together. A useful way to remember it: the mean chases the tail.    A distribution of house prices is strongly skewed to the right. What should you expect of its mean and median?      The mean is larger than the median.    Correct. The expensive houses in the right tail inflate the total, and therefore the mean, while the median only counts them as values above the middle.      The median is larger than the mean.    That is the left-skewed pattern. A tail stretching to the right pulls the mean to the right, above the median.      They are equal, since both measure center.    They are close only when the distribution is roughly symmetric. The whole reason to compare them is that skewness separates them.      The mean is larger, and the median is therefore not a valid summary.    The first half is right but the conclusion is backward. Under skewness the median is the more trustworthy summary, which is why home prices are reported as medians.        Guidelines for choosing   Choosing a measure of center  Use the mean only when the distribution is reasonably symmetric with a single central peak and no outliers.  Use the median in every other case whenever the distribution is skewed or outliers are present.  Always plot the data first. Shape is not visible in a list of numbers, and you cannot choose between these two measures until you have seen it.   That last instruction is the one students skip, and it is the one that matters most. The mean and the median can be computed from any list of numbers without ever looking at the distribution, and both will return a perfectly respectable answer for data that has two separate peaks, or a value recorded as for missing. The graph is what tells you whether the number you just computed means anything.    You are summarizing the annual salaries of the 40 employees of a small company. Thirty-nine earn between $45,000 and $80,000; the founder earns $900,000. Which summary should you report, and why?      The median, because the founder's salary is an outlier that would inflate the mean.    Correct. The founder alone adds roughly $20,000 to the mean salary, describing a company no employee works for. The median stays inside the range where thirty-nine of them actually are.      The mean, because it uses all 40 salaries and the median ignores most of them.    Using every value is exactly the problem here. The median does account for all 40 observations it needs the full ordered list to find the middle but it refuses to let one extreme value dominate.      The mean, after deleting the founder's salary as a data-entry error.    Nothing suggests an error; the salary is real. Values are deleted only when they are known to be wrong, and inconvenient is not the same as wrong.       Either one, since with 40 employees a single salary cannot matter much.    A value more than ten times the typical salary matters at any realistic . Here it shifts the mean by about $20,000.        A news report states that the average home price in a neighborhood is $650,000 while the median home price is $310,000. In two or three sentences, say what this gap tells you about the shape of the distribution and which figure you would quote to someone house-hunting there.     A mean more than double the median says the distribution is strongly skewed to the right: a small number of very expensive homes inflates the total while leaving the middle of the ordered list alone. Half the homes in the neighborhood sell for under $310,000, so the median is what a buyer should be told; the $650,000 average describes a house that is far from typical.  An adequate answer identifies right skew and picks the median. A strong answer explains the mechanism that the high prices enter the mean at full value but register with the median only as values above the middle and states what the median guarantees, namely that half the homes fall on each side of it.      The mean and the median answer to different masters. The mean adds every value into a total, so an outlier or a long tail drags it; the median depends only on position in the ordered list, so extreme values barely move it. A measure with that stability is called resistant, and the median is resistant while the mean is not.  Report the mean for distributions that are reasonably symmetric with a single peak and no outliers. Report the median otherwise. When the two are far apart, that gap is itself information: it signals skewness or an extreme value, and the direction of the gap tells you which way the tail runs.  None of this can be decided from a list of numbers. Plot the data first, every time.  Adapted from Concepts in Statistics (SUNY \/ Lumen Learning), CC BY 4.0. Income distribution based on United States census data for 2000 as reported in the source; the underlying counts are reconstructed to reproduce the published mean and median.   "
},
{
  "id": "objectives-choosing-center",
  "level": "2",
  "url": "sec-choosing-center.html#objectives-choosing-center",
  "type": "Objectives",
  "number": "1.9",
  "title": "",
  "body": "   Explain why the median is resistant to outliers and the mean is not.    Predict how skewness pulls the mean away from the median.    Choose the mean or the median to summarize a distribution, based on its shape.    "
},
{
  "id": "fig-outlier-scores",
  "level": "2",
  "url": "sec-choosing-center.html#fig-outlier-scores",
  "type": "Figure",
  "number": "1.9.1",
  "title": "",
  "body": " Twenty-six homework scores, one of which is an outlier at 0.   A dotplot of 26 homework scores. Twenty-five dots form a single tight mound between 80 and 90, tallest at 84 where six dots stack up, tapering to one dot each at 80, 81, 89, and 90. Far to the left, separated by a gap of eighty points with nothing in it, sits a single dot at 0. The median of 84.5 falls inside the mound, while the mean of 81.8 is pulled to the left of the mound, toward the lone low score.    "
},
{
  "id": "ex-zero-score",
  "level": "2",
  "url": "sec-choosing-center.html#ex-zero-score",
  "type": "Example",
  "number": "1.9.2",
  "title": "One zero, two answers.",
  "body": " One zero, two answers   For the 26 scores in , the median is 84.5 and the mean is 81.8. Which better summarizes this student's homework performance?    The median. Throw out the 0 and recompute: the median of the remaining 25 scores is 85, barely different from 84.5, while their mean is 85.1, more than three points above 81.8. The single missing assignment moves the mean six times as far as it moves the median.  The reason is structural. The median depends only on order , and changing the lowest score from 0 to 50 or to 79 would not change which value sits in the middle position. The mean adds every score into a total, so every score, however extreme, gets a vote proportional to its size. At 81.8 the mean suggests this student is a shaky B, which misrepresents twenty-five assignments of consistent work.   "
},
{
  "id": "subsec-outliers-and-resistance-5",
  "level": "2",
  "url": "sec-choosing-center.html#subsec-outliers-and-resistance-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "resistant "
},
{
  "id": "check-outlier-correction",
  "level": "2",
  "url": "sec-choosing-center.html#check-outlier-correction",
  "type": "Checkpoint",
  "number": "1.9.3",
  "title": "",
  "body": "  Suppose the missing assignment in is found and the 0 is corrected to an 85. What happens to the mean and the median?      The mean rises by more than three points; the median rises by half a point.    Correct. The mean goes from 81.8 to 85.1, while the median moves only from 84.5 to 85. Replacing an extreme value changes the total a great deal and the middle position hardly at all.      Both rise by about three points.    This treats the two measures as interchangeable. The median is resistant: the corrected score simply moves from the bottom of the ordered list into the middle of it, shifting the middle position by one place.      The median rises by more than three points; the mean barely moves.    This reverses the roles. The mean is the sensitive one, because every value enters the total; see .      Neither changes, because only one value out of 26 was altered.    A single value can matter enormously when it is far from the rest. That is the whole point of an outlier.     "
},
{
  "id": "check-sample-size-effect",
  "level": "2",
  "url": "sec-choosing-center.html#check-sample-size-effect",
  "type": "Checkpoint",
  "number": "1.9.4",
  "title": "",
  "body": "  A score of 0 is added to a set of homework scores that otherwise average about 85. In which case does the zero pull the mean down the most?      When there are few other scores, such as 9.    Correct. With nine other scores the mean falls to about 76.5; with twenty-five others it falls only to about 81.8. The lost points are divided among fewer assignments, so each one absorbs more of the damage.      When there are many other scores, such as 100.    This has it backward. A large dilutes an outlier: dividing the same 85 lost points among 101 assignments moves the mean less than one point.      The effect is the same regardless of how many scores there are.    The size of the effect is the lost points divided by , so controls it directly.      The zero has no effect on the mean in either case, only on the median.    This has the two measures exactly backward. The zero enters the total, so it always affects the mean; the median is the one it may leave untouched.     "
},
{
  "id": "check-median-outlier-removal",
  "level": "2",
  "url": "sec-choosing-center.html#check-median-outlier-removal",
  "type": "Checkpoint",
  "number": "1.9.5",
  "title": "",
  "body": "  True or false: removing an outlier from a data set always changes the median.    True   False. Removing a value does shift the middle position by half a step, but the value sitting there may not change. In 0, 85, 85, 85, 85 the median is 85, and dropping the 0 leaves the median at 85. Even when the median does move, it moves to a neighboring value, never a long distance, which is what resistance means.     False   False, correctly identified. The middle position shifts when a value is removed, but the number occupying it may be identical, and at most it moves to an adjacent value. Compare the mean, which must change whenever the removed value differs from the mean.      "
},
{
  "id": "fig-income",
  "level": "2",
  "url": "sec-choosing-center.html#fig-income",
  "type": "Figure",
  "number": "1.9.6",
  "title": "",
  "body": " Personal income, United States census sample, 2000. Fifteen people in every thousand earned more than $100,000 and are not shown.   A histogram of personal income with bars ten thousand dollars wide. The tallest bar is the first, covering incomes under ten thousand dollars, and each bar after it is shorter than the one before, so the distribution falls away steadily to the right with a long thin tail. The bars above fifty thousand dollars are only a few percent as tall as the first. The median of about sixteen thousand nine hundred dollars sits inside the second bar, near the bulk of the data, while the mean of about twenty-four thousand dollars is dragged to the right of it, into the much shorter third bar, by the small number of very high incomes.    "
},
{
  "id": "ex-skewed-income",
  "level": "2",
  "url": "sec-choosing-center.html#ex-skewed-income",
  "type": "Example",
  "number": "1.9.7",
  "title": "Which number is the typical income?",
  "body": " Which number is the typical income?   For this sample the mean income is $24,000 and the median income is $16,900. Which figure better represents a typical person in the sample?    The median. More than half the sample earns under $20,000, so a reported average of $24,000 is above what most of these people make. The relatively few large incomes in the right tail enter the total at full size and drag the mean upward, while the median only registers them as more values above the middle, which they would be at any size.  This is why income is almost always reported as a median. A headline average income can rise while most individual incomes fall, simply because the top of the distribution pulled away.   "
},
{
  "id": "check-skew-mean-median",
  "level": "2",
  "url": "sec-choosing-center.html#check-skew-mean-median",
  "type": "Checkpoint",
  "number": "1.9.8",
  "title": "",
  "body": "  A distribution of house prices is strongly skewed to the right. What should you expect of its mean and median?      The mean is larger than the median.    Correct. The expensive houses in the right tail inflate the total, and therefore the mean, while the median only counts them as values above the middle.      The median is larger than the mean.    That is the left-skewed pattern. A tail stretching to the right pulls the mean to the right, above the median.      They are equal, since both measure center.    They are close only when the distribution is roughly symmetric. The whole reason to compare them is that skewness separates them.      The mean is larger, and the median is therefore not a valid summary.    The first half is right but the conclusion is backward. Under skewness the median is the more trustworthy summary, which is why home prices are reported as medians.     "
},
{
  "id": "asm-choosing-center-2",
  "level": "2",
  "url": "sec-choosing-center.html#asm-choosing-center-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mean "
},
{
  "id": "asm-choosing-center-3",
  "level": "2",
  "url": "sec-choosing-center.html#asm-choosing-center-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "median "
},
{
  "id": "check-choose-measure",
  "level": "2",
  "url": "sec-choosing-center.html#check-choose-measure",
  "type": "Checkpoint",
  "number": "1.9.9",
  "title": "",
  "body": "  You are summarizing the annual salaries of the 40 employees of a small company. Thirty-nine earn between $45,000 and $80,000; the founder earns $900,000. Which summary should you report, and why?      The median, because the founder's salary is an outlier that would inflate the mean.    Correct. The founder alone adds roughly $20,000 to the mean salary, describing a company no employee works for. The median stays inside the range where thirty-nine of them actually are.      The mean, because it uses all 40 salaries and the median ignores most of them.    Using every value is exactly the problem here. The median does account for all 40 observations it needs the full ordered list to find the middle but it refuses to let one extreme value dominate.      The mean, after deleting the founder's salary as a data-entry error.    Nothing suggests an error; the salary is real. Values are deleted only when they are known to be wrong, and inconvenient is not the same as wrong.       Either one, since with 40 employees a single salary cannot matter much.    A value more than ten times the typical salary matters at any realistic . Here it shifts the mean by about $20,000.     "
},
{
  "id": "check-home-prices",
  "level": "2",
  "url": "sec-choosing-center.html#check-home-prices",
  "type": "Checkpoint",
  "number": "1.9.10",
  "title": "",
  "body": "  A news report states that the average home price in a neighborhood is $650,000 while the median home price is $310,000. In two or three sentences, say what this gap tells you about the shape of the distribution and which figure you would quote to someone house-hunting there.     A mean more than double the median says the distribution is strongly skewed to the right: a small number of very expensive homes inflates the total while leaving the middle of the ordered list alone. Half the homes in the neighborhood sell for under $310,000, so the median is what a buyer should be told; the $650,000 average describes a house that is far from typical.  An adequate answer identifies right skew and picks the median. A strong answer explains the mechanism that the high prices enter the mean at full value but register with the median only as values above the middle and states what the median guarantees, namely that half the homes fall on each side of it.   "
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
