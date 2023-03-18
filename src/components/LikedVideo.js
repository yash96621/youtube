import React from "react";
import { BiLike } from "react-icons/bi";
import VideoTheme from "../components/VideoTheme";

function LikedVideo() {
  return (
    <div className={` space-y-3  py-6  lg:px-8`}>
      <div className="text-2xl inline-flex space-x-5 font-medium text-white  ">
        <BiLike />
        <div>Liked videos</div>
      </div>
      <div className="w-screen h-fit   flex scrollbar-hide  gap-3 overflow-x-scroll">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <VideoTheme />
        ))}
      </div>
    </div>
  );
}

export default LikedVideo;
