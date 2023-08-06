import Image from "next/image";
import ListItem from "../(UIcomponents)/ListItem";
import { client } from "../utils/client";
import TimeSlots from "./(techBootcampComponents)/TimeSlots";
import ArrowSuccess from "./../(UIcomponents)/ArrowSuccess";
import HeroContent from "./../(UIcomponents)/HeroContent";
import HeroImage from "./../(UIcomponents)/HeroImage";
import RedBanner from "./../(UIcomponents)/RedBanner";
import { Arrow, Play } from "./../(UIcomponents)/Vectors";

interface Course {
  _id: string;
  _type: 'course';
  title: string;
  description: string;
  module_num: number;
  // Add other fields from the schema if needed
}


export default async function TechBootcamp() {
  const query = `*[_type == "course"] | order(module_num asc)`;

  // Send the GROQ query to fetch the courses
  const courses = await client.fetch(query);
  return (
    <main className="h-max bg-black pb-10 ">
      {/* Hero Section */}
      <div className="bg-white  h-[100vh] w-full rounded-b-[60px]">
        {/* Header */}
        <h1 className="pt-[10vh] font-bold text-5xl text-center w-[90%] mx-auto ">
          Full Stack Web{" "}
          <span className="text-[#ECEAE0] bg-[#313132] rounded-[2rem] px-4">
            Development
          </span>{" "}
        </h1>
        <h1 className=" font-extrabold text-5xl text-center w-[90%] mx-auto  mt-[3vh]">
          Certification
        </h1>
        {/* Main Content */}
        <div className="bg-white flex justify-between items-center mt-[5vh] w-[90%] mx-auto">
          <RedBanner
            num="24"
            text="Week
            Project Base"
          />
          <ArrowSuccess />
          <HeroContent
            content="24 Week project based learning curriculum designed to prepare students to begin 
a career as professional software engineer and start-up entrepreneur."
          />
        </div>
      </div>
      {/* Hero Image */}
      <HeroImage />
      {/* Daily Schedule */}
      <div className="bg-black h-max pb-[4vh] w-[90%] text-white mx-auto">
        <h1 className="font-medium text-3xl mt-[4vh]">Daily Schedule</h1>
        <div className="mt-[4vh]">
          <TimeSlots time="9:00 AM – 9: 45 AM" lesson="Coding Challenge" />
          <TimeSlots
            time="9:45 AM – 10: 15 AM"
            lesson="Coding Challenge Review"
          />
          <TimeSlots time="10:30 AM – 11:15 PM" lesson="Lecture" />
          <TimeSlots time="11:15 AM – 11: 45 AM" lesson="Coding Activity" />
          <TimeSlots time="12:00 PM – 1: 00 PM" lesson="Lunch" />
          <TimeSlots time="1:00 PM – 2:30 PM" lesson="Lecture" />
          <TimeSlots
            time="2:45 PM – 4:30 PM"
            lesson="Team Developement Training"
          />
          <TimeSlots time="4:30 PM – 5:00 PM" lesson="Daily Review" />
          <TimeSlots time="5:00 PM – 6:00 PM" lesson="Open Coding" />
        </div>
      </div>
      <div className="bg-black h-max  w-[90%] text-white mx-auto">
        <h1 className="font-medium text-3xl mt-[2vh]">Curriculum</h1>
        <div className="mt-[4vh]">
          {courses.map((course : Course)=> {
            return (
              <ListItem number={course.module_num} title={course.title} description={course.description} />
            )
          })}
        </div>
      </div>
    </main>
  );
}
