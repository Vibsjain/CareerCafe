import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import User from "../Assets/Images/user.png";
import Google from "../Assets/Images/google.png";
import "../Assets/CSS/Mentors.css";
import "../Assets/CSS/Common.css";

const StudentCard = (props) => {
    return (
        <div className="flex flex-col w-[14rem] h-[18rem] justify-center items-center mt-[20%] border-2 rounded-2xl border-cyan-900 shadow-2xl">
            <img
                src={props.image}
                alt="student"
                className="absolute w-32 top-0 rounded-full"
            />
            <div className="flex flex-col justify-center items-center pt-[6rem] pb-8">
                <h1 className="text-2xl font-semibold">{props.name}</h1>
                <img
                    src={props.cImage}
                    alt="company"
                    className="w-28 py-2"
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
