---
sidebar_position: 1
---

# 教程介绍

让我们在**不到5分钟的时间内发现Docusaurus**。

## 开始使用

通过**创建新站点**开始。

或者使用**[docusaurus.new](https://docusaurus.new)**立即**尝试Docusaurus**。

### 您需要什么

- [Node.js](https://nodejs.org/en/download/) 版本20.0或更高：
  - 安装Node.js时，建议选中所有与依赖项相关的复选框。

## 生成新站点

使用**经典模板**生成新的Docusaurus站点。

运行命令后，经典模板将自动添加到您的项目中：

```bash
npm init docusaurus@latest my-website classic
```

您可以在命令提示符、PowerShell、终端或代码编辑器的任何其他集成终端中键入此命令。

该命令还会安装运行Docusaurus所需的所有必要依赖项。

## 启动您的站点

运行开发服务器：

```bash
cd my-website
npm run start
```

`cd`命令会更改您正在使用的目录。为了使用新创建的Docusaurus站点，您需要将终端导航到那里。

`npm run start`命令在本地构建您的网站，并通过开发服务器提供服务，准备好在http://localhost:3000/上查看。

打开`docs/intro.md`（此页面）并编辑一些行：站点**自动重新加载**并显示您的更改。