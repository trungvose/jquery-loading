//Include gulp
var gulp = require('gulp');

//Include plugin
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');

//Concatenate and minify JS
gulp.task('scripts', function () {
    return gulp.src('js/*.js')
        .pipe(concat('main.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

//SASS 
gulp.task('sass', function () {
    sass('scss/jquery-loading.scss', { sourcemap: true })
        .on('error', sass.logError)
        // for inline sourcemaps
        .pipe(sourcemaps.write())
        // for file sourcemaps
        .pipe(sourcemaps.write('maps', {
            includeContent: false,
            sourceRoot: 'source'
        }))
        .pipe(gulp.dest('css'))
});

//Default task
gulp.task('default', ['scripts', 'sass'])