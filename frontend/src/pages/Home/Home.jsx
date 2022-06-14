import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
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
