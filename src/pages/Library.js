import React from "react";
import { useSelector } from "react-redux";

import UserInfo from "../components/Uploads/UserInfo";
import Prewmode from "../components/Library/Prewmode";

function Library() {
  const data = useSelector((state) => {
    return state;
  });
  return (
    // <div className={` mt-7 ${data.slice.side ? "ml-20" : ""} `}>
    <div className="flex flex-col gap-4">
      <div className="w-screen mx-auto mt-7  ">
        <UserInfo />
      </div>
      <Prewmode />
    </div>

    // </div>
  );
}

export default Library;
