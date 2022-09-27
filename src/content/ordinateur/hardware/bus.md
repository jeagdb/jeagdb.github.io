# Bus

Différents standards de bus informatique se sont succédé pour offrir des débits de plus en plus importants : ISA, PCI, PCIe

Sources: [https://fr.wikipedia.org/wiki/Bus_informatique](https://fr.wikipedia.org/wiki/Bus_informatique#Cas_d'utilisation_2)

## PCIe

Standard développé par Intel en 2004. Il spécifie un bus (bus pci express) et un connecteur qui sert à connecter des cartes d’extension sur la carte mère.
Il est destiné à remplacer tout les connecteurs d’extension d’un pc (par exemple PCI, AGP)

L’un des intérêts notables du bus PCIe, est que deux cartes PCIe peuvent dialoguer entre elles sans passer par le processeur.

### Evolution du PCI

Dérivé de la norme PCI, cela permet aux constructeurs d’adapter simplement leurs cartes d’extensions existantes. Il est également suffisamment rapide pour pouvoir remplacer l’AGP, un port rapide pour cartes graphiques.

Le PCIe est souvent dispo au northbridge et southbridge de la carte mère.

### Les ports

On parle de ports PCIe ×1, ×2, ×4, ×8, ×16 et ×32 pour différencier les ports en fonction du nombre de connecteurs de ligne dont ils disposent (respectivement 1, 2, 4, 8, 16 ou 32 lignes maximum). Un port ×32 permet d'atteindre en théorie un débit de 8 Go/s, soit 4 fois le débit des ports AGP3.

Un port ×16 par exemple peut n’être relié qu’à 8 lignes PCIe ; il devra tout de même avoir un apport de puissance électrique nécessaire aux cartes ×16. Une carte d’extension ×16 fonctionnera sur ce port (mais probablement avec des performances non optimales), car le protocole PCIe prévoit la négociation mutuelle du nombre de lignes maximum supportées par les deux entités en relation. De même, une carte (exemple : ×1) peut être connectée et fonctionnera correctement sur un port plus grand (exemple : ×2, …, ×32).

![pcie-slot.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/28e0b63d-1ddf-4b88-b31c-8fc0257b7baf/pcie-slot.png)

### Une carte PCIe

![carte pcie.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e263823d-7eb6-49ab-9439-eeca96dd8cf9/carte_pcie.jpg)

## Approches parallèle et série

PCIe est un bus série c’est à dire qu’il transmet les éléments numériques d’un signal successivement par un seul trajet entre deux points.

Un bus parallèle transmet simultanément les éléments numériques d'un signal numérique sur un nombre approprié de trajets parallèles entre les composants participants.

Le câble de bus série comporte beaucoup moins de conducteurs qu'un bus parallèle, ce qui simplifie le câblage et entrave moins la circulation de l'air dans les appareils informatiques grâce à la réduction de la taille du câble, et à sa souplesse.

![process-bus.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e6337dca-2557-44d4-8f44-6289e029144d/process-bus.png)