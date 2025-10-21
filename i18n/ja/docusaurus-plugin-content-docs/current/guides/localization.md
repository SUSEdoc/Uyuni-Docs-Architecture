# ローカライゼーションガイド

このガイドでは、Uyuni Documentation Architectureサイトの翻訳を追加および管理する方法を説明します。

## サポートされている言語

サイトは現在以下の言語をサポートしています：

- **英語 (en)** - デフォルト
- **ドイツ語 (de)** - Deutsch
- **スペイン語 (es)** - Español
- **フランス語 (fr)** - Français
- **日本語 (ja)** - 日本語
- **中国語簡体字 (zh-Hans)** - 简体中文

## ディレクトリ構造

Docusaurusは翻訳用の特定のディレクトリ構造を使用します：

```
i18n/
├── de/
│   ├── docusaurus-plugin-content-docs/
│   │   └── current/
│   │       └── (翻訳されたドキュメント)
│   └── docusaurus-theme-classic/
│       ├── footer.json
│       └── navbar.json
├── es/
│   └── ...
└── fr/
    └── ...
```

## 翻訳の追加

### ステップ1：翻訳ファイルの初期化

特定のロケール（例：日本語）の翻訳ファイルを初期化するには：

```bash
npm run write-translations -- --locale ja
```

これによりUI要素用の必要なJSONファイルが作成されます。

### ステップ2：ドキュメントの翻訳

ドキュメントファイルを適切なロケールフォルダにコピー：

```bash
mkdir -p i18n/ja/docusaurus-plugin-content-docs/current
cp -r docs/* i18n/ja/docusaurus-plugin-content-docs/current/
```

次に、これらのファイルの内容を翻訳します。

## ベストプラクティス

1. **英語をソースとして保持**：常に英語のドキュメントを最初に更新
2. **翻訳キーを使用**：UI要素には一貫した翻訳キーを使用
3. **構造を維持**：すべてのロケールで同じファイル構造を保持
4. **翻訳をバージョン管理**：翻訳をドキュメントバージョンと同期
5. **定期的な更新**：翻訳をソースの変更に合わせて最新に保つ

## リソース

- [Docusaurus i18n ドキュメント](https://docusaurus.io/docs/i18n/introduction)
- [Weblate ドキュメント](https://docs.weblate.org/)

## ヘルプが必要ですか？

ローカライゼーションに関する質問は、リポジトリでissueを開くか、ドキュメントチームにお問い合わせください。