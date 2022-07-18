import React, { useState, useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import api from "@services/api";
import Layout from "@components/Layout";
import NewArticle from "@components/Article/NewArticle";
import Newsletter from "../../components/Newsletter/Newsletter";
import invitation from "../../assets/images/invitation.gif";
import post2 from "../../assets/images/post2.gif";
import blog2 from "../../assets/images/blog2.gif";

function Home() {
  const [arrayData, setarrayData] = useState([]);

  useEffect(() => {
    api
      .get(`/api/new-article`)
      .then((res) => res.data)
      .then((cards) => {
        setarrayData(cards);
      });
  }, []);

  return (
    <Layout>
      <div className="acceuilContainer">
        <div className="CCM">
          <h3 className="titleAloja">Comment ca marche </h3>
        </div>
        <div className="Philan">
          <Link to="/Philanthrokids">
            <h3 className="titleAloja">Philanthrokids</h3>
          </Link>
        </div>
        <div className="creation">
          <Link to="/CreationEvenement">
            <h3 className="titleAloja">Creer un evenement</h3>
            <img className="blogGif" src={blog2} alt="journal" />
          </Link>
        </div>
        <div className="rejoindre">
          <Link to="/JointEvent">
            <h3 className="titleAloja">Rejoindre un evenement</h3>
            <div>
              <img
                className="cartePablo"
                src={invitation}
                alt="invitation modèle"
              />
            </div>
          </Link>
        </div>
        <div className="atelier">
          <Link to="/AtelierCarte">
            <h3 className="titleAloja">Atelier carte d'invitation</h3>
            <div>
              <img
                className="cartePablo"
                src={invitation}
                alt="invitation modèle"
              />
            </div>
          </Link>
        </div>
        <div className="article1">
          <img className="postGif" src={post2} alt="new post" />
          <h3 className="titleAloja">Article</h3>

          <div className="newArticle">
            {arrayData.map((card) => (
              <NewArticle key={card.id} article={card} />
            ))}
          </div>
        </div>
        <div className="article2">
          <Link to="/Blog">
            <h3 className="titleAloja">Blog</h3>
          </Link>
        </div>
        <div className="news">
          <Newsletter />
        </div>
      </div>
      <div className="confianceFlex">
        <div className="confiance">
          <div className="divTitre">
            <h3>ils nous font confiance</h3>
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
