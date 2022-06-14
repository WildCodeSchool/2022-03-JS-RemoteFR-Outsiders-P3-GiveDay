import React, { useState, useEffect } from "react";
import axios from "axios";

function Userback() {
  const [user, setuser] = useState("");
  const API = `http://localhost:5000/api/user`;
  useEffect(() => {
    axios
      .get(API)
      .then((res) => res.data)
      .then((data) => {
        setuser(data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <p>
      {/* test de user */}
      {console.warn(user)}
    </p>
  );
}

export default Userback;
