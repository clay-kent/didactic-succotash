
# didactic-succotash

## プロジェクト概要
didactic-succotashは、Rhino（JavaScriptエンジン）上で動作するシンプルなStatic Site Generator（SSG）です。MarkdownファイルをHTMLへ一括変換し、テンプレート適用やCSS/JSの管理も可能です。Node.js不要、Java環境のみで動作します。

### 主な特徴・メリット
- Rhino（JavaベースJSエンジン）で動作
- Markdown→HTML一括変換
- テンプレート適用によるデザイン統一
- 画像・CSS・JSファイルの自動コピー
- 拡張性・カスタマイズ性

## 主な機能
- MarkdownファイルのHTML変換
- テンプレート（HTML）適用
- 画像・CSS・JSの静的ファイル管理
- コマンド一発でサイト全体を生成

## 必要ファイル・依存関係
- `mdToHTML.js`（Markdown→HTML変換スクリプト）
- `ssg.js`（SSG本体スクリプト）
- `markdown-it.min.js`（Markdownパーサー、UMDビルド版）
- `rhino.jar`（Rhino JavaScriptエンジン）
- `template.html`（HTMLテンプレート）
- 変換対象のMarkdownファイル（例：`README.md`）
- 静的ファイル（画像・CSS・JS等）

## セットアップ手順
1. 必要ファイルを同一ディレクトリに配置
2. `markdown-it.min.js`はCDNから最新版を取得
3. `rhino.jar`は公式サイト等から入手
4. テンプレートや静的ファイルを用意

## 使い方
### コマンド例
Markdown→HTML変換（単体）:
```
java -jar rhino.jar mdToHTML.js README.md README.html
```
SSGとして一括変換:
```
java -jar rhino.jar ssg.js template.html ARTICLE.html index.html
```
- `template.html`：全ページ共通のテンプレート
- `ARTICLE.html`、`index.html`：出力されるHTMLファイル

### 入力・出力ファイル
- 入力：Markdownファイル（例：`README.md`）
- 出力：HTMLファイル（例：`README.html`）

### 実行例
```
java -jar rhino.jar ssg.js template.html ARTICLE.html index.html
```

## ディレクトリ構成（推奨例）
```
didactic-succotash/
├── mdToHTML.js
├── ssg.js
├── markdown-it.min.js
├── template.html
├── *.html
├── images/
```

### main.jsによる一括変換（Rhino 1.7R4以降推奨）
```
java -jar rhino.jar -require main.js README.md README.html template.html site.html
```
- `README.md`：変換元Markdown
- `README.html`：中間HTML（md→html変換結果）
- `template.html`：テンプレート
- `site.html`：最終出力HTML

Markdown→HTML変換（単体）:
```
java -jar rhino.jar mdToHTML.js README.md README.html
```
SSGとして一括変換:
```
java -jar rhino.jar ssg.js template.html ARTICLE.html index.html
```
- `template.html`：全ページ共通のテンプレート
- `ARTICLE.html`、`index.html`：出力されるHTMLファイル
- `template.html`を編集してデザイン変更
- `main.css`や`js/`ディレクトリに独自ファイル追加


main.js一括実行例:
```
java -jar rhino.jar -require main.js README.md README.html template.html site.html
```
## デプロイ方法
- GitHub Pages等に`*.html`や静的ファイルをアップロード
- 独自ドメイン設定はGitHub Pages公式ドキュメント参照

 ├── main.js
## ベストプラクティス
- 変換前にバックアップを取る
- テンプレートやCSSはバージョン管理
- 画像・JS等の静的ファイルも一括管理

## Rhino 1.7R4以降の-requireオプションについて
Rhino 1.7R4以降では、`-require`オプションを付けて起動することでCommonJSのrequire機能が有効になります。main.jsを使う場合は必ず`-require`を付けてください。
- テンプレートやCSSのバックアップ推奨

## ライセンス・著者情報
- ライセンス：MIT
- 著者：clay-kent
- 連絡先：GitHub Issues等

## 参考リンク
- [Rhino公式](https://mozilla.github.io/rhino/)
- [markdown-it公式](https://github.com/markdown-it/markdown-it)
- [GitHub Pages公式](https://pages.github.com/)
- [Kinsta GitHub Pages SSG解説](https://kinsta.com/jp/blog/github-pages/)
- [Qiita READMEベストプラクティス](https://qiita.com/kimullaa/items/6b4b8e7b2e2e2e2e2e2e)
- [Astro公式](https://astro.build/)
- [Next.js公式](https://nextjs.org/)
