/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import axios from "axios";
import "./user.css";

function Login({ hundleOpenLogin, setUserIsConnected }) {
  const API = `http://localhost:5000/api/auth/login`;
  const [errorLogin, setErrorLogin] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (event) => {
    event.preventDefault();
    console.warn(user);
    axios
      .post(API, user, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        if (data) {
          setUserIsConnected(true);
        }
      })
      .catch(setErrorLogin(true));
  };
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
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
            name="email"
            onChange={handleChange}
            minLength="7"
          />
        </label>
        <label>
          Mot de passe
          <input
            className="inputForm"
            type="password"
            name="password"
            onChange={handleChange}
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
