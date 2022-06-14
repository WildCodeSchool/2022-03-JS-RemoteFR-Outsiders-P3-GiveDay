import React from "react";
import "./notreBelleHistoire.css";

function NotreBelleHistoire() {
  return (
    <div className="containerNotreHistoire">
      <h1 className="gabriel">Gabriel</h1>
      <p className="textNotreHistoire">
        Notre belle histoire Giveday a été conçu avec Gabriel, de 9 ans à
        l'époque... qui se demandait comment réunir des fonds dans une «
        tirelire » simple et rigolote afin de recevoir un cadeau commun choisi
        par lui-même pour son anniversaire... et partager expérience du don avec
        ses amis et sa famille.
        <br />
        Il faut savoir que… Plus d'un Français sur quatre reçoit un cadeau
        indésirable à Noël Plus de 600 millions d’euros sont dépensés chaque
        année en cadeaux qui ne plaisent pas 120 000 tonnes de jouets sont
        jetées chaque année en France !
      </p>
      <h2 className="aboutUs">Qui sommes nous?</h2>
      <p className="textNotreHistoire">
        <span className="fondatrices">Tania</span> Exploratrice des tendances
        éco-cool et <span className="fondatrices">MYRIAM</span> Amoureuse du
        digital-éthique
      </p>
      <div className="videoPresentationContainer">
        <iframe
          className="videoPresentation"
          src="https://www.youtube.com/embed/L3_0ztMEY5o"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
          autoPlay
          muted
        />
      </div>
    </div>
  );
}

export default NotreBelleHistoire;
