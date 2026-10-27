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
