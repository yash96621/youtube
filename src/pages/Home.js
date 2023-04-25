import React, { useEffect } from "react";
import VideoTheme from "../components/Main/VideoTheme";

import Tag from "../components/Main/Tag";
import { useDispatch, useSelector } from "react-redux";
import { hide, vid } from "../state/slices/slice";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    dispatch(hide(true));
    dispatch(vid(true));
  }, []);
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.slice;
  });

  return (
    <div className="bg-black min-h-screen ">
      <div className="flex flex-row space-x-6 max-sm:space-x-0  ">
        <div
          className={`  ${
            data.side ? "max-sm:ml-0 ml-20 " : ""
          } flex flex-col overflow-hidden duration-200  rounded-xl  overflow-y-scroll sm:p-3   place-content-center`}
        >
          <div className="  flex overflow-x-scroll scrollbar-hide space-x-3">
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
              25, 26, 27, 28, 29, 30, 31, 32,
            ].map((item) => (
              <Tag props={item} key={item} />
            ))}
          </div>

          <div className="  pt-4 gap-3 grid xl:grid-cols-4 sm:grid-cols-2   max-sm:grid-none max-sm:w-[100%]  lg:grid-cols-3 ">
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            ].map((item) => (
              <Link to="/videoplay" key={item}>
                <VideoTheme />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
