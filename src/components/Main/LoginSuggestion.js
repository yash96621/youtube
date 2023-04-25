import React from "react";
import { useSelector } from "react-redux";
import { FiLogIn } from "react-icons/fi";
import { googleLogout } from "@react-oauth/google";

function LoginSuggestion() {
  const data = useSelector((state) => {
    return state.data;
  });
  return (
    <div>
      <div className="  bg-gray-600  max-sm:right-2 text-white scrollbar-hide top-16 right-12 max-sm:w-[90%]  w-[350px] max-lg:w-[460px]  h-[70%] overflow-y-scroll  rounded-b-2xl rounded-l-2xl fixed">
        <div className=" flex flex-col  divide-y-2 divide-slate-500">
          <div className="flex p-3 select-none  space-x-4">
            <img src={data.user.picture} className=" rounded-full h-14 " />
            <div>
              <p className="text-lg">{data.user.given_name + " " + data.user.family_name}</p>
              <p className="text-sm">{data.user.email}</p>
            </div>
          </div>
          <div className="flex flex-col p-3  divide-y-2 divide-slate-500">
            <div
              onClick={() => {
                googleLogout();
              }}
              className="flex select-none hover:cursor-pointer  flex-row space-x-3"
            >
              <FiLogIn className="text-2xl" />
              <p>SignOut</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSuggestion;
