var gulp = require("gulp")
var jscs = require("gulp-jscs")
var jshint = require("gulp-jshint")

// lint
gulp.task("default", function() {
  return gulp.src("index.js")
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"))
})

gulp.task("watch", function() {
  gulp.watch("./index.js", ["default"])
})
