import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import User from "../Assets/Images/user.png";
import Google from "../Assets/Images/google.png";
import "../Assets/CSS/Mentors.css";
import "../Assets/CSS/Common.css";

const StudentCard = (props) => {
    return (
        <div className="flex flex-col w-[22rem] h-[22rem] justify-center items-center mt-[20%] border-4 border-[#63B3ED] bg-[#1A202C] shadow-2xl">
            <img
                src={props.image}
                alt="student"
                className="absolute w-32 top-0 rounded-full border-4 border-[#63B3ED]"
            />
            <div className="flex flex-col justify-between items-center pt-[6rem] pb-8 h-full gap-y-2">
                <h1 className="text-3xl font-semibold text-[#7F9CF5]">
                    {props.name}
                </h1>
                <h1 className="text-sm font-normal text-white">
                    Placed at {props.company}
                </h1>
                <h1 className="text-sm font-normal text-white px-4 text-justify">
                    D_CODER gave me exposure that not only helped me in
                    improving my technical skills but also helped me in
                    improving my overall personality.
                </h1>
                <img
                    src={props.cImage}
                    alt="company"
                    className="w-16 py-2"
                ></img>
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
        <div className="w-full flex flex-col gap-y-10 justify-center font-bold mt-28 mb-24">
            <p className="text-5xl text-center text-[#10225F]">Our Students</p>
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
        </div>
    );
}
