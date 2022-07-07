import Layout from "@components/Layout";
import React, { useState, useEffect } from "react";
import "./blog.css";
import "../Home/home.css";
import "../../App.css";
import "../../components/Nav/Nav.css";
import axios from "axios";
import Article from "@components/Article/Article";
import "../../components/Article/article.css";

function Blog() {
  const [arrayData, setarrayData] = useState([]);
  const [arrayFiltre, setArrayFiltre] = useState([]);
  const [arrayCategorie, setArrayCategorie] = useState([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (result === "") {
      const tags = `http://localhost:5000/api/tag`;
      // console.log(tags);
      axios
        .get(tags)
        .then((res) => res.data)
        .then((tags1) => {
          setArrayCategorie(tags1);
        });

      const article = `http://localhost:5000/api/articles`;
      axios
        .get(article)
        .then((res) => res.data)
        .then((cards1) => {
          setarrayData(cards1);
        });
    } else {
      const tags = `http://localhost:5000/api/tag/${result}`;
      axios
        .get(tags)
        .then((res) => res.data)
        .then((tags2) => {
          console.warn(tags2);
          setArrayFiltre(tags2);
        });

      // console.log(arrayFiltre);
      const article = `http://localhost:5000/api/articles/${arrayFiltre}`;
      // console.log(article);
      axios
        .get(article)
        .then((res) => res.data)
        .then((cards) => {
          setarrayData(cards);
        });
    }
  }, [result]);

  const handlechange = (event) => {
    setResult(event.target.value);
  };

  return (
    <Layout>
      <div className="globalBlog">
        <div className="titreBlog">
          <h1 className="titleAloja">BLOG</h1>

          <div className="searchTag">
            <h3>Catégorie:</h3>
            <select>
              {arrayCategorie.map((categorie) => (
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
        {arrayData.map((card) => (
          <Article key={card.id} article={card} />
        ))}
      </div>
    </Layout>
  );
}

export default Blog;
