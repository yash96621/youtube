import React from "react";
import { BiLike } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";

function Prewmode() {
  return (
    <div>
      <div className="flex flex-wrap h-fit w-screen justify-center">
        <div className="group block h-48 w-80 rounded-2xl m-4 max-sm:w-full text-white  bg-slate-600">
          <div className=" relative top-[43%] left-[45%] group-hover:top-[40%] group-hover:left-[44%] duration-200  ">
            <div className="text-2xl flex space-x-2 ">
              <BiLike className="text-4xl group-hover:text-5xl duration-500  -mb-4" />
            </div>
          </div>
        </div>
        <div className="group block h-48 w-80 max-sm:w-full m-4 rounded-2xl text-white  bg-slate-600">
          <div className=" relative top-[43%] left-[45%]  group-hover:top-[40%] group-hover:left-[44%] duration-200  ">
            <div className="text-2xl flex space-x-2 ">
              <BiTimeFive className="text-4xl group-hover:text-5xl duration-500  -mb-4" />
            </div>
          </div>
        </div>
        <div className="group block h-48 w-80 rounded-2xl m-4 max-sm:w-full text-white  bg-slate-600">
          <div className=" relative top-[43%] left-[45%]   group-hover:top-[40%] group-hover:left-[44%] duration-200 ">
            <div className="text-2xl flex space-x-2 ">
              <FaHistory className="text-4xl group-hover:text-5xl duration-500  -mb-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prewmode;
