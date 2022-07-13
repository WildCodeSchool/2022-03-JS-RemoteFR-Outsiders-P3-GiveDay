import React, { useContext, useState } from "react";
import "@components/CreationEvenement/creationEvenement.css";
import api from "@services/api";
import CurrentPagesContext from "../../PagesContexts";

function Cadeau({ idEvent }) {
  const cadeau = {
    titre: "Formation développeur web",
    url_site: "gregreg",
    event_id: 1,
  };
  const { cadeauxList, setcadeauxList } = useContext(CurrentPagesContext);
  const [inputText, setInputText] = useState({
    titre: "",
    site_url: "",
  });

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    setcadeauxList([...cadeauxList, { text: inputText, event_id: idEvent }]);
    setInputText({ titre: "", url_site: "" });
  };

  const handleRemove = (e) => {
    e.preventDefault();
    setcadeauxList(
      cadeauxList && cadeauxList.filter((gift) => gift.text.id !== inputText.id)
    );
  };

  const handleCreateEvent = () => {
    api
      .post("api/cadeaux", cadeau)
      .then((res) => console.warn(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div id="gift-container">
      <h1>Liste des cadeaux souhaités : </h1>
      <ul>
        {cadeauxList &&
          cadeauxList.map((item) => (
            <>
              {" "}
              <li key={item.text.id}>
                {item.text.titre} :{" "}
                <a href={item.text.site_url} target="_blank" rel="noreferrer">
                  Voir le lien du cadeau
                </a>
                <button type="button" className="remove" onClick={handleRemove}>
                  ❌
                </button>
              </li>
            </>
          ))}
      </ul>{" "}
      <div className="cadeau">
        <div className="inputs">
          <input
            value={inputText.titre}
            type="text"
            name="titre"
            placeholder="Cadeau souhaité"
            onChange={handleChange}
          />

          <input
            value={inputText.site_url}
            type="text"
            name="site_url"
            placeholder="Lien"
            onChange={handleChange}
          />
        </div>
      </div>
      <button
        id="ajouterCadeau"
        className="buttonStyle"
        type="button"
        onClick={handleAdd}
      >
        🎁 Ajouter un cadeau
      </button>
      <p>
        Ta liste est complète? c'est parti tu peux maintenant valider et créer
        ton évènement
      </p>
      <button
        className="buttonStyle"
        type="button"
        form="creationEvenement"
        value="Submit"
        onClick={handleCreateEvent}
      >
        🎉 Créer mon évènement
      </button>
    </div>
  );
}

export default Cadeau;
