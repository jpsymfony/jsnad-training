---

## How do you retrieve command-line arguments in Node.js and print them one per line (excluding the first two)?
**A**:
```js
process.argv.slice(2).forEach(arg => {
  console.log(arg);
});
