import WatchLater from "../components/Library/WatchLater";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HistoryVideo from "../components/Library/HistoryVideo";
import LikedVideo from "../components/Library/LikedVideo";
import UserInfo from "../components/Uploads/UserInfo";

function Library() {
  const data = useSelector((state) => {
    return state;
  });
  return (
    <div className={` mt-7 ${data.slice.side ? "ml-20" : ""} `}>
      <UserInfo />
      <LikedVideo />
      <HistoryVideo />
      <WatchLater />
    </div>
  );
}

export default Library;
