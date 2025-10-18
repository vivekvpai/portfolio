import "./phoneApps.css";
import { FaPhone } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { useState } from "react";
const PhoneIcon = FaPhone as React.FC;
const MessageIcon = FaMessage as React.FC;

const PhoneApps = () => {
  const techStackApp = [
    {
      img: "/images/tech/js.png",
      name: "JavaScript",
    },
    {
      img: "/images/tech/ts.png",
      name: "TypeScript",
    },
    {
      img: "/images/tech/react.png",
      name: "React Native",
    },
    {
      img: "/images/tech/expo.png",
      name: "Expo",
    },
    {
      img: "/images/tech/tailwind.png",
      name: "Tailwind",
    },
  ];

  const projectsApp = [
    {
      img: "/images/projects/shopprop-icon.png",
      name: "ShopProp",
      description:
        "A modular real estate app built with micro frontends and optimized search using Google addresses. Focused on dynamic components, seamless API handling, and responsive UX for smooth property browsing.",
      linkAppStore: "https://apps.apple.com/us/app/shopprop/id1569131794",
      linkPlayStore:
        "https://play.google.com/store/apps/details?id=com.shopprop.property.mobile&hl=en_IN",
      pointers: [
        "Property Search Optimization - Implemented an efficient search system allowing users to find properties using Google addresses, enhancing search accuracy and speed.",
        "Micro Frontend Architecture - Developed the app using micro frontends for modularity, lazy loading of components and routes for performance.",
        "Dynamic Components & API Handling - Integrated dynamic components and optimized API calls for seamless user experience.",
        "Automated Versioning & Deployment - Created a script to auto-increment app versions and manually deployed the site to AWS S3.",
        "User-Centric Design & Functionality - Focused on a responsive UI/UX for property browsing and interaction, making it user-friendly and intuitive.",
      ],
    },
    {
      img: "/images/projects/easyq-icon.png",
      name: "EasyQ",
      description:
        "A secure and efficient dashboard app with biometric login, notifications, and quick access to all modules like QP, QO, RNA. Built with React Native/Expo, it emphasizes security, productivity, and real-time monitoring.",
      linkAppStore: "",
      linkPlayStore: "",
      pointers: [
        "Biometric Authentication - Added secure login using fingerprint or face recognition for quick and safe access.",
        "Module Overview - Provided a unified view of all modules like QP, QO, RNA, etc., for easy navigation.",
        "Notifications - Integrated real-time notifications to keep users updated on important events and tasks.",
        "Security Best Practices - Implemented SSL, root detection, and other security measures to protect user data.",
        "Dashboard Quick Access - Designed a dashboard with quick access to key features and modules for better productivity.",
      ],
    },
  ];

  const [selectedProject, setSelectedProject] = useState<any>(projectsApp[0]);

  const date = new Date();
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const time = `${hours}:${minutes} ${date.getHours() >= 12 ? "PM" : "AM"}`;

  const mobileContainer = () => {
    return (
      <div className="phone-container">
        {/* Status Bar */}
        <div className="status-bar">
          <span>{time}</span>
          <div className="status-icons">
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* App Content */}
        <div className="app-content">
          <div className="section-title">My Apps</div>
          <div className="apps-grid">
            {/* Placeholder for app icons */}

            {projectsApp.map((project, index) => (
              <div
                key={index}
                className="app-icon"
                onClick={() => setSelectedProject(project)}
              >
                <div className="app-icon-placeholder">
                  <img
                    className="img-fluid p-2"
                    src={process.env.PUBLIC_URL + project.img}
                    alt={project.name}
                  />
                </div>
                <span className="app-label">{project.name}</span>
              </div>
            ))}

            {/* Add more app icons as needed */}
          </div>
        </div>

        {/* Dock */}
        <div className="dock">
          <div className="dock-apps">
            <div className="dock-icon">
              <div className="app-icon-placeholder">
                <PhoneIcon />
              </div>
            </div>
            <div className="dock-icon">
              <div className="app-icon-placeholder">
                <MessageIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container m-48">
      <div className="row">
        <div className="col-4">{mobileContainer()}</div>
        <div className="col-6">
          {selectedProject && (
            <div className="glass">
              <div className="d-flex">
                <img
                  className="app-image"
                  src={process.env.PUBLIC_URL + selectedProject.img}
                  alt={selectedProject.name}
                />
                <div className="ps-2">
                  <div className="section-title">{selectedProject.name}</div>

                  {selectedProject.description && (
                    <p>{selectedProject.description}</p>
                  )}
                </div>
              </div>

              <div className="app-content">
                <div className="d-flex gap-2">
                  <p>
                    <a href={selectedProject.linkAppStore}>
                      <img
                        className="store-logo"
                        src={process.env.PUBLIC_URL + "/images/app-store.svg"}
                        alt=""
                      />
                    </a>
                  </p>

                  <p>
                    <a href={selectedProject.linkPlayStore}>
                      <img
                        className="store-logo"
                        src={process.env.PUBLIC_URL + "/images/play-store.png"}
                        alt=""
                      />
                    </a>
                  </p>
                </div>
                <ul>
                  {selectedProject.pointers.map(
                    (pointer: any, index: number) => (
                      <li key={index}>{pointer}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="col-2">
          <div className="section-title">Tech Stack</div>
          <div className="glass">
            <div className="stack-category">Mobile Development</div>
            <div className="d-flex flex-wrap gap-2">
              {techStackApp.map((tech, index) => (
                <div key={index} className="chip my-2">
                  <img src={process.env.PUBLIC_URL + tech.img} alt={tech.name} />
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

export default PhoneApps;
