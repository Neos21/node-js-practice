var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");

gulp.task("build-js", function () {
  browserify({
    // ビルド対象ファイル
    entries: ["./src.js"]
  })
  .bundle()    // Browserify の実行
  .pipe(source("main.js"))    // Vinyl に変換
  .pipe(gulp.dest("./"));     // 出力
});