import React, { useEffect, useState } from "react";
import NavComponent from "../../Components/Navbar";
import { useHistory } from "react-router-dom";
import api from "../../api/index";
import NoExp from "../../Components/NoExp";
import Footer from "../../Components/Footer";

const Card = ({ item }) => {
  const history = useHistory();
  const companyButton =
    "my-2 bg-transparent hover:bg-[#07075f] text-[#07075f] font-semibold hover:text-white py-2 px-4 border border-[#07075f] hover:border-transparent rounded mx-4";
  return (
    <div className="w-full min-h-[35vh] py-8 px-36   ">
      <div className="w-full flex flex-col md:flex-row bg-[#eb924e] min-h-[35vh] rounded-xl">
        <div className="w-3/12 flex justify-center items-center h-[35vh]">
          <img src={item.logo} className="w-36 h-36"></img>
        </div>
        <div className="w-[1px] h-[30vh] bg-gray-600 mt-4"></div>
        <div className="flex flex-col justify-around items-center w-9/12 px-8 py-4">
          <h1 className="text-5xl text-white font-bold mt-4 text-center">
            {item.company} ({item.title})
          </h1>
          <button
            onClick={() => history.push("/job/opening/" + item._id)}
            className={companyButton}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default function AllJobs() {
  const [jobData, setJobData] = useState([]);

  const getData = async () => {
    const res = await api.get("/joblist");
    setJobData(res.data);
    console.log(jobData);
  };

  useEffect(() => {
    getData();
  }, []);

  const history = useHistory();
  const companyList = [
    "Google",
    "Microsoft",
    "Adobe",
    "Apple",
    "Facebook",
    "Netflix",
    "LinkedIn",
    "Twitter",
    "Tower Research Capital",
  ];

  const companyButton =
    "my-2 bg-transparent hover:bg-[#07075f] text-[#07075f] font-semibold hover:text-white py-2 px-4 border border-[#07075f] hover:border-transparent rounded mx-4";

  const selectCompany = (company) => {
    company = company.toLowerCase();
    company = company.replace(/\s+/g, "-");
    history.push(`/job/opening/company/${company}`);
  };

  return (
    <div>
      <NavComponent />
      <div className="pt-28">
        <p className="hidden sm:block p-6 text-[50px] text-center bg-[#eb924e] mx-10 font-bold rounded-3xl">
          Find job openings in your dream company and apply now!
        </p>
        <p className="block sm:hidden p-6 text-[30px] text-center bg-[#eb924e] mx-10 font-bold rounded-3xl">
          Job Openings
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 mb-24">
        <p className="text-2xl font-bold text-center">
          Company Specific Openings
        </p>
        <div className="flex flex-wrap justify-center items-center mt-4">
          {companyList.map((company) => (
            <button
              onClick={() => selectCompany(company)}
              className={companyButton}
            >
              {company}
            </button>
          ))}
        </div>
      </div>
      {jobData && jobData.length > 0 ? (
        jobData.map((value) => <Card item={value} />)
      ) : (
        <NoExp
          first="No Job Opening for now"
          second="We are searching, will add them soon"
        />
      )}
      <Footer />
    </div>
  );
}
