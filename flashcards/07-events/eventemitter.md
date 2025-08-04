---
### Question  
Comment utiliser les événements personnalisés avec `EventEmitter` dans Node.js ?

### Réponse  
Le module `events` de Node.js permet de créer des objets capables d’émettre et d’écouter des événements personnalisés à l’aide de la classe `EventEmitter`.

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

// Écouter un événement
emitter.on("message", (data) => {
  console.log("Message reçu :", data);
});

// Émettre un événement
emitter.emit("message", "Bonjour JSNAD !");
