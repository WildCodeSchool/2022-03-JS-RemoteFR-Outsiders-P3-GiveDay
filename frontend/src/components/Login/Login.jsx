/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "./login.css";

function Login() {
  const userAccount = { userMail: "test@test.com", userPassword: "12QWqw.." };

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {
      login: false,
      mail: { mail },
      password: { password },
    }
  );
  const [errorLogin, setErrorLogin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.warn("logging in with", mail, password);
    if (
      mail === userAccount.userMail &&
      password === userAccount.userPassword
    ) {
      setErrorLogin(false);
      setUser({ login: true, mail, password });
    } else {
      setErrorLogin(true);
      console.warn("problem");
    }

    localStorage.setItem(
      "user",
      JSON.stringify({ login: true, mail, password })
    );
  };

  const [openLogin, setOpenLogin] = useState(false);
  const [openNewAccount, setOpenNewAccount] = useState(false);
  const hundleOpenLogin = () => {
    setOpenLogin(!openLogin);
    setOpenNewAccount(false);
  };
  const hundleOpenNewAccount = () => {
    setOpenNewAccount(!openNewAccount);
    setOpenLogin(false);
  };
  const [openMyAccount, setOpenMyAccount] = useState(false);
  const [openMyEvents, setOpenMyEvents] = useState(false);
  const hundleMyAccount = () => {
    setOpenMyAccount(!openMyAccount);
    setOpenMyEvents(false);
  };
  const hundleMyEvents = () => {
    setOpenMyEvents(!openMyEvents);
    setOpenMyAccount(false);
    window.localStorage.removeItem("user");
    window.location.reload(true);
  };
  console.warn("USER is", user);
  console.warn("LOCALSTORAGE is", localStorage);
  if (
    user.login === true &&
    user.mail === userAccount.userMail &&
    user.password === userAccount.userPassword
  ) {
    return (
      <div className="loginContainer">
        <div className="buttonContainer">
          <button
            type="button"
            className="buttonStyle"
            onClick={hundleMyAccount}
          >
            Mon compte
          </button>
          <button
            type="button"
            className="buttonStyle"
            onClick={hundleMyEvents}
          >
            Mes événements
          </button>
        </div>
        {openMyAccount ? (
          <div className="formContainer">
            <button
              type="button"
              className="exitFormContainer"
              onClick={hundleMyAccount}
            >
              X
            </button>
            <form className="form" onSubmit={handleSubmit}>
              <p>Mon compte</p>
              <br /> <br />
              <label>
                Mail
                <br />
                <input
                  className="inputForm"
                  type="text"
                  value={mail}
                  name="Mail"
                  onChange={({ target }) => setMail(target.value)}
                  minLength="7"
                />
              </label>
              <label>
                Mot de passe
                <br />
                <input
                  className="inputForm"
                  type="password"
                  value={password}
                  name="Password"
                  onChange={({ target }) => setPassword(target.value)}
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
        ) : null}
        {openMyEvents ? (
          <div className="formContainer">
            <button
              type="button"
              className="exitFormContainer"
              onClick={hundleMyEvents}
            >
              X
            </button>
            <form className="form" onSubmit={handleSubmit}>
              <p>
                Mes événements avec <span className="styleLogo"> Giveday </span>
                ?
              </p>
              <br /> <br />
              <label>
                Nom
                <br />
                <input className="inputForm" type="text" />
              </label>
              <label>
                Prénom
                <br />
                <input className="inputForm" type="name" />
              </label>
              <label>
                Mail
                <br />
                <input
                  className="inputForm"
                  type="email"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$"
                />
              </label>
              <label>
                Mot de passe
                <br />
                <input
                  className="inputForm"
                  type="password"
                  pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
                />
                <span className="detailsInput">
                  Votre mot de passe doit contenir au moins 8 caractères
                  (majuscule + minuscule + nombre + caractère spéciaux)
                </span>
              </label>
              <input type="submit" value="Valider" className="buttonStyle" />
            </form>
          </div>
        ) : null}
      </div>
    );
  }
  return (
    <div className="loginContainer">
      <div className="buttonContainer">
        <button type="button" className="buttonStyle" onClick={hundleOpenLogin}>
          Se connecter
        </button>
        <button
          type="button"
          className="buttonStyle"
          onClick={hundleOpenNewAccount}
        >
          Créer un compte
        </button>
      </div>
      {openLogin ? (
        <div className="formContainer">
          <button
            type="button"
            className="exitFormContainer"
            onClick={hundleOpenLogin}
          >
            X
          </button>
          <form className="form" onSubmit={handleSubmit}>
            <p>Vous avez déjà un compte ?</p>
            <br /> <br />
            <label>
              Mail
              <br />
              <input
                className="inputForm"
                type="text"
                value={mail}
                name="Mail"
                onChange={({ target }) => setMail(target.value)}
                minLength="7"
              />
            </label>
            <label>
              Mot de passe
              <br />
              <input
                className="inputForm"
                type="password"
                value={password}
                name="Password"
                onChange={({ target }) => setPassword(target.value)}
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
      ) : null}
      {openNewAccount ? (
        <div className="formContainer">
          <button
            type="button"
            className="exitFormContainer"
            onClick={hundleOpenNewAccount}
          >
            X
          </button>
          <form className="form" onSubmit={handleSubmit}>
            <p>
              Nouveau sur <span className="styleLogo"> Giveday </span>?
            </p>
            <br /> <br />
            <label>
              Nom
              <br />
              <input className="inputForm" type="text" />
            </label>
            <label>
              Prénom
              <br />
              <input className="inputForm" type="name" />
            </label>
            <label>
              Mail
              <br />
              <input
                className="inputForm"
                type="email"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$"
              />
            </label>
            <label>
              Mot de passe
              <br />
              <input
                className="inputForm"
                type="password"
                pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
              />
              <span className="detailsInput">
                Votre mot de passe doit contenir au moins 8 caractères
                (majuscule + minuscule + nombre + caractère spéciaux)
              </span>
            </label>
            <input type="submit" value="Valider" className="buttonStyle" />
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Login;
