# Cheat Sheet : path module

## Import
const path = require("path");

## Fonctions utiles
path.join(...segments)         // Concatène des segments de chemin
path.resolve(...segments)      // Résout en chemin absolu
path.basename(filePath)        // Nom du fichier
path.dirname(filePath)         // Répertoire parent
path.extname(filePath)         // Extension (.js, .txt, etc.)

## Exemple
const full = path.join(__dirname, "data", "test.txt");
