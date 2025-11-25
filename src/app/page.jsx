"use client";
import Image from "next/image";
import cartoonRounded from "../../public/cartoon-rounded.png";
import Link from "next/link";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-screen flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30 h-[50vh]">
        {/* Image container */}
        <div className="h-[50vh] relative lg:h-screen lg:w-1/2">
          <Image
            src={cartoonRounded}
            alt="Jose Martinez - Software Engineer"
            fill
            placeholder="blur"
            className="object-contain p-8"
            priority
          />
        </div>
        {/* Text container */}
        <div className="h-1/2 flex flex-col gap-8 items-start justify-center lg:h-full lg:w-1/2">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Software Engineer
            </span>
          </h1>
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
            Building Modern Web Experiences
          </h2>
          {/* Description */}
          <p className="md:text-xl text-gray-600 leading-relaxed">
            I'm <strong>Jose Rodolfo Martinez</strong>, a Full Stack Software Engineer
            with 4+ years of experience specializing in <strong>React</strong>, <strong>Next.js</strong>,
            and modern web technologies. Based in Honduras, I craft scalable e-commerce platforms
            and fintech applications for companies worldwide.
          </p>
          {/* Tech Stack Preview */}
          <div className="flex flex-wrap gap-2 mt-2">
            {["React", "Next.js", "TypeScript", "Node.js", "Tailwind"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full text-sm font-medium text-gray-700 border border-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* Buttons */}
          <div className="w-full flex gap-4 mt-4">
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                View My Work
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 rounded-lg ring-2 ring-gray-800 bg-transparent hover:bg-gray-800 hover:text-white transition-colors font-semibold"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
