import React, { FC } from "react";
import { Header } from "./components/Header/Header";
import { Features } from "./components/Sections/Features";

export const App: FC = () => {
  return (
    <>
      <Header />
      <Features />
    </>
  );
};
