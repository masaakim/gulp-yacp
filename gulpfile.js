'use strict';

var gulp = require('gulp');
var yacp = require('gulp-yacp');

gulp.task('test', function () {
  return gulp.src('test/yacp.css')
    .pipe(yacp())
    .pipe(gulp.dest('dist'));
});
