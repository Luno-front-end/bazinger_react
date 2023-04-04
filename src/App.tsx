import React, { FC, useRef, useState } from "react";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";
import { Contact } from "./components/Sections/Contact";
import { Features } from "./components/Sections/Features";
import { Gallery } from "./components/Sections/Gallery";
import { Video } from "./components/Sections/Video";

export const App: FC = () => {
  const [size, setSize] = useState<boolean>(false);

  const videoEl = useRef<any>(null);

  return (
    <>
      <Header />
      <Features />
      <Gallery size={size} setSize={setSize} videoEl={videoEl} />
      <Video size={size} setSize={setSize} videoEl={videoEl} />
      <Contact />
      <Footer />
    </>
  );
};
