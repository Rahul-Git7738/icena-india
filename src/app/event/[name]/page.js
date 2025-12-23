import Headtop from "@/components/head/Headtop";
import MultiPageForm from "@/components/mutliregister/MultiPageForm";
import NominateForm from "@/components/nominateform/NominateForm";
import React from "react";
import { notFound } from "next/navigation";
import NewMultiPageForm from "@/components/prform/NewMultiPageForm";
import Spkrform from "@/components/spkr/Spkrform";
import { firestore } from "../../../../firbase/clientApp";
import Ipvote from "@/components/ipvote/Ipvote";

// put meta image

export async function generateMetadata({ params }) {
  const { name } = params;
  const nameArr = name.split("_");

  // load data from firebase search using trf:nameArr[1]

  if (nameArr.length > 1) {
    const nomineeSnapshot = await firestore
      .collection("india-2025-transformed-images")
      .where("trf", "==", nameArr[1])
      .get();

    if (!nomineeSnapshot.empty) {
      const nominee = nomineeSnapshot.docs[0].data();
      return {
        title: "IEC&A Registration",
        description: "Influence Exchange Confex and Awards Registration",
        openGraph: {
          title: "Register for the event",
          description: "Influence Exchange Confex and Awards Registration",

          images: [
            {
              url: nominee.url,
              alt: "Register for the event",
            },
          ],
        },
      };
    }
  }

  return {
    title: "IEC&A Registration",
    description: "Influence Exchange Confex and Awards Registration",
    openGraph: {
      title: "Register for the event",
      description: "Influence Exchange Confex and Awards Registration",

      images: [
        {
          url: "https://india.theiena.com/openg.jpg",
          alt: "Register for the event",
        },
      ],
    },
  };
}

function page({ params }) {
  const { name } = params;

  // check if name consists  _ or not and make it two wordsif yes

  const nameArr = name.split("_");

  const data = [
    "megha",
    "navya",
    "sonu",
    "sonuchauhan",
    "veera",
    "fthima",
    "mk",
    "priyanshi",
  ];

  const formData = {
    megha: {
      FormType: "general",
      emails: [
        "testokie1@gmail.com",
        "megha.salian@influenceexchangegroup.com",
        "mohamed.suhel@influenceexchangegroup.com",
      ],
    },
    navya: {
      FormType: "general",
      emails: [
        "testokie1@gmail.com",
        "megha.salian@influenceexchangegroup.com",
        "navya.kotian@influenceexchangegroup.com",
        "mohamed.suhel@influenceexchangegroup.com",
      ],
    },
    veera: {
      FormType: "general",
      emails: [
        "testokie1@gmail.com",
        "megha.salian@influenceexchangegroup.com",
        "mohamed.suhel@influenceexchangegroup.com",
        "veera.crasta@influenceexchangegroup.com",
      ],
    },
    fathima: {
      FormType: "general",
      emails: [
        "testokie1@gmail.com",
        "megha.salian@influenceexchangegroup.com",
        "mohamed.suhel@influenceexchangegroup.com",
        "fathima.shaikh@influenceexchangegroup.com",
      ],
    },
    mk: {
      FormType: "general",
      emails: [
        "testokie1@gmail.com",
        "mohamed.suhel@influenceexchangegroup.com",
        "megha.kottary@influenceexchangegroup.com",
        "megha.salian@influenceexchangegroup.com",
      ],
    },
    arfath: {
      FormType: "general",
      emails: [
        "testokie1@gmail.com",
        "mohamed.suhel@influenceexchangegroup.com",
        "Mohammed.Arfath@influenceexchangegroup.com",
        "megha.salian@influenceexchangegroup.com",
      ],
    },
    priyanshi: {
      FormType: "speaker",
      emails: [
        "testokie1@gmail.com",
        "mohamed.suhel@influenceexchangegroup.com",
        "priyanshi.pandey@influenceexchangegroup.com",
      ],
    },
  };

  if (formData.hasOwnProperty(nameArr[0])) {
    const { FormType, emails } = formData[nameArr[0]];
    // console.log(FormType, emails);

    return (
      <div>
        <Headtop head="Event Registration" />
        <h1 className="redal bg-white md:pt-20 pt-5 text-center">
          *Free Delegate pass is not applicable to Technology providers,
          Consultants, Agencies, MarTech and AdTech Companies*
        </h1>
        {FormType === "speaker" && <Spkrform to={emails} name={nameArr[0]} />}
        {FormType === "general" && (
          <NewMultiPageForm to={emails} name={nameArr[0]} />
        )}
      </div>
    );
  } else {
    if (!name.includes("_")) {
      return notFound();
    }

    return <Ipvote name={name} />;
  }
}

export default page;
