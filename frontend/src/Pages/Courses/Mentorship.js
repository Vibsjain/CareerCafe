import React from "react";
import NavComponent from "../../Components/Navbar";

const Mentorship = () => {

  const POINTS = [
    "Live DSA specific 1:1  mock interviews with industrial experts from Amazon, GoldmanSachs etc",
    "50+ (Tech & Apti) MCQ Tests",
    "Mock Coding tests",
    "HR Round Preparation",
    "Resume formation and up gradation"
  ]


  return (
    <div>
      <NavComponent />
      <div className=" flex flex-col pt-12 w-full justify-center items-center min-h-[100vh] gap-y-4 ">
        <h1 className="typewriter text-9xl font-bold">Mentorship Batch</h1>
        <h1 className="text-3xl font-semibold text-gray-500">
          for top product based companies 
        </h1>
        <a href="#description">
          <button className="bg-blue-500 hover:bg-blue-400 border-b-4 border-blue-700 hover:border-blue-500 text-white text-center py-2 px-4 rounded">
            Read More
          </button>
        </a>
      </div>
      <div className="flex flex-col w-full h-[100vh] justify-center items-center">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          {POINTS.map((point, index) => {
            return (
              <div
                className={`flex w-full justify-center mx-2 items-center bg-[#${
                  index % 4 === 0 || (index + 1) % 4 === 0 ? "10225F" : "EB924E"
                }] py-4 px-8 rounded-full border border-gray-900`}
              >
                <h1 className={`text-${
                  index % 4 === 0 || (index + 1) % 4 === 0 ? "white" : "[#07075F]"
                } text-md font-bold`}>{point}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
