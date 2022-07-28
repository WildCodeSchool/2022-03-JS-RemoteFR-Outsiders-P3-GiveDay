/*eslint-disable */
import React, { useContext, useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./home.css";
import { Link } from "react-router-dom";
import api from "@services/api";
import Layout from "@components/Layout";
import NewArticle from "@components/Article/NewArticle";
import Newsletter from "../../components/Newsletter/Newsletter";
import post2 from "../../assets/images/post2.gif";
import CurrentPagesContext from "../../PagesContexts";
/* eslint-enable */
function Home() {
  const [arrayData, setarrayData] = useState([]);
  const {
    setAcceuil,
    setHistoire,
    setAssociations,
    setAtelierCarte,
    setBlog,
    setCreationEvenement,
    setIsOpenJeCree,
  } = useContext(CurrentPagesContext);
  useEffect(() => {
    api
      .get(`/api/new-article`)
      .then((res) => res.data)
      .then((cards) => {
        setarrayData(cards);
      });
  }, []);
  const goToBlog = () => {
    setAcceuil(false);
    setHistoire(false);
    setAssociations(false);
    setAtelierCarte(false);
    setCreationEvenement(false);
    setBlog(true);
  };
  const goToCreationEvenement = () => {
    setAcceuil(false);
    setHistoire(false);
    setAssociations(false);
    setAtelierCarte(false);
    setBlog(false);
    setCreationEvenement(true);
    setTimeout(() => {
      setIsOpenJeCree(false);
    }, 250);
  };
  const goToAtelierCarte = () => {
    setAcceuil(false);
    setHistoire(false);
    setAssociations(false);
    setBlog(false);
    setCreationEvenement(false);
    setTimeout(() => {
      setIsOpenJeCree(false);
    }, 250);
    setAtelierCarte(true);
  };
  const goOutHome = () => {
    setAcceuil(false);
    setHistoire(false);
    setAssociations(false);
    setAtelierCarte(false);
    setCreationEvenement(false);
    setBlog(false);
  };
  return (
    <Layout>
      <div className="acceuilContainer">
        <div className="homeLigne1">
          <div className="CCM">
            <div className="whiteContainer">
              <h2>La générosité depuis tout petits !</h2>
              <p>
                Sensibilisons petits (et grands) à la consommation responsable
                et à la philanthropie lors des événements heureux ! <br />{" "}
                Anniversaires enfant & ado, projets solidaires… <br />
                Profite d'une cagnotte cadeau et partage l’expérience du don a
                une association avec tes proches !
              </p>
              <h3 className="ccmPink">Comment ça marche ?</h3>
            </div>
          </div>
          <div className="blog">
            <Link to="/Blog" onClick={goToBlog}>
              <h3 className="titleAloja">Blog</h3>
              <Player
                src="https://assets9.lottiefiles.com/packages/lf20_yddgsjaa.json"
                className="player"
                loop
                autoplay
              />
            </Link>
          </div>
        </div>
        <div className="homeLigne2">
          <div className="creation">
            <Link to="/CreationEvenement" onClick={goToCreationEvenement}>
              <h3 className="titleAloja">Creer un evenement</h3>
              <Player
                src="https://assets10.lottiefiles.com/packages/lf20_qwomkttk.json"
                className="player"
                loop
                autoplay
                style={{ width: "70%" }}
              />
            </Link>
          </div>
          <div className="rejoindre">
            <Link to="/JointEvent" onClick={goOutHome}>
              <h3 className="titleAloja">Rejoindre un evenement</h3>
              <Player
                src="https://assets3.lottiefiles.com/packages/lf20_ky24lkyk.json"
                className="player"
                loop
                autoplay
                style={{ width: "60%" }}
              />
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
        </div>

        <div className="homeLigne3">
          <div className="Philan">
            <Link to="/Philanthrokids" onClick={goOutHome}>
              <h3 className="titleAloja">Philanthrokids</h3>
            </Link>
          </div>
          <div className="atelier">
            <Link to="/AtelierCarte" onClick={goToAtelierCarte}>
              <h3 className="titleAloja">Atelier carte d'invitation</h3>
            </Link>
          </div>
          <div className="news">
            <Newsletter />
          </div>
        </div>
      </div>
      <div className="confianceFlex">
        <div className="confiance">
          <div className="divTitre">
            <h2>ils nous font confiance</h2>
          </div>
          <div>
            <p>
              Avec nos associations partenaires nous partageons une philosophie
              : l'enfance sera toujours le plus fort atout de la société pour
              changer les choses qui ne vont pas ! Nous sommes à leurs côtés
              pour imaginer les plus belles collaborations, veux-tu les
              connaitre et devenir un héros en les soutenant aussi ?
            </p>
          </div>
          <div className="globalCercle">
            <a href="https://empow-her.com/" target=" _blank">
              <div className="gloLien">
                <div className="cerclePartenaire1" />
                <p>Empow'Her</p>
              </div>
            </a>
            <a href="https://www.latitudes.cc/" target=" _blank">
              <div className="gloLien">
                <div className="cerclePartenaire2" />
                <p>Latitudes</p>
              </div>
            </a>
            <a href="https://www.lyonstartup.com/" target=" _blank">
              <div className="gloLien">
                <div className="cerclePartenaire3" />
                <p>Lyon startup</p>
              </div>
            </a>
            <a href="https://makesense.org/" target=" _blank">
              <div className="gloLien">
                <div className="cerclePartenaire4" />
                <p>Makesense</p>
              </div>
            </a>
            <a href="https://www.wildcodeschool.com" target=" _blank">
              <div className="gloLien">
                <div className="cerclePartenaire5" />
                <p>Wild code school</p>
              </div>
            </a>
            <a href="https://madcats.fr/" target=" _blank">
              <div className="gloLien">
                <div className="cerclePartenaire6" />
                <p>Madcats</p>
              </div>
            </a>
            <a href="https://www.recyclivre.com/" target=" _blank">
              <div className="gloLien">
                <div className="cerclePartenaire7" />
                <p>Recyclivre</p>
              </div>
            </a>
            <a href="https://www.anciela.info/" target=" _blank">
              <div className="gloLien">
                <div className="cerclePartenaire8" />
                <p>Anciela</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
