---
sidebar_position: 1
---

# チュートリアル入門

**5分未満でDocusaurus**を発見しましょう。

## はじめに

**新しいサイトの作成**から始めましょう。

または**[docusaurus.new](https://docusaurus.new)**で**Docusaurusをすぐに試す**こともできます。

### 必要なもの

- [Node.js](https://nodejs.org/en/download/) バージョン20.0以上：
  - Node.jsをインストールする際は、依存関係に関連するすべてのチェックボックスをチェックすることをお勧めします。

## 新しいサイトを生成する

**クラシックテンプレート**を使用して新しいDocusaurusサイトを生成します。

コマンドを実行すると、クラシックテンプレートが自動的にプロジェクトに追加されます：

```bash
npm init docusaurus@latest my-website classic
```

このコマンドは、コマンドプロンプト、PowerShell、ターミナル、またはコードエディタの他の統合ターミナルに入力できます。

このコマンドは、Docusaurusを実行するために必要なすべての依存関係もインストールします。

## サイトを開始する

開発サーバーを実行します：

```bash
cd my-website
npm run start
```

`cd`コマンドは作業中のディレクトリを変更します。新しく作成したDocusaurusサイトで作業するには、ターミナルをそこに移動する必要があります。

`npm run start`コマンドは、ウェブサイトをローカルでビルドし、http://localhost:3000/ で表示できる開発サーバー経由で提供します。

`docs/intro.md`（このページ）を開いて数行編集してください：サイトが**自動的にリロード**され、変更が表示されます。