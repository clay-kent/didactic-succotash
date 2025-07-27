// Rhino用 簡易SSGスクリプト
// 使い方: java -jar rhino.jar ssg.js template.html content.html output.html

if (arguments.length < 3) {
    print('Usage: java -jar rhino.jar ssg.js template.html content.html output.html');
    quit();
}

var templateFile = arguments[0];
var contentFile = arguments[1];
var outputFile = arguments[2];

print('[DEBUG] テンプレートファイル読み込み: ' + templateFile + ' (UTF-8指定)');
var reader = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(templateFile), 'UTF-8'));
var template = '';
var line;
while ((line = reader.readLine()) !== null) {
    template += line + '\n';
}
reader.close();

print('[DEBUG] コンテンツファイル読み込み: ' + contentFile + ' (UTF-8指定)');
var reader2 = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(contentFile), 'UTF-8'));
var content = '';
while ((line = reader2.readLine()) !== null) {
    content += line + '\n';
}
reader2.close();

print('[DEBUG] <main>タグの中身をコンテンツで置換');
var replaced = template.replace(/<main>[\s\S]*?<\/main>/, '<main>\n' + content + '\n</main>');

print('[DEBUG] 新しいHTMLファイル書き出し: ' + outputFile + ' (UTF-8指定)');
var writer = new java.io.BufferedWriter(
    new java.io.OutputStreamWriter(
        new java.io.FileOutputStream(outputFile), 'UTF-8'
    )
);
writer.write(replaced);
writer.close();

print('Generated ' + outputFile + ' from ' + templateFile + ' + ' + contentFile);
