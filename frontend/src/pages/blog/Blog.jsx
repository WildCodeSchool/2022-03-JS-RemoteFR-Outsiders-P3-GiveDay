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

  useEffect(() => {
    const article = `http://localhost:5000/api/article`;
    axios
      .get(article)
      .then((res) => res.data)
      .then((cards) => {
        setarrayData(cards);
      });
  }, []);

  return (
    <Layout>
      <div className="globalBlog">
        <div>
          <h1 className="titleAloja">BLOG</h1>
        </div>
        {arrayData.map((card) => (
          <Article key={card.id} article={card} />
        ))}
      </div>
    </Layout>
  );
}

export default Blog;
