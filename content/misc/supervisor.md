---
title: 'Supervisor'
---

# Supervisor

(Notion de socket/pid)

Supervisor est un petit outil codé en Python et permettant d'assurer le suivi et le contrôle de services/processus applicatifs sur des systèmes de type UNIX.
On peut le comparer à launchd (utilisé par OSX) ou runit. (mettre des liens)
Attention toutefois il n'est pas destiné à remplacer le process init des systèmes UNIX. (process init c'est quoi ?)
Il est par contre le parfait allié pour lancer et suivre des services applicatifs liés à un projet et qui doivent être démarrés et disponibles en permanence.

Supervisor est disponible en paquet Debian en version 3.0, l'installation est donc très facile :
`apt-get install supervisor`

Supervisor est divisé en deux composants différents:
### Supervisord
Supervisord est la partie qui a la responsabilité de démarrer les services configurés et de les redémarrer en cas de crash. Il est configurable via le fichier /etc/supervisor/supervisord.conf

### Supervisorctl
Supervisorctl est le client permettant d'administrer les services gérés par supervisor. Il est capable de se connecter à plusieurs démons supervisord et permet de démarrer / arrêter des services. Il est possible de les faire fonctionner soit via une socket soit via TCP. Il est également possible de gérer une authentification lors de la connexion au démon.

### Exemples
#### Ajouter un service à supervisor
Pour ajouter un service à supervisor il suffit de le déclarer en ajoutant un fichier dans /etc/supervisor/conf.d

```
[program:blogd]
command=node node_modules/bin/blogd

directory=/srv/my_project

autostart=true
autorestart=true
startretries=20
numprocs=1
stdout_logfile=/var/log/blogd.log
redirect_stderr=true
```

Il faut ensuite redémarrer le supervisor pour appliquer les changements.

On peut également redémarrer un service, ou bien parcourir les logs.
Il y a également une interface web disponible activable via la section [inet_http_server]

## Capistrano
Capistrano est un outil qui permet d'automatiser des tâches serveur, mais surtout de déployer simplement des applications. Même si il est développé en Ruby il est tout à fait possible de l'utiliser pour déployer des applications qui n'utilisent pas ce langage.

## PM2