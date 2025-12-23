"use client";
import { useEffect } from "react";

function Ipvote({ name }) {
  useEffect(() => {
    // Redirect to a custom link automatically
    if (typeof window !== "undefined") {
      window.location.href = "https://india.theiena.com/vote/" + name; // Replace with your custom link
    }
  }, []); // Empty dependency array ensures this effect runs only once after component mount

  // Return null to prevent rendering any content
  return <div>Redirecting to vote page...</div>;
}

export default Ipvote;
