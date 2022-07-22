/* eslint-disable no-alert */
import React, { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import { GrAddCircle, GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";

import api from "@services/api";
import "../dashboard.css";

function PostsContent() {
  const [articles, setArticles] = useState("");

  useEffect(() => {
    api
      .get(`/api/articles`)
      .then((res) => setArticles(res.data.map((e) => e)))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (articleId) => {
    api
      .delete(`/api/article/delete/${articleId}`)
      .then(() =>
        setArticles(articles.filter((article) => article.id !== articleId))
      )
      .catch((err) => console.error(err));
  };

  return (
    <div className="contentTable table-responsive">
      <div className="head-h2-btn">
        <h2>Tous les articles du blog</h2>
        <button type="button" className="btn-add">
          <GrAddCircle size={40} />
        </button>
      </div>
      <table className="table table-responsive-sm table-striped table-light table-bordered table-hover ">
        <thead className="table-dark">
          <tr>
            <th scope="col">Titre</th>
            <th scope="col">Date de création</th>
            <th scope="col">Modifier</th>
            <th scope="col">Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {articles &&
            articles.map((article) => (
              <tr>
                <th scope="col">{article.titre}</th>
                <th scope="col">date de création</th>
                <th scope="col" className="icons-cell">
                  <Link to="/admin/users">
                    <GrUpdate />
                  </Link>
                </th>
                <th scope="col" className="icons-cell">
                  <button
                    className="dashboard-btn delete-btn"
                    type="button"
                    onClick={() => {
                      const confirmBox = window.confirm(
                        "Etes-vous sûr de vouloir supprimer cet article ?"
                      );
                      if (confirmBox === true) {
                        handleDelete(article.id);
                      }
                    }}
                  >
                    <BsTrash size={20} />
                  </button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostsContent;
