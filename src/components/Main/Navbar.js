import React, { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { hide, setsearchshow } from "../../state/slices/slice";
import { HiMenu, HiOutlineSearch } from "react-icons/hi";
import { BsBell, BsYoutube } from "react-icons/bs";
import SearchSuggestion from "./SearchSuggestion";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdMic } from "react-icons/io";
import BellSuggestion from "./BellSuggestion";
import { setloginshow, setdashboard } from "../../state/slices/data";
import DashSuggestion from "./DashSuggestion";
import { LoginWithGoogle } from "../../state/thunk/TubeThunk";
import NativSearch from "./NativSearch";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    if (sessionStorage.getItem("googleuser")) {
      const token = sessionStorage.getItem("googleuser");
      console.log(token);
      dispatch(LoginWithGoogle({ token }));
    }
  }, []);

  const [IsSearch, setIsSearch] = useState(false);

  const [bellicon, setbellicon] = useState(false);
  const [search, setsearch] = useState("");

  const changes = (e) => {
    setsearch(e.target.value);
    if (e.target.value === "") {
      setIsSearch(false);
    } else {
      setIsSearch(true);
      setbellicon(false);
      dispatch(setdashboard(false));
    }
  };
  const dispatch = useDispatch();
  const { side, searchshow } = useSelector((state) => {
    return state.slice;
  });
  const { isconnected, Googleuser, dashshow } = useSelector((state) => {
    return state.data;
  });

  const slid = () => {
    if (side === true) {
      dispatch(hide(false));
    } else {
      dispatch(hide(true));
    }
  };

  return (
    <>
      <div className="inline-flex  place-items-center bg-black w-screen justify-between fixed ">
        <div className="inline-flex">
          <div className=" ml-4 md:ml-5 hover:bg-slate-800 p-2 rounded-full  ">
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
          <div className="">{IsSearch ? <SearchSuggestion search={search} /> : ""}</div>
          <div className="flex flex-col justify-center item-center ">
            <input
              type="search"
              name="search"
              placeholder="search"
              value={search}
              onChange={changes}
              className=" bg-black rounded-l-full text-white w-[550px] max-lg:w-[300px] "
            ></input>
          </div>
          <div className="bg-slate-900 rounded-r-full p-1.5 px-3">
            <SearchIcon
              sx={{ fontSize: 30 }}
              className="text-white mx-auto hover:cursor-pointer  "
            />
          </div>

          <div className="bg bg-slate-800 rounded-full ml-2  p-2">
            <IoMdMic sx={{ fontSize: 30 }} className="text-white cursor-pointer text-2xl"></IoMdMic>
          </div>
        </div>

        <div className="inline-flex place-items-center py-3 mx-2 md:pr-5  space-x-5 max-sm:space-x-3  ">
          <div className=" -mr-1   md:hidden   ">
            <HiOutlineSearch
              onClick={() => {
                dispatch(setsearchshow(true));
                dispatch(setdashboard(false));
                setbellicon(false);
              }}
              className="text-white  max-md:text-2xl text-5xl hover:cursor-pointer  "
            />
          </div>

          {isconnected ? (
            <>
              <div
                className=" relative cursor-pointer select-none"
                onClick={() => {
                  setbellicon(!bellicon);
                  setIsSearch(false);
                  dispatch(setdashboard(false));
                }}
              >
                <div className="absolute inline-flex items-center justify-center max-sm:w-4 max-sm:h-4 w-4 h-4 text-xs  text-white bg-red-700 rounded-full -top-0 -right-1 dark:border-gray-900">
                  20
                </div>
                <BsBell className="text-white  max-sm:text-2xl text-2xl " />
              </div>

              <div
                onClick={() => {
                  dispatch(setdashboard(!dashshow));
                  setbellicon(false);
                  setIsSearch(false);
                }}
                className=" cursor-pointer"
              >
                <img src={Googleuser.picture} className="rounded-full w-9 h-9" />
              </div>
            </>
          ) : (
            <HiOutlineUserCircle
              onClick={() => {
                dispatch(setloginshow(true));
                dispatch(hide(false));
                setbellicon(false);
                setIsSearch(false);
              }}
              className="text-4xl text-blue-500 hover:cursor-pointer "
            />
          )}
        </div>
      </div>

      {<div className="">{dashshow ? <DashSuggestion /> : ""}</div>}
      {<div className="">{bellicon ? <BellSuggestion /> : ""}</div>}
    </>
  );
}

export default Navbar;
