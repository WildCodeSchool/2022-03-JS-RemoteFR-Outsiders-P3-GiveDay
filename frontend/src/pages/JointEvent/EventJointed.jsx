/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext, useEffect } from "react";
import "./jointEvent.css";
import api from "@services/api";
import { useNavigate } from "react-router-dom";
import Layout from "@components/Layout";
import CurrentPagesContext from "../../PagesContexts";

function EventJointed() {
  const { eventToJoint, setEventToJoint } = useContext(CurrentPagesContext);
  const [cagnottes, setCagnottes] = useState(
    !eventToJoint ||
      eventToJoint === null ||
      eventToJoint === undefined ||
      eventToJoint.id === "erreur154"
      ? { id: "erreur154" }
      : { id: eventToJoint.id }
  );
  const [assoChoose, setAssoChoose] = useState({});
  const [listCadeau, setListCadeau] = useState([]);
  const handleChange = (e) => {
    setCagnottes({
      ...cagnottes,
      [e.target.name]: parseInt(e.target.value, 10),
    });
  };

  useEffect(() => {
    if (
      !eventToJoint ||
      eventToJoint === null ||
      eventToJoint === undefined ||
      eventToJoint.id === "erreur154"
    ) {
      return setEventToJoint({ asso_id: "erreur154", id: "erreur154" });
    }
    api
      .get(`/api/asso/${eventToJoint.asso_id}`, { withCredentials: true })
      .then((res) => {
        setAssoChoose(res.data);
      });
  }, []);
  useEffect(() => {
    if (
      !eventToJoint ||
      eventToJoint === null ||
      eventToJoint === undefined ||
      eventToJoint.id === "erreur154"
    ) {
      return setEventToJoint({ asso_id: "erreur154", id: "erreur154" });
    }
    api
      .get(`/api/cadeaux/event/${eventToJoint.id}`, { withCredentials: true })
      .then((res) => {
        setListCadeau(res.data);
      });
  }, []);
  const navigate = useNavigate();
  const addCagnottes = (e) => {
    e.preventDefault();
    api
      .put(`/api/events/${eventToJoint.id}`, cagnottes, {
        withCredentials: true,
      })
      .then((res) => console.warn(res.data))
      .then(
        setTimeout(() => {
          navigate("/problem");
        }, 1000)
      );
  };
  if (
    !eventToJoint ||
    eventToJoint === null ||
    eventToJoint === undefined ||
    eventToJoint.id === "erreur154"
  ) {
    return (
      <Layout>
        <div id="eventJointed">
          <section className="eventJointedSection1">
            Événement non trouvé
          </section>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div id="eventJointed">
        <section className="eventJointedSection1">
          <h1 className="eventJointedSection1Title">
            Bientôt l'anniversaire de {eventToJoint.prenom} !
          </h1>
          <div className="eventJointedSection1-1">
            <div className="eventJointedSection1Titles">
              <h1>
                L'anniversaire de {eventToJoint.prenom} arrive à grand pas.{" "}
                <br />
                N'oublies pas que nous nous retrouverons le {
                  eventToJoint.date
                }{" "}
                à {eventToJoint.heure_de_debut} ici : <br />
                <br /> <br /> {eventToJoint.lieu} <br />
                <br />
                <br />
              </h1>
              <h1>
                {eventToJoint.prenom} fête ses {eventToJoint.age} ans et
                souhaite partager ce jour avec l'association {assoChoose.nom}.{" "}
                <br />
                Pour ceci on a créé 2 cagnottes, une pour lui acheter un cadeau
                et une pour faire un don à {assoChoose.nom}
              </h1>
              <h1>Voici la liste de cadeaux de {eventToJoint.prenom}</h1>
              {listCadeau.map((cadeau) => {
                return (
                  <div key={cadeau.id} className="cadeauDiv">
                    <p>{cadeau.titre}</p>
                    <a href={cadeau.url_site}>+info</a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="eventJointedSection2">
          <form className="form" onSubmit={addCagnottes}>
            <p>Combien souhaites tu apporter ?</p>
            <div className="divCagnottes">
              <div>
                <label className="label">
                  Cagnotte pour {assoChoose.nom}
                  <div className="labelDiv">
                    <input
                      className="inputForm"
                      type="number"
                      name="cagnotte_don_asso"
                      onChange={handleChange}
                      maxLength="6"
                    />
                    <p>€</p>
                  </div>
                </label>
              </div>
              <div>
                <label className="label">
                  Cagnotte pour {eventToJoint.prenom}
                  <div className="labelDiv">
                    <input
                      className="inputForm"
                      type="number"
                      name="cagnotte_somme_cadeau"
                      onChange={handleChange}
                      maxLength="6"
                    />
                    <p>€</p>
                  </div>
                </label>
              </div>
            </div>
            <input type="submit" value="Valider" className="buttonStyle" />
            {/* {errorLogin ? (
          <span className="errorLogin">
          Opps ! il y a un problème avec votre compte
          </span>
        ) : null} */}
          </form>
        </section>
      </div>
    </Layout>
  );
}

export default EventJointed;
