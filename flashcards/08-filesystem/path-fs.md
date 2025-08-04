---
### Question
Comment utiliser les modules natifs `path` et `fs` pour lire un fichier dans Node.js ?

### Réponse
Node.js fournit des modules intégrés pour gérer les chemins (`path`) et le système de fichiers (`fs`). On peut les utiliser ensemble pour accéder à des fichiers de manière fiable.

```js
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "fichier.txt");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) throw err;
  console.log("Contenu :", data);
});
```

path.join() construit un chemin indépendant de l’OS. fs.readFile() lit le fichier de façon asynchrone.