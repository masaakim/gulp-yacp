# [gulp](http://gulpjs.com)-yacp [![Build Status](https://travis-ci.org/morishitter/gulp-yacp.svg?branch=master)](https://travis-ci.org/morishitter/gulp-yacp)

> Compile [YACP](https://github.com/morishitter/YACP) files to CSS


## Install

```bash
$ npm install --save-dev gulp-yacp
```


## Usage

```js
var gulp = require('gulp');
var yacp = require('gulp-yacp');

gulp.task('default', function () {
  return gulp.src('src/app.ext')
  .pipe(yacp())
  .pipe(gulp.dest('dist'));
});
```

## License

MIT © [Masaaki Morishita](https://github.com/morishitter)
