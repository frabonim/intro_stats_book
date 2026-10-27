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

OUT <- file.path("assets", "external")
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

# ---- ch-data-display / sec-histograms --------------------
hip <- openintro::bdims$hip_gi
stopifnot(length(hip) == 507L)
hip_breaks <- seq(75, 130, by = 5)
print(table(cut(hip, breaks = hip_breaks, right = FALSE)))

plot_hip_histogram <- function() {
  book_par()
  hist(hip, breaks = hip_breaks, right = FALSE, col = book_colors$gray,
       border = book_colors$ink, main = "", xlab = "Hip girth",
       ylab = "Frequency", xlim = range(hip_breaks))
}
render_book_figure("hip-girth-histogram", plot_hip_histogram)

# ---- ch-data-display / sec-comparing-distributions -------
ns <- MASS::birthwt$bwt[MASS::birthwt$smoke == 0]
sm <- MASS::birthwt$bwt[MASS::birthwt$smoke == 1]
stopifnot(length(ns) == 115L, length(sm) == 74L)
message("Low birth weight: nonsmoking=", mean(ns < 2500),
        ", smoking=", mean(sm < 2500))
message("Macrosomia: nonsmoking=", mean(ns >= 4000),
        ", smoking=", mean(sm >= 4000))

birth_breaks <- seq(500, 5000, by = 500)
birth_max <- max(
  hist(ns, breaks = birth_breaks, right = FALSE, plot = FALSE)$counts,
  hist(sm, breaks = birth_breaks, right = FALSE, plot = FALSE)$counts
)

plot_birthweight_comparison <- function() {
  old <- par(no.readonly = TRUE); on.exit(par(old))
  par(mfrow = c(2, 1), family = "sans", fg = book_colors$ink,
      col.axis = book_colors$ink, col.lab = book_colors$ink,
      las = 1, bty = "n", mgp = c(2.1, 0.6, 0), tcl = -0.25,
      mar = c(3.2, 4.0, 1.8, 0.8))
  hist(ns, breaks = birth_breaks, right = FALSE, col = book_colors$gray,
       border = book_colors$ink, main = "Mother did not smoke",
       xlab = "Birth weight (grams)", ylab = "Frequency",
       xlim = range(birth_breaks), ylim = c(0, birth_max))
  hist(sm, breaks = birth_breaks, right = FALSE, col = book_colors$gray,
       border = book_colors$ink, main = "Mother smoked",
       xlab = "Birth weight (grams)", ylab = "Frequency",
       xlim = range(birth_breaks), ylim = c(0, birth_max))
}
render_book_figure("birthweight-smoking-comparison",
                   plot_birthweight_comparison, width = 7, height = 7)

# ---- ch-data-display / sec-mean-median -------------------
beth <- c(70, 80, 80, 80, 85, 86, 90, 90, 95)
stopifnot(mean(beth) == 84, median(beth) == 85,
          abs(sum(beth - mean(beth))) < 1e-12)

plot_beth_scores <- function() {
  stacked_dotplot(beth, c(68, 97), "Homework score",
                  mean_value = mean(beth), median_value = median(beth),
                  tick_by = 5)
}
render_book_figure("beth-scores", plot_beth_scores, width = 7, height = 3.5)

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

message("All statistical figures generated successfully in ", OUT)
