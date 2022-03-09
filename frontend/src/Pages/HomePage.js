import React, { useState } from "react";
import AOS from "aos";
import "../Assets/CSS/HomePage.css";
import "../Assets/CSS/Common.css";
import NavComponent from "../Components/Navbar";
import Courses from "../Components/Courses";
import Mentors from "../Components/OurMentors";
import Students from "../Components/Students";
import Footer from "../Components/Footer";
import Aboutus from "../Components/Aboutus";
import Different from "../Components/Different";
import hero from "../Assets/Images/banner.png";

export default function HomePage() {
  AOS.init({
    duration: 1000,
  });
  const buttonClass = `text-white text-sm md:text-lg font-bold px-2 w-52 text-center mx-2 my-2 md:my-4 py-2 bg-[#462895] rounded-full`;
  return (
    <div>
      <NavComponent />
      <div className="w-full py-8 h-[100vh] flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-7/12 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl text-center font-bold sm:font-bold">
            Let's Build Your{" "}
            <span className="font-semibold sm:font-bold text-[#eb924e]">
              Carrer
            </span>
          </h1>
          <div className="flex w-full flex-col md:flex-row justify-center items-center gap-x-4 my-4">
            <h1 className={buttonClass}>Live Classes</h1>
            <h1 className={buttonClass}>Mock Interviews</h1>
            <h1 className={buttonClass}>Project Mentroship</h1>
          </div>
        </div>
        <div className="w-full md:w-5/12 h-[100vh] flex justify-center items-center pt-12">
          <img src={hero} alt="hero" className="w-[90%]"></img>
        </div>
      </div>
      <div>
        <Aboutus />
      </div>
      <div>
        <Different />
      </div>
      <div>
        <Courses />
      </div>
      <div>
        <Mentors />
      </div>
      <div>
        <Students />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
