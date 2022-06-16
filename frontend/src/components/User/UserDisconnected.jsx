/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import Register from "@components/User/Register";
import Login from "@components/User/Login";
import "./user.css";

function UserDisconnected() {
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

  return (
    <div className="loginContainer">
      <div className="buttonContainer">
        <button
          type="button"
          className="buttonStyle buttonStyleLogin"
          onClick={hundleOpenLogin}
        >
          Se connecter
        </button>
        <button
          type="button"
          className="buttonStyle buttonStyleLogin"
          onClick={hundleOpenNewAccount}
        >
          Créer un compte
        </button>
      </div>
      {openLogin ? <Login hundleOpenLogin={hundleOpenLogin} /> : null}
      {openNewAccount ? (
        <Register hundleOpenNewAccount={hundleOpenNewAccount} />
      ) : null}
    </div>
  );
}

export default UserDisconnected;
