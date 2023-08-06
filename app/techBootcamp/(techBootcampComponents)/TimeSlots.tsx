import React from "react";

type Props = {
    lesson : string,
    time : string
};

function TimeSlots({time,lesson}: Props) {
  return (
    <div className="flex flex-row w-full mx-auto space-x-2">
      <div className="w-[49%] bg-white text-black flex items-center text-2xl font-semibold px-6 py-3 border-b-2 border-black border-opacity-60">
        {time}
      </div>
      <div className="w-[49%] bg-white text-black flex items-center text-2xl font-semibold rounded-[60px] px-6 py-2 my-1">
        {lesson}
      </div>
    </div>
  );
}

export default TimeSlots;
