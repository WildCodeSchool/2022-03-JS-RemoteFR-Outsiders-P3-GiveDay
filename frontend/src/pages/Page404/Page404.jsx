import React from "react";
import "./page404.css";
import icon404 from "@assets/images/icon404.gif";

function Page404() {
  return (
    <div id="containerPage404">
      <img src={icon404} alt="icon404" />
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </div>
  );
}

export default Page404;
