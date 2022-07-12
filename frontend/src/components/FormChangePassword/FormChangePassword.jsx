import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./FormChangePassword.css";
import api from "@services/api";

// OK : la page changement du mot de passe doit apparaitre quand le params (aqAqGr1dPGhlC) = tokenpwd de la base (aqAqGr1dPGhlC)
// OK : si oui : on afficher le changement de mot de passe sinon afficher un message type demande non authorisée
// 3 : comparer les 2 mots de passes identique + 1 pattern si oui update du mot (voir dans register)

/* const [user, setUser] = useState({
  prenom: "",
  nom: "",
  email: "",
  password: "",
});
const handleRegister = (event) => {
  event.preventDefault();
  api
    .post("/api/auth/register", user, { withCredentials: true })
    .then((res) => res.data)
    .then((data) => {
      if (data) {
        setUserIsConnected(true);
      }
    });
}; */

function ResetPasswordForm() {
  const [isMessageOk, setIsMessageOk] = useState();

  const { id } = useParams();
  console.warn(id);

  useEffect(() => {
    console.warn("Effect is loaded");
    api
      .get(`/api/reset/checktoken/${id}`, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        if (data[0].tokenpwd === id) {
          setIsMessageOk("authorised");
          console.warn("Demande est authorisée");
        }
      })
      .catch(() => {
        setIsMessageOk("forbidden");
        console.warn("Demande non authorisée");
      });
  }, []);

  const [passwords, setPasswords] = useState({
    password1: "",
    password2: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.warn("lancement d'axios...");
  };

  const handleChange = (e) => {
    setPasswords(e.target.value);
  };

  if (isMessageOk === "authorised") {
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
            pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
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
          pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
        />
        <p>
          Mettre au moins 8 caracteres 1 majuscule 1 minuscule 1 nombre 1 signe
        </p>
      </form>
    );
  }
  return <div>forbidden</div>;
}

export default ResetPasswordForm;
