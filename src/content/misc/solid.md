# Principes SOLID

## Définition

En PPO, **SOLID** est un acronyme qui regroupe **cinq principes** de conception destinés à produire des architectures logicielles plus compréhensibles, flexibles et maintenables.

Les principes sont un sous-ensemble de nombreux principes promus par l'ingénieur logiciel et instructeur américain [Robert C. Martin](https://fr.wikipedia.org/wiki/Robert_C._Martin).

Bien qu'ils s'appliquent à toute conception orientée objet,
les principes SOLID peuvent également former une philosophie de base pour des méthodologies 
telles que le développement agile ou le développement de logiciels adaptatifs.

## Responsabilité unique

Une classe une fonction ou une méthode doit avoir une et une seule responsabilité

### Exemple

## Ouvert/Fermé

Une entité applicative (classe, fonction, module ...) doit être fermée à la modification directe mais ouverte à l'extension.

En gros, l’abstraction est importante. ça permet d’écrire du code qui ne se répète pas, que l’on peut étendre super facilement et qui reste simple à maintenir, même des années après.

### Exemple

```jsx
// getArea ne respecte pas le principe O/F
public class Rectangle{
 public double Width {get; set;}
 public double Height {get; set;}
}

public class Circle{
 public double Radious {get; set;}
}

public double getArea (object[] shapes){
 double totalArea = 0;

 foreach(var shape in shapes){
  if(shape is Rectangle){
   Rectangle rectangle = (Rectangle)shape;
   totalArea += rectangle.Width * rectangle.Height;
  }
  else{
   Circle circle = (Circle)shape;
   totalArea += circle.Radious * circle.Radious * Math.PI;
  }
 }
}
```

Correction de cette fonction

```jsx
public abstract class shape{
 public abstract double Area();
}

public class Rectangle : shape{
 public double Width {get; set;}
 public double Height {get; set;}

 public override double Area(){
  return Width * Height;
 }
}

public class Circle : shape{
 public double Radious {get; set;}

 public override double Area(){
  return Radious * Radious * Math.PI;
 }
}

public double getArea (shape[] shapes){
 double totalArea = 0;

 foreach(var shape in shapes){
  totalArea += shape.Area();
 }

 return totalArea;
}
```

- **[Substitution de Liskov](https://fr.wikipedia.org/wiki/Principe_de_substitution_de_Liskov) (*Liskov substitution principle*)**

## Substitution de Liskov

Une instance de type T doit pouvoir être remplacée par une instance de type G, tel que G sous-type de T, sans que cela ne modifie la cohérence du programme.

[https://itexpert.fr/blog/principe-substitution-liskov/](https://itexpert.fr/blog/principe-substitution-liskov/)

### Exemple

## Ségrégation des interfaces

- **[Ségrégation des interfaces](https://fr.wikipedia.org/wiki/Principe_de_s%C3%A9gr%C3%A9gation_des_interfaces) (*Interface segregation principle*)**

Préférer plusieurs interfaces spécifiques pour chaque client plutôt qu'une seule interface générale.

### Exemple

 [https://itexpert.fr/blog/principe-segregation-interfaces/](https://itexpert.fr/blog/principe-segregation-interfaces/)

## Inversion des dépendances

- **[Inversion des dépendances](https://fr.wikipedia.org/wiki/Inversion_des_d%C3%A9pendances) (*Dependency inversion principle*)**

Il faut dépendre des abstractions, pas des [implémentations](https://fr.wikipedia.org/wiki/Impl%C3%A9mentation).

### Exemple

[https://www.sylvainmoingeon.fr/xamarinforms-inversion-de-dependance-facile-et-pas-chere/](https://www.sylvainmoingeon.fr/xamarinforms-inversion-de-dependance-facile-et-pas-chere/)