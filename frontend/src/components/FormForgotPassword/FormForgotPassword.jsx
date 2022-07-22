import React, { useState } from "react";
import "./FormForgotPassword.css";
import api from "@services/api";

function FormForgotPassword() {
  const [email, setEmail] = useState("");
  const [isAuthorized, setIsAuthorized] = useState("enterEmail");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    api
      .get(`/api/reset/isemailexists/${email}`, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        if (data) {
          setIsAuthorized("messageReceived");
        }
      });
  };

  if (isAuthorized === "enterEmail") {
    return (
      <form
        className="form-reset-password-email"
        name="form-reset-password-email"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="emailInput">Demande de nouveau mot de passe</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
            placeholder="Entrez votre email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          value="Demander un nouveau mot de passe"
        />
      </form>
    );
  }
  if (isAuthorized === "messageReceived") {
    return (
      <form
        className="form-reset-password-email"
        name="form-reset-password-email"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <p className="message">Vous allez recevoir un lien par mail</p>
        </div>
      </form>
    );
  }
}

export default FormForgotPassword;
