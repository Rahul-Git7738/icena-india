"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { anton, work_sans } from "@/styles/fonts";
import Image from "next/image";
import img1 from "../../../public/images/Intersect.png";
import {
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaSnapchat,
  FaYoutube,
} from "react-icons/fa";

const DescriptionCard = ({
  title,
  img,
  des,
  job,
  linkedin,
  instagram,
  tiktok,
  snapchat,
  youtube,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative text-white w-full h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div>
        <Image
          src={img}
          alt="Speaker Image"
          width={400} // Add the width property
          height={420} // Add the height property
          className="rounded-t-[32px] object-cover object-top"
          style={{ width: "400px", height: "420px" }}
        />

        <motion.div
          className="bg-black/75 shadow-2xl overflow-hidden rounded-[32px]  py-5 absolute bottom-[-100px] w-full "
          initial={{ y: 0, height: 210 }}
          animate={isHovered ? { y: 0, height: 500 } : { y: 0, height: 210 }}
          transition={{ duration: 0.3 }}
        >
          {isHovered && (
            <p className={`text-[16px] my-0 px-5 ${work_sans.className}`}>
              {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              ipsum facilis nisi, blanditiis omnis, sit dolor culpa molestiae
              neque temporibus corrupti. Possimus maiores unde quam nesciunt
              laudantium at iste amet asperiores */}
              {des}
            </p>
          )}
          <div className="absolute bottom-0 py-5 px-5  flex justify-between flex-col rounded-[32px] h-[210px]    bg-black w-full">
            <div>
              <h2 className={`text-[24px] text-[#ccff00] ${anton.className}`}>
                {title}
              </h2>
              <p className={` text-[13px] my-4  ${work_sans.className}`}>
                {job}
              </p>
            </div>

            <div className="flex gap-5 h-[45px] relative bottom-0 ">
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={28} />
                </a>
              )}
              {instagram && (
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={28} />
                </a>
              )}
              {tiktok && (
                <a href={tiktok} target="_blank" rel="noopener noreferrer">
                  <FaTiktok size={28} />
                </a>
              )}
              {snapchat && (
                <a href={snapchat} target="_blank" rel="noopener noreferrer">
                  <FaSnapchat size={28} />
                </a>
              )}
              {youtube && (
                <a href={youtube} target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={28} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DescriptionCard;
