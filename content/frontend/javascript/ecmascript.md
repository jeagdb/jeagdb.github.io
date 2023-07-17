---
title: 'Ecma script'
---

**ECMAScript** est un ensemble de normes concernant les langages de programmation de type script et standardisées par Ecma International.
Cette norme a été développée afin de standardiser la manière dont le code script est écrit et interprété par les navigateurs web et d'autres environnements d'exécution. 
Javascript est probablement l'implémentation la plus connue de la norme ECMAScript.

### Histoire
ECMAScript a été créé en 1997 par l'organisation ECMA International (European Computer Manufacturers Association) pour standardiser Javascript, qui avait été initialement développé par Netscape. 

**L'idée était de garantir que le langage de script pourrait être utilisé sur toutes les plates-formes et navigateurs.**

Depuis lors, ECMAScript a vu plusieurs mises à jour majeures qui ont ajouté de nouvelles fonctionnalités et améliorations. 
Parmi les plus notables, on peut citer ECMAScript 5 (ES5), publié en 2009, qui a introduit des fonctionnalités importantes comme le support des "strict mode" ainsi que des méthodes d'Array plus fonctionnelles, comme map, reduce et filter.

ECMAScript 6 (ES6 ou ECMAScript 2015), a apporté des améliorations significatives, notamment les classes, les modules, les promesses, les flèches fonctions, et bien d'autres.

Les versions ultérieures (ES2016 à ES2021) ont continué à ajouter des fonctionnalités et des améliorations, comme l'opérateur exponentiel (**), async/await, Object.entries, Array.prototype.flat, ...

### Transpilateur Babel
Imaginons que tous les navigateurs supportent ES5, mais pas toutes les fonctionnalités de ES6.
On peut utiliser un **transpiler**, pour convertir le code ES6 en code ES5, et donc être compatible avec les navigateurs.

Exemple:
```
(ES6) const square = (x) => x * x;
(ES5) var square = function (x) { return x * x; };
```

**Babel** est un exemple populaire de transpileur. Il est largement utilisé dans le développement javascript pour convertir le code js moderne (ES6+) en une version qui est compatible avec les navigateurs plus anciens.

Pour utiliser babel, il faut d'abord le configurer pour lui indiquer comment transpiler le code du projet. Cela se fait via le fichier `.babelrc`.
On peut ensuite générer le code transpiler via ligne de commande (ex: `npx babel file.js --out-file transpiled-file.js`).

### Polyfills
Un polyfill est un morceau de code utilisé pour fournir des fonctionnalités modernes sur des navigateurs plus anciens qui ne les supportent pas nativement.

Par exemple, un projet utilise la méthode Array.prototype.includes, qui n'est pas supportée par certains navigateurs plus anciens. On peut écrire un polyfill qui vérifie si cette méthode existe, et si elle n'existe pas, ajoute cette méthode à l'objet prototype Array.

En ajoutant des configurations appropriées au fichier .babelrc, Babel peut insérer automatiquement les polyfills nécessaires pour les fonctionnalités qui ne sont pas supportées par les navigateurs cibles.