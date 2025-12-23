"use client";
import React, { useState, useEffect } from "react";
import { firestore } from "../../../firbase/clientApp";
import Headtop from "@/components/head/Headtop";
import { anton, work_sans } from "@/styles/fonts";

const Voting = () => {
  const influencerCategories = [
    "Mega/Celeb-Influencer of the Year",
    "Macro-Influencer of the Year",
    "Micro-Influencer of the Year",
    "Nano Influencer of the year",
    "Creative Visual Content Creator",
    "Social Media Engagement Champion",
    "Best Fashion and Style Influencer of the Year",
    "Best Travel Influencer of the Year",
    "Best Beauty Influencer of the Year",
    "Best Health & Wellbeing Influencer of the Year",
    "Best Financial Influencer Award",
    "Gaming Influencer of the Year",
    "Blogger of the year",
    "Mom Influencer of the year",
    "Youtuber of the year",
    "Entertainment Maven of the Year",
    "Food/Culinary Influencer of the Year",
    "Educational Content Creator of the Year",
    "Best Art & Photography Influencer",
    "Plus size influencer of the Year",
    "Best Tech Influencer of the Year",
    "Most Promising Influencer of the Year",
  ];

  const marketerCategories = [
    "Marketing Leader of the Year",
    "Branding Leader of the Year",
    "Digital Marketeer of the Year",
    "Influencer Marketeer of the Year",
    "Social Media Marketeer of the Year",
    "Data-Driven Marketer of the Year",
    "Brand Activation Strategist of the Year",
    "Customer Experience Advocate",
    "Digital Transformation Leader of the Year",
    "PR and Communication Strategist of the Year",
  ];

  const [nomineesByCategory, setNomineesByCategory] = useState({});
  const [selectedNominees, setSelectedNominees] = useState([]);
  const [isAnyCategorySelected, setIsAnyCategorySelected] = useState(false);
  const [email, setEmail] = useState("");
  const [social, setsocial] = useState("");
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  useEffect(() => {
    const fetchNominees = async () => {
      try {
        const nomineesSnapshot = await firestore
          .collection("india-nominees2025")
          .get();
        const nomineesData = nomineesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const nomineesByCategoryObj = {};
        nomineesData.forEach((nominee) => {
          for (const categoryKey in nominee.categories) {
            const category = nominee.categories[categoryKey];
            if (category.og !== undefined) {
              if (!nomineesByCategoryObj[category.og]) {
                nomineesByCategoryObj[category.og] = [];
              }
              nomineesByCategoryObj[category.og].push({
                id: nominee.id,
                imageUrl: nominee.imageUrl,
                selected: false,
                category: category.og,
                vote: category.vote,
                firstName: nominee.firstName,
                middleName: nominee?.middleName,
                lastName: nominee.lastName,
              });
            }
          }
        });

        // Sort nominees by category according to influencerCategories and marketerCategories
        const sortedNomineesByCategory = {};
        marketerCategories.forEach((category) => {
          if (nomineesByCategoryObj[category]) {
            sortedNomineesByCategory[category] =
              nomineesByCategoryObj[category];
          }
        });
        influencerCategories.forEach((category) => {
          if (nomineesByCategoryObj[category]) {
            sortedNomineesByCategory[category] =
              nomineesByCategoryObj[category];
          }
        });

        setNomineesByCategory(sortedNomineesByCategory);
      } catch (error) {
        console.error("Error fetching nominees:", error);
      }
    };

    fetchNominees();
  }, []);

  // Handle nominee selection, vote, email validation, and email existence check functions...
  const handleNomineeSelect = (category, nomineeId) => {
    setSelectedNominees((prevSelectedNominees) => {
      const existingNomineeIndex = prevSelectedNominees.findIndex(
        (selectedNominee) =>
          selectedNominee.category === category &&
          selectedNominee.nomineeId === nomineeId
      );

      // If the nominee is already selected, deselect it
      if (existingNomineeIndex !== -1) {
        const updatedSelectedNominees = [...prevSelectedNominees];
        updatedSelectedNominees.splice(existingNomineeIndex, 1);
        return updatedSelectedNominees;
      } else {
        // If the nominee is not selected, add it to the selected nominees
        setIsAnyCategorySelected(true); // Set flag to true when any category is selected
        return [
          ...prevSelectedNominees,
          {
            nomineeId: nomineeId,
            category: category,
          },
        ];
      }
    });
  };

  const handleVote = async () => {
    // Open the email input popup
    setShowEmailPopup(true);
  };

  const confirmVote = async () => {
    // Close the email input popup

    // Perform email validation and check if the email already exists in Firebase
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      alert("Please enter a valid email address.");
      return;
    }

    // const emailExists = await checkEmailExists(email);
    const emailExists = false;
    if (emailExists) {
      alert("You have already voted with this email address.");
      return;
    }

    setShowEmailPopup(false);
    // If all checks pass, proceed with voting
    try {
      const batch = firestore.batch();

      // const isNewEmail = await checkEmailExists(email);
      const isNewEmail = false;

      if (!isNewEmail) {
        // Add the email to the votes collection if it's a new email
        const voteRef = firestore.collection("india-votes2025").doc();
        batch.set(voteRef, { email: email, social: social }); // Include social media handle
      }
      for (const nomineeSelection of selectedNominees) {
        const { category, nomineeId } = nomineeSelection;
        const nomineeRef = firestore
          .collection("india-nominees2025")
          .doc(nomineeId);
        const nomineeSnapshot = await nomineeRef.get();

        if (nomineeSnapshot.exists) {
          const nomineeData = nomineeSnapshot.data();
          const updatedCategories = { ...nomineeData.categories };

          const categoryKey = category
            .replace(/\s/g, "")
            .replace(/[/\\.,;:'"!@#$%^&*()_+|~=`{}[\]]/g, "_");

          if (updatedCategories.hasOwnProperty(categoryKey)) {
            updatedCategories[categoryKey].vote += 1;
          }

          const updatedVote = updatedCategories[categoryKey].vote;
          batch.update(nomineeRef, {
            [`categories.${categoryKey}.vote`]: updatedVote,
          });
        }
      }

      await batch.commit();
      console.log("Votes recorded successfully!");
      // Trigger popup after voting is done
      alert("Thank you for voting! Your vote has been recorded successfully.");

      // Clear selected nominees and email input
      setSelectedNominees([]);
      setEmail("");
    } catch (error) {
      console.error("Error recording votes:", error);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const checkEmailExists = async (email) => {
    try {
      const query = await firestore
        .collection("india-votes2025")
        .where("email", "==", email)
        .get();
      return !query.empty;
    } catch (error) {
      console.error("Error checking email existence:", error);
      return false;
    }
  };

  const votingclosed = true;
  if (votingclosed) {
    return (
      <div>
        <Headtop head="Voting" opacity={true} />
        <div className={` mx-auto p-8 bg-white ${work_sans.className} `}>
          <h1
            className={`text-4xl font-semibold my-20 w-full uppercase text-center ${anton.className} `}
          >
            Voting is closed
          </h1>
          <p className={`text-center text-2xl  ${work_sans.className} `}>
            Thank you for your interest in voting.
            <br /> Voting is now closed. <br /> Winners will be announced soon.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Headtop head="Voting" opacity={true} />
      <div className={` mx-auto p-8 bg-white ${work_sans.className} `}>
        <h1
          className={`text-4xl font-semibold my-20 w-full uppercase text-center ${anton.className} `}
        >
          Vote for Nominees
        </h1>
        {/* Render nominees */}
        {Object.entries(nomineesByCategory).map(([category, nominees]) => (
          <CategoryNominees
            key={category}
            category={category}
            nominees={nominees}
            handleNomineeSelect={handleNomineeSelect}
            selectedNominees={selectedNominees}
          />
        ))}
        {selectedNominees.length !== 0 && (
          <div className="sticky bottom-10 w-full flex justify-center">
            <button onClick={handleVote} className="newsletterbtn w-1/2">
              Vote
            </button>
          </div>
        )}

        {/* Email input popup/modal */}
        {showEmailPopup && (
          <div className="fixed top-0 left-0 w-full  h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md min-w-[50vw]">
              <h2 className="text-xl font-semibold mb-4">
                Enter Your Email<spam className="text-red-500">*</spam>
              </h2>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
                placeholder="Your email"
              />
              <h2 className="text-xl font-semibold mb-4">Social</h2>
              <input
                type="text"
                value={social}
                onChange={(e) => setsocial(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
                placeholder="Socials"
              />

              <div className="flex justify-end">
                <button
                  onClick={() => setShowEmailPopup(false)}
                  className="mr-4 px-6 py-2 bg-gray-300 text-gray-800 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmVote}
                  className="px-6 py-2 bg-blue-500 text-white rounded-md"
                >
                  Vote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CategoryNominees = ({
  category,
  nominees,
  handleNomineeSelect,
  selectedNominees,
}) => {
  return (
    <div key={category} className="mb-8">
      <h2
        className={`text-3xl font-semibold my-10 w-full text-center ${work_sans.className} `}
      >
        {category}
      </h2>
      <div className="flex flex-wrap gap-10 justify-center items-center px-40 ">
        {nominees
          .sort((a, b) => a.firstName.localeCompare(b.firstName))
          .map((nominee) => (
            <div className="flex flex-col items-center w-1/4 h-[300px]">
              <div
                key={nominee.id}
                className={`relative border  w-[200px] h-[200px] bg-black overflow-hidden shadow-md ${
                  selectedNominees.some(
                    (selectedNominee) =>
                      selectedNominee.category === category &&
                      selectedNominee.nomineeId === nominee.id
                  )
                    ? "border-blue-500  border-[4px] "
                    : "border-gray-100  border-[4px]"
                }`}
                onClick={() => handleNomineeSelect(category, nominee.id)}
              >
                <img
                  src={nominee.imageUrl}
                  alt={nominee.firstName}
                  className="w-[200px] max-h-80 h-full  object-contain object-top "
                />

                {selectedNominees.some(
                  (selectedNominee) =>
                    selectedNominee.category === category &&
                    selectedNominee.nomineeId === nominee.id
                )}
              </div>
              <div className="p-4">
                <p className="text-xl font-semibold uppercase mb-2 text-center">
                  {nominee.firstName} {nominee?.middleName} {nominee.lastName}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Voting;
