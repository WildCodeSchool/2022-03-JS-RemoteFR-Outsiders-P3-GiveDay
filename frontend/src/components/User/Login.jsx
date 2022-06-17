/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "./user.css";

function Login({ hundleOpenLogin }) {
  const [errorLogin, setErrorLogin] = useState(false);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    setErrorLogin(true);
  };
  return (
    <div className="formContainer">
      <button
        type="button"
        className="exitFormContainer"
        onClick={hundleOpenLogin}
      >
        X
      </button>
      <form className="form" onSubmit={handleLogin}>
        <p>Vous avez déjà un compte ?</p>
        <label>
          Mail
          <input
            className="inputForm"
            type="text"
            value={mail}
            name="Mail"
            onChange={({ target }) => setMail(target.value)}
            minLength="7"
          />
        </label>
        <label>
          Mot de passe
          <input
            className="inputForm"
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
            minLength="8"
          />
        </label>
        <input type="submit" value="Valider" className="buttonStyle" />
        <a className="forget" href="www.google.com">
          J'ai oblié mon mot de passe
        </a>
        {errorLogin ? (
          <span className="errorLogin">
            Opps ! il y a un problème avec votre compte
          </span>
        ) : null}
      </form>
    </div>
  );
}

export default Login;
