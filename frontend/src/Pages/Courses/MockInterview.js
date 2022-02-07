import React, { useEffect } from "react";
import Footer from "../../Components/Footer";
import NavComponent from "../../Components/Navbar";
import BatchQueryForm from "../../Components/BatchQueryForm";

const MockInterview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <NavComponent />
      <BatchQueryForm />
      <Footer />
    </div>
  );
};

export default MockInterview;
