import React, { useState, useEffect } from "react";
import "./users.css";
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
    <div className="contentUsers">
      <div className="">
        <h1>UTILISATEURS</h1>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Prénom</th>
            <th scope="col">Nom</th>
            <th scope="col">Role</th>
            <th scope="col">Email</th>
            <th scope="col">Mot de passe hashé</th>
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
                  <button type="button" onClick={() => handleDelete()}>
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

export default UsersContent;
