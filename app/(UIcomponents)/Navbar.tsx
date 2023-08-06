import React from "react";
import localFont from "next/font/local";
import Logo from "./Logo";
import Link from "next/link";
import Search from "./Search";

type Props = {};

const Iowan = localFont({
  src: [
    {
      path: "../../public/2131-font.otf",
      weight: "700",
    },
  ],
  variable: "--font-iowan",
});

function Navbar({}: Props) {
  return (
    <section className="rounded-full w-[90%] flex flew-row mx-auto bg-black mt-[8vh] h-[10vh]">
      <Logo height={10} width={6} />
      {/* Function Academy Text */}
      <Link
        className={`${Iowan.className} font-bold text-xl flex flex-col justify-center ml-1 cursor-pointer`}
        href="/"
      >
        <p className="text-[#ED1F04]  w-max">FUNCTION</p>
        <p className="text-white  mt-[-1vh] w-max">ACADEMY</p>
      </Link>
      {/* Nav links */}
      <div className="flex flex-row justify-between w-1/3 items-center font-normal text-sm mx-auto">
        <Link className="text-white" href="/techBootcamp">
          Tech Bootcamp
        </Link>
        <Link className="text-white" href="/bootcampPrep">
          Bootcamp Prep
        </Link>
        <Link className="text-white" href="/tuition">
          Tuition
        </Link>
        <Link className="text-white" href="/apply">
          Apply
        </Link>
      </div>
      {/* Search Bar */}
      <div className="bg-white w-[20%] h-[6.5vh] my-auto rounded-full mx-3 flex flex-row items-center">
        <input className="rounded-full ml-4 w-[80%]" placeholder="Search" />
        <button className="bg-[#ED1F04] rounded-full h-[5.5vh] w-[20%] mr-1 px-2.5">
          <Search />
        </button>
      </div>
    </section>
  );
}

export default Navbar;
