import React from "react";
import "./article.css";


function Article({article}) {
  return(
   <div className="vignetteBlog">
    <img src={`../src/assets/images/${article.image}`}/>
    <h3>{article.titre}</h3>
    <p>{article.date}</p>
    <p>{article.texte}</p>
  </div>
  );
}

export default Article;
