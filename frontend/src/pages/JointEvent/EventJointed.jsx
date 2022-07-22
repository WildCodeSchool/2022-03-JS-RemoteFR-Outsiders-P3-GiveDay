/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext, useEffect } from "react";
import "./jointEvent.css";
import api from "@services/api";
import { useNavigate } from "react-router-dom";
import Layout from "@components/Layout";
import CurrentPagesContext from "../../PagesContexts";

function EventJointed() {
  const { eventToJoint } = useContext(CurrentPagesContext);
  const [cagnottes, setCagnottes] = useState({ id: eventToJoint.id });
  const [assoChoose, setAssoChoose] = useState({});
  const today = new Date();
  const TodayDate = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;
  const setStatusEvent = (item) => {
    if (item >= TodayDate) {
      return "Terminé";
    }
    if (item < TodayDate) {
      return "En cours";
    }
    return null;
  };
  const handleChange = (e) => {
    setCagnottes({
      ...cagnottes,
      [e.target.name]: parseInt(e.target.value, 10),
    });
  };
  useEffect(() => {
    api
      .get(`/api/asso/${eventToJoint.asso_id}`, { withCredentials: true })
      .then((res) => setAssoChoose(res.data[0]));
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

  console.warn(cagnottes);
  console.warn(eventToJoint);
  return (
    <Layout>
      <div id="eventJointed">
        <section className="eventJointedSection1">
          <h1 className="eventJointedSection1Title">Mes événements</h1>
          <div className="eventJointedSection1Titles">
            <h1>Date</h1>
            <h1>Organisateur</h1>
            <h1>Cagnotte cadeau</h1>
            <h1>Cagnotte Asso</h1>
            <h1>Code</h1>
            <h1>Status</h1>
          </div>
          <div key={eventToJoint.id} className="eventJointedSection1Results">
            <h1>{eventToJoint.date}</h1>
            <h1>{eventToJoint.prenom}</h1>
            <h1>{eventToJoint.cagnotte_somme_cadeau}</h1>
            <h1>{eventToJoint.cagnotte_don_asso}</h1>
            <h1>{eventToJoint.code}</h1>
            <h1
              className={
                setStatusEvent(eventToJoint.date) === "En cours"
                  ? "eventJointedStatusEnCours"
                  : "eventJointedStatusTermine"
              }
            >
              {setStatusEvent(eventToJoint.date)}
            </h1>
          </div>
        </section>
        <section className="eventJointedSection1">
          <form className="form" onSubmit={addCagnottes}>
            <label>
              Cangotte pour {assoChoose.nom}
              <input
                className="inputForm"
                type="number"
                name="cagnotte_don_asso"
                onChange={handleChange}
                maxLength="6"
              />
            </label>
            <label>
              Cangotte pour {eventToJoint.prenom}
              <input
                className="inputForm"
                type="number"
                name="cagnotte_somme_cadeau"
                onChange={handleChange}
                maxLength="6"
              />
            </label>
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
