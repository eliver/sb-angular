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

var conf = require('./conf/gulp.conf');

var HubRegistry = require('gulp-hub');


var hub = new HubRegistry([conf.path.tasks('*.js')]);


// Tell gulp to use the tasks just loaded
gulp.registry(hub);
// tasks

gulp.task('lint', function() {
    return;
   /* gulp.src(['./app/!**!/!*.js', '!./app/bower_components/!**'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));*/
});
gulp.task('clean', function() {
    return gulp.src('../src/main/resources/static/*')
        .pipe(clean({force: true}));
});
gulp.task('minify-css', function() {
    var opts = {comments:true,spare:true};
    gulp.src(['./app/**/*.css'])
        //.pipe(minifyCSS(opts))
        .pipe(gulp.dest('../src/main/resources/static/'))
});
gulp.task('minify-js', function() {
    gulp.src(['./app/**/*.js'])
        /*.pipe(uglify({
            // inSourceMap:
            // outSourceMap: "app.js.map"
        }))*/
        .pipe(gulp.dest('../src/main/resources/static/'))
});
gulp.task('statics', function() {
    gulp.src(['./app/**/*.jpg', './app/**/*.png'])
        .pipe(gulp.dest('../src/main/resources/static/'))
});
gulp.task('bower', function () {
    return bower('./app/bower_components/');
});
gulp.task('copy-html-files', function () {
    gulp.src('./app/**/*.html')
        .pipe(gulp.dest('../src/main/resources/static/'));
});

gulp.task('connect', function () {
    connect.server({
        root: 'app/',
        port: 8888
    });
});
gulp.task('connectDist', function () {
    connect.server({
        root: '../src/main/resources/static/',
        port: 9999
    });
});



gulp.task('build', function(cb) {
    runSequence(
        ['clean'],
        [
            'lint',
            'minify-css',
            'minify-js',
            'statics',
            'copy-html-files',
            'bower',
            'connect'
        ],
        cb
    );
});
gulp.task('serve_dev', gulp.series('browserSync_dev','watch_dev'));

