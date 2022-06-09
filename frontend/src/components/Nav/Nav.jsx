/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  // const [accueil, setAcceuil] = useState(true);
  // const [histoire, setHistoire] = useState(false);
  // const [associations, setAssociations] = useState(false);
  // const goToAccueil = () => {
  //   setAcceuil(true);
  //   setHistoire(false);
  //   setAssociations(false);
  // };
  // const goToHistoire = () => {
  //   setAcceuil(false);
  //   setHistoire(true);
  //   setAssociations(false);
  // };
  // const goToAssociations = () => {
  //   setAcceuil(false);
  //   setHistoire(false);
  //   setAssociations(true);
  // };
  return (
    <div className="navAndContain">
      <div className="navContainer">
        <nav>
          <ul>
            <li>
              <Link to="/accueil">Accueil</Link>
            </li>
            <li>
              <Link to="/histoire"> Notre Belle Histoire</Link>
            </li>
            <li>
              <Link to="/associations">Associations partenaire</Link>
            </li>
          </ul>
          {/* <button
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
          </button> */}
        </nav>
      </div>

      {/* {accueil ? (
        <div className="containerContain">

      {accueil ? (
        <div className="showHomeContainer">

          <Home />
        </div>
      ) : null}

      {associations ? (

        <div className="containerContain">
          <Associations />

        <div className="showHomeContainer">
          <SliderAssociations slides={slides}/>

        </div>
      ) : null}

      {histoire ? (
        <div className="containerContain">
          <NotreBelleHistoire />
        </div>
      ) : null} */}
    </div>
  );
}

export default Nav;
