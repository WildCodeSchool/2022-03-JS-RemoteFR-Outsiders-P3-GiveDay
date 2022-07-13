import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "@components/Layout";

import CurrentPagesContext from "../../PagesContexts";

function ArticleDetail() {
  const { detail } = useContext(CurrentPagesContext);

  return (
    <Layout>
      <div className="gloArticle">
        <div className="BlocPhotoArticle">
          <img
            className="PhotoPrincipal"
            src={detail.image}
            alt={detail.titre}
          />
        </div>
        <div className="titreAndDate">
          <h3 className="detailTitre">{detail.titre}</h3>
          <p className="detailDate">{detail.date}</p>
        </div>
        <div className="articleDetail">
          <article className="detailText">{detail.texte}</article>
        </div>

        <div className="ButtonArticle">
          <Link to="/Blog">
            <button type="button" className="buttonStyle">
              Retour aux articles
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default ArticleDetail;
