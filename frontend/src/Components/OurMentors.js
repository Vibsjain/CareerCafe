import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import User from "../Assets/Images/user.png";
import Google from "../Assets/Images/google.png";
import "../Assets/CSS/OurMentors.css";
import "../Assets/CSS/Mentors.css";
import "../Assets/CSS/Common.css";
import api from "../api/index";

const MentorCard = (props) => {
  return (
    <div className="mentor-main-card mb-12">
      <div className="card-image">
        <img src={props.image} className="card-image images" alt="user" />
      </div>
      <div className="companyLogo">
        <img src={props.cImage} className="h-full w-28" />
      </div>
      <div className="mentor-info flex flex-col w-full justify-center items-center gap-y-10">
        <h1 className="mentor-name text-2xl font-semibold">
          {props.mentorName}
        </h1>
        <h1 className="company-name text-2xl font-semibold">
          {props.mentorCompany}
        </h1>
      </div>
    </div>
  );
};

export default function Mentors() {
  // const [mentors, setMentors] = useState([]);
  // const getMentors = async () => {
  //   const response = await api.get("/mentors");
  //   setMentors(response.data);
  //   console.log(mentors);
  // };
  // useEffect(() => {
  //   getMentors();
  // }, []);
  const mentors = [
    {
      _id: "621baf03926d1bf7f94a778c",
      name: "Preeti",
      company: "GoldmanSachs",
      logo: "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645967440/gs_ysrejp.png",
      userImage:
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645981426/rpt_lidjmd.jpg",
      __v: 0,
    },
    {
      _id: "621bc1d2926d1bf7f94a7791",
      name: "Aryan Dixit",
      company: "Accolite Digital",
      logo: "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645967440/accolite_ltzihm.png",
      userImage:
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645986238/ard_xsrhze.jpg",
      __v: 0,
    },
    {
      _id: "621bad9e926d1bf7f94a578a",
      name: "Ritik",
      company: "Samsung",
      logo: "https://images.samsung.com/is/image/samsung/assets/in/about-us/brand/logo/mo/360_197_1.png?$FB_TYPE_B_PNG$",
      userImage:
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1647021659/ritik_egutkw.jpg",
      __v: 0,
    },
    {
      _id: "621bc21d926d1bf7f94a7793",
      name: "Shweta Sinha",
      company: "SAP Labs",
      logo: "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645967440/SAP_ygfwad.png",
      userImage:
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645986305/sts_pmpjde.jpg",
      __v: 0,
    },
    {
      _id: "621bad9e926d1bf7f94a778a",
      name: "Kulbir Singh",
      company: "Quark",
      logo: "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645967441/quark_f9tngz.png",
      userImage:
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645980560/kbs_yjdooz.jpg",
      __v: 0,
    },
    
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-full flex flex-col gap-y-10 justify-center font-bold">
      <p className="text-5xl text-center text-[#07075F]">Our Mentors</p>
      <div className="flex w-full md:px-0 sm:px-24">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          removeArrowOnDeviceType={["mobile"]}
          containerClass="carousel-container"
        >
          {mentors.length > 0 &&
            mentors.map((item, index) => (
              <MentorCard
                image={item.userImage}
                mentorName={item.name}
                mentorCompany={item.company}
                cImage={item.logo}
              />
            ))}
        </Carousel>
      </div>
    </div>
  );
}
