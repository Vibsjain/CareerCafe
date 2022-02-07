import React, { useEffect } from "react";
import Footer from "../../Components/Footer";
import NavComponent from "../../Components/Navbar";
import BatchQueryForm from "../../Components/BatchQueryForm";

const NonTechJobs = () => {
  const POINTS = [
    "160+ hrs live classes",
    "Live aptitude classes",
    "Live Reasoning and verbal ability classes",
    "Basic DSA and coding classes",
    "SQL Live Classes and practice sessions (Important questions)",
    "JAM/Guesstimate sessions",
    "Weekly Mock Tests",
    "Resume Up gradation",
    "HR round preparation",
    "4 Mock interviews by industrial experts from BIG 4 ( Deloitte, KPMG etc)",
    "Guest lecturers from industry experts",
    "Off campus placement assistance",
    "Resume formation and up gradation",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <NavComponent />
      <div className=" flex flex-col pt-12 w-full justify-center items-center min-h-[100vh] gap-y-4 ">
        <h1 className="typewriter text-9xl font-bold">Non Tech Jobs</h1>
        <h1 className="text-3xl font-semibold text-gray-500">
          (Analyst / Consultant)
        </h1>
        <h2 className="text-2xl ">3 Months</h2>
        <a href="#description">
          <button className="bg-blue-500 hover:bg-blue-400 border-b-4 border-blue-700 hover:border-blue-500 text-white text-center py-2 px-4 rounded">
            Read More
          </button>
        </a>
      </div>
      <div
        className="flex flex-col w-full h-[100vh] justify-center items-center px-24 gap-y-8"
        id="description"
      >
        <p className="text-3xl text-center">
          With the recent boom in the field of Data Analytics, Data Science, and
          Consulting, many students are shifting towards the Non Technical firms
          in the field of Analytics, Consulting and Finance . Students who want
          to work in Non Technical firms are advisable to go for a company with
          good reputation, as it adds more weight age to the CV and one can
          switch easily later, with such brand names in their resume.
        </p>
        <p className="text-3xl text-center">
          Non-core roles require you to have a decent resume, strong aptitude
          skills, basic technical skills, and good communication skills.
        </p>
      </div>
      <div className="flex flex-col w-full h-[100vh] justify-center items-center">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          {POINTS.map((point, index) => {
            return (
              <div
                className={`flex w-full justify-center items-center bg-[#${
                  index % 4 === 0 || (index + 1) % 4 === 0 ? "10225F" : "EB924E"
                }] py-4 px-8 rounded-full border border-gray-900`}
              >
                <h1
                  className={`text-${
                    index % 4 === 0 || (index + 1) % 4 === 0
                      ? "white"
                      : "[#07075F]"
                  } text-md font-bold`}
                >
                  {point}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
      <BatchQueryForm />
      <Footer />
    </div>
  );
};

export default NonTechJobs;
