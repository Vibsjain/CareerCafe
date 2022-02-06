import React from "react";
import { useParams } from "react-router-dom";
import { exp } from "../../Assets/Data/Experience";
import Footer from "../../Components/Footer";
import InterviewCard from "../../Components/InterviewCard";
import NavComponent from "../../Components/Navbar";
import NoExp from "../../Components/NoExp";

export default function CompanyInterviewExp() {
  const { companyName } = useParams();
  var name = companyName.replaceAll("-", " ");
  name = name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());

  const data = exp.filter((experience) => experience.company === companyName);

  return (
    <div>
      <div>
        <NavComponent />
      </div>
      <p className="text-[50px] font-bold text-center underline pt-28">
        {name} Interview Experiences
      </p>
      {data.length === 0 && <NoExp first="No Experience to show!!!" second="We will add them soon." />}
      {data.length > 0 &&
        data.map((value) => {
          return (
            <InterviewCard
              title={value.title}
              name={value.name}
              role={value.role}
              place={value.place}
              company={value.company}
              content={value.content}
              image={value.image}
            />
          );
        })}
      <Footer />
    </div>
  );
}
