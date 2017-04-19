var gulp        = require('gulp')
var pug         = require('gulp-pug')
var stylus      = require('gulp-stylus')
var browserSync = require('browser-sync').create()

// Pug
gulp.task('pug', function(){
    return gulp.src('src/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./output'))
})

// Stylus
gulp.task('stylus', function(){
    return gulp.src('src/assets/css/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./output/assets/css/'))
})

// Watch
gulp.task('sentinel', ['pug', 'stylus'], function(done) {
    browserSync.reload()
    done()
})

// Serve
gulp.task('serve', ['pug', 'stylus'], function() {

    // Serving files on the output folder
    browserSync.init({
        server: {
            baseDir: './output'
        }
    })

    // Reload the browser
    gulp.watch('src/*.pug', ['sentinel'])
    gulp.watch('src/assets/css/*.styl', ['sentinel'])
})
