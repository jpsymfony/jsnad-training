# Cheat Sheet : package.json et modules

## Basculer en mode ESM
```json
{
  "type": "module"
}
```

## Combinaisons valides
- `.js` + `"type": "module"` → **ESM**
- `.js` sans `"type"` → **CommonJS**
- `.cjs` → **CommonJS** forcé
- `.mjs` → **ESM** forcé

## Astuce
Pour rester compatible avec l’écosystème Node.js, utilisez **CommonJS** sauf si **ESM** est nécessaire.
