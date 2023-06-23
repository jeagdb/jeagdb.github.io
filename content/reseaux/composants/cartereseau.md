---
title: 'Carte réseau'
---

# Carte réseau

Sources: [https://www.gralon.net/articles/internet-et-webmaster/adsl/article-la-carte-reseau---presentation-et-fonctionnement-1429.htm](https://www.gralon.net/articles/internet-et-webmaster/adsl/article-la-carte-reseau---presentation-et-fonctionnement-1429.htm)

### Rôle

La carte réseau sert d’**interface physique entre l’ordinateur et le câble du réseau**.

Elle a pour fonction de préparer, d’envoyer et de contrôler le flux de données sur le réseau.

Elle sert aussi à traduire les données venant du câble en octets afin que l’Unité Centrale de l’ordinateur les comprenne. Par ailleurs, chaque carte dispose d’une adresse unique, appelée **adresse MAC**, qui permet de l’identifier parmi toutes les autres cartes réseau.

Cette adresse lui est attribuée par son fabricant et est inscrite sur la puce de la carte.

Lorsqu’elle fonctionne, la carte **indique son adresse au reste du réseau** pour pouvoir être identifiée.

### Adresse MAC

Une **adresse MAC,** parfois nommée **adresse physique**, est un identifiant physique stocké dans une [](https://fr.wikipedia.org/wiki/Carte_r%C3%A9seau)carte réseau ou une interface réseau similaire. À moins qu'elle n'ait été modifiée par l'utilisateur, elle est unique au monde. Toutes les cartes réseau ont une adresse MAC.

MAC constitue la partie inférieure de la couche liaison (couche 2 du modèle OSI). Elle insère et traite ces adresses au sein des trames transmises. Elle est parfois appelée *adresse ethernet*, UAA (Universally Administered Address), BIA (Burned-In Address), MAC-48 ou EUI-48.

### Différents types de cartes réseau

- filaire interne:
    - carte PCI, PCI Express à insérer dans un connecteur PCI libre sur la carte mère
    - interface réseau intégré à la carte mère, avec un connecteur RJ45 fixé sur la carte mère
- filaire externe: boitier externe avec un connectique prévu pour un câble ethernet à brancher à l’ordinateur, souvent via USB.
- sans fil:
    - carte wifi interne: carte PCI équipée d’une antenne

---

Les ordinateurs portables ne disposant pas de connecteur PCI ou PCIe, d'autres solutions existent :

- Carte réseau au standard *PC Card* (appelé aussi PCMCIA) ;
- Interface réseau (WIFI ou ethernet) déjà intégrée au portable ;
- Carte réseau connectée en USB

### Bus

Une carte réseau se connecte à la carte mère de l’ordinateur via un **bus informatique**, généralement standardisé.

### Débit

Deux équipements réseau doivent communiquer dans le même débit.

Le débit exprimé en **Mbit/s** (Mégabits par seconde) désigne la capacité d'un équipement réseau à émettre et recevoir plus ou moins d'informations par seconde.

Avec le standard Ethernet, les débits actuels sont :

- 10 Mbit/s
- 100 Mbit/s (Fast Ethernet)
- 1000 Mbit/s (Gigabit Ethernet).

On distingue deux types de carte réseau :

- celles qui communiquent en **half duplex** ne peuvent qu'émettre ou recevoir des informations à un instant donné
- celles qui fonctionnent en mode **full duplex** peuvent émettre et recevoir simultanément.

**Différence entre le débit et la bande passante:** 

La ****bande passante correspond au débit maximal d’un réseau, alors que le débit est utilisé pour évaluer la qualité de la connexion à un moment donné

### Mode de communication

La carte réseau effectue des vérifications avant d’envoyer ses données:

- nombre de paquets à envoyer et taille maximale autorisée par la carte réceptrice.
- intervalle à laisser entre les transmissions de données
- volume de données
- l’indication du délai à prévoir avant l’envoi de la confirmation
- vitesse de transmission autorisée

Il y a donc un vrai dialogue entre 2 cartes réseaux (émettrice et réceptrice) avant l’envoi et la réception de données.

### Fabricants

TP-LINK, D-LINK, Asus, TRENDnet, Gigabyte Technology

### Réseau d’ondes électromagnétiques