import React from "react";
import { useSelector } from "react-redux";

function UserInfo() {
  const data = useSelector((state) => {
    return state.data;
  });
  return (
    <div>
      <div className=" flex flex-col items-center rounded-[20px] max-w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 select-none   ">
        <div className=" flex flex-col items-center w-full justify-center rounded-xl bg-cover">
          <div className=" flex h-32 w-full justify-center rounded-xl bg-gradient-to-l from-teal-500 via-cyan-500 to-sky-600  " />
          <img
            src={data.Googleuser.picture}
            className=" -mt-10 h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white   "
          />
        </div>
        <div className=" flex flex-col items-center">
          <h4 className="text-xl font-bold text-navy-700">
            {data.Googleuser.given_name + " " + data.Googleuser.family_name}
          </h4>
          <h6 className=" text-sm text-gray-500 leading-3   ">{data.Googleuser.email}</h6>
        </div>
        <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 ">17</p>
            <p className="text-sm font-normal text-gray-600">videos</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 ">9.7K</p>
            <p className="text-sm font-normal text-gray-600">Subscribers</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 ">10$</p>
            <p className="text-sm font-normal text-gray-600">Add</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
