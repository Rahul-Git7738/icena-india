"use client";

import React, { useState } from "react";
import { work_sans, anton } from "@/styles/fonts";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";

function CriteriaIn() {
  // Define state to manage which heading's criteria to display
  const [selectedHeading, setSelectedHeading] = useState(
    "Mega/Celeb-Influencer of the Year"
  );

  const [selectedHeading2, setSelectedHeading2] = useState(
    "Best Financial Influencer Award"
  );

  // Define data structure to store headings, descriptions, and criteria

  const data = [
    {
      "Mega/Celeb-Influencer of the Year": {
        description:
          "Honoring the most prominent and influential figures in the world of social media and content creation.",
        criteria: [
          "Prominence and influence in social media and content creation.",
          "Engagement and impact on audiences.",
          "Recognition and accolades within the industry.",
        ],
      },
    },
    {
      "Macro-Influencer of the Year": {
        description:
          "Recognizing influencers with a broader reach who have consistently delivered compelling content to engaged followers.",
        criteria: [
          "Large follower base and reach.",
          "Consistent delivery of compelling content.",
          "Engagement and interaction with followers.",
        ],
      },
    },
    {
      "Micro-Influencer of the Year": {
        description:
          "Celebrating the impact of micro-influencers who have forged genuine connections with their niche audiences.",
        criteria: [
          "Authentic engagement with niche audiences.",
          "Growth and influence within a specific niche.",
          "Community building and genuine connections.",
        ],
      },
    },
    {
      "Nano Influencer of the year": {
        description:
          "Honoring influencers who have established themselves as budding influencers.",
        criteria: [
          "Emerging presence and potential as an influencer.",
          "Engagement and interaction with early followers.",
          "Quality and consistency of content.",
        ],
      },
    },
    {
      "Creative Visual Content Creator": {
        description:
          "Recognizing influencers with a talent for crafting visually stunning and engaging content.",
        criteria: [
          "Quality and creativity of visual content.",
          "Engagement and impact on audiences.",
          "Innovative approaches to visual storytelling.",
        ],
      },
    },
    {
      "Social Media Engagement Champion": {
        description:
          "Celebrating influencers who excel in fostering meaningful engagement and interactions with their followers on social media platforms.",
        criteria: [
          "High levels of engagement and interaction.",
          "Authentic connections with followers.",
          "Positive impact on community engagement.",
        ],
      },
    },
    {
      "Best Fashion and Style Influencer of the Year": {
        description:
          "Recognizing the influencer who sets trends and inspires audiences with their fashion-forward content and style expertise.",
        criteria: [
          "Trendsetting fashion content.",
          "Inspiration and influence in the fashion industry.",
          "Expertise and knowledge of fashion trends and styles.",
        ],
      },
    },
    {
      "Best Travel Influencer of the Year": {
        description:
          "Honouring the influencer who captivates audiences with their travel adventures, inspiring wanderlust, and exploration.",
        criteria: [
          "Compelling travel content and storytelling.",
          "Inspiration and influence in travel experiences.",
          "Engagement and interaction with travel enthusiasts.",
        ],
      },
    },
    {
      "Best Beauty Influencer of the Year": {
        description:
          "Celebrating the influencer who shares beauty tips, tutorials, and product recommendations, inspiring confidence, and creativity.",
        criteria: [
          "Expertise in beauty-related topics.",
          "Influence and impact on beauty enthusiasts.",
          "Engagement and interaction with beauty communities.",
        ],
      },
    },
    {
      "Best Health & Wellbeing Influencer of the Year": {
        description:
          "Recognizing the influencer who promotes physical and mental wellbeing, sharing insights, tips, and motivation for a healthier lifestyle.",
        criteria: [
          "Promotion of physical and mental wellbeing.",
          "Inspiration and motivation for healthier lifestyles.",
          "Engagement and interaction with health and wellness communities.",
        ],
      },
    },
  ];

  const data2 = [
    {
      "Best Financial Influencer Award": {
        description:
          "Celebrating the influencer who provides valuable financial advice, tips, and strategies for managing money, investing, and achieving financial goals.",
        criteria: [
          "Expertise in financial topics.",
          "Useful and actionable financial advice.",
          "Engagement and interaction with finance communities.",
        ],
      },
    },
    {
      "Gaming Influencer of the Year": {
        description:
          "Recognizing the influencer who entertains and engages audiences with gaming content, showcasing gameplay, reviews, and insights into the gaming world.",
        criteria: [
          "Entertaining gaming content.",
          "Insights and analysis of gaming trends.",
          "Engagement and interaction with gaming communities.",
        ],
      },
    },
    {
      "Blogger of the year": {
        description:
          "Acknowledging influencers who have made significant contributions to their respective niches, amassed a large and engaged audience, and maintained a high level of quality and consistency in their content.",
        criteria: [
          "Quality and consistency of content.",
          "Audience engagement and impact.",
          "Contribution to their niche community.",
        ],
      },
    },
    {
      "Mom Influencer of the year": {
        description:
          "Celebrating mothers who have leveraged their platforms to inspire, educate, and empower other parents. Having a strong online presence, engaging with their audience authentically and providing valuable insights into the joys and challenges of motherhood.",
        criteria: [
          "Inspiration and empowerment for other parents.",
          "Authentic engagement with their audience.",
          "Insights into the joys and challenges of motherhood.",
        ],
      },
    },
    {
      "Youtuber of the year": {
        description:
          "Recognizing content creators for their ability to entertain, inform & inspire viewers, as well as their innovation in video production, storytelling & engaging with their audience.",
        criteria: [
          "Entertainment, information, and inspiration in video content.",
          "Innovation in video production and storytelling.",
          "Engagement and interaction with their audience.",
        ],
      },
    },
    {
      "Entertainment Maven of the Year": {
        description:
          "Honouring influencers who have a deep understanding of their craft, whether it be acting, directing, producing, or any other aspect to entertain their audience, leaving a lasting impact on the cultural landscape.",
        criteria: [
          "Contribution to the entertainment industry.",
          "Impact on cultural landscape.",
          "Recognition and accolades within the industry.",
        ],
      },
    },
    {
      "Food/Culinary Influencer of the Year": {
        description:
          "Celebrating content creators who have cultivated a devoted following and have demonstrated exceptional skill in sharing their passion for food, cooking, and culinary culture.",
        criteria: [
          "Passion for food, cooking, and culinary culture.",
          "Engagement and impact on food enthusiasts.",
          "Quality and creativity of culinary content.",
        ],
      },
    },
    {
      "Educational Content Creator of the Year": {
        description:
          "Recognizing influencers for their expertise and creativity to create engaging and informative materials that empower learners of all ages and backgrounds to expand their knowledge and skills.",
        criteria: [
          "Expertise in educational topics.",
          "Engagement and impact on learners.",
          "Quality and creativity of educational content.",
        ],
      },
    },
    {
      "Best Art & Photography Influencer": {
        description:
          "Sharing their beautiful and inspiring artwork and photography with the world.",
        criteria: [
          "Quality and creativity of artwork and photography.",
          "Inspiration and impact on art and photography enthusiasts.",
          "Engagement and interaction with their audience.",
        ],
      },
    },

    {
      "Plus size influencer of the Year": {
        description:
          "Plus size influencer uses their platform to inspire and empower individuals, promoting self-love and challenging societal beauty norms. Through fashion-forward styling, candid storytelling, and a focus on inclusivity, they create relatable, impactful content. They play a pivotal role in shifting perceptions, advocating for size diversity in industries like fashion, wellness, and media while fostering a supportive community for their audience.",
        criteria: [
          "Fashion and Lifestyle Inspiration: Showcases style tips, trends, and product reviews for diverse body types.",
          "Engaging Content: Creates relatable and authentic content that connects with their audience.",
          "Audience Impact: Encourages acceptance and diversity through social media presence.",
        ],
      },
    },
    {
      "Best Tech Influencer of the Year": {
        description:
          "Honouring the influencer who educates and entertains audiences with insights into the latest technology trends, gadgets, and innovations.",
        criteria: [
          "Expertise in technology-related topics.",
          "Insights and analysis of technology trends.",
          "Engagement and interaction with tech enthusiasts.",
        ],
      },
    },
    {
      "Most Promising Influencer of the Year": {
        description:
          "This award recognizes the most promising influencer who shows great potential and promise in their field. They may be relatively new to the influencer scene but have already made a significant impact and garnered attention for their content and engagement with their audience.",
        criteria: [
          "Content Quality and Consistency: Demonstrates a high level of quality and consistency in their content creation efforts.",
          "Audience Engagement: Engages effectively with their audience, fostering a strong sense of community and interaction.",
          "Innovation and Creativity: Shows innovation and creativity in their approach to content creation, setting themselves apart from others in their niche.",
        ],
      },
    },

    // {
    //   "Most Promising Influencer of the Year": {
    //     description:
    //       "This award recognizes the most promising influencer who shows great potential and promise in their field. They may be relatively new to the influencer scene but have already made a significant impact and garnered attention for their content and engagement with their audience.",
    //     criteria: [
    //       "Content Quality and Consistency: Demonstrates a high level of quality and consistency in their content creation efforts.",
    //       "Audience Engagement: Engages effectively with their audience, fostering a strong sense of community and interaction.",
    //       "Innovation and Creativity: Shows innovation and creativity in their approach to content creation, setting themselves apart from others in their niche.",
    //     ],
    //   },
    // },
    // {
    //   "Best Marketing and Hospitality Influencer of the Year": {
    //     description:
    //       "This award acknowledges the influencer who excels in the fields of marketing and hospitality. They provide valuable insights, strategies, and tips related to marketing tactics, branding, customer service, and the hospitality industry as a whole.",
    //     criteria: [
    //       "Expertise in Marketing and Hospitality: Demonstrates a deep understanding of marketing principles and strategies, as well as trends and best practices in the hospitality industry.",
    //       "Impact and Influence: Has a significant impact on their audience, offering valuable advice and guidance that leads to tangible results or improvements.",
    //       "Engagement with Industry Professionals: Actively engages with other professionals in the marketing and hospitality sectors, fostering collaboration and knowledge-sharing within the industry.",
    //     ],
    //   },
    // },
  ];

  // Function to handle button click and set the selected heading
  const handleHeadingClick = (heading) => {
    setSelectedHeading(heading);
  };

  const handleHeadingClick2 = (heading) => {
    setSelectedHeading2(heading);
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
    <div className={`bg-black ${work_sans.className} pb-[150px] `}>
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`pt-44 text-5xl text-center anton-f text-white leading-[61.92px]  max-md:max-w-full max-md:text-4xl ${anton.className} `}
      >
        INFLUENCER AWARD CATEGORIES AND CRITERIA
      </motion.div>

      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row justify-center gap-20  sm:p-10 p-5  mb-20"
      >
        <div className="flex flex-wrap w-full md:w-1/2 gap-[4%]">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              {Object.keys(item).map((heading, index) => (
                <button
                  key={index}
                  className={`w-[48%] max-h-fit flex align-middle justify-center px-8 py-6 my-4 items-center rounded-2xl shadow-sm max-md:px-5 text-center ${
                    selectedHeading === heading
                      ? "bg-[#ccff00] hover-box-shadow-2"
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

      <motion.div className="flex flex-col md:flex-row justify-center gap-20  sm:p-10 p-5  mb-20">
        <div className="md:w-1/2 w-full md:p-5 p-2">
          {/* Display description and criteria for the selected heading */}
          {selectedHeading2 &&
            data2.map((item, index) => (
              <React.Fragment key={index}>
                {Object.keys(item).map((heading, index) =>
                  heading === selectedHeading2 ? (
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
        <div className="flex flex-wrap w-full md:w-1/2 gap-[4%]">
          {data2.map((item, index) => (
            <React.Fragment key={index}>
              {Object.keys(item).map((heading, index) => (
                <button
                  key={index}
                  className={`w-[48%] max-h-fit flex align-middle justify-center px-8 py-6 my-4 items-center rounded-2xl shadow-sm max-md:px-5 text-center ${
                    selectedHeading2 === heading
                      ? "bg-[#ccff00] hover-box-shadow-2"
                      : "bg-white"
                  }`}
                  onClick={() => handleHeadingClick2(heading)}
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
      </motion.div>
    </div>
  );
}

export default CriteriaIn;
