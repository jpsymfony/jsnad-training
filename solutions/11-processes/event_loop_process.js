console.log("Phase principale"); // 1

process.nextTick(() => {
    console.log("NextTick exécuté"); // 3
});

setTimeout(() => {
    console.log("setTimeout 0"); // 5
}, 0);

setImmediate(() => {
    console.log("setImmediate exécuté"); // 4
});

console.log("Fin du script"); // 2