
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

