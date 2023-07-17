---
title: 'Javascript'
---

# Javascript

## Un peu d’histoire

[L'histoire des frameworks js](https://frontendmastery.com/posts/the-new-wave-of-javascript-web-frameworks/)

---

## C’est quoi ?

Javascript c’est un **langage de programmation de scripts** principalement employé dans les pages web interactives.

Avec les langages HTML et CSS, js est au cœur des langages utilisés par les développeurs web.

Une grande majorité des sites web l'utilisent, et la majorité des navigateurs web disposent d'un moteur JS pour l'interpréter.

JavaScript est aussi employé pour les serveurs Web avec l'utilisation (par exemple) de Node.js ou de Deno.

JS est un **langage orienté objet à prototype**: les bases du langage et ses principales interfaces
sont fournies par des objets. Cependant, à la différence d'un langage orienté objets, les objets de base ne sont pas des instances de classes. En outre, les fonctions sont des objets de première classe. **Le langage supporte le paradigme objet, impératif et fonctionnel.**

JS est le langage possédant le plus large écosystème grâce à son gestionnaire de dépendances npm.

En JS, *toutes* les expressions (identifiants, littéraux et opérateurs et leurs opérandes) sont de type **référence**: c'est-à-dire que leur évaluation produit une donnée directement. (comme en Python, ruby)

---

## JS compilé ou interprété ?

[Qu'est ce qu'un langage interprété ?]()
[Qu'est ce qu'un langage compilé ?]()

JavaScript est souvent décrit comme un langage interprété, car dans sa forme traditionnelle le code est traité ligne par ligne à la volée, au moment de son exécution, plutôt que d'être pré-compilé en byte-code ou en code machine avant son exécution. 

Dans les navigateurs modernes, javascript est en fait compilé juste avant son exécution pour améliorer les performances. Le moteur V8 de Google Chrome, compile le js en code machine avant de l'exécuter, grâce à un processus appelé Just-In-Time (JIT) compilation.

[JIT]() est un compromis entre l'interprétation et la compilation traditionnelle. L'idée est de compiler le code au moment de son exécution pour profiter des avantages de la compilation (comme l'optimisation de la performance) sans avoir à attendre que tout le programme soit compilé avant de commencer à l'exécuter.

En conséquence, dire que javascript est un langage compilé n'est pas tout à fait correct dans le sens traditionnel du terme, mais c'est plus précis que de dire qu'il est uniquement interprété. 

**Il est plus exact de dire que javascript est compilé et exécuté au moment de l'exécution.**

Les moteurs js modernes, comme V8, vont même plus loin en utilisant ce que l'on appelle l'optimisation à chaud, où ils surveillent l'exécution du code compilé et repèrent les parties du code qui sont fréquemment exécutées. Ces parties "chaudes" du code sont alors recompilées avec des optimisations supplémentaires pour rendre l'exécution encore plus rapide.

[https://jayconrod.com/posts/54/a-tour-of-v8-crankshaft-the-optimizing-compiler](https://jayconrod.com/posts/54/a-tour-of-v8-crankshaft-the-optimizing-compiler)

---

## Langage orienté objet à prototype

La **programmation orientée prototype** est une forme de programmation orientée objet sans classe, fondée sur la notion de prototype. Un **prototype** est un objet à partir duquel on crée de nouveaux objets.

Un des intérêts majeurs des prototypes est l'héritage dynamique : tout objet peut changer de parent à l'exécution, n'importe quand.

On peut matérialiser les paradigmes objet à prototypes et objet à classes en constatant la différence d'utilisation de la mémoire.

**Objets à classes :**

- Une classe définie par son code source est statique ;
- Elle représente une définition abstraite de l'objet ;
- Tout objet est instance d'une classe ;
- L'héritage se situe au niveau des classes.

**Objets à prototypes :**

- Un prototype défini par son code source est mutable ;
- Il est lui-même un objet au même titre que les autres ;
- Il a donc une existence physique en mémoire ;
- Il peut être modifié, appelé ;
- Il est obligatoirement nommé ;
- Un prototype peut être vu comme un exemplaire modèle d'une famille d'objet ;
- Un objet hérite des propriétés (valeurs et méthodes) de son prototype.

---

## JQuery

Bibliothèque javascript des années 2010, utilisée notamment dans wordpress.

---

## Ajax (Asynchronous javascript and xml)

C’est un ensemble de techniques client-side pour créer des applications asynchrones.

En pratique, aujourd’hui les nouvelles implémentations utilisent plus du JSON que du XML.

Avec Ajax, les apps webs peut envoyer et récupérer de la donnée de manière asynchrone, sans interférer/bloquer l’affichage et le comportement d’une page.

En découplant la couche “data interchange” et la couche “presentation”, Ajax permet aux pages de changer le contenu dynamiquement sans reload la page entièrement.

**Ajax c’est un concept de programmation.** Il ne s’agit pas d’une nouvelle technologie, mais d’une nouvelle façon d’utiliser les outils à disposition.

exemple d’outil: l’objet built-in XHR (xml http request)

### XHR

Api sous la forme d’un objet, dont les méthodes permette le transfert de données entre une page web et un serveur web.

Cet objet est fourni par l’environnement javascript du navigateur.

La récupération de données par XHR, dans le but de modifier dynamiquement une page web déjà chargée est un concept du design Ajax.

---

## Json (Javascript object notation)

JavaScript Object Notation (JSON) est un format de données textuelles dérivé de la notation des objets du langage JavaScript. Il permet de représenter de l’information structurée comme le XML.