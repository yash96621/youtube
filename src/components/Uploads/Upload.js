import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { hide, vid } from "../../state/slices/slice";

function Upload() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hide(false));
    dispatch(vid(false));
  }, []);
  const fileRef = useRef(null);
  const handleVideoUpload = (file) => {
    if (!file.type.includes("video")) {
      alert("not a video and don't submit, just return");
      return;
    } else {
      alert("It's a video ... proceed submitting");
    }
  };

  const data = useSelector((state) => {
    return state.slice;
  });
  return (
    <div className="mx-auto w-full h-fit  max-w-[550px] bg-white rounded-2xl">
      <form className="py-6 px-9">
        <div className="mb-5">
          <label for="text" className="mb-3 block text-base font-medium text-[#07074D]">
            Video name
          </label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder=""
            min={30}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-6 ">
          <label className="mb-2 block text-xl font-semibold text-[#07074D]">Upload File</label>

          <div className="mb-8">
            <input
              type="file"
              id="file"
              accept="video/*"
              ref={fileRef}
              className="hidden"
              onChange={(event) => handleVideoUpload(event.target.files[0])}
            />
            <label
              for="file"
              className=" flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
            >
              <div>
                <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                  Drop files here
                </span>
                <span className="mb-2 block text-base font-medium text-[#6B7280]">Or</span>
                <span className="inline-flex hover:cursor-pointer rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                  Browse
                </span>
              </div>
            </label>
          </div>

          <div className=" rounded-md bg-[#F5F7FB] py-4 px-8">
            {}
            <div className="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
              <div className="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-blue-500 "></div>
            </div>
          </div>
        </div>

        <div>
          <button className="hover:shadow-form w-full rounded-md bg-blue-400 hover:bg-blue-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default Upload;
