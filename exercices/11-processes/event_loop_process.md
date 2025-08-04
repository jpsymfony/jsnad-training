### Énoncé
Écrivez un petit script Node.js qui :
    1. Affiche « Phase principale » dès le démarrage.
2. Planifie trois callbacks :
    - Un via `process.nextTick` qui affiche « NextTick exécuté ».
- Un via `setTimeout(..., 0)` qui affiche « setTimeout 0 ».
- Un via `setImmediate` qui affiche « setImmediate exécuté ».
3. Affiche « Fin du script » juste après l’enregistrement des callbacks.

    Observez et notez dans quel ordre les quatre messages apparaissent.
