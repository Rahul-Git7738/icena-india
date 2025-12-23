"use client";
import React, { useState, useEffect } from "react";
import { firestore } from "../../../firbase/clientApp";
import Headtop from "@/components/head/Headtop";
import { anton, work_sans } from "@/styles/fonts";
import { Snippet } from "@nextui-org/react";

const VoteViews = () => {
  const [nomineesByCategory, setNomineesByCategory] = useState([]);
  const [searchQuery1, setSearchQuery1] = useState("");
  const [searchQuery2, setSearchQuery2] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [activeSection, setActiveSection] = useState("ranking");

  const [fetchedImages, setFetchedImages] = useState([]);
  const [searchResults2, setSearchResults2] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  useEffect(() => {
    const fetchTransformedImages = async () => {
      try {
        const imagesSnapshot = await firestore
          .collection("india-2025-transformed-images")
          .get();
        const imagesData = imagesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFetchedImages(imagesData);
      } catch (error) {
        console.error("Error fetching transformed images:", error);
      }
    };

    fetchTransformedImages();
  }, []);

  const handleSearch2 = () => {
    const query = searchQuery.trim().toLowerCase();

    if (query === "") {
      alert("Please enter a search query");
      setSearchResults([]); // Clear the search results
      return;
    }

    const filteredImages = fetchedImages.filter(
      (image) =>
        image.name.toLowerCase().includes(query) ||
        image.trf.toLowerCase().includes(query) ||
        image.url.toLowerCase().includes(query)
    );

    setSearchResults2(filteredImages);
  };

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

        const nomineesWithVotes = [];

        nomineesData.forEach((nominee) => {
          for (const categoryKey in nominee.categories) {
            const category = nominee.categories[categoryKey];
            if (category.og !== undefined) {
              nomineesWithVotes.push({
                id: nominee.id,
                imageUrl: nominee.imageUrl,
                category: category.og,
                vote: category.vote,
                firstName: nominee.firstName,
                lastName: nominee.lastName,
              });
            }
          }
        });

        // Sort nominees by vote count in descending order within each category
        const sortedNominees = nomineesWithVotes.sort(
          (a, b) => b.vote - a.vote
        );

        // Group nominees by category
        const groupedNominees = {};

        // First add marketer categories in order
        marketerCategories.forEach((category) => {
          const categoryNominees = sortedNominees.filter(
            (nominee) => nominee.category === category
          );
          if (categoryNominees.length > 0) {
            groupedNominees[category] = categoryNominees;
          }
        });

        // Then add influencer categories in order
        influencerCategories.forEach((category) => {
          const categoryNominees = sortedNominees.filter(
            (nominee) => nominee.category === category
          );
          if (categoryNominees.length > 0) {
            groupedNominees[category] = categoryNominees;
          }
        });

        setNomineesByCategory(groupedNominees);
      } catch (error) {
        console.error("Error fetching nominees:", error);
      }
    };

    fetchNominees();
  }, []);

  const deleteNominee = async (nomineeId, categoryToDelete) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this nominee?"
    );

    if (isConfirmed) {
      try {
        const nomineeRef = firestore
          .collection("india-nominees2025")
          .doc(nomineeId);
        const nomineeDoc = await nomineeRef.get();
        const nomineeData = nomineeDoc.data();

        if (!nomineeData) {
          console.error("Nominee not found");
          return;
        }

        const nomineeCategories = Object.keys(nomineeData.categories);

        if (nomineeCategories.length === 1) {
          // Only one category, delete the entire nominee
          await nomineeRef.delete();
          console.log("Nominee deleted successfully!");
        } else {
          // More than one category, remove only the specified category
          const updatedCategories = { ...nomineeData.categories };
          console.log(updatedCategories);

          // Convert the category name to its original format
          const formattedCategoryToDelete = Object.keys(updatedCategories).find(
            (key) =>
              key
                .toLowerCase()
                .replace(/\s/g, "")
                .replace(/[/\\.,;:'"!@#$%^&*()_+|~=`{}[\]]/g, "_") ===
              categoryToDelete
                .toLowerCase()
                .replace(/\s/g, "")
                .replace(/[/\\.,;:'"!@#$%^&*()_+|~=`{}[\]]/g, "_")
          );

          if (!formattedCategoryToDelete) {
            console.error("Category not found");
            return;
          }

          delete updatedCategories[formattedCategoryToDelete];

          // Update the nominee document with the modified categories
          await nomineeRef.update({ categories: updatedCategories });
          console.log("Category deleted successfully!");
        }

        // Refresh the nominees list after deletion
        const updatedNominees = { ...nomineesByCategory };
        for (const category in updatedNominees) {
          updatedNominees[category] = updatedNominees[category].filter(
            (nominee) => nominee.id !== nomineeId
          );
        }
        setNomineesByCategory(updatedNominees);
      } catch (error) {
        console.error("Error deleting nominee:", error);
      }
    }
  };

  const handleSearch = () => {
    const results = [];

    // Assuming searchQuery1 and searchQuery2 are state variables
    // declared and updated elsewhere in your component
    // If not, you may need to adjust this part
    const query1 = searchQuery1.trim().toLowerCase();
    const query2 = searchQuery2.trim().toLowerCase();

    if (query2 === "") {
      alert("Please enter a search query");
      setSearchResults([]); // Assuming setSearchResults is a state setter function
      return;
    }

    for (const category in nomineesByCategory) {
      const categoryResults = nomineesByCategory[category].filter(
        (nominee) =>
          nominee.firstName.toLowerCase().includes(query1) &&
          nominee.lastName.toLowerCase().includes(query2)
      );
      if (categoryResults.length > 0) {
        results.push({
          category: category,
          nominees: categoryResults,
        });
      }
    }
    setSearchResults(results); // Assuming setSearchResults is a state setter function
  };

  return (
    <div>
      <Headtop head="Vote View" />
      <div className="w-full h-full bg-white">
        <div
          className={`container mx-auto p-8 bg-white ${work_sans.className}`}
        >
          <h1
            className={`text-3xl font-semibold mb-8 w-full text-center ${anton.className}`}
          >
            Vote View
          </h1>

          <div className="flex justify-center my-20 text-xl">
            <button
              className={`mx-4 px-4 py-2 ${
                activeSection === "ranking" ? "bg-gray-200 font-bold" : ""
              }`}
              onClick={() => setActiveSection("ranking")}
            >
              Ranking
            </button>
            <button
              className={`mx-4 px-4 py-2 ${
                activeSection === "voteCount" ? "bg-gray-200 font-bold" : ""
              }`}
              onClick={() => setActiveSection("voteCount")}
            >
              Vote Count
            </button>

            {/* banner data */}
            <button
              className={`mx-4 px-4 py-2 ${
                activeSection === "banner" ? "bg-gray-200 font-bold" : ""
              }`}
              onClick={() => setActiveSection("banner")}
            >
              Banner
            </button>
          </div>

          {activeSection === "ranking" ? (
            <>
              {Object.entries(nomineesByCategory).map(
                ([category, nominees]) => (
                  <div key={category} className="mb-8">
                    <h2
                      className={`text-2xl font-semibold mb-4 w-full text-center ${anton.className}`}
                    >
                      {category}
                    </h2>
                    <div className="grid grid-cols-3 gap-4">
                      {nominees.map((nominee) => (
                        <div
                          key={nominee.id}
                          id={nominee.id}
                          className="border rounded-lg overflow-hidden shadow-md relative"
                        >
                          <img
                            src={nominee.imageUrl}
                            alt={`${nominee.firstName} ${nominee.lastName}`}
                            className="w-full h-56 object-contain object-top"
                          />
                          <div className="p-4">
                            <p className="text-xl font-semibold mb-2">
                              {nominee.firstName} {nominee.lastName}
                            </p>
                            <p className="text-lg font-medium mb-2">
                              Votes: {nominee.vote}
                            </p>
                            <Snippet
                              codeString={`https://india.theiena.com/vote/${nominee.firstName
                                .toLowerCase()
                                .replace(/\s/g, "")}_${nominee.lastName
                                .toLowerCase()
                                .replace(/\s/g, "")}`}
                              symbol={`https://india.theiena.com/vote/${nominee.firstName
                                .toLowerCase()
                                .replace(/\s/g, "")}_${nominee.lastName
                                .toLowerCase()
                                .replace(/\s/g, "")}`}
                              variant="flat"
                              color="default"
                            />
                          </div>
                          <button
                            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md"
                            onClick={() =>
                              deleteNominee(nominee.id, nominee.category)
                            }
                          >
                            Delete
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
            </>
          ) : activeSection === "voteCount" ? (
            <>
              <div className="flex justify-center my-10">
                <input
                  type="text"
                  placeholder="First Name"
                  value={searchQuery1}
                  onChange={(e) => setSearchQuery1(e.target.value)}
                  className="mr-4 px-4 py-2 border border-gray-300 rounded-md"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  value={searchQuery2}
                  onChange={(e) => setSearchQuery2(e.target.value)}
                  className="mr-4 px-4 py-2 border border-gray-300 rounded-md"
                />

                <button
                  onClick={handleSearch}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Search
                </button>
              </div>

              {/* Render search results */}
              {searchResults.length > 0 && (
                <div className="text-center mb-4">
                  <img
                    src={searchResults[0].nominees[0].imageUrl} // Taking the image URL for the first nominee
                    alt={`${searchResults[0].nominees[0].firstName} ${searchResults[0].nominees[0].lastName}`}
                    className="w-80 h-80 object-contain mx-auto"
                  />
                  <p className="text-xl font-semibold">
                    {searchResults[0].nominees[0].firstName}{" "}
                    {searchResults[0].nominees[0].lastName}
                  </p>
                </div>
              )}

              <div className="flex flex-row flex-wrap mt-8">
                {searchResults.map((result) => (
                  <div key={result.category} className="mb-8 w-1/2 px-20">
                    <div className="p-2 bg-gray-200 rounded-lg">
                      <h2
                        className={`text-xl font-semibold mb-1 ${anton.className}`}
                      >
                        {result.category}
                      </h2>
                      <div className="grid grid-cols-1 gap-4">
                        {result.nominees.map((nominee) => (
                          <div key={nominee.id}>
                            <p className="text-lg font-medium mb-2">
                              Votes: {nominee.vote}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="w-full h-full bg-white">
                {/* Search input */}
                <div className="flex justify-center my-10">
                  <input
                    type="text"
                    placeholder="Search by Name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mr-4 px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <button
                    onClick={handleSearch2}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    Search
                  </button>
                </div>
                {/* Display transformed images */}
                <div className="flex-wrap justify-center flex gap-5">
                  {(searchResults2.length > 0
                    ? searchResults2
                    : fetchedImages
                  ).map((image) => (
                    <div
                      key={image.id}
                      className="p-4 w-[45%] border rounded-lg shadow-md"
                    >
                      <p className="text-xl font-semibold mb-2">
                        Name: {image.name}
                      </p>
                      <p className="text-sm font-medium mb-2">
                        TRF: {image.trf}
                      </p>
                      <p className="text-sm font-medium mb-2 break-words">
                        URL: {image.url}
                      </p>
                      <img
                        src={image.url}
                        alt={image.name}
                        className="w-full h-56 object-contain object-top"
                      />
                      {/* <p className="text-lg font-medium mb-2">Values: {JSON.stringify(image.values)}</p> */}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoteViews;
