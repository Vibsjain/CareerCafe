import React from "react";
import { useHistory, Link } from "react-router-dom";
import techJob from "../Assets/Images/techJob.jpg";
import mentorship from "../Assets/Images/mentorship.jpg";
import nontechJob from "../Assets/Images/nontechJob.jpg";
import nonengineering from "../Assets/Images/nonengineering.jpg";
import mockinterview from "../Assets/Images/mockinterview.jpg";

const CourseCard = (props) => {
  const history = useHistory();
  return (
    <Link to={`/course/${props.nav}`}>
      <div className="w-[19rem] sm:w-[23rem] flex flex-col items-center justify-center rounded-lg m-2 mb-20 border-black border cursor-pointer  hover:shadow-2xl hover:shadow-[#eb924e]">
        <img className="w-full rounded-t-lg h-[200px] " src={props.image} alt="" />
        <p className="text-2xl font-semibold p-4 text-center">{props.title}</p>
        <p className="text-center px-4 pb-2">{props.desc}</p>
      </div>
    </Link>
  );
};

export default function Courses() {
  return (
    <div className="px-10 mb-20 mt-12 sm:mt-0" id="courses">
      <p className="text-5xl font-bold text-center text-[#07075F] mb-10">
        Our Courses
      </p>
      <div className="w-full flex flex-wrap justify-evenly">
        <CourseCard
          image={techJob}
          title="Tech Jobs - Novice Batch"
          nav="techjobs"
          desc="A course designed to prepare you for the role of SDE for both product and service based companies"
        />
        <CourseCard
          image={nontechJob}
          title="Non Tech Jobs Batch"
          nav="nontechjobs"
          desc="Non-core roles require you to have a decent resume, strong aptitude skills, basic technical skills, and good communication skills."
        />
        <CourseCard
          image={nonengineering}
          title="Non Engineering Jobs"
          nav="nonengineeringjobs"
          desc="You can secure offer letters before appearing for your final exams even if you belong to management, design, and other disciplines."
        />
        <CourseCard
          image={mentorship}
          title="Mentorship Batch"
          nav="mentorship"
          desc="Live DSA specific 1:1  mock interviews with industrial experts from Amazon, GoldmanSachs etc "
        />
        <CourseCard
          image={mockinterview}
          title="Mock Interview Batch"
          nav="mockinterview"
          desc="It gives you experience of how it feels to be part of an interview and definitely increases the chance of getting your dream job. "
        />
      </div>
    </div>
  );
}
