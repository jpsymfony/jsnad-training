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
## Flashcard Node.js – Jour 10

### Question  
Qu’est-ce qu’un module global dans Node.js et comment en créer un soi-même ?

### Réponse  
Un module global dans Node.js est un module qui peut être utilisé dans n’importe quel fichier sans avoir besoin de l’importer avec `require`. Par défaut, certains objets comme `console`, `process`, `setTimeout` sont globaux.

Cependant, **il est déconseillé** de créer ses propres variables globales car cela pollue l’espace global et complique la maintenance du code. Mais si besoin :

```js
// fichier config.js
global.config = {
  appName: "JSNAD Prep",
  version: "1.0.0"
};
