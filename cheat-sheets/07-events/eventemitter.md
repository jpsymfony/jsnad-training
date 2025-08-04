# events module

## Créer un émetteur d’événements
```js
const EventEmitter = require("events");
const bus = new EventEmitter();

bus.on("ping", () => {
    console.log("pong");
});

bus.emit("ping");



---

## 📘 Cheat Sheet 2 : Pattern Observer en Node.js

```markdown
# Cheat Sheet : Observer Pattern avec EventEmitter

## Description
Le pattern Observer permet à des objets de "s’abonner" à des événements générés par d’autres objets. Node.js utilise ce modèle via EventEmitter.

## Structure
- **Sujet** : l’émetteur d’événements (ex : `EventEmitter`)
- **Observateurs** : les listeners enregistrés sur ces événements

## Exemple rapide
```js
const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(msg) {
    this.emit("log", msg);
  }
}

const logger = new Logger();

logger.on("log", (data) => {
  console.log("Log capté :", data);
});

logger.log("Un événement important");
