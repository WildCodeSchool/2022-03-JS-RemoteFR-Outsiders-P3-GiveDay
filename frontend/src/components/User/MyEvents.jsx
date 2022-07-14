/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState, useContext } from "react";
import api from "@services/api";
import "./user.css";
import ViewUser from "./ViewUser";
import CurrentPagesContext from "../../PagesContexts";

function MyEvents({ hundleOpenMyEvents }) {
  const { accountConnected } = useContext(CurrentPagesContext);
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
  const [userEvents, setUserEvents] = useState([
    { date: "2022-7-5", organisateur: "Joan", status: "" },
    { date: "2022-7-8", organisateur: "Alex", status: "" },
    { date: "2022-7-5", organisateur: "Ana", status: "" },
    { date: "2022-7-5", organisateur: "Loaja", status: "" },
    { date: "2022-7-5", organisateur: "Joan", status: "" },
    { date: "2022-7-5", organisateur: "Alex", status: "" },
    { date: "2022-7-5", organisateur: "Ana", status: "" },
    { date: "2022-7-8", organisateur: "Loaja", status: "" },
    { date: "2022-7-5", organisateur: "Joan", status: "" },
    { date: "2022-7-5", organisateur: "Alex", status: "" },
    { date: "2022-7-5", organisateur: "Ana", status: "" },
    { date: "2022-7-5", organisateur: "Loaja", status: "" },
    { date: "2022-7-5", organisateur: "Joan", status: "" },
    { date: "2022-7-5", organisateur: "Alex", status: "" },
    { date: "2022-7-8", organisateur: "Ana", status: "" },
    { date: "2022-7-5", organisateur: "Loaja", status: "" },
  ]);
  useEffect(() => {
    api
      .get(`/api/users/${accountConnected.user.id}/events`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((data) => {
        if (data) {
          setUserEvents(data);
        }
      });
  }, []);

  return (
    <div className="formContainer" id="MyUser">
      <button
        type="button"
        className="exitFormContainer"
        onClick={hundleOpenMyEvents}
      >
        X
      </button>
      <section className="eventSection1">
        <h1 className="eventSection1Title">Mes événements</h1>
        <div className="eventSection1Titles">
          <h1>Date</h1>
          <h1>Organisateur</h1>
          <h1>Status</h1>
        </div>
        {userEvents.map((OneEvent, index) => (
          <div key={index} className="eventSection1Results">
            <h1>{OneEvent.date}</h1>
            <h1>{OneEvent.organisateur}</h1>
            <h1
              className={
                setStatusEvent(OneEvent.date) === "En cours"
                  ? "eventStatusEnCours"
                  : "eventStatusTerminé"
              }
            >
              {setStatusEvent(OneEvent.date)}
            </h1>
          </div>
        ))}
      </section>
      <section className="eventSection2">
        <ViewUser />
      </section>
    </div>
  );
}

export default MyEvents;
