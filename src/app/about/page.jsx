"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const AboutPage = () => {
  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full overflow-scroll">
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 l:p-30 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* Biography Container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* Title */}
            <h1 className="font-bold text-2xl">Biography</h1>
            {/* Paragraph */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              corporis, repudiandae consequuntur maxime aperiam impedit
              repellendus laboriosam veritatis nostrum dolore quia libero nobis
              voluptatibus commodi fuga eum ipsam, vel saepe.
            </p>
            {/* Paragraph 2 */}
            <span className="italic">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>
            {/* Biography Sign SVG */}
            <div className="self-end">
              <Image
                src="/sign.png"
                alt=""
                width={185}
                height={77}
                className="w-48 h-38 rounded-full object-cover"
              />
            </div>
            {/* Scroll SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* skills Container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* Title */}
            <h1 className="font-bold text-2xl">Skills</h1>
            {/* Skill List */}
            <div className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                javascript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Typescript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                javascript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                javascript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                javascript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                javascript
              </div>

              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                javascript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                javascript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                javascript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                javascript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                javascript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                javascript
              </div>
            </div>
            {/* Scroll SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* experience Container */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            {/* Title */}
            <h1 className="font-bold text-2xl">Experience</h1>
            {/* Container */}
            <div className="">
              {/* Listitem */}
              <div className="flex justify-between h-48 ">
                {/* Left */}
                <div className="w-1/3 ">
                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Mid Software Engineer
                  </div>
                  {/* Job Description */}
                  <div className="p-3 text-sm italic">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus ullam suscipit, illum quidem ducimus odio
                    neque ratione facere asperiores sit cumque est recusandae
                    explicabo placeat. Numquam iure reprehenderit obcaecati
                    magni!
                  </div>
                  {/* Job Date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* Job Company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Hello Iconic
                  </div>
                </div>
                {/* Center */}
                <div className="w-1/6 bg-red-400">
                  {/* Line */}
                  <div className="">
                    {/* Circle */}
                    <div className=""></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3 bg-blue-400"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Svg Container */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
