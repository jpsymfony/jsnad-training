
---

### `process_module.md`

## Get command line arguments (excluding node and file name)
```js
process.argv.slice(2)


## Description
- `process.argv` contient tous les arguments de la ligne de commande
- C’est un tableau, dont les deux premières entrées sont :
  - chemin vers `node`
  - chemin vers le fichier du script

## Exemple
```js
const args = process.argv.slice(2);


---

## 📘 Cheat Sheet 2 : Création de CLI en Node.js

```markdown
# Cheat Sheet : Créer une interface en ligne de commande (CLI)

## Accès aux arguments
```js
const [file, op] = process.argv.slice(2);



#!/usr/bin/env node
const name = process.argv[2];
console.log(`Salut ${name || "toi"} !`);
