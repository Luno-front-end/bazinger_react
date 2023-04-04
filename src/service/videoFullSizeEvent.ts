import React from "react";

export const onFullScreenVideo = (videoEl?: React.RefObject<any>) => {
  videoEl!.current!.webkitEnterFullscreen();
  videoEl!.current!.play();
};
