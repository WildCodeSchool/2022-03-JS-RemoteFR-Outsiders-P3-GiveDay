import React, { useState } from "react";
import "@components/CreationEvenement/creationEvenement.css";
import Cadeau from "@components/CreationEvenement/Cadeau";

function CreationEvenement() {
  const [cadeauxList, setcadeauxList] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.warn(Array.from(data.entries()));
  };

  const handleAdd = () => {
    setcadeauxList(cadeauxList.concat(<Cadeau name="lego" />));
  };

  return (
    <div>
      <h1>CreationEvenement</h1>
      <h2>CODE : 202204-KV-01</h2>
      <form
        id="creationEvenement"
        className="giveForm"
        action="/api/route/evenement"
        method="post"
        onSubmit={onSubmit}
      >
        <label htmlFor="input_eve_mail">
          Email de l'organisateur
          <input
            id="input_eve_mail"
            type="mail"
            onChange={handleChange}
            name="adresse_mail"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="john.doe@email.fr"
            required
          />
        </label>

        <label htmlFor="input_eve_lastname">
          Age de la personne célébrée
          <input
            id="input_eve_age"
            onChange={handleChange}
            type="text"
            name="age"
            placeholder="8"
            required
          />
        </label>

        <label htmlFor="input_eve_firstname">
          Prénom de la personne célébrée
          <input
            id="input_eve_firstname"
            onChange={handleChange}
            type="text"
            name="firstname"
            placeholder="Gabriel"
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
            placeholder="Parc de la tête d'or, Lyon"
            required
          />
        </label>

        <label htmlFor="input_eve_phone">
          N° Téléphone de l'organisateur
          <input
            id="input_eve_phone"
            type="tel"
            onChange={handleChange}
            name="Numero_telephone"
            pattern="^(\+33 |0)[1-9]( \d\d){4}$"
            placeholder="06 00 00 00 00"
            required
          />
        </label>

        <span className="title">LISTE DES CADEAUX SOUHAITES</span>
        <div className="cadeauxList">
          <Cadeau name="lego" />
          {cadeauxList}
        </div>

        <button className="button-add-cadeau" type="button" onClick={handleAdd}>
          🎁 Ajouter un cadeau
        </button>

        <button
          type="submit"
          form="creationEvenement"
          value="Submit"
          onClick={handleAdd}
        >
          🎉 Créer l'évènement
        </button>
      </form>
    </div>
  );
}

export default CreationEvenement;
