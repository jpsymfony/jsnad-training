### Question
Explique la différence entre `require()` et `import` en Node.js, et indique dans quel contexte chacun est utilisé.

### Réponse
- `require()` est la méthode traditionnelle de chargement de modules CommonJS. Synchrone, largement utilisée avant ES Modules.
- `import` fait partie du standard ES Modules (ESM), asynchrone, plus moderne. Utilisé avec `"type": "module"` dans `package.json` ou `.mjs`.
> À retenir: `require()` pour CommonJS, `import` pour ESM. Les deux ne sont pas directement interchangeables sans configuration.

---