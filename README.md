![alt text](./frontend/src/assets/images/logo2Givedaymini.png)

## La Plateforme généreuse des tout petits

</br>
Le projet consiste à développer le prototype d’une application web qui a pour objectif d’optimiser l’organisation d’évènements pour enfants.
</br> 
Sur le site :

- un utilisateur "organisateur" peut créer un évènement en ajoutant ses informations puis créer une carte d'invitation.
- un utilisateur "invité" pourra consulter la liste des cadeaux souhaités et participer à une cagnotte.

Giveday souhaite sensibliser les enfants aux projets solidaires. Lors de la création d'un évènement, l'enfant "organisateur" choisi une association à soutenir, une partie de la cagnotte sera alors reversée à l'association.
</br>
L’application propose également un blog pour suivre des actualités/projets solidaires.
</br>
L'application dispose d'un dasboard administrateur pour gérer les utilisateurs et les articles du blog.
</br>

## Les outils

- Modélisation de la base de données : https://drive.google.com/file/d/1kjztGTy1qJHduEbC_oysoBMK3cfcZHiy/view?usp=sharing
- Maquette : https://drive.google.com/file/d/1zVJ2CIZDIwIHV3gWMvwXbNW9NI8BcXa0/view?usp=sharing

</br> 
</br> 
</br>



## Le template Projet Wild Code School - React-Node-MySQL

Ce template est conçu pour servir de base à tous les projets (P2/P3) suivants la stack React-Node-MySQL telle qu'enseignée à la Wild Code School. Il est préconfiguré avec un ensemble d'outils qui aideront les élèves à produire un code correspondant mieux aux standards du monde du travail et plus facile à maintenir, tout en restant simple à utiliser.

## Installation & Utilisation

### Pour commencer un projet

- Sur VSCode, installer les plugins **Prettier - Code formatter** et **ESLint** et les configurer
- Cloner ce dépôt, se rendre à l'intérieur
- Lancer la commande `npm run setup`
- _NB: Pour exécuter le backend, un fichier d'environnement avec les données de connexion d'une BdD valide est nécesaire. Un modèle se trouve dans `backend/.env.sample`_

### Liste des commandes et signification

- `setup` : Initialisation du frontend et du backend ainsi que des outils
- `dev` : Démarrage des deux serveurs (frontend + backend) dans un même terminal
- `dev-front` : Démarrage d'un serveur React pour le frontend
- `dev-back` : Démarrage d'un serveur Express pour le backend
- `lint` : Exécute des outils de validation de code (sera exécutée automatiquement à chaque _commit_)
- `fix` : Fixe les erreurs de formatage (à lancer si `lint` ne passe pas)

## Pour plus d'informations

### Listing des outils utilisés

- _Concurrently_ : Permet d'exécuter plusieurs commandes dans un même terminal
- _Husky_ : Permet d'exécuter des actions en déclenchement de commandes _git_
- _Vite_ : Alternative à _Create-React-App_, embarquant moins de packages pour une expérience plus fluide
- _ESLint_ : Outil de "qualité de code", permet de s'assurer que des règles pré-configurées sont bien respectées
- _Prettier_ : Outil de "qualité de code" également, se concentre plus particulièrement sur le style du code
- _Standard Airbnb_ : L'un des "standards" les plus connus, même s'il n'est pas officiellement lié à ES/JS
- _Nodemon_ : Outil permettant de relancer un serveur à chaque fois qu'un des fichiers est modifié
