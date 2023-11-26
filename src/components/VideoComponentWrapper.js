import React from 'react';
import ActionItems from "./ActionItems";
import VideoPlayer from "./VideoPlayer";

const VideoComponentWrapper = () => {
  return (
    <div className={"flex mt-8 gap-5 mb-8"}>
      <ActionItems/>
      <VideoPlayer/>
    </div>
  );
};

export default VideoComponentWrapper;
