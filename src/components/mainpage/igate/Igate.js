"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import ok from "../../../../public/ok.jpg";
import got from "../../../../public/images/got.png";
import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";

function Ig() {
  const [isMobileView, setIsMobileView] = useState(false);

  const offscreen = {
    x: -100,
    opacity: 0,
  };
  const onscreen = {
    x: 0,
    opacity: 1,

    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  };
  return (
    <section
      className={`  items-end   text-2xl text-right sm:overflow-visible overflow-hidden  relative -top-14 align-middle font-bold  ${work_sans.className} `}
    >
      <div
        className="flex md:flex-row  flex-col md:pr-8 pr-2 align-middle  sm:bg-center bg-bottom "
        style={{
          backgroundImage:
            "linear-gradient(90deg, #00A4F1 0.41%, #51B6FF 34.07%, #A098DF 64.85%, #9B75EC 96.58%)",
          backgroundSize: "100% 250px",
          backgroundRepeat: "no-repeat", // Ensure it doesn't repeat
          alignItems: "center",
        }}
      >
        <motion.div
          initial={offscreen}
          whileInView={onscreen}
          viewport={{ once: true, amount: 0.3 }}
          className="relative sm:top-auto top-5 sm:left-10 left-5"
        >
          <Image
            src={got}
            alt="Igate"
            width={1000}
            height="auto"
            className="sm:scale-[1.4] scale-[1.4] scl "
            style={{
              transform: "rotate(-5deg)",
              scale: "1.4",
            }}
          />
        </motion.div>
        <div className="md:mt-0 mt-5">
          <h1 className="leading-7 text-black uppercase  sm:text-2xl text-lg sm:mb-0 mb-4 max-md:max-w-full  font-bold">
            The D-day for Brands and Marketing Tech in the World of Influencer
            Marketing is here!
          </h1>
          <time
            className={`mt-7 text-5xl text-white leading-[90px] max-md:text-4xl ${anton.className}`}
            dateTime="2025-04-30"
          >
            30<sup className="text-white">TH</sup> APRIL 2025
          </time>
          <p className="mt-5 text-[#ccff00] uppercase leading-[117%]  sm:mb-0 mb-4  font-bold">
            MUMBAI
          </p>
        </div>
      </div>
    </section>
  );
}

export default Ig;
