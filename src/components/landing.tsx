import { useState, useEffect } from "react";
import "./landing.css";
import FileTree from "./FileTree";

const Landing = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const startDate = new Date("2021-10-01");
  const endDate = new Date();
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffYears = Math.floor(diffDays / 365);
  const diffMonths = Math.floor((diffDays % 365) / 30);
  const experienceTime = `${diffYears} years ${diffMonths} months`;

  const texts = [
    "a Software Engineer. ",
    "a Web and App Developer. ",
    "a Freelancer and Tech Speaker. ",
    "an Open Source Contributor. ",
    "currently working on MCP. ",
  ];

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
        <div className="col-lg-2 col-md-4 m-0 d-flex flex-column">
          <div
            className="nav-item ms-auto me-auto"
            onClick={() => {
              const element = document.getElementById("home");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/PI-logo.png"}
              alt="PI-logo"
              className="logo"
            />
          </div>

          <div className="mb-3 flex-grow-1">
            <FileTree />
          </div>
        </div>

        <div className="col-lg-6 col-md-8 p-0 m-0">
          <div className="glass">
            <p className="heading-1 m-0">Hi — I'm Vivek V Pai. </p>
            <p className="heading-1 m-0">
              I'm
              <span className="flashy-highlights-title"> {displayedText}</span>
              <span className="cursor">|</span>
            </p>
          </div>
          <div className="glass mt-4">
            I'm a Software Engineer with {experienceTime} of crafting things
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
              Learning to cook MCP Servers. Building and maintaining OpenMate
              open source project.
            </div>
            <div className="highlight-item mt-4">
              Currently building and leading the ShopProp UI Team. Contributing
              in architecture and Development for a consulting project (EQMS)
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-12 m-0">
          <div className="profile-card">
            <div className="avatar-wrapper">
              <img
                className="avatar-image"
                src={process.env.PUBLIC_URL + "/images/hoodiet.png"}
                alt="Profile"
              />
            </div>

            <div className="profile-name">Vivek V Pai</div>
            <div className="profile-role">Software Engineer</div>

            <div className="info-row">
              <div className="info-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="info-content">
                <div className="info-label">Location</div>
                <div className="info-value">Bangalore, India</div>
              </div>
            </div>

            <div className="info-row">
              <div className="info-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="info-content">
                <div className="info-label">Email</div>
                <div className="info-value">paivivek002@gmail.com</div>
              </div>
            </div>

            <div className="info-row">
              <div className="info-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="info-content">
                <div className="info-label">LinkedIn</div>
                <div className="info-value">
                  <a
                    href="https://www.linkedin.com/in/vivek-v-pai/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    vivek-v-pai
                  </a>
                </div>
              </div>
            </div>

            <div className="info-row">
              <div className="info-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <div className="info-content">
                <div className="info-label">GitHub</div>
                <div className="info-value">
                  <a
                    href="https://github.com/vivekvpai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    vivekvpai
                  </a>
                </div>
              </div>
            </div>

            <div className="tech-stack">
              <span className="tech-badge">English</span>
              <span className="tech-badge">Hindi</span>
              <span className="tech-badge">Kannada</span>
              <span className="tech-badge">Konkani</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="section-title">
          <span style={{ color: "var(--accent-2)" }}>// &nbsp;</span>
          Coding Languages
        </div>

        <div className="col-md-4">
          <div className="glass mb-2">
            <div className="skill-header">
              <span>Learning JavaScript . . .</span>
              <span>90%</span>
            </div>
            <div className="progress-bar">
              <div style={{ width: "90%" }}></div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-2">
          <div className="glass">
            <div className="skill-header">
              <span>Learning TypeScript . . .</span>
              <span>85%</span>
            </div>
            <div className="progress-bar">
              <div style={{ width: "85%" }}></div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-2">
          <div className="glass">
            <div className="skill-header">
              <span>Learning Python . . .</span>
              <span>50%</span>
            </div>
            <div className="progress-bar">
              <div style={{ width: "50%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Landing;
