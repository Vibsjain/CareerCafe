import React from "react";
import Footer from "../../Components/Footer";
import NavComponent from "../../Components/Navbar";
import BatchQueryForm from "../../Components/BatchQueryForm";

const POINTS = [
  "Resume up gradation",
  "Aptitude and reasoning live classes",
  "Mock interviews by industrial experts",
  "Group discussion and Communication classes",
  "Resume formation and up gradation",
];

const NonEngineeringJobs = () => {
  return (
    <div>
      <NavComponent />
      <div className=" flex flex-col pt-12 w-full justify-center items-center min-h-[100vh] gap-y-4 ">
        <h1 className="typewriter text-7xl font-bold pb-4">
          Non Engineering Jobs
        </h1>
        <h1 className="text-3xl font-semibold text-gray-500">
          In IT Companies
        </h1>
        <h2 className="text-2xl ">MSc / BCA / BSc / Any Graduate</h2>
        <a href="#description">
          <button className="bg-blue-500 hover:bg-blue-400 border-b-4 border-blue-700 hover:border-blue-500 text-white text-center py-2 px-4 rounded">
            Read More
          </button>
        </a>
        .
      </div>
      <div
        className="flex flex-col w-full h-[100vh] justify-center items-center px-24 gap-y-8"
        id="description"
      >
        <p className="text-3xl text-center">
          Placements in IT Companies aren’t confined to engineering fields only.
          You can secure offer letters before appearing for your final exams
          even if you belong to management, commerce, architecture, design, and
          other disciplines.
        </p>
        <p className="text-3xl text-center">
          An aware student remains ready with the knockout punch, in the very
          first placement interview. Our mentors ensure that a student is
          Prepared to successfully ace all the rigorous selection process from
          written to interview rounds.
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
      <Footer/>
    </div>
  );
};

export default NonEngineeringJobs;
