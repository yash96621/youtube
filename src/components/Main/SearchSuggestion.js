import React from "react";
import { GoSearch } from "react-icons/go";

function SearchSuggestion() {
  var items = ["hello", "coding with harry", "elone musk"];
  return (
    <div>
      <div className=" max-sm:w-screen max-sm:bg-slate-800 max-sm:text-white  top-16  w-[550px] max-lg:w-[360px]  h-96 overflow-y-scroll bg-slate-100 rounded-2xl absolute">
        <div className="justify-center py-3">
          {items.map((item) => (
            <div className="text-lg leading-5 font-light hover:bg-slate-300 p-1 rounded-lg">
              <div className="inline-flex">
                <div className="ml-3 ">
                  <GoSearch />
                </div>
                <div className="ml-4">{item}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchSuggestion;
