import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiLogIn } from "react-icons/fi";
import { googleLogout } from "@react-oauth/google";
import { logout, setdashboard } from "../../state/slices/data";
import { GrHistory } from "react-icons/gr";
import AutoDeleteOutlinedIcon from "@mui/icons-material/AutoDeleteOutlined";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { Link } from "react-router-dom";

function DashSuggestion() {
  const data = useSelector((state) => {
    return state.data;
  });
  const [toggle, setToggle] = useState(false);
  const clicked = (e) => {
    console.log(e.target.checked);
    if (e.target.checked == false) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const dispatch = useDispatch();
  return (
    <div>
      <div className=" bg-white  max-sm:right-2 scrollbar-hide top-16 right-12 max-sm:w-[90%]  w-[350px] max-lg:w-[460px]  h-fit overflow-y-scroll  rounded-b-2xl rounded-l-2xl fixed">
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
          <div className="flex flex-col px-3 divide-y-2  divide-slate-500">
            <div className=" space-y-1 py-3">
              <Link
                to="/uploads"
                onClick={() => {
                  dispatch(setdashboard(false));
                }}
                className="flex select-none  hover:bg-gray-200 p-2 rounded-xl hover:cursor-pointer justify-between  flex-row "
              >
                <div className="space-x-3 flex flex-row">
                  <MdOutlineSwitchAccount className="text-2xl" />
                  <p>Your Channel</p>
                </div>
              </Link>

              <div className="flex select-none hover:text-blue-600 hover:bg-gray-200 p-2 rounded-xl hover:cursor-pointer justify-between  flex-row ">
                <div className="space-x-3 flex flex-row">
                  <GrHistory className=" text-2xl" />
                  <p>History</p>
                </div>
                <label
                  onChange={clicked}
                  className="relative w-fit inline-flex items-center mr-5 cursor-pointer"
                >
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-400 rounded-full peer     peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-orange-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900">
                    {toggle ? "ON" : "OFF"}
                  </span>
                </label>
              </div>
              <div className="flex select-none hover:text-red-600 hover:bg-gray-200 p-2 rounded-xl hover:cursor-pointer justify-between  flex-row ">
                <div className="space-x-2 flex flex-row">
                  <AutoDeleteOutlinedIcon sx={{ fontSize: 26 }} />
                  <p>Clear History</p>
                </div>
              </div>
            </div>
            <div className=" py-2">
              <div
                onClick={() => {
                  googleLogout();
                  dispatch(logout());
                }}
                className="flex p-2 select-none hover:bg-gray-200 rounded-xl hover:cursor-pointer  flex-row space-x-3"
              >
                <FiLogIn className="text-2xl" />
                <p>SignOut</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashSuggestion;
