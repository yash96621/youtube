import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Upload from "../components/Uploads/Upload";

function AddVideos() {
  const data = useSelector((state) => {
    return state;
  });
  return (
    <div className={` ${data.slice.side ? "ml-20" : ""} pt-3`}>
      <Upload />
    </div>
  );
}

export default AddVideos;
