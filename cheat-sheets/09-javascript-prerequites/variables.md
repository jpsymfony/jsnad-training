
---

## 📘 Meilleures pratiques de portée

```markdown
# Cheat Sheet : Portée des variables en Node.js

## Par défaut
- Chaque fichier est un module isolé
- Les variables définies avec `const`, `let`, `var` ne sont **pas** globales

## Pour partager
- Utiliser `module.exports` / `exports`
- OU (à éviter) ajouter à `global`

## Exemple conseillé
```js
// user.js
module.exports = { name: "Anas" };

// main.js
const user = require("./user");
console.log(user.name);
