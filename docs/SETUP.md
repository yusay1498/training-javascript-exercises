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

以下は、できる限り画面操作（GUI）だけで完結するように手順を分解しています。

### 1-1. Windowsのバージョンを確認する

1. スタートメニュー（画面左下のWindowsマーク）をクリックし、「設定」を開きます。
2. 「システム」をクリックし、一番下までスクロールして「バージョン情報」をクリックします。
3. 「Windows の仕様」欄の「バージョン」が`2004`以降（Windows 10の場合）、またはWindows 11であることを確認します。
   古いバージョンの場合は、先に「Windows Update」を実行して最新化してください。

### 1-2. WSLに必要なWindowsの機能を有効化する

1. スタートメニュー横の検索バーに「Windowsの機能の有効化または無効化」と入力し、表示された項目をクリックして開きます。
2. 表示された一覧の中から、以下2つの項目にチェックを入れます。
   - 「Linux用Windowsサブシステム」
   - 「仮想マシンプラットフォーム」
3. 「OK」をクリックします（変更の適用が始まります）。
4. 完了後に表示される「今すぐ再起動」ボタンをクリックし、PCを再起動します。

### 1-3. Microsoft StoreからUbuntuをインストールする

1. スタートメニューから「Microsoft Store」を開きます。
2. 上部の検索バーに「Ubuntu」と入力します。
3. 検索結果から「Ubuntu」（発行元: Canonical Group Limited）を選択します。
   （`Ubuntu 22.04.x LTS`のようにバージョン番号付きのものが表示された場合は、そちらを選んでも構いません。）
4. 「入手」または「インストール」ボタンをクリックし、インストールが完了するまで待ちます。

### 1-4. Ubuntuを起動し、初期設定を行う

1. インストール完了後に表示される「起動」ボタンをクリックするか、スタートメニューで「Ubuntu」を検索して起動します。
2. 黒い画面（ターミナルウィンドウ）が開き、初期化処理が始まります。しばらく待ちます。
3. `Enter new UNIX username:` と表示されたら、任意のユーザー名（半角英小文字推奨）を入力し、Enterキーを押します。
   （Windowsのログイン情報とは別物です。）
4. `New password:` と表示されたら、任意のパスワードを入力してEnterキーを押します。
   （入力中は画面に文字が表示されませんが、正しく入力されています。）
5. `Retype new password:` で、同じパスワードをもう一度入力します。
6. `ユーザー名@PC名:~$` のような行が表示されれば、初期設定は完了です。

> **重要**: これ以降の「Git」「Node.js（nvm）」の手順は、
> **このUbuntuのウィンドウ（ターミナル）の中で**実行してください。
> Windows標準のPowerShellやコマンドプロンプトでは動作しません。

### 1-5. WSL上のパッケージを最新化する

Ubuntuのターミナルで、以下のコマンドを実行します（ここから先は、ターミナル上でのコマンド操作になります）。

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

### インストール

1. https://code.visualstudio.com/ を開き、「Download for Windows」（macOSの場合は「Download for Mac」）をクリックします。
2. ダウンロードしたインストーラーを実行します。
   - **Windows**: 「使用許諾契約の同意」にチェックして「次へ」を進み、「追加タスクの選択」画面で以下にチェックを入れることをおすすめします。
     - 「PATH への追加（再起動後に使用可能になります）」
     - 「Code で開く」をエクスプローラーのファイルのコンテキストメニューに追加する
     - 「Code で開く」をエクスプローラーのディレクトリのコンテキストメニューに追加する
   - **macOS**: ダウンロードしたzipを展開してできる`Visual Studio Code.app`を、Finderの「アプリケーション」フォルダにドラッグ＆ドロップします。
3. インストール後、VS Codeを起動します。

### Windowsの場合: WSL拡張機能を追加する

1. VS Code左側の縦に並んだアイコン（アクティビティバー）から、四角が4つ組み合わさった「拡張機能」アイコンをクリックします。
2. 上部の検索欄に「WSL」と入力します。
3. 検索結果の「WSL」（発行元: Microsoft）を選択し、「Install」ボタンをクリックします。
4. インストールが完了すると、VS Codeウィンドウ左下に緑色の「><」のようなアイコン（リモート接続インジケーター）が表示されます。
5. その緑色のアイコンをクリックし、表示されたメニューから「Connect to WSL」（WSLに接続する）を選択します。
6. WSL側に接続した新しいVS Codeウィンドウが開きます。以降、Windows上での作業は、この「WSLに接続した」ウィンドウで行ってください。

### macOSの場合

追加設定は不要です。

### フォルダを開く（共通）

メニューバーの「ファイル」（macOSでは「File」）→「フォルダーを開く…」（Open Folder...）から、
後述の手順で取得したリポジトリのフォルダを選択して開きます。


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
