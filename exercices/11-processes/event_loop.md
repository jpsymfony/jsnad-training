### Énoncé

Modifiez le script précédent pour qu’il :

- Exécute une opération I/O simulée (par exemple lecture d’un fichier avec `fs.readFile`) avant d’enregistrer les trois callbacks.
- À l’intérieur du callback I/O, planifiez à nouveau `process.nextTick`, `setImmediate` et `setTimeout(..., 0)` pour afficher respectivement "NextTick après I/O", "setImmediate après I/O" et "setTimeout 0 après I/O".

Observez l’ordre d’exécution des callbacks "après I/O" par rapport aux autres.