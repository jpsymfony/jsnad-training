### Question
Qu’est-ce que la boucle d’événements (“event loop”) dans Node.js, et pourquoi est-elle essentielle ?

### Réponse
La boucle d’événements est le mécanisme central qui permet à Node.js de gérer des opérations asynchrones non bloquantes. Elle surveille une file d’attente d’événements et exécute les callbacks associés.

**Phases clés :**
```text
- Timers (setTimeout, setInterval)
- Pending callbacks
- Idle, prepare
- Poll (I/O)
- Check (setImmediate)
- Close callbacks
Grâce à l’event loop, Node.js peut gérer des milliers de connexions simultanément sans bloquer le thread principal.


Ordre d’affichage attendu :

Phase principale avant I/O
NextTick principal
setImmediate principal
setTimeout 0 principal
Callback I/O exécuté
NextTick après I/O
setImmediate après I/O
setTimeout 0 après I/O