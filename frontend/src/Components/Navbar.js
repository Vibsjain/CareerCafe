import React, { useState } from "react";
import "../Assets/CSS/Navbar.css";
import logo from "../Assets/Images/logo.png";
import { useHistory, Link } from "react-router-dom";

export default function NavComponent() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const textClass = "text-1xl text-white";
  return (
    <>
      <nav className="Navbar">
        <a>
          <img onClick={() => history.push("/")} className="NavbarLogo cursor-pointer" src={logo} alt="" />
        </a>
        <ul className="NavbarLinks">
          <li className="NavbarDropdown">
            <h1 onClick={() => history.push("/")}>Home</h1>
          </li>
          <li className="NavbarDropdown">
            <a href="#courses">Placement Courses</a>
          </li>
          <li className="NavbarDropdown">
            <a href="#">Interview Experience</a>
          </li>
          {/*<li className="NavbarDropdown">
            <a href="#">Notes</a>
          </li>
          <li className="NavbarDropdown">
            <a href="#">Placement Papers</a>
          </li>
          <li className="NavbarDropdown">
            <a href="#">Blogs</a>
  </li>*/}
          <li className="NavbarDropdown"><a href="#contact">Contact Us</a></li>
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
        <div className="sidebar fixed right-0 top-0 w-[50%] h-full  z-50">
          <i
            className="fa fa-close text-3xl ml-4 mt-4 text-white"
            onClick={() => setIsOpen(false)}
          ></i>
          <ul className="flex flex-col justify-end items-center gap-y-3">
            <li>
              <h1 className={`${textClass}`}>Home</h1>
            </li>
            <li>
              <h1 className={`${textClass}`}>Placement Courses</h1>
            </li>
            <li>
              <h1 className={`${textClass}`}>Interview Experience</h1>
            </li>
            {/*<li>
              <h1 className={`${textClass}`}>Notes</h1>
            </li>
            <li>
              <h1 className={`${textClass}`}>Placement Papers</h1>
            </li>
            <li>
              <h1 className={`${textClass}`}>Blogs</h1>
            </li>*/}
            <li>
              <h1 className={`${textClass}`}>Contact Us</h1>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
