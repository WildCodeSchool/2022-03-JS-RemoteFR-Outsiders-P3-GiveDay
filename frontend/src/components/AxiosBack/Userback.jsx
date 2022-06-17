import React, { useState, useEffect } from "react";
import axios from "axios";

function Userback() {
  const [users, setUsers] = useState("");
  const API = `http://localhost:5000/api/users`;
  useEffect(() => {
    axios
      .get(API)
      .then((res) => res.data)
      .then((data) => {
        setUsers(data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <p>
      {/* test de user */}
      {console.warn(users)}
    </p>
  );
}

export default Userback;
