/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import UserDisconnected from "@components/User/UserDisconnected";
import UserConnected from "@components/User/UserConnected";
import "./user.css";

function User() {
  const [userIsConnected, setUserIsConnected] = useState(false);
  if (userIsConnected) {
    return (
      <div className="loginContainer">
        <UserConnected
          setUserIsConnected={setUserIsConnected}
          userIsConnected={userIsConnected}
        />
      </div>
    );
  }
  return (
    <div className="loginContainer">
      <UserDisconnected setUserIsConnected={setUserIsConnected} />
    </div>
  );
}

export default User;
