import React, { useState } from "react";
import "./sliderAssociations.css";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import Slide from "./Slide";

function SliderAssociations({ dataAsso }) {
  const [current, setCurrent] = useState(0);
  const { length } = dataAsso;

  const handleNextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const handlePrevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(dataAsso) || dataAsso.length <= 0) {
    return null;
  }

  return (
    <section id="slider">
      <MdOutlineArrowBackIos
        className="icons icon-left"
        onClick={handlePrevSlide}
      />
      <MdOutlineArrowForwardIos className="icons" onClick={handleNextSlide} />
      {dataAsso.map((slide, index) => {
        return (
          <Slide
            key={slide.index}
            props={slide}
            index={index}
            current={current}
          />
        );
      })}
    </section>
  );
}

export default SliderAssociations;
