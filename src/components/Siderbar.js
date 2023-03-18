import React from "react";
import HomeIcon from "@mui/icons-material/HomeRounded";
import LocalPlayOutlinedIcon from "@mui/icons-material/LocalPlayOutlined";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";

import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";
import { Link } from "react-router-dom";
import { FiUpload } from "react-icons/fi";

function Siderbar() {
  return (
    <>
      <div className=" flex flex-col gap-y-10 cursor-pointer  ">
        <Link to="/" className="flex flex-col  mx-auto text-center">
          <HomeIcon className="text-white" sx={{ fontSize: 30 }} />
          <label htmlFor="home" className="text-white text-xs ">
            Home
          </label>
        </Link>
        <Link to="/shorts" className="flex flex-col mx-auto cursor-pointer">
          <LocalPlayOutlinedIcon className="text-white  mx-auto" sx={{ fontSize: 30 }} />
          <label htmlFor="shorts" className="text-white text-xs">
            Shorts
          </label>
        </Link>
        <Link to="/subscriptions" className="flex flex-col mx-auto cursor-pointer">
          <SubscriptionsSharpIcon className="text-white  mx-auto" sx={{ fontSize: 30 }} />
          <label htmlFor="Subscriptions" className="text-white text-xs">
            Subscriptions
          </label>
        </Link>
        <Link to="/library" className="flex flex-col mx-auto cursor-pointer">
          <VideoLibraryRoundedIcon className="text-white  mx-auto" sx={{ fontSize: 30 }} />
          <label htmlFor="Library" className="text-white text-xs">
            Library
          </label>
        </Link>
        <Link to="/upload" className="flex flex-col mx-auto cursor-pointer">
          <FiUpload className="text-white mx-auto text-3xl" />
          <label htmlFor="Library" className="text-white text-xs">
            Upload
          </label>
        </Link>
      </div>
    </>
  );
}

export default Siderbar;
