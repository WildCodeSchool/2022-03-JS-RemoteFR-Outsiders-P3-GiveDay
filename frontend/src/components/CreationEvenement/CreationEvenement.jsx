import React from "react";
import "./creationEvenement.css";

function CreationEvenement() {
  return (
    <div>
      <h1>CreationEvenement</h1>
      <form id="creationEvenement" action="/api/route/evenement" method="post">
        <input
          id="input_eve_mail"
          type="mail"
          name="adresse_mail"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          placeholder="Entrez votre email exemple :john.doe@email.fr"
          required
        />

        <input
          id="input_eve_lastname"
          type="text"
          name="lastname"
          placeholder="Entrez votre nom"
          required
        />
        <input
          id="input_eve_firstname"
          type="text"
          name="firstname"
          placeholder="Entrez votre prénom"
          required
        />

        <input
          id="input_eve_date"
          type="date"
          name="date"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
          required
        />

        <input
          id="input_eve_hour_start"
          type="time"
          name="heure_debut"
          min="09:00"
          max="22:00"
          required
        />

        <input
          id="input_eve_hour_end"
          type="time"
          name="heure_fin"
          min="11:00"
          max="00:00"
          required
        />

        <input
          id="input_eve_place"
          type="text"
          name="lieu_rendez_vous"
          placeholder="Lieu du rendez-vous"
          required
        />

        <input
          id="input_eve_phone"
          type="tel"
          name="Numero_telephone"
          pattern="^(\+33 |0)[1-9]( \d\d){4}$"
          placeholder="Entrez votre numero exemple : 06 99 33 22 11"
          required
        />

        <textarea id="input_eve_present" name="cadeaux" rows="5">
          entrez vos souhaits de cadeaux
        </textarea>

        <select id="select_eve_theme" name="theme">
          <option value="1" selected="selected">
            Panda
          </option>
          <option value="2">starwars</option>
          <option value="3">chats</option>
        </select>

        <input type="submit" value="Envoyer le formulaire" />
      </form>
    </div>
  );
}

export default CreationEvenement;
