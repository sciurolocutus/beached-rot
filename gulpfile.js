var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
  // place code for your default task here
});

'use strict';


gulp.task('javascript', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: ['src/Game.js', 'src/beach-colors.js', 'src/Cell.js', 'src/Player.js', 'lib/rot.js'],
    debug: true
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./js'));
});
