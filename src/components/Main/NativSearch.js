import React from "react";
import { IoIosArrowBack, IoMdMic } from "react-icons/io";
import SearchSuggestion from "./SearchSuggestion";
import { useDispatch } from "react-redux";
import { setsearchshow } from "../../state/slices/slice";
function NativSearch() {
  const dispatch = useDispatch();
  return (
    <div className="fixed w-screen scrollbar-hide h-screen bg-slate-800 z-40">
      <div className="flex flex-col py-3">
        <div className=" inline-flex justify-around items-center">
          <IoIosArrowBack
            onClick={() => {
              dispatch(setsearchshow(false));
            }}
            className="text-white text-3xl"
          />
          <div>
            <input
              type="search"
              name="search"
              placeholder="search"
              className=" bg-gray-800 rounded-full text-white w-[550px] max-lg:w-[300px] "
            ></input>

            <SearchSuggestion />
          </div>
          <div className="bg bg-slate-900 rounded-full ml-2  p-2">
            <IoMdMic
              sx={{ fontSize: 30 }}
              className="text-white  cursor-pointer text-2xl"
            ></IoMdMic>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NativSearch;
