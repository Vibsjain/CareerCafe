import React from "react";
import NavComponent from "./Navbar";
import { useHistory } from "react-router-dom";
import InterviewCard from "./InterviewCard";

export default function InterviewExpTop() {
    const history = useHistory();
    const companyList = ["Google", "Microsoft", "Adobe", "Apple", "Facebook", "Netflix", "LinkedIn", "Twitter", "Tower Research Capital"]

    const buttonClass = "bg-[#0c0c8d] hover:bg-[#07075f] text-white font-bold py-2 px-4 rounded mx-4";
    const companyButton = "bg-transparent hover:bg-[#07075f] text-[#07075f] font-semibold hover:text-white py-2 px-4 border border-[#07075f] hover:border-transparent rounded mx-4";

    const selectCompany = (company) => {
        company = company.toLowerCase();
        company = company.replace(/\s+/g, '-');
        history.push(`/interview/experience/company/${company}`);
    }

  return (
    <div>
        <NavComponent />
        <div className="pt-28">
            <p className="p-6 text-[50px] text-center bg-[#eb924e] mx-10 font-bold rounded-3xl">
                Read Interview Experience of our students and get ready for your next Interview!
            </p>
        </div>
        <div className="flex flex-row justify-center items-center mt-10">
            <button onClick={() => history.push("/interview/experience/category/placement")} className={buttonClass}>Placement Interview Experience</button>
            <button onClick={() => history.push("/interview/experience/category/internship")} className={buttonClass}>Internship Interview Experience</button>
            <button onClick={() => history.push("/interview/experience/category/oncampus")} className={buttonClass}>Oncampus</button>
            <button onClick={() => history.push("/interview/experience/category/offcampus")} className={buttonClass}>Offcampus</button>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
            <p className="text-2xl font-bold">Company Specific Interviews</p>
            <div className="flex flex-wrap justify-center items-center mt-4">
                {companyList.map((company) => (
                    <button onClick={() => selectCompany(company)} className={companyButton}>{company}</button>
                ))}
            </div>
        </div>
        <p className="text-xl text-center font-bold px-4 py-1 border-black border-2 mt-10 w-1/2 mx-auto mb-12">Latest Interview Experiences</p>
        <InterviewCard
            title="Cloudera Placement Experience 2021"
            name="Sukriti Jain"
            role="placement"
            place="oncampus"
            company="Google"
            image="https://cdn.vox-cdn.com/thumbor/NeSo4JAqv-fFJCIhb5K5eBqvXG4=/7x0:633x417/1200x800/filters:focal(7x0:633x417)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"
            content="In the ongoing placement season, many companies visited VIT for internship and full-time offers. Cloudera visited the campus on 8th August, offering internship + FTE offers to final year students. A total of around 570 students were selected based on CGPA and branch. Only Computer Science students were shortlisted."
        />
        <InterviewCard
            title="Cloudera Placement Experience 2021"
            name="Sukriti Jain"
            role="placement"
            place="oncampus"
            company="Google"
            image="https://cdn.vox-cdn.com/thumbor/NeSo4JAqv-fFJCIhb5K5eBqvXG4=/7x0:633x417/1200x800/filters:focal(7x0:633x417)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"
            content="In the ongoing placement season, many companies visited VIT for internship and full-time offers. Cloudera visited the campus on 8th August, offering internship + FTE offers to final year students. A total of around 570 students were selected based on CGPA and branch. Only Computer Science students were shortlisted."
        />
        <InterviewCard
            title="Cloudera Placement Experience 2021"
            name="Sukriti Jain"
            role="placement"
            place="oncampus"
            company="Google"
            image="https://cdn.vox-cdn.com/thumbor/NeSo4JAqv-fFJCIhb5K5eBqvXG4=/7x0:633x417/1200x800/filters:focal(7x0:633x417)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"
            content="In the ongoing placement season, many companies visited VIT for internship and full-time offers. Cloudera visited the campus on 8th August, offering internship + FTE offers to final year students. A total of around 570 students were selected based on CGPA and branch. Only Computer Science students were shortlisted."
        />
    </div>
  );
}
