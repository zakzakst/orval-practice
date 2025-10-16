- 下記読んで試してみる
  - https://qiita.com/waiwaiwait/items/47a8c19bfc1209df7e78
  - https://t-cr.jp/article/5n41j3s6r4m5o0r
- openapi の enum の捌き方について考える（現状レスポンス形式からフォームの値を考えているが、新規追加用の API を考えて enum を設定するほうが順序として正しそう）
- calendar の入力制限について調べる
- MUI の処理の方法参考にする（やっぱり radix-ui を参考にする）
  - read only
  - undefined（ラジオグループ、日付選択、チェックボックス）。defaultValue とか使って、分離したほうがいいか？Props で value を渡すのではなく、コンポーネント側で入力内容を持たせる？連携は onChange でする？ 親コンポーネントとの連携は useEffect でやる？
  - セレクトボックスなどで、選択中の項目を選択した時の挙動（クリアされる？）
- フォームの read only
- 内容切替のフォームのバリデーション
- csv 出力
- openapi の nullable: true 使ってみる
  https://swagger.io/docs/specification/v3_0/data-models/enums/
- biome と vscode の連動

- https://github.com/radix-ui/primitives/blob/main/packages/react/radio-group/src/radio-group.tsx#L74
- https://github.com/radix-ui/primitives/blob/main/packages/react/checkbox/src/checkbox.tsx#L48
- https://github.com/radix-ui/primitives/blob/main/packages/react/use-controllable-state/src/use-controllable-state.tsx

- 初期値のみ外から設定できればいい
  - ⇒ defaultValue 設定を Props で渡す（uncontrollable にする）
- 入力値を外から変更できるようにしたい
  - ⇒ value と連動させる（controllable にする）
  - ※ 例：（別のコンポーネントの）ボタンをクリックしたら、あるチェックボックスの設定値をクリアする など
