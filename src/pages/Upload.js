import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserInfo from "../components/Uploads/UserInfo";
import VideoTheme from "../components/Main/VideoTheme";
import { useDispatch } from "react-redux";
import { hide, vid } from "../state/slices/slice";

function Upload() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hide(false));
    dispatch(vid(false));
  }, []);

  const data = useSelector((state) => {
    return state.slice;
  });
  return (
    <div className="min-h-screen pt-10 max-sm:space-y-7 w-screen scrollbar-hide">
      <div className="md:p-10">
        <UserInfo />
      </div>
      <div
        className={` ${
          data.side ? "max-sm:ml-0 ml-20" : ""
        } md:p-10  gap-3 grid xl:grid-cols-4 sm:grid-cols-2   max-sm:grid-none max-sm:w-[100%]  lg:grid-cols-3 `}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Link to="/videoplay">
            <VideoTheme />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Upload;
