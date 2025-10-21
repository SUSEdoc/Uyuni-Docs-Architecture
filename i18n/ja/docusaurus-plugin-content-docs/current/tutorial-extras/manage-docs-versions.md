---
sidebar_position: 1
---

# ドキュメントバージョンの管理

Docusaurusはドキュメントの複数バージョンを管理できます。

## ドキュメントバージョンの作成

プロジェクトのバージョン1.0をリリース：

```bash
npm run docusaurus docs:version 1.0
```

`docs`フォルダが`versioned_docs/version-1.0`にコピーされ、`versions.json`が作成されます。

ドキュメントは現在2つのバージョンを持っています：

- `1.0` - `http://localhost:3000/docs/` でバージョン1.0のドキュメント
- `current` - `http://localhost:3000/docs/next/` で**今後の未リリースドキュメント**

## バージョンドロップダウンの追加

バージョン間をシームレスにナビゲートするために、バージョンドロップダウンを追加します。

`docusaurus.config.js`ファイルを変更：

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The docs version dropdown appears in your navbar:

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## Update an existing version

It is possible to edit versioned docs in their respective folder:

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`
