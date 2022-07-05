/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
import React, { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "./atelierCarte.css";
import Layout from "@components/Layout";
import template1 from "@assets/images/template1.png";
import template1black from "@assets/images/template1black.png";
import template2 from "@assets/images/template2.png";
import template2black from "@assets/images/template2black.png";
import template3 from "@assets/images/template3.png";
import template3black from "@assets/images/template3black.png";
import template4 from "@assets/images/template4.png";
import template4black from "@assets/images/template4black.png";
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
  const [templateOn, setTemplateOn] = useState([template1]);
  const GoTemplate1 = () => {
    setTemplateOn([template1]);
  };
  const GoTemplate2 = () => {
    setTemplateOn([template2]);
  };
  const GoTemplate3 = () => {
    setTemplateOn([template3]);
  };
  const GoTemplate4 = () => {
    setTemplateOn([template4]);
  };
  const [fontChoice, setFontChoice] = useState({
    fontFamily: "var(--font-titre_small-text)",
  });
  const FontChoice1 = () => {
    setFontChoice({
      fontFamily: "var(--font-titre_small-text)",
    });
  };
  const FontChoice2 = () => {
    setFontChoice({
      fontFamily: "var(--font-logo)",
    });
  };
  const FontChoice3 = () => {
    setFontChoice({
      fontFamily: "var(--card-text)",
    });
  };
  // <button type="button" label="yellow" />
  // <button type="button" label="pink" />
  // <button type="button" label="green" />
  // <button type="button" label="blue" />
  // <button type="button" label="red" />
  // <button type="button" label="b/w" />
  const [colorChoice, setColorChoice] = useState({
    color: "var(--color_1)",
  });
  const resetToColor = (t) => {
    if (template1black === t) {
      setTemplateOn([template1]);
    }
    if (template2black === t) {
      setTemplateOn([template2]);
    }
    if (template3black === t) {
      setTemplateOn([template3]);
    }
    if (template4black === t) {
      setTemplateOn([template4]);
    }
  };
  const ColorChoice1 = () => {
    setColorChoice({ color: "var(--color_1)" });
    resetToColor(templateOn[0]);
  };
  const ColorChoice2 = () => {
    setColorChoice({ color: "var(--color_2)" });
    resetToColor(templateOn[0]);
  };
  const ColorChoice3 = () => {
    setColorChoice({ color: "var(--color_3)" });
    resetToColor(templateOn[0]);
  };
  const ColorChoice4 = () => {
    setColorChoice({ color: "var(--color_4)" });
    resetToColor(templateOn[0]);
  };
  const ColorChoice5 = () => {
    setColorChoice({ color: "var(--color_5)" });
    resetToColor(templateOn[0]);
  };
  const ColorChoice6 = () => {
    setColorChoice({ color: "var(--color_black)" });
    if (templateOn[0] === template1) {
      setTemplateOn([template1black]);
    }
    if (templateOn[0] === template2) {
      setTemplateOn([template2black]);
    }
    if (templateOn[0] === template3) {
      setTemplateOn([template3black]);
    }
    if (templateOn[0] === template4) {
      setTemplateOn([template4black]);
    }
  };
  // atelierViewContainer
  const printDocument = () => {
    const input = document.getElementById("atelierViewContainer");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("MaCarte.pdf");
    });
  };
  return (
    <Layout>
      <div className="atelierContainer">
        <h1 className="atelierTitle">Mon Editeur de cartes</h1>
        <div className="atelierContainerSections">
          <section className="atelierContainerSection1">
            <div className="atelierContainerSubSection1-1">
              <h1>Mon template</h1>
              <button type="button" onClick={GoTemplate1}>
                <img src={template1} alt="" />
              </button>
              <button type="button" onClick={GoTemplate2}>
                <img src={template2} alt="" />
              </button>
              <button type="button" onClick={GoTemplate3}>
                <img src={template3} alt="" />
              </button>
              <button type="button" onClick={GoTemplate4}>
                <img src={template4} alt="" />
              </button>
            </div>
            <div className="atelierContainerSubSection1-2">
              <h1>Ma typo</h1>
              <button type="button" label="League" onClick={FontChoice1}>
                League
              </button>
              <button type="button" label="Aloja" onClick={FontChoice2}>
                Aloja
              </button>
              <button type="button" label="Fredoka" onClick={FontChoice3}>
                Fredoka
              </button>
            </div>
            <div className="atelierContainerSubSection1-3">
              <h1>Couleur</h1>
              <button type="button" label="yellow" onClick={ColorChoice1} />
              <button type="button" label="pink" onClick={ColorChoice2} />
              <button type="button" label="green" onClick={ColorChoice3} />
              <button type="button" label="blue" onClick={ColorChoice4} />
              <button type="button" label="red" onClick={ColorChoice5} />
              <button type="button" label="b/w" onClick={ColorChoice6} />
            </div>
          </section>
          <section className="atelierContainerSection2">
            <h1 className="viewAtelierTitle">Prévue</h1>
            <View
              eventCode={eventCode}
              cardContain={cardContain}
              templateOn={templateOn}
              fontChoice={fontChoice}
              colorChoice={colorChoice}
            />
          </section>
          <section className="atelierContainerSection3">
            <h1 className="mesInfosTitle">Mes infos</h1>
            <MesInfos
              cardContain={cardContain}
              setCardContain={setCardContain}
              printDocument={printDocument}
            />
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default AtelierCarte;
