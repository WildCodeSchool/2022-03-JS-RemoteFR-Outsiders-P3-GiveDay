/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "./user.css";

function MyEvents({ hundleOpenMyEvents }) {
  const handleMyEvents = (event) => {
    event.preventDefault();
  };
  return (
    <div className="formContainer">
      <button
        type="button"
        className="exitFormContainer"
        onClick={hundleOpenMyEvents}
      >
        X
      </button>
      <form className="form" onSubmit={handleMyEvents}>
        <p>
          Mes événements avec <span className="styleLogo"> Giveday </span>?
        </p>
        <label>
          Nom
          <input className="inputForm" type="text" />
        </label>
        <label>
          Prénom
          <input className="inputForm" type="name" />
        </label>
        <label>
          Mail
          <input
            className="inputForm"
            type="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$"
          />
        </label>
        <label>
          Mot de passe
          <input
            className="inputForm"
            type="password"
            pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
          />
          <span className="detailsInput">
            Votre mot de passe doit contenir au moins 8 caractères (majuscule +
            minuscule + nombre + caractère spéciaux)
          </span>
        </label>
        <input type="submit" value="Valider" className="buttonStyle " />
      </form>
    </div>
  );
}

export default MyEvents;
