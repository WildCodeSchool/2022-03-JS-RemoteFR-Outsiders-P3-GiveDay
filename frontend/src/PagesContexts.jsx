/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from "react";

const CurrentPagesContext = createContext();

export function CurrentPagesContextProvider({ children }) {
  const [accueil, setAcceuil] = useState(true);
  const [histoire, setHistoire] = useState(false);
  const [associations, setAssociations] = useState(false);
  const [atelierCarte, setAtelierCarte] = useState(false);
  const [blog, setBlog] = useState(false);
  const [creationEvenement, setCreationEvenement] = useState(false);
  const [isOpenJeCree, setIsOpenJeCree] = useState(false);
  const [userIsConnected, setUserIsConnected] = useState(false);
  const [detail, setDetail] = useState([]);
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
