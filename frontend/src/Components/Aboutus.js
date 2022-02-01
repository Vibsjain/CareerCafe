import React from "react";

export default function Aboutus() {
  return (
      <div className="flex flex-col justify-center items-center w-full text-center px-4">
        <p className="text-5xl font-bold text-center text-[#07075F] mb-10">
        About Us
        </p>
        <p className="mb-8 text-md sm:text-xl font-bold text-justify sm:text-center w-full sm:w-3/4">
        Welcome to <span className="font-semibold sm:font-bold text-[#eb924e]">Career Café</span>, your go-to destination to help you land the job
        you have been dreaming of. Our team consists of highly eligible trainers
        who have years of professional and practical experience with the top
        software companies like <a href="https://www.goldmansachs.com/" target="_blank" className="hover:text-[#07075F] text-[#eb924e] no-underline">Goldmansachs</a>, <a href="https://www.americanexpress.com/en-in/" target="_blank" className="hover:text-[#07075F] text-[#eb924e] no-underline">American express</a>, <a href="https://www.amazon.jobs/en-gb" target="_blank" className="hover:text-[#07075F] text-[#eb924e] no-underline">Amazon</a> etc with
        a history of delivering the best since the beginning. We are uniquely
        qualified to help you learn and practice all the facets required to
        crack all the placement rounds of top tier companies.
        </p>
        <p className="mb-8 text-md sm:text-xl font-semibold sm:font-bold text-justify sm:text-center w-full sm:w-3/4">With an ever-improving team that supports the highest level of service delivered in the field of Placement Preparation, Career Cafe has created a niche that is unmatched.</p>
        <p className="mb-10 text-ms sm:text-xl font-semibold sm:font-bold text-justify sm:text-center w-full sm:w-3/4">We groom and enrich your job skills, and make you ready for the corporate world via our optimized placement training courses. Our trainers have mastered the skill of bringing the best out of every student. Throughout the course, our trainers helps the students identify their strengths and weaknesses and groom them to improve their performances.</p>
      </div>
  );
}
