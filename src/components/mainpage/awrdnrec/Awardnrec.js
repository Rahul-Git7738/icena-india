"use client";

import React from "react";
import Image from "next/image";

import ok from "../../../../public/ok.jpg";
import aw1 from "../../../../public/img/india/1.jpg";
import aw2 from "../../../../public/img/india/2.jpg";
import aw3 from "../../../../public/img/india/3.jpg";
import aw4 from "../../../../public/img/india/5.jpg";
import aw5 from "../../../../public/img/india/4.jpg";

import { anton, work_sans } from "@/styles/fonts";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";
const Awardnrec = () => {
  const offscreen = {
    x: -100,
    opacity: 0,
  };
  const onscreen = {
    x: 0,
    opacity: 1,

    transition: {
      delay: 0.1,
      duration: 0.41,
    },
  };

  const offscreen2 = {
    x: 100,
    opacity: 0,
  };

  const onscreen2 = {
    x: 0,
    opacity: 1,

    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  };

  const offscreen3 = {
    y: 100,
    opacity: 0,
  };

  const onscreen3 = {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.8,
      duration: 0.4,
    },
  };

  return (
    <div
      className="flex flex-col bg-black px-20 py-20 w-full  max-md:px-5 max-md:max-w-full"
      // style={{
      //   background:
      //     "linear-gradient(192deg, rgba(255, 255, 255, 0.15) 0%, rgba(81, 182, 255, 0.15) 14.5%, rgba(81, 182, 255, 0.15) 76%, rgba(255, 255, 255, 0.15) 100%)",
      // }}
    >
      <motion.div
        className={`self-center mt-20 text-6xl text-center text-white leading-[62.08px] max-md:mt-10 max-md:max-w-full max-md:text-4xl  ${anton.className} `}
      >
        AWARDS AND RECOGNITION
      </motion.div>
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-28 mb-12 max-md:my-10 max-md:max-w-full linear-1   sm:block hidden    "
      >
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <motion.div
            initial={offscreen}
            whileInView={onscreen}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full "
          >
            <Image
              loading="lazy"
              src={aw1}
              className=" max-w-full size-full   object-cover h-[100%]  w-[100%] max-md:mt-3 "
              alt=""
            />
          </motion.div>
          <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-3 max-md:max-w-full">
              <motion.div
                initial={offscreen2}
                whileInView={onscreen2}
                viewport={{ once: true, amount: 0.3 }}
                className="max-md:max-w-full "
              >
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col grow pt-6 shadow-2xl aspect-[1.01] max-md:mt-3">
                      <Image
                        loading="lazy"
                        src={aw2}
                        className=" object-cover absolute inset-0 size-full w-[100%]  "
                        fill
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col grow justify-center text-2xl font-medium tracking-tighter leading-7 text-white  aspect-[1.01] max-md:mt-3">
                      <Image
                        loading="lazy"
                        src={ok}
                        className="object-cover absolute inset-0 size-full w-[100%]"
                        fill
                        alt=""
                      />
                      <div
                        className={`relative justify-center flex items-center px-8 aspect-square bg-black bg-opacity-40 rounded-[32px] max-md:px-5  ${work_sans.className} `}
                      >
                        Celebrate excellence with us as we honor outstanding
                        contributions across various domains.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-1 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col grow pt-6 aspect-[1.02] max-md:mt-3">
                      <Image
                        loading="lazy"
                        src={aw3}
                        className="object-cover absolute inset-0 size-fullw-[100%] "
                        fill
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={offscreen3}
                whileInView={onscreen3}
                viewport={{ once: true, amount: 0.3 }}
                className="mt-3.5 max-md:max-w-full"
              >
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col grow justify-center py-0.5  min-h-[287px] max-md:mt-3 max-md:max-w-full">
                      <Image
                        loading="lazy"
                        src={aw5}
                        className="object-cover absolute inset-0 size-full w-[100%]"
                        fill
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col  w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col grow pt-5  aspect-[1.02] max-md:mt-3">
                      <Image
                        loading="lazy"
                        src={aw4}
                        className="object-cover absolute inset-0 size-full w-[100%]"
                        fill
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-28 mb-12 max-md:my-10 max-md:max-w-full linear-1   sm:hidden block    ">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full ">
            <Image
              loading="lazy"
              src={aw1}
              className=" max-w-full size-full   object-cover h-[100%]  w-[100%] max-md:mt-3 "
              alt=""
            />
          </div>
          <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-3 max-md:max-w-full">
              <div className="max-md:max-w-full ">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col grow pt-6 shadow-2xl aspect-[1.01] max-md:mt-3">
                      <Image
                        loading="lazy"
                        src={aw2}
                        className=" absolute inset-0 size-full w-[100%]  "
                        fill
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col grow justify-center text-2xl font-medium tracking-tighter leading-7 text-white  aspect-[1.01] max-md:mt-3">
                      <Image
                        loading="lazy"
                        src={ok}
                        className="object-cover absolute inset-0 size-full w-[100%]"
                        fill
                        alt=""
                      />
                      <div
                        className={`relative justify-center flex items-center px-8 aspect-square bg-black bg-opacity-40 rounded-[32px] max-md:px-5  ${work_sans.className} `}
                      >
                        Celebrate excellence with us as we honor outstanding
                        contributions across various domains.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-1 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col grow pt-6 aspect-[1.02] max-md:mt-3">
                      <Image
                        loading="lazy"
                        src={aw3}
                        className="object-cover absolute inset-0 size-fullw-[100%] "
                        fill
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3.5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col grow justify-center py-0.5  min-h-[287px] max-md:mt-3 max-md:max-w-full">
                      <Image
                        loading="lazy"
                        src={aw5}
                        className="object-cover absolute inset-0 size-full w-[100%]"
                        fill
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col  w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col grow pt-5  aspect-[1.02] max-md:mt-3">
                      <Image
                        loading="lazy"
                        src={aw4}
                        className="object-cover absolute inset-0 size-full w-[100%]"
                        fill
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <motion.div
        initial={offscreen3}
        whileInView={onscreen3}
        viewport={{ once: true, amount: 0.3 }}
        className="flex w-full justify-center mt-[100px]"
      >
        <Button href="/awards" color="black" img="trophy">
          Nominate
        </Button>
      </motion.div> */}
    </div>
  );
};

export default Awardnrec;
