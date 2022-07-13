import React, { useContext, useState } from "react";
import "@components/CreationEvenement/creationEvenement.css";
import CurrentPagesContext from "../../PagesContexts";

function Cadeau() {
  const { cadeauxList, setcadeauxList } = useContext(CurrentPagesContext);
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setcadeauxList(...cadeauxList);
  };
  console.warn(cadeauxList);

  return (
    <div id="gift-container">
      <div className="cadeau">
        {/* <ul>
          {cadeauxList && cadeauxList.map((item) => <li>{item.titre}</li>)}
        </ul> */}
        <div className="inputs">
          <input
            type="text"
            name="titre"
            placeholder="Cadeau souhaité"
            onChange={handleChange}
          />

          <input
            type="text"
            name="site_url"
            placeholder="Lien"
            onChange={handleChange}
          />
        </div>
        {/* <div className="remove">❌</div> */}
      </div>
      <button
        id="ajouterCadeau"
        className="buttonStyle"
        type="button"
        onClick={handleAdd}
      >
        🎁 Ajouter un cadeau
      </button>
    </div>
  );
}

export default Cadeau;
