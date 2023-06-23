---
title: 'Carte mère'
---

# Carte mère
Circuit imprimé qui supporte la plupart des composants et connecteurs nécessaires au fonctionnement d’un PC.
Composée de circuits imprimés et de ports de connexion qui assurent la liaison de tous les composants et périphériques propres à un micro ordinateur: disques durs, RAM, CPU, cartes filles.

---

## Composition

- C’est le support de toutes les interconnexions entre circuits intégrés (bus, alimentation de tous les composants en ayant besoin, …)
- regroupe les connecteurs pour cartes d’extension (le PCI, PCIe, …) et également les interfaces pour les périphériques internes (carte son, carte réseau) + périphériques externes (USB, HDMI, ethernet, puce audio)
- comprend le chipset (pont nord et sud, aussi appelés south bridge et north bridge) ainsi que tous les éléments intégrés (carte graphique, carte son,…)
- comprends les circuits connectables entre
    - micro-processeur
    - mémoire centrale
    - cartes optionnelles (gpu, modem, …)

## Structure

### Connecteurs électriques

Permet d’acheminer le courant électrique du bloc d’alimentation vers la carte mère.

Il y a 2 connecteurs sur la carte mère:

- connecteur 24 pins de type ATX (alim principale). 24 broches qui permettent d’acheminer les différentes tensions d’alimentation vers la carte car tous les composants d’une carte mère ne fonctionnent pas à la même tension. L’alimentation délivre 3 tensions différentes (+12V, +5V, +3,3V)
- connecteur 4 ou 8pins pour le CPU (tension +12V)

### Support processeur

On l’appelle couramment le **socket** est le connecteur spécifique du processeur.
S’il est libre (ZIF: Zero Insertion Force) alors on peut insérer/retirer le processeur en soulevant le levier de vérouillage présent sur le côté. Ce système permet une grande modularité (on peut installer tout processeur compatible avec le brochage)

---

Les marques principales : AMD et Intel.

Chaque nouvelle génération de processeur (que ce soit chez Intel et AMD) utilise un socket légèrement différent (de par le placement des broches de connexion). De ce fait, chaque nouvelle génération n'est pas rétrocompatible avec la précédente ce qui oblige l'utilisateur à changer de carte mère lorsqu'il veut installer un processeur qui n'est pas compatible avec la carte qu'il possède déjà.

### Chipset (jeu de puces)

Pour faire cohabiter et fonctionner tous ces composants, la carte mère utilise un circuit spécifique appelé chipset. C’est un jeu de composants électroniques inclus dans un circuit intégré préprogrammé qui permet de gérer les flux de données entre le CPU, la mémoire et les périphériques. Celui-ci se divise en deux parties distinctes :

- le « pont nord » (en anglais *northbridge*), pour les périphériques « rapides » (RAM, PCIe, …).
- le « pont sud » (en anglais *southbridge*) pour les périphériques « lents » (PCI, disques durs, …)

Un chipset peut parfois contenir un substitut de gpu, carte son, …

La capacité d’évolution d’un pc est lié au chipset qu’il emploie (résolution graphique max, nombre max de couleurs, taille mémoire max, taille du disque dur max, type de barrette de RAM gérée max, vitesse max des bus, …)

![chipset.png](/images/hw-chipset.png)

## BIOS et UEFI

Lors du démarrage, la carte mère a besoin de savoir quels périphériques sont connectés.
Pour cela elle dispose du BIOS (basic input output system) et de UEFI (nouveau type de BIOS).

Les 2 firmwares sont contenus dans une puce de ROM soudée à même la carte mère et le microprocesseur lance ce code automatique dès la mise sous tension de la carte mère.

### Bios

code contenu dans le bios permet de configurer chaque périphérique connecté à la carte mère (RAM, DD, cartes d’extensions,…).

Lorsque tous les périphériques ont été configurés, le microprocesseur éxecute les instructions contenues dans le MBR (Master Boot Record)

### UEFI

Nouveau standard de firmware. Avantages par rapport au bios: fonctionnalités réseau en standard, interface graphique haute résolution, gestion intégrée d’installations multiples d’OS, affranchissement de la limite des disques à 2,2 To.

---

### MBR (zone amorce)

Nom donné au premier secteur adressable d’un DD (cylindre 0, tête 0 et secteur 1, ou secteur 0).

Taille de 512 octets, le MBR contient la table des partitions du DD (les 4 partitions primaires).
Il contient également une routine d’amorçage dont le but est de charger l’OS présent sur la partition active.

Depuis 2013, le système de partition MBR est remplace par le système GPT la plupart du temps

### GPT (table de partitionnement GUID)

Standard pour décrire la table de partitionnement d’un DD.

La GPT est un sous-ensemble des spécifications de UEFI.

---

## Connecteurs mémoire

A proximité du support du CPU, les connecteurs mémoires ou **slots** se trouvent au nombre de 2,4,6 ou parfois 8.

Prennent en compte des barrettes de RAM au format DDR3, ou DDR4.

## Connecteurs de stockage

Permette d’ajouter des périphériques de stockage de massage (DD, lecteur de disque optique, SSD).
On retrouve surtout des connecteurs:

- SATA (Serial ATA): permet de connecter 3 types de périphériques. DD SATA, SSD, lecteurs DVD, blu-ray.
- M.2: amélioration du connecteur mSATA. Permette d’accueillir des cartes filles de type: SSD petit format, WIFI, Bluetooth, …
    
    la dernière génération de SSD M.2 se connecte directement en PCIe
     afin de permettre des débits plus élevés. D'où la présence sur certaines cartes mères de ports distincts M.2 SATA et M.2 PCIe ou Ultra M.2
    
    **Un M.2 occupe moins de place qu'un SSD ou un disque dur de 2,5 pouces.** Sa petite taille et sa finesse en font une solution idéale pour les ordinateurs légers et portables.
    

## Carte fille

Pièce électronique qui a pour rôle d’être une extension de la carte mère.