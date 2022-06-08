import React, { useState, useEffect } from "react";
import axios from "axios";


function Eventback() {
  const [event, setevent] = useState("");
  const API = `http://localhost:5000/api/event`;
  useEffect(() => {
    axios
      .get(API)
      .then((res) => res.data)
      .then((data) => {
        setevent(data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <p>
     
      {/* test de user */}
      {console.warn(event)}
    </p>
  );
}

export default  Eventback;
