/* eslint-disable no-alert */
import React, { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import api from "@services/api";
import "../dashboard.css";

function PostsContent() {
  const [articles, setArticles] = useState("");

  // useEffect qui récupère tous les articles de la BDD
  useEffect(() => {
    api
      .get(`/api/articles`)
      .then((res) => setArticles(res.data.map((e) => e)))
      .catch((err) => console.error(err));
  }, []);

  // handleDelete permet de supprimer un article côté front et dans la BDD
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
      <div className="head-h2">
        <h2>Tous les articles du blog</h2>
      </div>
      <table className="table table-responsive-sm table-striped table-light table-bordered table-hover ">
        <thead className="table-dark">
          <tr>
            <th scope="col">Titre</th>
            <th scope="col">Date de création</th>
            <th scope="col" className="btn-column">
              Modifier
            </th>
            <th scope="col" className="btn-column">
              Supprimer
            </th>
          </tr>
        </thead>
        <tbody>
          {articles &&
            articles.map((article) => (
              <tr>
                <th scope="col">{article.titre}</th>
                <th scope="col">{article.date}</th>
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
                      Swal.fire({
                        title:
                          "Etes-vous sûr de vouloir supprimer cet article?",
                        text: "Cette action sera irréversible",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#6fceb4",
                        cancelButtonColor: "#ec5f5d",
                        confirmButtonText: "Oui, supprimer",
                        cancelButtonText: "Annuler",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire("L'article a bien été supprimé.");
                          handleDelete(article.id);
                        }
                      });
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
