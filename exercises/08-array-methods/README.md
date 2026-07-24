08. 配列操作
================================================================================

対応セクション: `10.javascript.md` の「配列操作」

**この演習で実装する関数は、`capstone/`で実際にそのまま使います。**


課題
--------------------------------------------------------------------------------

`todo.js`の4つの関数を実装してください。メンバーは以下のような形のオブジェクトです。

```javascript
{ name: "Alice", score: 74 }
```

1. `filterPassed(members, passingScore)`
   `filter`を使って、`score`が`passingScore`以上のメンバーだけを返してください。

2. `toNameList(members)`
   `map`を使って、メンバーの名前だけを取り出した配列を返してください。

3. `sumScores(members)`
   `reduce`を使って、全メンバーの`score`の合計を返してください。

4. `hasAnyFailed(members, passingScore)`
   `some`を使って、`score`が`passingScore`未満のメンバーが1人でもいるかどうかを返してください。


確認方法
--------------------------------------------------------------------------------

```bash
node exercises/08-array-methods/check.js
```
