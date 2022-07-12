/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext, useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import CurrentPagesContext from "../../PagesContexts";

function Nav() {
  const {
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
  } = useContext(CurrentPagesContext);

  const goToAccueil = () => {
    setAcceuil(true);
    setHistoire(false);
    setAssociations(false);
    setAtelierCarte(false);
    setBlog(false);
    setCreationEvenement(false);
  };
  const goToHistoire = () => {
    setAcceuil(false);
    setAssociations(false);
    setAtelierCarte(false);
    setBlog(false);
    setCreationEvenement(false);
    setHistoire(true);
  };
  const goToAssociations = () => {
    setAcceuil(false);
    setHistoire(false);
    setAtelierCarte(false);
    setBlog(false);
    setCreationEvenement(false);
    setAssociations(true);
  };
  const goToBlog = () => {
    setAcceuil(false);
    setHistoire(false);
    setAssociations(false);
    setAtelierCarte(false);
    setCreationEvenement(false);
    setBlog(true);
  };
  const goToAtelierCarte = () => {
    setAcceuil(false);
    setHistoire(false);
    setAssociations(false);
    setBlog(false);
    setCreationEvenement(false);
    setTimeout(() => {
      setIsOpenJeCree(false);
    }, 250);
    setAtelierCarte(true);
  };
  const goToCreationEvenement = () => {
    setAcceuil(false);
    setHistoire(false);
    setAssociations(false);
    setAtelierCarte(false);
    setBlog(false);
    setCreationEvenement(true);
    setTimeout(() => {
      setIsOpenJeCree(false);
    }, 250);
  };
  const openJeCree = () => {
    setIsOpenJeCree(!isOpenJeCree);
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [openToogle, setOpenToogle] = useState(false);
  const handleToogle = () => {
    setOpenToogle(!openToogle);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <div className="navAndContain">
      {screenWidth < 750 ? (
        <button type="button" className="openToogle" onClick={handleToogle}>
          =
        </button>
      ) : null}

      <nav
        className={
          openToogle || screenWidth > 750 ? "navContainer" : "navContainerOff"
        }
      >
        <ul>
          <li>
            <Link
              to="/"
              className={accueil ? "navLinkOn" : "navLinkOff"}
              onClick={goToAccueil}
            >
              <h2>ACCUEIL</h2>
            </Link>
          </li>
          <li className="openedJeCreeContainer">
            <button
              type="button"
              className={
                atelierCarte || creationEvenement ? "navLinkOn" : "navLinkOff"
              }
              onClick={openJeCree}
            >
              <h2>JE CRÉE</h2>
            </button>
            <div className="openedJeCree">
              <Link
                to="/AtelierCarte"
                className={isOpenJeCree ? "show" : "hidden"}
              >
                <button
                  type="button"
                  className={
                    atelierCarte ? "navLinkOn  open" : "navLinkOff  open"
                  }
                  onClick={goToAtelierCarte}
                >
                  <h2>Ma Carte d'invitation</h2>
                </button>
              </Link>
              <Link
                to="/creationEvenement"
                className={isOpenJeCree ? "show" : "hidden"}
              >
                <button
                  type="button"
                  className={
                    creationEvenement ? "navLinkOn open" : "navLinkOff open"
                  }
                  onClick={goToCreationEvenement}
                >
                  <h2>Mon évenement</h2>
                </button>
              </Link>
            </div>
          </li>
          <li>
            <Link
              to="/blog"
              className={blog ? "navLinkOn" : "navLinkOff"}
              onClick={goToBlog}
            >
              <h2>BLOG</h2>
            </Link>
          </li>
          <li>
            <Link
              to="/associations"
              className={associations ? "navLinkOn" : "navLinkOff"}
              onClick={goToAssociations}
            >
              <h2>ASSOCIATIONS</h2>
            </Link>
          </li>
          <li>
            <Link
              to="/histoire"
              className={histoire ? "navLinkOn" : "navLinkOff"}
              onClick={goToHistoire}
            >
              <h2>NOTRE HISTOIRE</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
