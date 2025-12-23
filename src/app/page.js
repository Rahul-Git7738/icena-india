import Awardnrec from "@/components/mainpage/awrdnrec/Awardnrec";
import Faq from "@/components/mainpage/faq/Faq";
import Herosection from "@/components/mainpage/herosection/Herosection";
import Ig from "@/components/mainpage/igate/Igate";
import Influncers from "@/components/mainpage/influncers/Influncers";
import Missing from "@/components/mainpage/missing/Missing";
import Pastevents from "@/components/mainpage/pastevent/Pastevents";
import Speakercard from "@/components/mainpage/speakercard/Speakercard";
import Wsa from "@/components/mainpage/whoshouldattend/Wsa";
import Venue from "@/components/mainpage/venue/Venue";

import Well from "@/components/mainpage/well/Well";
import Sponsors from "@/components/mainpage/sponsors/Sponsors";
import Countdown from "@/components/countdown/Countdown";
import { VideoCarousel } from "@/components/mainpage/videocarousel/VideoCarousel";

import { anton } from "@/styles/fonts";
import { Vc2 } from "@/components/mainpage/vc2/Vc2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Herosection />

      {/* <Pastevents /> */}
      <Influncers />

      <Speakercard />

      <div className="bg-white w-full">
        <Missing />
      </div>
      <div className="bg-black w-full flex justify-center items-center">
        {" "}
        <Wsa />
      </div>
      <div className="bg-white w-full">
        {/* <Awardnrec /> */}
        <div
          className={`self-center sm:pt-52 pt-28 text-6xl  text-center text-black leading-[62.08px] max-md:mt-10 max-md:max-w-full max-md:text-4xl  ${anton.className} `}
        >
          AWARDS AND RECOGNITION
        </div>

        <div className=" hidden sm:block">
          <VideoCarousel />
        </div>
        <div className="sm:hidden block">
          <Vc2 />
        </div>
      </div>
      <Sponsors />
      <Well />
      <Venue />
      <Faq />
    </main>
  );
}
