import React from "react";
import { useHistory, Link } from "react-router-dom";
import techJob from "../Assets/Images/techJob.jpg";
import mentorship from "../Assets/Images/mentorship.jpg";
const CourseCard = (props) => {
  const history = useHistory();
  return (
    <Link to={`/course/${props.nav}`}>
      <div className="w-[19rem] sm:w-[23rem] flex flex-col items-center justify-center rounded-lg m-2 mb-20 border-black border cursor-pointer  hover:shadow-2xl hover:shadow-[#eb924e]">
        <img className="w-full rounded-t-lg h-auto " src={props.image} alt="" />
        <p className="text-2xl font-semibold p-4 text-center">{props.title}</p>
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
        />
        <CourseCard
          image={techJob}
          title="Non Tech Jobs Batch"
          nav="nontechjobs"
        />
        <CourseCard
          image={techJob}
          title="Non Engineering Jobs"
          nav="nonengineeringjobs"
        />
        <CourseCard image={techJob} title="Mentorship Batch" nav="mentorship" />
        <CourseCard
          image={mentorship}
          title="Mock Interview Batch"
          nav="mockinterview"
        />
      </div>
    </div>
  );
}
