import React from "react";
import { useHistory, Link } from "react-router-dom";
const CourseCard = (props) => {
  const history = useHistory();
  return (
    <Link to={`/course/${props.nav}`}>
      <div className="w-[350px] flex flex-col items-center justify-center rounded-lg m-2 mb-20 border-black border cursor-pointer  hover:shadow-2xl hover:shadow-[#eb924e]">
        <img
          className="w-[350px] rounded-t-lg h-auto "
          src={props.image}
          alt=""
        />
        <p className="text-2xl font-semibold p-4 text-center">{props.title}</p>
      </div>
    </Link>
  );
};

export default function Courses() {
  const imgs = `https://media.istockphoto.com/photos/hand-touching-brain-of-ai-symbolic-machine-learning-artificial-of-picture-id1274437411?b=1&k=20&m=1274437411&s=170667a&w=0&h=btEXIllRM2Qlj4PusT5tjYDMgxZ2TXFP_o05sTUR_L8=`;
  return (
    <div className="px-10 mb-20" id="courses">
      <p className="text-5xl font-bold text-center text-[#07075F] mb-10">
        Our Courses
      </p>
      <div className="w-full flex flex-wrap justify-evenly">
        <CourseCard
          image={imgs}
          title="Tech Jobs - Novice Batch"
          nav="techjobs"
        />
        <CourseCard
          image={imgs}
          title="Non Tech Jobs Batch"
          nav="nontechjobs"
        />
        <CourseCard
          image={imgs}
          title="Non Engineering Jobs"
          nav="nonengineeringjobs"
        />
        <CourseCard image={imgs} title="Mentorship Batch" nav="mentorship" />
        <CourseCard
          image={imgs}
          title="Mock Interview Batch"
          nav="mockinterview"
        />
      </div>
    </div>
  );
}
