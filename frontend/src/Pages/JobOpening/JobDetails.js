import React, { useState, useEffect } from "react";
import api from "../../api/index";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function JobDetails() {
  const { id } = useParams();
  const [jobData, setJobData] = useState([]);
  const setData = async () => {
    const res = await api.get("/joblist/" + id);
    const response = res.data;
    setJobData(response);
  };

  const ExpressDiv = (props) => {
    return (
      <div className="w-full flex flex-col mt-12">
        <h1 className="text-center text-3xl sm:text-5xl font-extrabold">
          {props.title}
        </h1>
        <div className="py-4 min-h-[60vh] border my-4 mx-8 border-2 p-4 border-[#07075f] rounded-3xl shadow-[0_30px_40px_-25px_rgba(0,0,0,0.3)]">
          <p className="text-lg sm:text-xl text-justify">{props.data}</p>
        </div>
      </div>
    );
  };
  useEffect(() => {
    window.scroll(0, 0);
    setData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="py-8 h-[100vh] w-full flex justify-center items-center flex-col">
        <img
          src={jobData.logo}
          alt="logo"
          className="w-60 md:w-72 h-60 md:h-72"
        ></img>
        <h1 className="text-5xl md:text-8xl font-extrabold">
          {jobData.company}
        </h1>
        <h1 className="text-2xl font-medium underline py-8">
          Role: {jobData.title}
        </h1>
      </div>
      <div className="min-h-[100vh] flex flex-col md:flex-row justify-center py-12 gap-y-12">
        <ExpressDiv title="Job Description" data={jobData.desc} />
        <ExpressDiv title="Job Criteria" data={jobData.criteria} />
      </div>
      {/* <ExpressDiv title="Criteria" criteria={jobData.criteria} /> */}
      <Footer />
    </>
  );
}
