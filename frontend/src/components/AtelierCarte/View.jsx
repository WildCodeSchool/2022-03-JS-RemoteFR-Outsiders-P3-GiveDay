import React from "react";
import "./view.css";

function View({ cardContain, eventCode, templateOn, fontChoice, colorChoice }) {
  return (
    <div id="atelierViewContainer">
      <div className="fondContainer">
        <img className="imgfond" src={templateOn[0]} alt="zebre" />
        <div className="textContainer">
          <p className="text">
            POUR FÊTER SON ANNIVERSAIRE
            <br />
            <span
              className="textName"
              style={{
                color: colorChoice.color,
                fontFamily: fontChoice.fontFamily,
              }}
            >
              {cardContain.name}
            </span>
            <br />
            T'INVITE À SA FIESTA !
            <br />
            <br />
            <span
              className="textInfos"
              style={{
                color: colorChoice.color,
                fontFamily: fontChoice.fontFamily,
              }}
            >
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
            Code :{" "}
            <span
              className="textCode"
              style={{
                color: colorChoice.color,
                fontFamily: fontChoice.fontFamily,
              }}
            >
              {eventCode.code}
            </span>
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
