# Piano Practice

繁體中文鋼琴練習室，提供音階、半音階、琶音、和弦、雙音、哈農第 1～5 條、讀譜與休止符測驗。

## 使用

直接開啟 `piano-practice.html` 即可離線使用。音源與字型已嵌入 HTML。

需要修改後自動刷新時，使用 Node.js 啟動：

```sh
node dev-server.cjs
```

開啟 http://127.0.0.1:5173 。伺服器只監聽本機；按 Ctrl+C 停止。

## 練習與測驗

- 練習支援左右手指法、鍵盤示範與真實鋼琴取樣；右上角開關控制全站聲音。
- 讀譜、休止符測驗每次 10 題，每題 10 分；查看答案或使用提示不計分。
- 哈農提供上／下行基本音型與連續三組示範，完整轉折、收尾請依原譜。
- 指法為練習建議，可依手型、樂句與老師指導調整。

## 音源與符號

- Salamander Grand Piano：Alexander Holm，CC BY 3.0。取樣来源與處理說明見 `assets/piano/ATTRIBUTION.md`。
- Bravura 樂譜符號：Steinberg，SIL OFL 1.1，授權見 `assets/notation/Bravura-LICENSE.txt`。
- Noto Sans TC：SIL OFL 1.1；授權文字保留於 HTML。

## 後續規劃

見 `TODO.md`；目前先保留網頁版本，App 與 MIDI 尚未開始實作。
