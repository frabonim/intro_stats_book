# figures.R — R equivalents for every Asymptote figure in the book.
#
# Asymptote is the production path; this file is the reproducibility
# record and the fallback.
#
# CONVENTION: every hist() call uses right = FALSE.
# The book teaches left-closed bins [a, b). R's default is the opposite.

# install.packages(c("openintro", "MASS"))
library(openintro)
library(MASS)

OUT <- "assets/external"
dir.create(OUT, showWarnings = FALSE, recursive = TRUE)

# ---- ch-data-display / sec-histograms --------------------
hip <- bdims$hip.gi
stopifnot(length(hip) == 507)
table(cut(hip, breaks = seq(75, 130, by = 5), right = FALSE))

# ---- ch-data-display / sec-comparing-distributions -------
ns <- birthwt$bwt[birthwt$smoke == 0]
sm <- birthwt$bwt[birthwt$smoke == 1]
stopifnot(length(ns) == 115, length(sm) == 74)

mean(ns < 2500);  mean(sm < 2500)    # low birth weight
mean(ns >= 4000); mean(sm >= 4000)   # macrosomia
