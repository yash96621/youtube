import React, { useState } from "react";
import BellVideo from "./BellVideo";

function BellSuggestion() {
  return (
    <div>
      <div className="  bg-slate-100 max-sm:right-2 scrollbar-hide top-16 right-12 max-sm:w-[97%]  w-[550px] max-lg:w-[460px]  h-[70%] overflow-y-scroll  rounded-b-2xl rounded-l-2xl fixed">
        <div className="py-3 space-y-1 ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item) => (
            <BellVideo key={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BellSuggestion;
