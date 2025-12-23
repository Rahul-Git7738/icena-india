import Aboutone from "@/components/about-p/aboutone/Aboutone";
import Ourmisson from "@/components/about-p/ourmission/Ourmission";
import Reasons from "@/components/about-p/reasons/Reasons";
import Venue from "@/components/about-p/venue/Venue";
import Whattoexcept from "@/components/about-p/whattoexpect/Whattoexpect";
import Whyattend from "@/components/about-p/whyattend/Whyattend";

import Headtop from "@/components/head/Headtop";
import React from "react";

function About() {
  return (
    <div>
      <Headtop head="About" />

      <Aboutone />
      <Reasons />
      <Ourmisson />
      <Whyattend />
      <Whattoexcept />
      <Venue />
    </div>
  );
}

export default About;
