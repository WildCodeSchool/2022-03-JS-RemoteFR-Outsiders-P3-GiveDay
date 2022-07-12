import React, { useState, useEffect, useRef } from "react";
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
*/

function ResetPasswordForm() {
  const [isAuthorized, setIsAuthorized] = useState();
  const [message, setMessage] = useState("");
  // let infos = "";
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  let infos = useRef(null);

  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.warn({ infos });
    if (inputRef1.current.value === inputRef2.current.value) {
      api
        .post(
          "/api/auth/register",
          [infos.prenom, infos.nom, infos.email, "user", inputRef1],
          { withCredentials: true }
        )
        .then((res) => {
          console.warn(res.data);
          return res.data;
        })
        .catch(() => {
          // setIsAuthorized("forbidden");
          console.error("Modification refusée");
        });

      setMessage("Votre mot de passe est modifié !");
    } else {
      setMessage("Veuillez entrer 2 mots de passe identiques.");
    }
    console.warn(message);
  };

  // Verification : autorise / non-autorise
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
        infos = { ...data[0] };
        console.warn({ infos });
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
            // pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
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
          // pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
        />
        <p className="message red">{message}</p>
        <p className="descriptif">
          * Mettre au moins 8 caracteres 1 majuscule 1 minuscule 1 nombre 1
          signe
        </p>
      </form>
    );
  }
  return <div>forbidden</div>;
}

export default ResetPasswordForm;
