import React, { useState, useEffect } from "react";
import axios from "axios";

import Layout from "@components/Layout";
import Article from "@components/Article/Article";

import "./blog.css";
import "../Home/home.css";
import "../../App.css";
import "../../components/Nav/Nav.css";
import "../../components/Article/article.css";

function Blog() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [choiceCategorie, setChoiceCategorie] = useState(0);

  /**
   * Lors du chargement du component, nous allons récupérer toutes nos catégories.
   */
  useEffect(() => {
    const tags = `http://localhost:5000/api/tag`;
    axios
      .get(tags)
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
    const getArticles = `http://localhost:5000/api/tag/${choiceCategorie}`;
    axios
      .get(getArticles)
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
            <select>
              <option onClick={handlechange} value={0}>
                Tous les articles
              </option>
              {/** Ici, nous affichons toutes nos catégories, reçu via l'API  */}
              {categories.map((categorie) => (
                <option
                  key={categorie.id}
                  onClick={handlechange}
                  value={categorie.id}
                >
                  {categorie.tag}
                </option>
              ))}
            </select>
          </div>
          {/* <SelectTag setArrayTag={setArrayTag} arrayTag={arrayTag}/> */}
        </div>
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </Layout>
  );
}

export default Blog;
