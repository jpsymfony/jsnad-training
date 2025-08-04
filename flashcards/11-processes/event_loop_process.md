### Question
Quelle est la différence entre “process.nextTick()”, “setImmediate()” et “setTimeout()” dans Node.js ?

### Réponse
- **“process.nextTick()”** : exécute une fonction **immédiatement après la phase actuelle**, avant toute E/S.
- **“setImmediate()”** : exécute une fonction **à la fin de la phase de poll**, donc après les opérations d’E/S.
- **“setTimeout()”** : exécute une fonction **après un délai minimum spécifié**, même si ce délai est “0”.

> À retenir : “process.nextTick()” est prioritaire sur “setImmediate()”, qui est lui-même plus prévisible que “setTimeout()” dans l’ordre d’exécution.