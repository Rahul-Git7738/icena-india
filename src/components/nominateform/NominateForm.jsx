"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { storage, firestore } from "../../../firbase/clientApp";
import Marquee from "react-fast-marquee";
import { work_sans } from "@/styles/fonts";
import {
  Select,
  SelectItem,
  Input,
  Checkbox,
  Autocomplete,
  AutocompleteItem,
  Snippet,
} from "@nextui-org/react";
import Image from "next/image";
import img1 from "../../../public/images/Intersect.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { MuiPhone } from "../phone/MuiPhone";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Socialshare from "../../app/socialshare/page";

const NominateForm = () => {
  const [step, setStep] = useState(1);
  const [field, setField] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countries, setCountries] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [poppage, setPoppage] = useState(null);
  const [sent, setSent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [industry, setIndustry] = useState("");
  const [votelink, setvotelink] = useState("");
  const [so, setso] = useState(null);
  const [rmstring, setrmstring] = useState("");

  const [values, setValues] = useState(new Set([]));
  const [imgu, setimgu] = useState("");

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    field: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    country: "",
    industry: "",
    linkedin: "",
    instagram: "",
    youtube: "",
    tiktok: "",
    snapchat: "",
    image: null,
  });

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);

        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  const handleFieldSelect = (selectedField) => {
    console.log(selectedField);
    setFormData({ ...formData, field: selectedField });
    setField(selectedField);
  };

  const handleCategorySelect = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const maskImageStyle = {
    maskImage:
      "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
  };
  const handleFormDataChange = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    if (
      formData.firstName === "" &&
      formData.lastName === "" &&
      formData.jobTitle === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    const imageFile = e.target.files[0];
    // if (imageFile.size > 1000000) {
    //   alert("Image size should be less than 1MB");
    //   return;
    // }

    if (imageFile.width <= 800 && imageFile.height <= 800) {
      alert("Image should be in 800px x 800px");
      return;
    }
    console.log(imageFile);
    setFormData({ ...formData, image: imageFile });

    const randomString = Math.random().toString(36).substring(7);
    console.log(randomString);
    setrmstring(randomString);

    const title1 = (formData.firstName + " " + formData.lastName).replace(
      /[_\-,]/g,
      ""
    );
    const company1 = formData.jobTitle.replace(/[_\-,]/g, "");
    const marco1 = formData.company.replace(/[_\-,]/g, "");

    const imageUrl = URL.createObjectURL(imageFile);
    const popup = (
      <div className="relative w-[100%] h-fit max-h-[30vh] sm:max-h-[70vh] pb-[10vh] flex justify-center items-center">
        <img
          src={imageUrl}
          alt={title1}
          className="object-contain w-[100%] max-h-[25vh] h-[60vh] sm:max-h-[60vh]"
        />
        <button
          onClick={() => {
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = `${title1.replace(/\s/g, "")}_poster.jpg`;
            link.click();
          }}
          className="newsletterbtn w-full absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black/30 text-white p-2 rounded-md"
        >
          Download Poster
        </button>
      </div>
    );
    setPoppage(popup);

    const socials = (
      <Socialshare
        category={formData.field}
        field="nomination"
        pr="megha"
        rem={randomString}
        vote={
          formData.firstName.toLowerCase().replace(/\s/g, "") +
          "_" +
          formData.lastName.toLowerCase().replace(/\s/g, "")
        }
      />
    );
    setso(socials);
  };

  const handleSubmit = async (e) => {
    try {
      if (formData.phone.length < 10) {
        alert("Please fill complete phone number");
        return;
      }
      if (
        formData.firstName === "" &&
        formData.lastName === "" &&
        formData.email === "" &&
        formData.phone === "" &&
        formData.jobTitle === "" &&
        formData.country === ""
      ) {
        alert("Please fill all the fields");
        return;
      }

      const notallowedemail = [
        "gmail",
        "yahoo",
        "hotmail",
        "outlook",
        "rediffmail",
        "aol",
        "zoho",
        "protonmail",
        "icloud",
        "yandex",
        "gmx",
        "mail",
        "inbox",
        "live",
      ];
      if (formData.field === "marketer") {
        // check email is buissnes email or not

        if (notallowedemail.some((el) => formData.email.includes(el))) {
          alert("Please enter a valid business email address");
          return;
        }
      }

      e.preventDefault();
      // Prevent default form submission behavior
      e.stopPropagation();

      setSubmitted(true);

      if (field === "") {
        setErrorMessage("*Please select a field*");
        return;
      }

      if (selectedCategories.length <= 0) {
        setErrorMessage("*Please select at least one category*");
        return;
      }

      // setrtype("nomination");
      // const imageRef = storage
      //   .ref()
      //   .child(`india-nomination-image/${formData.image.name}`);
      // await imageRef.put(formData.image);
      // const imageUrl = await imageRef.getDownloadURL();
      // setimgu(imageUrl);
      const vlink = `https://india.theiena.com/vote/${formData.firstName
        .toLowerCase()
        .replace(/\s/g, "")}_${formData.lastName
        .toLowerCase()
        .replace(/\s/g, "")}`;
      setvotelink(vlink);

      console.log("Information submitted");

      console.log("Information submitted");

      console.log("Information submitted");

      setSent(true);
      // Form submission logic goes here
      setSubmitted(false);
      alert(
        "Nomination Form submitted successfully!\nOur team will get back to you soon"
      );
      // Reset form and page state
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        country: "",
        industry: "",
        linkedin: "",
        instagram: "",
        youtube: "",
        tiktok: "",
        snapchat: "",
        field: "",
        image: null,
      });
      setStep(1);
      setField("");
      setValues(new Set([]));
      setSelectedCategories([]);
      setErrorMessage("");
    } catch (e) {
      console.log(e);
    }
  };

  // Render different steps based on current step
  let stepComponent;
  switch (step) {
    case 1:
      stepComponent = (
        <div className="flex  flex-col md:flex-nowrap gap-4 ">
          <h2 className={` text-black `}>Select Field*</h2>
          <Select
            onChange={(key) => handleFieldSelect(key.target.value)}
            value={formData.field}
            variant="underlined"
            label="Select Field"
            className="max-w-md"
            defaultSelectedKeys={formData.field ? [formData.field] : []}
            isRequired
            errorMessage={errorMessage}
          >
            <SelectItem key="influencer">Influencer</SelectItem>
            <SelectItem key="marketer">Marketer</SelectItem>
          </Select>

          <button
            onClick={() => {
              if (field !== "") {
                setErrorMessage("");
                handleNextStep();
              } else {
                setErrorMessage("*Please select a field*");
                // alert("Please select a field");
              }
            }}
            className="
                newsletterbtn "
          >
            Next
          </button>
        </div>
      );
      break;
    case 2:
      stepComponent = (
        <div className="flex  flex-col md:flex-nowrap gap-4 transition-none">
          <h2 className={` text-black `}>Select Award Categories</h2>
          <div className="max-w-md">
            {field === "influencer"
              ? influencerCategories.map((category, index) => (
                  <div key={category}>
                    <Checkbox
                      id={`category-${index}`}
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategorySelect(category)}
                      defaultSelected={selectedCategories.includes(category)}
                      label={category}
                    >
                      {category}
                    </Checkbox>
                  </div>
                ))
              : marketerCategories.map((category, index) => (
                  <div key={category}>
                    <Checkbox
                      id={`category-${index}`}
                      checked={selectedCategories.includes(category)}
                      defaultSelected={selectedCategories.includes(category)}
                      onChange={() => handleCategorySelect(category)}
                      label={category}
                    >
                      {category}
                    </Checkbox>
                  </div>
                ))}
          </div>
          {/* {selectedCategories.length > 0 && (
            <p className="text-small text-default-500">
              Selected: {selectedCategories.join(", ")}
            </p>
          )} */}
          <div className="flex flex-row justify-between w-full gap-4">
            <button onClick={handlePrevStep} className="newsletterbtn w-6/12 ">
              Previous
            </button>
            <button
              onClick={() => {
                if (selectedCategories.length > 0) {
                  setErrorMessage("");
                  handleNextStep();
                } else {
                  // setErrorMessage("*Please select at least one category*");
                  alert("Please select at least one category");
                }
              }}
              className="newsletterbtn w-6/12 "
            >
              Next
            </button>
          </div>
        </div>
      );
      break;
    case 3:
      stepComponent = (
        <div className="flex  flex-col md:flex-nowrap gap-4 transition-none">
          <h2 className={` text-black `}>
            Fill in Personal Details and Upload Image
          </h2>
          <div className="flex flex-col gap-5">
            <div className="flex md:flex-row flex-col gap-4 w-full">
              <Input
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleFormDataChange}
                className="md:w-1/2 w-full "
                variant="underlined"
                isRequired
              />
              <Input
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleFormDataChange}
                className="md:w-1/2 w-full "
                variant="underlined"
                isRequired
              />
            </div>
            <div className="flex md:flex-row flex-col gap-4 w-full">
              <Input
                type="email"
                label={
                  formData.field === "influencer" ? "Email" : "Business Email"
                }
                name="email"
                value={formData.email}
                onChange={handleFormDataChange}
                className="md:w-1/2 w-full "
                variant="underlined"
                isRequired
              />
              <MuiPhone
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
                className="md:w-1/2 w-full "
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-4 w-full">
              {formData.field === "influencer" ? (
                <Input
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleFormDataChange}
                  className="md:w-1/2 w-full "
                  variant="underlined"
                />
              ) : (
                <Input
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleFormDataChange}
                  className="md:w-1/2 w-full "
                  variant="underlined"
                  isRequired
                />
              )}
              <Input
                label="Job Title"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleFormDataChange}
                className="md:w-1/2 w-full "
                variant="underlined"
                isRequired
              />
            </div>
            <div className="flex md:flex-row flex-col gap-4 w-full">
              {/* <Input
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleFormDataChange}
                className="w-1/2 "
                variant="underlined"
                isRequired
              /> */}

              <Autocomplete
                variant="underlined"
                className="md:w-1/2 w-full "
                label="Select Country"
                value={selectedCountry}
                onSelectionChange={(value) => {
                  console.log(value);
                  setFormData({ ...formData, country: value });
                  setSelectedCountry(value);
                }}
                isRequired
              >
                {countries.map((country) => (
                  <AutocompleteItem key={country.label} value={country.label}>
                    {country.label}
                  </AutocompleteItem>
                ))}
              </Autocomplete>

              {industry === "Other" ? (
                <Input
                  label="Industry"
                  name="industry"
                  value={formData.industry}
                  placeholder="Enter other industry"
                  onChange={handleFormDataChange}
                  className="md:w-1/2 w-full "
                  variant="underlined"
                  isRequired
                />
              ) : (
                <Select
                  onChange={(key) => {
                    key.target.value === "Other"
                      ? setIndustry(key)
                      : setFormData({
                          ...formData,
                          industry: key.target.value,
                        });
                  }}
                  value={field}
                  variant="underlined"
                  label="Select Industry"
                  className="md:w-1/2 w-full"
                  isRequired={formData.field === "marketer" ? true : false}
                  errorMessage={errorMessage}
                >
                  {IndustryCategories.map((category, index) => (
                    <SelectItem key={category}>{category}</SelectItem>
                  ))}
                </Select>
              )}
            </div>

            {field === "influencer" ? (
              <div className="flex flex-col gap-4 w-full">
                <div className="flex md:flex-row flex-col gap-4 w-full">
                  <Input
                    label="Instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleFormDataChange}
                    className="md:w-1/2 w-full "
                    variant="underlined"
                    isRequired
                  />
                  <Input
                    label="LinkedIn"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleFormDataChange}
                    className="md:w-1/2 w-full "
                    variant="underlined"
                  />
                </div>
                <div className="flex md:flex-row flex-col gap-4 w-full">
                  <Input
                    label="Youtube"
                    name="youtube"
                    value={formData.youtube}
                    onChange={handleFormDataChange}
                    className="md:w-1/2 w-full "
                    variant="underlined"
                  />
                  <Input
                    label="Snapchat"
                    name="snapchat"
                    value={formData.snapchat}
                    onChange={handleFormDataChange}
                    className="md:w-1/2 w-full "
                    variant="underlined"
                  />
                </div>
              </div>
            ) : (
              <div className="flex md:flex-row flex-col gap-4 w-full">
                <Input
                  label="LinkedIn"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleFormDataChange}
                  className="md:w-1/2 w-full "
                  variant="underlined"
                  isRequired
                />
                <Input
                  label="Instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleFormDataChange}
                  className="md:w-1/2 w-full "
                  variant="underlined"
                />
              </div>
            )}
            {/* <div className="flex md:flex-col flex-col gap-2 w-full">
              <label className="text-sm form-color ">
                Upload Image<span className="redal">*</span> (800px x 800px)
              </label>
              <Button
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                style={{ color: "#71717a", border: "1px solid #71717a" }}
                className="newsletterbtn"
              >
                <VisuallyHiddenInput
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ color: "#71717a" }}
                />
                {formData.image
                  ? "Image Selected: " + formData.image.name
                  : "Upload Image"}
              </Button>
            </div> */}
            <div className="flex flex-row  gap-4 w-full">
              <button onClick={handlePrevStep} className="newsletterbtn w-6/12">
                Previous
              </button>
              <button
                type="submit"
                disabled={submitted}
                onClick={handleSubmit}
                className="newsletterbtn w-6/12"
              >
                {submitted ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      );
      break;
    default:
      stepComponent = null;
  }

  return (
    <div
      id="nominate"
      className={`md:p-20 sm:p-5 bg-white text-black text-2xl  ${work_sans.className} font-extralight`}
    >
      <Marquee
        direction="left"
        gradient={false}
        speed={40}
        className={` z-10 md:text-9xl text-7xl w-full ${work_sans.className} uppercase font-bold absolute top-12 `}
        autoFill={true}
        style={{ height: "300px", ...maskImageStyle }}
      >
        &nbsp; Nominate
      </Marquee>
      <div className="flex flex-row justify-center  w-full max-w-[100%] max-md:mt-10 relative bottom-20 z-20  ">
        <div
          className=" md:w-3/5 w-11/12  md:p-16 p-8  rounded-[32px] "
          style={{
            boxShadow: "0px 0px 10px 0px #0000001a ",
            background: "rgba(255, 255, 255, 1.15) ",
            border: "1px solid #0000001a",
            color: "rgba(0, 0, 0, 0.18)",
            filter: "drop-shadow(40px 40px 76px)",
            mixBlendMode: "normal",
          }}
        >
          <div>{stepComponent}</div>
        </div>
      </div>
      {/* {sent && (
        <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 rounded-lg  max-h-[90vh] mx-20 my-5">
            <div className="relative w-full">
              <h1 className="text-2xl font-bold mb-10 text-center w-full text-black">
                Form submitted successfully!
              </h1>

              <button
                onClick={() => setSent(false)}
                className="absolute right-0 top-0  
                bg-black text-white w-fit h-fit rounded-3xl 
            px-3 py-1
                
                "
              >
                <CloseIcon />
              </button>
            </div>
            <div className="flex-col justify-center sm:flex-row flex gap-5 items-center w-full">
              <div className="flex justify-center items-center w-1/2">
                {poppage}
              </div>
              <div className="w-1/2 flex justify-start flex-col gap-4 align-top h-[70vh]">
                <div className="w-1/2 flex">
                  <div className="  w-full">
                    Vote link:
                    <div className="inline-flex items-center justify-between   px-3 py-1.5 text-small rounded-medium bg-default/40 text-default-foreground">
                      <Snippet
                        symbol="#"
                        variant="flat"
                        color="default"
                        className="bg-transparent"
                      >
                        {votelink}
                      </Snippet>
                      <a
                        href={votelink}
                        target="_blank"
                        aria-label="Open in new tab"
                        title="Open in new tab"
                      >
                        <OpenInNewIcon width={20} height={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 flex ">
                  <div className="  w-full">
                    Social Share:
                    {so}
                  </div>
                </div>

                <div className="flex">
                  <div className="w-full">
                    <h1 className="mb-5">
                      Stay tuned for more updates
                      <br />
                      Follow our social media page
                    </h1>
                    <div className="inline-flex items-center justify-between px-3 py-1.5 text-small rounded-medium bg-default/40 text-default-foreground">
                      Linkedin: &nbsp;
                      <a
                        href="https://www.linkedin.com/company/the-influence-exchange-confex-awards"
                        target="_blank"
                        aria-label="Open in new tab"
                        title="Open in new tab"
                      >
                        <OpenInNewIcon width={20} height={20} />
                      </a>
                    </div>
                    <div className="inline-flex items-center justify-between px-3 py-1.5 text-small rounded-medium bg-default/40 text-default-foreground">
                      Twitter: &nbsp;
                      <a
                        href="https://twitter.com/IXG2024"
                        target="_blank"
                        aria-label="Open in new tab"
                        title="Open in new tab"
                      >
                        <OpenInNewIcon width={20} height={20} />
                      </a>
                    </div>
                    <div className="inline-flex items-center justify-between px-3 py-1.5 text-small rounded-medium bg-default/40 text-default-foreground">
                      Instagram: &nbsp;
                      <a
                        href="https://www.instagram.com/influenceexchange2024/"
                        target="_blank"
                        aria-label="Open in new tab"
                        title="Open in new tab"
                      >
                        <OpenInNewIcon width={20} height={20} />
                      </a>
                    </div>
                    <div className="inline-flex items-center justify-between px-3 py-1.5 text-small rounded-medium bg-default/40 text-default-foreground">
                      Facebook : &nbsp;
                      <a
                        href="https://www.facebook.com/people/Influence-Exchange-Group/61555949403854/?mibextid=YMEMSu"
                        target="_blank"
                        aria-label="Open in new tab"
                        title="Open in new tab"
                      >
                        <OpenInNewIcon width={20} height={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

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

const IndustryCategories = [
  "Airline",
  "Retail",
  "Real Estate",
  "Education",
  "Telecommunication",
  "Banking/Finance",
  "Tourism Hospitality",
  "Consumer Electronics",
  "Media",
  "Entertainment",
  "Logistic Supply Chain",
  "Other",
];

export default NominateForm;
