
---
## Read a line from stdin (user input)
```js
process.stdin.setEncoding("utf-8");
process.stdin.on("data", (data) => {
  console.log("Vous avez écrit :", data.trim());
  process.exit();
});

