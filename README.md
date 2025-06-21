# TODOアプリ（社内システムのプロトタイプ）

## 環境情報
Node.js v23.8.0以上が推奨です

## 機能概要
- ログイン
- ログアウト
- タスクの追加
- タスクの編集(タイトル・実行済みチェックボックス)
- タスクの削除

## ローカルでの起動方法
### 前提条件
https://github.com/kzm-dev07/kzm-app-infra をローカル環境にクローンしREADMEの記載されている「ローカルでの起動方法」を実行していること

1. クローンする
```bash
git clone git@github.com:kzm-dev07/todo-app-ui.git
```

2. envファイルを作成する
```bash
cp .env.sample .env
```

3. インストール
```bash
npm i
```

4. 起動
```bash
npm run dev
```
5. http://localhost:3000/ へアクセスする

6. ログインする
ユーザー名： user.sample
パスワード： password
