import { useState, useEffect } from "react";
import "./landing.css";

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
        <div className="col-lg-4 col-md-12 m-0">
          <div className="glass">
            <div className="avatar">
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "var(--card-radius)",
                  marginBottom: "24px",
                }}
                src={process.env.PUBLIC_URL + "/images/hoodiet.png"}
                alt="Profile"
              />
            </div>
            <div className="meta">
              <div className="my-2">
                <strong>Location:</strong> Bangalore, India
              </div>
              <div className="my-2">
                <strong>Email:</strong> paivivek002@gmail.com
              </div>
              <div className="my-2">
                <strong>LinkedIn:</strong>
                <a
                  href="https://www.linkedin.com/in/vivek-v-pai/"
                  rel="noreferrer"
                  target="_blank"
                  style={{ color: "var(--accent)", marginLeft: "8px" }}
                >
                  vivek-v-pai
                </a>
              </div>
              <div className="my-2">
                <strong>GitHub:</strong>
                <a
                  href="https://github.com/vivekvpai"
                  rel="noreferrer"
                  target="_blank"
                  style={{ color: "var(--accent)", marginLeft: "8px" }}
                >
                  vivekvpai
                </a>
              </div>
              <div className="my-2">
                <strong> Communication Languages:</strong>
              </div>
              <div className="my-2">English, Hindi, Kannada, Konkani </div>
            </div>
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
        <div className="col-lg-2 col-md-4 m-0">
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

          <div
            className="glass nav-item button-common"
            onClick={() => {
              const element = document.getElementById("journey");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Journey
          </div>
          <div
            className="glass nav-item button-common"
            onClick={() => {
              const element = document.getElementById("projects");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </div>
          <div
            className="glass nav-item button-common"
            onClick={() => {
              const element = document.getElementById("achievements");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Achievements
          </div>
          <div
            className="glass nav-item button-common"
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </div>
          <div
            className="glass nav-item button-common"
            onClick={() => {
              window.open(
                process.env.PUBLIC_URL + "/vivek_v_pai_resume_ind.pdf",
                "_blank"
              );
            }}
          >
            Download CV
          </div>
        </div>
      </div>
      <div className="row">
        <div className="section-title">Coding Languages</div>

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
