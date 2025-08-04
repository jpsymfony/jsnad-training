# fs module

## Ecrire dans un fichier
```js
const fs = require("fs");
fs.writeFile("output.txt", "content", "utf-8", (err) => {
  if (err) {
    console.error("Erreur lors de l’écriture :", err.message);
    return;
  }
  console.log("Fichier créé !");
});
