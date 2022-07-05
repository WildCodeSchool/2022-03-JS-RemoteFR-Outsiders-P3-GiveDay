import React from "react";
import "./article.css";

function Article({ article }) {
  return (
    <div className="vignetteBlog">
      <div>
        <img src={`../src/assets/images/${article.image}`} alt="plage" />
      </div>
      <div>
        <h3>{article.titre}</h3>
        <p>{article.date}</p>
        <p>{article.texte}</p>
      </div>
    </div>
  );
}

export default Article;
