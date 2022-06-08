/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "./Nav.css";
import Home from "@pages/Home/Home";
import Associations from "@pages/Associations/Associations";
import NotreBelleHistoire from "@pages/NotreBelleHistoire/NotreBelleHistoire";

function Nav() {
  const [accueil, setAcceuil] = useState(true);
  const [histoire, setHistoire] = useState(false);
  const [associations, setAssociations] = useState(false);
  const goToAccueil = () => {
    setAcceuil(true);
    setHistoire(false);
    setAssociations(false);
  };
  const goToHistoire = () => {
    setAcceuil(false);
    setHistoire(true);
    setAssociations(false);
  };
  const goToAssociations = () => {
    setAcceuil(false);
    setHistoire(false);
    setAssociations(true);
  };
  return (
    <div className="navAndContain">
      <div className="navContainer">
        <nav>
          <button
            type="button"
            className={accueil ? "navLinkOn" : "navLinkOff"}
            onClick={goToAccueil}
          >
            <h2>ACCUEIL</h2>
          </button>
          <button
            type="button"
            className={histoire ? "navLinkOn" : "navLinkOff"}
            onClick={goToHistoire}
          >
            <h2>NOTRE HISTORE</h2>
          </button>
          <button
            type="button"
            className={associations ? "navLinkOn" : "navLinkOff"}
            onClick={goToAssociations}
          >
            <h2>ASSOCIATIONS</h2>
          </button>
        </nav>
      </div>

      {accueil ? (
        <div className="containerContain">
          <Home />
        </div>
      ) : null}

      {associations ? (
        <div className="containerContain">
          <Associations />
        </div>
      ) : null}

      {histoire ? (
        <div className="containerContain">
          <NotreBelleHistoire />
        </div>
      ) : null}
    </div>
  );
}

export default Nav;
