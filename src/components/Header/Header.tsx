import React, { FC } from "react";

import { Slider } from "./Slider";

import { Hiro } from "./Hiro";
import { Navigation } from "./Navigation";

export const Header: FC = () => {
  return (
    <header className="header" id="home">
      <Navigation />
      <Slider />
      <Hiro />
    </header>
  );
};
