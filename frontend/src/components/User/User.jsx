/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import UserDisconnected from "@components/User/UserDisconnected";
import UserConnected from "@components/User/UserConnected";
import CurrentPagesContext from "../../PagesContexts";
import "./user.css";

function User() {
  const { userIsConnected, setUserIsConnected } =
    useContext(CurrentPagesContext);
  const cookies = useCookies();
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
