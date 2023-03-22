import WatchLater from "../components/Library/WatchLater";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HistoryVideo from "../components/Library/HistoryVideo";
import LikedVideo from "../components/Library/LikedVideo";

function Library() {
  const data = useSelector((state) => {
    return state;
  });
  return (
    <div className={` ${data.slice.side ? "ml-20" : ""} `}>
      <LikedVideo />
      <HistoryVideo />
      <WatchLater />
    </div>
  );
}

export default Library;
