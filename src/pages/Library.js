import React from "react";
import { useSelector } from "react-redux";

import Prewmode from "../components/Library/Prewmode";

function Library() {
  const data = useSelector((state) => {
    return state;
  });
  return (
    <div className="flex flex-col gap-4 overscroll-none">
      <Prewmode />
    </div>
  );
}

export default Library;
