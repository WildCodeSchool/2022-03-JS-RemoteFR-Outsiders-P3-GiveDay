import React, { useEffect, useContext } from "react";
import "./page404.css";
import { useNavigate } from "react-router-dom";
import icon404 from "@assets/images/icon404.gif";
import CurrentPagesContext from "../../PagesContexts";

function Page404() {
  const {
    setAcceuil,
    setHistoire,
    setAssociations,
    setAtelierCarte,
    setBlog,
    setCreationEvenement,
    setIsOpenJeCree,
  } = useContext(CurrentPagesContext);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setAcceuil(true);
      setHistoire(false);
      setAssociations(false);
      setAtelierCarte(false);
      setBlog(false);
      setCreationEvenement(false);
      setIsOpenJeCree(false);
      navigate("/");
    }, 1500);
  }, []);
  return (
    <div id="containerPage404">
      <img src={icon404} alt="icon404" />
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </div>
  );
}

export default Page404;
