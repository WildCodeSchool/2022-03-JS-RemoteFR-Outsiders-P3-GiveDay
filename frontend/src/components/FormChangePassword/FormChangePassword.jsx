import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import "./FormChangePassword.css";
import api from "@services/api";

// 1 : la page changement du mot de passe doit apparaitre quand le params (aqAqGr1dPGhlC) = tokenpwd de la base (aqAqGr1dPGhlC)
// 2 : si oui : on afficher le changement de mot de passe sinon afficher un message type demande non authorisée
// 3 : comparer les 2 mots de passes identique + 1 pattern si oui update du mot (voir dans register)

function ResetPasswordForm() {
  const [isAuthorized, setIsAuthorized] = useState();
  const [message, setMessage] = useState("");
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const [infos, setInfos] = useState();

  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputRef1.current.value === inputRef2.current.value) {
      const newPassword = inputRef1.current.value;
      api
        .put(
          `/api/reset/updatepassword/${infos.id}`,
          { newPassword },
          { withCredentials: true }
        )
        .then((res) => {
          return res.data;
        })
        .catch(() => {
          setIsAuthorized("forbidden");
          console.error("Update refusée");
        });
      setMessage("Votre mot de passe est modifié !");
      setIsAuthorized("passwordValidated");
    } else {
      setMessage("Veuillez entrer 2 mots de passe identiques.");
    }
  };

  useEffect(() => {
    api
      .get(`/api/reset/checktoken/${id}`, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        if (data[0].tokenpwd === id) {
          setIsAuthorized("authorised");
          console.warn("Demande est autorisée");
          return data;
        }
        return false;
      })
      .then((data) => {
        setInfos(data[0]);
      })
      .catch(() => {
        setIsAuthorized("forbidden");
        console.warn("Demande non autorisée");
      });
  }, []);

  if (isAuthorized === "authorised") {
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
            placeholder="Entrez le mot de passe"
            ref={inputRef1}
            pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
          />
          <input
            type="password"
            name="password2"
            className="form-control"
            id="password2Input"
            aria-describedby="password2"
            placeholder="Confirmez le mot de passe"
            ref={inputRef2}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          value="Valider le nouveau mot de passe"
          pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
        />
        <p className="message red">{message}</p>
        <p className="descriptif">
          * Mettre au moins 8 caracteres dont : 1 majuscule, 1 minuscule, 1
          chiffre et 1 caractère spécial
        </p>
      </form>
    );
  }
  if (isAuthorized === "passwordValidated") {
    return (
      <form
        className="form-change-password-email"
        name="form-reset-password-email"
        onSubmit={handleSubmit}
      >
        <p className="confirmation">Votre mot de passe à bien été modifié !</p>
        <Link to="/" className="btn btn-primary">
          <button className="btn btn-primary" type="button">
            Retourner sur la page d'accueil
          </button>
        </Link>
      </form>
    );
  }
  return <div>forbidden</div>;
}

export default ResetPasswordForm;
