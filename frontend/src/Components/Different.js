import React from "react";
import HomeImage from "../Assets/Images/homeTop.png";

export default function Different() {
  return (
    <div className="flex w-full justify-center items-center px-4">
      <div className="flex flex-col justify-center w-full ml-4">
        <p className="text-4xl sm:text-5xl font-bold text-[#07075F] mb-10">
          Why are we different?
        </p>
        <p className="text-xl sm:text-2xl font-bold text-[#eb924e] mb-2">
          One size rarely fits all - So we Avoid cookie cutter solution
        </p>
        <p className="text-xl font-bold mb-2 mt-4 bg-[#B2BFC8] p-2 rounded-3xl px-4 w-1/2">
          KYS - Know your Student
        </p>
        <p className="mb-8 text-md sm:text-xl font-bold text-justify mt-4 sm:mt-0">
          Though your first job is the launching pad and a great package helps
          immensely, you will achieve career success in an industry or function
          suited to your strengths and what you enjoy rather than what everyone
          else is rooting for.
        </p>
        <p className="text-xl font-bold mb-2 mt-2 bg-[#B2BFC8] p-2 rounded-3xl px-4 w-1/2">
          Off Campus Assistance
        </p>
        <p className=" text-md sm:text-xl font-bold mb-2 text-justify mt-4 sm:mt-0">
          Not all company hires through campus placements.
          So if your college doesn’t have good placement opportunities or you missed the
          opportunity in college or want to explore more options, we are always there to assist you with
          all latest off campus hirings and referrals.
        </p>
      </div>
      <div className="justify-end w-full hidden sm:flex">
        <img src={HomeImage} />
      </div>
    </div>
  );
}
