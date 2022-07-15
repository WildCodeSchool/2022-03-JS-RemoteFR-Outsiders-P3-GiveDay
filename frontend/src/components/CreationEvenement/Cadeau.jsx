import React, { useContext, useEffect, useState } from "react";
import "@components/CreationEvenement/creationEvenement.css";
import api from "@services/api";
import CurrentPagesContext from "../../PagesContexts";

function Cadeau({ idEvent }) {
  const { cadeauxList, setcadeauxList } = useContext(CurrentPagesContext);
  const [cadeau, setcadeau] = useState();
  const [inputText, setInputText] = useState({
    titre: "",
    url_site: "",
    event_id: idEvent,
  });

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  // ****** handleAdd ajoute un cadeau à chaque clicl dans la BDD, puis ajoute les cadeaux dans une liste côté front
  const handleAdd = () => {
    setcadeau({
      titre: inputText.titre,
      url_site: inputText.url_site,
      event_id: idEvent,
    });

    setcadeauxList([
      ...cadeauxList,
      {
        titre: inputText.titre,
        url_site: inputText.url_site,
      },
    ]);

    setInputText({ titre: "", url_site: "" });
  };

  useEffect(() => {
    api
      .post("api/cadeaux/add", cadeau)
      .then((res) => console.warn(res.data))
      .catch((err) => console.error(err));
  }, [cadeau]);

  //* ******* */ handleRemove supprime le panier de cadeau liés à un évènement côté front et dans la base de données
  const handleRemove = () => {
    api
      .delete(`api/cadeaux/delete/${idEvent}`)
      .then(() =>
        setcadeauxList(
          cadeauxList && cadeauxList.filter((gift) => gift.id !== inputText.id)
        )
      )
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
              <li key={item.id}>
                {item.titre} :{" "}
                <a href={item.url_site} target="_blank" rel="noreferrer">
                  Voir le lien du cadeau
                </a>
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
            value={inputText.url_site}
            type="text"
            name="url_site"
            placeholder="Lien"
            onChange={handleChange}
          />
        </div>
      </div>
      <button className="buttonStyle" type="button" onClick={handleAdd}>
        🎁 Ajouter un cadeau
      </button>
      <button type="button" className="buttonStyle" onClick={handleRemove}>
        ❌ Vider mon panier cadeau
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
        // onClick={handleCreateEvent}
      >
        🎉 Créer mon évènement
      </button>
    </div>
  );
}

export default Cadeau;
