# Cheat Sheet : Module readline

## Création d’interface
```js
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

## Poser une question
rl.question("Texte ?", (réponse) => { ... });
