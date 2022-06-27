import React, { useState } from "react";
import "./atelierCarte.css";
import Layout from "@components/Layout";
import zebre from "@assets/images/zebre.jpg";
import template1 from "@assets/images/template1.png";
import View from "./View";
import MesInfos from "./MesInfos";

function AtelierCarte() {
  const [cardContain, setCardContain] = useState({
    name: "Emma",
    place: "Chez ma mami",
    address: "5 rue de la liberté, 69003 LYON",
    date: "5 juin 2022",
    time: "18h00",
    mobile: "06 00 00 00 00",
    email: "mailmail.@mail.fr",
    asso: "ex: Rêves",
  });
  const [eventCode, setEventCode] = useState({
    code: "PASENCOREDECODE",
  });
  setEventCode();
  return (
    <Layout>
      <div className="atelierContainer">
        <h1 className="atelierTitle">Mon Editeur de cartes</h1>
        <div className="atelierContainerSections">
          <section className="atelierContainerSection1">
            <div className="atelierContainerSubSection1-1">
              <h1>Mes templates</h1>
              <button type="button">
                <img src={template1} alt="" />
              </button>
              <button type="button">
                <img src={zebre} alt="" />
              </button>
              <button type="button">
                <img src={zebre} alt="" />
              </button>
              <button type="button">
                <img src={zebre} alt="" />
              </button>
            </div>
            <div className="atelierContainerSubSection1-2">
              <h1>Ma typo</h1>
              <button type="button" label="League">
                League
              </button>
              <button type="button" label="Aloja">
                Aloja
              </button>
              <button type="button" label="Arial">
                Arial
              </button>
            </div>
            <div className="atelierContainerSubSection1-3">
              <h1>Couleurs</h1>
              <button type="button" label="Red" />
              <button type="button" label="Bleu" />
              <button type="button" label="Jaune" />
              <button type="button" label="Orange" />
              <button type="button" label="Green" />
              <button type="button" label="Pink" />
            </div>
          </section>
          <section className="atelierContainerSection2">
            <h1 className="viewAtelierTitle">Prévue</h1>
            <View eventCode={eventCode} cardContain={cardContain} />
          </section>
          <section className="atelierContainerSection3">
            <h1 className="mesInfosTitle">Mes info</h1>
            <MesInfos
              cardContain={cardContain}
              setCardContain={setCardContain}
            />
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default AtelierCarte;
