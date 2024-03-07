"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const Homepage = () => {
  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30">
        {/* Image container */}
        <div className="h-1/2 relative lg:h-full lg:w-1/2">
          <Image
            src="/cartoon-rounded.png"
            alt=""
            fill
            className="object-contain p-8"
          />
        </div>
        {/* Text container */}
        <div className="h-1/2 flex flex-col gap-8 items-start justify-center lg:h-full lg:w-1/2">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Front End Developer
          </h1>
          {/* Description */}
          <p className="md:text-xl">
            I'm Jose Rodolfo Martinez a Computer Systems Engineer based in
            Honduras
          </p>
          {/* Buttons */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
