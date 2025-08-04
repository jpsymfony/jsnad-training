process.stdin.setEncoding("utf-8");
console.log("Veuillez écrire quelque chose puis appuyer sur Entrée :");

process.stdin.on("data", (data) => {
    // data contient un retour à la ligne à la fin, on le retire avec trim()
    console.log("Vous avez écrit :", data.trim());
    process.exit();
});
