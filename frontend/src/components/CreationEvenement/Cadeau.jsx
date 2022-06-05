import React from "react";
import "@components/CreationEvenement/creationEvenement.css";

function Cadeau() {
  return (
    <>
      <img src="https://picsum.photos/200" alt="picsum" />
      <input type="text" name="cadeau_nom" placeholder="Titre du cadeau" />
      <input
        type="text"
        name="cadeau_url"
        placeholder="Optionnel : URL du cadeau"
      />
      <input
        type="text"
        name="cadeau_somme"
        placeholder="Somme participation au cadeau"
      />
    </>
  );
}

export default Cadeau;
