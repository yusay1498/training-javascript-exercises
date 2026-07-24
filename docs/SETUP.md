# 開発環境のセットアップ

このドキュメントは、プログラミング未経験の方でも迷わずに開発環境を構築できるよう、
手順を1つずつ詳しく説明したものです。

以下を達成します。

1. Windowsの場合の事前準備（WSL）
2. Git
3. Node.js（nvm）
4. エディタ（VS Code）
5. リポジトリの取得
6. セットアップの確認

macOSを使用している方は、手順1をスキップして手順2から進めてください。


## 1. Windowsの場合の事前準備（WSL）

Windowsでは、WSL（Windows Subsystem for Linux）上に開発環境を構築することを推奨します。
WSLを使うことで、Mac/Linuxとほぼ同じコマンド・手順で開発を進められます。

### WSLのインストール

1. 「PowerShell」を**管理者として実行**します
   （スタートメニューで「PowerShell」を検索し、右クリック→「管理者として実行」）。
2. 以下のコマンドを実行します。
   ```powershell
   wsl --install
   ```
3. インストール完了後、PCを再起動します。
4. 再起動後、自動的に（または スタートメニューから「Ubuntu」を起動して）Ubuntuのセットアップが始まります。
   画面の指示に従って、Ubuntu用のユーザー名とパスワードを設定してください
   （このユーザー名・パスワードはWindowsのログイン情報とは別物です）。
5. 以下のコマンドでインストールを確認します。
   ```bash
   wsl --version
   ```

> **重要**: これ以降の「Git」「Node.js（nvm）」の手順は、
> **WSL（Ubuntuのターミナル）の中で**実行してください。
> Windows標準のPowerShellやコマンドプロンプトでは動作しません。

### WSL上のパッケージを最新化

Ubuntuのターミナルを開き、まずパッケージ一覧を更新します。

```bash
sudo apt update && sudo apt upgrade -y
```


## 2. Git

### Gitのインストール

- **Windows（WSL/Ubuntu）の場合**

  ```bash
  sudo apt install -y git
  ```

- **macOSの場合**

  macOSにはGitが標準搭載されていることが多いですが、
  未導入の場合は以下のコマンドを実行すると、Xcode Command Line Toolsの一部として導入されます。

  ```bash
  xcode-select --install
  ```

インストールしたら、まず以下のコマンドを確認します。

```bash
git --version
```

### Gitのユーザー設定

次にGitの設定状態を確認します。

```bash
git config --global user.name
git config --global user.email
```

続けて設定します。

```bash
git config --global user.name 'GitHubに設定している表示名'
git config --global user.email 'GitHubに設定しているEmail'
```

設定できたかどうか、確認します。

```bash
git config --global user.name
git config --global user.email
```

### Gitのクレデンシャル設定

Git Credential Managerをインストールします。

- https://github.com/git-ecosystem/git-credential-manager/blob/release/docs/install.md
- https://docs.github.com/ja/get-started/getting-started-with-git/caching-your-github-credentials-in-git

Git Credential Managerのインストールが完了したら、通常どおりのGit操作が可能です。
認証が必要なGit操作時にブラウザが開き、認証を要求され、これが自動的に連携されるようになります。

### Gitのエディタ設定

Gitのエディタ設定状態を確認します。
設定したエディタは、コミットメッセージの入力や変更などで使用します。

```bash
git config --global core.editor
```

VS Codeを使う場合は、以下のように設定するとVS Code上でコミットメッセージを編集できます。

```bash
git config --global core.editor "code --wait"
```

（VS Codeを使わない場合は `vi` のままでも問題ありません。）


## 3. Node.js（nvm）

nvmは、Node.jsのバージョンマネージャーです。
1台のPCに複数バージョンのNode.jsを共存させ、簡単に切り替えられるようにするためのツールです。

### nvmのインストール

https://github.com/nvm-sh/nvm?tab=readme-ov-file

WSL（Ubuntu）・macOSどちらも、同じインストールスクリプトを使用します。

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

インストール後、一度ターミナルを閉じて開き直してから、以下のコマンドを確認します。

```bash
nvm --version
```

バージョンが表示されずエラーとなってしまった場合は、ターミナルを開き直しても解決しないことがあります。
その場合は、シェルの設定ファイル（`~/.bashrc`や`~/.zshrc`など）に、nvmの読み込み設定が
正しく追記されているか確認してください（インストールスクリプトの出力に手順が表示されます）。

### Node.jsのインストール

Node.jsは`nvm`コマンドを使用してインストールします。

`nvm`コマンドでインストール可能なNode.jsのバージョンを一覧します。

```bash
nvm list-remote
```

このリポジトリでは、Node.js 18以降（`fetch`がネイティブで使えるバージョン）を推奨しています。
最新のLTS（長期サポート）版をインストールします。

```bash
nvm install --lts
```

Node.jsをインストールしたら、以下のコマンドを確認します。

```bash
node --version
```


## 4. エディタ（VS Code）

- https://code.visualstudio.com/ からダウンロードし、インストールします。

### Windowsの場合

VS Codeに拡張機能「[WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)」を追加でインストールしてください。
インストール後、WSL（Ubuntu）のターミナルから以下を実行すると、VS CodeがWSL側のファイルを開いた状態で起動します。

```bash
code .
```

### macOSの場合

追加設定は不要です。ターミナルから `code .` が使えない場合は、
VS Code内でコマンドパレット（`⌘ + Shift + P`）を開き、
「Shell Command: Install 'code' command in PATH」を実行してください。


## 5. リポジトリの取得

> **Windowsの場合**: 必ずWSL（Ubuntu）のターミナルで実行してください。
> Windows側の`C:\Users\...`ではなく、WSLのホームディレクトリ（`~`）配下にクローンすることを推奨します。

```bash
git clone https://github.com/yusay1498/training-javascript-exercises.git
cd training-javascript-exercises
```


## 6. セットアップの確認

以下のコマンドがすべてエラーなく実行できれば、セットアップは完了です。

```bash
git --version
node --version
npm run serve
```

`npm run serve` を実行すると、ローカルサーバーが起動します
（`Ctrl + C` で停止できます）。表示されたURL（例: `http://localhost:3000`）にブラウザでアクセスし、
`README.md`の一覧などが表示されれば成功です。

準備ができたら、[README.md](../README.md) に戻って演習を進めてください。
