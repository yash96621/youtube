import React, { useState } from "react";

import MicIcon from "@mui/icons-material/Mic";

import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "../state/slices/slice";
import { HiMenu, HiOutlineSearch } from "react-icons/hi";
import { BsBell, BsYoutube } from "react-icons/bs";
import SearchSuggestion from "./SearchSuggestion";

function Navbar() {
  const [IsSearch, setIsSearch] = useState(false);
  const [search, setsearch] = useState("");
  const changes = (e) => {
    setsearch(e.target.value);
    if (e.target.value === "") {
      setIsSearch(false);
    } else {
      setIsSearch(true);
    }
  };
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.slice.side;
  });

  const slid = () => {
    if (data === true) {
      dispatch(hide(false));
    } else {
      dispatch(hide(true));
    }
  };

  return (
    <>
      <div className="inline-flex  place-items-center bg-black w-screen justify-between fixed ">
        <div className="inline-flex">
          <div className=" ml-7 hover:bg-slate-800 p-1 rounded-full  ">
            <HiMenu className="text-white hover:cursor-pointer text-2xl " onClick={slid} />
          </div>
          <div className="flex ml-9 max-sm:ml-4 select-none place-items-center">
            <BsYoutube className="text-4xl  text-red-600" />
            <h1 className=" text-2xl max-md:text-base max-md:font-medium text-white font-semibold pl-1 hover:cursor-pointer">
              Youtube
            </h1>
          </div>
        </div>
        <div className=" inline-flex mx-auto max-md:hidden">
          <div className="flex flex-col justify-center item-center">
            <input
              type="text"
              name="search"
              placeholder="search"
              value={search}
              onChange={changes}
              className=" bg-black rounded-l-full text-white w-[550px] max-lg:w-[300px] "
            ></input>
            {IsSearch ? <SearchSuggestion search={search} /> : ""}
          </div>
          <div className="bg-slate-900 rounded-r-full p-1.5 px-3">
            <SearchIcon
              sx={{ fontSize: 30 }}
              className="text-white mx-auto hover:cursor-pointer  "
            />
          </div>

          <div className="bg bg-slate-800 rounded-full ml-2  p-1.5">
            <MicIcon sx={{ fontSize: 30 }} className="text-white cursor-pointer"></MicIcon>
          </div>
        </div>
        <div className="inline-flex place-items-center py-3  space-x-5 max-sm:space-x-3  ">
          <div className=" -mr-1   lg:hidden xl:hidden 2xl:hidden md:hidden    ">
            <HiOutlineSearch
              onClick={changes}
              className="text-white  max-md:text-2xl text-5xl hover:cursor-pointer  "
            />
          </div>
          <div className=" relative ">
            <div className="absolute inline-flex items-center justify-center max-sm:w-4 max-sm:h-4 w-5 h-5 text-xs  text-white bg-red-700 rounded-full -top-0 -right-1 dark:border-gray-900">
              20
            </div>
            <BsBell
              className="text-white  max-sm:text-2xl text-3xl cursor-pointer"
              sx={{ fontSize: 35 }}
            />
          </div>
          <div className=" h-10 bg-white w-10 max-sm:h-8  max-sm:w-8 rounded-full cursor-pointer"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
