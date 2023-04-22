import React from "react";
import UserInfo from "../components/Uploads/UserInfo";
import SubVideo from "../components/Subscribe/SubVideo";

function Uploads() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-screen mx-auto mt-7  ">
        <UserInfo />
        <SubVideo />
      </div>
    </div>
  );
}

export default Uploads;
