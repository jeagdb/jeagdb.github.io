---
title: 'Transpilation'
---

### Définition
La transpilation est un processus qui convertit le code source d'un langage de programmation en code source d'un autre langage de programmation. 
Le mot lui-même est une combinaison de `transformation` et `compilation`.

### Développement web
Dans le monde du développement web, le terme `transpilation` est souvent utilisé pour décrire le processus de conversion du code d'un **langage ou d'une version d'un langage** à une autre qui peut être plus largement supportée ou utilisée. 

Par exemple, le code écrit dans une version plus récente de JavaScript (ES6 ou ultérieur) pourrait être "transpilé" en une version plus ancienne de JavaScript (ES5) pour assurer une compatibilité maximale avec les navigateurs web existants.

### Processus
- Analyse syntaxique: conversion du code source en AST.
- Transformations: modifie l'AST en remplaçant les fonctionnalités ciblées.
- Code generation: à partir de l'AST modifié, génération du code.
