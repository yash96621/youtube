import React from "react";

function Topview() {
  return (
    <>
      <div className="flex w-screen   md:justify-center  overflow-x-scroll   scrollbar-hide">
        <div className="flex max-md:w-screen max-w-[400px] gap-x-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(() => (
            <div>
              <div className=" rounded-full h-16 w-16 bg-slate-100"></div>
              <p className="  text-center text-base text-white select-none">name</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Topview;
