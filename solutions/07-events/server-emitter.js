const http = require("http");
const EventEmitter = require("events");

class Tracker extends EventEmitter {
    constructor() {
        super();
        this.count = 0;
        this.on("accessed", () => {
            this.count++;
            console.log("Nombre total d’accès :", this.count);
        });
    }
}

const tracker = new Tracker();

const server = http.createServer((req, res) => {
    tracker.emit("accessed");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bienvenue !");
});

server.listen(3000, () => {
    console.log("Serveur en écoute sur le port 3000");
});
