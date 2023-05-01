import React from "react";
import HomeIcon from "@mui/icons-material/HomeRounded";
import LocalPlayOutlinedIcon from "@mui/icons-material/LocalPlayOutlined";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";
import { Link } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import { RiVideoAddFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setloginshow } from "../../state/slices/data";
import { hide, setIsSearch, setbellicon } from "../../state/slices/slice";

function Siderbar() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.data;
  });
  return (
    <>
      <div className=" flex flex-col max-sm:w-screen  max-sm:flex-row gap-y-10 cursor-pointer  select-none  ">
        <Link to="/" className="flex flex-col  mx-auto text-center">
          <HomeIcon className="text-white" sx={{ fontSize: 30 }} />
          <label htmlFor="home" className="text-white text-xs ">
            Home
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

        {data.isconnected ? (
          <Link to="/uploads" className="flex flex-col mx-auto cursor-pointer">
            <FiUpload className="text-white  mx-auto text-3xl" />
            <label htmlFor="Uploads" className="text-white text-xs">
              Uploads
            </label>
          </Link>
        ) : (
          <div
            onClick={() => {
              dispatch(setloginshow(true));
              dispatch(hide(false));
              dispatch(setIsSearch(false));
              dispatch(setbellicon(false));
            }}
            className="flex flex-col mx-auto cursor-pointer"
          >
            <FiUpload className="text-white  mx-auto text-3xl" />
            <label htmlFor="Uploads" className="text-white text-xs">
              Uploads
            </label>
          </div>
        )}

        <Link to="/addvideo" className="flex flex-col mx-auto cursor-pointer">
          <RiVideoAddFill className="text-white mx-auto text-3xl" />
          <label htmlFor="Library" className="text-white text-xs">
            Add Video
          </label>
        </Link>
      </div>
    </>
  );
}

export default Siderbar;
