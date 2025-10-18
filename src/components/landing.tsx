import { useState, useEffect } from "react";
import "./landing.css";

const Landing = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = ["an Engineer", "a Developer", "a Freelancer"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setDisplayedText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum]);

  useEffect(() => {
    setCurrentText(displayedText);
  }, [displayedText]);

  return (
    <header className="container" style={{ marginTop: "24px" }}>
      <div className="row">
        <div className="col-md-4 m-0">
          <div className="glass">
            <img
              src={process.env.PUBLIC_URL + "/images/hoodiet.png"}
              alt="Profile"
              className="slider-container"
            />
          </div>
        </div>
        <div className="col-md-6 p-0 m-0">
          <div className="glass">
            <span className="heading-1">Hi — I'm Vivek V Pai. I am </span>
            <span className="flashy-highlights-title">{displayedText}</span>
            <span className="cursor">|</span>
          </div>
          <div className="glass mt-4">
            I'm a Software Engineer with 4 years 0 months of crafting things
            that actually work (most of the time). My toolkit? Angular and React
            for the web, React Native Expo for mobile, Django for the backend,
            and a healthy dose of JavaScript, TypeScript, and Python. I've
            worked with AWS, and I'm all about building scalable, user-friendly
            apps that don't just look good—they perform. I write tests too
            (Pytest, Selenium, Jest) because future-me appreciates past-me's
            foresight. MSc from Liverpool John Moores University, occasional
            guest lecturer in Angular at DBIT, fluent in English and Hindi, and
            always ready to jump into open-source or enterprise challenges.
          </div>
          <div className="m-4 ">
            <div className="flashy-highlights-title">Latest Highlights</div>
            <div className="highlight-item mt-4">
              Building and maintaining OpenMate / Cooking MCP / Leading the
              ShopProp Development / Architecting EQMS Dashboard and App
            </div>
          </div>
        </div>
        <div className="col-md-2 m-0">
          <div className="nav-item ms-auto me-auto">
            <img
              src={process.env.PUBLIC_URL + "/images/PI-logo.png"}
              alt="PI-logo"
              className="logo"
            />
          </div>
          <div className="glass nav-item button-common">Home</div>
          <div className="glass nav-item button-common">Skills</div>
          <div className="glass nav-item button-common">Projects</div>
          <div className="glass nav-item button-common">Contact</div>
        </div>
      </div>
    </header>
  );
};

export default Landing;
