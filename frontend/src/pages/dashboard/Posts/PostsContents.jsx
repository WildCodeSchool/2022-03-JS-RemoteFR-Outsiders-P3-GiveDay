import React, { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import api from "@services/api";

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
    <div className="contentUsers">
      <div className="">
        <h1>Tous les articles du blog</h1>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Titre</th>
            <th scope="col">Date de création</th>
            <th scope="col">Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {articles &&
            articles.map((article) => (
              <tr>
                <th scope="col">{article.titre}</th>
                <th scope="col">date de création</th>
                <th scope="col">
                  <button
                    type="button"
                    onClick={() => {
                      const confirmBox = window.confirm(
                        "Etes-vous sûr de vouloir supprimer cet article?"
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
