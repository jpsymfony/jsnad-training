# Cheat Sheet : Node.js Modules

## CommonJS (par défaut)
- `module.exports = value` ou `exports.foo = ...`
- `const x = require('./x.js')`

## ES Modules (ESM)
- `export default value`
- `export function foo() { }`
- `import foo from './x.mjs'`
- `import { foo } from './x.mjs'`
- Activation : `"type": "module"` dans `package.json` ou extension `.mjs`

## Interop entre CJS et ESM
- `import pkg from './cjs.js'` → `pkg.default` ou `pkg.foo`
- `const { foo } = require('./esm.js')` (possible via loader)

## Astuces
- `__dirname` et `__filename` non disponibles en ESM : utilisez `import.meta.url`
- Utilisez `dynamic import()` pour charger dynamiquement un module ESM.
