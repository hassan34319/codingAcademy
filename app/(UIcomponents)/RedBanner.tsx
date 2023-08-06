import React from "react";
import { Play } from "./Vectors";

type Props = {
    num : string,
    text : string
};

function RedBanner({num,text}: Props) {
  return (
    <div className="w-[6%] h-[40vh] flex flex-col justify-between bg-[#ED1F04] rounded-[60px]">
      <h1 className="font-bold text-5xl text-white rotate-90 mt-[3vh]">{num}</h1>
      <p className="text-white rotate-90 mt-[4vh] text-sm font-normal">
        {text}
      </p>
      <div className="bg-white rounded-full h-16 w-16 mx-auto my-1 flex items-center justify-center pl-1">
        <Play />
      </div>
    </div>
  );
}

export default RedBanner;
