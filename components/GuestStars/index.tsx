import { Barlow_Condensed } from "next/font/google";

import Slider from "../Slider";

import { guestStars } from "./data";

const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "900" });

const GuestStars = () => {
  return (
    <div className="relative isolate px-5">
      <h1 className="flex relative z-20 items-center justify-between gap-x-6 text-center text-white uppercase">
        <span
          className={
            barlowCondensed.className +
            " text-[15vw] text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/100"
          }
        >
          Guest
        </span>
        <span
          className={
            barlowCondensed.className +
            " text-[15vw] text-transparent bg-clip-text bg-gradient-to-l from-white/40 to-white/100"
          }
        >
          Stars
        </span>
      </h1>
      <Slider
        data={guestStars}
        labelAction="View all guest"
        maxSlide={4}
        hasContent
      />
    </div>
  );
};

export default GuestStars;
