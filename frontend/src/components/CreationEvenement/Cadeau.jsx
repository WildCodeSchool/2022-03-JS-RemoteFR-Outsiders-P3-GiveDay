import React from "react";
import "@components/CreationEvenement/creationEvenement.css";

function Cadeau() {
  return (
    <div className="cadeau">
      {/* <div className="image" /> */}
      <div className="inputs">
        <input type="text" name="cadeau_nom" placeholder="Cadeau souhaité" />
        {/* <input
          type="text"
          name="cadeau_url_image"
          placeholder="Option : copiez/collez URL image du cadeau"
  /> */}
        <input type="text" name="cadeau_url_amazon" placeholder="Lien" />
      </div>
      <div className="remove">❌</div>
    </div>
  );
}

export default Cadeau;
