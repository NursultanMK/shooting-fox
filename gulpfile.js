const gulp = require('gulp');
const sass = require('gulp-sass');

const postcss = require('postcss')
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
    gulp.src('app/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});
gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});

gulp.task('autoprefixer', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');

    return gulp.src('app/css/main.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('app/css/'));
});