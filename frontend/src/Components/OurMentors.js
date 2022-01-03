import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import User from "../Assets/Images/user.png";
import Google from "../Assets/Images/google.png";
import "../Assets/CSS/OurMentors.css";
import "../Assets/CSS/Mentors.css";
import "../Assets/CSS/Common.css";

const MentorCard = (props) => {
    return (
        <div className="mentor-main-card">
            <div className="card-image">
                <img
                    src={props.image}
                    className="card-image images"
                    alt="user"
                />
            </div>
            <div className="companyLogo">
                <img src={props.cImage} className="h-full" />
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
                <MentorCard
                    image={User}
                    mentorName="Sundar Pichai"
                    mentorCompany="Google"
                    cImage={Google}
                />
                <MentorCard
                    image={User}
                    mentorName="Sundar Pichai"
                    mentorCompany="Google"
                    cImage={Google}
                />
                <MentorCard
                    image={User}
                    mentorName="Sundar Pichai"
                    mentorCompany="Google"
                    cImage={Google}
                />
                <MentorCard
                    image={User}
                    mentorName="Sundar Pichai"
                    mentorCompany="Google"
                    cImage={Google}
                />
                <MentorCard
                    image={User}
                    mentorName="Sundar Pichai"
                    mentorCompany="Google"
                    cImage={Google}
                />
                <MentorCard
                    image={User}
                    mentorName="Sundar Pichai"
                    mentorCompany="Google"
                    cImage={Google}
                />
            </Carousel>
        </div>
    );
}
