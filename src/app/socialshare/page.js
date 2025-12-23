"use client";

import React, { useState, useEffect } from "react";
import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Snippet } from "@nextui-org/react";

function generateText(field, category, pr, rem, vote) {
  const link = "https://india.theiena.com/event/" + pr + "_" + rem;

  let text = "";

  if (field === "delegate") {
    if (category === "influencer") {
      text = `Thrilled to share that I am attending Influence Exchange Confex & Awards Series #iecna on April 30th 2025 in Mumbai, India.\n\nJoin me in a gathering of influencers from diverse backgrounds and industries. Can't wait to connect with fellow influencers, share experiences and explore brand collaborations. Let's ignite creativity and make meaningful connections together!\n\nLooking forward to immersing myself in insightful discussions to forging new partnerships, I'm eager to immerse myself in the vibrant influencer community. Let's elevate our voices, spark innovation, and create impact together! Who else will be there? Let's connect! See you there!\n\nRegister Now: ${link}\n\n#InfluenceExchange #InfluenceExchangeConfex #influencerevent #influencermarketing #martech #adtech #Marketing #Influencer #Networking #Influencer #india`;
    } else {
      text = `Thrilled to share that I am attending Influence Exchange Confex & Awards Series #iecna on April 30th 2025 in Mumbai, India.\n\nJoin me and hundreds of professionals as we discover the latest trends & technologies on convergence of market strategy, AdTech, and influencer marketing, hear from global speakers and gateway to new ideas, perspectives and opportunities.\n\nLooking forward to immersing myself in insightful discussions and connecting with industry leaders. Can't wait to expand my network and gain fresh perspectives! Let's connect and grow together! See you there!\n\nRegister Now: ${link}\n\n#InfluenceExchange #InfluenceExchangeConfex #influencermarketing #martech #adtech #Marketing #Influencer #Networking #Influencer #MarketingInnovation #Marketing #influencerevent #india`;
    }
  } else if (field === "nomination") {
    if (category === "influencer") {
      text = `🎉 Thrilled and Grateful! 🏆\n\nI am absolutely thrilled to share that I've been nominated for Influencer Award categories #iecna happening on April 30th 2025 in Mumbai, India🎉\n\nIt's an incredible honor to be recognized among so many talented influencers. I am beyond excited for the opportunity to continue inspiring and connecting with all of you. Let's celebrate this journey together and stand a chance to win the award! 🥳💫\n\nGet ready to applaud for the best and brightest achievements of influencers and creators from the social media community who have made a significant impact in their respective fields. Mark your calendars and let's make memories together! See you there! 🌟 \n\nNominate Now : ${link} \n\nVote for me : https://india.theiena.com/vote/${vote}\n\n#InfluencerAward #Nominated #InfluenceExchange #InfluenceExchangeConfex #influencerevent #influencermarketing #martech #adtech #Marketing #Influencer #Networking #Influencer #india`;
    } else {
      text = `🎉 Thrilled and Grateful! 🏆\n\nI am absolutely thrilled to share that I've been nominated for Marketeer Award categories #iecna happening on April 30th 2025 in Mumbai, India🎉\n\nIt's an incredible honor to be recognized in Marketing Community.  I am beyond excited for the opportunity to continue inspiring and connecting with all of you. Let's celebrate this journey together and stand a chance to win the award! 🥳💫\n\nGet ready to applaud for the best and brightest achievements of marketing industry leaders who have made a significant impact in their respective fields. Mark your calendars and let's make memories together! See you there! 🌟
      \n\nNominate Now : ${link} \n\nVote for me : https://india.theiena.com/vote/${vote}\n\n#InfluencerAward #Nominated #InfluenceExchange #InfluenceExchangeConfex #influencerevent #influencermarketing #martech #adtech #Marketing #Influencer #Networking #Influencerawards #india`;
    }
  }

  return text;
}

function Socialshare({ text }) {
  // Function to handle sharing on social networks
  const handleShare = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-row flex-wrap gap-4 p-4">
      {text && (
        <>
          <div className="flex-row flex gap-4">
            <button
              onClick={() =>
                handleShare(
                  `https://www.linkedin.com/shareArticle?mini=true&text=${encodeURIComponent(
                    text
                  )}`
                )
              }
            >
              <FaLinkedin size={32} />
            </button>
            <button
              onClick={() =>
                handleShare(
                  `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    text
                  )}`
                )
              }
            >
              <FaTwitter size={32} />
            </button>
            <button
              onClick={() =>
                handleShare(
                  `https://api.whatsapp.com/send?text=${encodeURIComponent(
                    text
                  )}`
                )
              }
            >
              <FaWhatsapp size={32} />
            </button>
          </div>
          {/* add a button to copy the text */}

          <Snippet
            codeString={text}
            symbol="Copy Social Text/Hashtags"
            variant="flat"
            color="default"
            // className="bg-transparent"
          />
        </>
      )}
    </div>
  );
}

export default function SharedSocials({ field, category, pr, rem, vote }) {
  const [text, setText] = useState(null);

  useEffect(() => {
    const textGenerated = generateText(field, category, pr, rem, vote);
    setText(textGenerated);
  }, [field, category, pr]);

  return <Socialshare text={text} />;
}
