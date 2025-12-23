"use client";
import * as React from "react";
import { anton, work_sans } from "@/styles/fonts";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import uae_startupnews from "../../../../public/images/sponsors/startupnews.png";
import uae_globalhues from "../../../../public/images/sponsors/global-hues.png";
import cyberdefence from "../../../../public/images/sponsors/cyberdefence.png";
import uae_gazet from "../../../../public/images/sponsors/gazet-international.png";
import uae_utoday from "../../../../public/images/sponsors/utoday.png";
import uae_mideastinfo from "../../../../public/images/sponsors/mid.png";

function Mediapartners() {
  // Define data for sponsors
  const sponsors = [
    {
      name: "Cyber defense Magazine",
      description:
        "Cyber Defense Magazine is by ethical, honest, passionate information security professionals for IT Security professionals.",
      imageUrl: "/images/sponsors/cyberdefence-og.png",
      logoUrl: cyberdefence,
      link: "https://www.cyberdefensemagazine.com/",
    },
    {
      name: "Startupnews.fyi",
      description:
        "Startupnews.fyi is a media platform dedicated to providing the latest news, insights, and resources for the startup community. They focus on delivering timely updates, industry trends, and expert opinions to support entrepreneurs, investors, and innovators. As a media partner, Startup.fyi offers valuable exposure and thought leadership within the startup ecosystem.",
      imageUrl: "/images/sponsors/og/startupnews.png",
      logoUrl: uae_startupnews,
      link: "https://startupnews.fyi/",
    },
    {
      name: "Mid East Info",
      description:
        "Mid-east.info is a leading business news and information publisher that covers the greater Middle East region. Since 2012, we have been providing daily updates on news, articles, reports, and other forms of content for professionals interested in doing business in the Middle East. Our goal is to offer instant business updates, market data, tips, reports, and analysis to help business professionals stay informed about the MENA region.",
      imageUrl: "/images/sponsors/og/mid.png",
      logoUrl: uae_mideastinfo,
      link: "https://mid-east.info/",
    },
    {
      name: "Gazet International",
      description:
        "Gazet International is a global entity that aims to become the leading destination for the latest and most in-depth news from diverse industries worldwide. With a steadfast commitment to delivering accurate, up-to-the-minute information, we have established ourselves as a trusted source for all things related to business, technology, finance, banking, and corporate affairs. Our mission is to empower readers with the knowledge they need to navigate the rapidly evolving global landscape.",
      imageUrl: "/images/sponsors/og/2.png",
      logoUrl: uae_gazet,
      link: "https://gazetinternational.com/",
    },
    {
      name: "The Global Hues",
      description:
        "The Global Hues is a leading media platform focused on delivering engaging and insightful content across various industries. They specialize in offering comprehensive news, trends, and analysis, providing valuable perspectives and information to a global audience.",
      imageUrl: "/images/sponsors/og/global-hues.png",
      logoUrl: uae_globalhues,
      link: "https://www.theglobalhues.com/",
    },
    {
      name: "U. Today",
      description:
        "U. Today is a leading cryptocurrency and blockchain media outlet launched in 2017, covering trends in Web3, crypto, blockchain, and AI. With a global team, it provides a range of content including news, guides, reviews, and price forecasts to its three million readers.",
      imageUrl: "/images/sponsors/og/utoday.png",
      logoUrl: uae_utoday,
      link: "https://u.today/",
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
    <div
      className={`flex flex-col items-center sm:p-20 p-5 sm:pt-[50px] bg-white ${work_sans.className}`}
    >
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`text-5xl text-center text-black leading-[61.92px] max-md:text-4xl ${anton.className} `}
      >
        MEDIA PARTNERS
      </motion.div>

      <div className="self-stretch mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-[3%] gap-y-14 flex-wrap  max-md:flex-col max-md:gap-0">
          {/* Map over sponsors array and render sponsor cards dynamically */}
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-wrap w-[31%] max-md:ml-0 max-md:w-full"
            >
              <div
                className="flex flex-col grow pb-11 w-full text-2xl tracking-tighter 
              group
               leading-6 text-white bg-black rounded-[36px] max-md:mt-6"
              >
                <div className="overflow-hidden rounded-t-[36px]">
                  <img
                    loading="lazy"
                    src={sponsor.imageUrl}
                    className="w-full aspect-[2.38] group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <motion.div
                  initial={offscreen}
                  whileInView={onscreen}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex flex-col px-11 mt-7 max-md:px-5"
                >
                  <div className=" font-bold text-[#ccff00]">
                    {sponsor.name}
                  </div>
                  <div className="mt-6 text-sm tracking-tight leading-5">
                    {sponsor.description}
                  </div>
                  <a href={sponsor.link} target="_blank">
                    <img
                      loading="lazy"
                      src={sponsor.logoUrl.src}
                      alt={sponsor.name}
                      className="mt-20 max-w-full aspect-[2.13] w-[114px] max-md:mt-10"
                    />
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-20">
        <Button href="./register" color="green" img="arrow">
          BECOME A PARTNER
        </Button>
      </div>
    </div>
  );
}

export default Mediapartners;
