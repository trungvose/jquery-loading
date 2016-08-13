//Include gulp
var gulp = require('gulp');
//Include plugin
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//Concatenate JS file
gulp.task('scripts', function () {
    return gulp.src('js/*.js')
        .pipe(concat('main.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

//Default task
gulp.task('default', ['scripts'])