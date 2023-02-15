import Navbar from "../components/Navbar";
import React from "react";
import VideoTheme from "../components/VideoTheme";
import Sidebar from "../components/Siderbar";
import Tag from "../components/Tag";
// import { SnapButton } from "react-thanos-snap-effect";
// import SnapWrapper from "react-thanos-snap-effect/dist/SnapWrapper";

function Home() {
  return (
    <div className="bg-black min-h-screen">
      {/* <SnapButton>
        <SnapWrapper></SnapWrapper>
      </SnapButton> */}
      <Navbar />
      <div className="flex flex-row space-x-6">
        <div className="flex ml-3 w-80 rounded-xl ">
          <Sidebar />
        </div>
        <div className="flex flex-col overflow-hidden  rounded-xl place-content-center">
          <div className="flex overflow-x-scroll scrollbar-hide   space-x-3">
            {[
              1, 2, 10, 12, 12, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 1, 1,
              1, 1, 1, 1, 1, 3, 4, 5, 6, 7, 8,
            ].map((item) => (
              <Tag props={item} />
            ))}
          </div>

          <div className=" mt-2 flex flex-wrap">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <VideoTheme />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
