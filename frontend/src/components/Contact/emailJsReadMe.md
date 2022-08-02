# EmailJS

Package qui permet de lier son adresse email à un formulaire de contact.

Version gratuite 200 email par mois.

Créer son compte sur :

[Send email from Javascript - no server code required | EmailJS](https://www.emailjs.com/)

Une fois le compte créé, choisir sa boîte mail / ou cliquer sur`+add new services` si compte déjà créé.

Ajouter un nom au service et cliquer sur `connect account` pour le lier à la boîte mail désirée.

Cliquer ensuite sur `create service`

Dans la navigation à gauche , aller dans Email Template puis `+ create new template`

Modifier le template , pour récupérer les infos de l’expéditeur, ex : name, message et email. (conserver les accolades elles permettent de récupérer les infos via le code)

Récupérer ensuite les informations suivantes:

- service ID : dans Email Services en cliquant sur l’icône crayon pour éditer

- emplate ID : dans Email Templates ⇒icône crayon ⇒ settings

- Public Key : dans Account / General

Il faut les insérer dans le code! (voir ci-dessous)

Configuration du code

````emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };```
````
