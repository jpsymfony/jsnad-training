const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "greetings.txt");

fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data.toUpperCase());
});


const logPath = path.join(__dirname, "log.txt");
const now = new Date().toISOString();

fs.access(logPath, fs.constants.F_OK, (err) => {
    if (err) {
        // Fichier n’existe pas
        fs.writeFile(logPath, `Fichier créé à : ${now}\n`, (err) => {
            if (err) throw err;
        });
    } else {
        // Fichier existe
        fs.appendFile(logPath, `Accès à : ${now}\n`, (err) => {
            if (err) throw err;
        });
    }
});