import React from "react";

type Props = {
    title : string,
    description : string
};

function Benefit({title,description}: Props) {
  return (
    <div className="font-normal w-[30%]">
      <h1 className="text-2xl">{title}</h1>
      <p className="mt-[2vh] text-sm font-light leading-8">
        {description}
      </p>
    </div>
  );
}

export default Benefit;
