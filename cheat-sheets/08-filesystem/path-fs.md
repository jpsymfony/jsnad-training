# Cheat Sheet : fs module

## Lecture de fichier
fs.readFile(path, encoding, callback)
fs.promises.readFile(path, encoding)

## Écriture
fs.writeFile(path, data, callback)
fs.appendFile(path, data, callback)

## Vérification existence
fs.access(path, fs.constants.F_OK, callback)

## Suppression
fs.unlink(path, callback)

## Création de dossier
fs.mkdir(path, { recursive: true }, callback)
