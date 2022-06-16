/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "./user.css";

function MyAccount({ hundleOpenMyAccount }) {
  const handleMyAccount = (event) => {
    event.preventDefault();
  };
  return (
    <div className="formContainer">
      <button
        type="button"
        className="exitFormContainer"
        onClick={hundleOpenMyAccount}
      >
        X
      </button>
      <form className="form" onSubmit={handleMyAccount}>
        <p>Mon compte</p>
        <label>
          Mail
          <input
            className="inputForm"
            type="text"
            // value={mail}
            name="Mail"
            // onChange={({ target }) => setMail(target.value)}
            minLength="7"
          />
        </label>
        <label>
          Mot de passe
          <input
            className="inputForm"
            type="password"
            // value={password}
            name="Password"
            // onChange={({ target }) => setPassword(target.value)}
            minLength="8"
          />
        </label>
        <input type="submit" value="Valider" className="buttonStyle" />
        <a className="forget" href="www.google.com">
          J'ai oblié mon mot de passe
        </a>
      </form>
    </div>
  );
}

export default MyAccount;
