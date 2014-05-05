'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var module = require('module');

module.exports = function (options) {

  var Yacp = require('yacp');

  /*
  if (!options.foo) {
    throw new gutil.PluginError('gulp-yacp', '`foo` required');
  }
 */

  options = options || {};

  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-yacp', 'Streaming not supported'));
      return cb();
    }

    try {
      file.contents = new Buffer(module(file.contents.toString(), options));
      console.log(file.content);
      // var yacpFile = file.contents.toString();
      var yacp = new Yacp(file.contents);
      file.contents = yacp.toString();
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-yacp', err));
    }

    this.push(file);
    cb();
  });
};
