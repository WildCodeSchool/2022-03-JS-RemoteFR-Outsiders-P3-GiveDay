import React, { useContext } from "react";
import api from "@services/api";
import { Link } from "react-router-dom";
import "./article.css";
import "@components/Article/ArticleDetail";
import CurrentPagesContext from "../../PagesContexts";

function Article({ article }) {
  const { setDetail } = useContext(CurrentPagesContext);

  const handleClick = () => {
    api
      .get(`/api/articles/${article.id}`)
      .then((res) => res.data)
      .then((data) => {
        console.warn({ article });
        setDetail(data);
      });
  };

  return (
    <div className="vignetteBlog">
      <Link to="/ArticleDetail" onClick={handleClick}>
        <div>
          <div
            style={{
              width: "100%",
              height: "200px",
              backgroundSize: "cover",
              backgroundImage: `url("${article.image}")`,
            }}
            className="photoArticle"
            alt={article.titre}
          />
        </div>
        <div>
          <h3 className="titreArticle">{article.titre}</h3>
          <p className="titreDate">{article.date}</p>
          <p className="titreText">{article.texte}</p>
        </div>
      </Link>
    </div>
  );
}

export default Article;
