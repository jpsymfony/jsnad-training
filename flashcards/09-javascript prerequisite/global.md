---

### Question
Qu’est-ce que `global` dans Node.js et en quoi diffère-t-il de `window` dans un navigateur ?

### Réponse
- `global` est l’objet global dans un environnement Node.js, équivalent à `window` dans un navigateur.
- Il contient toutes les variables globales accessibles dans tout le programme, comme `setTimeout`, `console`, `process`, etc.
- Contrairement à `window`, `global` ne contient pas vos variables définies localement.

```js
global.myVar = 123;

console.log(myVar); // ReferenceError: myVar is not defined
console.log(global.myVar); // 123


## Accès
- `global` est l’équivalent de `window` en Node.js
- Il contient :
  - `console`
  - `setTimeout`, `setInterval`
  - `process`
  - `Buffer`

## Ajouter une variable globale
```js
global.appName = "MyApp";



---

## 📘 Cheat Sheet 2 : Variables globales utiles en Node.js

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
