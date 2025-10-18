import React from "react";
import "./achievements.css";

const Achievements = () => {
  return (
    <div className="container mt-48">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="section-title">Achievements and Recognition</h2>
          <div className="achievement-cards">
            <div className="achievement-card">
              <strong>Guest Lecturer</strong> — Don Bosco Institute of
              Technology (DBIT)
              <br />
              Delivered a session on Angular, covering core concepts, real-world
              project integration, and best practices for scalable frontend
              development.
            </div>
            <div className="achievement-card">
              <strong>Research Publication</strong> — Liverpool John Moores
              University & UpGrad
              <br />
              Research On :
              <em>
                “Exploring Micro-Frontend Architecture for Scalable Web
                Applications”
              </em>
              . <br />
              The study delved into modular web design principles, architectural
              advantages, and real-world performance gains, backed by
              implementation case studies.
            </div>
            <div className="achievement-card">
              <strong>Silver Medalist & Young Achiever</strong> — DBIT - VTU
              <br />
              Honored with Silver medal for excellent performances in academics.
              Honored as Young Achiever for recognizable achievements at a young
              age.
            </div>
            <div className="achievement-card">
              <strong>Team Leader</strong> — DBISEL Web Development Team
              <br />
              Handled team operations. Gave talks on Git & GitHub, Mini projects
              using PHP, and hosting websites on domains.
            </div>
            <div className="achievement-card">
              <strong>District Level Winner - 3#</strong> — Ramanagara Jila
              Panchayat (Bharath)
              <br />
              Won 3rd Place in Hindi Speech Competition at District level
              <br />
              1st Place at Taluk & Hobli levels.
            </div>
            <div className="achievement-card">
              <strong>Taluk Level Winner - 2#</strong> — Department of
              Undergraduate Education (Bharath)
              <br />
              Won 2nd Place in Volleyball at Taluk level
              <br />
              1st Place at Hobli level.
            </div>
            {/* <div className="achievement-card">
            <strong>National Level Workshop</strong> — National Youth Council of
            India<br />Participated in React JS workshop co-organized with Brain
            O Vision Solutions Pvt. Ltd. The workshop was online and hands-on
            with ReactJS technology.
          </div>  */}
          </div>
        </div>
        <div className="col-lg-6"></div>
      </div>
    </div>
  );
};

export default Achievements;
