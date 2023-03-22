import React from "react";
import { BiTimeFive } from "react-icons/bi";
import VideoTheme from "../Main/VideoTheme";

function WatchLater() {
  return (
    <div>
      <div className={` space-y-3  py-6 px-4 sm:px-6 lg:px-8`}>
        <div className="text-2xl inline-flex space-x-5 font-medium text-white  ">
          <BiTimeFive />
          <div>Watch Later</div>
        </div>
        <div className="w-screen  flex scrollbar-hide  gap-3 overflow-x-scroll">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <VideoTheme />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WatchLater;
