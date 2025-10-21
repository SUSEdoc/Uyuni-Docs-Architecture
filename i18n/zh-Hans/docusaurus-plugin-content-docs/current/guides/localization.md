# 本地化指南

本指南解释如何为Uyuni文档架构网站添加和管理翻译。

## 支持的语言

该网站目前支持以下语言：

- **英语 (en)** - 默认
- **德语 (de)** - Deutsch
- **西班牙语 (es)** - Español
- **法语 (fr)** - Français
- **日语 (ja)** - 日本語
- **简体中文 (zh-Hans)** - 简体中文

## 目录结构

Docusaurus使用特定的目录结构进行翻译：

```
i18n/
├── de/
│   ├── docusaurus-plugin-content-docs/
│   │   └── current/
│   │       └── (已翻译的文档)
│   └── docusaurus-theme-classic/
│       ├── footer.json
│       └── navbar.json
├── es/
│   └── ...
└── fr/
    └── ...
```

## 添加翻译

### 步骤1：初始化翻译文件

为特定语言环境（例如中文）初始化翻译文件：

```bash
npm run write-translations -- --locale zh-Hans
```

这会为UI元素创建必要的JSON文件。

### 步骤2：翻译文档

将文档文件复制到相应的语言环境文件夹：

```bash
mkdir -p i18n/zh-Hans/docusaurus-plugin-content-docs/current
cp -r docs/* i18n/zh-Hans/docusaurus-plugin-content-docs/current/
```

然后翻译这些文件中的内容。

## 最佳实践

1. **保持英语作为源**：始终首先更新英语文档
2. **使用翻译键**：对于UI元素，使用一致的翻译键
3. **保持结构**：在所有语言环境中保持相同的文件结构
4. **版本翻译**：将翻译与文档版本同步
5. **定期更新**：保持翻译与源更改同步

## 资源

- [Docusaurus i18n 文档](https://docusaurus.io/docs/i18n/introduction)
- [Weblate 文档](https://docs.weblate.org/)

## 需要帮助？

有关本地化的问题，请在存储库中开启issue或联系文档团队。