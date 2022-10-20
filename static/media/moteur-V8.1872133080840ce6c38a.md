# Moteur v8

Moteur de Google, utilisé dans Google Chrome et NodeJS.

Le moteur est composé de 2 composants principaux :

- **Memory Heap** : sert à allouer la mémoire utilisée dans le programme.
- **Call Stack (pile d’exécution)** : contient les données des fonctions exécutées par le programme.

Des **APIs** situées en dehors du moteur sont également à la disposition du développeur.

La plupart sont souvent utilisées, tel que DOM ou setTimeout, et c’est également ici que nous avons les fameuses **callback queue** ainsi que **event loop**.

JavaScript étant **single-threaded**, cela veut dire qu’il n’y a qu’une seule pile d’exécution, nous ne pouvons donc faire **qu’une chose à la fois**.

La pile d’exécution est une structure de données qui enregistre où nous en sommes dans le programme.Si nous entrons dans une fonction, nous la mettons en haut de la pile.Si nous revenons d’une fonction, nous l’enlevons du haut de la pile.

![v8-callstack.png](/images/v8-callstack.png)

Avoir qu’une seule pile d’exécution peut être pratique, car cela enlève tous les problèmes engendrés par le multithreading.

Cependant, exécuter un programme sur 1 seul thread a aussi un très gros inconvénient : tout est bloqué quand une tache est longue !

Alors que se passe-t-il quand une fonction dans la pile d’exécution prend énormément de temps à finir, par exemple, pour un traitement d’images dans votre navigateur ? Tout se bloque, de l’UI de votre page internet jusqu’au navigateur en lui-même.

En effet, votre navigateur va essayer de rafraîchir la page toute les **1/60 secondes**, et ne peut le faire que si la pile est vide.Si une de vos fonctions prend du temps, c’est la réactivité de votre site web qui en prendra un coup.

La solution qui nous est proposée (et que vous utilisez sans doute sans modération) est l’asynchrone, avec la **callback queue** et **event loop**.

---

## **La compilation JavaScript dans les grandes lignes**

1. **Tokenizing** : décomposer les chaines de caractères en des morceaux, appelés tokens, qui ont un sens pour le compilateur. Prenons le programme suivant : `var a = 1`; Lors de cette étape, les tokens suivants seront générés : `var`, `a`, `=`, `1`, `;`.
2. **Parsing**: transformer le tableau de tokens généré précédemment en un arbre d’éléments imbriqués, il représente la structure du programme. (AST)
3. **Code-Generation** : prend l’AST et le transforme en code exécutable.

Les 3 acteurs:

1. **Moteur** : il s’occupe de tout, de la compilation à l’exécution de notre programme JS.
2. **Compilateur** : il s’occupe de la compilation du programme.
3. **Scope** : collecte et garde une liste des variables déclarées.

Exemple `var a = 1;`

Le moteur voit 1 action effectuée au moment de la compilation, et 1 autre, au moment de l’exécution. (En dehors de la tokenisation)

Décomposons :

- A l’encontre de `var a`, le Compilateur demande au Scope de regarder si la variable `a` existe déjà dans le scope en question.Si oui, le Compilateur ne fait rien et continue.Si non, le Compilateur demande à Scope de déclarer la variable `a` dans le scope en question.
- Le Compilateur génère le code pour `a = 1` qui sera exécuté par le Moteur plus tard : Le Moteur demandera au Scope si `a` existe.Si oui, il utilisera cette variable.Si non, une erreur sera renvoyée.Pour résumer, 2 actions peuvent être distinguées lors de l’assignation d’une variable : lors de la compilation, le Compilateur déclare la variable (si elle n’existe pas déjà), et dans un deuxième temps, lors de l’exécution, le Moteur demande la variable à Scope, et lui assigne la valeur.

On a 2 types de recherche: **LHS** et **RHS** (Left/Right Hand Side).

RHS: `console.log(a);` (ici on veut connaitre la valeur a)

LHS: `var a = 1;` (ici on n’est pas intéressé par la valeur de `a`. On veut simplement son conteneur pour lui assigner la valeur 2.)

Exemple:

```
function foo(a) {
    var b = a;
    return a + b;
}
var c = foo(2);

```

Il y a ici 3 **LHS** et 4 **RHS**.

**LHS** :

- c = .. (Récupération du conteneur c)
- a = 2 (Assignement implicite au paramètre de la fonction foo)
- b = .. (Récupération du conteneur b)

**RHS** :

- foo(2) (Récupération de la valeur de c)
- .. = a (Récupération de la valeur de a)
- a + .. (Récupération de la valeur de a)
- .. + b (Récupération de la valeur de b)

Scope: on disait jusqu’à maintenant que le Scope gardait une liste des variables déclarées. Seulement, il peut y avoir plusieurs Scopes.

De la même manière que les fonctions, les Scopes sont imbriqués les uns dans les autres. 

Si une variable ne peut pas être trouvée dans le scope immédiat, le Moteur consulte le scope du « dessus ».

Tant qu’il ne trouve pas la variable, il continue à remonter jusque tout en haut (scope dit « global »).

---

## Callback queue + Event loop

Le Javascript étant un langage single-thread ****dans un univers du Web où la réactivité est importante, les APIs WEB ****ont pensé à une solution afin d’ajouter une composante asynchrone au langage : callback queue et event loop.

le moteur de Javascript ne peut pas effectuer plusieurs actions en même temps, mais les APIs WEB ****le peuvent. On peut donc les imaginer comme des threads à part entière.

Seulement, les ****APIs WEB ne peuvent pas modifier l’ordre d’exécution du code en ajoutant des éléments dans la stack. C’est pour cela que callback queue et event loop ****ont été créées.

Il s’agit d’une sorte de « file d’attente », qui permet d’effectuer des traitements sans bloquer la pile d’exécution JS.

Le rôle de event loop est tout simple : déplacer les éléments de la callback queue dans la pile d’exécution JS ****lorsque cette dernière est vide.

![v8-eventloop.gif](/images/v8-eventloop.gif)

Attention: au même titre que la pile d’exécution JS, il n’existe qu’une seule callback queue. 

Énormément d’appels peuvent délayer tous vos autres traitements asynchrones, ce qui peut donner un effet de ralentissement.

Exemple:

```
console.log(’hi’);

setTimeout(function cb(){
    console.log(’there’)
}, 0);

console.log(’JSConfEU’);
```

On aura ici: hi - JSConfEU - there

même si le `setTimeout` se termine immédiatement, **event loop** doit attendre que la stack soit vide avant de pouvoir y mettre les éléments de **callback queue**. `there`sera donc affiché en dernier, même s’il termine avant le `console.log(’JSConfEU’)`.

Outil sympa: [http://latentflip.com/loupe/](http://latentflip.com/loupe/)

Sources

[https://fr.wikipedia.org/wiki/Moteur_V8](https://fr.wikipedia.org/wiki/Moteur_V8)

[https://www.axopen.com/blog/2020/08/javascript-callback-queue-event-loop/](https://www.axopen.com/blog/2020/08/javascript-langage-compile/)