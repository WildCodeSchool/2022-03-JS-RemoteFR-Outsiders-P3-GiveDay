import React from "react";
import "./article.css";
import "../../pages/Home/home.css";

function NewArticle({ article }) {
  return (
    <div className="newVignette">
      <img
        className="newImage"
        src={`../src/assets/images/${article.image}`}
        alt="plage"
      />
      <h3 className="newTitle">{article.titre}</h3>
      <p className="newArticle">{article.date}</p>
      {/* <p className="newDescript">{article.texte}</p> */}
    </div>
  );
}

export default NewArticle;
