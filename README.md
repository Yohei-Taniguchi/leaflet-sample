#地図アプリサンプル
## 内容
- 和歌山県が提供する避難所データを利用して、Leaflet.jsを使って国土地理院が提供する地図上に避難場所をマッピング
- 避難所を中心として半径500mを円で表示

## 利用技術・サービス
- [Leaflet](http://leafletjs.com/)
- [国土地理院地図](http://maps.gsi.go.jp/development/ichiran.html)
- [和歌山県避難所データ](https://github.com/wakayama-pref-org)

## 他のデータを使う場合
- data/json/list.jsonのデータを他のものに差し替えたら色々使えます。
- jsonファイルはlocation,lat,long,addressの項目が必須です
- 文字コードはUTF-8

## 注意事項
- 色々問題もあるのでご利用時には御注意ください。
- 利用技術・サービスについてはリンク先をご参照ください。
- index.htmlは自由に改変して頂いて結構です。
