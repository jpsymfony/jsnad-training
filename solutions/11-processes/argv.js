// On récupère les arguments (process.argv est un tableau)
// Les deux premiers éléments sont inutiles, on les enlève avec slice(2)
process.argv.slice(2).forEach(arg => {
    console.log(arg);
});
