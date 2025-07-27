// Rhino用 Markdown→HTML変換スクリプト
// 使い方: java -jar rhino.jar mdToHTML.js <input.md> <output.html>

if (arguments.length < 2) {
    print('Usage: java -jar rhino.jar mdToHTML.js <input.md> <output.html>');
    quit();
}

var inputFile = arguments[0];
var outputFile = arguments[1];

// markdown-itのUMDビルドを必ずロード
load('markdown-it.min.js');
var md = markdownit();

// ファイル読み込み（UTF-8指定）
print('[DEBUG] ' + inputFile + ' をUTF-8で読み込みます');
var reader = new java.io.BufferedReader(
    new java.io.InputStreamReader(
        new java.io.FileInputStream(inputFile), 'UTF-8'
    )
);
var sb = '';
var line;
while ((line = reader.readLine()) !== null) {
    sb += line + '\n';
}
reader.close();
print('[DEBUG] 読み込んだ内容の先頭100文字: ' + sb.substring(0, 100));

// Markdown→HTML変換
var html = md.render(sb);

// HTMLファイル書き出し（UTF-8指定）
var writer = new java.io.BufferedWriter(
    new java.io.OutputStreamWriter(
        new java.io.FileOutputStream(outputFile), "UTF-8"
    )
);
writer.write(html);
writer.close();

print('Converted ' + inputFile + ' to ' + outputFile);
