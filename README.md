# ToDo List
Reactで作るのは簡単ですが、 Vanilla JSで作るのはけっこう難しいです。時間がかかると思います。
## 仕様
### Create
- 入力フィールドと保存のボタンがある
- 入力フィールドに「掃除」のような文字を入力して保存ボタンを押すとToDo一覧に表示される

### Read
- ToDo一覧が表示されている
- [x] 掃除　（編集） (削除)のように表示される
- 編集と削除はボタン
- チェックボックスでタスクの完了と未完了がわかる
- 全てのタスク：3 完了済み：2 未完了：1のようにタスクの数を表示する
- チェックボックスにチェックをいれる、つまりタスクを完了させることによりタスクの数はリアルタイムで変わる
- 削除するとタスクの数は減り、新規作成するとタスクの数は増える

### Update
- 編集ボタンを押すと文字がフォームに変わってその場で編集できる
- \[掃除\](保存)と表示され保存すると文字に戻る

### Delete
- 削除ボタンを押すと「本当によろしいですか？」と表示されOKを押すと削除できる
<img width="563" alt="image" src="https://user-images.githubusercontent.com/60137763/160192289-341fc4ca-e620-4f86-98c6-8b69d2e1be5c.png">


## 課題(終了条件)

- `js_todo`リポジトリを作成してpull requestを作成すること
- Github Pagesにデプロイすること
- pull requestにデプロイしたGithub PagesのURLを記載してpull requestのURLを提出すること