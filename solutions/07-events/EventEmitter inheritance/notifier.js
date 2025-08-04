const EventEmitter = require("events");

class Notifier extends EventEmitter {
    send(message) {
        this.emit("notify", message);
    }
}

module.exports = Notifier;