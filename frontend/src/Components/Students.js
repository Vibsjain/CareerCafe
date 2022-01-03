import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import User from "../Assets/Images/user.png";
import Google from "../Assets/Images/google.png";
import "../Assets/CSS/Mentors.css";
import "../Assets/CSS/Common.css";

const StudentCard = (props) => {
    return (
        <div className="flex flex-col w-9/12 h-108 justify-center items-center mt-[20%] border-2 rounded-2xl border-cyan-900 shadow-2xl">
            <img
                src={props.image}
                alt="student"
                className="absolute w-32 top-0 rounded-full"
            />
            <div className="flex flex-col justify-center items-center pt-[20%] pb-8">
                <h1 className="text-2xl font-semibold">{props.name}</h1>
                <img
                    src={props.cImage}
                    alt="company"
                    className="w-28 py-8"
                ></img>
                <h1 className="text-2xl font-semibold">{props.company}</h1>
            </div>
        </div>
    );
};

export default function Students() {
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
            <p className="mentorMainHeading">Our Students</p>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                containerClass="carousel-container"
            >
                <StudentCard
                    image={User}
                    name="Rishabh"
                    company="Google"
                    cImage={Google}
                />
                <StudentCard
                    image={User}
                    name="Rishabh"
                    company="Google"
                    cImage={Google}
                />
                <StudentCard
                    image={User}
                    name="Rishabh"
                    company="Google"
                    cImage={Google}
                />
                <StudentCard
                    image={User}
                    name="Rishabh"
                    company="Google"
                    cImage={Google}
                />
                <StudentCard
                    image={User}
                    name="Rishabh"
                    company="Google"
                    cImage={Google}
                />
            </Carousel>
        </div>
    );
}
