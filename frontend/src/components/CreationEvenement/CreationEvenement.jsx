import React, { useState, useEffect } from "react";
import "@components/CreationEvenement/creationEvenement.css";
import Cadeau from "@components/CreationEvenement/Cadeau";
import axios from "axios";
import Layout from "@components/Layout";
import "../../pages/Home/home.css";
import "../../App.css";
import "../Nav/Nav.css";

function CreationEvenement() {
  const [cadeauxList, setcadeauxList] = useState([]);
  const [code, setNewCode] = useState();
  const [form, setform] = useState({
    code: 2140 /** VALEUR EN DUR POUR L INSTANT attention valeur unique pour la bdd */,
    prenom: "",
    age: "",
    date: "",
    heure_de_debut: "",
    heure_de_fin: "",
    lieu: "",
    telephone: "",
    mail: "",
    asso_event_id: 1 /** VALEUR EN DUR POUR L INSTANT */,
    user_id: 3 /** VALEUR EN DUR POUR L INSTANT */,
  });
  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.warn(Array.from(data.entries()));
    axios.post("http://localhost:5000/api/event", form).then((res) => res.data);
  };

  const handleAdd = () => {
    setcadeauxList(cadeauxList.concat(<Cadeau name="lego" />));
  };

  function genCode(firstname, len) {
    const r = (Math.random() + 1).toString(36).substring(len);
    const cd = `${firstname}-${r}`;
    setNewCode(cd);
    return code;
  }

  useEffect(() => {
    const cd = genCode(form.prenom, 7);
    form.code = cd;
    if (form.prenom.length < 1) {
      setNewCode("");
    }
  }, [form]);

  return (
    <Layout>
      <div className="eventFlex">
        <form
          id="creationEvenement"
          className="giveForm"
          action="/api/route/evenement"
          method="post"
          onSubmit={onSubmit}
        >
          <h1>Créez votre évènement</h1>
          <p className="codeEvenement">CODE : {code} </p>
          <label htmlFor="input_eve_mail">
            Email de l'organisateur
            <input
              className="inputForm"
              id="input_eve_mail"
              type="mail"
              onChange={handleChange}
              name="mail"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="john.doe@email.fr"
            />
          </label>

          <label htmlFor="input_eve_age">
            Age de la personne célébrée
            <input
              className="inputForm"
              id="input_eve_age"
              onChange={handleChange}
              type="text"
              name="age"
              placeholder="8"
            />
          </label>

          <label htmlFor="input_eve_firstname">
            Prénom de la personne célébrée
            <input
              className="inputForm"
              id="input_eve_firstname"
              onChange={handleChange}
              type="text"
              name="prenom"
              placeholder="Gabriel"
            />
          </label>

          <label htmlFor="input_eve_date">
            Date de l'évènement
            <input
              id="input_eve_date"
              className="inputForm"
              type="date"
              name="date"
              onChange={handleChange}
              value={new Date()}
              min={new Date()}
            />
          </label>

          <label htmlFor="input_eve_hour_start">
            Heure de début
            <input
              id="input_eve_hour_start"
              className="inputForm"
              type="time"
              onChange={handleChange}
              name="heure_de_debut"
              min="09:00"
              max="22:00"
            />
          </label>

          <label htmlFor="input_eve_hour_end">
            Heure de fin
            <input
              id="input_eve_hour_end"
              className="inputForm"
              type="time"
              onChange={handleChange}
              name="heure_de_fin"
              min="11:00"
              max="00:00"
            />
          </label>
          <label htmlFor="input_eve_place">
            Lieu du rendez-vous
            <input
              id="input_eve_place"
              className="inputForm"
              onChange={handleChange}
              type="text"
              name="lieu"
              placeholder="Parc de la tête d'or, Lyon"
            />
          </label>

          <label htmlFor="input_eve_phone">
            N° Téléphone de l'organisateur
            <input
              id="input_eve_phone"
              className="inputForm"
              type="tel"
              onChange={handleChange}
              name="telephone"
              pattern="^(\+33 |0)[1-9]( \d\d){4}$"
              placeholder="06 00 00 00 00"
            />
          </label>

          <label htmlFor="asso-select">
            Pour l'association
            <select name="associations" id="asso-select">
              <option value="0">--Choisir un association--</option>
              <option value="1">Pâte Blanche</option>
              <option value="2">Rejoué</option>
              <option value="3">Terre de Milpa</option>
            </select>
          </label>

          <span className="title">LISTE DES CADEAUX SOUHAITES</span>
          <div className="cadeauxList">
            <Cadeau name="lego" />
            {cadeauxList}
          </div>

          <button
            id="ajouterCadeau"
            className="buttonStyle"
            type="button"
            onClick={handleAdd}
          >
            🎁 Ajouter un cadeau
          </button>

          <button
            className="buttonStyle"
            type="submit"
            form="creationEvenement"
            value="Submit"
            onClick={handleAdd}
          >
            🎉 Créer l'évènement
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default CreationEvenement;
