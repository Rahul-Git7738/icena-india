"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { anton } from "@/styles/fonts";
import headimg from "../../../public/images/head/about-hero.jpg";
import awards from "../../../public/images/head/awards-hero.jpg";
import sponsors from "../../../public/images/head/sponsors-hero.jpg";
import speakers from "../../../public/images/head/speakers-hero.jpg";
import register from "../../../public/images/head/register-hero.jpg";
import register2 from "../../../public/images/head/register.png";
import votee from "../../../public/images/head/votingend.jpg";
import voteb from "../../../public/images/head/voteb.png";
import votemob from "../../../public/images/head/votemob.jpg";
import vote2 from "../../../public/images/head/vote2.png";
import votingbanner from "../../../public/images/head/voteingbanner.jpg";
import Image from "next/image";

function Headtop({ head, opacity }) {
  // is mobile view?

  // State to determine if it's mobile view
  const [ismobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    // Check window availability and add event listener
    if (typeof window !== "undefined") {
      setIsMobileView(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
    }

    // Clean up event listener
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);
  const lower = head.toLowerCase();
  let url = headimg;

  if (lower === "awards") {
    url = awards;
  }
  if (lower === "sponsors") {
    url = sponsors;
  }
  if (lower === "speakers") {
    url = speakers;
  }
  if (lower === "register") {
    url = register;
  }
  if (lower === "voting") {
    url = ismobileView ? votemob : votee;
    // url = vote2;
    // url = votingbanner;
  }
  if (lower === "event registration") {
    url = register2;
  }
  if (lower === "vote for me") {
    url = voteb;
  }
  return (
    <main className="flex overflow-hidden relative flex-col pt-20 text-9xl text-center md:h-[80vh] h-[40vh] md:min-h-[574px] text-white">
      <Image
        loading="lazy"
        src={url}
        className={`object-cover  absolute inset-0 w-full h-full  object-${
          lower === "event registration" ? "top" : "center"
        }  `}
        alt={head}
        width={1920}
        height={2080}
      />
      <h1
        className={`relative z-50  top-[40%]  -translate-y-1/2 sm:top-1/2 md:mt-0 mt-0 w-full max-md:max-w-full text-6xl md:text-9xl uppercase  ${
          anton.className
        }
        ${opacity ? "opacity-0" : "opacity-100"}
        
         `}
        style={{ textShadow: "0 44px 44px rgba(0, 0, 0, 0.85)" }}
      >
        {head}
      </h1>
      <section
        className="absolute bottom-0 w-full md:min-h-[25%] h-[50%] max-md:min-h-auto"
        style={{
          background: "linear-gradient(0deg, #000, transparent)",
        }}
      />
    </main>
  );
}

export default Headtop;
