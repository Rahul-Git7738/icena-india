"use client";

import Headtop from "@/components/head/Headtop";
import MultiPageForm from "@/components/mutliregister/MultiPageForm";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

function Register() {
  return (
    <NextUIProvider>
      <div>
        <Headtop head="Register" />
        <h1 className="redal bg-white pt-20 text-center">
          *Free Delegate pass is not applicable to Technology providers,
          Consultants, Agencies, MarTech and AdTech Companies*
        </h1>
        <MultiPageForm />
      </div>
    </NextUIProvider>
  );
}

export default Register;
