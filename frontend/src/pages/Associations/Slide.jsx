import React from "react";

function Slide({ props, current, index }) {
  return (
    <div className={index === current ? "slide active" : "slide"} key={index}>
      {index === current && (
        <div id="carousel">
          <img src={props.photo} alt="asso" className="photo" />
          <div className="content">
            <img src={props.logo} alt="logo" />
            <p>{props.description}</p>
            <a href={props.url}>Visiter le site {props.nom}</a>{" "}
          </div>
        </div>
      )}
    </div>
  );
}

export default Slide;
