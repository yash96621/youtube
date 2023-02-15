import React, { useState } from "react";
// import ThanosGlove from "react-thanos-glove";
import MicIcon from "@mui/icons-material/Mic";
import { AnimatePresence, motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import VideoCallIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

function Navbar() {
  return (
    <>
      <div className="flex flex-wrap place-items-center">
        <div className="ml-9 bg-slate-800 rounded-full  ">
          <MenuIcon className="text-white mx-auto hover:cursor-pointer" sx={{ fontSize: 30 }} />
        </div>
        <div className="flex ml-9  place-items-center">
          <div className=" h-10 bg-white w-10 rounded-full"></div>

          <h1 className=" text-lg text-white font-bold pl-3 hover:cursor-pointer">Memehub</h1>
        </div>
        <div className=" flex flex-wrap mx-auto place-items-center space-x-3">
          <div className="flex flex-wrap">
            <input
              type="text"
              name="search"
              placeholder="search"
              className=" bg-black rounded-l-full text-white w-96"
            ></input>
            <div className="bg-slate-900 rounded-r-full p-1.5 px-3">
              <SearchIcon
                sx={{ fontSize: 30 }}
                className="text-white mx-auto hover:cursor-pointer  "
              />
            </div>
          </div>

          <div className="bg bg-slate-800 rounded-full p-1">
            <MicIcon sx={{ fontSize: 30 }} className="text-white cursor-pointer"></MicIcon>
          </div>
        </div>
        <div className="flex ml-10  place-items-center p-3 space-x-5">
          <VideoCallIcon className="text-white cursor-pointer" sx={{ fontSize: 35 }} />
          <div class="inline-flex relative w-fit">
            <div class="absolute inline-flex items-center justify-center w-5 h-5 text-xs  text-white bg-red-700 rounded-full -top-0 -right-1 dark:border-gray-900">
              20
            </div>

            <NotificationsNoneOutlinedIcon
              className="text-white cursor-pointer"
              sx={{ fontSize: 35 }}
            />
          </div>
          <div className=" h-10 bg-white w-10 rounded-full cursor-pointer"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
