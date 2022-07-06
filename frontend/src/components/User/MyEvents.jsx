/* eslint-disable react/no-array-index-key */
import React from "react";
import "./user.css";

function MyEvents({ hundleOpenMyEvents }) {
  const fakeDateEvents = [
    { date: "2022-7-5", organisateur: "Joan", status: "" },
    { date: "2022-7-5", organisateur: "Alex", status: "" },
    { date: "2022-7-5", organisateur: "Ana", status: "" },
    { date: "2022-7-5", organisateur: "Loaja", status: "" },
    { date: "2022-7-5", organisateur: "Joan", status: "" },
    { date: "2022-7-5", organisateur: "Alex", status: "" },
    { date: "2022-7-5", organisateur: "Ana", status: "" },
    { date: "2022-7-4", organisateur: "Loaja", status: "" },
    { date: "2022-7-5", organisateur: "Joan", status: "" },
    { date: "2022-7-5", organisateur: "Alex", status: "" },
    { date: "2022-7-5", organisateur: "Ana", status: "" },
    { date: "2022-7-5", organisateur: "Loaja", status: "" },
    { date: "2022-7-5", organisateur: "Joan", status: "" },
    { date: "2022-7-5", organisateur: "Alex", status: "" },
    { date: "2022-7-5", organisateur: "Ana", status: "" },
    { date: "2022-7-5", organisateur: "Loaja", status: "" },
  ];
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

  return (
    <div className="formContainer" id="MyEvents">
      <button
        type="button"
        className="exitFormContainer"
        onClick={hundleOpenMyEvents}
      >
        X
      </button>
      <section className="eventSection1">
        <h1 className="eventSection1Title">
          Nouveau sur <span className="styleLogo"> Giveday </span>?
        </h1>
        <div className="eventSection1Titles">
          <h1>Date</h1>
          <h1>Organisateur</h1>
          <h1>Status</h1>
        </div>
        {fakeDateEvents.map((OneEvent, index) => (
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
      <section className="eventSection2" />
    </div>
  );
}

export default MyEvents;
