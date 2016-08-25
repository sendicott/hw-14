'use strict'

let gulp = require('gulp');
// let uglify = require('gulp-uglify');
// let babel = require('gulp-babel');
let watch = require('gulp-watch');
let htmlhint = require('gulp-htmlhint');
let sass = require('gulp-sass');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function() {
    return gulp.src('index.html')
        .pipe(htmlhint())
        .pipe(gulp.dest('public/'));
});

gulp.task('css', function() {
    return gulp.src('style.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/'));
});

gulp.task('js', function() {
    return gulp.src('app.js')
        // .pipe(babel({
        //     presets: ['es2015']
        // }))
        // .pipe(uglify())
        .pipe(gulp.dest('public/'));
});

gulp.task('watch', function() {
    gulp.watch('index.html', ['html']);
    gulp.watch('style.scss', ['css']);
    gulp.watch('app.js', ['js']);
});