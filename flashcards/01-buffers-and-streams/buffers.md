---

## How do you create a Buffer from a string and print both the buffer and the original string in Node.js?
**A**:
```js
const buf = Buffer.from("JSNAD rocks", "utf-8");
console.log(buf);
console.log(buf.toString("utf-8"));


---

### Question  
Quelle est la différence entre `Buffer.from()` et `Buffer.alloc()` en Node.js, et dans quels cas les utiliser ?

### Réponse  
- `Buffer.from(data)` crée un buffer à partir de données existantes (chaîne, tableau, etc.).  
- `Buffer.alloc(size)` crée un buffer de taille fixe **rempli de zéros**.  
- Évitez `Buffer(size)` seul : il alloue un buffer non initialisé (potentiellement des données sensibles).

```js
const buf1 = Buffer.from("JSNAD");     // Buffer contenant "JSNAD"
const buf2 = Buffer.alloc(5);          // Buffer de 5 octets initialisés à 0

À retenir : utilisez toujours Buffer.from ou Buffer.alloc pour éviter les failles de sécurité.


Créez un buffer vide de 10 octets avec Buffer.alloc, remplissez-le avec la valeur 42, puis affichez-le.
