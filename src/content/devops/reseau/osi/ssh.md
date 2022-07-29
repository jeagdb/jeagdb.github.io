## SSH (Secure Shell)

Protocole d’administration à distance qui permet aux utilisateurs de contrôler et de modifier leurs serveurs distants via Internet. Le service a été créé pour remplacer de façon sécurisée le Telnet, non chiffré.

SSH utilise des **techniques cryptographiques** pour garantir que toutes les **communications** vers et depuis le serveur distant soient **chiffrées**. Il fournit un mécanisme pour authentifier un utilisateur distant, transférer les entrées du client vers l’hôte et relayer la sortie vers le client.

La **commande SSH** se compose de 3 parties distinctes : **SSH {utilisateur} @ {hôte}**.

- La **commande de clé SSH** indique à votre système que vous souhaitez ouvrir une connexion Secure Shell cryptée.
- **{utilisateur}** représente le compte auquel vous souhaitez accéder. L’utilisateur root par exemple est l’équivalent de l’administrateur système avec des droits absolus sur toute modification au niveau du système.
- **{hôte}** fait référence à l’ordinateur auquel vous souhaitez accéder. Cela peut être une adresse IP (par exemple 244.235.23.19) ou un nom de domaine (par exemple www.xyzdomain.com).