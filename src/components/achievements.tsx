import React from "react";
import "./achievements.css";

const Achievements = () => {
  const techStackAI = [
    {
      img: "/images/tech/claude.png",
      name: "Claude",
    },
    {
      img: "/images/tech/openai.png",
      name: "OpenAI",
    },
    {
      img: "/images/tech/ollama.png",
      name: "Ollama",
    },
    {
      img: "/images/tech/gemini.png",
      name: "Gemini",
    },
  ];

  const techStackCloud = [
    {
      img: "/images/tech/gh.png",
      name: "GitHub",
    },
    {
      img: "/images/tech/aws.png",
      name: "AWS",
    },
    {
      img: "/images/tech/gitlab.png",
      name: "GitLab",
    },
  ];

  const devTools = [
    {
      img: "/images/tech/docker.png",
      name: "Docker",
    },
    {
      img: "/images/tech/postman.png",
      name: "Postman",
    },
    {
      img: "/images/tech/swagger.png",
      name: "Swagger",
    },
    {
      img: "/images/tech/git.png",
      name: "Git",
    },
    {
      img: "/images/tech/loveable.ico",
      name: "Loveable",
    },
    {
      img: "/images/tech/figma.png",
      name: "Figma",
    },
    {
      img: "/images/tech/mcp.png",
      name: "MCP",
    },
    {
      img: "/images/tech/ws.png",
      name: "Windsurf",
    },
    {
      img: "/images/tech/vs.png",
      name: "VSCode",
    },
    {
      img: "/images/tech/intellij.png",
      name: "Intellij",
    },
  ];

  const otherProjects = [
    {
      img: "/images/projects/iw.png",
      name: "Intview",
      link: "https://intview.io/home",
    },
    {
      img: "/images/projects/intracrew.png",
      name: "Intracrew",
      link: "https://www.intracrew.com/",
    },
    {
      img: "/images/projects/orca.png",
      name: "Orca",
      link: "https://github.com/STORDIS/",
    },
    {
      img: "/images/projects/sk.jpeg",
      name: "SwatKithen",
      link: "https://vivekvpai.github.io/swatkitchen.github.io/",
    },
  ];

  return (
    <div className="container mt-48">
      <div className="row">
        <div className="col-lg-7">
          <h2 className="section-title pt-48">Achievements and Recognition</h2>
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
        <div className="col-lg-5">
          <div className="section-title pt-48">Other Projects</div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            {otherProjects.map((project, index) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="glass my-2"
              >
                <img
                  className="project-logo"
                  src={process.env.PUBLIC_URL + project.img}
                  alt={project.name}
                />
                {/* <div className="ms-2">{project.name}</div> */}
              </a>
            ))}
          </div>

          <div className="section-title mt-4">Other Technical Skills</div>
          <div className="glass">
            <div className="my-2">AI Technologies</div>
            <div className="d-flex flex-wrap gap-2">
              {techStackAI.map((tech, index) => (
                <div key={index} className="chip my-2">
                  <img
                    src={process.env.PUBLIC_URL + tech.img}
                    alt={tech.name}
                  />
                  {tech.name}
                </div>
              ))}
            </div>
            <div className="my-2">Cloud Technologies</div>
            <div className="d-flex flex-wrap gap-2">
              {techStackCloud.map((tech, index) => (
                <div key={index} className="chip my-2">
                  <img
                    src={process.env.PUBLIC_URL + tech.img}
                    alt={tech.name}
                  />
                  {tech.name}
                </div>
              ))}
            </div>
            <div className="my-2">Dev Tools and IDEs</div>
            <div className="d-flex flex-wrap gap-2">
              {devTools.map((tech, index) => (
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

export default Achievements;
