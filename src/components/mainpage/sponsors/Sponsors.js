import * as React from "react";
import { anton } from "@/styles/fonts";
import Image from "next/image";

function Sponsors() {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item).default;
    });
    return images;
  }

  const images = importAll(
    require.context(
      "../../../../public/images/past/uaelogo",
      false,
      /\.(png|jpe?g|svg|avif|jpg)$/
    )
  );

  return (
    <div
      className="flex flex-col justify-center sm:px-20 px-5 sm:pt-32 pt-10 sm:pb-20 pb-0 text-5xl text-center text-black bg-white whitespace-nowrap leading-[61.92px] w-full max-md:text-4xl"
      style={{ alignItems: "center" }}
    >
      <div
        className={`self-center max-md:text-4xl uppercase py-10 ${anton.className} `}
      >
        PAST Participants
      </div>
      {/* Mapping through the logo files and creating <img> elements */}
      <div className="flex flex-wrap gap-10 justify-center">
        {Object.keys(images).map((imageName, index) => (
          <div key={index} className="relative">
            <Image
              className="object-contain"
              src={images[imageName]} // Use the 'default' property for ES6 modules
              width={120}
              height={120}
              alt={`Album ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
