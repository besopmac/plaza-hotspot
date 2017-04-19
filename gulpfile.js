var gulp        = require('gulp')
var pug         = require('gulp-pug')
var stylus      = require('gulp-stylus')
var livereload  = require('browser-sync')

// Pug
gulp.task('pug', function(){
    return gulp.src('src/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./output'))
})

// Stylus


// Watch


// Server
