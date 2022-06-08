import React from "react";

function Slide({ props, current, index }) {
  return (
    <div className={index === current ? "slide active" : "slide"} key={index}>
      {index === current && (
        <div id="carousel">
          <img src={props.photo} alt="asso" className="photo" />
          <div className="content">
            <img src={props.logo} alt="logo" className="logoAsso" />
            <p>{props.description}</p>
          </div>
          <a href={props.url} target="_blank" rel="noreferrer">
            Visiter le site {props.nom}{" "}
          </a>{" "}
        </div>
      )}
    </div>
  );
}

export default Slide;
