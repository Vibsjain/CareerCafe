import React, { useState } from "react";
import "../Assets/CSS/Navbar.css";
import logo from "../Assets/Images/logo.png";

export default function NavComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const textClass = "text-1xl";
    return (
        <>
            <nav className="Navbar">
                <a>
                    <img className="NavbarLogo" src={logo} alt="" />
                </a>
                <ul className="NavbarLinks">
                    <li className="NavbarDropdown">
                        <a href="#">Home</a>
                    </li>
                    <li className="NavbarDropdown">
                        <a href="#">Courses</a>
                        <div className="dropDown">
                            <a href="#">Tech</a>
                            <a href="#">Non Tech</a>
                        </div>
                    </li>
                    <li className="NavbarDropdown">
                        <a href="#">Hire With Us</a>
                    </li>
                    <li className="NavbarDropdown">
                        <a href="#">Notes</a>
                    </li>
                    <li className="NavbarDropdown">
                        <a href="#">About Us</a>
                    </li>
                    <li className="NavbarDropdown">
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
                <div className="flex sm:hidden">
                    {!isOpen ? (
                        <i
                            class="fa fa-reorder text-3xl"
                            onClick={() => setIsOpen(true)}
                        ></i>
                    ) : (
                        <i
                            class="fa fa-close text-3xl"
                            onClick={() => setIsOpen(false)}
                        ></i>
                    )}
                </div>
            </nav>
            {isOpen && (
                <div className="absolute right-0 top-0 w-[50%] h-full bg-[#43B5D5] z-50">
                    <i
                        class="fa fa-close text-3xl ml-4 mt-4"
                        onClick={() => setIsOpen(false)}
                    ></i>
                    <ul className="flex flex-col justify-end items-center gap-y-3">
                        <li>
                            <h1 className={`${textClass}`}>Home</h1>
                        </li>
                        <li>
                            <h1 className={`${textClass}`}>Tech Courses</h1>
                        </li>
                        <li>
                            <h1 className={`${textClass}`}>Non Tech Course</h1>
                        </li>
                        <li>
                            <h1 className={`${textClass}`}>Hire With Us</h1>
                        </li>
                        <li>
                            <h1 className={`${textClass}`}>Notes</h1>
                        </li>
                        <li>
                            <h1 className={`${textClass}`}>About Us</h1>
                        </li>
                        <li>
                            <h1 className={`${textClass}`}>Contact Us</h1>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}
