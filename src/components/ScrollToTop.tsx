import React, { useState, useEffect } from "react";
import { VscArrowUp } from "react-icons/vsc";
import "./ScrollToTop.css";

const VsArrowUpIcon = VscArrowUp as React.ElementType;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    const homeSection = document.getElementById("home");
    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) {
        observer.unobserve(homeSection);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <VsArrowUpIcon size={16} />
    </div>
  );
};

export default ScrollToTop;
