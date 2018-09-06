const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('app/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});
gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});