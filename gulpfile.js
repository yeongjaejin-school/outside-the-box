const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const fancy_log = require('fancy-log');
const { deleteAsync } = require('del');
const path = require('path');

// --------------------------------------
// Paths
// --------------------------------------
const paths = {
    public: 'public/**/*',
    dist: 'dist',
    src: path.join(__dirname, 'outside-the-box')
};

// --------------------------------------
// Version entry points
// --------------------------------------
const VERSIONS = {
    benchmark2: { entry: 'benchmark2/main.ts', outDir: 'benchmark2' },
    benchmark3: { entry: 'benchmark3/main.ts', outDir: 'benchmark3' },
    final: { entry: 'final/main.ts', outDir: '' }
};

// --------------------------------------
// Clean dist
// --------------------------------------
function clean() {
    return deleteAsync([paths.dist]);
}

// --------------------------------------
// Copy public folder
// --------------------------------------
function copyPublic() {
    return gulp.src(paths.public, { encoding: false })
        .pipe(gulp.dest(paths.dist));
}

// --------------------------------------
// Create a bundle task for each version
// --------------------------------------
function createBundleTask(name, config) {
    return function bundle() {
        const entryPath = path.join(paths.src, config.entry);
        const outputFolder = path.join(paths.dist, config.outDir);

        return browserify({
            basedir: __dirname,
            debug: true,
            entries: [entryPath],
            cache: {},
            packageCache: {}
        })
            .transform('babelify', {
                presets: ['@babel/preset-env', '@babel/preset-typescript'],
                extensions: ['.ts', '.js']
            })
            .bundle()
            .on('error', fancy_log)
            .pipe(source(`${name}.bundle.js`))
            .pipe(buffer())
            .pipe(gulp.dest(outputFolder));   // <-- CHANGED
    };
}

const bundleTasks = Object.entries(VERSIONS).map(([name, config]) =>
    createBundleTask(name, config)
);

// --------------------------------------
// Default task
// --------------------------------------
exports.default = gulp.series(
    clean,
    copyPublic,
    gulp.parallel(...bundleTasks)
);
