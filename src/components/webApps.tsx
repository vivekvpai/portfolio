import "./webApps.css";
import { FaGlobe } from "react-icons/fa";
import React, { useEffect, useState } from "react";

// Cast the icon to a React Functional Component type
const GlobeIcon = FaGlobe as React.FC;

const WebApps = () => {
  // Add your project logos and links here
  const pinnedSites = [
    {
      name: "ShopProp",
      logo: "/images/projects/shopprop.png",
      url: "https://www.shopprop.com",
    },
    // {

    //   name: "Metric Realties",
    //   logo: "/images/projects/MR_Logo_new.png",
    //   url: "https://www.metricrealties.com",
    // },
    {
      name: "Interview",
      logo: "/images/projects/iw.png",
      url: "https://www.interview.io",
    },
    {
      name: "Shoot Shoot Studios",
      logo: "/images/projects/sss.png",
      url: "https://www.shootshootstudios.com",
    },
    {
      name: "EasyQ Solutions",
      logo: "/images/projects/eq.png",
      url: "https://www.easyqsolutions.com",
    },
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = [
    "Here are my web apps",
    "Clicked on the logo to open",
    "feel free to explore",
    "But hire me for your next project",
  ];

  const techStackFrontEnd = [
    {
      img: "/images/tech/react.png",
      name: "React",
    },
    {
      img: "/images/tech/angular.png",
      name: "Angular",
    },
    {
      img: "/images/tech/html.png",
      name: "HTML",
    },
    {
      img: "/images/tech/css.png",
      name: "CSS",
    },
    {
      img: "/images/tech/bootstrap.png",
      name: "Bootstrap",
    },
    {
      img: "/images/tech/tailwind.png",
      name: "Tailwind",
    },
  ];

  const techStackBackEnd = [
    {
      img: "/images/tech/php.png",
      name: "PHP",
    },
    {
      img: "/images/tech/django.png",
      name: "Django",
    },

    {
      img: "/images/tech/mysql.png",
      name: "mysql",
    },
  ];

  const techStackTesting = [
    {
      img: "/images/tech/jest.png",
      name: "Jest",
    },

    {
      img: "/images/tech/selenium.png",
      name: "Selenium",
    },
    {
      img: "/images/tech/pytest.png",
      name: "Pytest",
    },
  ];

  const [selectedWebApp, setSelectedWebApp]: any = useState("");

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

  const chromeContainer = () => {
    return (
      <div className="chrome-container">
        <div className="chrome-window">
          <div className="chrome-header">
            <div className="chrome-controls">
              <span className="control close"></span>
              <span className="control minimize"></span>
              <span className="control maximize"></span>
            </div>
            <div className="chrome-tabs">
              <div className="chrome-tab active">New Tab</div>
            </div>
          </div>

          {selectedWebApp === "" ? (
            <div className="chrome-content">
              <div className="chrome-logo">
                <GlobeIcon />
              </div>

              <div className="chrome-search">
                <div className="search-bar">
                  <div className="search-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="#9AA0A6"
                    >
                      <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                  </div>
                  <div
                    className="search-input text-start "
                    style={{ fontSize: "16px" }}
                  >
                    {currentText}
                    <span className="cursor">|</span>
                  </div>
                  <div className="mic-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="#4285F4"
                    >
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="pinned-sites">
                {/* <h3>Pinned</h3> */}
                <div className="sites-grid">
                  {pinnedSites.map((site, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedWebApp(site)}
                      className="site-item"
                    >
                      <div className="site-logo">
                        <img src={site.logo} alt={site.name} />
                      </div>
                      <div className="site-name">{site.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="chrome-content">
              
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">{chromeContainer()}</div>
        <div className="col-4">
          <div className="glass">
            <div className="">Frontend Tech Stack</div>

            <div className="d-flex flex-wrap gap-2">
              {techStackFrontEnd.map((tech, index) => (
                <div key={index} className="chip my-2">
                  <img src={tech.img} alt={tech.name} />
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
          <div className="glass mt-2">
            <div className="">Backend Tech Stack</div>
            <div className="d-flex flex-wrap gap-2">
              {techStackBackEnd.map((tech, index) => (
                <div key={index} className="chip my-2">
                  <img src={tech.img} alt={tech.name} />
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
          <div className="glass mt-2">
            <div className="">Testing Tech Stack</div>
            <div className="d-flex flex-wrap gap-2">
              {techStackTesting.map((tech, index) => (
                <div key={index} className="chip my-2">
                  <img src={tech.img} alt={tech.name} />
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebApps;
