import * as React from "react";
import Image from "next/image";
import ok from "../../../../public/ok.jpg";
import headimg from "../../../../public/images/head.png";
import { ephesis, anton, work_sans } from "@/styles/fonts";
import Countdown from "@/components/countdown/Countdown";

function Herosection() {
  const customFutureDateTime = new Date(
    "Wed APRIL 30 2025 01:52:13 GMT+0530 (India Standard Time)"
  );
  const today = new Date(); // Get the current date

  // Calculate the difference in days between today and the custom future date
  const differenceInDays = Math.ceil(
    (customFutureDateTime - today) / (1000 * 60 * 60 * 24)
  );

  // Create a new date object representing the future date
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + differenceInDays);
  return (
    <section
      className="flex overflow-hidden relative z-10 flex-col  w-full text-white   bg-black h-full min-h-[100vh] max-md:max-w-full
    "
    >
      <div
        className="relative pt-[195%] h-full sm:pt-[56.25%] "
        style={{ pointerEvents: "none" }}
      >
        <iframe
          src="https://www.youtube.com/embed/QkMuny-bzcE?autoplay=1&mute=1&loop=1&showinfo=0&controls=0&rel=0&playlist=QkMuny-bzcE"
          title="YouTube video player"
          allowFullScreen
          className="absolute  inset-0 w-full h-full top-0 sm:scale-125 scale-[3.5]"
        ></iframe>
      </div>
      <div
        className={`flex absolute w-full sm:bottom-0 bottom-0 z-40 flex-col px-10 pt-20 pb-12 mt-48 max-md:px-5 max-md:mt-10 max-md:max-w-full 
      
         ${anton.className} `}
        style={{
          background: "linear-gradient(0deg, #000, transparent)",
        }}
      >
        <div className="flex sm:gap-5 gap-0 relative z-50 items-end mt-44 text-4xl max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto mt-6 leading-[250%] sm:text-left text-center">
            5<sup className="text-white">th</sup> EDITION
          </div>
          <div
            className={`flex-auto self-stretch sm:mb-14 mb-5 text-7xl text-center text-[#ccff00] max-md:max-w-full max-md:text-4xl ${ephesis.className}`}
          >
            {" "}
            <Countdown futureDate={futureDate} />
            Mumbai
          </div>
          <div className="flex-auto sm:mt-6  mt-0 leading-[250%] sm:text-right text-center">
            30<sup className="text-white">th</sup> APRIL 2025
          </div>
        </div>
        {/* <h1 className="mt-5 text-8xl text-center leading-[89.68px] max-md:max-w-full max-md:text-4xl font-anton">
          INFLUENCE EXCHANGE CONFEX AND AWARDS
        </h1> */}
        <svg viewBox="0 0 297 18" className="w-[100%]">
          <text x="0" y="15" fill="#ffffff" className="text-white">
            INFLUENCE EXCHANGE CONFEX AND AWARDS SERIES
          </text>
        </svg>

        <div className="bg-[#ccff00] py-1 px-2 mt-5">
          <svg
            viewBox="0 0 790 20"
            className={`w-[100%] ${work_sans.className} font-light  `}
          >
            <text
              x="0"
              y="16"
              fill="#000000"
              className="text-black font-semibold tracking-tighter  "
            >
              THE ULTIMATE DESTINATION FOR BRANDS IN THE WORLD OF ADTECH,
              MARTECH & INFLUENCER MARKETING
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
