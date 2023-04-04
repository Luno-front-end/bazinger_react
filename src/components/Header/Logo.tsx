import React from "react";

import imgLogoPng from "../../img/logo_signa.png";
import imgLogoWebp from "../../img/logo_signa.webp";

export const Logo = () => {
  return (
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
  );
};
