import React, { useState, useEffect } from "react";
import "../dashboard.css";
import { GrUpdate } from "react-icons/gr";
import { BsCheckCircleFill, BsTrash } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

import api from "@services/api";

function UsersContent() {
  const [users, setUsers] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  // const [roleUpdate, setroleUpdate] = useState("");

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

  const handleChangeRole = (userId) => {
    api
      .get(`/api/users/${userId}`)
      .then(() => console.warn(users.filter((user) => user.id !== userId)))
      .catch((err) => console.error(err));
    setIsUpdate(!isUpdate);
  };
  console.warn(isUpdate);
  return (
    <div className="contentTable table-responsive">
      <div className="head-h2-btn">
        <h2>Utilisateurs</h2>{" "}
      </div>

      <div className="">
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
              users.map((user) => (
                <tr>
                  <th scope="col">{user.prenom}</th>
                  <th scope="col">{user.nom}</th>
                  <th scope="col">{user.email}</th>
                  <th scope="col">
                    {!isUpdate ? (
                      user.role
                    ) : (
                      <select>
                        <option>admin</option>
                        <option>user</option>
                      </select>
                    )}
                  </th>
                  <th scope="col" className="icons-cell">
                    <button
                      className="update-btn"
                      type="button"
                      onClick={() => {
                        handleChangeRole(user.id);
                      }}
                    >
                      {!isUpdate ? (
                        <GrUpdate size={18} />
                      ) : (
                        <div className="valid-cancel">
                          <button type="button">
                            <BsCheckCircleFill size={20} />
                          </button>
                          <button type="button">
                            <MdOutlineCancel size={22} />
                          </button>
                        </div>
                      )}
                    </button>
                  </th>
                  <th scope="col" className="icons-cell">
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
                      <BsTrash size={22} />
                    </button>
                  </th>{" "}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersContent;
