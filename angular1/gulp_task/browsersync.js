const gulp = require('gulp');
const browserSync = require('browser-sync');
const spa = require('browser-sync-spa');
const browserSyncDevConf = require('../conf/browsersync.dev.conf');
browserSync.use(spa());
gulp.task('browserSync_dev', browserSync_dev);
function browserSync_dev(cb) {
    browserSync.init(browserSyncDevConf());
    cb();
}
