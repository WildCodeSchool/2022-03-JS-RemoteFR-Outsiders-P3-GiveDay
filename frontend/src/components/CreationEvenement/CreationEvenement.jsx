import React, { useState, useEffect, useContext } from "react";
import "@components/CreationEvenement/creationEvenement.css";
import Cadeau from "@components/CreationEvenement/Cadeau";
import Layout from "@components/Layout";
import "../../pages/Home/home.css";
import "../../App.css";
import "../Nav/Nav.css";
import api from "@services/api";
import CurrentPagesContext from "../../PagesContexts";

function CreationEvenement() {
  const { userIsConnected } = useContext(CurrentPagesContext);
  const [isSubmit, setIsSubmit] = useState(false);
  const [idEvent, setIdEvent] = useState();

  const [code, setNewCode] = useState();
  const [asso, setAsso] = useState([]);
  const [createEvent, setCreateEvent] = useState({
    code: "",
    prenom: "",
    age: "",
    date: "",
    heure_de_debut: "",
    heure_de_fin: "",
    lieu: "",
    telephone: "",
    mail: "",
    asso_id: "",
    user_id: 4 /** VALEUR EN DUR POUR L INSTANT */,
  });

  useEffect(() => {
    api
      .get("api/asso")
      .then((res) => setAsso(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setCreateEvent({
      ...createEvent,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(!isSubmit);

    api
      .post("api/createEvent", createEvent)
      .then((res) => {
        setIdEvent(res.data.id);
      })
      .catch((err) => console.error(err));
  };

  function genCode(firstname, len) {
    const r = (Math.random() + 1).toString(36).substring(len);
    const cd = `${firstname}-${r}`;
    setNewCode(cd);
    return code;
  }

  useEffect(() => {
    const cd = genCode(createEvent.prenom, 7);
    createEvent.code = cd;
    if (createEvent.prenom.length < 1) {
      setNewCode("");
    }
  }, [createEvent]);

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
          {" "}
          {!isSubmit ? (
            <>
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
                  required
                />
              </label>
              <label htmlFor="input_eve_age">
                Age de la personne célébrée
                <input
                  className="inputForm"
                  id="input_eve_age"
                  onChange={handleChange}
                  value={createEvent.age}
                  type="text"
                  name="age"
                  placeholder="8"
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
                />
              </label>
              <label htmlFor="asso-select">
                Pour l'association
                <select
                  required
                  name="asso_id"
                  id="asso-select"
                  onChange={handleChange}
                >
                  {" "}
                  <option value="">---</option>
                  {asso.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nom}
                    </option>
                  ))}
                </select>
              </label>
              <br />
              {userIsConnected ? (
                <button
                  className="buttonStyle"
                  type="submit"
                  form="creationEvenement"
                  value="Submit"
                >
                  🎉 Envoyer mes infos
                </button>
              ) : (
                <button
                  className="buttonStyle notConnected"
                  type="button"
                  value="Submit"
                >
                  Connexion requise
                </button>
              )}
              <br />{" "}
            </>
          ) : (
            <Cadeau idEvent={idEvent} />
          )}
        </form>
      </div>
    </Layout>
  );
}

export default CreationEvenement;
