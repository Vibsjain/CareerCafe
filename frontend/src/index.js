import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FinalRoutes from "./Route";
import "./Assets/CSS/AdminNav.css";
import ScrollToTop from "./Components/ScrollToTop";

ReactDOM.render(
  <>
    <FinalRoutes />
    <ScrollToTop />
  </>,
  document.getElementById("root")
);
