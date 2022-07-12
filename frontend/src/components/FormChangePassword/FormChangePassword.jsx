/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./FormChangePassword.css";
// import api from "@services/api";

function ResetPasswordForm() {
  const { id } = useParams();
  console.warn(id);
  // eslint-disable-next-line no-unused-vars
  const [passwords, setPasswords] = useState({
    password1: "",
    password2: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.warn("lancement d'axios...");
    /* api
      .get(`/api/reset/isemailexists/${passwords}`, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        if (data) {
          console.warn(data);
        }
      });
      */
  };

  const handleChange = (e) => {
    setPasswords(e.target.value);
  };

  return (
    <form
      className="form-change-password-email"
      name="form-reset-password-email"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="emailInput">Changement de mot de passe</label>
        <input
          type="password"
          name="password1"
          className="form-control"
          id="password1Input"
          aria-describedby="password1"
          placeholder="Entrez votre email"
          value={passwords.password1}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password2"
          className="form-control"
          id="password2Input"
          aria-describedby="password2"
          placeholder="Confirmez le mot de passe"
          value={passwords.password2}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        className="btn btn-primary"
        value="Valider le nouveau mot de passe"
      />
    </form>
  );
}

export default ResetPasswordForm;
