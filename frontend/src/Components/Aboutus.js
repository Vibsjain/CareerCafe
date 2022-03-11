import React from "react";

export default function Aboutus() {
  const HomeImage = `https://res.cloudinary.com/dumgn8uvd/image/upload/v1644893552/careerCafeAboutUs_d0asf4.jpg`;
  return (
    <div className="flex w-full justify-center items-center px-4" id="about">
      <div className="justify-end w-full hidden sm:flex shadow-xl">
        <img src={HomeImage} className="rounded-2xl" />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <p className="text-4xl sm:text-5xl font-bold text-center text-[#07075F] mb-10">
          About Us
        </p>

        <p className="mb-8 text-md sm:text-xl font-bold text-justify sm:text-center w-full sm:w-3/4">
          Welcome to{" "}
          <span className="font-semibold sm:font-bold text-[#eb924e]">
            Career Café
          </span>
          . We groom and
          enrich your job skills, and make you ready for the corporate world via our optimized placement
          training courses. </p>
          <p className="mb-8 text-md sm:text-xl font-bold text-justify sm:text-center w-full sm:w-3/4">Our team consists of highly eligible trainers who have
          years of professional and practical experience with the top software
          companies like{" "}
          <a
            href="https://www.goldmansachs.com/"
            target="_blank"
            className="hover:text-[#07075F] text-[#eb924e] no-underline"
          >
            Goldmansachs
          </a>
          ,{" "}
          <a
            href="https://www.americanexpress.com/en-in/"
            target="_blank"
            className="hover:text-[#07075F] text-[#eb924e] no-underline"
          >
            American express
          </a>
          ,{" "}
          <a
            href="https://www.amazon.jobs/en-gb"
            target="_blank"
            className="hover:text-[#07075F] text-[#eb924e] no-underline"
          >
            Amazon
          </a>{" "}
          etc with a history of delivering the best since the beginning.
        </p>
      </div>
    </div>
  );
}