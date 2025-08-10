#### Énoncé
Créez un fichier `main.js` qui :
- importe un module `math.mjs` contenant une fonction `add(a, b)` via `require()`,
- appelle `add(2, 3)` et affiche le résultat.

#### Solution

```js
// math.mjs
function add(a, b) {
  return a + b;
}
module.exports = { add };
