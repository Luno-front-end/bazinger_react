import React, { FC } from "react";

import sOne from "../../img/slide_one.jpg";
import sTwo from "../../img/slide_two.jpg";
import sThree from "../../img/slide_three.jpg";

import { Carousel } from "react-carousel-minimal";

export const Slider: FC = () => {
  const data = [
    {
      image: sOne,
    },
    {
      image: sTwo,
    },
    {
      image: sThree,
    },
  ];

  const captionStyle = {
    display: "none",
  };

  return (
    <div>
      <div id="download">
        <Carousel
          data={data}
          time={4000}
          width="100%"
          captionStyle={captionStyle}
          slideNumber={false}
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={false}
          thumbnailWidth="100px"
          heigh="100%"
          className="true-slider"
        />
      </div>
    </div>
  );
};
