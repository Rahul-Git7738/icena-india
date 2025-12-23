"use client";
import * as React from "react";
import Marquee from "react-fast-marquee";
import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";
import engaging from "../../../../public/images/aboutnew/engaging.jpg";
import curated from "../../../../public/images/aboutnew/curated.jpg";
import future from "../../../../public/images/about/future.jpg";
import top from "../../../../public/images/aboutnew/top.jpg";

import Image from "next/image";
function Whattoexpect() {
  // Sample data for cards
  const cardData = [
    {
      title: "Inspiring Interactions",
      imgUrl: engaging,
      description:
        "Dive into a dynamic environment where marketers and influencers come together to exchange ideas, spark collaborations, and explore business opportunities that extend far beyond the event.",
    },
    {
      title: "Expert-Led Program",
      imgUrl: curated,
      description:
        "Engage with a meticulously curated agenda featuring keynote sessions, dynamic panel discussions, hands-on workshops, and immersive networking opportunities. Every moment is designed to deliver impactful content and foster meaningful connections.",
    },
    {
      title: "Cutting-Edge Insights",
      imgUrl: top,
      description:
        "Gain exclusive knowledge from leading influencers, marketers, and innovators, offering fresh perspectives on navigating the rapidly evolving landscape of influencer marketing, MarTech, and AdTech.",
    },
    {
      title: "The Future of Marketing",
      imgUrl: future,
      description:
        "Stay ahead with insights into the latest trends, emerging technologies, and transformative strategies shaping the future of marketing and influencer collaboration.",
    },
    {
      title: "Opportunities for All",
      imgUrl: engaging,
      description:
        "Whether you're a marketer exploring creative strategies or an influencer seeking authentic brand partnerships, this platform opens doors to new possibilities, helping you build relationships that drive success.",
    },
    {
      title: "Industry Expertise",
      imgUrl: top,
      description:
        "Learn from the best in the business as experts share actionable strategies, practical knowledge, and real-world case studies to unlock the full potential of your influencer marketing campaigns.",
    },
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
    <div className="flex flex-col items-center  bg-white">
      <div className={`${anton.className} w-full`}>
        <h1 className="uppercase text-5xl relative z-10 text-center text-black leading-[62.4px] max-md:text-4xl max-md:leading-7 max-md:max-w-full max-md:mt-10 max-md:mb-5  top-[132px]">
          What to expect
        </h1>
        <Marquee
          gradient={false}
          speed={50}
          autoFill
          className="self-stretch w-full h-[200px] text-8xl text-center leading-[62.4px] text-black text-opacity-10 max-md:max-w-full "
        >
          <h2> &nbsp; EXPECT EVERYTHING UNEXPECTED!</h2>
        </Marquee>
      </div>

      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`mt-10 text-2xl  sm:px-20 px-5 font-medium tracking-tighter leading-8 text-center text-black max-md:mt-10 max-md:max-w-full ${work_sans.className} `}
      >
        The Influence Exchange Confex & Awards in India is set to be an
        extraordinary experience, blending inspiration, learning, and
        celebration in the dynamic realm of influencer marketing. This event
        promises to deliver invaluable perspectives, actionable insights, and
        unmatched opportunities to propel your marketing and influencer
        collaborations to new heights.
      </motion.div>

      <div className="w-full max-md:mt-10 max-md:max-w-full sm:p-20 p-5">
        <div className="grid grid-cols-2 gap-[4%] rounded-[36px] max-md:gap-0 max-md:grid-cols-1">
          {cardData.map((card, index) => (
            <motion.div
              initial={offscreen}
              whileInView={onscreen}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className="flex flex-col w-full h-full max-md:ml-0 max-md:w-full py-5 group"
              style={{ display: "flex" }}
            >
              <div
                className="flex overflow-hidden relative flex-col pt-20 max-md:mt-10 max-md:max-w-full h-full rounded-[36px]"
                style={{ flex: 1 }}
              >
                <Image
                  loading="lazy"
                  src={card.imgUrl}
                  alt={card.title}
                  className="object-cover absolute inset-0 size-full group-hover:scale-105 transition-transform duration-300 ease-in-out rounded-[36px]"
                />
                <div
                  className="flex relative flex-col overflow-hidden px-6 pt-20 pb-8 mt-40 rounded-[36px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                    flex: 1,
                  }}
                >
                  <div
                    className={`mt-12 text-5xl text-[#ccff00] uppercase leading-[62px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[58px] ${anton.className}`}
                  >
                    {card.title}
                  </div>
                  <div
                    className={`mt-6 sm:text-2xl text-lg font-medium tracking-tighter leading-7 text-white max-md:max-w-full ${work_sans.className}`}
                  >
                    {card.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Whattoexpect;
