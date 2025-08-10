---

## How do you read a line from stdin and print it in Node.js?
**A**:
```js
process.stdin.setEncoding("utf-8");
process.stdin.on("data", (data) => {
console.log("Vous avez écrit :", data.trim());
process.exit();
});

---

### Question  
Comment fonctionne le module `readline` de Node.js pour lire une entrée utilisateur ligne par ligne ?

### Réponse  
Le module `readline` permet de créer une interface pour lire les entrées depuis `stdin` (ou tout flux lisible). Il est souvent utilisé pour créer des interfaces en ligne de commande interactives.

```js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Quel est ton nom ? ", (answer) => {
  console.log("Bonjour", answer);
  rl.close();
});
