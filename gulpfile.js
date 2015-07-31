var gulp   = require("gulp");
var babel  = require("gulp-babel");
var server = require('gulp-server-livereload');

var paths = {babel: './lib/**', examples: './examples/**.js'};

gulp.task('babel', function() {
  return gulp.src([paths.babel, paths.examples])
    .pipe(babel())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['babel']);

gulp.task('watch', function() {
  gulp.watch(paths.babel, ['babel'])
});

gulp.task('server', function() {
  gulp.src(['./examples/**', './dist/**'])
    .pipe(server({
      livereload: true,
      open: true,
      defaultFile: 'basic-map.html'
    }));
});
