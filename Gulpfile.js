var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var preserveFirstComment = function() {
  var set = false;

  return function() {
     if (set) return false;
     set = true;
     return true;
  };
};

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('uglify', function() {
  gulp.src('lib/marked.js')
    .pipe(uglify({preserveComments: preserveFirstComment()}))
    .pipe(concat('marked.min.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('sass', function () {
  return gulp.src('./themes/**/*.scss')
    .pipe(plumber())
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('./themes/**/*.scss', ['sass']);

  gulp.watch('./themes/**/*.scss').on('change', browserSync.reload);
  gulp.watch('./test/t/**/*').on('change', browserSync.reload);
});

gulp.task('default', ['uglify', 'sass', 'watch', 'browser-sync']);
