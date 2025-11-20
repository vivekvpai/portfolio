import "./journey.css";
import { useState, useEffect } from "react";

const Journey = () => {
  const startDate = new Date("2022-07-01");
  const endDate = new Date();
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffYears = Math.floor(diffDays / 365);
  const diffMonths = Math.floor((diffDays % 365) / 30);
  const experianceTime = `${diffYears} years ${diffMonths} months`;

  return (
    <div className="container mt-48 ">
      <div className="row">
        <div className="col-lg-7 pt-48" id="journey">
          <div className="section-title">Professional Journey</div>
          <div className="git-log-container">
            <div className="git-branch-line"></div>
            {[
              {
                role: "Software Developer",
                company: "MetricDust",
                date: "July 2022 - Present",
                duration: experianceTime,
                description:
                  "Currently leading the ShopProp team and working on MCP servers. Built the ShopProp app for both Android and iOS, developed and maintain the user and agent dashboards, and optimized AWS S3 storage costs. Also contributed to the ORCA open-source project for STORDIS.",
                techStack: [
                  "MCP",
                  "Python",
                  "React",
                  "React Native",
                  "Expo",
                  "Angular",
                  "AWS",
                ],
                hash: "j22pre",
              },
              {
                role: "Project Intern",
                company: "MetricDust",
                date: "Oct 2021 - June 2022",
                duration: "8 months",
                description:
                  "Designed console dashboard for agents/brokers to create and customize tenant websites with authentication and dynamic forms. Contributed to MetricRealties SAAS platform for realestate agents.",
                techStack: ["Angular", "Authentication", "Dynamic Forms"],
                hash: "o21j22",
              },
              {
                role: "Intern",
                company: "Let's Grow More",
                date: "Sep 2021 - Oct 2021",
                duration: "1 month",
                description:
                  "Built two websites using HTML, CSS, JS, and React JS as part of project tasks, gaining hands-on frontend development experience.",
                techStack: ["HTML", "CSS", "JavaScript", "React JS"],
                hash: "s21o21",
              },
              {
                role: "Intern",
                company: "Sparks Foundation",
                date: "Aug 2021 - Sep 2021",
                duration: "1 month",
                description:
                  "Developed Barrique Hotel website with secure payment gateway integration, enhancing transactions and learning client-focused delivery.",
                techStack: ["Web Dev", "Payment Gateway"],
                hash: "a21s21",
              },
              {
                role: "Machine Learning Intern",
                company: "Prinston Smart Engineers",
                date: "Mar 2021 - Apr 2021",
                duration: "2 months",
                description:
                  "Worked on advanced algorithms for data analysis and predictive modeling, from preprocessing to model evaluation, applying ML to real-world problems.",
                techStack: ["Machine Learning", "Python", "Data Analysis"],
                hash: "m21a21",
              },
            ].map((item, index) => (
              <div className="git-commit-item" key={index}>
                <div className="commit-hash">{item.hash}</div>
                <div className="commit-dot"></div>
                <div className="commit-card glass-card">
                  <div className="commit-header">
                    <h5 className="commit-title">
                      {item.role} <span className="at-symbol">@</span>{" "}
                      {item.company}
                    </h5>
                    <span className="commit-date">
                      {item.date} ({item.duration})
                    </span>
                  </div>
                  <p className="commit-description">{item.description}</p>
                  <div className="commit-tech-stack">
                    {item.techStack.map((tech, i) => (
                      <span className="tech-tag" key={i}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-5 pt-48" id="education">
          <div className="section-title">Education</div>
          <div className="education-grid">
            <div className="edu-card">
              <h5>MSc, Computer Science</h5>
              <p>Liverpool John Moores University & UpGrad</p>
              <p className="d-flex justify-content-between">
                Percentage: 65%
                <span className="edu-duration">Sep 2023 - Mar 2025</span>
              </p>
            </div>
            <div className="edu-card">
              <h5>PG Diploma, Software Development</h5>
              <p>IIIT Bangalore & UpGrad</p>
              <p className="d-flex justify-content-between">
                Percentage: 7.5 CGPA
                <span className="edu-duration">Sep 2022 - Mar 2023</span>
              </p>
            </div>
            <div className="edu-card">
              <h5>B.E., Information Science</h5>
              <p>Don Bosco Institute of Technology</p>
              <p className="d-flex justify-content-between">
                Percentage: 8.1 CGPA
                <span className="edu-duration">Aug 2018 - Jun 2022</span>
              </p>
            </div>
            <div className="edu-card">
              <h5>Pre-University Course (PUC)</h5>
              <p>Cambridge PU College</p>
              <p className="d-flex justify-content-between">
                Percentage: 86% PCMCs
                <span className="edu-duration">Apr 2016 - Mar 2018</span>
              </p>
            </div>
            <div className="edu-card">
              <h5>SSLC (10th Standard)</h5>
              <p>St Michels English School</p>
              <p className="d-flex justify-content-between">
                Percentage: 90%
                <span className="edu-duration">Apr 2015 - Mar 2016</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
