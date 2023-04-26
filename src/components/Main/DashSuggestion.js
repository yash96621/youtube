import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiLogIn } from "react-icons/fi";
import { googleLogout } from "@react-oauth/google";
import { logout } from "../../state/slices/data";

function DashSuggestion() {
  const data = useSelector((state) => {
    return state.data;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <div className=" bg-white  max-sm:right-2 scrollbar-hide top-16 right-12 max-sm:w-[90%]  w-[350px] max-lg:w-[460px]  h-[70%] overflow-y-scroll  rounded-b-2xl rounded-l-2xl fixed">
        <div className=" flex flex-col  divide-y-2 divide-slate-500">
          <div className="flex p-3 select-none  space-x-4">
            <img src={data.Googleuser.picture} className=" rounded-full h-12 " />
            <div>
              <p className=" text-base font-medium">
                {data.Googleuser.given_name + " " + data.Googleuser.family_name}
              </p>
              <p className=" text-sm">{data.Googleuser.email}</p>
            </div>
          </div>
          <div className="flex flex-col p-3  divide-y-2 divide-slate-500">
            <div
              onClick={() => {
                googleLogout();
                dispatch(logout());
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

export default DashSuggestion;
