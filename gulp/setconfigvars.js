/**
 *  This file defines the gulpNgConfig task
 *  described at https://www.npmjs.com/package/gulp-ng-config.
 *  It reads appconfigs.json and creates the appconfig module,
 *  to support setting different variables for each environment.
 */

'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var gulpNgConfig = require('gulp-ng-config');

gulp.task('setvars', function () {
  gulp.src(path.join(conf.paths.src, '/app/resources/application.json'))
    .pipe(gulpNgConfig('app.config'))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')))
});
