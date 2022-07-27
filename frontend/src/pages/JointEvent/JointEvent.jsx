/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from "react";
import api from "@services/api";
import "./jointEvent.css";
import { useNavigate } from "react-router-dom";
import Layout from "@components/Layout";
import CurrentPagesContext from "../../PagesContexts";

function JointEvent() {
  const { setEventToJoint } = useContext(CurrentPagesContext);
  // console.warn(eventToJoint);
  const [eventCode, setEventCode] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setEventCode({
      ...eventCode,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const goToEventJointed = (e) => {
    e.preventDefault();
    api
      .get(`/api/events/code/${eventCode.eventCode}`, { withCredentials: true })
      .then((res) => {
        setEventToJoint(res.data[0]);

        localStorage.setItem("eventToJointLocal", JSON.stringify(res.data[0]));
      })
      .then(
        setTimeout(() => {
          navigate("/EventJointed");
        }, 1000)
      );
  };
  return (
    <Layout>
      <div id="jointEventContainer">
        <form className="form" onSubmit={goToEventJointed}>
          <label>
            Pour joindre un événement veuillez indiquer le code
            <input
              className="inputForm jointEventInput"
              type="text"
              name="eventCode"
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <input
            type="submit"
            value="Joindre l'événement"
            className="buttonStyle jointEventButton"
          />
        </form>
      </div>
    </Layout>
  );
}

export default JointEvent;
