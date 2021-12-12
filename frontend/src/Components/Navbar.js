import React, { useState } from "react";
import "../Assets/CSS/Navbar.css";
import logo from "../Assets/Images/logo.png";

export default function NavComponent() {
    return(
        <nav className="Navbar">
            <a><img className="NavbarLogo" src={logo} alt="" /></a>
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
        </nav>
    )
}
