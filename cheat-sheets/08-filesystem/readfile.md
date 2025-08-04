# fs module

## Lire un fichier
```js
fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log(data);
});
