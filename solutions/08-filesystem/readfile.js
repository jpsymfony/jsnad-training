// 1. On importe le module 'fs' (filesystem)
const fs = require('fs');

// 2. On lit le fichier 'data.txt' en UTF-8
fs.readFile("data.txt", "utf-8", (err, data) => {
    if (err) {
        // 3. En cas d’erreur, on l'affiche
        console.error("Erreur de lecture :", err.message);
        return;
    }

    // 4. On coupe les lignes et on les affiche
    const lines = data.split("\n");

    // 5. On affiche "Bonjour, <nom>" pour chaque ligne
    lines.forEach((name) => {
        console.log("Bonjour,", name);
    });
});