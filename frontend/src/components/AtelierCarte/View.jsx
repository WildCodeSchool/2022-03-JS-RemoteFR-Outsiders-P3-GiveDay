import React from "react";
import "./view.css";
import template1 from "@assets/images/template1.png";

function View({ cardContain, eventCode }) {
  return (
    <div id="atelierViewContainer">
      <div className="fondContainer">
        <img className="imgfond" src={template1} alt="zebre" />
        <div className="textContainer">
          <p className="text">
            POUR FÊTER SON ANNIVERSAIRE
            <br />
            <span className="textName">{cardContain.name}</span>
            <br />
            <br />
            T'INVITE À SA FIESTA !
            <br />
            <br />
            <span className="textInfos">
              Le {cardContain.date} · {cardContain.time}
              <br />
              {cardContain.place}
              <br />
              {cardContain.address}
            </span>
            <br /> <br />
            <span>
              MERCI DE CONFIRMER TA PRÉSENCE AU
              <br />
              {cardContain.mobile} / {cardContain.email}
            </span>
          </p>
          <p className="textFooter">
            Mon cadeau parfait ? Ça se passe sur Giveday.fr
            <br />
            Code : <span className="textCode">{eventCode.code}</span>
            <br />
            Soutenons ensemble l'association
            <br />
            {cardContain.asso} !
          </p>
        </div>
      </div>
    </div>
  );
}

export default View;
