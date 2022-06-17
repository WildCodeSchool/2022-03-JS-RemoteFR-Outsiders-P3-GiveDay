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
          <form
            id="newsletter"
            className="contactForm"
            action="/api/route/contact"
            method="post"
          >
            <div className="prenomMail">
              <label htmlFor="input_eve_firstname">
                <input
                  className="inputNewsletter"
                  id="input_eve_firstname"
                  type="text"
                  name="prenom"
                  placeholder="prénom"
                />
              </label>

              <label htmlFor="input_mail">
                <input
                  className="inputNewsletter"
                  id="input_mail"
                  type="email"
                  name="adresse_mail"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  placeholder="email"
                />
              </label>
            </div>

            <div className="nouSuivre">
              <button
                className="buttonStyle"
                type="submit"
                form="EnvoiContact"
                value="Submit"
              >
                Nous suivre
              </button>
            </div>
          </form>

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
