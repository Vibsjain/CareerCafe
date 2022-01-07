import React from "react";

const CourseCard = (props) => {
  return (
    <div className="w-[350px] flex flex-col items-center justify-center rounded-lg m-2 mb-20 border-black border cursor-pointer  hover:shadow-2xl hover:shadow-[#eb924e]">
      <img className="w-[350px] rounded-t-lg h-auto" src={props.image} alt="" />
      <p className="text-3xl font-bold p-4">{props.title}</p>
    </div>
  );
};

export default function Courses() {
  return (
    <div className="px-10 mb-20">
      <p className="text-5xl font-bold text-center text-[#07075F] mb-10">
        Our Courses
      </p>
      <div className="w-full flex flex-wrap justify-evenly">
        <CourseCard
          image="https://media.istockphoto.com/photos/hand-touching-brain-of-ai-symbolic-machine-learning-artificial-of-picture-id1274437411?b=1&k=20&m=1274437411&s=170667a&w=0&h=btEXIllRM2Qlj4PusT5tjYDMgxZ2TXFP_o05sTUR_L8="
          title="Machine Learning"
        />
        <CourseCard
          image="https://media.istockphoto.com/photos/hand-touching-brain-of-ai-symbolic-machine-learning-artificial-of-picture-id1274437411?b=1&k=20&m=1274437411&s=170667a&w=0&h=btEXIllRM2Qlj4PusT5tjYDMgxZ2TXFP_o05sTUR_L8="
          title="Machine Learning"
        />
        <CourseCard
          image="https://media.istockphoto.com/photos/hand-touching-brain-of-ai-symbolic-machine-learning-artificial-of-picture-id1274437411?b=1&k=20&m=1274437411&s=170667a&w=0&h=btEXIllRM2Qlj4PusT5tjYDMgxZ2TXFP_o05sTUR_L8="
          title="Machine Learning"
        />
        <CourseCard
          image="https://media.istockphoto.com/photos/hand-touching-brain-of-ai-symbolic-machine-learning-artificial-of-picture-id1274437411?b=1&k=20&m=1274437411&s=170667a&w=0&h=btEXIllRM2Qlj4PusT5tjYDMgxZ2TXFP_o05sTUR_L8="
          title="Machine Learning"
        />
        <CourseCard
          image="https://media.istockphoto.com/photos/hand-touching-brain-of-ai-symbolic-machine-learning-artificial-of-picture-id1274437411?b=1&k=20&m=1274437411&s=170667a&w=0&h=btEXIllRM2Qlj4PusT5tjYDMgxZ2TXFP_o05sTUR_L8="
          title="Machine Learning"
        />
      </div>
    </div>
  );
}
