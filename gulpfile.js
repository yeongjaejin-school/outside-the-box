var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var fancy_log = require("fancy-log");

function copyPublic() {
    return gulp.src(["public/**/*"], { encoding: false })
        .pipe(gulp.dest("dist"));
}

function bundle() {
    return browserify({
        basedir: ".",
        debug: true,
        entries: ["src/index.ts"],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)
        .bundle()
        .on("error", fancy_log)
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("dist"));
}

var build = gulp.series(copyPublic, bundle);

gulp.task("copyPublic", copyPublic);
gulp.task("bundle", bundle);
gulp.task("build", build);
gulp.task("default", build);