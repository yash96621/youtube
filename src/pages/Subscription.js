import React, { useEffect } from "react";
import Topview from "../components/Subscribe/Topview";
import { useDispatch, useSelector } from "react-redux";

import SubVideo from "../components/Subscribe/SubVideo";

function Subscription() {
  const data = useSelector((state) => {
    return state.slice;
  });

  return (
    <div
      className={`flex flex-col min-h-screen md:mt-4  ${
        data.side ? "md:ml-20" : ""
      } duration-300 divide-cyan-300`}
    >
      <Topview />

      <SubVideo />
    </div>
  );
}

export default Subscription;
