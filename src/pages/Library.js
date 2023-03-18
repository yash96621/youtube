import WatchLater from "../components/WatchLater";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HistoryVideo from "../components/HistoryVideo";
import LikedVideo from "../components/LikedVideo";

function Library() {
  const data = useSelector((state) => {
    return state;
  });
  return (
    <div className={` ${data.slice.side ? "ml-20" : ""}  min-h-screen w-screen`}>
      <LikedVideo />
      <HistoryVideo />
      <WatchLater />
    </div>
  );
}

export default Library;
