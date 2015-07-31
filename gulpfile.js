var gulp   = require("gulp");
var babel  = require("gulp-babel");
var server = require('gulp-server-livereload');
var rimraf = require('gulp-rimraf');
var jshint = require('gulp-jshint');

var paths = {
  babel: './lib/**',
  examples: './examples/**.js'
};

gulp.task('babel', function() {
  return gulp.src([paths.babel, paths.examples])
    .pipe(babel())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['babel']);

gulp.task('watch', function() {
  gulp.watch(paths.babel, ['babel'])
});

gulp.task('clean', function() {
  return gulp.src('./dist/**', {
    read: false
  }).pipe(rimraf({
    force: true
  }));
});

gulp.task('lint', function() {
  return gulp.src([paths.babel, paths.examples])
    .pipe(jshint({
      linter: require('jshint-jsx').JSXHINT
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('server', function() {
  gulp.src(['./examples/**', './dist/**'])
    .pipe(server({
      livereload: true,
      open: true,
      defaultFile: 'basic-map.html'
    }));
});
