import React from 'react'
import NavComponent from '../Components/Navbar'
import HomeImage from "../Assets/Images/homeTop.png"; 
import AOS from 'aos';
import "../Assets/CSS/HomePage.css";

export default function HomePage() {

    AOS.init({
        duration: 1000
    })

    return (
        <div>
            <NavComponent />
            <div className="homepagetopdiv">
                <h1 className="homepagetoptext">Let's build <br /> your Career</h1>
                <img className="homepagetopimage" src={HomeImage} alt="" />
            </div>
            <div className="visiondiv">
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
            </div>
        </div>
    )
}
