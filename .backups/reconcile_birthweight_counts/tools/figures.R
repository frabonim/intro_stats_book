# figures.R — production source for 2D statistical graphics
#
# Run from the repository root:
#   Rscript tools/figures.R
#
# Each plotting function is rendered from the same data to SVG (web/Runestone)
# and PDF (print). Generated assets are committed; remote builds do not need R.
#
# CONVENTION: histogram bins are left-closed [a,b), so every hist() call uses
# right = FALSE.

required <- c("openintro", "MASS", "svglite")
missing <- required[!vapply(required, requireNamespace, logical(1), quietly = TRUE)]
if (length(missing)) {
  stop(
    "Missing R package(s): ", paste(missing, collapse = ", "),
    ". Install with install.packages(c(",
    paste(sprintf("\"%s\"", missing), collapse = ", "), "))."
  )
}

OUT <- file.path("assets", "R-generated")
dir.create(OUT, showWarnings = FALSE, recursive = TRUE)

book_colors <- list(
  ink = "#1F2933",
  blue = "#1769AA",
  red = "#B33A3A",
  gray = "#D9DEE3",
  grid = "#E8EBEE"
)

book_par <- function() {
  par(
    family = "sans", fg = book_colors$ink, col.axis = book_colors$ink,
    col.lab = book_colors$ink, las = 1, bty = "n", xaxs = "i", yaxs = "i",
    mgp = c(2.25, 0.65, 0), tcl = -0.25, mar = c(3.8, 4.0, 1.2, 0.8)
  )
}

render_book_figure <- function(name, plot_fun, width = 7, height = 4) {
  stopifnot(is.character(name), length(name) == 1L, is.function(plot_fun))
  svg_path <- file.path(OUT, paste0(name, ".svg"))
  pdf_path <- file.path(OUT, paste0(name, ".pdf"))


  svglite::svglite(
    svg_path,
    width = width,
    height = height,
    system_fonts = list(sans = "Helvetica")
  )
  svg_open <- TRUE
  tryCatch(
    { plot_fun(); invisible(dev.off()); svg_open <- FALSE },
    error = function(e) {
      if (svg_open && dev.cur() > 1L) dev.off()
      stop("Failed to render ", svg_path, ": ", conditionMessage(e))
    }
  )

  grDevices::pdf(
    pdf_path,
    width = width,
    height = height,
    family = "Helvetica",
    useDingbats = FALSE,
    compress = TRUE
  )
  pdf_open <- TRUE
  tryCatch(
    { plot_fun(); invisible(dev.off()); pdf_open <- FALSE },
    error = function(e) {
      if (pdf_open && dev.cur() > 1L) dev.off()
      stop("Failed to render ", pdf_path, ": ", conditionMessage(e))
    }
  )

  for (path in c(svg_path, pdf_path)) {
    info <- file.info(path)
    if (!file.exists(path) || is.na(info$size) || info$size <= 100L) {
      stop("Figure output is missing or too small: ", path)
    }
  }
  message("wrote ", svg_path, " and ", pdf_path)
}

stacked_dotplot <- function(values, xlim, xlabel, mean_value = NULL,
                            median_value = NULL, tick_by = NULL) {
  book_par()
  tab <- table(values)
  xs <- as.numeric(names(tab))
  max_stack <- max(tab)
  ylim <- c(-0.65, max_stack + 1.15)
  plot(NA, xlim = xlim, ylim = ylim, axes = FALSE, xlab = xlabel, ylab = "")
  axis(1, at = if (is.null(tick_by)) pretty(xlim) else
       seq(ceiling(xlim[1] / tick_by) * tick_by, xlim[2], by = tick_by))
  abline(h = 0, col = book_colors$ink, lwd = 1)
  for (j in seq_along(xs)) {
    points(rep(xs[j], tab[j]), seq_len(tab[j]), pch = 21,
           bg = book_colors$ink, col = book_colors$ink, cex = 0.9)
  }
  if (!is.null(mean_value)) {
    abline(v = mean_value, col = book_colors$red, lty = 2, lwd = 1.5)
    text(mean_value, max_stack + 0.65, paste("mean", format(mean_value)),
         col = book_colors$red, pos = 2, xpd = NA)
  }
  if (!is.null(median_value)) {
    abline(v = median_value, col = book_colors$blue, lty = 3, lwd = 1.5)
    text(median_value, max_stack + 0.2,
         paste("median", format(median_value)), col = book_colors$blue,
         pos = 4, xpd = NA)
  }
}

# r-figures:sec-histograms:start
# ---- ch-data-display / sec-histograms ---------------------
# Reconciled frequency distribution used by the section's table and examples.
# Keeping the grouped counts here avoids version-dependent changes in external
# packages and ensures that count and relative-frequency plots agree exactly.
hip_breaks <- seq(75, 130, by = 5)
hip_left <- head(hip_breaks, -1)
hip_counts <- c(2, 20, 48, 115, 164, 97, 42, 15, 2, 1, 1)
hip_n <- sum(hip_counts)
hip_percent <- 100 * hip_counts / hip_n

stopifnot(
  length(hip_breaks) == 12L,
  length(hip_counts) == 11L,
  hip_n == 507L,
  hip_counts[3] == 48L,
  hip_counts[6] == 97L,
  sum(hip_counts[6:11]) == 158L,
  abs(100 * 158 / hip_n - 31.16371) < 1e-4
)

plot_grouped_histogram <- function(heights, ylab, ylim, yticks,
                                   fill = book_colors$gray,
                                   ylabels = yticks) {
  book_par()
  plot(NA, xlim = range(hip_breaks), ylim = ylim, axes = FALSE,
       xlab = "Hip girth (cm)", ylab = ylab)
  rect(hip_left, 0, hip_left + 5, heights,
       col = fill, border = book_colors$ink)
  axis(1, at = hip_breaks)
  axis(2, at = yticks, labels = ylabels)
}

plot_hip_histogram <- function() {
  plot_grouped_histogram(
    hip_counts,
    ylab = "Frequency (count)",
    ylim = c(0, 180),
    yticks = seq(0, 180, by = 20)
  )
}
render_book_figure(
  "hip-girth-histogram", plot_hip_histogram,
  width = 7.5, height = 4.5
)

plot_hip_relative_frequency <- function() {
  plot_grouped_histogram(
    hip_percent,
    ylab = "Relative frequency",
    ylim = c(0, 35),
    yticks = seq(0, 35, by = 5),
    ylabels = paste0(seq(0, 35, by = 5), "%"),
    fill = "#CFE5D5"
  )
}
render_book_figure(
  "hip-girth-relative-frequency", plot_hip_relative_frequency,
  width = 7.5, height = 4.5
)
# r-figures:sec-histograms:end

# r-figures:sec-comparing-distributions:start
# ---- ch-data-display / sec-comparing-distributions --------
# Birth-weight data from MASS::birthwt. The section uses left-closed 500-gram
# bins and separate figures with identical horizontal and vertical scales.
birthweight_nonsmokers <- MASS::birthwt$bwt[MASS::birthwt$smoke == 0]
birthweight_smokers <- MASS::birthwt$bwt[MASS::birthwt$smoke == 1]
birthweight_breaks <- seq(500, 5000, by = 500)

birthweight_counts <- function(values) {
  hist(values, breaks = birthweight_breaks, right = FALSE,
       include.lowest = TRUE, plot = FALSE)$counts
}

nonsmoker_counts <- birthweight_counts(birthweight_nonsmokers)
smoker_counts <- birthweight_counts(birthweight_smokers)

stopifnot(
  length(birthweight_nonsmokers) == 115L,
  length(birthweight_smokers) == 74L,
  identical(nonsmoker_counts, c(0L, 3L, 8L, 18L, 22L, 29L, 27L, 6L, 2L)),
  identical(smoker_counts, c(1L, 1L, 6L, 22L, 16L, 15L, 12L, 1L, 0L)),
  sum(nonsmoker_counts[1:4]) == 29L,
  sum(smoker_counts[1:4]) == 30L,
  sum(nonsmoker_counts[8:9]) == 8L,
  sum(smoker_counts[8:9]) == 1L
)

plot_birthweight_group <- function(counts, group_label, fill) {
  book_par()
  plot(NA, xlim = c(500, 5250), ylim = c(0, 32), axes = FALSE,
       xlab = "Birth weight (grams)", ylab = "Number of babies")
  rect(head(birthweight_breaks, -1), 0, tail(birthweight_breaks, -1), counts,
       col = fill, border = book_colors$ink)
  axis(1, at = birthweight_breaks)
  axis(2, at = seq(0, 30, by = 5))
  text(4900, 29, group_label, adj = 1, cex = 0.9)
}

plot_birthweight_nonsmokers <- function() {
  plot_birthweight_group(nonsmoker_counts, "Nonsmokers (n = 115)", "#C9DDF0")
}
render_book_figure(
  "birthweight-nonsmokers", plot_birthweight_nonsmokers,
  width = 7.5, height = 4.5
)

plot_birthweight_smokers <- function() {
  plot_birthweight_group(smoker_counts, "Smokers (n = 74)", "#E8C9C9")
}
render_book_figure(
  "birthweight-smokers", plot_birthweight_smokers,
  width = 7.5, height = 4.5
)
# r-figures:sec-comparing-distributions:end

# r-figures:sec-mean-median:start
# ---- ch-data-display / sec-mean-median ---------------------
beth_scores <- c(70, 80, 80, 80, 85, 86, 90, 90, 95)
stopifnot(
  length(beth_scores) == 9L,
  mean(beth_scores) == 84,
  median(beth_scores) == 85,
  abs(sum(beth_scores - mean(beth_scores))) < 1e-12
)

plot_beth_scores <- function() {
  stacked_dotplot(
    beth_scores, c(68, 97), "Homework score",
    mean_value = mean(beth_scores), median_value = median(beth_scores),
    tick_by = 5
  )
}
render_book_figure(
  "beth-scores", plot_beth_scores,
  width = 7.0, height = 3.5
)
# r-figures:sec-mean-median:end

# ---- ch-data-display / sec-choosing-center ---------------
# Reconstructed data; see SOURCES.md.
hw26 <- c(0, 80, 81, 82, 82, 83, 83, rep(84, 6), 85, 85,
          86, 86, 86, 87, 87, 87, 88, 88, 88, 89, 90)
stopifnot(length(hw26) == 26L, sum(hw26) == 2127,
          median(hw26) == 84.5)
message("Homework mean=", mean(hw26), ", median=", median(hw26))
message("Without zero: mean=", mean(hw26[-1]),
        ", median=", median(hw26[-1]))

hw10 <- c(0, 80, 82, 84, 85, 85, 86, 87, 88, 88)
stopifnot(mean(hw10) == 76.5, median(hw10) == 85)

plot_outlier_scores <- function() {
  stacked_dotplot(hw26, c(-3, 95), "Homework score",
                  mean_value = round(mean(hw26), 1),
                  median_value = median(hw26), tick_by = 10)
}
render_book_figure("outlier-scores", plot_outlier_scores,
                   width = 7.5, height = 3.8)

# Reconstructed census-frequency table; see SOURCES.md.
income_counts <- c(340, 232, 168, 100, 55, 35, 20, 15, 10, 10)
income_left <- seq(0, 90, by = 10)
income_mid <- income_left + 5
income_over_100_count <- 15
income_over_100_mean <- 165
income_mean <- (sum(income_mid * income_counts) +
                income_over_100_count * income_over_100_mean) / 1000
income_median <- 10 + (500 - income_counts[1]) / income_counts[2] * 10
stopifnot(abs(income_mean - 23.98) < 1e-10,
          abs(income_median - 16.8965517) < 1e-6,
          sum(income_counts) + income_over_100_count == 1000)

plot_income <- function() {
  book_par()
  ylim <- c(0, 400)
  plot(NA, xlim = c(0, 105), ylim = ylim, xlab = "Income (thousands of dollars)",
       ylab = "People per 1,000", axes = FALSE)
  rect(income_left, 0, income_left + 10, income_counts,
       col = book_colors$gray, border = book_colors$ink)
  axis(1, at = seq(0, 100, by = 20))
  axis(2)
  abline(v = income_mean, col = book_colors$red, lty = 2, lwd = 1.5)
  abline(v = income_median, col = book_colors$blue, lty = 3, lwd = 1.5)
  text(income_mean, 315, "mean", col = book_colors$red, pos = 4)
  text(income_median, 370, "median", col = book_colors$blue, pos = 2)
}
render_book_figure("income", plot_income, width = 7, height = 4.2)

# r-figures:sec-dotplots:start
# ---- ch-data-display / sec-dotplots -----------------------
# Cereal protein data from Consumer Reports, as recorded in the section source.
cereal_names <- c(
  "Apple Jacks", "Cap'n Crunch", "Cheerios", "Cinnamon Toast Crunch",
  "Cocoa Puffs", "Corn Pops", "Count Chocula", "Froot Loops",
  "Frosted Flakes", "Frosted Mini-Wheats", "Fruity Pebbles",
  "Golden Grahams", "Honey Graham Ohs", "Honey Nut Cheerios",
  "Honeycomb", "Kix", "Life", "Lucky Charms", "Rice Krispies",
  "Smacks", "Trix"
)
cereal_protein <- c(2, 1, 6, 1, 1, 1, 1, 2, 2, 3, 2, 1, 2, 3, 2, 2, 4, 2, 2, 2, 1)
stopifnot(
  length(cereal_names) == 21L,
  length(cereal_protein) == 21L,
  identical(as.integer(table(factor(cereal_protein, levels = 1:6))),
            c(7L, 10L, 2L, 1L, 0L, 1L))
)

plot_cereal_casevalue <- function() {
  old <- par(no.readonly = TRUE)
  on.exit(par(old))
  par(
    family = "sans", fg = book_colors$ink, col.axis = book_colors$ink,
    col.lab = book_colors$ink, las = 1, bty = "n", xaxs = "i", yaxs = "i",
    mar = c(3.6, 10.6, 0.8, 0.8), mgp = c(2.2, 0.6, 0), tcl = -0.25
  )
  positions <- barplot(
    rev(cereal_protein),
    names.arg = rev(cereal_names),
    horiz = TRUE,
    xlim = c(0, 6.6),
    axes = FALSE,
    col = book_colors$gray,
    border = book_colors$ink,
    xlab = "Protein (grams per serving)",
    cex.names = 0.72,
    space = 0.25
  )
  axis(1, at = 0:6)
  invisible(positions)
}
render_book_figure(
  "cereal-casevalue", plot_cereal_casevalue,
  width = 7.5, height = 7.2
)

plot_cereal_dotplot <- function() {
  stacked_dotplot(
    cereal_protein,
    xlim = c(0.4, 6.7),
    xlabel = "Protein (grams per serving)",
    tick_by = 1
  )
}
render_book_figure(
  "cereal-dotplot", plot_cereal_dotplot,
  width = 6.5, height = 4.2
)
# r-figures:sec-dotplots:end

# r-figures:sec-shape-center-spread:start
# ---- ch-data-display / sec-shape-center-spread ------------
# Frequency data transcribed from the section's original diagrams.

adult_sugar_values <- c(0:12, 14)
adult_sugar_counts <- c(4, 3, 4, 6, 4, 3, 3, 2, 1, 1, 2, 1, 1, 1)
adult_sugar <- rep(adult_sugar_values, adult_sugar_counts)
stopifnot(length(adult_sugar) == 36L, range(adult_sugar) == c(0, 14))

plot_sugar_adult <- function() {
  stacked_dotplot(
    adult_sugar, xlim = c(-0.6, 15.6),
    xlabel = "Sugar (g per serving), adult cereals", tick_by = 1
  )
}
render_book_figure("sugar-adult", plot_sugar_adult, width = 7.5, height = 4.0)

children_sugar_values <- c(1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
children_sugar_counts <- c(1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 3, 1, 1)
children_sugar <- rep(children_sugar_values, children_sugar_counts)
stopifnot(length(children_sugar) == 21L, range(children_sugar) == c(1, 15))

plot_sugar_children <- function() {
  stacked_dotplot(
    children_sugar, xlim = c(-0.6, 15.6),
    xlabel = "Sugar (g per serving), children's cereals", tick_by = 1
  )
}
render_book_figure("sugar-children", plot_sugar_children, width = 7.5, height = 4.0)

children_calorie_values <- seq(90, 150, by = 10)
children_calorie_counts <- c(1, 4, 8, 4, 2, 1, 1)
children_calories <- rep(children_calorie_values, children_calorie_counts)
stopifnot(length(children_calories) == 21L,
          range(children_calories) == c(90, 150))

plot_calories_children <- function() {
  stacked_dotplot(
    children_calories, xlim = c(85, 156),
    xlabel = "Calories per serving", tick_by = 10
  )
}
render_book_figure("calories-children", plot_calories_children,
                   width = 7.0, height = 4.0)

last_digit_counts <- c(5, 4, 5, 5, 4, 5, 5, 4, 5, 5)
last_digits <- rep(0:9, last_digit_counts)
stopifnot(length(last_digits) == 47L)

plot_last_digit <- function() {
  stacked_dotplot(
    last_digits, xlim = c(-0.6, 9.6),
    xlabel = "Last digit of telephone number", tick_by = 1
  )
}
render_book_figure("last-digit", plot_last_digit, width = 7.0, height = 3.8)

# Wrist data reproduce the original authored frequency diagram. The low endpoint
# is gold; the two isolated high values are red and use triangles as a redundant
# non-color cue. The main mound uses dark blue circles.
wrist_main_values <- seq(14.0, 18.0, by = 0.5)
wrist_main_counts <- c(2, 4, 6, 7, 6, 5, 4, 2, 1)
wrist_main <- rep(wrist_main_values, wrist_main_counts)
wrist_low <- 13.5
wrist_outliers <- c(19.5, 20.0)
stopifnot(length(wrist_main) + length(wrist_low) + length(wrist_outliers) == 40L)

plot_wrist <- function() {
  book_par()
  plot(NA, xlim = c(13.1, 20.5), ylim = c(-0.65, 8.2), axes = FALSE,
       xlab = "Wrist girth (cm)", ylab = "")
  axis(1, at = 14:20)
  abline(h = 0, col = book_colors$ink, lwd = 1)

  tab <- table(wrist_main)
  xs <- as.numeric(names(tab))
  for (j in seq_along(xs)) {
    points(rep(xs[j], tab[j]), seq_len(tab[j]), pch = 21,
           bg = book_colors$blue, col = book_colors$ink, cex = 0.9)
  }
  points(wrist_low, 1, pch = 21, bg = "#D39B17",
         col = book_colors$ink, cex = 1.0)
  points(wrist_outliers, c(1, 1), pch = 24, bg = book_colors$red,
         col = book_colors$ink, cex = 1.05)
}
render_book_figure("wrist", plot_wrist, width = 7.5, height = 4.0)
# r-figures:sec-shape-center-spread:end

# r-figures:sec-histogram-bins:start
# ---- ch-data-display / sec-histogram-bins -----------------
# Reconstructed exam scores documented in SOURCES.md. All histograms use the
# same observations and left-closed bins [a,b), matching the book convention.
exam_scores_bins <- c(
  46, 48, 52, 55, 57, 58, 63, 66, 68, 69, 70,
  71, 72, 77, 78, 82, 84, 85, 88, 93, 96
)
stopifnot(length(exam_scores_bins) == 21L)

histogram_counts <- function(values, breaks) {
  hist(values, breaks = breaks, right = FALSE, include.lowest = TRUE,
       plot = FALSE)$counts
}

wide_breaks <- seq(40, 100, by = 20)
medium_breaks <- seq(40, 100, by = 10)
shifted_breaks <- seq(45, 105, by = 10)

wide_counts <- histogram_counts(exam_scores_bins, wide_breaks)
medium_counts <- histogram_counts(exam_scores_bins, medium_breaks)
shifted_counts <- histogram_counts(exam_scores_bins, shifted_breaks)

stopifnot(
  identical(wide_counts, c(6L, 9L, 6L)),
  identical(medium_counts, c(2L, 4L, 4L, 5L, 4L, 2L)),
  identical(shifted_counts, c(3L, 4L, 6L, 4L, 3L, 1L)),
  sum(wide_counts) == 21L,
  sum(medium_counts) == 21L,
  sum(shifted_counts) == 21L
)

plot_exam_histogram <- function(breaks, counts, fills) {
  book_par()
  plot(NA, xlim = c(40, max(breaks) + 3), ylim = c(0, 10), axes = FALSE,
       xlab = "Exam score", ylab = "Count")
  rect(head(breaks, -1), 0, tail(breaks, -1), counts,
       col = fills, border = book_colors$ink)
  axis(1, at = breaks)
  axis(2, at = seq(0, 10, by = 2))
}

plot_exam_bins_wide <- function() {
  plot_exam_histogram(
    wide_breaks, wide_counts,
    rep(book_colors$gray, length(wide_counts))
  )
}
render_book_figure(
  "exam-bins-wide", plot_exam_bins_wide,
  width = 7.0, height = 4.0
)

plot_exam_bins_medium <- function() {
  fills <- rep("#CFE5D5", length(medium_counts))
  fills[4] <- "#E7A33E"
  plot_exam_histogram(medium_breaks, medium_counts, fills)
}
render_book_figure(
  "exam-bins-medium", plot_exam_bins_medium,
  width = 7.0, height = 4.0
)

plot_exam_bins_shifted <- function() {
  plot_exam_histogram(
    shifted_breaks, shifted_counts,
    rep("#E8C9C9", length(shifted_counts))
  )
}
render_book_figure(
  "exam-bins-shifted", plot_exam_bins_shifted,
  width = 7.0, height = 4.0
)
# r-figures:sec-histogram-bins:end

# r-figures:sec-describing-distributions:start
# ---- ch-data-display / sec-describing-distributions -------
# Best Actress winner ages, 1970--2001, as published in the section.
oscar_ages <- c(
  34, 34, 26, 37, 42, 41, 35, 31, 41, 33, 30, 74, 33, 49, 38, 61,
  21, 41, 26, 80, 42, 29, 33, 35, 45, 49, 39, 34, 26, 25, 33, 35
)
oscar_breaks <- seq(20, 85, by = 5)
oscar_counts <- hist(
  oscar_ages, breaks = oscar_breaks, right = FALSE,
  include.lowest = TRUE, plot = FALSE
)$counts

stopifnot(
  length(oscar_ages) == 32L,
  sum(oscar_ages < 50) == 29L,
  sum(oscar_ages <= 35) == 18L,
  identical(
    oscar_counts,
    c(1L, 5L, 9L, 6L, 5L, 3L, 0L, 0L, 1L, 0L, 1L, 0L, 1L)
  )
)

plot_oscar_ages <- function() {
  book_par()
  plot(
    NA, xlim = c(20, 88), ylim = c(0, 10), axes = FALSE,
    xlab = "Age at time of award (years)", ylab = "Number of winners"
  )
  rect(
    head(oscar_breaks, -1), 0, tail(oscar_breaks, -1), oscar_counts,
    col = book_colors$gray, border = book_colors$ink
  )
  axis(1, at = oscar_breaks)
  axis(2, at = seq(0, 10, by = 2))
}
render_book_figure(
  "oscar-ages", plot_oscar_ages,
  width = 7.5, height = 4.2
)
# r-figures:sec-describing-distributions:end

message("All statistical figures generated successfully in ", OUT)
