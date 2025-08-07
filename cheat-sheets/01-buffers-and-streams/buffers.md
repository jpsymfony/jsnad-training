
---

## Create a Buffer from a string
```js
const buf = Buffer.from("JSNAD rocks", "utf-8");


## Display the Buffer
```js
console.log(buf); // <Buffer ...>


## Convert Buffer back to string
```js
console.log(buf.toString("utf-8"));


## Création
- `Buffer.from("hello")` → depuis une chaîne
- `Buffer.alloc(10)` → buffer de 10 octets initialisés à 0
- `Buffer.allocUnsafe(10)` → buffer non initialisé (à éviter)

## Manipulation
- `buffer.length` → taille
- `buffer.toString()` → conversion en string
- `buffer.slice(start, end)` → sous-buffer
- `buffer.write("text", offset)` → écrire à une position

## Encodages
- `"utf-8"` (par défaut), `"hex"`, `"base64"`, `"ascii"`


# Cheat Sheet : Cas d’usage de Buffer

## Pour quoi utiliser Buffer ?
- Traitement binaire (fichiers, sockets, flux réseau)
- Encodage/décodage base64 ou hexadécimal
- Manipulation de données en mémoire sans conversion

## Astuces
- Toujours préférer `Buffer.from` ou `Buffer.alloc` pour éviter les erreurs de sécurité
- Pour les flux : les chunks reçus sont souvent des buffers
- Compatible avec `fs`, `crypto`, `net`, etc.
