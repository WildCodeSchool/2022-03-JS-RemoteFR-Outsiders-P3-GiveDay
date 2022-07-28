/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import api from "@services/api";
import "./user.css";
import Swal from "sweetalert2";

function Register({ hundleOpenNewAccount, setUserIsConnected }) {
  const [user, setUser] = useState({
    role: "user",
  });
  const handleRegister = (event) => {
    event.preventDefault();
    if (user.password === user.repeatPassword) {
      api
        .post("/api/auth/register", user, { withCredentials: true })
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
              title: "Votre compte a bien été créé !",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
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
            name="nom"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label>
          Prénom
          <input
            className="inputForm"
            name="prenom"
            type="name"
            onChange={handleChange}
          />
        </label>
        <label>
          Mail
          <input
            className="inputForm"
            type="email"
            name="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$"
            onChange={handleChange}
          />
        </label>
        <label>
          Mot de passe
          <input
            className="inputForm"
            type="password"
            name="password"
            pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
            onChange={handleChange}
          />
        </label>
        <label>
          Confirmer mot de passe
          <input
            className="inputForm"
            type="password"
            name="repeatPassword"
            pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
            onChange={handleChange}
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
