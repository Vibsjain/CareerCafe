import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import User from "../Assets/Images/user.png";
import "../Assets/CSS/Mentors.css";
import "../Assets/CSS/Common.css";

export default function Mentors() {
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
    <div className="mentorOuterDiv">
      <p className="mentorMainHeading">Our Mentors</p>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        containerClass="carousel-container"
      >
        <div className="mentorCard">
          <img className="mentorImage" src={User} alt="" />
          <div className="mentorDetails">
            <p className="mentorName">Sundar Pichai</p>
            <p className="companyName">Google</p>
          </div>
        </div>
        <div className="mentorCard">
          <img className="mentorImage" src={User} alt="" />
          <div className="mentorDetails">
            <p className="mentorName">Aman Singh</p>
            <p className="companyName">TCS</p>
          </div>
        </div>
        <div className="mentorCard">
          <img className="mentorImage" src={User} alt="" />
          <div className="mentorDetails">
            <p className="mentorName">Naman Bansal</p>
            <p className="companyName">Microsoft</p>
          </div>
        </div>
        <div className="mentorCard">
          <img className="mentorImage" src={User} alt="" />
          <div className="mentorDetails">
            <p className="mentorName">Ayushi Verma</p>
            <p className="companyName">Salesforce</p>
          </div>
        </div>
        <div className="mentorCard">
          <img className="mentorImage" src={User} alt="" />
          <div className="mentorDetails">
            <p className="mentorName">Naveen Yadav</p>
            <p className="companyName">Google</p>
          </div>
        </div>
        <div className="mentorCard">
          <img className="mentorImage" src={User} alt="" />
          <div className="mentorDetails">
            <p className="mentorName">Sundar Pichai</p>
            <p className="companyName">Google</p>
          </div>
        </div>
        <div className="mentorCard">
          <img className="mentorImage" src={User} alt="" />
          <div className="mentorDetails">
            <p className="mentorName">Sundar Pichai</p>
            <p className="companyName">Google</p>
          </div>
        </div>
        <div className="mentorCard">
          <img className="mentorImage" src={User} alt="" />
          <div className="mentorDetails">
            <p className="mentorName">Sundar Pichai</p>
            <p className="companyName">Google</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
