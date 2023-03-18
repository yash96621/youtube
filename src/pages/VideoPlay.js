import React, { useState, useEffect } from "react";
import Comments from "../components/Comments";
import Info from "../components/Info";
import VideoTheme from "../components/VideoTheme";
import ReactPlayer from "react-player/youtube";
import { useDispatch } from "react-redux";
import { hide, vid } from "../state/slices/slice";

function VideoPlay() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hide(false));
    dispatch(vid(false));
  }, []);

  const [side, setside] = useState(true);
  return (
    <div className="bg-black min-h-screen w-screen ">
      <div className=" grid grid-flow-row xl:grid-flow-col max-xl:grid-flow-col max-lg:grid-flow-row overflow-x-scroll ">
        <div className=" lg:p-3 flex flex-col gap-y-7 w-[100%]  bg-slate-900  ">
          <div className="  h-[70%] md:h-[500px] max-sm:w-screen max-sm:h-[250px]">
            <ReactPlayer
              width="100%"
              height="100%"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              className=" object-fill   bg-slate-800  "
            ></ReactPlayer>
          </div>
          <Info />
          <Comments />
        </div>
        <div className=" min-w-max flex  flex-col gap-y-3 justify-items-center  h-screen overflow-y-scroll scrollbar-hide">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <VideoTheme side={side} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoPlay;
