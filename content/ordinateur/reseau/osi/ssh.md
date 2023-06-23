---
title: 'Protocole SSH'
---

# SSH (Secure Shell)

Protocole d’administration à distance qui permet aux utilisateurs de contrôler et de modifier leurs serveurs distants via Internet. Le service a été créé pour remplacer de façon sécurisée le Telnet, non chiffré.

SSH utilise des **techniques cryptographiques** pour garantir que toutes les **communications** vers et depuis le serveur distant soient **chiffrées**. Il fournit un mécanisme pour authentifier un utilisateur distant, transférer les entrées du client vers l’hôte et relayer la sortie vers le client.

La **commande SSH** se compose de 3 parties distinctes : **SSH {utilisateur} @ {hôte}**.

- La **commande de clé SSH** indique à votre système que vous souhaitez ouvrir une connexion Secure Shell cryptée.
- **{utilisateur}** représente le compte auquel vous souhaitez accéder. L’utilisateur root par exemple est l’équivalent de l’administrateur système avec des droits absolus sur toute modification au niveau du système.
- **{hôte}** fait référence à l’ordinateur auquel vous souhaitez accéder. Cela peut être une adresse IP (par exemple 244.235.23.19) ou un nom de domaine (par exemple www.xyzdomain.com).

## Connexion
### Syntaxe de base
Pour se connecter à un système distant utilisant SSH, on peut utiliser la commande ssh.  
La forme la plus élémentaire de la commande est:
```
ssh remote_host (remote_host = adresse IP ou le nom de domaine auquel vous essayez de vous connecter)
```

Cette commande suppose que le nom d’utilisateur sur le système distant est le même que le nom d’utilisateur sur son système local.
Si le nom d'utilisateur est différent sur le système distant, on peut le spécifier comme ceci:
```
ssh remote_username@remote_host
```

Une fois qu'on est connecté au serveur, il peut être demandé de vérifier son identité en fournissant un mot de passe.
On peut également générer des clés à utiliser à la place des mots de passe.

Pour quitter une session ssh:
```
exit
```

### Authentification par clé
Fonctionne en créant une paire de clés : une clé privée et une clé publique.

La clé privée se trouve sur la machine du client et est sécurisée et gardée secrète.
La clé publique peut être donnée à n’importe qui ou placée sur n’importe quel serveur auquel vous souhaitez accéder.

Lorsque vous tentez de vous connecter à l’aide d’une paire de clés, le serveur utilise la clé publique pour créer un message pour l’ordinateur client qui ne peut être lu qu’avec la clé privée.
L’ordinateur client renvoie alors la réponse appropriée au serveur et celui-ci saura que le client est légitime.

Pour générer une paire de clés SSH:
```
ssh-keygen -t rsa
```
Elles sont localisées ici `~/.ssh/id_rsa.pub et ~/.ssh/id_rsa`

Pour transférer la clé publique vers le serveur: (dans le cas où on a un mot de passe côté serveur)
```
ssh-copy-id remote_host
```

Si vous avez créé des clés SSH, vous pouvez renforcer la sécurité de votre serveur en désactivant l’authentification uniquement par mot de passe. En dehors de la console, la seule façon de se connecter à votre serveur est d’utiliser la clé privée qui se couple avec la clé publique que vous avez installée sur le serveur.
Avertissement : Avant de procéder à cette étape, assurez-vous que vous avez installé une clé publique pour votre serveur. Sinon, vous serez bloqué à l’extérieur !

## Fonctionnement
SSH fonctionne en connectant un programme client à un serveur ssh, appelé sshd.

Sur votre serveur, le sshd devrait déjà fonctionner. Si ce n’est pas le cas, vous devrez peut-être accéder à votre serveur via une console Web ou une console série locale.
Sur Ubuntu, vous pouvez démarrer le serveur ssh en tapant:
```
sudo systemctl start ssh
```

## Configuration
Lorsque vous modifiez la configuration de SSH, vous modifiez les paramètres du serveur sshd.

Dans Ubuntu, le fichier de configuration principal de sshd se trouve à /etc/ssh/sshd_config.
A l'intérieur on retrouve des déclarations de:
  - port (22 par défaut)
  - clés d'hôtes (HostKey
  - niveau de connexion (SyslogFacility, LogLevel)
  - LoginGraceTime (maintien en secondes de la connexion active sans se connecter avec succès)
  - PermitRootLogin (autoriser ou non le user root à se connecter)
  - strictModes (sécurité qui refusera les tentatives de connexion si les fichiers d'auth sont lisibles par tous)


Pour appliquer les modifications de la config:
```
sudo systemctl reload ssh
```