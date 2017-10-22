// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var bower = require('gulp-bower');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

// tasks
gulp.task('lint', function() {
    gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});
gulp.task('clean', function() {
    return gulp.src('./dist/*')
        .pipe(clean({force: true}));
});
gulp.task('minify-css', function() {
    var opts = {comments:true,spare:true};
    gulp.src(['./app/**/*.css'])
        //.pipe(minifyCSS(opts))
        .pipe(gulp.dest('./dist/'))
});
gulp.task('minify-js', function() {
    gulp.src(['./app/**/*.js'])
        /*.pipe(uglify({
            // inSourceMap:
            // outSourceMap: "app.js.map"
        }))*/
        .pipe(gulp.dest('./dist/'))
});
gulp.task('bower', function () {
    return bower();
});
gulp.task('copy-html-files', function () {
    gulp.src('./app/**/*.html')
        .pipe(gulp.dest('dist/'));
});
gulp.task('connect', function () {
    connect.server({
        root: 'app/',
        port: 8888
    });
});
gulp.task('connectDist', function () {
    connect.server({
        root: 'dist/',
        port: 9999
    });
});


// default task
gulp.task('default',
    ['build']
);
gulp.task('build', function(cb) {
    runSequence(
        ['clean'],
        [
            'lint',
            'minify-css',
            'minify-js',
            'copy-html-files',
            'bower',
            'connectDist'
        ],
        cb
    );
});