/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from "react";

const CurrentPagesContext = createContext();

export function CurrentPagesContextProvider({ children }) {
  const user = localStorage.getItem("user");
  const [accountConnected, setAccountConnected] = useState(JSON.parse(user));
  const [accueil, setAcceuil] = useState(true);
  const [histoire, setHistoire] = useState(false);
  const [associations, setAssociations] = useState(false);
  const [atelierCarte, setAtelierCarte] = useState(false);
  const [blog, setBlog] = useState(false);
  const [creationEvenement, setCreationEvenement] = useState(false);
  const [isOpenJeCree, setIsOpenJeCree] = useState(false);
  const [userIsConnected, setUserIsConnected] = useState(false);
  const eventToJointLocal = localStorage.getItem("eventToJointLocal");
  const [eventToJoint, setEventToJoint] = useState(
    JSON.parse(eventToJointLocal)
  );
  const [cadeauxList, setcadeauxList] = useState([]);
  const articleChoose = localStorage.getItem("articleChoose");
  const [detail, setDetail] = useState(JSON.parse(articleChoose));
  const [articles, setArticles] = useState([]);
  const [postContent, setPostContent] = useState([]);

  return (
    <CurrentPagesContext.Provider
      value={{
        accueil,
        setAcceuil,
        histoire,
        setHistoire,
        associations,
        setAssociations,
        atelierCarte,
        setAtelierCarte,
        blog,
        setBlog,
        creationEvenement,
        setCreationEvenement,
        isOpenJeCree,
        setIsOpenJeCree,
        userIsConnected,
        setUserIsConnected,
        accountConnected,
        setAccountConnected,
        eventToJoint,
        setEventToJoint,
        cadeauxList,
        setcadeauxList,
        detail,
        setDetail,
        articles,
        setArticles,
        postContent,
        setPostContent,
      }}
    >
      {children}
    </CurrentPagesContext.Provider>
  );
}

export default CurrentPagesContext;
