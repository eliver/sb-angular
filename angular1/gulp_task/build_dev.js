var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var sassGlob = require('gulp-sass-glob');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var del = require('del');
const browserSync = require('browser-sync');


gulp.task('css_p2p', function () {
       return gulp.src('./app/p2p_all.scss')
            .pipe(sassGlob())
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./dist/css'));
    }
);
gulp.task('css_old',function () {
        return gulp.src(['./app/**/*.css','!./app/bower_components/**'])
            .pipe(concat('old.css'))
            .pipe(gulp.dest('./dist/css'));
    }
);

gulp.task('other',function () {
        return gulp.src(['./app/**/*.html','!./app/bower_components/**','./app/**/*.jpg','./app/**/*.png'])
            .pipe(gulp.dest('./dist'));
    }
);

gulp.task('js_main',function () {
        return gulp.src(['./app/**/*.js','!./app/bower_components/**'])
            .pipe(concat('main.js'))
            .pipe(gulp.dest('./dist/js'));
    }
);

gulp.task('clean_dev',function (cb) {
    return del(['./dist/**/*']);
});

gulp.task('all_vendor',function () {
    return gulp.src(['./app/bower_components/**'])

        .pipe(gulp.dest('./dist/bower_components'));
    }
);
gulp.task('build_dev',gulp.parallel('css_p2p','css_old','other','js_main','all_vendor'));

gulp.task('clean_build_dev',gulp.series('clean_dev','build_dev'));

gulp.task('watch_dev',function () {
    gulp.watch(['./app/**/*.scss','./app/**/*.css'],gulp.parallel('css_p2p','css_old'));
    gulp.watch(['./app/**/*.html','./app/**/*.jpg','./app/**/*.png'],gulp.parallel('other'));
    gulp.watch(['./app/**/*.js'],gulp.parallel('js_main'));
    gulp.watch('./dist/index.html',gulp.parallel('reloadBrowserSync'))
});

gulp.task('reloadBrowserSync',reloadBrowserSync)
function reloadBrowserSync(cb) {
    browserSync.reload();
    cb();
}

