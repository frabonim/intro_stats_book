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
# ---- ch-data-display / sec-mean-median ------------------
beth <- c(70, 80, 80, 80, 85, 86, 90, 90, 95)
mean(beth); median(beth)            # 84, 85
sum(beth - mean(beth))              # 0 — balancing point

# ---- ch-data-display / sec-choosing-center --------------
# 26 homework scores; reconstructed (see SOURCES.md)
hw26 <- c(0, 80, 81, 82, 82, 83, 83, rep(84, 6),
          85, 85, 86, 86, 86, 87, 87, 87, 88, 88, 88, 89, 90)
stopifnot(length(hw26) == 26, sum(hw26) == 2127)
mean(hw26); median(hw26)            # 81.81, 84.5
mean(hw26,[-1]); median(hw26,[-1])    # 85.08, 85

hw10 <- c(0, 80, 82, 84, 85, 85, 86, 87, 88, 88)
mean(hw10); median(hw10)            # 76.5, 85

# Income, census 2000; reconstructed frequency table.
# Open-ended top bin: 15 per 1,000 above $100k, mean $165k.
brk <- seq(0, 100, by = 10)
cnt <- c(340, 232, 168, 100, 55, 35, 20, 15, 10, 10)
mid <- head(brk, -1) + 5
(sum(mid * cnt) + 15 * 165) / 1000  # 23.98 -> ~$24,000
10 + (500 - cnt,[object Object],) / cnt,[2] * 10   # 16.9 -> $16,900