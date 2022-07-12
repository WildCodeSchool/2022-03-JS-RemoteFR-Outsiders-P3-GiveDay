import React, { useContext } from "react";
import { Link } from "react-router-dom";
import api from "@services/api";
import "./article.css";
import "../../pages/Home/home.css";
import "@components/Article/ArticleDetail";
import CurrentPagesContext from "../../PagesContexts";

function NewArticle({ article }) {
  const { setDetail } = useContext(CurrentPagesContext);

  const handleClick = () => {
    api
      .get(`http://localhost:5000/api/articles/${article.id}`)
      .then((res) => res.data)
      .then((data) => {
        setDetail(data);
      });
  };

  return (
    <div className="newVignette">
      <Link to="/ArticleDetail" onClick={handleClick}>
        <img
          className="newImage"
          src={`../src/assets/images/${article.image}`}
          alt="plage"
        />
        <h3 className="newTitle">{article.titre}</h3>
        <p className="newArticle">{article.date}</p>
        {/* <p className="newDescript">{article.texte}</p> */}
      </Link>
    </div>
  );
}

export default NewArticle;
