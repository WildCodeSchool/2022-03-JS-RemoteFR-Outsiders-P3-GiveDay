import React, { useContext, useEffect, useState } from "react";
import "@components/CreationEvenement/creationEvenement.css";
import api from "@services/api";
import { Link } from "react-router-dom";
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
      <h1>Mes souhaits de cadeaux : </h1>
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
        </div>{" "}
        <button
          className="buttonStyle border"
          type="button"
          onClick={handleAdd}
        >
          🎁 Ajouter un cadeau
        </button>
      </div>
      <ul>
        {cadeauxList.map((item) => (
          <div className="liste" key={item.id}>
            <li>
              <a href={item.url_site} target="_blank" rel="noreferrer">
                {item.titre}
              </a>{" "}
              🎁
            </li>{" "}
          </div>
        ))}
      </ul>{" "}
      {cadeauxList.length > 0 ? (
        <button type="button" className="buttonStyle" onClick={handleRemove}>
          ❌ Vider mon panier cadeau
        </button>
      ) : null}
      <h1>
        Ta liste est complète? <br />
        C'est parti ! <br /> Tu peux maintenant créer ta carte d'invitation 🐯
      </h1>
      {/* link carte */}
      <Link to="/AtelierCarte">
        <button
          className="buttonStyle"
          type="button"
          form="creationEvenement"
          value="Submit"
        >
          🎉 Créer ma carte d'invitation
        </button>
      </Link>
    </div>
  );
}

export default Cadeau;
