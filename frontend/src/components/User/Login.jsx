/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import api from "@services/api";
import { Link } from "react-router-dom";
import "./user.css";
import Swal from "sweetalert2";

function Login({ hundleOpenLogin, setUserIsConnected }) {
  const [errorLogin, setErrorLogin] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (event) => {
    event.preventDefault();

    api
      .post("/api/auth/login", user, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        if (data) {
          localStorage.setItem("user", JSON.stringify(data));
          setUserIsConnected(true);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Vous êtes connecté !",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        setErrorLogin(true);
      });
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
        <Link to="/resetpassword-ask">J'ai oublié mon mot de passe</Link>
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
