import React, { useContext } from "react";
import api from "@services/api";
import { useNavigate } from "react-router-dom";
import { Markup } from "interweave";
import "./article.css";
import "@components/Article/ArticleDetail";
import CurrentPagesContext from "../../PagesContexts";

function Article({ article }) {
  const { setDetail } = useContext(CurrentPagesContext);
  const articleContent = article.texte;
  const navigate = useNavigate();
  const handleClick = () => {
    api
      .get(`/api/articles/${article.id}`)
      .then((res) => res.data)
      .then((data) => {
        setDetail(data);
        localStorage.setItem("articleChoose", JSON.stringify(data));
      })
      .then(
        setTimeout(() => {
          navigate("/ArticleDetail");
        }, 1000)
      );
  };

  return (
    <div className="vignetteBlog">
      <button type="button" onClick={handleClick}>
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
          <p className="titreDate">{article.date.substring(0, 10)}</p>
          <p className="titreText">
            <Markup content={articleContent} />
          </p>
        </div>
      </button>
    </div>
  );
}

export default Article;
