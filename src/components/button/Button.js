// Button.js
import React from "react";
import Link from "next/link";
import { work_sans } from "@/styles/fonts";
import Image from "next/image";
import arrow from "../../../public/arrow.svg";
import mic from "../../../public/mic.svg";
import trophy from "../../../public/trophy.svg";

const Button = ({ href, children, color, img }) => {
  return (
    <Link
      href={href}
      className={`button_main ${color}_main flex justify-center align-middle rounded-[40px] ${work_sans.className} font-medium  ${color}_img group      tracking-tighter text-2xl  leading-[90px]    `}
    >
      <span>
        {children}

        <Image
          className={`ml-2 transition-all duration-800 ease  
          
          ${
            img === "arrow" || img === "mic" || img === "trophy"
              ? `filter invert group-hover:invert-0`
              : ""
          }
    `}
          src={img === "mic" ? mic : img === "trophy" ? trophy : arrow}
          alt="arrow"
          width={24}
          height={24}
        />
      </span>
    </Link>
  );
};

export default Button;
