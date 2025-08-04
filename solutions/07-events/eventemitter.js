// 1. On importe le module 'events' de Node
const EventEmitter = require("events");

// 2. On crée une nouvelle instance d'EventEmitter
const bus = new EventEmitter();

// 3. On déclare un écouteur sur l'événement 'ping'
bus.on("ping", () => {
    console.log("pong");
});

// 4. On émet un 'ping' toutes les 2 secondes
const intervalId = setInterval(() => {
    bus.emit("ping");
}, 2000);

// 5. On arrête le script après 6 secondes
setTimeout(() => {
    clearInterval(intervalId); // on arrête l'intervalle
    console.log("Fin du script");
    process.exit(0); // on termine proprement
}, 6000);