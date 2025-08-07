---

## How do you retrieve command-line arguments in Node.js and print them one per line (excluding the first two)?
**A**:
```js
process.argv.slice(2).forEach(arg => {
  console.log(arg);
});


---

### Question  
Comment lire les arguments passés à un script Node.js via la ligne de commande ?

### Réponse  
Les arguments passés au script sont accessibles via `process.argv`, un tableau contenant :
1. le chemin vers Node (`process.argv[0]`)
2. le chemin du fichier exécuté (`process.argv[1]`)
3. les arguments utilisateur (`process.argv[2]` et suivants)

```js
// script.js
console.log(process.argv);

node script.js hello 123
// Affiche : [ '/usr/bin/node', '/path/script.js', 'hello', '123' ]

