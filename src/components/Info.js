import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ThumbDownOffAltRoundedIcon from "@mui/icons-material/ThumbDownOffAltRounded";
import ThumbDownRoundedIcon from "@mui/icons-material/ThumbDownRounded";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import FileDownloadDoneRoundedIcon from "@mui/icons-material/FileDownloadDoneRounded";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Info() {
  return (
    <div>
      <div className=" bg-slate-800  lg:rounded-2xl ">
        <div className="text-white p-2 text-xl">Video Name</div>
        <div className="grid grid-flow-col max-sm:grid-flow-row">
          <div className="flex  items-center mt-2 space-x-2 ">
            <svg
              className="text-gray-700 w-14 h-14 dark:text-gray-700"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div className="flex flex-row space-x-10 overflow-hidden ">
              <div>
                <div className="inline-flex">
                  <div className=" text-white  rounded-2xl  dark:bg-gray-700"> Memehub</div>
                  <CheckCircleRoundedIcon
                    className="inline-flex relative items-center justify-center w-3 h-3 text-xs  text-white  rounded-full -top-0 -right-2 dark:border-gray-900"
                    sx={{ fontSize: 20 }}
                  ></CheckCircleRoundedIcon>
                </div>
                <div className=" text-slate-400 text-xs dark:bg-gray-700">{40} subscribers</div>
              </div>
              <button className=" bg-slate-100 rounded-full font-semibold p-2 hover:cursor-pointer hover:bg-slate-300">
                Subscribe
              </button>
            </div>
          </div>

          <div className=" flex justify-end max-md:justify-center ">
            <div className="flex place-items-center text-white space-x-1">
              <div className="inline-flex  rounded-full bg-slate-900 max-md:bg-transparent   ">
                <div className="flex flex-wrap justify-center  space-x-2 hover:cursor-pointer p-2 rounded-l-full max-md:bg-transparent   ">
                  <ThumbUpOutlinedIcon></ThumbUpOutlinedIcon>
                  <div className="font-semibold max-md:font-medium max-md:pt-2">{4388}K</div>
                </div>

                <div className="flex flex-wrap justify-center p-2 px-3 rounded-r-full    ">
                  <ThumbDownOffAltRoundedIcon></ThumbDownOffAltRoundedIcon>
                </div>
              </div>

              <div className=" bg-slate-900 max-md:bg-transparent gap-1 p-2 flex flex-wrap justify-center rounded-full">
                <ReplySharpIcon
                  className=" scale-x-[-1] max"
                  sx={{ fontSize: 25 }}
                ></ReplySharpIcon>
                <p className="font-semibold my-auto max-md:font-medium ">Share</p>
              </div>
              <div>
                <div className=" bg-slate-900 max-md:bg-transparent justify-center flex-wrap gap-1 p-1 px-3 flex rounded-full">
                  <FileDownloadOutlinedIcon
                    className=" scale-x-[-1]"
                    sx={{ fontSize: 30 }}
                  ></FileDownloadOutlinedIcon>
                  <p className="font-semibold max-md:font-medium my-auto">Download</p>
                </div>
              </div>
              <div>
                <div className=" bg-slate-900  p-1 inline-flex rounded-full">
                  <MoreHorizIcon className=" scale-x-[-1]" sx={{ fontSize: 30 }}></MoreHorizIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
