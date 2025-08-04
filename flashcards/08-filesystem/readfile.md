
---

## `flashcards/flashcards_exos_1_2.md`
```markdown

## Comment lire un fichier texte avec Node.js en UTF-8 ?
**A**:
```js
const fs = require("fs");
fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log(data);
});
