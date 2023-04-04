import React, { FC } from "react";

import svgSpryte from "../../img/spryte.svg";
import { HeaderSection } from "../HeaderSection";

const featuresList = [
  {
    img: `${svgSpryte}#layers_icon`,
    header: "Attractive Layout",
    text: "Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.",
  },
  {
    img: `${svgSpryte}#mobile_icon`,
    header: "Fresh Design",
    text: "Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.",
  },
  {
    img: `${svgSpryte}#message_icon`,
    header: "multipurpose",
    text: "Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.",
  },
  {
    img: `${svgSpryte}#comment_icon`,
    header: "Easy to customize",
    text: "Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.",
  },
];

export const Features: FC = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <HeaderSection
          textH="summarise the features"
          textP="summarise what your product is all about"
        />
        <ul className="list-features">
          {featuresList.map((item, i) => (
            <li className="item-features" key={i}>
              <div className="wrapper-icon">
                <svg className="layers-icon">
                  <use href={item.img}></use>
                </svg>
              </div>
              <h3 className="header-card-features">{item.header}</h3>
              <p className="text-card-features">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
