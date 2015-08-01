var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", ['js', 'css']);


gulp.task("js", function () {
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("lib"));
});

gulp.task("css", function () {
  return gulp.src("src/**/*.css")
    .pipe(gulp.dest("lib"));
});