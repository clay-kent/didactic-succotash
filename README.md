# didactic-succotash

# RhinoでMarkdown→HTML変換する方法

## 必要ファイル
- mdToHTML.js
- markdown-it.min.js（UMDビルド、CDNから取得済み）
- 変換したいMarkdownファイル（例：README.md）

## 実行例
Rhino（JavaScriptエンジン）で以下のコマンドを実行してください。

```
java -jar rhino.jar mdToHTML.js README.md README.html
```

- `README.md` をHTMLに変換し、`README.html`として出力します。
- 他のMarkdownファイルも同様に変換できます。

## 備考
- Rhinoのjarファイル（rhino.jar）は別途用意してください。
- markdown-it.min.jsはCDNから最新版を取得し、同じフォルダに配置してください。
- mdToHTML.jsは標準入力/出力には対応していません。ファイル指定のみです。

---
