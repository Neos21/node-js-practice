/* src.js */

// Browserify で jQuery を読み込む
var $ = require("jquery");

// jQuery の使用テスト
$(function() {
  console.log("jQuery Test.");
  $("<body>").append("<p>jQuery.");
});

/* src.js */