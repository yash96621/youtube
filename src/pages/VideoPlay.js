import React, { useState, useEffect } from "react";
import Comments from "../components/PlayerPage/Comments";
import Info from "../components/PlayerPage/Info";
import VideoTheme from "../components/Main/VideoTheme";
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
    <div className="bg-black min-h-screen w-screen  ">
      <div className=" grid grid-flow-row xl:grid-flow-col max-xl:grid-flow-col max-lg:grid-flow-row overflow-x-scroll ">
        <div className=" lg:p-3 flex flex-col md:gap-y-7 h-fit md:bg-slate-900  ">
          <div className=" aspect-[16/9]">
            <ReactPlayer
              width="100%"
              height="100%"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              className="   md:bg-slate-800  "
            ></ReactPlayer>
          </div>
          <Info />
          <Comments />
        </div>
        <div className=" min-w-max flex p-2  flex-col gap-y-3 justify-items-center  h-screen scrollbar-hide">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <VideoTheme side={side} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoPlay;
