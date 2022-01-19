import React from "react";
import HomeImage from "../Assets/Images/homeTop.png";

export default function Different() {
  return (
    <div className="flex w-full justify-center items-center px-4">
      <div className="flex flex-col items-center justify-center w-full">
        <p className="text-4xl sm:text-5xl font-bold text-center text-[#07075F] mb-10">
          Why are we different?
        </p>
        <p className="text-xl sm:text-2xl font-bold text-center text-[#eb924e] mb-2">One size rarely fits all - So we Avoid cookie cutter solution</p>
        <p className="text-xl font-bold mb-2 mt-4 bg-[#B2BFC8] text-center sm:text-justify p-2 rounded-3xl px-4">KYS - Know your Student</p>
        <p className="mb-8 text-md sm:text-xl font-bold text-justify sm:text-center mt-4 sm:mt-0">Though your first job is the launching pad and a great package helps immensely, you will achieve career success in an industry or function suited to your strengths and what you enjoy rather than what everyone else is rooting for.</p>
        <p className="text-xl font-bold mb-2 mt-2 bg-[#B2BFC8] text-center sm:text-justify p-2 rounded-3xl px-4">Post Placement Support</p>
        <p className="mb-8 text-md sm:text-xl font-bold mb-2 text-justify sm:text-center mt-4 sm:mt-0">Students once mentored at career café remains our student forever and is free to take expert guidance from our mentors at any point in ones career. Whether it's regarding switching any company or for referrals through our network or any new career move.</p>
      </div>
      <div className="flex justify-end w-full hidden sm:flex">
        <img  src={HomeImage} />
        
      </div>
    </div>
  );
}
