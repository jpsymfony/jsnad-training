const [a, op, b] = process.argv.slice(2);
const numA = parseFloat(a);
const numB = parseFloat(b);

let result;
switch (op) {
    case "+": result = numA + numB; break;
    case "-": result = numA - numB; break;
    case "*": result = numA * numB; break;
    case "/": result = numA / numB; break;
    default: result = "Operateur invalide";
}

console.log("Resultat :", result);