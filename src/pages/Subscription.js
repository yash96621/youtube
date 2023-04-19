import React, { useEffect } from "react";
import Topview from "../components/Subscribe/Topview";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "../state/slices/slice";

function Subscription() {
  const data = useSelector((state) => {
    return state.slice;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hide(false));
  }, []);

  return (
    <div
      className={`flex flex-col min-h-screen mt-4 ${
        data.side ? "ml-20" : ""
      } duration-300 divide-cyan-300`}
    >
      <Topview />
    </div>
  );
}

export default Subscription;
