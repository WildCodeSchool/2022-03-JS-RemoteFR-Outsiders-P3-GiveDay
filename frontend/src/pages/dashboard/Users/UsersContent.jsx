/* eslint-disable no-alert */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../dashboard.css";
import { GrUpdate } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";
import { FcSearch } from "react-icons/fc";
import api from "@services/api";

function UsersContent() {
  const [users, setUsers] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [count, setCount] = useState([]);

  /**
   * Lors du chargement du component, nous allons récupérer tous nos utilisateurs.
   */
  useEffect(() => {
    api
      .get(`/api/users`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    api
      .get(`/api/count`)
      .then((res) => setCount(res.data[0]))
      .catch((err) => console.error(err));
  }, [users]);

  /**
   * La fonction handleChange, permet de récupérer le texte introduit dans l'input et de le passer en minuscule.
   */
  const handleChange = (event) => {
    const search = event.target.value.toLowerCase();
    setSearchValue(search);
  };

  /**
   * La fonction handleDelete, permet de supprimer un utilisateur
   */
  const handleDelete = (userId) => {
    api
      .delete(`/api/users/delete/${userId}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== userId));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="contentTable table-responsive">
      <div className="head-h2-btn">
        <h2>Utilisateurs</h2>{" "}
      </div>
      <h4>Le site Giveday compte {count.count} utilisateurs</h4>
      <div className="searchbar">
        <input
          id="search"
          value={searchValue}
          type="text"
          name="search"
          placeholder="Tapez un email, un nom ..."
          className="input"
          onChange={handleChange}
        />
        <button type="button" className="dashboard-btn">
          <FcSearch size={35} />
        </button>
      </div>

      <table className="table align-middle table-striped table-light table-bordered table-hover ">
        <thead className="table-dark">
          <tr>
            <th scope="col">Prénom</th>
            <th scope="col">Nom</th>
            <th scope="col">Email</th>
            <th scope="col" className="role-column">
              Rôle
            </th>
            <th scope="col" className="modify-role-column">
              Modifier rôle
            </th>
            <th scope="col">Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users
              .filter(
                (user) =>
                  user.prenom.includes(searchValue) ||
                  user.nom.includes(searchValue) ||
                  user.email.includes(searchValue) ||
                  user.role.includes(searchValue)
              )
              .map((user) => (
                <tr key={user.id}>
                  <th scope="col">{user.prenom}</th>
                  <th scope="col">{user.nom}</th>
                  <th scope="col">{user.email}</th>
                  <th scope="col">{user.role}</th>
                  <th scope="col" className="icons-cell">
                    <Link to={`/admin/edit/${user.id}`}>
                      <GrUpdate />
                    </Link>
                  </th>
                  <th scope="col" className="icons-cell">
                    <button
                      className="dashboard-btn delete-btn"
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
                      <BsTrash size={22} />
                    </button>
                  </th>{" "}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersContent;
