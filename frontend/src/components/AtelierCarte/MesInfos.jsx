/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from "react";
import CurrentPagesContext from "../../PagesContexts";

function MesInfos({ cardContain, setCardContain, printDocument }) {
  const { createEvent } = useContext(CurrentPagesContext);
  const { asso } = useContext(CurrentPagesContext);
  const assoResult = () => {
    if (createEvent.asso_id !== "") {
      return asso[createEvent.asso_id - 1].nom;
    }
    return "";
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCardContain({
      ...cardContain,
      [e.target.name]: e.target.value,
    });
  };
  // console.warn(cardContain);
  return (
    <div id="formContainer">
      <form className="form">
        <label>
          Mon prénom
          <input
            className="inputForm"
            type="text"
            name="name"
            onChange={handleChange}
            maxLength="10"
            required
            placeholder={createEvent.prenom ? createEvent.prenom : undefined}
          />
        </label>
        <label>
          Lieu
          <input
            className="inputForm"
            type="text"
            name="place"
            onChange={handleChange}
            required
            placeholder={createEvent.lieu ? createEvent.lieu : undefined}
          />
        </label>
        <label>
          Mon adresse
          <input
            className="inputForm"
            type="text"
            name="address"
            onChange={handleChange}
            required
            placeholder={createEvent.adress ? createEvent.adress : undefined}
          />
        </label>
        <label>
          Date
          <input
            className="inputForm"
            type="text"
            name="date"
            onChange={handleChange}
            required
            placeholder={createEvent.date ? createEvent.date : undefined}
          />
        </label>
        <label>
          Heure
          <input
            className="inputForm"
            type="text"
            name="time"
            onChange={handleChange}
            required
            placeholder={
              createEvent.heure_de_debut
                ? createEvent.heure_de_debut
                : undefined
            }
          />
        </label>
        <label>
          Mon téléphone
          <input
            className="inputForm"
            type="text"
            name="mobile"
            onChange={handleChange}
            required
            placeholder={
              createEvent.telephone ? createEvent.telephone : undefined
            }
          />
        </label>
        <label>
          Mon mail
          <input
            className="inputForm"
            type="text"
            name="email"
            onChange={handleChange}
            required
            placeholder={createEvent.mail ? createEvent.mail : undefined}
          />
        </label>
        <label>
          L'asso que j'ai choisi
          <input
            className="inputForm"
            type="text"
            name="asso"
            onChange={handleChange}
            required
            placeholder={assoResult()}
          />
        </label>
        <br />
        {/* <input
          type="button"
          value="Remplissage Auto"
          className="buttonStyle save"
        /> */}
        <br />
        <input
          type="button"
          value="Télécharger PDF"
          className="buttonStyle save"
          onClick={printDocument}
        />
      </form>
    </div>
  );
}

export default MesInfos;
