"use client";

import * as React from "react";
import img from "../../../../public/images/charm1.png";
import Image from "next/image";
import { anton } from "@/styles/fonts";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";

function Well() {
  const offscreen = {
    y: 100,
    opacity: 0,
  };
  const onscreen = {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.1,
      duration: 0.41,
    },
  };
  return (
    <div className="bg-white py-36 sm:px-10 px-5  relative w-full">
      <div
        className="relative flex gap-5 mt-36 max-md:flex-col max-md:gap-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #000 0.41%, #000 34.07%, #000 64.85%, #000 96.58%)",
          backgroundSize: "100% 100%",
          backgroundPositionY: "100%",
          backgroundRepeat: "no-repeat",
          alignItems: "end",
          borderRadius: "36px", // Adjust the value as per your preference
        }}
      >
        <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
          <div className="sm:absolute static -left-[0.4rem] bottom-2 sm:w-[50%] w-[100%]   max-md:max-w-full">
            <Image
              loading="lazy"
              src={img}
              className="w-[100%] h-[100%] md:scale-[1] scale-[1]  rounded-[36px] aspect-[1.61]"
            />
          </div>
        </div>
        <motion.div
          initial={offscreen}
          whileInView={onscreen}
          viewport={{ once: true, amount: 0.3 }}
          className={`flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full ${anton.className}`}
        >
          <div className="flex relative sm:items-start items-center flex-col md:p-10 p-5 uppercase md:mt-10 mt-5 max-md:max-w-full">
            <div className="text-4xl leading-10 text-white max-md:max-w-full">
              Well, they say third time is a{" "}
              <span className="text-[#ccff00]">charm!</span>
              <br />
              And IXG is back with the{" "}
              <span className="text-[#ccff00]">third edition </span>
              <br /> of the much awaited{" "}
              <span className="text-[#ccff00]">IEC&A!</span>
            </div>
            {/* <div className="flex gap-1.5 self-start w-full  text-lg font-semibold tracking-tighter leading-[90px] rounded-[40px]">
              <Button href="./register" color="green" img="arrow">
                Register Now
              </Button>
            </div> */}
            <div
              className="sm:scale-100 scale-75 
              
              "
            >
              <Button href="./register" color="green" img="arrow">
                Register Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Well;
