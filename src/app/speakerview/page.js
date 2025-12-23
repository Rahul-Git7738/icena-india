"use client";
import React, { useState, useEffect } from "react";
import { firestore } from "../../../firbase/clientApp";
import Headtop from "@/components/head/Headtop";
import { anton, work_sans } from "@/styles/fonts";

const SpeakerViews = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const speakersSnapshot = await firestore
          .collection("india-speakers2025")
          .get();
        const speakersData = speakersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Sort speakers alphabetically by first name
        const sortedSpeakers = speakersData.sort((a, b) =>
          a.firstName.localeCompare(b.firstName)
        );

        setSpeakers(sortedSpeakers);
      } catch (error) {
        console.error("Error fetching speakers:", error);
      }
    };

    fetchSpeakers();
  }, []);

  const deleteSpeaker = async (speakerId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this speaker?"
    );
    if (isConfirmed) {
      try {
        await firestore
          .collection("india-speakers2025")
          .doc(speakerId)
          .delete();
        // Refresh the speakers list after deletion
        const updatedSpeakers = speakers.filter(
          (speaker) => speaker.id !== speakerId
        );
        setSpeakers(updatedSpeakers);
        console.log("Speaker deleted successfully!");
      } catch (error) {
        console.error("Error deleting speaker:", error);
      }
    }
  };

  const toggleApproval = async (speakerId, currentApprovedStatus) => {
    try {
      await firestore.collection("india-speakers2025").doc(speakerId).update({
        approved: !currentApprovedStatus,
      });
      // Refresh the speakers list after updating approval status
      const updatedSpeakers = speakers.map((speaker) =>
        speaker.id === speakerId
          ? { ...speaker, approved: !currentApprovedStatus }
          : speaker
      );
      setSpeakers(updatedSpeakers);
      console.log("Speaker approval status updated successfully!");
    } catch (error) {
      console.error("Error updating speaker approval status:", error);
    }
  };

  const updatePriority = async (speakerId, newPriority) => {
    try {
      await firestore.collection("india-speakers2025").doc(speakerId).update({
        priority: newPriority,
      });
      // Refresh the speakers list after updating priority
      const updatedSpeakers = speakers.map((speaker) =>
        speaker.id === speakerId
          ? { ...speaker, priority: newPriority }
          : speaker
      );
      setSpeakers(updatedSpeakers);
      console.log("Speaker priority updated successfully!");
    } catch (error) {
      console.error("Error updating speaker priority:", error);
    }
  };

  const updateJobTitle = async (speakerId, newJobTitle) => {
    try {
      await firestore.collection("india-speakers2025").doc(speakerId).update({
        jobTitle: newJobTitle,
      });
      // Refresh the speakers list after updating job title
      const updatedSpeakers = speakers.map((speaker) =>
        speaker.id === speakerId
          ? { ...speaker, jobTitle: newJobTitle }
          : speaker
      );
      setSpeakers(updatedSpeakers);
      console.log("Speaker job title updated successfully!");
    } catch (error) {
      console.error("Error updating speaker job title:", error);
    }
  };

  const updateCompany = async (speakerId, newCompany) => {
    try {
      await firestore.collection("india-speakers2025").doc(speakerId).update({
        company: newCompany,
      });
      // Refresh the speakers list after updating company
      const updatedSpeakers = speakers.map((speaker) =>
        speaker.id === speakerId ? { ...speaker, company: newCompany } : speaker
      );
      setSpeakers(updatedSpeakers);
      console.log("Speaker company updated successfully!");
    } catch (error) {
      console.error("Error updating speaker company:", error);
    }
  };

  return (
    <div>
      <Headtop head="Speaker Views" />
      <div className={`container mx-auto p-8 bg-white ${work_sans.className}`}>
        <h1
          className={`text-3xl font-semibold mb-8 w-full text-center ${anton.className}`}
        >
          Speaker View
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="border rounded-lg w-[400px] overflow-hidden shadow-md relative"
            >
              <img
                src={speaker.imageUrl}
                alt={`${speaker.firstName} ${speaker.lastName}`}
                className="w-full h-56 object-cover object-top"
              />
              <div className="p-4">
                <p className="text-xl font-semibold mb-2">
                  {speaker.firstName} {speaker.lastName}
                </p>
                <p className="text-lg font-medium mb-2">
                  Job Title: {speaker.jobTitle}
                </p>
                <input
                  type="text"
                  placeholder="Update Job Title"
                  defaultValue={speaker.jobTitle || ""}
                  onBlur={(e) => updateJobTitle(speaker.id, e.target.value)}
                  className="border rounded px-2 py-1 mb-2 w-full"
                />
                <p className="text-lg font-medium mb-2">
                  Company: {speaker.company || "Undefined"}
                </p>
                <input
                  type="text"
                  placeholder="Update Company"
                  defaultValue={speaker.company || ""}
                  onBlur={(e) => updateCompany(speaker.id, e.target.value)}
                  className="border rounded px-2 py-1 mb-2 w-full"
                />
                <p className="text-lg font-medium mb-2">
                  Priority: {speaker.priority || "Undefined"}
                </p>
                <input
                  type="number"
                  placeholder="Set Priority"
                  defaultValue={speaker.priority || ""}
                  onChange={(e) =>
                    updatePriority(speaker.id, parseInt(e.target.value, 10))
                  }
                  className="border rounded px-2 py-1 mb-2 w-full"
                />
              </div>
              <button
                className={`absolute top-2 right-20 ${
                  speaker.approved ? "bg-green-500" : "bg-gray-500"
                } text-white px-2 py-1 rounded-md`}
                onClick={() => toggleApproval(speaker.id, speaker.approved)}
              >
                {speaker.approved ? "Approved" : "Not Approved"}
              </button>
              <button
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md"
                onClick={() => deleteSpeaker(speaker.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerViews;
