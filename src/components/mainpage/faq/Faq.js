"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { anton, work_sans } from "@/styles/fonts";
import { motion } from "framer-motion";
const data = [
  {
    question: "When and where will the event take place?",
    answer:
      "The event is scheduled for the 30th April in India. Please refer to the event details for more information.",
  },
  {
    question: "How can I register for the event?",
    answer:
      "You can register for the event by visiting our registration page on the event website.",
  },
  {
    question: "What topics and sessions will be covered during the event?",
    answer:
      "The event will feature a diverse range of sessions covering topics related to influence, innovation, and industry-specific insights.",
  },
  {
    question: "Who are the confirmed speakers for the event?",
    answer:
      "We have a lineup of influential speakers, experts, and thought leaders who will be sharing their insights. Please visit our speakers' page for a list of confirmed speakers and their profiles.",
  },
  {
    question: "Will there be opportunities for networking?",
    answer:
      "Absolutely! We have dedicated networking sessions and opportunities for attendees to connect with fellow professionals, speakers, and sponsors.",
  },
  {
    question: "How can I become a sponsor or exhibitor at the event?",
    answer:
      "If you are interested in becoming a sponsor or exhibitor, please contact our sponsorship team via email at mohamed.suhel@influenceexchangegroup.com. They will provide you with all the details you need.",
  },
  {
    question: "Will there be food and refreshments provided?",
    answer:
      "Yes, we will provide refreshments and meals during the event. Please check the event schedule for specific mealtimes and options.",
  },
  {
    question: "Can I submit a nomination for the awards?",
    answer:
      "Yes, nominations for the awards are welcome. We have specific award categories, and the submission process is outlined on our website. Stay tuned for the nomination deadlines.",
  },
];

export default function Faq() {
  const [activeQuestions, setActiveQuestions] = useState(
    new Array(data.length).fill(false)
  );

  const contentRefs = useRef(data.map(() => null));

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight = activeQuestions[index]
          ? `${ref.scrollHeight}px`
          : "0px";
      }
    });
  }, [contentRefs, activeQuestions]);

  const toggleAccordion = (index) => {
    const updatedActiveQuestions = [...activeQuestions];
    updatedActiveQuestions[index] = !updatedActiveQuestions[index];
    setActiveQuestions(updatedActiveQuestions);
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
    <div
      className={`bg-white text-black w-full h-full md:px-20 px-5 sm:py-56 py-20 ${work_sans.className} `}
    >
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1
          className={`text-3xl  font-medium  mb-8 w-full text-center ${anton.className} `}
        >
          FAQ
        </h1>

        <p
          className={`text-xl  font-medium  mb-8 w-full text-center ${work_sans.className} `}
        >
          Frequently Asked Questions
        </p>
        <p
          className={`text-xl  font-medium  mb-8 w-full text-center ${work_sans.className} `}
        >
          Find answers to common queries about the event.
        </p>

        <div className="flex flex-col w-full justify-center align-middle ">
          {data.map((item, index) => (
            <div key={index} className="my-4 w-[100%]">
              <button
                className={`question-section w-[100%] ${activeQuestions[index]}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="border-b-2 border-gray-200">
                  <div className="question-align">
                    <h4 className="question-style  md:text-xl text-sm my-2 font-medium  ">
                      Q. {item.question}
                    </h4>
                    <FiPlus
                      className={
                        activeQuestions[index]
                          ? "question-icon rotate"
                          : "question-icon"
                      }
                    />
                  </div>
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className={
                      activeQuestions[index]
                        ? "answer answer-divider pl-1"
                        : "answer pl-1"
                    }
                  >
                    <p className="answer-style md:text-lg text-sm my-2">
                      A. {item.answer}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
