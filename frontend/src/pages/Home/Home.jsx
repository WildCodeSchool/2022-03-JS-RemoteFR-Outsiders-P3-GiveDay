import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Layout from "@components/Layout";
import Newsletter from "../../components/Newsletter/Newsletter";
import invitationsPablo from "../../assets/images/InvitationsPablo.jpg";
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
          <Link to="/Philanthrokids">
            <h2>Philanthrokids</h2>
          </Link>
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
          <Link to="/AtelierCarte">
            <h2>Atelier carte d'invitation</h2>
            <div>
              <img
                className="cartePablo"
                src={invitationsPablo}
                alt="invitation modèle"
              />
            </div>
          </Link>
        </div>
        <div className="article1">
          <h2>Article</h2>
        </div>
        <div className="article2">
          <h2>Blog</h2>
        </div>
        <div className="news">
          <Newsletter />
        </div>
      </div>
      <div className="confianceFlex">
        <div className="confiance">
          <div className="divTitre">
            <h2>ils nous font confiance</h2>
          </div>
          <div>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of{" "}
            </p>
          </div>
          <div className="globalCercle">
            <div className="cerclePartenaire" />
            <div className="cerclePartenaire" />
            <div className="cerclePartenaire" />
            <div className="cerclePartenaire" />
            <div className="cerclePartenaire" />
            <div className="cerclePartenaire" />
            <div className="cerclePartenaire" />
            <div className="cerclePartenaire" />
            <div className="cerclePartenaire" />
          </div>
        </div>
      </div>
      {/* <Eventback />
      <Userback /> */}
    </Layout>
  );
}

export default Home;
