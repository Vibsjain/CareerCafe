import React, { useState } from "react";
import "../Assets/CSS/AdminNav.css";
import logo from "../Assets/Images/logo.png";

export default function AdminNav() {
    return(
        <nav className="Navbar">
            <a><img className="NavbarLogo" src={logo} alt="" /></a>
            <ul className="NavbarLinks">
                <li className="NavbarDropdown">
                    <a href="#">Hiring</a>
                </li>
                <li className="NavbarDropdown">
                    <a href="#">Queries</a>
                </li>
            </ul>
            <button className="logoutButton">Log Out <i className="fa fa-sign-out" aria-hidden="true"></i></button>
        </nav>
    )
}
