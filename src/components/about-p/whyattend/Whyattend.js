"use client";
import * as React from "react";
import { useState } from "react";

import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import networking from "../../../../public/images/aboutnew/networking.jpg";
import insights from "../../../../public/images/aboutnew/insights.jpg";
import buiness from "../../../../public/images/aboutnew/business.jpg";
import exclusive from "../../../../public/images/aboutnew/exclusive.jpg";

function Whyattend() {
  const cardData = [
    // Add more card data objects here as needed

    {
      title: "Discover Cutting-Edge Strategies",
      imageUrl: insights,
      text: "Gain exclusive insights into the latest marketing tools, techniques, and technologies to craft impactful campaigns and maximize your ROI.",
    },
    {
      title: "Stay Ahead of the Curve",
      imageUrl: exclusive,
      text: "Learn from industry leaders about emerging trends and groundbreaking approaches to elevate your marketing game.",
    },
    {
      title: "Drive Measurable Success",
      imageUrl: buiness,
      text: "Explore proven case studies that demonstrate how brands are achieving exceptional results through influencer collaborations and advanced technologies.",
    },

    {
      title: "Forge Meaningful Collaborations",
      imageUrl: networking,
      text: "Connect with top brands and agencies seeking authentic storytellers who can drive engagement and inspire audiences.",
    },
    {
      title: "Expand Your Influence",
      imageUrl: insights,
      text: "Learn expert techniques to grow your audience, refine your content strategy, and strengthen your personal brand.",
    },
    {
      title: "Unlock New Opportunities",
      imageUrl: exclusive,
      text: "Access exclusive brand partnerships, mentorships, and monetization strategies to elevate your career to new heights.",
    },
    {
      title: "Showcase Your Breakthroughs",
      imageUrl: buiness,
      text: "Present your MarTech and AdTech solutions to a room filled with decision-makers, brands, and agencies eager for innovation.",
    },
    {
      title: "Shape the Future of Marketing",
      imageUrl: insights,
      text: "Demonstrate how your tools can transform campaigns, enhance analytics, and drive results in a rapidly evolving digital landscape.",
    },
    {
      title: "Engage Industry Leaders",
      imageUrl: networking,
      text: "Build connections with CMOs, marketing heads, and influencers seeking transformative tech solutions.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  const fadeInUp = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.41,
      },
    },
  };

  return (
    <div
      className={`flex flex-col items-center sm:px-10 px-5 sm:py-20 py-5 bg-white ${work_sans.className} `}
    >
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`text-5xl text-center text-black uppercase leading-[61.92px] max-md:text-4xl ${anton.className} `}
      >
        WHY ATTEND?
      </motion.div>
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="self-stretch mt-20 w-full sm:text-4xl text-xl italic font-bold tracking-tighter leading-7 text-center text-black uppercase max-md:mt-10 max-md:max-w-full  "
      >
        <span className="font-semibold  italic">
          INDIA, WE ARE BRINGING TOGETHER OVER{" "}
        </span>
        <span className="font-semibold italic text-[#51B6FF]">
          100+ Marketers
        </span>
        <span className="font-semibold italic"> & </span>
        <span className="font-semibold italic text-[#51B6FF]">
          100+ Influencers!
        </span>
      </motion.div>
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-11 text-2xl sm:px-10 px-0 mb-28 font-medium tracking-tighter leading-8 text-center text-black max-md:mt-10 max-md:max-w-full"
      >
        The 5th Edition of The Influence Exchange Confex & Awards 2025 is more
        than an event—it’s a platform for unlocking opportunities, accelerating
        growth, and staying ahead in the fast-paced world of Influencer
        Marketing, MarTech, and AdTech. Whether you're a brand marketer, content
        creator, agency professional, or tech innovator, this is your chance to
        connect, innovate, and thrive. Here’s why you simply can’t miss it:
      </motion.div>
      {/* Render each card dynamically */}
      <div className="self-stretch mt-2 w-full max-md:max-w-full">
        <div className="flex gap-y-5 sm:px-[5%] px-[0%] gap-x-[6%] flex-wrap max-md:gap-0 ">
          <div className="grid grid-cols-2 gap-8 md:px-4 md:py-12 mx-auto max-w-7xl py-0 px-0 max-md:grid-cols-1">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                initial={offscreen}
                whileInView={onscreen}
                viewport={{ once: true, amount: 0.3 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`transform transition-all duration-300  ${
                  hoveredIndex === index ? "scale-[1.02]" : ""
                }`}
              >
                <div
                  className=" bg-white mis group hover:bg-black transition-all duration-500 hover:text-white text-wrap  rounded-3xl overflow-hidden h-full shadow-md"
                  style={{
                    boxShadow: " 0px 0px 30px 0 rgba(81, 182, 255, 0.3)",
                  }}
                >
                  {/* Card Header */}
                  <div className="p-8 md:p-10">
                    <h2
                      className={`text-7xl max-md:text-4xl font-bold text-[#51B6FF] tracking-tight leading-tight
                    ${anton.className}
                    uppercase   w-full   group-hover:text-[#ccff00]
                    `}
                    >
                      {card.title}
                    </h2>
                  </div>

                  {/* Card Image */}
                  <div className="relative px-4">
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        src={card.imageUrl}
                        alt={card.title}
                        width={600}
                        height={300}
                        className="w-full  object-cover h-[300px]  transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
                      />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 md:p-10">
                    <p className=" text-neutral-950 text-xl  font-medium group-hover:text-white leading-7">
                      {card.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyattend;
