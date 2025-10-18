import "./journey.css";
import { useState, useEffect } from "react";

const Journey = () => {
  return (
    <div className="container mt-48 ">
      <div className="pt-48"></div>
      <div className="row">
        <div className="col-lg-7" id="journey">
          <div className="section-title">Professional Journey</div>
          <div className="roadmap">
            <div className="roadmap-step">
              <h5>Innovator & Software Developer @ MetricDust</h5>
              <p className="roadmap-step-date">
                July 2022 - Present (
                <span id="fulltime-experience-duration"></span>)
              </p>
              <p className="roadmap-step-description">
                Leading the shopprop UI Team. Working on MCP servers.
                Contributed to ORCA open source project for STORDIS, developed
                ORCAsk AI chatbot, backend & Python library updates. Built
                MetricRealties SaaS for real estate agents, AWS Lambda API
                integration, Dashboard 2.0, and optimized AWS S3 storage costs.
              </p>
            </div>
            <div className="roadmap-step">
              <h5>Project Intern @ MetricDust</h5>
              <p className="roadmap-step-date">
                Oct 2021 - June 2022 (8 months)
              </p>
              <p className="roadmap-step-description">
                Designed console dashboard for agents/brokers to create and
                customize tenant websites with authentication and dynamic forms.
                Contributed to MetricRealties SAAS platform for realestate
                agents.
              </p>
            </div>
            <div className="roadmap-step">
              <h5>Intern @ Let's Grow More</h5>
              <p className="roadmap-step-date">Sep 2021 - Oct 2021 (1 month)</p>
              <p className="roadmap-step-description">
                Built two websites using HTML, CSS, JS, and React JS as part of
                project tasks, gaining hands-on frontend development experience.
              </p>
            </div>
            <div className="roadmap-step">
              <h5>Intern @ Sparks Foundation</h5>
              <p className="roadmap-step-date">Aug 2021 - Sep 2021 (1 month)</p>
              <p className="roadmap-step-description">
                Developed Barrique Hotel website with secure payment gateway
                integration, enhancing transactions and learning client-focused
                delivery.
              </p>
            </div>
            <div className="roadmap-step">
              <h5>Machine Learning Intern @ Prinston Smart Engineers</h5>
              <p className="roadmap-step-date">
                Mar 2021 - Apr 2021 (2 months)
              </p>
              <p className="roadmap-step-description">
                Worked on advanced algorithms for data analysis and predictive
                modeling, from preprocessing to model evaluation, applying ML to
                real-world problems.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-5" id="education">
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
