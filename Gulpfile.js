var gulp = require("gulp")

// generated assets
gulp.task("scripts:linting", require("./tasks/scripts-linting"))

// build
gulp.task("dist", [
  "scripts:linting",
])

// dev tasks
gulp.task("default", ["watch"])
gulp.task("test", ["dist"])

gulp.task("watch", ["dist"], function() {
  gulp.watch("./src/**/*.js", ["scripts:linting"])
  gulp.watch("./tasks/**/*.js", ["scripts:linting"])
  gulp.watch("./tests/**/*.js", ["scripts:linting"])
})
