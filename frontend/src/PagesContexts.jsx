/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from "react";

const CurrentPagesContext = createContext();
/*eslint-disable */

export function CurrentPagesContextProvider({ children }) {
  const isConnected = () => {
    if (accountConnected) {
      return accountConnected.user.id;
    }
    return "user is not connected";
  };

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
  const [eventToJoint, setEventToJoint] = useState({});
  const [cadeauxList, setcadeauxList] = useState([]);
  const articleChoose = localStorage.getItem("articleChoose");
  const [detail, setDetail] = useState(JSON.parse(articleChoose));
  const [articles, setArticles] = useState([]);
  const [postContent, setPostContent] = useState([]);
  const [asso, setAsso] = useState([]);
  const [createEvent, setCreateEvent] = useState({
    code: "",
    prenom: "",
    age: "",
    date: "",
    heure_de_debut: "",
    heure_de_fin: "",
    lieu: "",
    telephone: "",
    mail: "",
    asso_id: "",
    user_id: isConnected(),
  });

  return (
    <CurrentPagesContext.Provider
      value={{
        asso,
        setAsso,
        createEvent,
        setCreateEvent,
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
/* eslint-enable */
export default CurrentPagesContext;
