import React from "react";
import VideoTheme from "../Main/VideoTheme";

function ModePage() {
  return (
    <div className=" min-w-screen lg:pl-20 md:pt-6 min-h-screen">
      <div className="flex lg:flex-row flex-col  lg:space-x-5 divide-red-500">
        <div className=" lg:w-[33%] flex  lg:min-w-[500px] max-lg:w-screen lg:flex-col   max-lg:justify-center      lg:h-screen  rounded-2xl bg-gradient-to-b from-indigo-500">
          <div className="h-96 flex flex-wrap gap-5 place-content-center overflow-hidden">
            <div className="lg:w-[90%]  max-lg:w-96 h-60  shadow-2xl  bg-slate-700 rounded-2xl"></div>
            <div className="">
              <p className=" text-2xl text-white">Liked Video</p>
              <p className=" text-lg text-slate-400">9 videos</p>
            </div>
          </div>
        </div>
        <div className="   flex p-2   flex-col gap-y-3   min-h-screen scrollbar-hide">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <VideoTheme key={item} side={true} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModePage;
