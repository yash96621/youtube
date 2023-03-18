import React from "react";
import { FaHistory } from "react-icons/fa";
import VideoTheme from "../components/VideoTheme";

function HistoryVideo() {
  return (
    <div className={` space-y-3  py-6 px-4 sm:px-6 lg:px-8`}>
      <div className="text-2xl inline-flex space-x-5 font-medium text-white  ">
        <FaHistory />
        <div>History</div>
      </div>
      <div className="w-screen  flex scrollbar-hide  gap-3 overflow-x-scroll">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <VideoTheme />
        ))}
      </div>
    </div>
  );
}

export default HistoryVideo;
