import React from "react";
import HomeIcon from "@mui/icons-material/HomeRounded";
import LocalPlayOutlinedIcon from "@mui/icons-material/LocalPlayOutlined";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";

function Siderbar() {
  return (
    <>
      <div className="bg-black flex flex-col space-y-10">
        <div className="flex flex-col  mx-auto text-center">
          <HomeIcon className="text-white" sx={{ fontSize: 30 }} />
          <p for="home" className="text-white text-xs ">
            Home
          </p>
        </div>
        <div className="flex flex-col mx-auto">
          <LocalPlayOutlinedIcon className="text-white  mx-auto" sx={{ fontSize: 30 }} />
          <label for="shorts" className="text-white text-xs">
            Shorts
          </label>
        </div>
        <div className="flex flex-col mx-auto">
          <SubscriptionsSharpIcon className="text-white  mx-auto" sx={{ fontSize: 30 }} />
          <label for="Subscriptions" className="text-white text-xs">
            Subscriptions
          </label>
        </div>
        <div className="flex flex-col mx-auto">
          <VideoLibraryRoundedIcon className="text-white  mx-autor" sx={{ fontSize: 30 }} />
          <label for="Library" className="text-white text-xs">
            Library
          </label>
        </div>
        <div className="flex flex-col mx-auto">
          <FileDownloadOutlinedIcon className="text-white mx-auto" sx={{ fontSize: 30 }} />
          <label for="Library" className="text-white text-xs">
            Downloads
          </label>
        </div>
      </div>
    </>
  );
}

export default Siderbar;
