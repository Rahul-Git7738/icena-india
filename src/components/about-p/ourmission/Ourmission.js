"use client";

import * as React from "react";
import Marquee from "react-fast-marquee";
import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";

function Ourmisson() {
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
    <section className="flex flex-col items-center  text-center text-black bg-white pt-44">
      <motion.h1
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`text-5xl leading-[61.92px] max-md:text-4xl ${anton.className} `}
      >
        OUR MISSION
      </motion.h1>
      <motion.p
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`mt-20 sm:px-60 px-5 text-2xl font-medium tracking-tighter leading-8 max-md:mt-10 max-md:max-w-full ${work_sans.className} `}
      >
        At The Influence Exchange Confex & Awards, our mission is to build a
        transformative platform that fosters meaningful connections, inspires
        creativity, and celebrates excellence. We aim to bring together
        marketers, influencers, and tech leaders who are shaping the future of
        digital storytelling and innovation. This event is dedicated to
        empowering stakeholders to embrace the ever-evolving landscape of
        influencer marketing while recognizing those leading transformative
        campaigns and initiatives.
      </motion.p>

      <div
        className="overflow-hidden h-[500px]
      relative z-10
      py-20
     
      "
      >
        <div
          style={{ transform: "rotate(-2deg)" }} // Rotate the text by -5 degrees
          className="w-[120%] bg-black relative  left-[-10%] "
        >
          <Marquee
            gradient={false}
            speed={50}
            className="self-stretch mt-32  shadow-2xl min-h-[59px] max-md:mt-10 "
            autoFill
          >
            <h2
              className={`text-4xl text-center text-[#ccff00] ${anton.className} `}
            >
              &nbsp; DUBAI * RIYADH * MUMBAI * DUBAI * RIYADH * MUMBAI * DUBAI *
              DUBAI * RIYADH
            </h2>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Ourmisson;
