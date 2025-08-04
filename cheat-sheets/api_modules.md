# Cheat Sheet : Fonctions utiles des modules Node.js

## Module `fs`
- `fs.readFile(path, encoding, callback)`
- `fs.promises.readFile(path, encoding)` → version basée sur promesses
- `fs.writeFile(path, data, callback)` et `fs.promises.writeFile`

## Module `path`
- `path.join(...)` pour concaténer en toute sécurité
- `path.resolve(...)` pour obtenir un chemin absolu
- `path.basename()`, `path.dirname()`, `path.extname()`

## Module `os`
- `os.platform()`, `os.cpus()`, `os.uptime()`

## Module `http`
- `http.createServer((req, res) => { ... }).listen(port)`
- `res.writeHead(status, headers)`, `res.end(body)`

## Import des promesses
- `const fs = require('fs').promises;`
- `const { readFile, writeFile } = require('fs').promises;`
