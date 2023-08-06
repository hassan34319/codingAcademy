import React from "react";

type Props = {
  title?: string;
  content: string;
  apply?: boolean;
};

function HeroContent({ title, content,apply }: Props) {
  return (
    <div className="w-[60%] flex flex-row">
      {/* Blue Banner */}
      <div className="w-[7.5%] bg-[#0F9E94] h-[30vh]"></div>
      {/* Written Content */}
      <div
        className={`h-[22vh] text-start flex flex-col  my-auto ml-[-3.25%] w-[90%] ${
          title? "justify-between" : "justify-center"
        }`}
      >
        {title && <h1 className="font-semibold text-2xl">{title}</h1>}
        <p className="">{content}</p>
        {apply && (
          <button className="ml-[3.75%] p-3 bg-black text-white w-1/2 rounded-3xl mt-[2vh]">Apply Now</button>
        )}
      </div>
    </div>
  );
}

export default HeroContent;
