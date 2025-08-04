const Notifier = require("./notifier");

const notifier = new Notifier();

notifier.on("notify", (msg) => {
    console.log("Notification reçue :", msg);
});

notifier.send("Nouvelle alerte système !");