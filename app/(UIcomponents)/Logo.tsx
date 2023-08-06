import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  height : number
  width: number
};

function Logo({
  height,
  width
}: Props) {
  return (
    <Link className={`h-[${height}vh] relative w-[${width}%] cursor-pointer`} href="/">
      <Image src="/logo.png" alt="logo" fill className="object-contain" />
    </Link>
  );
}

export default Logo;
