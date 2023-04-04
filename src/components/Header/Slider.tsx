import React, { FC } from "react";

import svgSpryte from "../../img/spryte.svg";

export const Slider: FC = () => {
  return (
    <div className="slider-wrapper">
      <button className="slide-arrow" id="slide-arrow-prev">
        <svg className="arrow-icon-prev">
          <use href={`${svgSpryte}#arrow`}></use>
        </svg>
      </button>
      <button className="slide-arrow" id="slide-arrow-next">
        <svg className="arrow-icon-next">
          <use href={`${svgSpryte}#arrow`}></use>
        </svg>
      </button>
      <ul className="slides-container" id="slides-container">
        <li className="slide"></li>
        <li className="slide"></li>
        <li className="slide"></li>
      </ul>
      <div className="wrapper-amount"></div>
    </div>
  );
};
