import React, { useState } from "react";
import "../Assets/CSS/Navbar.css";
import logo from "../Assets/Images/logo1.png";
import logo2 from "../Assets/Images/shortLogo.jpeg";
import { useHistory, Link } from "react-router-dom";

export default function NavComponent() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const textClass = "text-1xl text-white";
  return (
    <>
      <nav className="Navbar">
        <a>
          <img
            onClick={() => history.push("/")}
            className="NavbarLogo cursor-pointer hidden md:flex"
            src={logo}
            alt=""
          />
          <img
            onClick={() => history.push("/")}
            className="NavbarLogo cursor-pointer flex md:hidden w-24 h-24"
            src={logo2}
            alt=""
            style={{ width: "70px" }}
          />
        </a>
        <ul className="NavbarLinks">
          <li className="NavbarDropdown">
            <h1 onClick={() => history.push("/")}>Home</h1>
          </li>
          <a href="/#courses">
            <li className="NavbarDropdown">
              <h1 onClick={() => history.push("/")}>Placement Courses</h1>
            </li>
          </a>
          {/* <li className="NavbarDropdown">
            <h1 onClick={() => history.push("/interview/experience")}>
              Interview Experience
            </h1>
          </li> */}
          <li className="NavbarDropdown">
            <h1 onClick={() => history.push("/job/opening")}>Job Openings</h1>
          </li>
          <li className="NavbarDropdown">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        <div className="flex lg:hidden">
          {!isOpen ? (
            <i
              className="fa fa-reorder text-3xl"
              onClick={() => setIsOpen(true)}
            ></i>
          ) : (
            <i
              className="fa fa-close text-3xl"
              onClick={() => setIsOpen(false)}
            ></i>
          )}
        </div>
      </nav>
      {isOpen && (
        <div className="sidebar fixed right-0 top-0 w-[60%] h-full  z-50">
          <i
            className="fa fa-close text-3xl ml-4 mt-4 text-white"
            onClick={() => setIsOpen(false)}
          ></i>
          <ul className="flex flex-col justify-end items-center gap-y-3">
            <li>
              <h1 className={`${textClass}`} onClick={() => history.push("/")}>
                Home
              </h1>
            </li>

            <li>
              <a href="/#courses">
                <h1 className={`${textClass}`}>Placement Courses</h1>
              </a>{" "}
            </li>

            {/* <li>
              <h1 className={`${textClass}`}>Interview Experience</h1>
            </li> */}
            <li>
              <h1
                className={`${textClass}`}
                onClick={() => history.push("/job/opening")}
              >
                Job Openings
              </h1>
            </li>
            <li>
              <a href="#contact">
                <h1
                  className={`${textClass}`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Contact Us
                </h1>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
