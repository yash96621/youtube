import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadVideo from "../components/Uploads/UploadVideo";

function AddVideos() {
  const data = useSelector((state) => {
    return state;
  });
  return (
    <div className={` ${data.slice.side ? "ml-20" : ""} pt-3`}>
      <UploadVideo />
    </div>
  );
}

export default AddVideos;
