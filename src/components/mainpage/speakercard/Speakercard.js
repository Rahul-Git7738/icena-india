"use client";

import * as React from "react";
import { anton } from "@/styles/fonts";
import DescriptionCard from "@/components/description-c/DescriptionCard";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";

// Import Firebase Firestore and initialize Firebase app if not already done
import { firestore } from "../../../../firbase/clientApp";

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
    <section
      className={`flex flex-col md:px-20 px-5 bg-white py-[200px] w-full   ${anton.className}`}
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
              {speakers.slice(0, 9).map((speaker, index) => (
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
        </>
      )}
      <motion.h2
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className={`self-center text-5xl ${
          speakers.length > 0 && "mt-52"
        } text-center text-black leading-[61.92px] max-md:max-w-full max-md:text-4xl`}
      >
        OUR PAST SPEAKERS
      </motion.h2>
      <div className="mt-[120px] w-full max-md:mt-10 max-md:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 gap-y-[150px] w-full">
          {pastIndiaspeakers.slice(0, 4).map((speaker, index) => (
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

      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ once: true, amount: 0.3 }}
        className="flex gap-5 self-center items-center md:mt-56 mt-96 relative md:top-0 top-32 w-full  text-2xl font-medium tracking-tighter uppercase max-md:flex-wrap max-md:mt-10 justify-center  "
      >
        <div className=" sm:scale-100 scale-75 flex justify-center sm:flex-row gap-5 flex-col items-center">
          <Button href="./speakers" color="green" img="arrow">
            See All Speakers
          </Button>
          <Button href="./register" color="black" img="mic">
            Become a Speaker
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

export default SpeakerCard;
