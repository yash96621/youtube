// import "./App.css";

import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoPlay from "./pages/VideoPlay";
import Navbar from "./components/Main/Navbar";
import Sidebar from "./components/Main/Siderbar";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import Library from "./pages/Library";
import AddVideos from "./pages/AddVideos";
import Subscription from "./pages/Subscription";
import Uploads from "./pages/Uploads";
import ModePage from "./components/Library/ModePage";

function App() {
  const data = useSelector((state) => {
    return state.slice;
  });

  const { loginshow } = useSelector((state) => {
    return state.data;
  });

  const dispatch = useDispatch();

  return (
    <div className="min-h-screen w-screen bg-black ">
      <Navbar />
      <div
        className={` flex flex-row pt-16 max-sm:pt-20  ${
          data.video & data.side ? "space-x-6" : "space-x-0"
        }  max-sm:space-x-0   rounded-xl `}
      >
        {loginshow ? <Login /> : []}
        <div
          className={` min-h-screen max-sm:top-[90%] max-sm:py-2  fixed  bg-black  ${
            data.side ? "" : "hidden"
          } ${data.video ? "" : " fixed  bg-black  "} `}
        >
          <motion.aside
            animate={{ x: data.side ? "0%" : "-100%" }}
            transition={{ type: "tween", bounce: 0.2, duration: 0.3 }}
          >
            <Sidebar />
          </motion.aside>
        </div>
        <div className="overflow-hidden  ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Videoplay" element={<VideoPlay />} />
            <Route path="/library" element={<Library />} />
            <Route path="/addvideo" element={<AddVideos />} />
            <Route path="/subscriptions" element={<Subscription />} />
            <Route path="/uploads" element={<Uploads />} />
            <Route path="/modepage" element={<ModePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
