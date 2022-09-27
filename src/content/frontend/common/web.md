# Le web c’est quoi ?

### Définition

**Internet** = réseau mondial, constitué lui même de réseaux privés, publiques, universitaires, …, sans centre nevralgique.

Pour accéder à internet, il est nécessaire de disposer d’une connexion, qui s’établit par l’intermédiaire d’un FAI (fournisseur d’accès internet).

Les données sont transmises via internet grâce à un ensemble standardisé de protocoles de transfert de données. 

L’envoi de données donne naissance à des applications variées, comme le courrier électronique, le web, la messagerie instantanée, le partage de fichier en pair-à-pair, le streaming, …

**Le web constitue donc une application d’internet.**

Le web, version abrégée de **World Wide Web** (Toile mondiale)

Le web est inventé en 1989 par Tim Berners-Lee, physicien au CERN (conseil européen pour la recherche nucléaire). Là où internet repose sur le protocole TCP/IP et sur un accès via un FAI, le web repose sur un **système hypertexte (http)** et nécessite un navigateur. Chrome, Firefox, Edge, Safari… Il existe de nombreux navigateurs, qui permettent de visiter des sites ou des pages web.

### Historique

Avant l’arrivée des moteurs de recherche, on naviguait principalement de sites en sites grâce aux liens hypertextes.

Un lien se démarque souvent visuellement du reste du texte, et peut aussi être une image, un bouton… En cliquant dessus, on change de page ou de site. Au fur et à mesure des clics, une « toile » de sites et de pages se tisse, d’où l’appellation Web.

## Fonctionnement

### Acteurs

**Client** = utilisateurs connectés sur internet (smartphone, ordinateur, …)

**Serveur** = ordinateurs qui stockent des pages webs, des images, des applications, …

Autres acteurs importants:

**Connexion internet** = permet l’envoi et la reception de données sur le web

**TCP (Transmission Control Protocol) /IP (Internet Protocol)** = protocoles qui definissent comment les données sont envoyées.

**DNS (Domain Name System)** = serveur de noms de domaine, c’est à dire un annuaire pour sites web. Lorsque vous saisissez une adresse dans le navigateur, ce dernier consulte le DNS pour trouver l'adresse réelle du site web avant de la récupérer. Le navigateur a besoin de savoir sur quel serveur le site web est situé pour pouvoir envoyer des requêtes HTTP au bon endroit.

**HTTP (HyperText Transfer Protocol)** = protocole de communication entre client et serveur.

L'un des concepts du protocole HTTP inclut l'idée que les fichiers peuvent contenir des références à d'autres fichiers (d'où la notion d'hypertexte) dont la sélection va solliciter d'autres demandes de transfert.

**Fichiers composants** = fichiers de code (html, css, js, …) + ressources (images, vidéos, …)

### Etapes

1. Lorsque vous saisissez une adresse web dans votre navigateur, le navigateur demande au DNS l'adresse réelle du serveur contenant le site web.
2. Le navigateur envoie une requête HTTP au serveur pour lui demander d'envoyer une copie du site web au client (vous allez au magasin et vous passez commande). Ce message, et les autres données envoyées entre le client et le serveur, sont échangés par l'intermédiaire de la connexion internet en utilisant TCP/IP.
3. si le serveur accepte la requête émise par le client, le serveur envoie un message « 200 OK » au client qui signifie : « Pas de problème, tu peux consulter ce site web, le voici ». Ensuite le serveur commence à envoyer les fichiers du site web au navigateur sous forme d'une série de petits morceaux nommés "paquet”
4. le navigateur assemble les différents morceaux pour recomposer le site web en entier puis l'affiche sur votre écran

## Les navigateurs

[Most Popular Web Browsers 1993 - 2020](https://www.youtube.com/watch?v=W4wWdmfOibY&ab_channel=CaptainGizmo)

Sur le plan technique, un navigateur est au minimum un client http**,** c’est-à-dire **un logiciel conçu pour se connecter à un serveur HTTP.**

Ce type de logiciel comprend un moteur de rendu des standards du web, une interface utilisateur et, éventuellement, un gestionnaire d'extensions/*plugins.*

[Remplir la page: comment fonctionnent les navigateurs - Web Performance | MDN](https://developer.mozilla.org/fr/docs/Web/Performance/How_browsers_work)

### Le moteur de rendu HTML

[Mieux connaître ses outils (N°1) - Le moteur de rendu HTML - UX-REPUBLIC](https://www.ux-republic.com/mieux-connaitre-ses-outils-n1-le-moteur-de-rendu-html/)

[Moteur de rendu HTML - Wikipédia](https://fr.wikipedia.org/wiki/Moteur_de_rendu_HTML)

**Définition d’un moteur de rendu**

*Un moteur de rendu est un logiciel qui va recréer une image à partir de données numériques. le terme est générique et s’applique à plusieurs types de programmes effectuant des tâches ou calculs plus ou moins simples.*

*Un moteur de rendu peut par exemple être chargé de construire une image 3D à partir d’informations sur les objets à dessiner, la texture de leur surface et les sources de lumière à prendre en compte.*

**Définition d’un moteur de rendu HTML**

Il transforme un document HTML, ainsi que toutes les autres ressources associées à la page, en une représentation visuelle interactive pour l'utilisateur.

**Chaque navigateur possède sa propre interprétation des langages HTML, Javascript et CSS. C’est d’ailleurs quelque chose qui nous pose régulièrement des soucis lors des phases d’intégration.**

Selon les cas, chaque moteur de rendu HTML est plus ou moins à jour sur les normes du W3C…. Ou plus ou moins buggé. Par exemple, le rendu des animations CSS3 n’est pas le même entre Firefox (qui tourne sous Gecko) et Chrome (qui tourne sous Blink/Webkit) : Le résultat est beaucoup plus fluide sur Chrome, alors qu’on obtient un rendu plutôt saccadé sur Firefox.

**Les principaux moteurs de rendus HTML:** 

- Gecko
- Trident
- Webkit

**Fonctionnement:**

1. le moteur de rendu va obtenir le contenu du document HTML que l’utilisateur souhaite afficher (il a cliqué sur un lien par exemple). Il va charger par morceaux de 8ko.
2. Le moteur de rendu va faire l’analyse du document HTML et il va construire l’**arbre de contenu** à partir des noeuds rencontrés dans le document. Chaque noeud correspond à chaque élément.
3. Il va analyser les données de style, contenues dans les fichiers CSS externes, mais aussi celles qui sont directement insérées dans le document HTML, les éléments de style. Ces informations seront utilisées pour créer un autre arbre.

L’**arbre de rendu** contient des rectangles avec des attributs visuels comme les couleurs et les dimensions. Les rectangles sont dans le bon ordre pour être affichés sur l’écran.

1. Après la construction de l’arbre de rendu, le moteur va obtenir les coordonnées exactes où il devra faire apparaitre les éléments à l’écran. Il va être ‘lu’ et chaque noeud sera dessiné en utilisant les couches d’arrière-plan de l’interface utilisateur.

### Full explications
[](https://web.developpez.com/tutoriels/web/how-browsers-work/#L3-1)