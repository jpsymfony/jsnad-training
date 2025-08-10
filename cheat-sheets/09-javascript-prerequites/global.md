---

## 📘 Variables globales utiles en Node.js

```markdown
# Cheat Sheet : Variables globales natives

## `__dirname`
Chemin absolu du dossier du script en cours

## `__filename`
Chemin absolu du fichier en cours

## `module`
Objet représentant le fichier courant

## `exports`
Alias de `module.exports` pour exposer des éléments

## `require`
Fonction pour importer des modules CommonJS

## `process`
Objet global contenant :
- `process.env` pour les variables d’environnement
- `process.argv` pour les arguments CLI
- `process.exit()` pour quitter


# Cheat Sheet : Modules globaux Node.js

## Inclus sans require
- `console`
- `setTimeout`, `setInterval`, `clearTimeout`, etc.
- `process`
- `Buffer`
- `__dirname`, `__filename`

## Exemple
```js
console.log(__dirname); // Dossier du script courant
console.log(process.pid); // PID du processus
