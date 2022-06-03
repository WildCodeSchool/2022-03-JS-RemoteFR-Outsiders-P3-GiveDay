/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "./login.css";

function Login() {
  const userIsIdentified = false;
  const [goToLogin, setGoToLogin] = useState(false);
  const [goToNewAccount, setGoToNewAccount] = useState(false);
  const hundleGoToLogin = () => {
    setGoToLogin(!goToLogin);
    setGoToNewAccount(false);
  };
  // console.warn(goToLogin);

  const hundleGoToNewAccount = () => {
    setGoToNewAccount(!goToNewAccount);
    setGoToLogin(false);
  };
  // console.warn(goToNewAccount);

  if (userIsIdentified) {
    return (
      <div className="loginContainer">
        <div className="buttonContainer">
          <button type="button" className="login" onClick>
            Mon compte
          </button>
          <button type="button" className="newAccount">
            Mes événements
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="loginContainer">
      <div className="buttonContainer">
        <button type="button" className="login" onClick={hundleGoToLogin}>
          Se connecter
        </button>
        <button
          type="button"
          className="newAccount"
          onClick={hundleGoToNewAccount}
        >
          Créer un compte
        </button>
      </div>
      {goToNewAccount ? (
        <div className="formContainer">
          <button
            type="button"
            className="exitFormContainer"
            onClick={hundleGoToNewAccount}
          >
            X
          </button>
          <form className="form">
            <label>
              Nom
              <br />
              <input className="inputForm" type="text" />
            </label>
            <label>
              Prénom
              <br />
              <input className="inputForm" type="name" />
            </label>
            <label>
              Mail
              <br />
              <input className="inputForm" type="email" />
            </label>
            <label>
              Mot de passe
              <br />
              <input className="inputForm" type="password" />
            </label>
            <input type="submit" value="Valider" className="submitForm" />
          </form>
        </div>
      ) : null}
      {goToLogin ? (
        <div className="formContainer">
          <button
            type="button"
            className="exitFormContainer"
            onClick={hundleGoToLogin}
          >
            X
          </button>
          <form className="form">
            <label>
              Mail
              <br />
              <input className="inputForm" type="email" />
            </label>
            <label>
              Mot de passe
              <br />
              <input className="inputForm" type="password" />
            </label>
            <input type="submit" value="Valider" className="submitForm" />
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Login;
