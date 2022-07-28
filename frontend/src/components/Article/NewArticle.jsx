import React, { useContext } from "react";
import { Link } from "react-router-dom";
import api from "@services/api";
import "./article.css";
import "../../pages/Home/home.css";
import "@components/Article/ArticleDetail";
import CurrentPagesContext from "../../PagesContexts";

function NewArticle({ article }) {
  const { setDetail } = useContext(CurrentPagesContext);
  const {
    setAcceuil,
    setHistoire,
    setAssociations,
    setAtelierCarte,
    setBlog,
    setCreationEvenement,
  } = useContext(CurrentPagesContext);
  const goToBlog = () => {
    setAcceuil(false);
    setHistoire(false);
    setAssociations(false);
    setAtelierCarte(false);
    setCreationEvenement(false);
    setBlog(true);
  };
  const handleClick = () => {
    api
      .get(`/api/articles/${article.id}`)
      .then((res) => res.data)
      .then((data) => {
        setDetail(data);
        goToBlog();
      });
  };

  return (
    <div className="newVignette">
      <Link to="/ArticleDetail" onClick={handleClick}>
        <div
          className="newImage"
          style={{
            width: "100%",
            height: "200px",
            backgroundSize: "cover",
            backgroundImage: `url("${article.image}")`,
          }}
          alt={article.titre}
        />
        <h3 className="newTitle">{article.titre}</h3>
        <p className="newArticle">{article.date.substring(0, 10)}</p>
        {/* <p className="newDescript">{article.texte}</p> */}
      </Link>
    </div>
  );
}

export default NewArticle;
