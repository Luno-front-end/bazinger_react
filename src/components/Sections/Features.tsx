import React from "react";

import svgSpryte from "../../img/spryte.svg";

export const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div>
          <h2 className="header-features">summarise the features</h2>
          <p className="text-features">
            summarise what your product is all about
          </p>
        </div>
        <ul className="list-features">
          <li className="item-features">
            <div className="wrapper-icon">
              <svg className="layers-icon">
                <use href={`${svgSpryte}#layers_icon`}></use>
              </svg>
            </div>
            <h3 className="header-card-features">Attractive Layout</h3>
            <p className="text-card-features">
              Nunc cursus libero purus ac congue arcu cursus ut sed vitae
              pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis
              vitae pulvinar.
            </p>
          </li>
          <li className="item-features">
            <div className="wrapper-icon">
              <svg className="mobile-icon">
                <use href={`${svgSpryte}#mobile_icon`}></use>
              </svg>
            </div>
            <h3 className="header-card-features">Fresh Design</h3>
            <p className="text-card-features">
              Nunc cursus libero purus ac congue arcu cursus ut sed vitae
              pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis
              vitae pulvinar.
            </p>
          </li>
          <li className="item-features">
            <div className="wrapper-icon">
              <svg className="message-icon">
                <use href={`${svgSpryte}#message_icon`}></use>
              </svg>
            </div>
            <h3 className="header-card-features">multipurpose</h3>
            <p className="text-card-features">
              Nunc cursus libero purus ac congue arcu cursus ut sed vitae
              pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis
              vitae pulvinar.
            </p>
          </li>
          <li className="item-features">
            <div className="wrapper-icon">
              <svg className="comment-icon">
                <use href={`${svgSpryte}#comment_icon`}></use>
              </svg>
            </div>
            <h3 className="header-card-features">Easy to customize</h3>
            <p className="text-card-features">
              Nunc cursus libero purus ac congue arcu cursus ut sed vitae
              pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis
              vitae pulvinar.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
