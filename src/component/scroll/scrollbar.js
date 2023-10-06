import React, { useEffect, useState } from "react";

const Scrollbar = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`scroll-to-top-button ${isButtonVisible ? "show" : ""}`}
      onClick={handleScrollToTop}
    >
      <i className='fa-solid fa-arrow-up'></i>
    </div>
  );
};

export default Scrollbar;
