'use strict';

var gulp = require('gulp');
var yacp = require('./');

gulp.task('test', function () {
  return gulp.src(['test/fixtures/yacp.css', 'dist/yacp.css'])
    .pipe(yacp())
    .pipe(gulp.dest('dist'));
});
