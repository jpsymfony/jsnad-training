---

## How do you create a Buffer from a string and print both the buffer and the original string in Node.js?
**A**:
```js
const buf = Buffer.from("JSNAD rocks", "utf-8");
console.log(buf);
console.log(buf.toString("utf-8"));
