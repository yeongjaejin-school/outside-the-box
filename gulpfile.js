const { src, dest, series } = require("gulp");

function copyPublic() {
    return src("public/**/*", { encoding: false })
        .pipe(dest("dist"));
}

exports.build = series(copyPublic);
exports.default = exports.build;