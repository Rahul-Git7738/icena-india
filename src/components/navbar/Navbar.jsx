"use client";

import React, { useState, useEffect } from "react";
import { work_sans } from "@/styles/fonts";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";

import logo from "../../../public/logo.svg";

function Navbar() {
  const { scrollY } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when the menu is open
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto"; // Enable scrolling after clicking a link
  };

  const [hidden, setHidden] = useState(false);

  const [navigation, setNavigation] = useState(false);

  useEffect(() => {
    if (window.location.href.includes("/event")) setNavigation(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else if (previous - latest > 20) {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className="py-4 fixed w-full top-0 z-[1000] right-0 bottom-0 left-0 0 0 0 0 h-fit"
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="my-5 border-1 border-zinc-400 rounded-full sm:px-10 w-100 backdrop-blur bg-black/30 px-7">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center">
              <a src="/" className="text-white text-xl font-bold">
                <Image src={logo} alt="logo" width={100} height={100} />
              </a>
            </div>
            <div className="md:hidden">
              {/* Hamburger Icon */}
              <button onClick={toggleMenu} className="text-white mt-2">
                {isMenuOpen ? (
                  <RxHamburgerMenu size={30} />
                ) : (
                  <RxHamburgerMenu size={30} />
                )}
              </button>
            </div>
            <div className="hidden md:flex nav-p">
              <ul
                className={`flex space-x-8 text-white font-medium ${work_sans.className}`}
              >
                <li className="relative group">
                  <a src="/about" className=" hover:text-[#ccff00]">
                    ABOUT
                  </a>
                </li>
                <li style={{ display: navigation ? "none" : "flex" }}>
                  <a src="/awards" className=" hover:text-[#ccff00]">
                    AWARDS
                  </a>
                  {/* <div className="absolute top-full left-0 w-40 bg-white text-white z-10 hidden group-hover:block">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Categories
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Nominate
                    </a>
                  </div> */}
                </li>
                <li className="relative group">
                  <a src="/speakers" className=" hover:text-[#ccff00]">
                    SPEAKERS
                  </a>
                </li>
                <li className="relative group">
                  <a src="/sponsors" className=" hover:text-[#ccff00]">
                    SPONSORS
                  </a>
                </li>
                <li style={{ display: navigation ? "none" : "flex" }}>
                  <a src="/register" className=" hover:text-[#ccff00]">
                    REGISTER
                  </a>
                </li>
                <li className="relative group">
                  <a
                    href="https://india2024.theiena.com/"
                    target="_blank"
                    className="transition-all duration-300 hover:text-[#ccff00]"

                    // [text-shadow:_0_0_25px_#ccff00,_0_0_35px_#ccff00]
                  >
                    INDIA2024
                  </a>
                </li>

                <li>
                  <a src="/vote" className=" hover:text-[#ccff00]">
                    VOTE
                  </a>
                </li>
                {/* Add other menu items */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Side Menu */}
      <motion.div
        className={`fixed top-0 left-0 w-full h-full bg-black/90 z-[2000] ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        initial={{ x: "-100%" }}
        animate={{ x: isMenuOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-8 text-white text-4xl"
          >
            &times;
          </button>
          <ul
            className={`space-y-6 text-white text-center font-medium text-4xl ${work_sans.className}`}
          >
            <li className="relative group">
              <a src="/about" className=" hover:text-[#ccff00]">
                ABOUT
              </a>
            </li>
            <li style={{ display: navigation ? "none" : "flex" }}>
              <a src="/awards" className=" hover:text-[#ccff00]">
                AWARDS
              </a>
              {/* <div className="absolute top-full left-0 w-40 bg-white text-white z-10 hidden group-hover:block">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Categories
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Nominate
                    </a>
                  </div> */}
            </li>
            <li className="relative group">
              <a src="/speakers" className=" hover:text-[#ccff00]">
                SPEAKERS
              </a>
            </li>
            <li className="relative group">
              <a src="/sponsors" className=" hover:text-[#ccff00]">
                SPONSORS
              </a>
            </li>
            <li style={{ display: navigation ? "none" : "flex" }}>
              <a src="/register" className=" hover:text-[#ccff00]">
                REGISTER
              </a>
            </li>
            <li className="relative group">
              <a
                href="https://india2024.theiena.com/"
                target="_blank"
                className="transition-all duration-300 hover:text-[#ccff00]"
                //
                // [text-shadow:_0_0_25px_#ccff00,_0_0_35px_#ccff00]
              >
                INDIA2024
              </a>
            </li>
            <li>
              <a src="/vote" className=" hover:text-[#ccff00]">
                VOTE
              </a>
            </li>
            {/* Add other menu items */}
          </ul>
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;
