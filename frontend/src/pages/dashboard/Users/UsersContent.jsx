import React, { useState, useEffect } from "react";
import "../dashboard.css";

import { BsTrash } from "react-icons/bs";
import api from "@services/api";

function UsersContent() {
  const [users, setUsers] = useState("");

  useEffect(() => {
    api
      .get(`/api/users`)
      .then((res) => setUsers(res.data.map((e) => e)))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (userId) => {
    api
      .delete(`/api/users/delete/${userId}`)
      .then(() => setUsers(users.filter((user) => user.id !== userId)))
      .catch((err) => console.error(err));
  };

  return (
    <div className="contentTable">
      <div className="">
        <h2>Utilisateurs</h2>
      </div>
      <div className="table-responsive-md ">
        <table className="table align-middle table-striped table-light table-bordered table-hover ">
          <thead className="table-dark">
            <tr>
              <th scope="col">Prénom</th>
              <th scope="col">Nom</th>
              <th scope="col">Role</th>
              <th scope="col">Email</th>
              <th scope="col">Mot de passe chiffré</th>
              <th scope="col">Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr>
                  <th scope="col">{user.prenom}</th>
                  <th scope="col">{user.nom}</th>
                  <th scope="col">{user.role}</th>
                  <th scope="col">{user.email}</th>
                  <th scope="col">{user.password}</th>
                  <th scope="col">
                    <button
                      className="delete-btn"
                      type="button"
                      onClick={() => {
                        const confirmBox = window.confirm(
                          "Etes-vous sûr de vouloir supprimer cet utilisateur?"
                        );
                        if (confirmBox === true) {
                          handleDelete(user.id);
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
    </div>
  );
}

export default UsersContent;
