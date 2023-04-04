import React, { FC } from "react";

import imgLogoPng from "../../img/logo_signa.png";
import imgLogoWebp from "../../img/logo_signa.webp";

export const Navigation: FC = () => {
  return (
    <nav className="nav-container">
      <div className="container wrapper-nav">
        <div className="logo-container">
          <a href="#" className="logo-link">
            <div className="logo-box">
              <picture>
                <source
                  srcSet={imgLogoWebp}
                  type="image/webp"
                  width="27"
                  height="11"
                />

                <source
                  srcSet={imgLogoPng}
                  type="image/jpeg"
                  width="27"
                  height="11"
                />
                <img
                  src={imgLogoPng}
                  alt="signal logo"
                  width="27"
                  height="11"
                  className="signal-img-logo"
                />
              </picture>

              <span className="logo-text">
                ba<span className="logo-subText">zinger</span>
              </span>
            </div>
          </a>
        </div>
        <div className="list-container">
          <ul className="list-nav">
            <li className="item-nav">
              <a href="#home" className="link-nav active">
                Home
              </a>
            </li>
            <li className="item-nav">
              <a href="#features" className="link-nav">
                Features
              </a>
            </li>
            <li className="item-nav">
              <a href="#gallery" className="link-nav">
                Gallery
              </a>
            </li>
            <li className="item-nav">
              <a href="#video" className="link-nav">
                Video
              </a>
            </li>
            <li className="item-nav">
              <a href="#" className="link-nav">
                Price
              </a>
            </li>
            <li className="item-nav">
              <a href="#" className="link-nav">
                Testimonials
              </a>
            </li>
            <li className="item-nav">
              <a href="#home" className="link-nav">
                Download
              </a>
            </li>
            <li className="item-nav">
              <a href="#contact" className="link-nav">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button type="button" className="wrapper-burger">
          <span className="burger"></span>
        </button>
      </div>
    </nav>
  );
};
