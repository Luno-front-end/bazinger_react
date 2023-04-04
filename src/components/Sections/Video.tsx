import React, {
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import svgSpryte from "../../img/spryte.svg";
import promoVideo from "../../media/promo_video.mp4";
import { Alert } from "../Alert";
import { Btn } from "../Btn";
import { usePlayVideo } from "../hook/usePlayVideo";

interface VideoProps {
  size: boolean;
  setSize: Dispatch<SetStateAction<boolean>>;
  videoEl: MutableRefObject<any>;
}

export const Video: FC<VideoProps> = ({ size, setSize, videoEl }) => {
  const [onAlert, setOnAlert] = useState<boolean>(false);

  const wrapperVideo = useRef<HTMLDivElement>(null);
  const infoBox = useRef<HTMLDivElement>(null);

  const { playVideo } = usePlayVideo();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    playVideo(
      videoEl,
      wrapperVideo,
      infoBox,
      size,
      setSize,
      setOnAlert,
      onAlert
    );
  };

  return (
    <>
      <section id="video" className="video">
        <div className="wrapper-video" ref={wrapperVideo}>
          <video
            autoPlay
            muted
            loop
            id="myVideo"
            className="promo_video"
            ref={videoEl}
          >
            <source src={promoVideo} type="video/mp4" />
          </video>

          {onAlert && (
            <Alert>
              <strong>Double click to open the video in full screen</strong>
            </Alert>
          )}

          <div className="container position" ref={infoBox}>
            <Btn className="btn-play" handleClick={(e) => handleClick(e)}>
              <svg className="play-icon">
                <use href={`${svgSpryte}#play_icon`}></use>
              </svg>
            </Btn>
            <h2 className="header-video">
              Watch the best Technology in
              <span className="subHeader-video">Action</span>
            </h2>
            <p className="text-video">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
              nunc vitae tellus luctus ullamcorper. Nam porttitor ullamcorper
              felis at convallis. Aenean ornare vestibulum nisi fringilla
              lacinia. Nullam pulvinar sollicitudin velit id laoreet. Quisque
              non rhoncus sem.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
