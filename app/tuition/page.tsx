import Image from "next/image";
import ArrowSuccess from "../(UIcomponents)/ArrowSuccess";
import HeroContent from "../(UIcomponents)/HeroContent";
import HeroImage from "../(UIcomponents)/HeroImage";
import RedBanner from "../(UIcomponents)/RedBanner";
import { Arrow, Play } from "../(UIcomponents)/Vectors";

export default function Tution() {
  return (
    <main className="h-max bg-black pb-10">
      {/* Hero Section */}
      <div className="bg-white  h-[100vh] w-full rounded-b-[60px]">
        {/* Header */}
        <h1 className="pt-[10vh] font-bold text-5xl text-center w-[90%] mx-auto ">
          Tuition
        </h1>
        {/* Main Content */}
        <div className="bg-white flex justify-between items-center mt-[5vh] w-[90%] mx-auto">
          <RedBanner
            num="24"
            text="Week Full 
            Stack Devloper"
          />
          <ArrowSuccess />
          <HeroContent content="Full Stack Web Development Certification Tuition Options." />
        </div>
      </div>
      {/* Hero Image */}
      <HeroImage />
      {/* Tution Details */}
      <div className="mt-[5vh] h-[55vh] mb-[5vh] flex flex-col justify-between text-white w-[90%] mx-auto">
        <div>
          <h1 className="font-medium text-3xl">Pay Total Tuition Upfront</h1>
          <p className="mt-[3vh] text-xl ">$18,500</p>
        </div>
        <div>
          <h1 className="font-medium text-3xl">
            Make Payments Over the Course of Program – 6 Months
          </h1>
          <p className="mt-[3vh] text-xl font-light text-opacity-90">$18,500</p>
        </div>
        <div>
          <h1 className="font-medium text-3xl">Pay No Tuition Until Hired</h1>
          <p className="mt-[3vh] text-xl font-light text-opacity-90">
            Job must pay minimum 60K a year. Tuition is charged at 17% of salary
            over 2 years capped at $34,000
          </p>
        </div>
      </div>
    </main>
  );
}
