const fs = require("fs");

fs.writeFile("output.txt", "Ceci est un test d’écriture.", "utf-8", (err) => {
    if (err) {
        console.error("Erreur lors de l’écriture :", err.message);
        return;
    }
    console.log("Fichier créé !");
});
