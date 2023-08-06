import React from "react";
import { Arrow } from "./Vectors";

type Props = {};

function ArrowSuccess({}: Props) {
  return (
    <div className="flex flex-col items-center  h-[40vh] justify-between">
      <div className="bg-white border-black border-2 border-dashed h-36 w-36 rounded-full flex items-center justify-center">
        <Arrow />
      </div>
      {/* Review Percentage */}
      <div className="text-center mx-auto my-auto">
        <h1 className="font-bold text-5xl mt-[3vh]">98%</h1>
        <p className="font-semibold text-2xl">Positive Review</p>
      </div>
    </div>
  );
}

export default ArrowSuccess;
