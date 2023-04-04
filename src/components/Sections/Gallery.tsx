import React, {
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  useEffect,
} from "react";

import { onFullScreenVideo } from "../../service/videoFullSizeEvent";

import imgOneServiceWebp from "../../img/service.webp";
import imgOneServiceJpeg from "../../img/service.jpeg";

import imgTwoServiceWebp from "../../img/service_two.webp";
import imgTwoServiceJpeg from "../../img/service_two.jpeg";

import imgThreeServiceWebp from "../../img/service_three.webp";
import imgThreeServiceJpeg from "../../img/service_three.jpeg";

import imgFourServiceWebp from "../../img/phone_help.webp";
import imgFourServiceJpeg from "../../img/phone_help.jpeg";
import { HeaderSection } from "../HeaderSection";
import { Btn } from "../Btn";

const galleryList = [
  {
    imgW: imgOneServiceWebp,
    imgJ: imgOneServiceJpeg,
    textImg: "Screen shot #1",
    alt: "service img one",
    text: "Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.",
  },
  {
    imgW: imgTwoServiceWebp,
    imgJ: imgTwoServiceJpeg,
    textImg: "Screen shot #2",
    alt: "service img two",
    text: "Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.",
  },
  {
    imgW: imgThreeServiceWebp,
    imgJ: imgThreeServiceJpeg,
    textImg: "Screen shot #3",
    alt: "service img three",
    text: "Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.",
  },
  {
    imgW: imgFourServiceWebp,
    imgJ: imgFourServiceJpeg,
    textImg: "Screen shot #4",
    alt: "service img four",
    text: "Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.",
  },
];

interface GalleryProps {
  size: boolean;
  setSize: Dispatch<SetStateAction<boolean>>;
  videoEl: MutableRefObject<any>;
}

export const Gallery: FC<GalleryProps> = ({ size, setSize, videoEl }) => {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <HeaderSection
          textH="show the gallery"
          textP="summarise what your product is all about"
        />
        <ul className="list-gallery">
          {galleryList.map((item, i) => (
            <li className="item-gallery" key={i}>
              <div className="wrapper-screenShot">
                <picture>
                  <source
                    srcSet={item.imgW}
                    type="image/webp"
                    width="270"
                    height="200"
                  />

                  <source
                    srcSet={item.imgJ}
                    type="image/jpeg"
                    width="270"
                    height="200"
                  />

                  <img
                    src={item.imgJ}
                    alt={item.alt}
                    width="270"
                    height="200"
                    className="img-screenShot"
                  />
                </picture>

                <span className="plus-simbol">+</span>
                <div className="wrapper-text-screnShot">
                  <p className="screenShot-text">{item.textImg}</p>
                </div>
              </div>
              <div>
                <p className="text-card-gallery">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {size && (
        <Btn
          className="fullscreen"
          handleClick={() => onFullScreenVideo(videoEl)}
        >
          Expand the video to full screen
        </Btn>
      )}
    </section>
  );
};
