import React from "react";
import logo from "../../../public/logo.png";
import footer from "../../../public/images/footer/footer.svg";
import Image from "next/image";
import { anton, work_sans } from "@/styles/fonts";
function Footer() {
  return (
    <div className="bg-white">
      <Image src={footer} alt="footer" className="w-full" />
      <div className={`bg-black p-8 ${work_sans.className}`}>
        <footer className="text-white   foot">
          <div className=" w-[100%]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <a href="/about">
                  <h2 className="text-lg font-bold mb-4">ABOUT</h2>
                </a>
                <ul>
                  <li>
                    <a href="/about" className="hover:text-gray-300">
                      Why Attend
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-gray-300">
                      What to Expect
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-gray-300">
                      Venue
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <a href="/awards">
                  <h2 className="text-lg font-bold mb-4">AWARDS</h2>
                </a>
                <ul>
                  <li>
                    <a href="/awards" className="hover:text-gray-300">
                      Categories
                    </a>
                  </li>
                  <li>
                    <a href="/awards" className="hover:text-gray-300">
                      Juries
                    </a>
                  </li>
                  <li>
                    <a href="/awards" className="hover:text-gray-300">
                      Nominate
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <a href="/speakers">
                  <h2 className="text-lg font-bold mb-4">SPEAKERS</h2>
                </a>
                <ul>
                  <li>
                    <a href="/speakers" className="hover:text-gray-300">
                      Speakers
                    </a>
                  </li>
                  <li>
                    <a href="/register" className="hover:text-gray-300">
                      Become a Speaker
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <a href="/sponsors">
                  <h2 className="text-lg font-bold mb-4">SPONSORS</h2>
                </a>
                <ul>
                  <li>
                    <a href="/sponsors" className="hover:text-gray-300">
                      Sponsors
                    </a>
                  </li>
                  <li>
                    <a href="/sponsors" className="hover:text-gray-300">
                      Media Partner
                    </a>
                  </li>
                  <li>
                    <a href="/register" className="hover:text-gray-300">
                      Become a Sponsor
                    </a>
                  </li>
                  <li>
                    <a href="/register" className="hover:text-gray-300">
                      Become a Media Partner
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t pt-5 mt-5 border-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-lg font-bold">CONTACT</h2>
                <p>Mohamed Suhel</p>
                <p>(Head Of Event)</p>
                <p>T: +971 443 126 72</p>
                <p>M: +971 565 873 505</p>
                <p className="break-words">
                  E: mohamed.suhel@influenceexchangegroup.com
                </p>
              </div>
              <div
                className="md:col-span-2 lg:col-span-1 
            justify-self-center align-baseline flex flex-col items-center
            "
                style={{ justifyContent: "flex-end" }}
              >
                <Image
                  src={logo}
                  alt="IE&A Logo"
                  className=" sm:w-[10vw] w-[60vw]"
                />
                <p className="text-sm">2025 - © ie&a</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-medium">
                &copy; 2025 - Designed and Developed by{" "}
                <a
                  href="https://bitnibdesign.com "
                  className="underline cursor-pointer"
                  target="_blank"
                >
                  {" "}
                  Bitnib
                </a>{" "}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
