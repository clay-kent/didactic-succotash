// Rhino用 main.js
// 使い方: java -jar rhino.jar -require main.js <md> <html> <template> <output>

require('./markdown-it.min.js');
var mdToHTML = require('./mdToHTML');
var ssg = require('./ssg');

if (arguments.length < 4) {
    print('Usage: java -jar rhino.jar -require main.js <input.md> <output.html> <template.html> <final_output.html>');
    quit();
}

var inputMd = arguments[0];
var outputHtml = arguments[1];
var templateHtml = arguments[2];
var finalOutputHtml = arguments[3];

// markdownitをグローバルに登録
if (typeof markdownit === 'undefined') {
    var markdownit = this.markdownit || require('./markdown-it.min.js');
}
var md = markdownit();

// 1. Markdown→HTML変換
mdToHTML(inputMd, outputHtml, md);

// 2. テンプレート適用（outputHtmlをcontentとして使う）
ssg(templateHtml, outputHtml, finalOutputHtml);

print('All steps completed.');
