// import "./App.css";

import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoPlay from "./pages/VideoPlay";
import Navbar from "./components/Main/Navbar";
import Upload from "./components/Uploads/Upload";
import Sidebar from "./components/Main/Siderbar";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import Library from "./pages/Library";
import AddVideos from "./pages/AddVideos";

function App() {
  const data = useSelector((state) => {
    return state.slice;
  });

  return (
    <div className="min-h-screen bg-black ">
      <Navbar />
      <div
        className={` flex flex-row pt-16  ${
          data.video & data.side ? "space-x-6" : "space-x-0"
        }  max-sm:space-x-0   rounded-xl `}
      >
        <div
          className={` min-h-screen fixed bg-black  ${data.side ? "" : "hidden"} ${
            data.video ? "" : " fixed  bg-black  "
          } `}
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
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
