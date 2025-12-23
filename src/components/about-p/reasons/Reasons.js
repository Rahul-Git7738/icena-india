"use client";

import { work_sans, anton } from "@/styles/fonts";

import { FaChalkboardTeacher } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiTrophyCup } from "react-icons/gi";
import { HiOutlineUsers } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";
import { MdDinnerDining } from "react-icons/md";
import { motion } from "framer-motion";

const content = [
  {
    icon: FaChalkboardTeacher,
    title: "Dynamic Panel Discussions",
    text: "Join industry thought leaders as they navigate the challenges and unveil opportunities in influencer marketing. These discussions promise to deliver fresh perspectives and actionable strategies to thrive in a competitive marketplace.",
  },
  {
    icon: AiOutlineFundProjectionScreen,
    title: "Exclusive Insights & Presentations",
    text: "Witness trailblazing campaigns and innovative solutions through focused presentations. Learn how to leverage the latest advancements in MarTech and AdTech to maximize ROI and drive meaningful engagement.",
  },
  {
    icon: GiTrophyCup,
    title: "Prestigious Awards Ceremony",
    text: "Celebrate excellence in influencer marketing as the event honors trailblazers and outstanding contributors who are shaping the industry.",
  },
  {
    icon: HiOutlineUsers,
    title: "Immersive Networking Opportunities",
    text: "From informal dialogues to strategic business discussions, connect with decision-makers, creators, and industry pioneers in a vibrant gala atmosphere designed to foster partnerships and collaboration.",
  },
  {
    icon: MdWorkOutline,
    title: "Collaborative Workshops",
    text: "Dive into hands-on sessions led by experts to explore practical approaches for integrating technology and creativity to amplify your marketing impact.",
  },
  {
    icon: MdDinnerDining,
    title: "Gala Dinner & Business Dialogues",
    text: "Strengthen relationships and forge meaningful alliances over an exquisite dinner, set in an ambiance of collaboration and inspiration.",
  },
];
function Reasons() {
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
    <div className=" bg-white w-full max-md:pt-10 max-md:max-w-full sm:p-20 p-5 ">
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="self-stretch mt-20 w-full sm:text-4xl my-32 text-3xl italic font-bold  leading-7 text-center text-black uppercase max-md:mt-10 max-md:max-w-full  "
      >
        <span className="font-bold  italic">
          What Awaits You at the{" "}
          <span className="font-bold italic text-[#51B6FF]">5th Edition?</span>
        </span>
      </motion.div>

      <motion.section
        className={`mx-auto grid  sm:grid-cols-3 grid-cols-1 gap-20  ${work_sans.className} `}
      >
        {content.map(({ icon: Icon, title, text }) => (
          <motion.div
            initial={offscreen}
            whileInView={onscreen}
            viewport={{ once: true, amount: 0.3 }}
            key={title}
            className="flex flex-col items-center gap-4 group"
          >
            <span
              className="p-8 mb-4 flex sm:scale-100 scale-80  h-32 w-32 items-center justify-center rounded-[1.8rem]  bg-black
            group-hover:transform group-hover:-translate-y-2 transition-transform duration-300
            group-hover:shadow-lg
             "
            >
              <Icon className="h-12 w-12 text-[#ccff00]" />
            </span>
            <h3 className="mb-2 text-xl font-semibold text-black text-center">
              {title}
            </h3>
            <p className="text-lg  text-gray-600 text-justify">{text}</p>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}

export default Reasons;
