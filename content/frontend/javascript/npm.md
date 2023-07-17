---
title: 'NPM'
---

# NPM
npm (Node Package Manager) est une plateforme de gestion de [paquets]() pour javascript.

# Utilisations
- Installation de paquets javascript: 
npm permet d'installer facilement des paquets de code existants.

- Partage de paquets javascript: 
npm permet de publier ses packages pour les partager avec d'autres utilisateurs, qui pourront les intégrer dans leurs projets.

- Gestion des dépendances de projet: 
npm permet d'aider à gérer les dépendances de projet. Les dépendances sont les paquets dont un projet a besoin pour fonctionner correctement.
npm tient à jour une liste des dépendances de chaque projet et s'assure qu'elles sont toutes installées et à jour.

- Exécution de scripts: 
npm permet d'exécuter des scripts.
Les scripts npm peuvent être utilisés pour automatiser des tâches de développement courantes, comme la mise à jour des dépendances ou le démarrage d'un serveur de développement.

# Fonctionnement
npm fonctionne principalement à travers une interface de ligne de commande (CLI).

Lors de l'installation de npm (généralement installé avec [Node.js](), plateforme d'exécution JavaScript), on installe également la CLI appelée npm.

Pour utiliser npm, on écrit `npm` suivi de la commande que l'on veut exécuter. 

Exemple pour installer un package: `$ npm install <nom-du-paquet>`. 
npm se connecte alors à la base de données en ligne de npm, télécharge le paquet et l'installe sur l'ordinateur.

Lorsqu'on utilise npm pour gérer les dépendances d'un projet, npm utilise un fichier spécial appelé `package.json` pour garder une trace des dépendances. 

Ce fichier liste tous les paquets dont le projet a besoin, ainsi que la version spécifique de chaque paquet. Ainsi, lorsqu'une personne décide d'installer le projet, npm peut se référer à ce fichier package.json, télécharger et installer automatiquement tous les paquets nécessaires au bon fonctionnement du projet.

**En somme, npm est un outil qui simplifie le processus d'installation, de partage et de gestion des paquets de code javascript.**

# Node_modules
npm crée un dossier `node_modules` dès lors qu'un paquet est installé sur un projet. Ce dossier stocke les packages installés (avec leurs dépendances).

# Inconvénients
- Gestion des dépendances: un paquet peut avoir ses propres dépendances, qui peuvent à leur tour avoir leurs propres dépendances. Si 2 paquets dépendent de versions différentes du même paquet, on peut avoir des conflits.
La gestion de ces dépendances peut donc devenir complexe, notamment sur de gros projets.

- Qualité des paquets: un paquet dépend du/des développeurs derrière lui. Il faut faire attention à utiliser des paquets de qualité, et maintenus. 
On peut avoir des problèmes si on utilise des paquets non maintenus: 
  - sécurité: ca si une vulnérabilité est découverte, elle ne sera pas corrigée.
  - compatibilité: au fur et à mesure des montées de versions des langages, paquets, etc, le paquet non maintenu peut devenir non compatible. Il pourra être alors difficile de mettre à jour d'autres aspects du projet.
  - bugs: si un bug/pb de performance est découvert sur le paquet, il ne sera pas corrigé.
  - support: pas de support si problème ou question. 

- Sécurité: un paquet dépend du/des développeurs derrière lui. Un paquet peut donc contenir du code malveillant (attaque système, vol infos, ...).

- Taille du node_modules: npm crée un dossier `node_modules` qui stocke les packages installés (avec leurs propres packages de dépendances, ...). Ce dossier peut donc vite devenir très volumineux surtout si ces packages ont eux aussi beaucoup de dépendances. Cela peut devenir problématique pour le stockage, la sauvegarde, ou le déploiement du projet.