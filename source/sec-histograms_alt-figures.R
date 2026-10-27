
# ---- Part 1 Intro ----------------------
# install.packages("openintro")
library(openintro)

hip <- bdims$hip.gi
stopifnot(length(hip) == 507)

png("assets/hip-histogram.png", width = 1600, height = 1000, res = 200)
hist(hip,
     breaks = seq(75, 130, by = 5),
     right  = FALSE,                      # left-closed bins: 
[85, 90)
     col    = "#cfe2f3",
     border = "black",
     main   = "",
     xlab   = "Hip girth (cm)",
     ylab   = "Frequency (count)",
     xaxt   = "n")
axis(1, at = seq(75, 130, by = 5))
dev.off()

png("assets/hip-relative.png", width = 1600, height = 1000, res = 200)
h <- hist(hip, breaks = seq(75, 130, by = 5), right = FALSE, plot = FALSE)
barplot(100 * h$counts / length(hip),
        names.arg = paste0(h$breaks
[-length(h$breaks)]),
        space  = 0,
        col    = "#d9ead3",
        border = "black",
        xlab   = "Hip girth (cm)",
        ylab   = "Relative frequency (%)")
dev.off()

png("assets/hip-binwidth.png", width = 1600, height = 1000, res = 200)
hist(hip,
     breaks = seq(75, 135, by = 10),
     right  = FALSE,
     col    = "#f4cccc",
     border = "black",
     main   = "",
     xlab   = "Hip girth (cm)",
     ylab   = "Frequency (count)",
     xaxt   = "n")
axis(1, at = seq(75, 135, by = 10))
dev.off()

# The exact frequency table used in the text
table(cut(hip, breaks = seq(75, 130, by = 5), right = FALSE))


# ---- Part 2: exam scores, three binnings -----------------
scores <- c(46,48,52,55,57,58,63,66,68,69,70,71,72,77,78,82,84,85,88,93,96)

png("assets/bins-wide.png", width=1400, height=950, res=200)
hist(scores, breaks=seq(40,100,by=20), right=FALSE,
     col="#cfe2f3", main="", xlab="Exam score", ylab="Count")
dev.off()

png("assets/bins-medium.png", width=1400, height=950, res=200)
hist(scores, breaks=seq(40,100,by=10), right=FALSE,
     col="#d9ead3", main="", xlab="Exam score", ylab="Count")
dev.off()

png("assets/bins-shifted.png", width=1400, height=950, res=200)
hist(scores, breaks=seq(45,105,by=10), right=FALSE,
     col="#f4cccc", main="", xlab="Exam score", ylab="Count")
dev.off()

# ---- Part 3: Oscar Best Actress ages, 1970-2001 ----------
oscar <- c(34,34,26,37,42,41,35,31,41,33,30,74,33,49,38,61,
           21,41,26,80,42,29,33,35,45,49,39,34,26,25,33,35)
stopifnot(length(oscar) == 32)

png("assets/oscar-ages.png", width=1600, height=1000, res=200)
hist(oscar, breaks=seq(20,85,by=5), right=FALSE,
     col="#cfe2f3", main="",
     xlab="Age at time of award (years)",
     ylab="Number of winners")
dev.off()

# Verify the claims in the text
sum(oscar < 50) / 32       # 0.906  -> 91%
sum(oscar <= 35) / 32      # 0.563  -> 56%
sum(oscar >= 30 & oscar < 35) / 32   # 0.281 -> 28%
range(oscar)               # 21 80

# ---- Part 4: birth weight by smoking status --------------
# install.packages("MASS")
library(MASS)
bw <- birthwt
ns <- bw$bwt
[bw$smoke == 0]   # nonsmokers
sm <- bw$bwt
[bw$smoke == 1]   # smokers
brk <- seq(500, 5000, by = 500)

png("assets/bw-nonsmokers.png", width=1700, height=900, res=200)
hist(ns, breaks=brk, right=FALSE, ylim=c(0,30),
     col="#cfe2f3", main="Nonsmokers (n = 115)",
     xlab="Birth weight (grams)", ylab="Number of babies")
dev.off()

png("assets/bw-smokers.png", width=1700, height=900, res=200)
hist(sm, breaks=brk, right=FALSE, ylim=c(0,30),
     col="#f4cccc", main="Smokers (n = 74)",
     xlab="Birth weight (grams)", ylab="Number of babies")
dev.off()

# Benchmark comparisons
mean(ns < 2500); mean(sm < 2500)     # low birth weight
mean(ns >= 4000); mean(sm >= 4000)   # macrosomia