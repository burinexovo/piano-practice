# Piano Practice

繁體中文與英文鋼琴練習室，提供音階、半音階、琶音、和弦、雙音、哈農第 1～5 條、讀譜與休止符測驗。

## 使用

直接開啟 `piano-practice.html` 即可離線使用。英文版開啟 `piano-practice-en.html`，亦可用右上角切換語言。音源與字型已嵌入 HTML。

需要修改後自動刷新時，使用 Node.js 啟動：

```sh
node dev-server.cjs
```

開啟 http://127.0.0.1:5173 。伺服器只監聽本機；按 Ctrl+C 停止。

## 練習與測驗

- 預設淺色主題；右上角可切換深色，並記住選擇。琴鍵與樂譜保持清晰對比。
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

---

## English

Piano Practice is a bilingual (Traditional Chinese / English) piano learning tool featuring scales, chromatic scales, arpeggios, chords, double notes, Hanon exercises 1–5, note reading, and rest quizzes.

### Getting started

Open `piano-practice-en.html` directly to use the English version offline. Open `piano-practice.html` for Traditional Chinese, or switch languages using the link at the top right. Piano samples and fonts are embedded in both HTML files.

For automatic reload while editing, start the local server with Node.js:

```sh
node dev-server.cjs
```

Open [the English version](http://127.0.0.1:5173/piano-practice-en.html) or [the Chinese version](http://127.0.0.1:5173/). The server listens only on your computer. Press Ctrl+C to stop it.

### Practice and quizzes

- Light theme is the default. Use the theme toggle at the top right to switch to dark mode; your choice is saved across both languages. Keys and notation retain clear contrast.
- Exercises include right- and left-hand fingerings, keyboard demonstrations, and recorded piano samples. The sound toggle at the top right controls audio throughout the app.
- Note-reading and rest quizzes contain 10 questions, worth 10 points each. Revealing an answer or using a hint earns no points for that question.
- Hanon demonstrations cover ascending and descending basic patterns and three consecutive groups. Consult the original score for complete turns and endings.
- Fingerings are suggestions; adapt them to your hand, phrasing, and teacher’s guidance.

### Updating the English version

The Chinese HTML is the source. After changing it, update the translations in `scripts/en-translations.json` and regenerate the English page:

```sh
python3 scripts/build-english.py
```

This preserves embedded fonts and audio unchanged. Both generated pages remain standalone and work offline.

### Audio and notation credits

- Salamander Grand Piano by Alexander Holm: CC BY 3.0. See `assets/piano/ATTRIBUTION.md` for sources and sample processing details.
- Bravura notation symbols by Steinberg: SIL OFL 1.1. See `assets/notation/Bravura-LICENSE.txt`.
- Noto Sans TC: SIL OFL 1.1. License text is retained in the HTML.

### Roadmap

See `TODO.md` (currently in Traditional Chinese). App packaging and MIDI integration are planned for later and have not been implemented.
