**React** est une bibliothèque JavaScript pour la construction d’interfaces utilisateur (UI).

---

## JSX

C’est une extension syntaxique de JavaScript qui permet de décrire à quoi devrait ressembler l’interface utilisateur. C’est un peu un mix entre un langage de balisage et de javascript.

JSX produit des « éléments » React qui seront ensuite retranscrit dans le DOM.

Le fonctionnement d’une UI conditionnera toujours les logiques de rendu, de la gestion des événements à la préparation des données pour l’affichage, en passant par l’évolution de l’état au fil du temps. React a choisi d’assumer pleinement cet état de fait.

Au lieu de séparer artificiellement les *technologies* en mettant le balisage et la logique dans des fichiers séparés, React sépare les *préoccupations (ou responsabilités)* via des unités faiblement couplées appelées « composants », qui contiennent les deux.

React n’oblige pas à utiliser JSX, mais la plupart des gens y trouvent une aide visuelle quand ils manipulent l’interface utilisateur dans le code JavaScript. Ça permet aussi à React de produire des messages d’erreurs et d’avertissements plus utiles.

```js
const name = 'monde';

// Il est possible de mettre n'importe quelle expression js dans les accolades
const element = <h1>Bonjour, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Après la compilation, les expressions JSX deviennent de simples appels de fonctions js, dont l’évaluation renvoie des objets js.

Ça signifie que vous pouvez utiliser JSX à l’intérieur d’instructions `if` ou de boucles `for`, l’affecter à des variables, l’accepter en tant qu’argument, et le renvoyer depuis des fonctions :

```js
function getGreeting(user) {
  if (user) {
    return <h1>Bonjour, {formatName(user)} !</h1>;  
	}

  return <h1>Bonjour, monde.</h1>;}
```

Bon à savoir: Dans la mesure où JSX est plus proche de JavaScript que de HTML, React DOM utilise la casse `camelCase`comme convention de nommage des propriétés, au lieu des noms d’attributs HTML. Donc pour les attributs, on aura className plutôt que class, etc,…

### Sécurité

Par défaut, React DOM échappe toutes les valeurs intégrées avec JSX avant d’en faire le rendu. ****

Il garantit ainsi que vous ne risquez jamais d’injecter quoi que ce soit d’autre que ce vous avez explicitement écrit dans votre application. Tout est converti en chaîne de caractères avant de produire le rendu. Ça aide à éviter les attaques XSS.

### JSX représente des objets

```js
const element = (
  <h1 className="greeting">
    Bonjour, monde !
  </h1>);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Bonjour, monde !'
);

// React.createElement() effectue quelques vérifications pour vous aider
// à écrire un code sans bug, mais pour l’essentiel il crée un objet qui 
// ressemble à ceci :

// Remarque : cette structure est simplifiée
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Bonjour, monde !'
  }
};
```

---

## Rendu des éléments

Un élément décrit ce que vous voulez voir à l’écran :

```js
const element = <h1>Bonjour, monde</h1>;
```

Contrairement aux éléments DOM d’un navigateur, les éléments React sont de simples objets peu coûteux à créer. React DOM se charge de mettre à jour le DOM afin qu’il corresponde aux éléments React.

Nous parlons de nœud DOM « racine » car tout ce qu’il contient sera géré par React DOM.

```js
<div id="root"></div>
```

Les applications dévéloppées uniquement avec React ont généralement un seul nœud DOM racine. Si vous intégrez React dans une application existante, vous pouvez avoir autant de nœuds DOM racines isolés que vous le souhaitez.

Pour faire le rendu d’un élément React dans un nœud DOM racine, passez les deux à la méthode `[ReactDOM.render()](https://fr.reactjs.org/docs/react-dom.html#render)` :

```js
const element = <h1>Bonjour, monde</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

Les éléments React sont **immuables**. 

Une fois votre élément créé, vous ne pouvez plus modifier ses enfants ou ses attributs. Un élément est comme une image d’un film à un instant T : il représente l’interface utilisateur à un point précis dans le temps.

```js
function tick() {
  const element = (
    <div>
      <h1>Bonjour, monde !</h1>
      <h2>Il est {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
// À chaque seconde, nous appellons ReactDOM.render() depuis une fonction de rappel 
// passée à setInterval().
```

React DOM compare l’élément et ses enfants avec la version précédente, et applique uniquement les mises à jour DOM nécessaires pour refléter l’état voulu.

---

## Composants et props

Les composants permettent de découper l’interface utilisateur en éléments indépendants et réutilisables, permettant ainsi de considérer chaque élément de manière isolée.

Conceptuellement, les composants sont comme des fonctions js. Ils acceptent des entrées quelconques (appelées « props ») et renvoient des éléments React décrivant ce qui doit apparaître à l’écran.

```js
const Welcome = (props) => {
  return (
		<h1>Bonjour, {props.name}</h1>
	);
}
```

Cette fonction est un composant React valide car elle accepte un seul argument « props » (qui signifie « propriétés ») contenant des données, et renvoie un élément React. Nous appelons de tels composants des « fonctions composants », car ce sont littéralement des fonctions js.

Jusqu’ici, nous n’avons rencontré que des éléments React représentant des balises DOM :

```js
const element = <div />;
```

Mais ces éléments peuvent également représenter des composants définis par l’utilisateur :

```js
const element = <Welcome name="Sara" />;
```

### Props

Un composant ne doit jamais modifier ses propres props.

**Tout composant React doit agir comme une fonction pure vis-à-vis de ses props.**

Bien entendu, les interfaces utilisateurs des applications sont dynamiques et évoluent dans le temps, on introduit donc le concept d’ **état local.**

L’état local permet aux composants React de modifier leur sortie au fil du temps en fonction des actions de l’utilisateur, des réponses réseau et de n’importe quoi d’autre, mais sans enfreindre cette règle.

---

## Gérer les événements

La gestion des événements pour les éléments React est très similaire à celle des éléments du DOM.

```js
const ActionLink = () => {
// e est un événement synthétique
  const handleClick = (e) => {
    e.preventDefault();
    console.log('Le lien a été cliqué.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Clique ici
    </a>
  );
}
```

Lorsque vous utilisez React, vous n’avez généralement pas besoin d’appeler la méthode `addEventListener` pour ajouter des écouteurs d’événements.

---

## Composition ?

React fournit un puissant modèle de composition, aussi il est recommandé d’utiliser la composition plutôt que l’héritage pour réutiliser du code entre les composants.

### Délégation de contenu

Certains composants ne connaissent pas leurs enfants à l’avance. C’est particulièrement courant pour des composants comme `Sidebar` ou `Dialog`, qui représentent des blocs génériques.

Pour de tels composants, nous vous conseillons d’utiliser la prop spéciale `children`

exemple:

```js
function FancyBorder(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}
// Ça permet aux autres composants de leur passer des enfants quelconques
function WelcomeDialog() {
  return (
    <FancyBorder>
      <h1>Bienvenue</h1>
    </FancyBorder>
  );
}
```

### Spécialisation

Parfois, nous voyons les composants comme des « cas particuliers » d’autres composants. Par exemple, nous pourrions dire que `WelcomeDialog`est un cas particulier de `Dialog`.
Avec React, on réalise ça avec la composition ; un composant plus « spécialisé » utilise un composant plus « générique » et le configure grâce aux props.

Exemple:

```js
function WelcomeDialog() {
  return (
		<>
			<h1>Hello !</h1>
	    <Dialog
	      title="Bienvenue"
	      message="Merci de visiter notre vaisseau spatial !" />
		</>
  );
}
```

Les props et la composition donnent toute la flexibilité pour personnaliser l’apparence et le comportement d’un composant de manière explicite et sûre. (un composant peut accepter tout type de props, y compris des valeurs primitives, des éléments React et des fonctions.)

---

## Découpage dynamique de code

### Bundling

La plupart des applications React empaquetteront leur fichiers au moyen d’outils tels que Webpack, Rollup ou Browserify. L’empaquetage *(bundling)* consiste à suivre le graphe des importations dans les fichiers, et à les regrouper au sein d’un même fichier : un bundle. Ce bundle peut ensuite être inclus dans une page web pour charger une application entière d’un seul coup.****

Les bundles c’est génial, mais au fur et à mesure qu’une application grandit, son bundle va grossir aussi. Surtout si de grosses bibliothèques tierces y sont intégrées.

Il est important de garder un œil sur le code qu’on intègre dans un bundle pour éviter de le rendre si lourd que le chargement de l’ application prendrait beaucoup de temps.

Pour éviter de se retrouver avec un bundle trop volumineux, il est bon d’anticiper les problèmes et de commencer à fractionner le bundle. Le découpage dynamique de code est une fonctionnalité prise en charge par des empaqueteurs, qui permet de créer plusieurs bundles pouvant être chargés dynamiquement au moment de l’exécution.

Fractionner une application peut aider à charger à la demande *(lazy-load)* les parties qui sont nécessaires pour l’utilisateur à un moment donné, ce qui peut améliorer considérablement les performances de l’application. Bien que la quantité de code de l’application n’est pas été diminuée, on évite de charger du code dont l’utilisateur n’aura peut-être jamais besoin, et on réduit la quantité de code nécessaire au chargement initial.****

### Import dynamique

```js
// AVANT
import { add } from './math';

console.log(add(16, 26));

// APRES
import("./math").then(math => {
  console.log(math.add(16, 26));
});
```

### React.lazy

Remarque: `React.lazy`et `Suspense` ne sont pas encore disponibles pour le rendu côté serveur.

La fonction React.lazy permet d’afficher un composant importé dynamiquement comme n’importe quel autre composant.

```js
// AVANT
import OtherComponent from './OtherComponent'
// APRES
const OtherComponent = React.lazy(() => import('./OtherComponent'))
```

Ça chargera automatiquement le bundle contenant le composant OtherComponent quand celui-ci sera rendu pour la première fois.

React.lazy prend une fonction qui doit appeler un import() dynamique. Ça doit renvoyer une Promise qui s’accomplit avec un module dont l’export par défaut contient un composant React.

Le composant importé dynamiquement devrait être exploité dans un composant Suspense, qui nous permet d’afficher un contenu de repli (ex. un indicateur de chargement) en attendant que ce module soit chargé.

```js
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Chargement...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

Décider où introduire un découpage dynamique de code dans une application peut s’avérer délicat. On veut être sûr·e de choisir des endroits qui fractionnent les bundles de manière uniforme, sans perturber l’expérience utilisateur.

Les routes sont un bon endroit pour commencer. La plupart des gens sont habitués sur le web à ce que les transitions entre les pages mettent du temps à charger.

### Exports nommés

Pour le moment, React.lazy ne prend en charge que les exports par défaut. Si le module que vous souhaitez importer utilise des exports nommés, vous pouvez créer un module intermédiaire qui réexportera le composant voulu en tant qu’export par défaut. Cela garantit que le *tree shaking (***Tree shaking** est un terme couramment utilisé dans un contexte JavaScript pour décrire la suppression du code mort.)

```js
// ManyComponents.js
export const MyComponent = /* ... */;
export const MyUnusedComponent = /* ... */;
// MyComponent.js
export { MyComponent as default } from "./ManyComponents.js";
// MyApp.js
import React, { lazy } from 'react';
const MyComponent = lazy(() => import("./MyComponent.js"));
```

---

## Contexte

Dans une application React typique, les données sont passées de haut en bas (du parent à l’enfant) via les props, mais cela peut devenir lourd pour certains types de props (ex. les préférences régionales, le thème de l’interface utilisateur) qui s’avèrent nécessaires pour de nombreux composants au sein d’une application.

Le Contexte offre un moyen de partager des valeurs comme celles-ci entre des composants sans avoir à explicitement passer une prop à chaque niveau de l’arborescence.

```js
const MyContext = React.createContext(defaultValue);
```

Lorsque React affiche un composant qui s’abonne à cet objet Context, il lira la valeur actuelle du contexte depuis le **Provider** le plus proche situé plus haut dans l’arborescence.

L’argument `defaultValue` est uniquement ****utilisé lorsqu’un composant n’a pas de Provider correspondant au-dessus de lui dans l’arborescence.

Chaque objet Contexte est livré avec un composant React Provider qui permet aux composants consommateurs de s’abonner aux mises à jour du contexte.

Tous les consommateurs qui sont descendants d’un Provider se rafraîchiront lorsque la prop value
 du Provider change.

Pour s’abonner au context, 2 façons de faire:

```js
<MyContext.Consumer>
  {value => /* affiche quelque chose basé sur la valeur du contexte */}
</MyContext.Consumer>

// OU

const value = useContext()
<div>{value}</div>
```

Il est souvent nécessaire de mettre à jour le contexte à partir d’un composant imbriqué profondément dans l’arbre des composants. Dans un tel cas, on peut passer une fonction à travers le contexte qui permet aux consommateurs de le mettre à jour.

### Limitations

Dans la mesure où le contexte utilise une identité référentielle pour déterminer quand se rafraîchir, il y a des cas piégeux qui peuvent déclencher des rafraîchissements involontaires pour les consommateurs lorsque le parent d’un fournisseur se rafraîchit.

---

## Transfert de Refs

Le transfert de ref est une technique permettant de déléguer automatiquement une 
ref d’un composant à l’un de ses enfants.

exemple:

```js
function FancyButton(props) {
  return (
    <button className="FancyButton">
      {props.children}
    </button>);
}

// APRES
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// Vous pouvez maintenant obtenir une ref directement attachée au bouton DOM :
const ref = React.createRef();
<FancyButton ref={ref}>Cliquez ici</FancyButton>;
```

De cette façon, les composants utilisant FancyButton peuvent obtenir une ref sur le nœud DOM button sous-jacent et y accéder si nécessaire, comme s’ils utilisaient directement un button DOM.

1. Création d’une [ref React](https://fr.reactjs.org/docs/refs-and-the-dom.html) en appelant React.createRef et l’affectons à une variable ref.
2. Passage de la variable ref à `<FancyButton ref={ref}>` en la spécifiant comme un attribut JSX.
3. React transmet la `ref` à la fonction `(props, ref) => ...` à l’intérieur de `forwardRef` comme deuxième argument.
4. Transfert de cet argument `ref` au `<button ref={ref}>` en le spécifiant comme un attribut JSX.
5. Quand la ref est liée, `ref.current` pointera vers le nœud DOM `button`.

## HOC ou Composants d’ordre supérieur

C’est une technique avancée de React qui permet de réutiliser la logique de composants.

Les HOC ne font pas partie de l’API de React à proprement parler, mais découlent de sa nature compositionnelle.

**Un composant d’ordre supérieur est une fonction qui accepte un composant et renvoie un nouveau composant.**

```js
const Component2 = higherOrderComponent(Component1);
```

Là où un composant transforme des props en interface utilisateur (UI), un composant d’ordre supérieur transforme un composant en un autre composant.

Les HOC sont courants dans des bibliothèques tierces de React, comme `[connect](https://github.com/reduxjs/react-redux/blob/master/docs/api/connect.md#connect)` dans Redux.

### Limitations

L’algorithme de comparaison de React (qu’on appelle la réconciliation) utilise l’identité des composants pour déterminer s’il faut mettre à jour l’arborescence existante ou la jeter et en monter une nouvelle. Si le composant renvoyé par render est identique au composant du rendu précédent, React met récursivement à jour l’arborescence en la comparant avec la nouvelle. S’ils ne sont pas identiques, l’ancienne arborescence est intégralement démontée.

En général, vous ne devriez pas avoir à y penser. Mais dans le cadre des HOC c’est important, puisque ça signifie que vous ne pouvez pas appliquer un HOC au sein de la méthode de rendu d’un composant :

```js
render() {
  // Une nouvelle version de EnhancedComponent est créée à chaque rendu
  // EnhancedComponent1 !== EnhancedComponent2
  const EnhancedComponent = enhance(MyComponent);
  // Ça entraîne un démontage/remontage complet à chaque fois !
  return <EnhancedComponent />;
}
```

Il ne s’agit pas uniquement d’un problème de performances : remonter un composant signifie que l’état local de ce composant ainsi que ceux de tous ses enfants seront perdus.

Il faut plutôt appliquer les HOC à l’extérieur de la définition d’un composant, afin de créer le composant enrobé une seule fois. Son identité sera alors constante d’un rendu à l’autre.

Si vous ajoutez une ref à un élément dont le composant résulte d’un HOC, la ref fait référence à une instance du composant conteneur extérieur, et non au composant enrobé. Les refs ne sont donc pas transmises.

La solution à ce problème réside dans l’utilisation de l’API `React.forwardRef`(introduite dans React 16.3)

---

## Portails

Les portails fournissent une excellente solution pour afficher des composants enfants dans un nœud DOM qui existe en dehors de la hiérarchie DOM du composant parent.

```js
ReactDOM.createPortal(child, container)
```

Un cas typique d’utilisation des portails survient lorsqu’un composant parent possède un style `overflow: hidden`ou `z-index` et que l’enfant a besoin de « sortir de son conteneur » visuellement. C’est par exemple le cas des boîtes de dialogues, des pop-ups ou encore des infobulles.

---

## Réconciliation

### Raisons

Quand vous utilisez React, à chaque instant précis vous pouvez considérer que la fonction `render()` crée un arbre d’éléments React. Lors de la mise à jour suivante de l’état local ou des props, cette fonction `render()` renverra un arbre différent d’éléments React.

React doit alors déterminer comment mettre efficacement à jour l’interface utilisateur (UI) pour qu’elle corresponde à l’arbre le plus récent.

Il existe des solutions génériques à ce problème algorithmique consistant à générer le nombre minimal d’opérations pour transformer un arbre en un autre. Néanmoins, [les algorithmes à la pointe de l’état de l’art](http://grfia.dlsi.ua.es/ml/algorithms/references/editsurvey_bille.pdf) (en anglais) ont une complexité de l’ordre de *O(n3)* où *n* est le nombre d’éléments dans l’arbre.

Si nous les utilisions dans React, l’affichage de 1 000 éléments nécessiterait environ un milliard d’opérations. C’est beaucoup trop coûteux. React implémente plutôt un algorithme heuristique en *O(n)* basé sur deux hypothèses :

1. Deux éléments de types différents produiront des arbres différents.
2. Le développeur peut indiquer quels éléments peuvent être stables d’un rendu à l’autre grâce à la prop `key`.

En pratique, ces hypothèses sont valables dans presque tous les cas.

### L’algorithme de comparaison

En comparant deux arbres, React va commencer par comparer les éléments racines. Le comportement est différent selon le type des éléments racines.

### Éléments de types différents

Chaque fois que les éléments racines ont des types différents, React va détruire l’ancien arbre et reconstruire le nouvel arbre à partir de zéro. Passer de `<a>` à `<img>`, ou de `<Article>` à `<Comment>`, ou de `<Button>` à `<div>` : tous aboutiront à une reconstruction complète.

Lors de la destruction d’un arbre, les anciens nœuds DOM sont détruits. Les instances des composants reçoivent `componentWillUnmount()`. Lors de la construction d’un nouvel arbre, les nouveaux nœuds sont insérés dans le DOM. Les instances de composants reçoivent `UNSAFE_componentWillMount()` puis `componentDidMount()`. Tous les états associés à l’ancien arbre sont perdus.

Tous les composants au-dessous de la racine seront également démontés et leur état détruit. Par exemple, en comparant :

```js
<div>
	<Counter />
</div>
<span>
	<Counter />
</span>
```

Ça détruira l’ancien `Counter` puis en remontera un nouveau.

> Remarque
> 
> 
> Les méthodes suivantes sont considérées dépréciées et vous devriez [les éviter](https://fr.reactjs.org/blog/2018/03/27/update-on-async-rendering.html) dans vos nouveaux codes :
> 
> - `UNSAFE_componentWillMount()`

### Éléments DOM de même type

Lors de la comparaison entre deux éléments DOM React de même type, React examine les attributs des deux, conserve le même nœud DOM sous-jacent, et ne met à jour que les attributs modifiés. Par exemple :

```js
<div className="before" title="stuff" />
<div className="after" title="stuff" />
```

En comparant ces deux éléments, React sait qu’il ne faut modifier que le `className` du nœud DOM sous-jacent.

Lors d’une mise à jour du `style`, React là aussi sait ne mettre à jour que les propriétés qui ont changé. Par exemple :

```js
<div style={{color: 'red', fontWeight: 'bold'}} />
<div style={{color: 'green', fontWeight: 'bold'}} />
```

Lors de la conversion entre les deux éléments, React sait qu’il ne doit modifier que le style `color` et pas `fontWeight`.

Après avoir manipulé le nœud DOM, React applique le même traitement sur les enfants.

### Éléments composants de même type

Lorsqu’un composant est mis à jour, l’instance reste la même, afin que l’état soit maintenu d’un rendu à l’autre. React met à jour les props de l’instance de composant sous-jacente pour correspondre au nouvel élément, et appelle `UNSAFE_componentWillReceiveProps()`, `UNSAFE_componentWillUpdate()` et `componentDidUpdate()` dessus.

Ensuite, la méthode `render()` est appelée et l’algorithme de comparaison reprend entre son résultat précédent et le nouveau.

> Remarque
> 
> 
> Les méthodes suivantes sont considérées dépréciées et vous devriez les éviter dans vos nouveaux codes :
> 
> - `UNSAFE_componentWillReceiveProps()`
> - `UNSAFE_componentWillUpdate()`

### Traitement récursif sur les enfants

Par défaut, lorsqu’il traite les enfants d’un nœud DOM, React parcourt simultanément les deux listes d’enfants et génère une modification chaque fois qu’il y a une différence.

Par exemple, lors de l’ajout d’un élément à la fin des enfants, la conversion entre les deux arbres fonctionne bien :

```js
<ul>
	<li>first</li>
	<li>second</li>
</ul>
<ul>
	<li>first</li>
	<li>second</li>
	<li>third</li>
</ul>
```

React fera correspondre les deux arbres `<li>first</li>`, les deux arbres `<li>second</li>`, et insérera l’arbre `<li>third</li>`.

Si vous l’implémentez de façon naïve, l’insertion d’un élément au début aura de moins bonnes performances. Par exemple, la conversion entre ces deux arbres fonctionnera assez mal :

```js
<ul>
	<li>Duke</li>
	<li>Villanova</li>
</ul>
<ul>
	<li>Connecticut</li>
	<li>Duke</li>
	<li>Villanova</li>
</ul>
```

React va modifier chaque enfant plutôt que de réaliser qu’il pouvait garder les sous-arbres `<li>Duke</li>` et `<li>Villanova</li>` intacts. Cette inefficacité peut être un problème.

### Clés

Afin de résoudre ce problème, React prend en charge l’attribut `key`. Quand des enfants ont cette clé, React l’utilise pour faire correspondre les enfants de l’arbre d’origine avec les enfants de l’arbre suivant. Par exemple, l’ajout d’une `key` dans notre exemple inefficace peut rendre la conversion de l’arbre plus efficace :

```js
<ul>
	<li key="2015">Duke</li>
	<li key="2016">Villanova</li>
</ul>
<ul>
	<li key="2014">Connecticut</li>
	<li key="2015">Duke</li>
	<li key="2016">Villanova</li>
</ul>
```

À présent, React sait que l’élément avec la clé `'2014'` est nouveau, et que les éléments avec les clés `'2015'` et `'2016'` ont juste été déplacés.

En pratique, trouver une clé n’est généralement pas difficile. L’élément que vous allez afficher peut déjà disposer d’un identifiant unique, la clé provenant alors de vos données :

```js
<li key={item.id}>{item.name}</li>
```

Quand ce n’est pas le cas, vous pouvez ajouter une nouvelle propriété d’identification à votre modèle, ou hacher certaines parties de votre contenu pour générer une clé. La clé n’a besoin d’être unique que parmi ses éléments frères, et non au niveau global.

En dernier recours, vous pouvez utiliser l’index de l’élément dans un tableau comme clé. Cela fonctionne correctement si les éléments ne sont jamais réordonnés et s’il n’y a ni insertion ni suppression, dans le cas contraire ce serait assez lent.

Les tris peuvent également causer des problèmes avec les états des composants quand les index sont utilisés comme des clés. Les instances des composants sont mises à jour et réutilisées en fonction de leur clé. Si la clé est un index, déplacer un élément changera sa clé. En conséquence, l’état local des composants utilisés pour des saisies non-contrôlées peut s’emmêler et être mis à jour de manière inattendue.

### Compromis

Rappelez-vous bien que l’algorithme de réconciliation est un détail d’implémentation. React pourrait rafraîchir l’ensemble de l’application à chaque action ; le résultat final serait le même. Pour être clair, rafraîchir dans ce contexte signifie appeler `render` sur tous les composants, ça ne signifie pas que React les démontera et remontera. Il n’appliquera que les différences obtenues en suivant les règles énoncées dans les sections précédentes.

Nous affinons régulièrement les heuristiques afin d’accélérer les cas d’usage courants. Dans l’implémentation actuelle, vous pouvez exprimer le fait qu’un sous-arbre a été déplacé parmi ses frères, mais vous ne pouvez pas dire qu’il a été déplacé ailleurs. L’algorithme va refaire le rendu de l’ensemble du sous-arbre.

Puisque React se repose sur des heuristiques, si les hypothèses derrière celles-ci s’avèrent erronées, ça réduira les performances.

1. L’algorithme n’essaiera pas de faire correspondre des sous-arbres de types de composants différents. Si vous êtes amené·e à alterner entre deux types de composants au rendu très similaire, vous devriez peut-être en faire un type unique. En pratique, nous ne considérons pas ça comme un problème.
2. Les clés doivent être stables, prévisibles et uniques. Des clés instables (comme celles produites par `Math.random()`) entraîneront la re-création superflue de nombreuses instances de composants et de nœuds DOM, ce qui peut dégrader les performances et perdre l’état local des composants enfants.

---

## Les refs et le DOM

## Mode concurrent (expérimental)

## Services workers