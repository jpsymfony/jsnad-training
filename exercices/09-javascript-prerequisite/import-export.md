#### Énoncé
Créez un fichier `main.js` qui :
- importe un module `math.js` contenant une fonction `add(a, b)` via `require()`,
- appelle `add(2, 3)` et affiche le résultat.

#### Solution

```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };
