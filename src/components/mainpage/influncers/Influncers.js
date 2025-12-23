"use client";
import React from "react";
import Image from "next/image";
import ok from "../../../../public/ok.jpg";
import ppl from "../../../../public/images/ppl3.jpg";
import { anton } from "@/styles/fonts";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

function Influncers() {
  const offscreen = {
    y: 100,
    opacity: 0,
  };
  const onscreen = {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  };
  const offscreen2 = {
    y: 100,
    opacity: 0,
    top: "1.25rem",
  };
  const onscreen2 = {
    y: 0,
    opacity: 1,
    top: "0rem",

    transition: {
      delay: 0.8,
      duration: 0.4,
    },
  };
  return (
    <div className={`sm:pt-40 pt-0 bg-black ${anton.className} `}>
      <motion.h1
        initial={offscreen2}
        whileInView={onscreen2}
        viewport={{ once: true, amount: 1 }}
        className="text-7xl text-center uppercase leading-[89.7px] text-white text-opacity-90 max-md:text-4xl relative top-0 z-0 "
      >
        The Forces of Influence are with you!
      </motion.h1>
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center mt-10"
      >
        <Image
          style={{
            boxShadow: "0 -22px 70px 0 rgba(0, 0, 0, 0.7)",
          }}
          loading="lazy"
          src={ppl}
          alt="Hero image"
          className=" shadow-2xl w-full sm:rounded-t-[200px] rounded-t-[50px] bg-cover bg-no-repeat bg-lightgray relative z-10"
          height="auto"
        />
      </motion.div>
      <Marquee
        pauseOnHover
        direction="right"
        gradient={false}
        speed={40}
        className=" z-10  text-[36px] w-full text-white "
        autoFill={true}
        style={{ height: "80px" }}
      >
        &nbsp; DUBAI * RIYADH * MUMBAI * INDONESIA * DUBAI * RIYADH * MUMBAI *
        INODNESIA * DUBAI * RIYADH * MUMBAI * INODNESIA *
      </Marquee>
      <Marquee
        pauseOnHover
        direction="left"
        gradient={false}
        speed={40}
        className=" z-10  text-[36px] w-full  "
        autoFill={true}
        style={{ height: "80px", color: "#CCFF00" }}
      >
        &nbsp; REGISTER - REGISTER - REGISTER - REGISTER - REGISTER - REGISTER -
        REGISTER -
      </Marquee>
    </div>
  );
}

export default Influncers;
