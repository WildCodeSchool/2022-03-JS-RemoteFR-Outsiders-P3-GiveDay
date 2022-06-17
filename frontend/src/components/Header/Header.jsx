/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "./Header.css";
import Login from "@components/User/User";
import Nav from "@components/Nav/Nav";
import logoGiveday from "@assets/images/logo2Giveday.png";

function Header() {
  return (
    <div className="headerContainer">
      <img src={logoGiveday} alt="LogoGiveday" className="logoGiveday" />
      <Login />
      <Nav />
    </div>
  );
}

export default Header;
