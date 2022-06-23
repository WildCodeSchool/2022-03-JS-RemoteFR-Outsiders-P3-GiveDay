import React from "react";
import "./atelierCarte.css";
import Layout from "@components/Layout";
import zebre from "@assets/images/zebre.jpg";
import View from "./View";

function AtelierCarte() {
  return (
    <Layout>
      <div className="atelierContainer">
        <h1 className="atelierTitle">Mon Editeur de cartes</h1>
        <div className="atelierContainerSections">
          <section className="atelierContainerSection1">
            <div className="atelierContainerSubSection1-1">
              <h1>Mes templates</h1>
              <button type="button">
                <img src={zebre} alt="" />
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
            <div className="atelierContainerSubSection1-4">
              <button type="button" label="Arial">
                Remplissage Auto ? info
              </button>
            </div>
          </section>
          <section className="atelierContainerSection2">
            <h1 className="viewAtelierTitle">Prévue</h1>
            <View />
            <div className="atelierContainerSubSection2-1">
              <button type="button" label="Previsualiser">
                Télécharger PDF
              </button>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default AtelierCarte;
