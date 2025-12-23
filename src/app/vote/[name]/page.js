"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { firestore } from "../../../../firbase/clientApp";
import Headtop from "@/components/head/Headtop";
import { anton, work_sans } from "@/styles/fonts";

const PersonalVote = ({ params }) => {
  const { name } = params;
  const [nomineeData, setNomineeData] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState({});
  const [email, setEmail] = useState("");
  const [social, setsocial] = useState("");
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  useEffect(() => {
    const fetchNomineeData = async () => {
      try {
        // Split the name into first and last names
        const [firstName, lastName] = name.toLowerCase().split("_");

        // Query the database with lowercase first and last names
        const nomineeSnapshot = await firestore
          .collection("india-nominees2025")
          .where("firstName", "==", firstName)
          .where("lastName", "==", lastName)
          .get();

        if (nomineeSnapshot.empty) {
          console.log("Nominee not found!");
          // Handle nominee not found (show 404 or a message)
          return;
        }

        const nominee = nomineeSnapshot.docs[0].data();
        setNomineeData(nominee);
        // Initialize selected categories
        const initialSelectedCategories = {};
        for (const categoryKey in nominee.categories) {
          initialSelectedCategories[categoryKey] = false;
        }
        setSelectedCategories(initialSelectedCategories);
      } catch (error) {
        console.error("Error fetching nominee data:", error);
      }
    };

    if (name) {
      fetchNomineeData();
    }
  }, [name]);

  const handleCategorySelect = (categoryKey) => {
    setSelectedCategories((prevSelectedCategories) => ({
      ...prevSelectedCategories,
      [categoryKey]: !prevSelectedCategories[categoryKey],
    }));
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

      // Fetch the latest nominee data before voting
      const nomineeRef = firestore
        .collection("india-nominees2025")
        .doc(nomineeData.id);
      const nomineeDoc = await nomineeRef.get();

      if (!nomineeDoc.exists) {
        console.error("Nominee not found");
        return;
      }

      const updatedNomineeData = nomineeDoc.data();

      // Iterate over the selected categories and update their vote counts
      for (const [categoryKey, isSelected] of Object.entries(
        selectedCategories
      )) {
        if (isSelected) {
          batch.update(nomineeRef, {
            [`categories.${categoryKey}.vote`]:
              updatedNomineeData.categories[categoryKey].vote + 1,
          });
        }
      }

      await batch.commit();
      console.log("Votes recorded successfully!");

      // Clear selected categories after voting
      setSelectedCategories({});
      setEmail("");
      // Show a popup alert
      window.alert("Thank you for voting!");
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

  const [firstName, lastName] = name.toLowerCase().split("_");
  const votingclosed = true;
  if (votingclosed) {
    return (
      <div>
        <Headtop head="Voting" opacity={true} />
        <div className={` mx-auto p-8 bg-white ${anton.className} `}>
          <h1
            className={`text-4xl font-semibold my-20 w-full uppercase text-center ${anton.className} `}
          >
            Voting is closed
          </h1>
          <p className={`text-center text-2xl  ${work_sans.className} `}>
            Thank you for your interest in voting for{" "}
            <span className="text-3xl font-semibold uppercase mb-8 text-center ">
              {firstName} {lastName}
            </span>
            .<br /> Voting is now closed. <br /> Winners will be announced soon.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Headtop head="Vote for me" opacity={true} />
      {nomineeData && (
        <div className=" mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold uppercase mb-8 text-center ">
            {firstName} {nomineeData?.middleName} {lastName}
          </h1>
          <div className="relative w-full flex justify-center h-[400px] mb-4 overflow-hidden rounded-lg">
            <img
              src={nomineeData.imageUrl}
              alt={name}
              layout="fill"
              objectFit="cover"
              width={300}
              height={400}
              className="object-cover object-top rounded-lg"
            />
          </div>
          <h2 className="text-xl font-semibold mb-4">Categories:</h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(nomineeData.categories).map(
              ([categoryKey, category]) => (
                <button
                  key={categoryKey}
                  className={`bg-gray-200 p-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-gray-800 hover:text-white ${
                    selectedCategories[categoryKey]
                      ? "bg-gray-800 text-white"
                      : ""
                  }`}
                  onClick={() => handleCategorySelect(categoryKey)}
                  onChange={() => handleCategorySelect(categoryKey)}
                >
                  {category.og}
                </button>
              )
            )}
          </div>
          {Object.values(selectedCategories).some((value) => value) && (
            <div className="sticky bottom-10 w-full flex justify-center">
              <button
                onClick={handleVote}
                className="newsletterbtn w-1/2 mx-auto"
              >
                Vote
              </button>
            </div>
          )}
        </div>
      )}
      {/* Email input popup/modal */}
      {showEmailPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg min-w-[50vw] shadow-lg">
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
                onClick={confirmVote}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Confirm
              </button>
              <button
                onClick={() => setShowEmailPopup(false)}
                className="bg-gray-300 text-gray-700 ml-4 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalVote;
