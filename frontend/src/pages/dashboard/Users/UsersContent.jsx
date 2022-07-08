import React, { useState, useEffect } from "react";
import "../dashboard.css";
import { GrUpdate } from "react-icons/gr";
import { BsCheckCircleFill, BsTrash } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { FcSearch } from "react-icons/fc";
import api from "@services/api";

function UsersContent() {
  const [users, setUsers] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [searchValue, setSearchValue] = useState("");
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

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const HandleClickSearch = () => {
    setUsers(searchValue);
    setSearchValue("");
  };
  return (
    <div className="contentTable table-responsive">
      <div className="head-h2-btn">
        <h2>Utilisateurs</h2>{" "}
      </div>
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
        <button
          type="button"
          className="dashboard-btn"
          onClick={HandleClickSearch}
        >
          <FcSearch size={35} />
        </button>
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
              users
                .filter((user) => user.includes(searchValue))
                .map((user) => (
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
                        className="dashboard-btn"
                        type="button"
                        onClick={() => {
                          handleChangeRole(user.id);
                        }}
                      >
                        {!isUpdate ? (
                          <GrUpdate size={18} />
                        ) : (
                          <div className="valid-cancel">
                            <button type="button" className="dashboard-btn">
                              <BsCheckCircleFill size={20} />
                            </button>
                            <button type="button" className="dashboard-btn">
                              <MdOutlineCancel size={22} />
                            </button>
                          </div>
                        )}
                      </button>
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
    </div>
  );
}

export default UsersContent;
