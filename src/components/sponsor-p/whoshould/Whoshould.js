"use client";
import * as React from "react";
import { work_sans, anton } from "@/styles/fonts";
import { motion } from "framer-motion";
import img1 from "../../../../public/images/sponsors/1.jpg";
import img2 from "../../../../public/images/sponsors/2.jpg";
import img3 from "../../../../public/images/sponsors/3.jpg";
import img4 from "../../../../public/images/sponsors/4.jpg";
import img5 from "../../../../public/images/sponsors/5.jpg";
import img6 from "../../../../public/images/sponsors/6.jpg";
import img7 from "../../../../public/images/sponsors/7.jpg";
import img8 from "../../../../public/images/sponsors/8.jpg";
import Image from "next/image";

function Whoshould() {
  // Define an array of objects representing each card's data
  const cardData = [
    {
      imageUrl: img1,
      title: "SOCIAL MEDIA PLATFORMS",
      description:
        "Social media platforms are used by influencers to reach the target audiences.",
    },
    {
      imageUrl: img2,
      title: "INFLUENCER MARKETING AGENCIES ",
      description:
        "They act as the intermediaries in the influencer marketing process.",
    },
    {
      imageUrl: img3,
      title: "TECH AND DATA ANALYTICS PLATFORMS",
      description:
        "Provides full life cycle of influencer marketing campaigns.",
    },
    {
      imageUrl: img4,
      title: "E-COMMERCE PLATFORMS",
      description:
        "Influencers drive traffic to the e-commerce websites and influence purchasing decisions.",
    },
    {
      imageUrl: img5,
      title: "INFLUENCER MARKETING SOFTWARE PLATFORMS ",
      description:
        "They offer platforms to brands for collaboration with influencers.",
    },
    {
      imageUrl: img6,
      title: "DIGITAL MEDIA COMPANIES",
      description:
        "They provide content and distribution channels for influencer campaigns and help track results.",
    },
    {
      imageUrl: img7,
      title: "DIGITAL MARKETING PLATFORMS",
      description:
        "The platform provides brand awareness across various channels like web search engines, content and email marketing and provides measurable and transparent results.",
    },
    {
      imageUrl: img8,
      title: "MARKETING AUTOMATION PLATFORMS",
      description:
        "They provide tools to identify prospective clients that are most likely to convert and help marketers to automate the campaigns and track results.",
    },
    // Add more card data as needed
  ];

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
    <div className="flex flex-col pt-28 pb-28 bg-black">
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`self-center text-5xl text-center text-white leading-[61.92px] max-md:max-w-full max-md:text-4xl ${anton.className}`}
      >
        WHO SHOULD SPONSOR?
      </motion.div>
      <div className="flex flex-col px-20 mt-28 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="px-px max-md:max-w-full">
          <div
            className={`flex flex-wrap max-md:flex-col gap-[5%] max-md:gap-0 ${work_sans.className} `}
          >
            {/* Map over the cardData array to render each card dynamically */}
            {cardData.map((card, index) => (
              <motion.div
                initial={offscreen}
                whileInView={onscreen}
                viewport={{ once: true, amount: 0.3 }}
                key={index}
                className="flex flex-col w-[30%] max-md:ml-0 my-10 max-md:w-full"
              >
                <div className="flex flex-col max-md:mt-10 group">
                  <div className="overflow-hidden rounded-[42px]">
                    <Image
                      loading="lazy"
                      src={card.imageUrl}
                      className="w-full object-cover h-[400px] group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </div>
                  <div
                    className={`shrink-0 my-12 h-px  max-md:my-10 
                  
                  ${index % 3 === 1 ? "bg-[#ccff00]" : "bg-white"}
                  `}
                  />
                </div>
                <div className="text-xl font-medium tracking-tighter leading-7 text-white flex flex-col justify-between max-md:mt-10">
                  <span className="text-3xl font-bold text-[#ccff00] uppercase">
                    {card.title}
                  </span>
                  <br />
                  <br />
                  {card.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whoshould;
