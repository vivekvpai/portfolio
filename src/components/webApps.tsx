import "./webApps.css";
import { FaGlobe } from "react-icons/fa";
import { FaArrowLeft, FaTag } from "react-icons/fa6";
import React, { useEffect, useState } from "react";

// Cast the icon to a React Functional Component type
const GlobeIcon = FaGlobe as React.FC;
const ArrowLeftIcon = FaArrowLeft as React.FC;
const TagIcon = FaTag as React.FC;

const WebApps = () => {
  // Add your project logos and links here
  const pinnedSites = [
    {
      name: "ShopProp",
      logo: "/images/projects/shopprop.png",
      url: "https://www.shopprop.com",
      description:
        "ShopProp is a real estate e-commerce platform that allows users to buy and sell properties online.",
      pointers: [
        "Developed and optimized the Property Search Page (V2) — enhanced search functionality with Google address integration, reducing property API load times by 40% and improving map rendering by 71%.",
        "Implemented a micro frontend architecture — modularized the platform for independent feature deployments, enabling faster builds and easier scalability across teams.",
        "Enhanced UI/UX performance — introduced lazy loading for images and routes, ensuring faster page rendering and improved overall user experience.",
      ],
    },
    {
      name: "Metric Realties",
      logo: "/images/projects/MR_Logo_new.png",
      url: "https://www.metricrealties.com",
      description:
        "Metric Realties is a real estate e-commerce platform that allows users to buy and sell properties online.",
      pointers: [
        "Designed and developed the overall architecture and UI/UX of the Web Builder to empower users to create customized websites effortlessly.",
        "Implemented core drag-and-drop functionality, allowing users to craft layouts by arranging essential elements (e.g., 'About Us,' 'Teams') onto the canvas.",
        "Engineered features for real-time preview and seamless on-the-go editing, enabling users to update text, upload images, and customize button links with a click.",
        // "Provided extensive customization options, including a selection of three professional templates and the flexibility to change colors, upload logos, and input basic business details[cite: 110, 111, 112, 113, 118].",
        // "Utilized a modern tech stack including Angular, TypeScript, and AWS to implement the supporting templates and customization functionalities, culminating in easy, one-click site publishing[cite: 105, 119].",
      ],
    },
    // {
    //   name: "Interview",
    //   logo: "/images/projects/iw.png",
    //   url: "https://www.interview.io",
    //   description:
    //     "Interview.io is a video interview platform that allows users to conduct virtual interviews with candidates.",
    //   pointers: [
    //     "Developed and optimized the Property Search Page (V2) — enhanced search functionality with Google address integration, reducing property API load times by 40% and improving map rendering by 71%.",
    //     "Implemented a micro frontend architecture — modularized the platform for independent feature deployments, enabling faster builds and easier scalability across teams.",
    //     "Enhanced UI/UX performance — introduced lazy loading for images and routes, ensuring faster page rendering and improved overall user experience.",
    //   ],
    // },
    {
      name: "Shoot Shoot Studios",
      logo: "/images/projects/sss.png",
      url: "https://www.shootshootstudios.com",
      description:
        "Shoot Shoot Studios is a video interview platform that allows users to conduct virtual interviews with candidates.",
      pointers: [
        "Developed a professional website for a film studio, integrating sections for Home, About, Team, Work (Portfolio), and Contact to clearly present the studio’s mission and services.",
        "Designed and implemented the 'Our Work' section to effectively showcase the studio's films and video content, ensuring a focused and engaging user experience.",
        "Integrated detailed profiles for the creative team/artists, highlighting individual roles (e.g., Writer, Director, Actor, Editor) and professional background.",
        // "Ensured clear and accessible contact information, including email and address, and integrated social media follow links to foster community and collaboration with other talents.",
        // "Focused on a clean, visual design to reflect the studio's passion for cinema, providing information about their goal to collaborate and bring in original, interesting content.",
      ],
    },
    {
      name: "EasyQ Solutions",
      logo: "/images/projects/eq.png",
      url: "https://www.easyqsolutions.com",
      description:
        "EasyQ Solutions and Technologies Private Limited is dedicated to simplifying compliance with quality management systems (QMS) for the medical device industry.",
      pointers: [
        "Led the development of the EasyQ Dashboard using React and TypeScript, enabling seamless queue and appointment management for clients and staff.",
        "Integrated secure authentication and user management using JWT tokens, ensuring reliable access control and session handling.",
        "Enhanced platform security by implementing SSL enforcement and root detection measures for mobile app integration.",
        // "Optimized API communication and data fetching with custom hooks and state management, improving response times and overall performance.",
        // "Collaborated with the mobile team to align dashboard analytics and app data, ensuring consistency and smooth user experience across platforms.",
      ],
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
      img: "/images/tech/ts.png",
      name: "TypeScript",
    },

    {
      img: "/images/tech/js.png",
      name: "JavaScript",
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
    {
      img: "/images/tech/angular.png",
      name: "Angular",
    },
    {
      img: "/images/tech/react.png",
      name: "React",
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

  const [selectedWebApp, setSelectedWebApp] = useState<any>("");

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
                    <span className="cursor-search">|</span>
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
                        <img
                          src={process.env.PUBLIC_URL + site.logo}
                          alt={site.name}
                        />
                      </div>
                      <div className="site-name">{site.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="chrome-content">
              <div className="chrome-search">
                <div className="search-bar">
                  <div
                    className="search-icon"
                    onClick={() => setSelectedWebApp("")}
                  >
                    <ArrowLeftIcon />
                  </div>
                  <div
                    className="search-input text-start "
                    style={{ fontSize: "16px" }}
                  >
                    {selectedWebApp.name}
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

                <div className="search-results">
                  <div className="result-item">
                    <div className="result-header">
                      <div className="favicon">
                        <img
                          src={process.env.PUBLIC_URL + selectedWebApp.logo}
                          alt={selectedWebApp.name}
                        />
                      </div>
                      <div className="result-url">
                        <a
                          href={selectedWebApp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="url-text"
                        >
                          {new URL(selectedWebApp.url).hostname}
                        </a>
                        <span className="url-arrow">▼</span>
                      </div>
                      <h3 className="result-title">
                        <a
                          href={selectedWebApp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {selectedWebApp.name}
                          <span className="action-icon ms-2">↗</span>
                        </a>
                      </h3>
                    </div>
                    <div className="result-snippet">
                      <div className="snippet-text">
                        {selectedWebApp.description}
                      </div>
                    </div>

                    <div className="result-snippet mt-4">
                      {selectedWebApp.pointers.map(
                        (points: any, index: number) => (
                          <div key={index} className="snippet-text">
                            {points}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="container m-48">
      <h3 className="section-title pt-48 pb-48">
        <span className="main-title">
          <TagIcon /> Tag Projects :
        </span>{" "}
        Web Development
      </h3>

      <div className="row">
        <div className="col-lg-9 col-md-12 pt-4">{chromeContainer()}</div>
        <div className="col-lg-3 col-md-12 pt-4">
          <div className="section-title"> Tech Stack</div>
          <div className="glass">
            <div className="">Frontend Tech Stack</div>

            <div className="d-flex flex-wrap gap-2">
              {techStackFrontEnd.map((tech, index) => (
                <div key={index} className="chip my-2">
                  <img
                    src={process.env.PUBLIC_URL + tech.img}
                    alt={tech.name}
                  />
                  {tech.name}
                </div>
              ))}
            </div>

            <div className="mt-2">Backend Tech Stack</div>
            <div className="d-flex flex-wrap gap-2">
              {techStackBackEnd.map((tech, index) => (
                <div key={index} className="chip my-2">
                  <img
                    src={process.env.PUBLIC_URL + tech.img}
                    alt={tech.name}
                  />
                  {tech.name}
                </div>
              ))}
            </div>

            <div className="mt-2">Testing Tech Stack</div>
            <div className="d-flex flex-wrap gap-2">
              {techStackTesting.map((tech, index) => (
                <div key={index} className="chip my-2">
                  <img
                    src={process.env.PUBLIC_URL + tech.img}
                    alt={tech.name}
                  />
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
