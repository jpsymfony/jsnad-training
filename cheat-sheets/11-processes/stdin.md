
---
## Read a line from stdin (user input)
```js
process.stdin.setEncoding("utf-8");
process.stdin.on("data", (data) => {
  console.log("Vous avez écrit :", data.trim());
  process.exit();
});
```

# Cheat Sheet : readline (entrée utilisateur)

## Création d’interface
- `const rl = readline.createInterface({ input: process.stdin, output: process.stdout });`

## Poser une question
- `rl.question("Texte ?", (réponse) => { ... });`

## Fermer l’interface
- `rl.close();`

## Alternatives
- Pour une entrée ligne par ligne continue : `rl.on("line", callback)`

---

# Cheat Sheet : flux stdin / stdout

## Lire depuis stdin (brut)
- `process.stdin.setEncoding("utf-8");`
- `process.stdin.on("data", (input) => { console.log("Vous avez écrit :", input.trim()); });`

## Écrire vers stdout
- `process.stdout.write("Bonjour !");`
- `console.log("Avec saut de ligne");`

## Notes
- `console.log()` ajoute automatiquement un retour à la ligne  
- `readline` est basé sur `stdin` et `stdout`
