import React, { useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./article.css";
import "@components/Article/ArticleDetail";
import CurrentPagesContext from "../../PagesContexts";

function Article({ article }) {
  const { setDetail } = useContext(CurrentPagesContext);

  const handleClick = () => {
    const articleSolo = `http://localhost:5000/api/articles/${article.id}`;
    axios
      .get(articleSolo)
      .then((res) => res.data)
      .then((data) => {
        setDetail(data);
      });
  };

  return (
    <div className="vignetteBlog">
      <Link to="/ArticleDetail" onClick={handleClick}>
        <div>
          <img
            className="photoArticle"
            src={`../src/assets/images/${article.image}`}
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
