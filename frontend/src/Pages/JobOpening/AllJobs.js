import React, { useEffect, useState } from 'react';
import NavComponent from '../../Components/Navbar';
import { useHistory } from "react-router-dom";
import api from '../../api/index';

export default function AllJobs() {
    
    const [jobData, setJobData] = useState([]);

    const getData = async () => {
        const res = await api.get("/joblist")
        console.log(res);
        setJobData({
            jobData: res.data
        })
    }

    useEffect(() => {
        getData();
    }, [])

    const history = useHistory();
    const companyList = ["Google", "Microsoft", "Adobe", "Apple", "Facebook", "Netflix", "LinkedIn", "Twitter", "Tower Research Capital"]

    const companyButton = "my-2 bg-transparent hover:bg-[#07075f] text-[#07075f] font-semibold hover:text-white py-2 px-4 border border-[#07075f] hover:border-transparent rounded mx-4";

    const selectCompany = (company) => {
        company = company.toLowerCase();
        company = company.replace(/\s+/g, '-');
        history.push(`/job/opening/company/${company}`);
    }

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
        <div className="flex flex-col justify-center items-center mt-10">
            <p className="text-2xl font-bold text-center">Company Specific Openings</p>
            <div className="flex flex-wrap justify-center items-center mt-4">
                {companyList.map((company) => (
                    <button onClick={() => selectCompany(company)} className={companyButton}>{company}</button>
                ))}
            </div>
        </div>
      </div>
  );
}
