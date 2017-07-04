//register components
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

//define plugins
gulp.task('sass', () => {
  return gulp.src('scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      //includePaths: ['node_modules/susy/sass'] //compile susy
      includePaths: ['node_modules/flexboxgrid-sass']
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('maps/'))
    .pipe(gulp.dest('css/'))
});

gulp.task('autoprefixer', () => {
  return gulp.src('css/base.css')
   .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'))
});

//define watch task
gulp.task('watch', () => {
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./css/base.css', ['autoprefixer']);
});
