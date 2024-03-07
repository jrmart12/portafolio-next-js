"use client";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-slate-50 to-sky-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white  cursor-default z-40 w-fit h-fit text-7xl"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {pathName.substring(1).charAt(0).toUpperCase() + pathName.slice(2) ===
          ""
            ? "Welcome"
            : pathName.substring(1).charAt(0).toUpperCase() + pathName.slice(2)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.8 } }}
        ></motion.div>
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
