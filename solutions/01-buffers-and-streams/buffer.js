const buf = Buffer.from("JSNAD rocks", "utf-8");
console.log(buf);
console.log(buf.toString("utf-8"));

const buffer = Buffer.from("Node");

for (const byte of buffer) {
    console.log(String.fromCharCode(byte), "-", byte);
}
// Affiche :
// N - 78
// o - 111
// d - 100
// e - 101


const bufferAlloc = Buffer.alloc(10, 42);
console.log(bufferAlloc);         // <Buffer 2a 2a 2a 2a 2a 2a 2a 2a 2a 2a>
console.log(bufferAlloc.toString("hex")); // 2a2a2a2a2a2a2a2a2a2a
