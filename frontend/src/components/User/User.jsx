/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useContext } from "react";
// import { useCookies } from "react-cookie";
import UserDisconnected from "@components/User/UserDisconnected";
import UserConnected from "@components/User/UserConnected";
import CurrentPagesContext from "../../PagesContexts";
import "./user.css";

function User() {
  const { accountConnected, userIsConnected, setUserIsConnected } =
    useContext(CurrentPagesContext);
  ///
  // pour la conexion avec cookies....
  ///

  // const cookies = useCookies();
  // useEffect(() => {
  //   if (cookies[0].user_giveday) {
  //     setUserIsConnected(true);
  //   }
  //   if (!cookies[0].user_giveday) {
  //     setUserIsConnected(false);
  //   }
  // }, []);

  ///
  // pour hacker le dasboard ....
  ///
  //  const usery = {user : {
  //    id: 9,
  //    role: "admin",
  //  }}
  // localStorage.setItem("user", JSON.stringify(usery));
  useEffect(() => {
    if (accountConnected) {
      setUserIsConnected(true);
    }
    if (!accountConnected) {
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
