import React from "react";
import NavComponent from "../../Components/Navbar";
// #10225F
const TechJobs = () => {
  const POINTS = [
    "Live DSA and Coding classes ( 150+ questions)",
    "200 + hrs live classes ",
    "Live Coding and Practice Classes",
    "Live Aptitude Test",
    "Live Reasoning and verbal ability classes",
    "50+ (Tech & Apti) MCQ Tests",
    "Mentorship on a web development project (MERN Based) with a small project",
    "Technical Mock interviews (4 Mocks)",
    "HR round Preparation",
    "DBMS/SQL/OS Interview material and classes on important topics",
    "Guest lecturers from industry experts",
    "Off campus placement assistance ",
  ];
  return (
    <div className="courseBackground">
      <NavComponent />
      <div className=" flex flex-col pt-12 w-full justify-center items-center min-h-[100vh] gap-y-4 ">
        <h1 className="typewriter text-9xl font-bold">Tech Jobs</h1>
        <h1 className="text-3xl font-semibold text-gray-500">
          Novice Batch (Crush IT)
        </h1>
        <h2 className="text-2xl ">4 Months</h2>
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
        <p className="text-3xl font-medium text-center">
          A course designed to prepare you for the{" "}
          <strong>
            role of SDE for both product and service based companies
          </strong>
        </p>
        <p className="text-3xl text-center">
          The course is designed to help you build concepts, prepare strategies,
          identify weaknesses, and take steps to eliminate them.
        </p>
        <p className="text-3xl text-center">
          An aware student remains ready with the knockout punch, in the very
          first placement interview. Our mentors ensure that a student is
          Prepared to successfully ace all the rigorous selection process from
          written to interview rounds.
        </p>
      </div>
      <div className="flex flex-col w-full h-[100vh] justify-center items-center">
        <div className="flex w-full justify-start items-center">
          {/* {
            POINTS.map((point, index)=>{
              return(
                {
                  index%2==0?<iv
                }
              )
            })
          } */}
        </div>
      </div>
    </div>
  );
};

export default TechJobs;
