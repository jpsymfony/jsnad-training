#### Énoncé
Crée un fichier `notifier.js` contenant une classe `Notifier` qui hérite de `EventEmitter`.  
Ajoute une méthode `send(notification)` qui émet un événement `"notify"`.  
Crée un script principal qui instancie `Notifier`, écoute `"notify"` et affiche le message.