import React, { useState } from "react";
import "./FormForgotPassword.css";
import api from "@services/api";

function FormResetPassword() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.warn("lancement d'axios...");
    api
      .get(`/api/reset/isemailexists/${email}`, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        if (data) {
          console.warn(data);
        }
      });
  };

  return (
    <form
      className="form-reset-password-email"
      name="form-reset-password-email"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="emailInput">Nouveau mot de passe</label>
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

export default FormResetPassword;
