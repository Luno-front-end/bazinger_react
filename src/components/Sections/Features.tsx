import React, { FC } from "react";

import { HeaderSection } from "../HeaderSection";

import { featuresList } from "../../data/dataComponents";

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
