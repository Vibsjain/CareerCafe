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

  useEffect(() => {
    window.scroll(0, 0);
    setData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="py-8 h-[100vh] w-full flex justify-center items-center flex-col">
        <img src={jobData.logo} alt="logo" className="w-72 h-72"></img>
        <h1 className="text-8xl font-extrabold">{jobData.company}</h1>
        <h1 className="text-2xl font-medium underline py-8">
          Role: {jobData.title}
        </h1>
      </div>
      <div className="min-h-[100vh] flex items-center py-12 flex-col">
        <h1 className="text-4xl font-bold text-center">Job Description</h1>
        <div className="flex w-full justify-center items-center min-h-[70vh]">
          <div className="px-8 py-12 border-2 border-[#07075f] rounded-3xl shadow-[0_30px_40px_-25px_rgba(0,0,0,0.3)]">
            <h1>{jobData.desc}</h1>
          </div>
        </div>
        <div className="min-h-[100vh] flex items-center py-12 flex-col">
          <h1 className="text-4xl font-bold text-center">Criteria</h1>
          <div className="flex w-full justify-center items-center min-h-[70vh]">
            <div className="px-8 py-12 border-2 border-[#07075f] rounded-3xl shadow-[0_30px_40px_-25px_rgba(0,0,0,0.3)]">
              <h1>{jobData.criteria}</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
