"use client";

import * as React from "react";
import { anton } from "@/styles/fonts";
import DescriptionCard from "@/components/description-c/DescriptionCard";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";

// Import Firebase Firestore and initialize Firebase app if not already done
import { firestore } from "../../../firbase/clientApp";

const speakersData = [
  {
    imageUrl: "/images/speakers/MOhannad.png",
    firstName: "Mohanned",
    lastName: "Abu Al-Majd",
    company: "Saudi Tourism Authority",
    jobTitle: "Executive Director",
    details: "Executive Director, Saudi Tourism Authority",
    linkedin: "https://www.linkedin.com/in/mohanned-abu-al-majd-3a553058/",
    instagram: "",
    tiktok: "",
    snapchat: "",
    youtube: "",
  },
  {
    imageUrl: "/images/speakers/Tracy Lanza.png",
    firstName: "Tracy",
    lastName: "Lanza",
    company: "Red Sea Global",
    jobTitle: "Group Head of Global Brand Development",
    details: "Group Head of Global Brand Development, Red Sea Global",
    linkedin: "https://www.linkedin.com/in/tracy-wirth-lanza-43a0ab9/",
    instagram: "",
    tiktok: "",
    snapchat: "",
    youtube: "",
  },
  {
    imageUrl: "/images/speakers/Mohammed Khoja.jpg",
    firstName: "Mohammed",
    lastName: "Khoja",
    company: "Hindamme",
    jobTitle: "Founder",
    details: "Founder, Hindamme",
    linkedin: "",
    instagram: "https://www.instagram.com/moekhoja/?hl=en",
    tiktok: "",
    snapchat: "",
    youtube: "",
  },
  {
    imageUrl: "/images/speakers/Saed Al Ali.jpg",
    firstName: "Saed",
    lastName: "AlAli",
    company: "Tabib Group",
    jobTitle: "Chief Marketing Officer",
    details: "Chief Marketing Officer, Tabib Group",
    linkedin: "https://www.linkedin.com/in/saedalali/",
    instagram: "",
    tiktok: "",
    snapchat: "",
    youtube: "",
  },
  {
    imageUrl: "/images/speakers/Hessa.jpg",
    firstName: "Hessa",
    lastName: "Al-Masoud",
    company: "Confidential Government",
    jobTitle: "Director of External Communications",
    details: "Director of External Communications, Confidential Government",
    linkedin: "https://www.linkedin.com/in/hessa-al-masoud-8b347920/",
    instagram: "",
    tiktok: "",
    snapchat: "",
    youtube: "",
  },
  {
    imageUrl: "/images/Portrait_Placeholder.png",
    firstName: "Faisal",
    lastName: "Abdallah",
    company: "Accor",
    jobTitle: "Group Director of Communications & Business Development",
    details: "Group Director of Communications & Business Development, Accor",
    linkedin: "https://www.linkedin.com/in/faisal-abdallah-%E2%9C%94-89504723/",
    instagram: "",
    tiktok: "",
    snapchat: "",
    youtube: "",
  },
  {
    imageUrl: "/images/speakers/Mustafa.png",
    firstName: "Mustafa",
    lastName: "Zaatari",
    company: "ToYou",
    jobTitle: "Chief Brand Officer",
    details: "Chief Brand Officer, ToYou",
    linkedin: "https://www.linkedin.com/in/mustafa-zaatari-7777a973/",
    instagram: "",
    tiktok: "",
    snapchat: "",
    youtube: "",
  },
  {
    imageUrl: "/images/speakers/Aamir Allibhoy.jpeg",
    firstName: "Aamir",
    lastName: "Allibhoy",
    company: "Tim Hortons",
    jobTitle: "Chief Marketing Officer",
    details: "Chief Marketing Officer, Tim Hortons",
    linkedin: "https://www.linkedin.com/in/aamirallibhoy/",
    instagram: "",
    tiktok: "",
    snapchat: "",
    youtube: "",
  },
  {
    imageUrl: "/images/speakers/Ahad_pic.jpg",
    firstName: "Ahad Hamza",
    lastName: "Nihal",
    company: "AOIC",
    jobTitle: "Marketing Director",
    details: "Marketing Director, AOIC",
    linkedin: "https://www.linkedin.com/in/ahad-hamza-nihal-6282a3117/",
    instagram: "",
    tiktok: "",
    snapchat: "",
    youtube: "",
  },
  {
    imageUrl: "/images/speakers/Hisham Baesen.jpg",
    firstName: "Hisham",
    lastName: "Baeshen",
    company: "",
    jobTitle: "Content creator",
    details: "Content creator",
    linkedin: "",
    instagram: "https://www.instagram.com/misho_baeshen/?hl=en",
    tiktok: "",
    snapchat: "",
    youtube: "",
  },
  {
    imageUrl: "/images/Portrait_Placeholder.png",
    firstName: "Sofana",
    lastName: "Dahlan",
    company: "Mustanad",
    jobTitle: "Founder",
    details: "Founder, Mustanad",
    linkedin: "https://www.linkedin.com/in/sofana-dahlan-b734801b/",
    instagram: "",
    tiktok: "",
    snapchat: "",
    youtube: "",
  },
  {
    imageUrl: "/images/speakers/Rajeh Ads.jpeg",
    firstName: "Rajeh",
    lastName: "Alharti",
    company: "",
    jobTitle: "Content Creator",
    details: "Content Creator",
    linkedin:
      "https://www.linkedin.com/in/rajeh-alharthi/?originalSubdomain=sa",
    instagram: "https://www.instagram.com/rajeh_90/?hl=en",
    tiktok: "",
    snapchat: "",
    youtube: "",
  },
  {
    imageUrl: "/images/speakers/Wydad.jpg",
    firstName: "Wydad",
    lastName: "Serri",
    company: "",
    jobTitle: "Content creator",
    details: "Content creator",
    linkedin: "",
    instagram: "https://www.instagram.com/wydad_serri/",
    tiktok: "",
    snapchat: "",
    youtube: "",
  },
  {
    imageUrl: "/images/Portrait_Placeholder.png",
    firstName: "Nathalie",
    lastName: "Fanj",
    company: "",
    jobTitle: "Content creator",
    details: "Content creator",
    linkedin: "",
    instagram: "https://www.instagram.com/nathaliefanj/?hl=en",
    tiktok: "",
    snapchat: "",
    youtube: "",
  },
  {
    imageUrl: "/images/speakers/Firas.jpg",
    firstName: "Firas",
    lastName: "Kamal",
    company: "Emaar, The Economic City",
    jobTitle: "Senior Director - Marketing & Communications",
    details:
      "Senior Director - Marketing & Communications at Emaar, The Economic City",
    linkedin: "https://www.linkedin.com/in/firas-kamal-3445b221/",
    instagram: "",
    tiktok: "",
    snapchat: "",
    youtube: "",
  },
  {
    imageUrl: "/images/speakers/Hatoon.jpg",
    firstName: "Dr. Hatoon",
    lastName: "Kadi",
    company: "Jeddah College of Advertising",
    jobTitle: "Dean",
    details: "Dean of Jeddah College of Advertising",
    linkedin: "https://www.linkedin.com/in/dr-hatoon-kadi-8713b14/",
    instagram: "",
    tiktok: "",
    snapchat: "",
    youtube: "",
  },
];

const speakersData2 = [
  {
    imageUrl: "/images/speaker-0.jpeg",
    name: "Jumana Khan",
    details: "Content Creator & Influencer",
    facebook: "",
    twitter: "",
    instagram: "https://www.instagram.com/jumana/",
    linkedin: "",
  },
  {
    imageUrl: "/images/speaker-1.jpeg",
    name: "Ibrahim Al Mulla",
    details: "CEO - VIEWS",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/ibrahim-al-mulla-a325793b/",
  },
  {
    imageUrl: "/images/speaker-2.jpg",
    name: "Marwa Kaabour",
    details:
      "Head of Marketing & Comms Al Masaood, Nissan, Infiniti, Renault, Bridgestone",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/marwakaabour/",
  },
  {
    imageUrl: "/images/speaker-3.jpg",
    name: "Rand Dalati",
    details: "Content Creator & Influencer",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/rand-dalati-b632821a0/",
  },
  {
    imageUrl: "/images/speaker-4.jpg",
    name: "Myreine A. MASSIH",
    details:
      "Group Marketing, Communication & Creative Director, Damas Jewellery",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/myreineamassih/",
  },
  {
    imageUrl: "/images/speaker-6.jpg",
    name: "Nuran Mekky",
    details:
      "Group Head - CVM Operations and Customer Experience, Gargash Group",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/nuran-mekky-clmp-64a4498a/",
  },
  {
    imageUrl: "/images/speaker-8.jpg",
    name: "Taghrid",
    details:
      "Executive Director - Group Communications & Destination Marketing, Miral",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/taghrid-alsaeed/",
  },
  {
    imageUrl: "/images/speaker-10.jpeg",
    name: "Ahmed Al Nasheet",
    details: "Content Creator & Influencer",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    imageUrl: "/images/speaker-11.jpeg",
    name: "Yara bou Monsef",
    details: "Content Developer & Influencer",
    facebook: "",
    twitter: "",
    instagram: "https://www.instagram.com/yaraboumonsef",
    linkedin: "",
  },
  {
    imageUrl: "/images/speaker-12.jpg",
    name: "Zena louay",
    details: "Content Creator & Influencer",
    facebook: "",
    twitter: "",
    instagram: "https://www.instagram.com/zena_louay",
    linkedin: "",
  },
  {
    imageUrl: "/images/speaker-17.jpg",
    name: "Zeynab El-helw",
    details: "Influencer & Content Creator",
    facebook: "",
    twitter: "",
    instagram: "https://www.instagram.com/zeynabelhelw",
    linkedin: "",
  },
  {
    imageUrl: "/images/speaker-18.jpeg",
    name: "Mohammed Arif",
    details: "Founder & CEO, Instachef Chef At Your Doorstep",
    facebook: "",
    twitter: "",
    instagram: "https://www.instagram.com/zeynabelhelw",
    linkedin: "",
  },
  {
    imageUrl: "/images/SHeen gurrib.jpg",
    name: "Dr Sheen Gurrib",
    details: "Content Creator, Business Coach, Tech Entrepreneur",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/dr-sheen-gurrib-frsa-3ba223107/",
  },
  {
    imageUrl: "/images/Ghida.jpeg",
    name: "Ghida Majzoub",
    details: "Journalist & TV Host",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/ghidamajzoub/",
  },
  {
    imageUrl: "/images/Riya Sapare.jpg",
    name: "Riya Sapare",
    details: "Marketing & Public Relations, Movenpick Hotel Jumeirah Beach",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/riya-sapare-998b23115/",
  },
  {
    imageUrl: "/images/Suad Merchant.jpg",
    name: "Suad Merchant",
    details: "Global Head of Brand & Corporate Communication, Mashreq",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/suad-merchant-7985906/",
  },
  {
    imageUrl: "/images/roxana.jpeg",
    name: "Roxana Nicolescu",
    details: "VP Brand Marketing, Wego.com",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/roxana-nicolescu-851a7475/",
  },
  {
    imageUrl: "/images/Aishwarya Nambiar.jpg",
    name: "Aishwarya Nambiar",
    details: "Global Brand Marketing, Etihad Airways",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/aishwarya-nambiar-aa4a4222/",
  },
  {
    imageUrl: "/images/Portrait_Placeholder.png",
    name: "Walid Elmusrati",
    details: "Content Developer & Influencer",
    facebook: "www.facebook.com/walidelmusrati",
    twitter: "www.x.com/walidelmusrati",
    instagram: "www.instagram.com/walidelmusrati",
    linkedin: "https://www.linkedin.com/in/walidelmusrati",
  },
  {
    imageUrl: "/images/Portrait_Placeholder.png",
    name: "Kibonen Nfi",
    details: "Partner and CEO, Kibonen",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/kibonen/",
  },
  {
    imageUrl: "/images/Portrait_Placeholder.png",
    name: "Farah Al Alami",
    details: "Chief Communications & Marketing Officer, ADSCC",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/farah-al-alami-8897a622/",
  },
];

function SpeakerCard() {
  const [speakers, setSpeakers] = React.useState([]); // State to store fetched speakers data
  const [pastIndiaspeakers, setPastIndiaspeakers] = React.useState([]); // State to store fetched past speakers data

  React.useEffect(() => {
    // Function to fetch speakers data from Firestore
    const fetchSpeakers = async () => {
      try {
        const speakersCollection = await firestore
          .collection("india-speakers2025")
          .where("approved", "==", true) // Filter speakers where approved is true
          .get();
        const speakersData = speakersCollection.docs.map((doc) => doc.data());
        const sortedSpeakers = speakersData.sort(
          (a, b) => (a.priority ?? Infinity) - (b.priority ?? Infinity)
        );

        setSpeakers(sortedSpeakers);
      } catch (error) {
        console.error("Error fetching speakers:", error);
      }
    };

    // Call the fetchSpeakers function when component mounts
    fetchSpeakers();

    // Function to fetch past speakers data from Firestore
    const fetchPastIndiaspeakers = async () => {
      try {
        const pastIndiaspeakersCollection = await firestore
          .collection("india-speakers")
          .where("approved", "==", true) // Filter speakers where approved is true
          .get();
        const pastIndiaspeakersData = pastIndiaspeakersCollection.docs.map(
          (doc) => doc.data()
        );
        const sortedPastIndiaspeakers = pastIndiaspeakersData.sort(
          (a, b) => (a.priority ?? Infinity) - (b.priority ?? Infinity)
        );

        setPastIndiaspeakers(sortedPastIndiaspeakers);
      } catch (error) {
        console.error("Error fetching past speakers:", error);
      }
    };

    // Call the fetchPastIndiaspeakers function when component mounts
    fetchPastIndiaspeakers();
  }, []); // Empty dependency array ensures useEffect runs only once

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
    <>
      <section
        className={`flex flex-col md:px-20 px-5 bg-white py-[100px] w-full   ${anton.className}`}
      >
        {/* {speakers.length > 0 && (
          <>
            <motion.h2
              initial={offscreen}
              whileInView={onscreen}
              viewport={{ once: true, amount: 0.3 }}
              className="self-center text-5xl text-center text-black leading-[61.92px] max-md:max-w-full max-md:text-4xl"
            >
              KEYNOTE SPEAKER
            </motion.h2>
            <div className="mt-[100px] mb-[250px] w-full max-md:mt-10 max-md:max-w-full flex justify-center">
              <div className="grid justify-center">
                {speakers.slice(0, 1).map((speaker, index) => (
                  <motion.div
                    initial={offscreen}
                    whileInView={onscreen}
                    viewport={{ once: true, amount: 0.3 }}
                    key={index}
                  >
                 
                    <DescriptionCard
                      key={index}
                      img={speaker.imageUrl} // Speaker image URL
                      title={speaker.firstName + " " + speaker.lastName} // Full name
                      job={
                        speaker.jobTitle +
                        (speaker.company ? ", " + speaker.company : "")
                      } // Job profile and company
                      des={speaker.details} // Speaker description
                      linkedin={speaker.linkedin} // LinkedIn URL
                      instagram={speaker.instagram} // Instagram URL
                      tiktok={speaker.tiktok} // TikTok URL
                      snapchat={speaker.snapchat} // Snapchat URL
                      youtube={speaker.youtube} // YouTube URL
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        )} */}

        {speakers.length > 0 && (
          <>
            {" "}
            <motion.h2
              initial={offscreen}
              whileInView={onscreen}
              viewport={{ once: true, amount: 0.3 }}
              className="self-center text-5xl text-center text-black leading-[61.92px] max-md:max-w-full max-md:text-4xl"
            >
              OUR ESTEEMED SPEAKERS
            </motion.h2>
            <div className="mt-[120px] w-full max-md:mt-10 max-md:max-w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 gap-y-[150px] w-full">
                {speakers.slice(0).map((speaker, index) => (
                  <motion.div
                    initial={offscreen}
                    whileInView={onscreen}
                    viewport={{ once: true, amount: 0.3 }}
                    key={index}
                  >
                    <DescriptionCard
                      key={index}
                      img={speaker.imageUrl} // Speaker image URL
                      title={speaker.firstName + " " + speaker.lastName} // Full name
                      job={
                        speaker.jobTitle +
                        (speaker.company ? ", " + speaker.company : "")
                      } // Job profile and company
                      des={speaker.details} // Speaker description
                      linkedin={speaker.linkedin} // LinkedIn URL
                      instagram={speaker.instagram} // Instagram URL
                      tiktok={speaker.tiktok} // TikTok URL
                      snapchat={speaker.snapchat} // Snapchat URL
                      youtube={speaker.youtube} // YouTube URL
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        )}
      </section>

      <section
        className={`flex flex-col md:px-20 px-5 bg-white py-[20px] w-full   ${anton.className}`}
      >
        <motion.h2
          initial={offscreen}
          whileInView={onscreen}
          viewport={{ once: true, amount: 0.3 }}
          className={`self-center text-5xl text-center ${
            speakers.length > 0 && "pt-[200px]"
          }  text-black leading-[61.92px] max-md:max-w-full max-md:text-4xl`}
        >
          PAST INDIA SPEAKERS
        </motion.h2>
        <div className="mt-[120px] w-full max-md:mt-10 max-md:max-w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 gap-y-[150px] w-full">
            {pastIndiaspeakers.map((speaker, index) => (
              <motion.div
                initial={offscreen}
                whileInView={onscreen}
                viewport={{ once: true, amount: 0.3 }}
                key={index}
              >
                {/* Replace sample data with fetched speaker data */}
                <DescriptionCard
                  key={index}
                  img={speaker.imageUrl} // Speaker image URL
                  title={speaker.firstName + " " + speaker.lastName} // Full name
                  job={
                    speaker.jobTitle +
                    (speaker.company ? ", " + speaker.company : "")
                  } // Job profile and company
                  des={speaker.details} // Speaker description
                  linkedin={speaker.linkedin} // LinkedIn URL
                  instagram={speaker.instagram} // Instagram URL
                  tiktok={speaker.tiktok} // TikTok URL
                  snapchat={speaker.snapchat} // Snapchat URL
                  youtube={speaker.youtube} // YouTube URL
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`flex flex-col md:px-20 px-5 bg-white pb-[100px] w-full   ${anton.className}`}
      >
        <motion.div
          initial={offscreen}
          whileInView={onscreen}
          viewport={{ once: true, amount: 0.3 }}
          className="flex gap-5 self-center md:mt-40 mt-96 pt-20 md:pt-0 max-w-full text-2xl font-medium tracking-tighter uppercase leading-[90px] max-md:flex-wrap max-md:mt-10"
        >
          <Button href="./register" color="black" img="mic">
            Become a Speaker
          </Button>
        </motion.div>
      </section>
    </>
  );
}

export default SpeakerCard;
