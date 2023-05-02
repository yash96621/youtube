import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoMdMic } from "react-icons/io";
import SearchSuggestion from "./SearchSuggestion";
import { useDispatch } from "react-redux";
import { setsearchshow } from "../../state/slices/slice";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function NativSearch() {
  const dispatch = useDispatch();
  const [search, setsearch] = useState("");
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    setsearch(transcript);
  }, [transcript]);

  const VoiceSearch = () => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Browser Not Supported");
    } else {
      if (listening) {
        SpeechRecognition.stopListening();
      } else {
        SpeechRecognition.startListening({
          continuous: false,
          language: "en-GB",
        });
        setTimeout(() => {
          SpeechRecognition.stopListening();
          clearTimeout();
        }, 7000);
      }
    }
  };
  return (
    <div className="fixed w-screen scrollbar-hide h-screen bg-slate-800 z-40">
      <div className="flex flex-col py-3">
        <div className=" inline-flex justify-around items-center">
          <IoIosArrowBack
            onClick={() => {
              dispatch(setsearchshow(false));
            }}
            className="text-white text-3xl"
          />
          <div>
            <input
              type="search"
              name="search"
              placeholder={`${listening ? "Listening" : "Search"}`}
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              className=" bg-gray-800 rounded-full text-white w-[550px] max-lg:w-[300px] "
            ></input>

            <SearchSuggestion />
          </div>
          <div
            className={` cursor-pointer ${
              listening ? "text-red-600 animate-pulse" : "text-white "
            } bg-slate-900 rounded-full ml-2  p-2`}
          >
            <IoMdMic sx={{ fontSize: 30 }} onClick={VoiceSearch} className="  text-2xl"></IoMdMic>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NativSearch;
