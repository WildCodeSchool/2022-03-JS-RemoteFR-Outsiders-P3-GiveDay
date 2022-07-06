import React, { useEffect, useState } from "react";
import api from "@services/api";
import blog2 from "../../assets/images/blog2.gif";
import "./user.css";

function ViewUser() {
  const [userData, setUserData] = useState({
    prenom: "Oscar",
    nom: "AGUDELO",
    email: "oscar@oscar.com",
  });
  useEffect(() => {
    api
      .get("/api/users/:id", { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        if (data) {
          setUserData(data);
        }
      });
  }, []);

  return (
    <div id="viewUserContainer">
      <img src={blog2} alt="photoProfile" />
      <h1>{userData.prenom}</h1>
      <h2>{userData.nom}</h2>
      <p>{userData.email}</p>
    </div>
  );
}

export default ViewUser;
