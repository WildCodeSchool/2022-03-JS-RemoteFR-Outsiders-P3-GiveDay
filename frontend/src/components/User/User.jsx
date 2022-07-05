/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import UserDisconnected from "@components/User/UserDisconnected";
import UserConnected from "@components/User/UserConnected";
import "./user.css";

function User() {
  const cookies = useCookies();
  const [userIsConnected, setUserIsConnected] = useState(false);
  useEffect(() => {
    if (cookies[0].user_giveday) {
      setUserIsConnected(true);
    }
    if (!cookies[0].user_giveday) {
      setUserIsConnected(false);
    }
  }, []);
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
