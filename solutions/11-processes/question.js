const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ton année de naissance ? ", (year) => {
    const age = new Date().getFullYear() - parseInt(year);
    console.log(`Tu as environ ${age} ans.`);
    rl.close();
});

const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl2.question("Quel est ton prénom ? ", (name) => {
    rl2.question("Quelle est ta couleur préférée ? ", (color) => {
        console.log(`Salut ${name}, ta couleur préférée est ${color}.`);
        rl2.close();
    });
});
