// Rhino用 簡易SSGスクリプト
// 使い方: java -jar rhino.jar ssg.js template.html content.html output.html

function ssg(templateFile, contentFile, outputFile) {
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

    // content.htmlの最初の<h1>を<header>に、残りを<main>に挿入
    var h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/i);
    var headerContent = '';
    var mainContent = '';
    var titleText = '';
    if (h1Match) {
        headerContent = h1Match[0];
        mainContent = content.replace(h1Match[0], '').trim();
        titleText = h1Match[1].replace(/<[^>]+>/g, '').trim(); // h1の中のテキストのみ抽出
    } else {
        mainContent = content;
        titleText = '';
    }

    print('[DEBUG] <title>タグをh1テキストで置換');
    var replacedTitle = template.replace(/<title>[\s\S]*?<\/title>/i, '<title>' + (titleText || 'Untitled') + '<\/title>');

    print('[DEBUG] <header>タグの中身をh1で置換');
    var replacedHeader = replacedTitle.replace(/<header>[\s\S]*?<\/header>/, '<header>\n' + headerContent + '\n</header>');

    print('[DEBUG] <main>タグの中身を本文で置換');
    var replaced = replacedHeader.replace(/<main>[\s\S]*?<\/main>/, '<main>\n' + mainContent + '\n</main>');

    print('[DEBUG] 新しいHTMLファイル書き出し: ' + outputFile + ' (UTF-8指定)');
    var writer = new java.io.BufferedWriter(
        new java.io.OutputStreamWriter(
            new java.io.FileOutputStream(outputFile), 'UTF-8'
        )
    );
    writer.write(replaced);
    writer.close();

    print('Generated ' + outputFile + ' from ' + templateFile + ' + ' + contentFile);
}

module.exports = ssg;
