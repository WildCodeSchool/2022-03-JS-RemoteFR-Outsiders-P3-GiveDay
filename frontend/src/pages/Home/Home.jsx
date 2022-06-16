import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Newsletter from "../../components/Newsletter/Newsletter";
// import Userback from "@components/AxiosBack/Userback"
// import Eventback from "@components/AxiosBack/Eventback"

function Home() {
  return (
    <div>
      <div className="acceuilContainer">
        <div className="CCM">
          <p>comment ça marche </p>
        </div>
        <div className="Philan">
          <p>Philanthrokids</p>
        </div>
        <div className="creation">
          <Link to="/CreationEvenement">
            <p>Créer un évenement</p>
          </Link>
        </div>
        <div className="rejoindre">
          <p>Rejoindre un évenement</p>
        </div>
        <div className="atelier">
          <p>Atelier carte d'invitation</p>
        </div>
        <div className="blog">
          <p>Blog</p>
        </div>
        <div className="article">
          <div className="article1">
            <p>Article</p>
          </div>
          <div className="article2">
            <p>Article</p>
          </div>
        </div>

        <div className="news">
          <Newsletter />
        </div>
      </div>

      <Link to="/Contact">
        <p>contact</p>
      </Link>

      {/* <Eventback />
      <Userback /> */}
    </div>
  );
}

export default Home;
