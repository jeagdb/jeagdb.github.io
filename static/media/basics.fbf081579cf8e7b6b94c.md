## Docker-compose

Docker Compose est un outil qui permet de décrire (yml) et de gérer en ligne de commande plusieurs conteneurs comme un ensemble de services inter-connectés.

*Exemple* - Description d'un ensemble composé de 3 conteneurs :

- un conteneur [PostgreSQL](https://hub.docker.com/_/postgres/)
- un conteneur [Redis](https://hub.docker.com/_/redis/)
- un conteneur pour le code de mon application.**

Je pourrai alors démarrer mon ensemble de conteneurs en une commande **docker-compose up**. Sans Docker Compose, j’aurais dû lancer 3 commandes **docker run** avec beaucoup d’arguments pour arriver au même résultat.

## Dockerfile

Un Dockerfile est un fichier qui liste les instructions à exécuter pour build une image.

Il est lu de haut en bas au cours du processus de build.