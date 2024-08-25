"use client";
import React from "react";
import ArrowIcon from "@/assets/icons/arrow-w.svg";
import CursorImage from "@/assets/images/cursor.png";
import MessageImage from "@/assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="bg-black text-white 
    bg-[linear-gradient(to_bottom,#0000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)]
    py-[72px] sm:py-[24px] relative overflow-clip"
    >
      <div
        className=" px-4 py-3 absolute bg-black h-[375px] w-[750px] sm:w-[1526px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] left-1/2 -translate-x-1/2
      border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-90px)]"
      ></div>
      <div className="container relative">
        <div className="flex justify-center items-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2)] text-transparent bg-clip-text [webkit-background-clip:text]">
              {" "}
              Version 2.0 is here
            </span>
            <span className="inline-flex gap-1 items-center">
              <span> Read More</span>
              <ArrowIcon />
            </span>
          </a>
        </div>

        <div className="flex justify-center  mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
              One task
              <br />
              at a time
            </h1>
            <motion.div
              className="absolute right-[476px] top-[108px] hidden sm:inline "
              drag
              dragSnapToOrigin
            >
              <Image
                src={CursorImage}
                height="200"
                width="200"
                className="max-w-none"
                alt="cursor"
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="absolute left-[498px] top-[56px] hidden sm:inline "
              drag
              dragSnapToOrigin
            >
              <Image
                src={MessageImage}
                height="200"
                width="200"
                className="max-w-none "
                alt="message"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center mt-8 text-xl max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex mt-8 justify-center ">
          <button className="bg-white text-black rounded-lg font-medium px-5 py-3 ">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
