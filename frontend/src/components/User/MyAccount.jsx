/* eslint-disable react/no-array-index-key */ /* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext, useEffect } from "react";
import api from "@services/api";
import "./user.css";
import ViewUser from "./ViewUser";
import CurrentPagesContext from "../../PagesContexts";

function MyAccount({ hundleOpenMyAccount }) {
  const { accountConnected } = useContext(CurrentPagesContext);
  const [user, setUser] = useState({ id: accountConnected.id });
  const handlePutMyAccount = (event) => {
    event.preventDefault();
    if (user.password === user.repeatPassword) {
      api
        .put(`/api/users/update/${accountConnected.id}`, user, {
          withCredentials: true,
        })
        .then((res) => res.data)
        .then((data) => {
          if (data) {
            console.warn(data);
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
  const [userMyAccount, setUserMyAccount] = useState({});
  useEffect(() => {
    api
      .get(`/api/users/${accountConnected.id}`, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        if (data) {
          setUserMyAccount(data);
        }
      });
  }, []);
  console.warn(userMyAccount);
  return (
    <div className="formContainer" id="MyUser">
      <button
        type="button"
        className="exitFormContainer"
        onClick={hundleOpenMyAccount}
      >
        X
      </button>
      <section className="eventSection1">
        <h1 className="eventSection1Title">Modifier mes informations</h1> <br />
        <form className="form" onSubmit={handlePutMyAccount}>
          <div className="formsContainer">
            <div>
              <label>
                NOM
                <input
                  className="inputForm"
                  name="nom"
                  type="text"
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
                Adresse
                <input
                  className="inputForm"
                  name="nom"
                  type="adresse"
                  onChange={handleChange}
                />
              </label>
              <label>
                Ville
                <input
                  className="inputForm"
                  type="text"
                  name="ville"
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
            </div>
            <div>
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
                Téléphone
                <input
                  className="inputForm"
                  type="text"
                  name="Téléphone"
                  onChange={handleChange}
                />
              </label>
              <label>
                Code Postal
                <input
                  className="inputForm"
                  name="codePostal"
                  type="text"
                  onChange={handleChange}
                />
              </label>
              <label>
                Pays
                <input
                  className="inputForm"
                  type="text"
                  name="pays"
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
                <span className="detailsInput detailsInputMyAccount">
                  Votre mot de passe doit contenir au moins 8 caractères
                  (majuscule + minuscule + nombre + caractère spéciaux)
                </span>
              </label>
            </div>
          </div>
          <br />
          <input type="submit" value="Sauvegarder" className="buttonStyle" />
        </form>
      </section>
      <section className="eventSection2">
        <ViewUser />
      </section>
    </div>
  );
}

export default MyAccount;
