var gulp = require('gulp')
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin')
 
gulp.task('compress', function () {
  return pipeline(
        gulp.src('./*.js'),
        uglify(),
        gulp.dest('./')
  );
});

gulp.task('styles', function () {
    return gulp.src('./css/*.css')
      // Minify the file
      .pipe(csso())
      // Output
      .pipe(gulp.dest('./dist/css'))
  });

  gulp.task('scripts', function() {
    return gulp.src('./js/*.js')
      // Minify the file
      .pipe(uglify())
      // Output
      .pipe(gulp.dest('./dist/js'))
  });

  gulp.task('pages', function() {
    return gulp.src(['./**/*.html'])
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
      }))
      .pipe(gulp.dest('./dist'));
  });