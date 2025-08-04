const fs = require("fs");

console.log("Phase principale avant I/O");

fs.readFile(__filename, "utf-8", () => {
    console.log("Callback I/O exécuté");

    process.nextTick(() => {
        console.log("NextTick après I/O");
    });

    setImmediate(() => {
        console.log("setImmediate après I/O");
    });

    setTimeout(() => {
        console.log("setTimeout 0 après I/O");
    }, 0);
});

process.nextTick(() => {
    console.log("NextTick principal");
});

setImmediate(() => {
    console.log("setImmediate principal");
});

setTimeout(() => {
    console.log("setTimeout 0 principal");
}, 0);
