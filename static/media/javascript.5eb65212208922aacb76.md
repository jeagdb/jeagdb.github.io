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

## JS compilé ou interprété ? (voir moteur V8)

[https://blog.octo.com/dans-les-entrailles-de-javascript-partie-1/](https://blog.octo.com/dans-les-entrailles-de-javascript-partie-1/) (précisions à retravailler)

Wikipédia: “c’est un **langage interprété** : le code est exécuté de haut en bas et le résultat du code exécuté est envoyé immédiatement. Vous n'avez pas à transformer le code en une autre forme avant que le navigateur ne l'exécute.”

Malgré le fait que le Javascript soit considéré dans l’imaginaire collectif comme un langage dynamique... Javascript est en fait un langage compilé !

Effectivement, Javascript n’est pas compilé autant à l’avance que des langages plus classiques comme le Java ****ou le **.**NET ****par exemple. Mais, il n’en reste pas moins que le moteur JS réalise quasiment les mêmes étapes (si ce n’est plus) que lors d’une compilation d’un langage compilé classique.

Liens supplémentaires intéressants:

[https://jayconrod.com/posts/54/a-tour-of-v8-crankshaft-the-optimizing-compiler](https://jayconrod.com/posts/54/a-tour-of-v8-crankshaft-the-optimizing-compiler)

**Le plus grand enjeu de la compilation du Javascript vient du fait qu’elle se fait immédiatement avant l’exécution.**

Elle n’a pas la chance d’avoir tout le temps qu’il lui faut pour build un exécutable type jar ou dll, qui lui permettrait d’optimiser tout au maximum.

---

## ECMAScript

**ECMAScript** est un ensemble de normes concernant les langages de programmation de type script et standardisées par Ecma International dans le cadre de la spécification ECMA-262. Il s'agit donc d'un standard, dont les spécifications sont mises en œuvre dans différents langages de script, comme JavaScript ou Jscript.

### C’est quoi Babel et à quoi ça sert ?

Imaginons que tous les navigateurs supportent ES5, mais pas toutes les fonctionnalités de ES6.
On peut utiliser un **transpiler** - abréviation Transforming + Compiler - comme Babel, pour convertir le code ES6 en code ES5, et donc être compatible avec les navigateurs.

Un transpiler incluent parfois aussi des **Polyfills.** Il s’agit d’un petit morceau de code créé pour simuler une ****API ****présente dans la langue source, mais pas dans la langue cible. Par exemple, vous utilisez ****ES6 pour écrire une application et utilisez une fonction "X" qui est disponible dans ****ES6 mais pas dans ****ES5: vous avez donc besoin d'un petit morceau de code ES5 ****pour simuler la fonction "X" avec la fonctionnalité équivalente.

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

## NPM

Lecture intéressante: [https://news.ycombinator.com/item?id=29245080](https://news.ycombinator.com/item?id=29245080)

Npm c’est le plus grand gestionnaire de paquet au monde (actuellement).

Npm consiste en 3 parties:

- le site web, pour parcourir les différents packages disponibles, gérer son compte, mettre en place des organisations pour gérer l’accès à des packages en mode privé, …
- la CLI, où la plupart des développeurs interagissent avec npm
- le registre, une base de donnée publique de programmes javascript + des métas informations à leur propos.

Il existe également des registres npm privés tels que github packages

### Use npm to…

- Adapt packages of code for your apps, or incorporate packages as they are.
- Download standalone tools you can use right away.
- Run packages without downloading using [npx](https://www.npmjs.com/package/npx).
- Share code with any npm user, anywhere.
- Restrict code to specific developers.
- Create organizations to coordinate package maintenance, coding, and developers.
- Form virtual teams by using organizations.
- Manage multiple versions of code and code dependencies.
- Update applications easily when underlying code is updated.
- Discover multiple ways to solve the same puzzle.
- Find other developers who are working on similar problems and projects.

To resolve packages by name and version, npm talks to a registry website that implements the CommonJS Package Registry specification for reading package info.

npm is configured to use the **npm public registry** at [https://registry.npmjs.org](https://registry.npmjs.org/) by default. Use of the npm public registry is subject to terms of use available at [https://docs.npmjs.com/policies/terms](https://docs.npmjs.com/policies/terms).

You can configure npm to use any compatible registry you like, and even run your own registry. Use of someone else's registry may be governed by their terms of use.

npm's package registry implementation supports several write APIs as well, to allow for publishing packages and managing user account information.

The npm public registry is powered by a CouchDB database, of which there is a public mirror at [https://skimdb.npmjs.com/registry](https://skimdb.npmjs.com/registry).

The registry URL used is determined by the scope of the package (see `[scope](https://docs.npmjs.com/cli/v8/using-npm/scope)`. If no scope is specified, the default registry is used, which is supplied by the `registry` config parameter. See `[npm config](https://docs.npmjs.com/cli/v8/commands/npm-config)`, `[npmrc](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc)`, and `[config](https://docs.npmjs.com/cli/v8/using-npm/config)` for more on managing npm's configuration.

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