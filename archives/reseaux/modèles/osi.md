---
title: 'Modèle OSI'
---

# Modèle OSI (en cours)

Créé par l'Organisation internationale de normalisation, le modèle conceptuel OSI (Open Systems Interconnection) permet à divers systèmes de communication de communiquer à l'aide de protocoles standard. En clair, l'OSI constitue une norme permettant à différents systèmes informatiques de communiquer entre eux.

Fondé sur le concept de division d'un système de communication en sept couches abstraites, empilées les unes sur les autres, le modèle OSI peut être considéré comme un langage universel pour les réseaux informatiques.

## Contexte

Alors que les marques informatiques se multiplient sur le marché, il était essentiel de mettre en place une architecture commune pour que chaque appareil, quelle que soit sa marque, puisse communiquer entre eux.

## Concept

Le principal concept de l'OSI établit que le processus de communication entre deux points terminaux d'un réseau de télécommunication peut être divisé en sept groupes distincts de fonctions associées, ou couches.

Chaque utilisateur ou programme qui communique se trouve au niveau d'un ordinateur capable de fournir ces sept couches fonctionnelles. Ainsi, pour un message échangé entre utilisateurs, un flux de données transite par les couches de l'ordinateur source, arrive sur le réseau, puis transite par les couches de l'ordinateur destinataire.

Les sept couches fonctionnelles sont fournies par une combinaison d'applications, de systèmes d'exploitation, de pilotes de carte réseau et d'équipements réseau qui permettent à un système de placer un signal sur un câble réseau ou via le Wi-Fi ou un autre protocole sans fil.

## 7 Couche Application

C'est au niveau de cette couche que les partenaires de communication sont identifiés (y a-t-il quelqu'un avec qui parler ?), que la capacité du réseau est évaluée (le réseau me permet-il de leur parler maintenant ?) et que l'objet à envoyer est créé ou que l'objet à ouvrir est ouvert. (Cette couche n'est pas l'application elle-même : il s'agit de l'ensemble de services que l'application doit pouvoir utiliser directement, même si certaines applications peuvent exécuter des fonctions de la couche application.)

## 6 Couche Présentation

Cette couche fait généralement partie d'un système d'exploitation (OS) et est chargée de convertir les données entrantes et sortantes d'un format de présentation à un autre format (par exemple, du texte en clair à du texte chiffré à une extrémité, puis retour à du texte en clair à l'autre extrémité).

## 5 Couche Session

Cette couche gère, coordonne et met fin aux conversations. Les services incluent l'authentification et la reconnexion après une interruption. Sur Internet, les protocoles TCP (Transmission Control Protocol) et UDP (User Datagram Protocol) fournissent ces services à la plupart des applications.

## 4 Couche Transport

Cette couche gère la formation des paquets de données, puis leur livraison, et vérifie si les données contiennent des erreurs à leur arrivée. Sur Internet, les protocoles TCP et UDP fournissent également ces services à la plupart des applications.

## 3 Couche Réseau

Cette couche gère l'adressage et l'acheminement des données (en les envoyant dans la bonne direction au bon destinataire lors des transmissions sortantes et en recevant les transmissions entrantes au niveau du paquet). Pour Internet, IP est la couche réseau.

## 2 Couche Liaison de données

Cette couche gère les liaisons sur le réseau physique en plaçant les paquets dans les trames du réseau. Elle est divisée en deux sous-couches : contrôle de la liaison logique, ou LLC (Logical Link Control) et contrôle d'accès au support, ou MAC (Media Access Control). Ethernet est la principale couche liaison de données en usage.

## 1 Couche Physique

Cette couche est chargée de la transmission des bits sur le réseau au niveau électrique, optique ou radio. Elle fournit les moyens matériels pour l'envoi et la réception des données sur un réseau porteur.