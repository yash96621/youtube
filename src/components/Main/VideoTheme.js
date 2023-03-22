import React from "react";

function VideoTheme(prop) {
  const { side } = prop;

  return (
    <div className={`  max-sm:scale-none  duration-300 `}>
      <div role="status" className={` ${side ? "flex space-x-3" : ""} `}>
        <div
          className={`  ${side ? "h-28 w-44" : "h-48 max-sm:h-60 w-full"}  rounded bg-gray-700`}
        ></div>
        <div className={`${side ? "inline-flex" : "flex  mt-2"}`}>
          {side ? (
            []
          ) : (
            <svg
              className="text-gray-500 w-14 h-14 dark:text-gray-700"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
          <div>
            <div className="h-2.5 bg-gray-800 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-800 rounded-full dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoTheme;
