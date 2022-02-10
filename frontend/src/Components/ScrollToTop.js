import React, { useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  window.onscroll = function () {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  return (
    <div>
      {isVisible && (
        <button
          className="fixed right-12 bottom-12 bg-[#F27830] py-3 px-3 rounded-full shadow-2xl"
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
