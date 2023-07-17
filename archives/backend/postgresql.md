---
title: 'Postgres'
---

# Postgres

## View
Une view c'est une synthèse d'une requête d'interrogation de la base. On peut la voir comme une table virtuelle qui représente le résultat d'une requête sur la base.

Les avantages des vues sont :
- d'éviter de taper une requête très longue : la view sert à donner un nom à la requête pour l'utiliser souvent,
- de masquer certaines données à certains utilisateurs. En SQL, les protections d'une vue ne sont pas forcément les mêmes que celles des tables sous-jacentes.

### Exemple
```
  CREATE TABLE Employes (id SERIAL, nom TEXT, departement INTEGER);
  CREATE TABLE Departements (id SERIAL, nom TEXT);
  SELECT e.nom as Employe, d.nom as Departement 
            FROM Employes e,Departements d WHERE e.departement = d.id;
```

Avec une view:
```
  CREATE VIEW ToutLeMonde AS 
         SELECT e.nom as Employe, d.nom as Departement 
                FROM Employes e,Departements d 
                WHERE e.departement = d.id;
```
On peut alors écrire:
```
SELECT * FROM ToutLeMonde ;
```

Les vues ne sont pas forcément purement virtuelles. Certains SGBD comme Oracle Database1 permettent de stocker la vue sur disque, elle devient alors un véritable système de cache.

## Materialized views
Une materialized view c'est une view, et **stockée** pour une utilisation ultérieure.
Étant donné que les données sont pré-calculées, l’interrogation d’une vue matérialisée est plus rapide que l’exécution d’une requête sur la table de base de la vue.
Cette différence de performances peut être significative lorsqu’une requête est exécutée fréquemment ou est suffisamment complexe. Par conséquent, les vues matérialisées peuvent accélérer les opérations d’agrégation, de projection et de sélection coûteuses, en particulier celles qui s’exécutent fréquemment et qui s’exécutent sur de grands ensembles de données.

On l’utilise essentiellement à des fins d'optimisation et de performance dans le cas où la requête associée est particulièrement complexe ou lourde, ou pour faire des réplications de table.

[Plus d'infos](https://docs.snowflake.com/fr/user-guide/views-materialized.html)