import React, { useState } from "react";

function Topview() {
  const [showall, setshowall] = useState(false);
  return (
    <>
      <div className="flex w-screen   md:justify-center  overflow-x-scroll   scrollbar-hide">
        <div
          className={`flex ${
            showall ? "flex-col max-md:w-screen w-[900px] gap-y-3 " : ""
          } max-md:w-screen max-w-[900px] duration-1000 border-2 border-gray-700  max-sm:border-black  overflow-x-scroll scrollbar-hide p-2 rounded-2xl gap-x-3`}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(() => (
            <div className={`${showall ? "flex justify-between " : ""}`}>
              <div className={`${showall ? "flex gap-3  " : ""}`}>
                <div className=" rounded-full h-16 w-16 bg-slate-100"></div>
                <p
                  className={` ${
                    showall ? "flex items-center" : ""
                  } text-center text-base text-white select-none`}
                >
                  name
                </p>
              </div>
              <button className={`${showall ? " w-max text-blue-500" : "hidden"} `}>
                Unsubscribe
              </button>
            </div>
          ))}
        </div>
      </div>
      <button
        className=" text-blue-500 text-center "
        onClick={() => {
          setshowall(!showall);
        }}
      >
        Show all
      </button>
    </>
  );
}

export default Topview;
