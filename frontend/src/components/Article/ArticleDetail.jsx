import React, { useContext } from "react";
import Layout from "@components/Layout";

import CurrentPagesContext from "../../PagesContexts";

function ArticleDetail() {
  const { detail } = useContext(CurrentPagesContext);

  return (
    <Layout>
      <div className="vignetteBlog">
        <p>coucou</p>
        <div>
          <img
            className="photoArticle"
            src={`../src/assets/images/${detail.image}`}
            alt={detail.titre}
          />
        </div>
        <div>
          <h3 className="titreArticle">{detail.titre}</h3>
          <p className="titreDate">{detail.date}</p>
          <p className="titreText">{detail.texte}</p>
        </div>
      </div>
      {/* <ArticleDetail key={article.id} article={article} /> */}
    </Layout>
  );
}

export default ArticleDetail;
