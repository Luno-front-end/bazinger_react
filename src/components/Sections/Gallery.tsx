import React, {
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  useEffect,
} from "react";

import { onFullScreenVideo } from "../../service/videoFullSizeEvent";

import { galleryList } from "../../data/dataComponents";
import { HeaderSection } from "../HeaderSection";
import { Btn } from "../Btn";

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
