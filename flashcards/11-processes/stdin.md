---

## How do you read a line from stdin and print it in Node.js?
**A**:
```js
process.stdin.setEncoding("utf-8");
process.stdin.on("data", (data) => {
console.log("Vous avez écrit :", data.trim());
process.exit();
});