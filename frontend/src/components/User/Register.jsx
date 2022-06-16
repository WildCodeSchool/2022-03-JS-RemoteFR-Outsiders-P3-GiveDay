/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "./user.css";

function Register({ hundleOpenNewAccount }) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();
  };
  return (
    <div className="formContainer">
      <button
        type="button"
        className="exitFormContainer"
        onClick={hundleOpenNewAccount}
      >
        X
      </button>
      <form className="form" onSubmit={handleRegister}>
        <p>
          Nouveau sur <span className="styleLogo"> Giveday </span>?
        </p>
        <label>
          Nom
          <input
            className="inputForm"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label>
          Prénom
          <input
            className="inputForm"
            type="name"
            value={lastname}
            onChange={({ target }) => setLastname(target.value)}
          />
        </label>
        <label>
          Mail
          <input
            className="inputForm"
            type="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$"
            value={mail}
            onChange={({ target }) => setMail(target.value)}
          />
        </label>
        <label>
          Mot de passe
          <input
            className="inputForm"
            type="password"
            pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <span className="detailsInput">
            Votre mot de passe doit contenir au moins 8 caractères (majuscule +
            minuscule + nombre + caractère spéciaux)
          </span>
        </label>
        <input type="submit" value="Valider" className="buttonStyle" />
      </form>
    </div>
  );
}

export default Register;
