import React, { useContext } from "react";
import blog2 from "../../assets/images/blog2.gif";
import "./user.css";
import CurrentPagesContext from "../../PagesContexts";

function ViewUser() {
  const { accountConnected } = useContext(CurrentPagesContext);
  return (
    <div id="viewUserContainer">
      <img src={blog2} alt="photoProfile" />
      <h1>{accountConnected.user.prenom}</h1>
      <h2>{accountConnected.user.nom}</h2>
      <p>{accountConnected.user.email}</p>
    </div>
  );
}

export default ViewUser;
