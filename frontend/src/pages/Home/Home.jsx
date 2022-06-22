import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Layout from "@components/Layout";
import Newsletter from "../../components/Newsletter/Newsletter";
// import Userback from "@components/AxiosBack/Userback"
// import Eventback from "@components/AxiosBack/Eventback"

function Home() {
  return (
    <Layout>
      <div className="acceuilContainer">
        <div className="CCM">
          <h2>Comment ca marche </h2>
        </div>
        <div className="Philan">
          <h2>Philanthrokids</h2>
        </div>
        <div className="creation">
          <Link to="/CreationEvenement">
            <h2>Creer un evenement</h2>
          </Link>
        </div>
        <div className="rejoindre">
          <h2>Rejoindre un evenement</h2>
        </div>
        <div className="atelier">
          <h2>Atelier carte d'invitation</h2>
        </div>
        <div className="blog">
          <h2>Nos partenaires</h2>
        </div>
        <div className="article">
          <div className="article1">
            <h2>Article</h2>
          </div>
          <div className="article2">
            <h2>Article</h2>
          </div>
        </div>

        <div className="news">
          <Newsletter />
        </div>
      </div>

      {/* <Eventback />
      <Userback /> */}
    </Layout>
  );
}

export default Home;
