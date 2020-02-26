var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var wait = require('gulp-wait');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
    styles: {
      src: './scss/*.scss',
      dest: './css/'
    },
    scripts: {
      src: './js/*.js',
      dest: './scripts/'
    }
  };

gulp.task('scripts', function() {
    return gulp.src(paths.scripts.src, {sourcemaps:true})
        .pipe(plumber(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        })))
        .pipe(babel())
        .pipe(uglify({
            output: {
                comments: '/^!/'
            }
        }))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('styles', function () {
    return gulp.src(paths.styles.src)
        .pipe(wait(250))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts.src, gulp.series('scripts'));
    gulp.watch(paths.styles.src, gulp.series('styles'));
});