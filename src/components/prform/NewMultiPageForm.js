"use client";

import React, { useState, useEffect } from "react";
import {
  Select,
  SelectItem,
  Input,
  Checkbox,
  Autocomplete,
  AutocompleteItem,
  Snippet,
} from "@nextui-org/react";
import Marquee from "react-fast-marquee";
import { anton, work_sans } from "@/styles/fonts";
import { storage, firestore } from "../../../firbase/clientApp";
import "react-phone-input-2/lib/bootstrap.css";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Socialshare from "@/app/socialshare/page";
import { MuiPhone } from "../phone/MuiPhone";
import { datacon } from "../../datacon";
import { CircularProgress } from "@mui/material";

const NewMultiPageForm = ({ to, name }) => {
  const [page, setPage] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState(new Set([]));
  const [errorMessage, setErrorMessage] = useState("");
  const [field, setField] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countries, setCountries] = useState([]);
  const [sent, setSent] = useState(false);
  const [poppage, setPoppage] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [topics, setTopics] = useState([]);
  const [industry, setIndustry] = useState("");
  const [votelink, setvotelink] = useState("");
  const [rtype, setrtype] = useState("");
  const [so, setso] = useState(null);
  const [rmstring, setrmstring] = useState("");

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
    registrationType: "",
    field: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    country: "",
    industry: "",
    recommendation1: "",
    recommendation2: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    tiktok: "",
    snapchat: "",
    image: null,
  });

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const handleFormDataChange = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setCountries(datacon.countries);

    setSelectedCountry(datacon.userSelectValue);
    // console.log(datacon.userSelectValue);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    if (
      formData.firstName === "" &&
      formData.lastName === "" &&
      formData.jobTitle === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
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

    // gerate a random string of lenght 7

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

    // save new data in transformed image on firebase with random string as id and popup.trf as url

    console.log(formData.registrationType);
    console.log(formData.field);
    console.log(name);

    const socials = (
      <Socialshare
        field={formData.registrationType}
        category={formData.field}
        pr={name}
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

  const handleselect = (key) => {
    setFormData({ ...formData, registrationType: key.target.value });
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

  const handletopicSelect = (category) => {
    if (topics.includes(category)) {
      setTopics(topics.filter((cat) => cat !== category));
    } else {
      setTopics([...topics, category]);
    }
  };

  const handleFieldSelect = (key) => {
    setField(key);
    setFormData({ ...formData, field: key });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(formData); // For testing purposes

    if (page === 3) {
      return;
    }

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

    setSubmitted(true);

    if (formData.registrationType === "nomination") {
      setrtype("nomination");
      const imageRef = storage
        .ref()
        .child(`india-nomination-image2025/${formData.image.name}`);
      await imageRef.put(formData.image);
      const imageUrl = await imageRef.getDownloadURL();
      setimgu(imageUrl);

      const vlink = `https://india.theiena.com/vote/${formData.firstName
        .toLowerCase()
        .replace(/\s/g, "")}_${formData.lastName
        .toLowerCase()
        .replace(/\s/g, "")}`;
      setvotelink(vlink);


      const nomineeRef = firestore.collection("india-nominees2025").doc();
      const nomineeId = nomineeRef.id;
      const nomineeQuery = firestore
        .collection("india-nominees2025")
        .where(
          "firstName",
          "==",
          formData.firstName.toLowerCase().replace(/\s/g, "")
        )
        .where(
          "lastName",
          "==",
          formData.lastName.toLowerCase().replace(/\s/g, "")
        )
        .where("email", "==", formData.email);

      const nomineeSnapshot = await nomineeQuery.get();

      if (!nomineeSnapshot.empty) {
        // Nominee already exists, update their categories
        nomineeSnapshot.forEach(async (doc) => {
          const nomineeId2 = doc.id;
          const existingCategories = doc.data().categories;
          const updatedCategories = { ...existingCategories };

          selectedCategories.forEach((category) => {
            const cat = category
              .toString()
              .replace(/\s/g, "")
              .replace(/[/\\.,;:'"!@#$%^&*()_+|~=`{}[\]]/g, "_");
            const og = category;

            // Only add new categories
            if (!existingCategories.hasOwnProperty(cat)) {
              updatedCategories[cat] = {
                og,
                vote: 0,
              };
            }
          });

          await firestore
            .collection("india-nominees2025")
            .doc(nomineeId2)
            .update({
              categories: { ...updatedCategories },
            });
        });
      } else {
        // Nominee does not exist, create a new document for them
        const categoriesData = {};
        selectedCategories.forEach((category) => {
          const cat = category
            .toString()
            .replace(/\s/g, "")
            .replace(/[/\\.,;:'"!@#$%^&*()_+|~=`{}[\]]/g, "_");
          const og = category;
          categoriesData[cat] = {
            og,
            vote: 0,
          };
        });

        if (Object.keys(categoriesData).length === 0) {
          setErrorMessage("*Please select at least one category*");
          return;
        }

        await nomineeRef.set({
          id: nomineeId,
          firstName: formData.firstName.toLowerCase().replace(/\s/g, ""),
          lastName: formData.lastName.toLowerCase().replace(/\s/g, ""),
          field,
          categories: { ...categoriesData },
          email: formData.email,
          phone: formData.phone,
          company: formData.company || "",
          jobTitle: formData.jobTitle,
          country: formData.country,
          industry: formData.industry || "",
          linkedin: formData.linkedin || "",
          instagram: formData.instagram || "",
          youtube: formData.youtube || "",
          snapchat: formData.snapchat || "",

          imageUrl,
        });
      }

      setSent(true);
      // Form submission logic goes here
      setSubmitted(false);
      alert("Nomination Form submitted successfully!");
      // Reset form and page state
      setFormData({
        registrationType: "",
        category: "",
        field: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        country: "",
        industry: "",
        socialMedia: "",
      });
      setPage(1);
      setTopics([]);
      setValues(new Set([]));
      setSelectedCategories([]);
    } else {
      const imageRef = storage
        .ref()
        .child(`india-delegate-image2025/${formData.image.name}`);
      await imageRef.put(formData.image);
      const imageUrl2 = await imageRef.getDownloadURL();
      setimgu(imageUrl2);



      const nomineeRef = firestore.collection("india-delegates2025").doc();
      const nomineeId = nomineeRef.id;

      await nomineeRef.set({
        id: nomineeId,
        firstName: formData.firstName.toLowerCase().replace(/\s/g, "") || "",
        lastName: formData.lastName.toLowerCase().replace(/\s/g, "") || "",
        field: field || "",
        email: formData.email || "",
        phone: formData.phone || "",
        company: formData.company || "",
        jobTitle: formData.jobTitle || "",
        country: formData.country || "",
        industry: formData.industry || "",
        linkedin: formData.linkedin || "",
        instagram: formData.instagram || "",
        youtube: formData.youtube || "",
        snapchat: formData.snapchat || "",
        recommendation1: formData.recommendation1 || "",
        recommendation2: formData.recommendation2 || "",
        imageUrl: imageUrl2 || "",
      });

      setSent(true);
      // Form submission logic goes here
      setSubmitted(false);
      alert("Delegate Form submitted successfully!");
      // Reset form and page state
      setFormData({
        registrationType: "",
        category: "",
        field: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        country: "",
        industry: "",
        socialMedia: "",
        linkedin: "",
        instagram: "",
        youtube: "",
        snapchat: "",
        recommendation1: "",
        recommendation2: "",
      });
      setPage(1);
      setTopics([]);
      setSelectedCategories([]);
      setValues(new Set([]));
    }
  };

  const maskImageStyle = {
    maskImage:
      "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
  };

  if (
    typeof window !== "undefined" &&
    navigator.userAgent.includes("Instagram")
  ) {
    return (
      <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div
          className="flex flex-col items-center justify-center h-full min-h-[200px] gap-4 text-center
      w-full bg-white text-black font-light p-8
      "
        >
          <h1 className=" font-bold ">Instagram Browser is not supported</h1>
          <p>
            Please copy and paste the URL into your browser to access the page
          </p>
          <Snippet symbol="$" variant="bordered" color="default" className=" ">
            {`https://india.theiena.com/event/${name}`}
          </Snippet>
        </div>
      </div>
    );
  }

  return (
    <div
      className={` sm:p-20 p-5 bg-white text-2xl ${work_sans.className} font-extralight`}
    >
      <Marquee
        direction="left"
        gradient={false}
        speed={40}
        className={` z-10 md:text-9xl text-4xl w-full md:h-[300px] h-[150px] ${work_sans.className} font-bold absolute uppercase md:top-12 top-0 `}
        autoFill={true}
        style={{ ...maskImageStyle }}
      >
        &nbsp; REGISTER
      </Marquee>
      <div className="flex flex-row justify-center  w-full max-w-[100%] max-md:mt-10 relative bottom-20 z-20  ">
        <form
          onSubmit={handleSubmit}
          className=" sm:w-[60%] w-[100%]  sm:p-16 p-8   rounded-[32px] gpg "
        >
          {page === 1 && (
            <div className="flex  flex-col md:flex-nowrap gap-4">
              <h2 className={` text-black  `}>Choose Registration Type*</h2>

              <Select
                label="Select registration type"
                className="max-w-md"
                onChange={handleselect}
                variant="underlined"
                defaultSelectedKeys={
                  formData.registrationType ? [formData.registrationType] : []
                }
                isRequired
                errorMessage={errorMessage}
              >
                <SelectItem key="delegate">Delegate Registration</SelectItem>
                <SelectItem key="nomination">Award Nomination</SelectItem>
              </Select>

              <button
                onClick={() => {
                  if (formData.registrationType !== "") {
                    setErrorMessage("");
                    nextPage();
                  } else {
                    setErrorMessage("*Please select a registration type*");
                    alert("Please select a registration type");
                  }
                }}
                className="newsletterbtn"
              >
                Next
              </button>
            </div>
          )}

          {page === 2 && (
            <div className="flex  flex-col md:flex-nowrap gap-4">
              <h2 className={` text-black  `}>Choose Field*</h2>

              <Select
                label="Select category"
                className="max-w-md"
                onChange={(key) => handleFieldSelect(key.target.value)}
                variant="underlined"
                defaultSelectedKeys={formData.field ? [formData.field] : []}
                isRequired
                errorMessage={errorMessage}
              >
                <SelectItem key="influencer">Influencer</SelectItem>
                <SelectItem key="marketer">Marketer</SelectItem>
              </Select>

              <div className="flex sm:flex-row flex-col justify-between w-full sm:gap-4 gap-1">
                <button
                  onClick={prevPage}
                  className="newsletterbtn sm:w-6/12 w-full "
                >
                  Previous
                </button>
                <button
                  onClick={() => {
                    if (field !== "") {
                      setErrorMessage("");
                      if (formData.registrationType === "delegate") {
                        setPage(page + 2);
                      } else {
                        nextPage();
                      }
                    } else {
                      setErrorMessage("*Please select a field*");
                      alert("Please select a field");
                    }
                  }}
                  className="newsletterbtn sm:w-6/12 w-full "
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {page === 3 &&
            (formData.registrationType === "delegate" ? (
              <div className="flex  flex-col md:flex-nowrap gap-4 ">
                <h2 className={` text-black `}>Topics you are looking for*</h2>

                <div className="w-full">
                  {options.map((topic, index) => (
                    <div key={topic}>
                      <Checkbox
                        id={`topic-${index}`}
                        checked={topics.includes(topic)}
                        defaultSelected={topics.includes(topic)}
                        onChange={() => handletopicSelect(topic)}
                        label={topic}
                      >
                        {topic}
                      </Checkbox>
                    </div>
                  ))}
                </div>

                <div className="flex sm:flex-row flex-col justify-between w-full sm:gap-4 gap-1">
                  <button
                    onClick={prevPage}
                    className="newsletterbtn sm:w-6/12 w-full "
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => {
                      if (topics.length > 0) {
                        setErrorMessage("");
                        nextPage();
                      } else {
                        // setErrorMessage("*Please select at least one topic*");
                        alert("Please select at least one topic");
                      }
                    }}
                    className="newsletterbtn sm:w-6/12 w-full "
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex  flex-col md:flex-nowrap gap-4 ">
                <h2 className={` text-black `}>Select Award Categories</h2>
                <div className="max-w-md">
                  {field === "influencer"
                    ? influencerCategories.map((category, index) => (
                        <div key={category}>
                          <Checkbox
                            id={`category-${index}`}
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategorySelect(category)}
                            label={category}
                            defaultSelected={selectedCategories.includes(
                              category
                            )}
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
                            onChange={() => handleCategorySelect(category)}
                            defaultSelected={selectedCategories.includes(
                              category
                            )}
                            label={category}
                          >
                            {category}
                          </Checkbox>
                        </div>
                      ))}
                </div>

                <div className="flex sm:flex-row flex-col justify-between w-full sm:gap-4 gap-1">
                  <button
                    onClick={prevPage}
                    className="newsletterbtn sm:w-6/12 w-full"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => {
                      if (selectedCategories.length > 0) {
                        console.log(selectedCategories.length);
                        // setErrorMessage("");
                        nextPage();
                      } else {
                        // setErrorMessage(
                        //   "*Please select at least one category*"
                        // );

                        alert("Please select at least one category");
                      }
                    }}
                    className="newsletterbtn sm:w-6/12 w-full "
                  >
                    Next
                  </button>
                </div>
              </div>
            ))}

          {page === 4 && (
            <div className="flex  flex-col md:flex-nowrap gap-4 transition-none">
              <h2 className={` text-black `}>
                Fill in Personal Details and Upload Image
              </h2>

              <div className="flex sm:flex-row flex-col gap-4 w-full">
                <Input
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="sd:w-1/2 w-full "
                  variant="underlined"
                  isRequired
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="sd:w-1/2 w-full "
                  variant="underlined"
                  isRequired
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-4 w-full">
                <Input
                  type="email"
                  label={
                    formData.field === "influencer" ? "Email" : "Business Email"
                  }
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="sd:w-1/2 w-full "
                  variant="underlined"
                  isRequired
                />
                <MuiPhone
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(phone) => setFormData({ ...formData, phone })}
                  className="sd:w-1/2 w-full "
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-4 w-full">
                {formData.field === "influencer" ? (
                  <Input
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="sd:w-1/2 w-full "
                    variant="underlined"
                  />
                ) : (
                  <Input
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="sd:w-1/2 w-full "
                    variant="underlined"
                    isRequired
                  />
                )}
                <Input
                  label="Job Title"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="sd:w-1/2 w-full "
                  variant="underlined"
                  isRequired
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-4 w-full">
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
                  className=" w-full "
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
                    onChange={handleChange}
                    className="sd:w-1/2 w-full "
                    variant="underlined"
                    isRequired
                  />
                ) : (
                  <Select
                    onChange={(key) => {
                      key.target.value === "Other"
                        ? setIndustry(key.target.value)
                        : setFormData({
                            ...formData,
                            industry: key.target.value,
                          });
                    }}
                    value={field}
                    variant="underlined"
                    label="Select Industry"
                    className="sd:w-1/2 w-full"
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
                  <div className="flex sm:flex-row flex-col gap-4 w-full">
                    <Input
                      label="Instagram"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                      className="sd:w-1/2 w-full "
                      variant="underlined"
                      isRequired
                    />
                    <Input
                      label="Youtube"
                      name="youtube"
                      value={formData.youtube}
                      onChange={handleChange}
                      className="sd:w-1/2 w-full "
                      variant="underlined"
                    />
                  </div>
                  <div className="flex sm:flex-row flex-col gap-4 w-full">
                    <Input
                      label="Snapchat"
                      name="snapchat"
                      value={formData.snapchat}
                      onChange={handleChange}
                      className="sd:w-1/2 w-full "
                      variant="underlined"
                    />
                  </div>

                  <label className="text-sm form-color ">
                    Upload Image<span className="redal">*</span> (800px x 800px){" "}
                  </label>
                  <Button
                    component="label"
                    role={undefined}
                    variant="outlined"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    className="newsletterbtn"
                    style={{ color: "#71717a", border: "1px solid #71717a" }}
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
                </div>
              ) : (
                <>
                  <div className="flex sm:flex-row flex-col gap-4 w-full">
                    <Input
                      label="LinkedIn"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full "
                      variant="underlined"
                      isRequired
                    />
                  </div>

                  <div className="flex md:flex-col flex-col gap-2 w-full">
                    <label className="text-sm form-color ">
                      Upload Image<span className="redal">*</span> (800px x
                      800px){" "}
                    </label>
                    <Button
                      component="label"
                      role={undefined}
                      variant="outlined"
                      tabIndex={-1}
                      startIcon={<CloudUploadIcon />}
                      className="newsletterbtn"
                      style={{ color: "#71717a", border: "1px solid #71717a" }}
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
                  </div>
                </>
              )}

              {formData.registrationType === "delegate" && (
                <>
                  <h2 className={` text-black text-xl `}>
                    Would you like to recommend a colleague or peer to attend
                    the event? If yes, please provide his/her details(Full name,
                    Job title, Email and Phone)
                  </h2>

                  <div className="flex sm:flex-row flex-col gap-4 w-full">
                    <Input
                      variant="underlined"
                      className="sm:w-1/2 w-full "
                      label="Recommendation 1"
                      name="recommendation1"
                      value={formData.recommendation1}
                      onChange={handleChange}
                      size="lg"
                    />
                    <Input
                      variant="underlined"
                      className="sm:w-1/2 w-full "
                      label="Recommendation 2"
                      name="recommendation2"
                      value={formData.recommendation2}
                      onChange={handleChange}
                      size="lg"
                    />
                  </div>
                </>
              )}

              <div className="flex sm:flex-row flex-col sm:gap-4 gap- w-full">
                <button
                  onClick={() => {
                    if (formData.registrationType === "delegate") {
                      setPage(page - 2);
                    } else {
                      prevPage();
                    }
                  }}
                  className="newsletterbtn sm:w-6/12 w-full"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  disabled={submitted}
                  className="newsletterbtn sm:w-6/12 w-full"
                >
                  {submitted ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      {submitted && (
        <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg flex flex-col items-center">
            <CircularProgress className="animate-spin rounded-full h-16 w-16  mb-4" />

            <p className="text-lg font-semibold">Submitting your form...</p>
            <p className="text-sm text-gray-500 text-center mt-2">
              Please do not refresh the page or close the tab.
              <br />
              Wait for the banner generation after submission.
            </p>
          </div>
        </div>
      )}

      {sent && (
        <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white sm:w-full w-[90%] p-10 rounded-lg  max-h-[90vh] mx-20 my-5">
            <div className="relative w-full">
              <h1 className="text-2xl font-bold sm:mb-10 mb-0 sm:text-center text-left w-full text-black">
                Form submitted successfully!
              </h1>

              <button
                onClick={() => {
                  setSent(false);
                  setrtype("");
                }}
                className={`absolute right-0 top-0  
                bg-black text-w</div>hite w-fit h-fit rounded-3xl 
            px-3 py-1
                 
                 right-[${rtype === "nomination" ? 0 : -8}] top-[${
                  rtype === "nomination" ? 0 : -8
                }]
                
                `}
              >
                <CloseIcon className="text-white" />
              </button>
            </div>
            <div className="flex-col justify-center sm:justify-around sm:flex-row flex gap-5 items-center w-full">
              <div
                className={`flex justify-center items-center w-full sm:w-[${
                  rtype === "nomination" ? "50%" : "50%"
                }]`}
              >
                {poppage}
              </div>
              <div className="flex flex-col justify-start sm:text-2xl text-medium sm:mt-0 mt-5 flex-col gap-4 align-top h-1/2 sm:h-[70vh] ">
                {rtype === "nomination" && (
                  <div className="w-1/2 flex">
                    <div className="  w-full">
                      Vote link:
                      <div className="inline-flex items-center justify-between   px-3 py-1.5 text-small rounded-medium bg-default/40 text-default-foreground">
                        <Snippet
                          symbol="#"
                          variant="flat"
                          color="default"
                          className="bg-transparent  hidden sm:inline-flex "
                        >
                          {votelink}
                        </Snippet>

                        <Snippet
                          symbol="Copy"
                          variant="flat"
                          color="default"
                          className="bg-transparent sm:hidden inline-flex "
                          codeString={votelink}
                          content="Vote link"
                        />
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
                )}
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
                    <div className=" flex sm:flex-row flex-row flex-wrap gap-5 ">
                      <div className="inline-flex items-center sm:w-1/3 w-[40%] justify-between px-3 py-1.5 text-small rounded-medium bg-default/40 text-default-foreground">
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
                      <div className="inline-flex items-center sm:w-1/3 w-[40%]  justify-between px-3 py-1.5 text-small rounded-medium bg-default/40 text-default-foreground">
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
                      <div className="inline-flex items-center sm:w-1/3 w-[40%]  justify-between px-3 py-1.5 text-small rounded-medium bg-default/40 text-default-foreground">
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
                      <div className="inline-flex items-center sm:w-1/3 w-[40%]  justify-between px-3 py-1.5 text-small rounded-medium bg-default/40 text-default-foreground">
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
        </div>
      )}
      {/* {sent && (
        <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div
            className="bg-white p-10 rounded-lg m-10 max-h-fit"
            style={{ width: "800px" }}
          >
            <h1 className="text-2xl font-bold mb-10 text-center text-black">
              Form submitted successfully!
            </h1>
            <div className="flex justify-center items-center w-full h-[400px]">
              {poppage}
            </div>
            {rtype === "nomination" && (
              <div className="flex justify-center items-center w-full">
                <a
                  href={votelink}
                  target="_blank"
                  className="text-black underline pt-10 text-center w-full"
                >
                  {votelink}
                </a>
              </div>
            )}
            <div className="flex justify-center items-center w-full">
              <button
                onClick={() => setSent(false)}
                className="newsletterbtn w-6/12"
              >
                Close
              </button>
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

const options = [
  "The Future of AdTech in Saudi Arabia: Innovations and Trends Shaping Influencer Campaigns.",
  "Data-Driven AdTech Strategies for Targeted and Cost-Efficient Influencer Marketing.",
  "MarTech Mastery: Leveraging Technology to Amplify Influencer Marketing ROI in Saudi Arabia.",
  "The Role of Martech Stack Integration in Streamlining Influencer Campaigns for Saudi Brands.",
  "Influencer Marketing Agencies in Saudi Arabia: Navigating the Evolving Landscape of Influence.",
  "Best Practices for Saudi Influencer Marketing Agencies: Building Trust and Credibility.",
  "Saudi Arabia's Influencer Marketing Software Solutions: Enhancing Efficiency and Effectiveness.",
  "Influencer Marketing Tools and Technology: Empowering Saudi Arabian Marketers and Influencers.",
  "Influence Unleashed: The Power of Saudi Arabian Influencer Marketing Platforms for Brands.",
  "Connecting Brands and Influencers in Saudi Arabia: The Evolution of Influence Platforms.",
  "Digital Marketing Transformation in Saudi Arabia: Strategies for Influencing the Future.",
  "Saudi Arabian Digital Marketing Solutions: Driving Brand Success through Innovation.",
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

export default NewMultiPageForm;

// meta data for image
