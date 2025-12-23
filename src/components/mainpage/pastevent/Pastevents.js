"use client";
import * as React from "react";
import Image from "next/image";
import ok from "../../../../public/ok.jpg";
import img1 from "../../../../public/images/Intersect.png";
import img2 from "../../../../public/images/Intersect2.png";
import img3 from "../../../../public/images/Intersect3.png";
import img4 from "../../../../public/images/indonesia.jpg";
import logo from "../../../../public/images/bg-logo.png";
import { anton, work_sans } from "@/styles/fonts";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

function Pastevents() {
  const offscreen = {
    y: 100,
    opacity: 0,
  };
  const onscreen = {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.1,
      duration: 0.3,
    },
  };
  const onscreen2 = {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.4,
      duration: 0.3,
    },
  };

  const onscreen3 = {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.8,
      duration: 0.3,
    },
  };

  const imganimation = {
    bottom: "20%",
    transition: {
      delay: 0.1,
      duration: 0.8,
    },
  };

  const imganimation2 = {
    bottom: "20%",
    transition: {
      delay: 0.4,
      duration: 0.8,
    },
  };

  const imganimation3 = {
    bottom: "20%",
    transition: {
      delay: 0.8,
      duration: 0.8,
    },
  };

  const maskImageStyle = {
    maskImage:
      "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
  };
  return (
    <div
      className={`self-stretch sm:pt-56 p-32  bg-black max-md:max-w-full sm:px-20 px-5 ${anton.className} `}
    >
      <motion.h1
        initial={offscreen} // Initial state
        whileInView={onscreen} // Target state when in view
        viewport={{ once: true, amount: 0.3 }} // Detect when element enters viewport
        className={`text-7xl text-center uppercase mb-20 text-white `}
      >
        Upcoming events
      </motion.h1>

      <div className="flex gap-[5%] max-md:flex-col max-md:gap-0">
        <motion.div
          initial={offscreen} // Initial state
          whileInView={onscreen} // Target state when in view
          viewport={{ once: true, amount: 0.3 }} // Detect when element enters viewport
          className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
        >
          <div className="flex flex-col grow pt-9 w-full text-black h-[300px] bg-white rounded-[32px] max-md:mt-10">
            <div className="flex flex-col self-start ml-9 max-md:ml-2.5">
              <h1 className="text-4xl ">MUMBAI</h1>
              <h2
                className={`mt-5 text-2xl tracking-tighter  ${work_sans.className} `}
              >
                30<sup>th</sup> APRIL 2025{" "}
              </h2>
            </div>
          </div>
          <motion.div
            initial={{ bottom: "40%" }} // Initial state
            whileInView={imganimation2} // Target state when in view
            viewport={{ once: true, amount: 0.3 }} // Detect when element enters viewport
            className="relative bottom-[20%]  sm:top-auto -top-40"
          >
            <Image
              loading="lazy"
              src={img2}
              className="z-10  w-full  rounded-[42px]  bg-cover bg-no-repeat bg-lightgray "
              style={{
                backgroundImage: `url(${require("../../../../public/ok.jpg")})`,
                boxShadow: "0 -6px 24px 0 rgba(0, 0, 0, 0.15)",
              }}
              alt=""
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={offscreen} // Initial state
          whileInView={onscreen2} // Target state when in view
          viewport={{ once: true, amount: 0.3 }} // Detect when element enters viewport
          className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
        >
          <div className="flex flex-col grow pt-9 w-full text-black h-[300px] bg-white rounded-[32px] max-md:mt-10">
            <div className="flex flex-col self-start ml-9 max-md:ml-2.5">
              <h1 className="text-4xl ">DUBAI</h1>
              <h2
                className={`mt-5 text-2xl tracking-tighter  ${work_sans.className} `}
              >
                19<sup>th</sup> September 2025
              </h2>
            </div>
          </div>
          <motion.div
            initial={{ bottom: "40%" }} // Initial state
            whileInView={imganimation} // Target state when in view
            viewport={{ once: true, amount: 0.3 }} // Detect when element enters viewport
            className="relative bottom-[20%]  sm:top-auto -top-40"
          >
            <Image
              loading="lazy"
              src={img1}
              className="z-10  w-full  rounded-[42px]  bg-cover bg-no-repeat bg-lightgray "
              style={{
                backgroundImage: `url(${require("../../../../public/ok.jpg")})`,
                boxShadow: "0 -6px 24px 0 rgba(0, 0, 0, 0.15)",
              }}
              alt=""
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={offscreen} // Initial state
          whileInView={onscreen3} // Target state when in view
          viewport={{ once: true, amount: 0.3 }} // Detect when element enters viewport
          className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
        >
          <div className="flex flex-col grow pt-9 w-full text-black h-[300px] bg-white rounded-[32px] max-md:mt-10">
            <div className="flex flex-col self-start ml-9 max-md:ml-2.5">
              <h1 className="text-4xl uppercase"> Indonesia </h1>
              <h2
                className={`mt-5 text-2xl tracking-tighter  ${work_sans.className} `}
              >
                15<sup>th</sup> November 2025
              </h2>
            </div>
          </div>
          <motion.div
            initial={{ bottom: "40%" }} // Initial state
            whileInView={imganimation3} // Target state when in view
            viewport={{ once: true, amount: 0.3 }} // Detect when element enters viewport
            className="relative bottom-[20%]  sm:top-auto -top-40"
          >
            <Image
              loading="lazy"
              src={img4}
              className="z-10  w-full  rounded-[42px]  bg-cover bg-no-repeat bg-lightgray "
              style={{
                backgroundImage: `url(${require("../../../../public/ok.jpg")})`,
                boxShadow: "0 -6px 24px 0 rgba(0, 0, 0, 0.15)",
              }}
              alt=""
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-0  max-md:max-w-full ">
        <Marquee
          direction="left"
          gradient={false}
          speed={60}
          className="mt-10 z-10 text-[36px] w-full  sm:h-[500px] h-[200px]  "
          autoFill={true}
          style={{ ...maskImageStyle }}
        >
          <Image
            src={logo}
            alt="Hero image"
            className=" shadow-2xl bg-cover sm:w-auto w-1/2 bg-no-repeat bg-lightgray relative z-10 mx-40  "
            width="auto"
            height="auto"
          />
        </Marquee>

        <h1
          className="text-8xl text-center uppercase z-[12] max-md:text-4xl  text-[#ccff00] w-[100%] top-[50%] absolute"
          style={{ textShadow: "0 44px 44px rgba(0, 0, 0, 0.85) " }}
        >
          <span className="text-orange-500 ">IN</span>
          <span className="text-white ">D</span>
          <span className="text-green-700">IA</span>, are you ready?
        </h1>
      </div>
    </div>
  );
}

export default Pastevents;
