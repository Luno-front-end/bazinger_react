import React, { FC } from "react";

import svgSpryte from "../../img/spryte.svg";

export const Hiro: FC = () => {
  return (
    <div className="container hiro">
      <div className="wrapper-hiro">
        <h1 className="header-hiro">
          Simple, Beautiful <span className="subHeader-hiro">and Amazing</span>
        </h1>
        <p className="text-hiro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
          nunc vitae tellus luctus ullamcorper. Nam porttitor ullamcorper felis
          at convallis. Aenean ornare vestibulum nisi fringilla lacinia. Nullam
          pulvinar sollicitudin velit id laoreet. Quisque non rhoncus sem.
        </p>
        <ul className="list-btn-hiro">
          <li className="item-btn-hiro">
            <button type="submit" className="btn-hiro">
              Download
            </button>
          </li>
          <li className="item-btn-hiro">
            <button type="submit" className="btn-hiro">
              Learn more
            </button>
          </li>
        </ul>
        <div className="wrapper-apps">
          <p className="apps-available-hiro">Available on :</p>
          <ul className="apps-list-hiro">
            <li className="apps-item-hiro">
              <a href="#" className="apps-link-hiro">
                <svg className="apple-icon">
                  <use
                    className="apple-icon"
                    href={`${svgSpryte}#apple_icon`}
                  ></use>
                </svg>
              </a>
            </li>
            <li className="apps-item-hiro">
              <a href="#" className="apps-link-hiro">
                <svg className="android-icon">
                  <use href={`${svgSpryte}#android_icon`}></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
