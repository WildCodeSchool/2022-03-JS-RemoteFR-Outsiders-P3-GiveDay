/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "./Header.css";
import Login from "@components/Login/Login";
import Nav from "@components/Nav/Nav";
import logoGiveday from "@assets/images/logoGiveday.png";

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
