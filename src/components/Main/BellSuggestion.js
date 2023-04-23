import React, { useState } from "react";

function BellSuggestion() {
  const [isload, setisload] = useState(false);
  return (
    <div>
      <div className="  max-sm:right-2  top-16 right-12 max-sm:w-[97%]  w-[400px] max-lg:w-[460px]  h-[70%] overflow-y-scroll bg-slate-100  rounded-b-2xl rounded-l-2xl fixed">
        <div className="justify-center py-3">
          <div className="text-lg leading-5 font-light hover:bg-slate-300 p-1 rounded-lg">
            <div className="inline-flex">
              <div className="ml-3 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BellSuggestion;
