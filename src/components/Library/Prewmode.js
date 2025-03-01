import React from "react";
import { BiLike } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";

function Prewmode() {
  return (
    <div>
      <div className="flex flex-wrap h-fit w-screen justify-center">
        <Link
          to="/modepage"
          className="group block h-48 w-80 max-sm:w-full m-4 rounded-2xl text-white  bg-slate-600"
        >
          <div className="text-2xl w-full min-h-full  duration-200 items-center justify-center  flex space-x-2 ">
            <BiLike className="text-4xl group-hover:text-5xl duration-500  -mb-4" />
          </div>
        </Link>
        <Link
          to="/modepage"
          className="group block h-48 w-80 max-sm:w-full m-4 rounded-2xl text-white  bg-slate-600"
        >
          <div className="text-2xl w-full min-h-full  duration-200 items-center justify-center  flex space-x-2 ">
            <BiTimeFive className="text-4xl group-hover:text-5xl duration-500  -mb-4" />
          </div>
        </Link>
        <Link
          to="/modepage"
          className="group block h-48 w-80 max-sm:w-full m-4 rounded-2xl text-white  bg-slate-600"
        >
          <div className="text-2xl w-full min-h-full  duration-200 items-center justify-center  flex space-x-2 ">
            <FaHistory className="text-3xl group-hover:text-5xl duration-500  -mb-4" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Prewmode;
