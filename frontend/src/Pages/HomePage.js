import React from "react";
import NavComponent from "../Components/Navbar";
import AOS from "aos";
import "../Assets/CSS/HomePage.css";
import "../Assets/CSS/Common.css";
import Courses from "../Components/Courses";
import Mentors from "../Components/OurMentors";
import Students from "../Components/Students";

export default function HomePage() {
    AOS.init({
        duration: 1000,
    });

    return (
        <div>
            <NavComponent />
            <div className="homepagetopdiv">
                <div className="homepagetopleft">
                    <h1 className="homepagetoptext">
                        Let's build <br /> your Career
                    </h1>
                </div>
                <div className="visionBox">
                    <div className="visionDivOne">
                        <div className="visionCard orange blueText">
                            <p className="visionText">
                                Live <br /> Coding <br /> Classes
                            </p>
                        </div>
                        <div className="visionCard blue orangeText">
                            <p className="visionText">
                                Mock <br /> Interviews
                            </p>
                        </div>
                    </div>
                    <div className="visionDivTwo">
                        <div className="visionCard blue orangeText">
                            <p className="visionText">
                                Live <br /> Aptitude <br /> Classes
                            </p>
                        </div>
                        <div className="visionCard orange blueText">
                            <p className="visionText">
                                Mentorship <br /> in <br /> Developing <br />{" "}
                                Project
                            </p>
                        </div>
                    </div>
                </div>
                {/* <img className="homepagetopimage" src={HomeImage} alt="" /> */}
            </div>
            {/* <div className="visiondiv">
                <p data-aos="fade-up" className="visionheading">Our Vision</p>
                <br />
                <div className="visioncarddiv">
                <div className="visioncard">
                    <p className="visiontext">Live Coding Classes</p>
                </div>
                <div className="visioncard">
                    <p className="visiontext">Live Aptitude Classes</p>
                </div>
                <div className="visioncard">
                    <p className="visiontext">Mock <br /> Interviews</p>
                </div>
                <div className="visioncard">
                    <p className="visiontext">Mentorship in Developing Project</p>
                </div>
                </div>
    </div> */}
            <div>
                <Courses />
            </div>
            <div>
                <Mentors />
            </div>
            <div>
                <Students />
            </div>
        </div>
    );
}
