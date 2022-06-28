import Layout from "@components/Layout";
import React from "react";
import "./Philanthrokids.css";
import "../Home/home.css";
import "../../App.css";
import "../../components/Nav/Nav.css";
import KeszValdez from "@assets/images/KeszValdez.jpg";
import tjkim from "@assets/images/tjkim.png";
import electronique from "@assets/images/electronique.png";
import DasiaTaylor from "../../assets/images/DasiaTaylor.jpg";
import FranciscoVera from "../../assets/images/FranciscoVera.jpg";

function Philanthrokids() {
  return (
    <Layout>
      <div className="globalPhilan">
        <div className="vignettePhilanTitre">
          <h1>Philanthrokids</h1>
          <img src={electronique} alt="console de jeux" />
          <p>
            Ici tu trouveras les portraits des enfants "changemakers" qui comme
            toi, veulent changer le monde !
          </p>
        </div>

        <div className="vignettePhilan">
          <img src={FranciscoVera} alt="FranciscoVera" />
          <h2 className="titrePhilan">Francisco Vera</h2>
          <h3>Colombie</h3>
          <p>
            Nous voyageons jusqu'en Amérique Latine pour soutenir Francisco
            Vera, célèbre militant écologiste colombien de 12 ans !
          </p>
        </div>
        <div className="vignettePhilan">
          <img src={KeszValdez} alt="Kesz Valdez" />
          <h2 className="titrePhilan">Kesz Valdez</h2>
          <h3>Philippines</h3>
          <p>
            Cris Valdez, alias Kesz, n'a pas toujours eu une vie facile. A 13
            ans, il vit déjà dans une décharge et dormait dans un tombeau... Il
            a pourtant réussi à aider 10000 enfants déshérités de la ville de
            Cavite, à 30 km de Manille.
          </p>
        </div>
        <div className="vignettePhilan">
          <img src={tjkim} alt="tj kim" />
          <h2 className="titrePhilan">TJ KIM</h2>
          <h3>Etats-Unis</h3>
          <p>
            {" "}
            TJ Kim n'avait pas encore son permis de conduire qu'il livrait déjà
            du matériel médical par avion lors du premier confinement en 2020 !
          </p>
        </div>
        <div className="vignettePhilan">
          <img src={DasiaTaylor} alt="Dasia Taylor" />
          <h2 className="titrePhilan">Dasia Taylor</h2>
          <h3>Etats-Unis</h3>
          <p>
            Voyageons en en Amérique du Nord cette fois, pour féliciter Dasia
            Taylor, une génie scientifique de 17 ans !!🔬💛
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Philanthrokids;
