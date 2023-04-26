import React from "react";

function BellVideo() {
  return (
    <div className="flex space-x-2 py-3   hover:bg-sky-500 hover:shadow-2xl overflow-hidden justify-around px-2">
      <div className=" w-16 h-16 max-sm:w-10 max-sm:h-10 rounded-full bg-slate-800"></div>
      <div>
        <p className="text-lg">Demon Slayer season 3 ep 3</p>
        <p className="text-sm">description of video</p>
      </div>
      <div className=" w-24  h-16 max-sm:w-16 max-sm:h-10 rounded-lg bg-slate-900 "></div>
    </div>
  );
}

export default BellVideo;
