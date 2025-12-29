"use client";

import React, { useState } from "react";
import { work_sans, anton } from "@/styles/fonts";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";
import Awardnrec from "@/components/mainpage/awrdnrec/Awardnrec";

function Criteria() {
  // Define state to manage which heading's criteria to display
  const [selectedHeading, setSelectedHeading] = useState(
    "Marketing Leader of the Year"
  );

  // Define data structure to store headings, descriptions, and criteria
  const data = [
    {
      "Marketing Leader of the Year": {
        description:
          "This award celebrates a top marketing leader who has guided their team to success through innovative strategies and strong leadership.",
        criteria: [
          "Demonstrated leadership skills in marketing roles.",
          "Innovative marketing strategies.",
          "Achievement of measurable results.",
        ],
      },
    },
    {
      "Branding Leader of the Year": {
        description:
          "Recognizing a marketer who excels in creating and maintaining strong brands that connect with audiences.",
        criteria: [
          "Consistent brand messaging and visual identity.",
          "Successful brand campaigns and initiatives.",
          "Metrics demonstrating brand awareness and perception.",
        ],
      },
    },
    {
      "Digital Marketeer of the Year": {
        description:
          "This award honours someone skilled in digital marketing, using online channels effectively to engage audiences and achieve measurable results.",
        criteria: [
          "Innovative digital marketing campaigns or initiatives.",
          "Effectiveness and impact of digital marketing efforts.",
          "Utilization of cutting-edge technologies or techniques.",
        ],
      },
    },
    {
      "Influencer Marketeer of the Year": {
        description:
          "Recognizing a marketer who achieves great results by collaborating with influencers to promote their brand.",
        criteria: [
          "Successful influencer marketing campaigns.",
          "Metrics on campaign performance and ROI.",
          "Strategic planning and execution in influencer partnerships.",
        ],
      },
    },
    {
      "Social Media Marketeer of the Year": {
        description:
          "Honouring a marketer who effectively uses social media to engage customers and build brand awareness.",
        criteria: [
          "Innovative brand activation campaigns.",
          "Effectiveness and impact of brand activation efforts.",
          "Creative approaches and techniques in connecting with target audiences.",
        ],
      },
    },
    {
      "Data-Driven Marketer of the Year": {
        description:
          "This award celebrates a marketer who uses data to make smart decisions and optimize marketing strategies.",
        criteria: [
          "Evidence of customer-centric initiatives.",
          "High levels of customer satisfaction and loyalty.",
          "Innovative approaches to improving the customer experience.",
        ],
      },
    },
    {
      "Brand Activation Strategist of the Year": {
        description:
          "Recognizing creative approaches to brand promotion that capture attention and leave a lasting impression.",
        criteria: [
          "Data-driven marketing campaigns or initiatives.",
          "Impact of data-driven marketing efforts on business outcomes.",
          "Utilization of data analytics tools and methodologies.",
        ],
      },
    },
    {
      "Customer Experience Advocate": {
        description:
          "This award celebrates a marketer who prioritizes delivering exceptional customer experiences.",
        criteria: [
          "High levels of social media engagement.",
          "Engaging social media content and campaigns.",
          "Community building and meaningful interactions on social media.",
        ],
      },
    },
    {
      "Digital Transformation Leader of the Year": {
        description:
          "Honouring a marketer who leads successful digital transformations within their organization.",
        criteria: [
          "Evidence of digital transformation initiatives and strategies.",
          "Successful digital transformation projects and impact on business outcomes.",
          "Effectiveness of digital transformation efforts in achieving organizational goals.",
        ],
      },
    },
    {
      "PR and Communication Strategist of the Year": {
        description:
          "Recognizing excellence in managing corporate reputation and communication strategies to achieve organizational goals.",
        criteria: [
          "Successful influencer partnerships and collaborations.",
          "Positive experiences working with influencers.",
          "Strategic relationship-building efforts with influencers.",
        ],
      },
    },
  ];

  // Function to handle button click and set the selected heading
  const handleHeadingClick = (heading) => {
    setSelectedHeading(heading);
  };
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
    <div className={`bg-black ${work_sans.className} `}>
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="md:text-2xl text-md font-medium tracking-tighter md:mx-80 mx-10  text-justify  leading-8 text-white max-md:max-w-full"
      >
        Celebrate excellence with us as we honour outstanding contributions
        across various domains. Nominate deserving individuals, brands, or
        organizations for their achievements and innovation in marketing and
        influencer engagement.
      </motion.div>
      <div className=" bg-black w-full">
        <Awardnrec />
      </div>
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`mt-24 text-5xl text-center anton-f text-white leading-[61.92px] max-md:mt-10 max-md:max-w-full max-md:text-4xl ${anton.className} `}
      >
        MARKETING AWARD CATEGORIES AND CRITERIA
      </motion.div>

      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row justify-center gap-20  md:p-10 p-5 mb-20"
      >
        <div className="flex flex-wrap md:w-1/2 w-full gap-[4%]">
          {data.map((item, index) => (
            <React.Fragment key={index} className="flex-grow">
              {Object.keys(item).map((heading, index) => (
                <button
                  key={index}
                  className={`w-[48%] max-h-fit flex align-middle justify-center px-8 py-6 my-4 items-center rounded-2xl shadow-sm max-md:px-5 text-center ${
                    selectedHeading === heading
                      ? "bg-[#ccff00]  hover-box-shadow-2    "
                      : "bg-white"
                  }`}
                  onClick={() => handleHeadingClick(heading)}
                >
                  <p
                    className={`${work_sans.className} font-medium text-xl w-[90%] text-black `}
                  >
                    {" "}
                    {heading}
                  </p>
                </button>
              ))}
            </React.Fragment>
          ))}
        </div>
        <div className="md:w-1/2 w-full md:p-5 p-2">
          {/* Display description and criteria for the selected heading */}
          {selectedHeading &&
            data.map((item, index) => (
              <React.Fragment key={index}>
                {Object.keys(item).map((heading, index) =>
                  heading === selectedHeading ? (
                    <div key={index} className="text-white">
                      <div className="mb-5 font-bold text-3xl text-[#ccff00]">
                        {heading}
                      </div>
                      <div className="mb-5  text-xl">
                        {item[heading].description}
                      </div>
                      <div className="mt-20">
                        <div className="mb-5 font-bold text-3xl text-[#ccff00]">
                          Criteria
                        </div>
                        <ul className="list-disc pl-5  text-xl">
                          {item[heading].criteria.map((criterion, index) => (
                            <li key={index}>{criterion}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null
                )}
              </React.Fragment>
            ))}
        </div>
      </motion.div>

      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center mt-10 "
      >
        <Button color="black" img="trophy" href="/awards">
          Nominate
        </Button>
      </motion.div>
    </div>
  );
}

export default Criteria;
