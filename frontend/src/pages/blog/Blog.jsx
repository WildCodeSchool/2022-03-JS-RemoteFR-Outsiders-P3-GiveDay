import React, { useState, useEffect, useContext } from "react";
import api from "@services/api";
import Layout from "@components/Layout";
import Article from "@components/Article/Article";
import CurrentPagesContext from "../../PagesContexts";

import "./blog.css";
import "../Home/home.css";
import "../../App.css";
import "../../components/Nav/Nav.css";
import "../../components/Article/article.css";

function Blog() {
  const [categories, setCategories] = useState([]);
  const [choiceCategorie, setChoiceCategorie] = useState(0);
  const { articles, setArticles } = useContext(CurrentPagesContext);

  /**
   * Lors du chargement du component, nous allons récupérer toutes nos catégories.
   */
  useEffect(() => {
    api
      .get(`/api/tag`)
      .then((res) => res.data)
      .then((data) => {
        setCategories(data);
      });
  }, []);

  /**
   * La fonction handleChange, permet de récuperer l'id de la catégorie,
   * car nous allons faire appel à celui ci pour récupérer tout nos articles
   */
  const handlechange = (event) => {
    setChoiceCategorie(event.target.value);
  };

  /**
   * Ce useEffect, permet de charger tous les articles d'une catégorie,
   * si celui ci change, alors nous relançons notre axios pour récupérer nos articles.
   */
  useEffect(() => {
    api
      .get(`/api/tag/${choiceCategorie}`)
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => console.error(err));
  }, [choiceCategorie]);

  return (
    <Layout>
      <div className="globalBlog">
        <div className="titreBlog">
          <h1 className="titleAloja">BLOG</h1>

          <div className="searchTag">
            <h3>Catégorie:</h3>
            <select onChange={handlechange} className="buttonStyle">
              <option value={0}>Tous les articles</option>
              {/** Ici, nous affichons toutes nos catégories, reçu via l'API  */}
              {categories.map((categorie) => (
                <option key={categorie.id} value={categorie.id}>
                  {categorie.tag}
                </option>
              ))}
            </select>
          </div>
        </div>
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </Layout>
  );
}

export default Blog;
