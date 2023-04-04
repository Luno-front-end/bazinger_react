import React, { Dispatch, RefObject, SetStateAction } from "react";

export const usePlayVideo = () => {
  const playVideo = (
    videoEl: RefObject<HTMLVideoElement>,
    wrapperVideo: RefObject<HTMLDivElement>,
    infoBox: RefObject<HTMLDivElement>,
    size: boolean,
    setSize: Dispatch<SetStateAction<boolean>>,
    setOnAlert: Dispatch<SetStateAction<boolean>>,
    onAlert: boolean
  ) => {
    videoEl.current!.muted = false;
    videoEl.current!.controls = true;
    videoEl.current!.classList.add("disabled-opacity");

    wrapperVideo.current!.classList.add("active-video");
    infoBox.current!.classList.add("info-box-disabled");

    if (window.outerWidth < 1279) setSize(!size);

    if (window.outerWidth > 1279) {
      setOnAlert(!onAlert);

      setTimeout(() => {
        console.log("first");
        setOnAlert(false);
      }, 4000);
    }
  };
  return { playVideo };
};
