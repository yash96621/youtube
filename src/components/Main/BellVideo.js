import React from "react";

function BellVideo() {
  return (
    <div className="flex space-x-2 overflow-hidden justify-between px-3">
      <div className=" w-16 h-16 rounded-full bg-slate-800"></div>
      <div>
        <p className="text-lg">Demon Slayer season 3 ep 3</p>
        <p className="text-sm">description of video</p>
      </div>
      <div className=" w-24 h-16 rounded-lg bg-slate-900"></div>
    </div>
  );
}

export default BellVideo;
