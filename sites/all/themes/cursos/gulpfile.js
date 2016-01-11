var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  gulp.src('./scss/styles.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: true
      }))
      .pipe(gulp.dest('./css'));
});

gulp.task('default', function(){
  gulp.watch('./scss/**/*.scss', ['sass']);
});