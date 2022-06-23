import React from "react";
import "./view.css";
import zebre from "@assets/images/zebre.jpg";

function View() {
  return (
    <div className="atelierViewContainer">
      <img className="atelierViewtest" src={zebre} alt="zebre" />
    </div>
  );
}

export default View;
