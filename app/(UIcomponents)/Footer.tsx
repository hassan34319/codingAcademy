"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { nunito } from "../utils/nunito";
import { Facebook, Instagram, Twitter } from "./Vectors";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import {client} from "../utils/client"
type Props = {};

function Footer({}: Props) {
  const [email, setEmail] = useState("");
  const handleEmailSubmit = async () => {
    if (!email) {
      return;
    }
    console.log(email,client)
    try {
  
      // Define the email data according to your schema
      const emailData = {
        _type: 'subscribedEmail',
        userEmail: email,
      };
  
      // Send the POST request to add the email
      const response = await client.create(emailData);
  
      // If the request is successful, the email has been added
      console.log('Email added successfully:', response);
      return response;
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error adding email:', error);
      throw error;
    }

  };
  return (
    <section className="bg-black w-full h-[65vh]">
      {/* Footer Banner */}
      <div className="bg-white h-[40vh] mx-14 flex items-center justify-center">
        {/* Inner rectangle with black border */}
        <div className="bg-white rounded-2xl border-black border-8 w-[97%] h-[36vh] grid grid-cols-3 space-x-8 px-4 py-4 text-start">
          {/* Content Boxes */}
          <div className="col-span-1 row-span-1 flex flex-col">
            <h1 className="font-semibold text-3xl">
              Become a Software Engineer in 6 Months
            </h1>
            <p className="mt-4 font-normal text-sm leading-7">
              Learn from a industry professionals the skills it takes to land a
              high paying role in the tech industry as a software engineer by
              earning a certification as a Full Stack Web Developer.
            </p>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col">
            <h1 className="font-semibold text-3xl">
              Pay No Tuition Until You're Hired
            </h1>
            <p className="mt-4 font-normal text-sm leading-7">
              We're invested into your success and want to ensure you that you
              will be receiving the best training to land your dream job in the
              tech industry.
            </p>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col">
            <h1 className="font-semibold text-3xl">
              Learn How to Code in Hawaii
            </h1>
            <p className="mt-4 font-normal text-sm leading-7">
              Learn how to code in one of most relaxing environments in the
              world. Function Academy is located near some of the best beaches
              for surfing, local dining, hiking, biking and more.
            </p>
          </div>
        </div>
      </div>
      {/* Logo And Details. */}
      <div className="flex flex-row px-14 h-[16vh] items-center border-y-[1px] border-white border-opacity-20 mt-4">
        {/* Logo */}
        <Logo height={14} width={8} />
        {/* Other Details */}
        <div
          className={`flex flex-row justify-between ${nunito.className} text-white ml-[18%] flex-1`}
        >
          {/* Contact */}
          <div className="">
            <h1 className="font-bold">Contact Us</h1>
            <p className="font-medium text-sm mt-2">
              Get in touch with us via email:
            </p>
            <p className="font-bold text-sm">Mail@gmail.com</p>
          </div>
          {/* Socials */}
          <div className="flex flex-col mb-1 justify-between">
            <h1 className="font-bold">Follow Us</h1>
            <div className="flex flex-row space-x-3">
              <Twitter />
              <Facebook />
              <Instagram />
            </div>
          </div>
          {/* Apply */}
          <div className="">
            <h1 className="font-bold">Apply Now</h1>
            <div className="bg-white bg-opacity-25 h-[6vh] w-80 rounded-md mt-2 flex flex-row items-center">
              <input
                className="ml-4 bg-transparent font-medium text-sm outline-none w-[66%]"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handleEmailSubmit}
                className="w-[33%] bg-black h-[95%] mr-[0.1rem] rounded-md flex flex-row justify-center items-center"
              >
                <p className="font-medium text-sm">Apply Now</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div
        className={`${nunito.className} text-white font-medium text-sm flex items-center justify-center h-[7vh] bg-black`}
      >
        <AiOutlineCopyrightCircle
          className="text-white mr-1"
          height={15}
          width={15}
        />
        2023 Function Academy
      </div>
    </section>
  );
}

export default Footer;
