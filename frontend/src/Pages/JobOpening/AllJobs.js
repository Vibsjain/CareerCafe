import React, { useEffect, useState } from "react";
import NavComponent from "../../Components/Navbar";
import { useHistory } from "react-router-dom";
import api from "../../api/index";
import NoExp from "../../Components/NoExp";
import Footer from "../../Components/Footer";

const Card = ({ item }) => {
  const history = useHistory();
  const companyButton =
    "my-5 bg-transparent hover:bg-[#07075f] text-[#07075f] font-semibold hover:text-white py-2 px-4 border border-[#07075f] hover:border-transparent rounded mx-4";
  return (
    <div>
      <div className="border-2 border-[#07075f] flex flex-col md:flex-row rounded-3xl shadow-[0_30px_40px_-25px_rgba(0,0,0,0.3)] my-20 w-3/4 mx-auto flex flex-wrap justify-center items-center">
        <div className="w-full md:w-3/12 flex justify-center items-center">
          <img src={item.logo} className="w-28 md:w-40 h-28 md:h-40" />
        </div>
        <div className="flex justify-center items-center w-full md:w-2/3 flex-col px-4">
          <h1 className="py-5 text-3xl md:text-5xl text-center text-black font-bold mt-4">
            {item.company} - {item.title}
          </h1>
          <button
            className={companyButton}
            onClick={() => history.push("/job/opening/" + item._id)}
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
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();
  const companyList = [
    "Deloitte",
    "Amazon",
    "American Express",
    "Hashedin",
    "Quark",
    "Edifecs",
    "Mediatek",
    "Adobe",
    "Accolite",
    "Morgan Stanley",
    "GoldmanSachs",
    "TCS NQT",
    "TCS Digital",
    "Wipro",
    "Samsung",
    "Fareye",
    "LTI",
    "Capgemini",
    "Cognizant",
    "Accenture",
    "KPMG",
    "Band Y",
    "INDUS VALLEY PARTNERS",
    "Amdocs",
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
