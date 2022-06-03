import React from "react";
import "./creationEvenement.css";

function CreationEvenement() {
  const handleChange = (event) => {
    event.preventDefault();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.warn(Array.from(data.entries()));
  };

  return (
    <div>
      <h1>CreationEvenement</h1>
      <form
        id="creationEvenement"
        className="giveForm"
        action="/api/route/evenement"
        method="post"
        onSubmit={onSubmit}
      >
        <label htmlFor="input_eve_mail">
          Email
          <input
            id="input_eve_mail"
            type="mail"
            onChange={handleChange}
            name="adresse_mail"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="Entrez votre email exemple :john.doe@email.fr"
            required
          />
        </label>

        <label htmlFor="input_eve_lastname">
          Nom
          <input
            id="input_eve_lastname"
            onChange={handleChange}
            type="text"
            name="lastname"
            placeholder="Entrez votre nom"
            required
          />
        </label>

        <label htmlFor="input_eve_firstname">
          Prénom
          <input
            id="input_eve_firstname"
            onChange={handleChange}
            type="text"
            name="firstname"
            placeholder="Entrez votre prénom"
            required
          />
        </label>
        <label htmlFor="input_eve_firstname">
          Date de l'évènement
          <input
            id="input_eve_date"
            type="date"
            name="date"
            onChange={handleChange}
            value="2018-07-22"
            min="2018-01-01"
            max="2018-12-31"
            required
          />
        </label>
        <label htmlFor="input_eve_hour_start">
          Heure de début
          <input
            id="input_eve_hour_start"
            type="time"
            onChange={handleChange}
            name="heure_debut"
            min="09:00"
            max="22:00"
            required
          />
        </label>
        <label htmlFor="input_eve_hour_end">
          Heure de fin
          <input
            id="input_eve_hour_end"
            type="time"
            onChange={handleChange}
            name="heure_fin"
            min="11:00"
            max="00:00"
            required
          />
        </label>

        <label htmlFor="input_eve_place">
          Lieu du rendez-vous
          <input
            id="input_eve_place"
            onChange={handleChange}
            type="text"
            name="lieu_rendez_vous"
            placeholder="Lieu du rendez-vous"
            required
          />
        </label>

        <label htmlFor="input_eve_phone">
          N° Téléphone
          <input
            id="input_eve_phone"
            type="tel"
            onChange={handleChange}
            name="Numero_telephone"
            pattern="^(\+33 |0)[1-9]( \d\d){4}$"
            placeholder="Entrez votre numero exemple : 06 99 33 22 11"
            required
          />
        </label>

        <label htmlFor="input_eve_present">
          Vos cadeaux
          <textarea id="input_eve_present" name="cadeaux" rows="5">
            entrez vos souhaits de cadeaux
          </textarea>
        </label>

        <label htmlFor="select_eve_theme">
          Le thème de la carte
          <select id="select_eve_theme" name="theme">
            <option value="1" selected="selected">
              Panda
            </option>
            <option value="2">starwars</option>
            <option value="3">chats</option>
          </select>
        </label>

        <input type="submit" value="Envoyer le formulaire" />
      </form>
    </div>
  );
}

export default CreationEvenement;
