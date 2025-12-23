"use client";
import Socialshare from "@/app/socialshare/page";
import React, { useState } from "react";

function page() {
  const [so, setSo] = useState(null);

  const ok = () => {
    const sop = (
      <Socialshare field="delegate" category="influencer" pr="megha" />
    );
    setSo(sop);
  };

  return (
    <div className="pt-56">
      <button onClick={ok}>click</button>
      {so && so}
    </div>
  );
}

export default page;
