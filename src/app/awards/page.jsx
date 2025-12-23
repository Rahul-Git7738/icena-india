"use client";
import Criteria from "@/components/award-p/criteria/Criteria";
import CriteriaIn from "@/components/award-p/criteria2/CriteriaIn";
import Headtop from "@/components/head/Headtop";
import NominateForm from "@/components/nominateform/NominateForm";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";

function Awards() {
  return (
    <NextUIProvider>
      <Headtop head="Awards" />

      <Criteria />
      <CriteriaIn />
      <h1 className="redal bg-white pt-20 text-center">
        *Free Delegate pass is not applicable to Technology providers,
        Consultants, Agencies, MarTech and AdTech Companies*
      </h1>
      <NominateForm />
    </NextUIProvider>
  );
}

export default Awards;
