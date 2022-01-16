import React from "react";
import HomeImage from "../Assets/Images/homeTop.png";

export default function Different() {
  return (
    <div className="flex w-full justify-center items-center px-8">
      <div className="flex w-full">
        <p className="text-5xl font-bold text-center text-[#07075F] mb-10">
          Why are we different?
        </p>
      </div>
      <div className="flex justify-end w-full">
        <img  src={HomeImage} />
      </div>
    </div>
  );
}
