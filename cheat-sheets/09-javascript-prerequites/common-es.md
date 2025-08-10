---
## Flashcard Node.js – Jour 12

### Question
Quelle est la différence entre un module CommonJS et un module ES dans Node.js ?

### Réponse
- **CommonJS** (CJS) utilise `require()` et `module.exports`. C’est le système historique de Node.js.
- **ES Modules** (ESM) utilise `import` et `export`. C’est le standard JavaScript moderne.
- Les CJS sont synchrones et s’exécutent immédiatement, les ESM sont asynchrones et ont un comportement strict (comme `strict mode`).

```js
// CommonJS
const fs = require("fs");
module.exports = { ... };
```

// ES Module
import fs from "fs";
export const foo = () => {};


# Cheat Sheet : CommonJS vs ES Modules

## CommonJS
- Import : `const x = require("./x")`
- Export : `module.exports = ...`
- Fichiers : `.js` (par défaut)
- Chargement : synchrone

## ES Modules
- Import : `import x from "./x.js"`
- Export : `export default ...` ou `export const`
- Fichiers : `.mjs` ou `.js` avec `"type": "module"`
- Chargement : asynchrone

## Interopérabilité
- `import()` dynamique pour charger des modules CJS/ESM
