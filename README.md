# @otoneko./mojibake
日本語用の文字化けエンコード・デコードライブラリ

## 使い方
```js
const Mojibake = require("@otoneko./mojibake");

const mojibake = new Mojibake();

const input = 'もぺもぺ';
const encoded = mojibake.encode(input);
const decoded = mojibake.decode(encoded);
console.log(encoded); // '繧ゅ⊆繧ゅ⊆'
console.log(decoded); // 'もぺもぺ'
```

## Get Support
<a href="https://discord.gg/yKW8wWKCnS"><img src="https://discordapp.com/api/guilds/1005287561582878800/widget.png?style=banner4" alt="Discord Banner"/></a>
