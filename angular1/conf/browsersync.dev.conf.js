const conf = require('./gulp.conf');
module.exports = function () {
    return {
        server: {
            baseDir: [
                conf.paths.dev
            ]
        },
        open: false
    };
};