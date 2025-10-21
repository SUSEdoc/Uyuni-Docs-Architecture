---
sidebar_position: 1
---

# 管理文档版本

Docusaurus可以管理文档的多个版本。

## 创建文档版本

发布项目的1.0版本：

```bash
npm run docusaurus docs:version 1.0
```

`docs`文件夹被复制到`versioned_docs/version-1.0`并创建`versions.json`。

您的文档现在有2个版本：

- `1.0` 在 `http://localhost:3000/docs/` 用于1.0版本文档
- `current` 在 `http://localhost:3000/docs/next/` 用于**即将发布的未发布文档**

## 添加版本下拉菜单

为了在版本间无缝导航，添加版本下拉菜单。

修改`docusaurus.config.js`文件：

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
