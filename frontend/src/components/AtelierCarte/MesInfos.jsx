/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

function MesInfos({ cardContain, setCardContain, printDocument }) {
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
          />
        </label>
        <br />
        <input
          type="submit"
          value="Remplissage Auto"
          className="buttonStyle save"
        />
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
