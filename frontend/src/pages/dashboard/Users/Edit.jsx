import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "@services/api";
import Swal from "sweetalert2";

function Edit() {
  const { id } = useParams();
  const [user, setUser] = useState({
    prenom: "",
    nom: "",
    role: "",
  });

  useEffect(() => {
    api
      .get(`/api/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  /**
   * La fonction submitUserHandler, permet de de mettre à jour les données de l'utilisateur.
   */
  const submitUserHandler = (e) => {
    Swal.fire({
      position: "bottom-end",
      icon: "success",
      title: "Utilisateur modifié !",
      showConfirmButton: false,
      timer: 1700,
    });
    e.preventDefault();
    api
      .put(`/api/admin/roleUpdate/${id}`, user, { withCredentials: true })

      .catch((err) => console.error(err));
  };

  /**
   * La fonction inputTextHandler, permet de récupérer le texte introduit dans l'input.
   */
  const inputTextHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contentTable">
      <h2>Mise à jour de l'utilisateur : </h2>

      <form id="updateUserForm" onSubmit={submitUserHandler}>
        <label htmlFor="prenom">
          Prénom
          <input
            value={user.prenom}
            onChange={inputTextHandler}
            type="text"
            name="prenom"
          />
        </label>
        <label htmlFor="nom">
          Nom
          <input
            value={user.nom}
            onChange={inputTextHandler}
            type="text"
            name="nom"
          />
        </label>

        <label htmlFor="role">
          Rôle
          <select htmlFor="role" onChange={inputTextHandler} name="role">
            <option value="">--Choisir un rôle--</option>
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
        </label>

        <button className="buttonStyle" type="submit">
          Mettre à jour
        </button>
        <Link to="/admin/users">Retour à la liste des utilisateurs</Link>
      </form>
    </div>
  );
}

export default Edit;
