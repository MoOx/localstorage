var gulp = require("gulp")
var util = require("gulp-util")
var plumber = require("gulp-plumber")
var jscs = require("gulp-jscs")
var jshint = require("gulp-jshint")
var watch = false

var files = ["index.js", "test/**/*.js"]

// lint
gulp.task("default", function() {
  return gulp.src(files)
    .pipe(watch ? plumber() : util.noop())
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"))
})

gulp.task("watch", function() {
  watch = true
  gulp.watch(files, ["default"])
})
