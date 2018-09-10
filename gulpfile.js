const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
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
    return gulp.src('app/css/main.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('minify-css', function () {
    gulp.src('app/css/main.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('app/css/'));
});