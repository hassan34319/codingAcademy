import Image from "next/image";
import React from "react";

type Props = {};

function HeroImage({}: Props) {
  return (
    <div className="relative w-[90%] mx-auto h-[65vh] mt-[-24vh]">
      <Image
        alt="heroSectionImage"
        src="/Main.png"
        fill
        className="object-cover"
      />
    </div>
  );
}

export default HeroImage;
