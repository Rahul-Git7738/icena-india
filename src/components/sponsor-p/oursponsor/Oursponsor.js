"use client";
import * as React from "react";
import { anton, work_sans } from "@/styles/fonts";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";
import chef from "../../../../public/images/sponsors/insta.png";
import fly from "../../../../public/images/sponsors/flybharti.png";
import views from "../../../../public/images/sponsors/views.jpg";
import soge from "../../../../public/images/sponsors/soge.png";
import greenroom from "../../../../public/images/sponsors/greenroom.png";
import flaunt from "../../../../public/images/sponsors/flaunt.png";
import divo from "../../../../public/images/sponsors/divo.png";
import proexpo from "../../../../public/images/sponsors/proexpo.png";
import offer from "../../../../public/images/sponsors/offer.png";
import klugklug from "../../../../public/images/sponsors/klug.png";
import voxxy from "../../../../public/images/sponsors/voxxy.png";
import enki from "../../../../public/images/sponsors/enki.png";
import Image from "next/image";

function Oursponsor() {
  // Define data for sponsors
  // const sponsors_series = [
  //   {
  //     title: "TITLE SPONSOR",
  //     name: "Insta Chef",
  //     description:
  //       "InstaChef, Dubai’s top Chef service, offers professional chefs for hire at your home. Available for daily, weekly, monthly needs, or parties, our chefs create delicious, personalized home-cooked meals.",
  //     imageUrl: "/images/sponsors/instachef-og.jpg",
  //     logoUrl: chef,
  //     link: "https://www.instachef.ae/",
  //   },
  //   {
  //     title: "PRESENTING PARTNER",
  //     name: "Fly Bharathi",
  //     description:
  //       "Fly Bharathi Aviations and Aeronautics Pvt Ltd (FBAA) is a new Indian aviation company offering airport operations, aircraft MRO, cargo handling, and flight training services.",
  //     imageUrl: "/images/sponsors/flybharathi-og.jpg",
  //     logoUrl: fly,
  //     link: "#",
  //   },
  //   {
  //     title: "DATA ANALYTICS PARTNER",
  //     name: "Views",
  //     description:
  //       "Views is a platform designed for charities, non-profits, and social purpose organizations to manage data and measure impact. It features modules for managing contacts, tracking projects, storing evidence, and generating reports.",
  //     imageUrl: "/images/sponsors/views-og.jpg",
  //     logoUrl: views,
  //     link: "https://www.viewsapp.net/",
  //   },
  //   {
  //     title: "Lanyard Sponsor",
  //     name: "Socio Genee",
  //     description:
  //       "Socio Genee is the leading platform offering 100% transparency and business growth for Influencers, focused on building communities to enhance and uplift the creator ecosystem.",
  //     imageUrl: "/images/sponsors/soge-og.jpg",
  //     logoUrl: soge,
  //     link: "https://sociogenee.com/",
  //   },
  //   {
  //     title: "Solution Partner",
  //     name: "Greenroom now",
  //     description:
  //       "Greenroom is a content and influencer marketing agency based in Bangalore and Mumbai. We believe in turning attention to retention: crafting long-term impact. We are here for brands and creators who are looking to navigate and thrive in the attn economy and work with some of the top brands in the country.",
  //     imageUrl: "/images/sponsors/greenroom-og.png",
  //     logoUrl: greenroom,
  //     link: "https://www.greenroomnow.com/",
  //   },
  // ];

  const sponsors_series = [
    {
      title: "Lanyard Sponsor",
      name: "Socio Genee",
      description:
        "Socio Genee is the leading platform offering 100% transparency and business growth for Influencers, focused on building communities to enhance and uplift the creator ecosystem.",
      imageUrl: "https://india2024.theiena.com/images/sponsors/soge-og.jpg",
      logoUrl: "https://india2024.theiena.com/images/sponsors/soge.png",
      link: "https://sociogenee.com/",
      special: true,
    },
    {
      title: "Solution Partner",
      name: "Greenroom now",
      description:
        "Greenroom is a content and influencer marketing agency based in Bangalore and Mumbai. We believe in turning attention to retention: crafting long-term impact. We are here for brands and creators who are looking to navigate and thrive in the attn economy and work with some of the top brands in the country.",
      imageUrl:
        "https://india2024.theiena.com/images/sponsors/greenroom-og.png",
      logoUrl: "https://india2024.theiena.com/images/sponsors/greenroom.png",
      link: "https://www.greenroomnow.com/",
      special: true,
    },
    {
      title: "Gold Sponsor",
      name: "Social Chameleon",
      description:
        "Social Chameleon is a leading Search-First Social Media® agency with expertise in social media, search, and content creation. Our teams in London and Sydney work with pioneering brands to deliver measurable outcomes and strategies that get noticed.",
      imageUrl: "https://uae.theiena.com/images/sponsors/uae/og/socialc.png",
      logoUrl: "https://uae.theiena.com/images/sponsors/uae/socialc.png",
      link: "https://socialchameleon.com",
      special: true,
    },
    {
      title: "Exhibitor",
      name: "PROVEN 360",
      description:
        "Founded in 2022, PROVEN 360 is a premier digital marketing agency dedicated to helping businesses grow through tailored strategies. They offer website development, social media, SEO, and more to drive engagement and conversions.",
      imageUrl: "https://uae.theiena.com/images/sponsors/uae/og/proven.png",
      logoUrl: "https://uae.theiena.com/images/sponsors/uae/proven.png",
      link: "https://www.proven-360.com",
      special: true,
    },
    {
      title: "Solution partner",
      name: "Takefluence",
      description:
        "Takefluence is a platform to collaborate with creators/influencers or even engage customers to create, distribute, amplify content, drive sales with promocode attribution, write reviews and get paid. We automate all the flow from invitation, moderation, reporting to payouts.",
      imageUrl: "https://uae.theiena.com/images/sponsors/uae/og/takef.png",
      logoUrl: "https://uae.theiena.com/images/sponsors/uae/takef.png",
      link: "https://takefluence.com",
      special: true,
    },
    {
      title: "Exhibitor",
      name: "Yala Yala Media CO. L.L.C",
      description:
        "Yala Yala Media CO. L.L.C, a Dubai-based social media company focused on TikTok. With a founding team from China. They understand TikTok’s commercial potential and aim to foster stronger collaborations with brands and media companies to build a robust MCN ecosystem in the Middle East.",
      imageUrl: "https://uae.theiena.com/images/sponsors/uae/og/yalayala.png",
      logoUrl: "https://uae.theiena.com/images/sponsors/uae/yalayala.png",
      link: "https://yalayala.ae",
      special: true,
    },
    {
      title: "Supporting Partner",
      name: "Whoyer",
      description:
        "Whoyer connects influencers, brands, and fashion enthusiasts, offering tools, mentorship, and personalized fashion guidance to help users succeed, grow their audience, and make smart style choices.",
      imageUrl: "https://uae.theiena.com/images/sponsors/uae/og/whoyer.png",
      logoUrl: "https://uae.theiena.com/images/sponsors/uae/whoyer.png",
      link: "https://www.whoyer.com",
      special: true,
    },
    {
      title: "Event contracting partner",
      name: "Pro Expo",
      description:
        "Pro Expo Ltd, based in Kenya, specializes in creative exhibition and stand construction solutions for events and conferences. Since 2016, the company has delivered over 870,000 square meters of stands across 46 exhibitions, serving diverse sectors like health, technology, hospitality, and automotive. Renowned for its efficiency and high-quality service, Pro Expo offers customized event setups, branding, and AV equipment hire. With a strong track record of delivering major projects like Medic East Africa and China Trade Week, Pro Expo is a trusted partner for businesses across East Africa and beyond.",
      imageUrl: "https://uae.theiena.com/images/sponsors/uae/og/proexpo.png",
      logoUrl: "https://uae.theiena.com/images/sponsors/uae/proexpo.png",
      link: "https://www.pro-expo.co.ke/",
      special: true,
    },
    {
      title: "Exhibitor",
      name: "Social Cash",
      description:
        "Social Cash is a UAE-based Influencer Marketing Platform where anyone can become an influencer, regardless of their follower count and get paid based on their social engagement. Social Cash empowers brands to connect with influencers who truly align with their campaign goals through advanced algorithms that match profiles based on demographics, interests, and engagement rates. By focusing on authentic digital word-of-mouth marketing, Social Cash enables brands to run targeted, impactful campaigns with influencers who resonate with their audience, ensuring maximum reach and meaningful connections.",
      imageUrl: "https://uae.theiena.com/images/sponsors/uae/og/socialcash.png",
      logoUrl: "https://uae.theiena.com/images/sponsors/uae/socialcash.png",
      link: "https://www.socialcash.ae/",
      special: true,
    },
  ];

  const sponsors = [
    {
      title: "Solution Partner",
      name: "Divo",
      description:
        "Divo, a part of Warner Music Group, is one of India's leading digital media and music companies. Founded in 2014, it operates across Chennai, Bengaluru, Cochin, Mumbai, Delhi, and Hyderabad. Divo specializes in Online Video, Music Distribution, and Digital/Influencer Marketing. It is a top Multi-Channel Network, a major independent music distributor in South India, and a key player in digital marketing, working with brands, artists, and influencers.",
      imageUrl: "/images/sponsors/divo-og.png",
      logoUrl: divo,
      link: "https://divo.in/",
    },
    {
      title: "Solution Partner",
      name: "KlugKlug",
      description:
        "KlugKlug is a leading Influencer Marketing Tech SaaS platform offering real-time, AI-ML powered data on millions of influencers across Instagram, YouTube, and TikTok. With up to 85% data accuracy, it enables brands to discover the right influencers, access deep audience insights, avoid overlap, and improve campaign efficiency by 20–80%.",
      imageUrl: "/images/sponsors/klug-og.png",
      logoUrl: klugklug,
      link: "https://klugklug.com/",
    },
    {
      title: "Solution Partner",
      name: "Enki Studio",
      description:
        "At Enki Studio, creativity meets rebellion. What started as a classic design agency transformed into a powerhouse of imagination, innovation, and bold storytelling. They don't just deliver what brands ask for—they go beyond, crafting visual stories that pleasantly shock, deeply resonate, and leave lasting impressions.",
      imageUrl: "/images/sponsors/enki-og.png",
      logoUrl: enki,
      link: "https://www.enki.studio/",
    },
    {
      title: "Exhibitor",
      name: "Flaunt",
      description:
        "Flaunt offers an AI-powered SaaS platform purposefully designed for beauty & fashion brands to grow their social media & scale their influencer marketing!",
      imageUrl: "/images/sponsors/flaunt-og.png",
      logoUrl: flaunt,
      link: "https://www.letsflaunt.com/",
    },
    {
      title: "Exhibitor",
      name: "Offer18",
      description:
        'Offer18 is an "Award Winning" Campaign Tracking Platform for Affiliate Networks, Advertisers, and Agencies with professional tracking capabilities. Offer18 helps digital professionals to create their affiliate network, optimize their campaign performance and utilize every bit of their traffic sources to generate better ROI using in-built advanced tools of technology.',
      imageUrl: "/images/sponsors/offer-og.png",
      logoUrl: offer,
      link: "https://www.offer18.com",
    },
    {
      title: "Exhibitor",
      name: "Voxxy Media",
      description:
        "Voxxy Media is an award-winning, integrated creator economy agency driving the future of digital storytelling across India, Indonesia, and Southeast Asia. Our comprehensive suite of offerings includes high-impact influencer marketing, exceptional content creation, robust community building, experiential activations, meme marketing, talent management, affiliate and social commerce, and strategic brand collaborations.",
      imageUrl: "/images/sponsors/voxxy-og.png",
      logoUrl: voxxy,
      link: "https://voxxymedia.com/",
    },
    {
      title: "Event contracting partner",
      name: "Pro Expo",
      description:
        "Pro Expo Ltd, based in Kenya, specializes in creative exhibition and stand construction solutions for events and conferences. Since 2016, the company has delivered over 870,000 square meters of stands across 46 exhibitions, serving diverse sectors like health, technology, hospitality, and automotive. Renowned for its efficiency and high-quality service, Pro Expo offers customized event setups, branding, and AV equipment hire. With a strong track record of delivering major projects like Medic East Africa and China Trade Week, Pro Expo is a trusted partner for businesses across East Africa and beyond.",
      imageUrl: "/images/sponsors/proexpo-og.png",
      logoUrl: proexpo,
      link: "https://www.pro-expo.co.ke/",
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
      className={`flex flex-col items-center sm:p-20 p-5 sm:pt-[100px] bg-white ${work_sans.className}`}
    >
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`text-5xl text-center text-black leading-[61.92px] max-md:text-4xl ${anton.className} `}
      >
        OUR SPONSORS
      </motion.div>

      <div className="self-stretch mt-24 mb-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-[3%] gap-y-14 flex-wrap max-md:flex-col  max-md:gap-0">
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
                  <div className="self-center font-medium text-center">
                    {sponsor.title}
                  </div>
                  <div className="mt-9 font-bold text-[#ccff00]">
                    {sponsor.name}
                  </div>
                  <div className="mt-6 text-sm tracking-tight leading-[130%]">
                    {sponsor.description}
                  </div>
                  <a href={sponsor.link} target="_blank">
                    <img
                      alt={sponsor.name}
                      src={sponsor.logoUrl.src}
                      className="mt-14 max-w-full aspect-[2.13] w-[114px] max-md:mt-10"
                    />
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* series sponsors #################################### */}
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`text-5xl text-center text-black leading-[61.92px] max-md:text-4xl ${anton.className} `}
      >
        OUR SERIES SPONSORS
      </motion.div>
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-16 text-2xl font-medium tracking-tighter leading-8 text-center text-black max-md:mt-10 max-md:max-w-full"
      >
        We extend our sincere gratitude to our valued sponsors for their
        <br />
        support and contribution towards the success of the event.
      </motion.div>
      <div className="self-stretch mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-[3%] gap-y-14 flex-wrap max-md:flex-col  max-md:gap-0">
          {/* Map over sponsors array and render sponsor cards dynamically */}
          {sponsors_series.map((sponsor, index) => (
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
                  <div className="self-center font-medium text-center">
                    {sponsor.title}
                  </div>
                  <div className="mt-9 font-bold text-[#ccff00]">
                    {sponsor.name}
                  </div>
                  <div className="mt-6 text-sm tracking-tight leading-5">
                    {sponsor.description}
                  </div>
                  <a href={sponsor.link} target="_blank">
                    {sponsor.special ? (
                      <img
                        src={sponsor.logoUrl}
                        className="mt-14 max-w-full aspect-[2.13] w-[114px] max-md:mt-10"
                      />
                    ) : (
                      <img
                        src={sponsor.logoUrl.src}
                        alt={sponsor.name}
                        className="mt-14 max-w-full aspect-[2.13] w-[114px] max-md:mt-10"
                      />
                    )}
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-20">
        <Button href="./register" color="green" img="arrow">
          Become a Sponsor
        </Button>
      </div>
    </div>
  );
}

export default Oursponsor;
