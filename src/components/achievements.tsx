import React from "react";
import "./achievements.css";

const Achievements = () => {
  const techStackAI = [
    {
      img: "/images/tech/ollama.png",
      name: "Ollama",
    },
    {
      img: "/images/tech/openai.png",
      name: "OpenAI",
    },
    {
      img: "/images/tech/claude.png",
      name: "Claude",
    },
    {
      img: "/images/tech/gemini.png",
      name: "Gemini",
    },
  ];

  const techStackCloud = [
    {
      img: "/images/tech/aws.png",
      name: "AWS",
    },
    {
      img: "/images/tech/gh.png",
      name: "GitHub",
    },
    {
      img: "/images/tech/gitlab.png",
      name: "GitLab",
    },
  ];

  const devTools = [
    {
      img: "/images/tech/ubuntu.png",
      name: "Ubuntu",
    },
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
      img: "/images/tech/mcp.png",
      name: "MCP",
    },
    {
      img: "/images/tech/git.png",
      name: "Git",
    },
    {
      img: "/images/tech/figma.png",
      name: "Figma",
    },
    {
      img: "/images/tech/loveable.ico",
      name: "Loveable",
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
      img: "/images/projects/ppa.jpg",
      name: "+PPA",
      link: "https://vivekvpai.github.io/swatkitchen.github.io/",
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
        <div className="col-lg-8">
          <h2 className="section-title pt-48">
            <span style={{ color: "var(--accent-2)" }}>// &nbsp;</span>
            Achievements and Recognition
          </h2>
          <div className="achievement-cards">
            {[
              {
                title: "Guest Lecturer",
                org: "Don Bosco Institute of Technology (DBIT)",
                content: (
                  <>
                    Delivered a session on Angular, covering core concepts,
                    real-world project integration, and best practices for
                    scalable frontend development.
                  </>
                ),
                tag: "Education",
              },
              {
                title: "Research Publication",
                org: "Liverpool John Moores University & UpGrad",
                content: (
                  <>
                    Research On :{" "}
                    <em>
                      “Exploring Micro-Frontend Architecture for Scalable Web
                      Applications”
                    </em>
                    . <br />
                    The study delved into modular web design principles,
                    architectural advantages, and real-world performance gains,
                    backed by implementation case studies.
                  </>
                ),
                tag: "Research",
              },
              {
                title: "Silver Medalist & Young Achiever",
                org: "DBIT - VTU",
                content: (
                  <>
                    Honored with Silver medal for excellent performances in
                    academics. Honored as Young Achiever for recognizable
                    achievements at a young age.
                  </>
                ),
                tag: "Award",
              },
              {
                title: "Team Leader",
                org: "DBISEL Web Development Team",
                content: (
                  <>
                    Handled team operations. Gave talks on Git & GitHub, Mini
                    projects using PHP, and hosting websites on domains.
                  </>
                ),
                tag: "Leadership",
              },
              {
                title: "District Level Winner - 3#",
                org: "Ramanagara Jila Panchayat (Bharath)",
                content: (
                  <>
                    Won 3rd Place in Hindi Speech Competition at District level
                    <br />
                    1st Place at Taluk & Hobli levels.
                  </>
                ),
                tag: "Competition",
              },
              {
                title: "Taluk Level Winner - 2#",
                org: "Department of Undergraduate Education (Bharath)",
                content: (
                  <>
                    Won 2nd Place in Volleyball at Taluk level
                    <br />
                    1st Place at Hobli level.
                  </>
                ),
                tag: "Sports",
              },
            ].map((item, index) => (
              <div className="achievement-card" key={index}>
                <div className="window-header">
                  <div className="window-dots">
                    <div className="dot close"></div>
                    <div className="dot minimize"></div>
                    <div className="dot maximize"></div>
                  </div>
                  <div className="window-title">
                    {item.tag.toLowerCase()}.json
                  </div>
                </div>
                <div className="achievement-content">
                  <div className="code-line">
                    <span className="keyword">const</span>{" "}
                    <span className="variable">achievement</span> = {"{"}
                  </div>
                  <div className="code-line indent">
                    <span className="property">role:</span>{" "}
                    <span className="string">"{item.title}"</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="property">at:</span>{" "}
                    <span className="string">"{item.org}"</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="property">desc:</span>{" "}
                    <span className="comment">// {item.content}</span>
                  </div>
                  <div className="code-line">{"}"};</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="section-title pt-48">
            <span style={{ color: "var(--accent-2)" }}>// &nbsp;</span>
            Other Projects
          </div>

          <div className="more-projects">
            {otherProjects.map((project, index) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="glass my-4 d-flex align-items-center justify-content-center"
              >
                <img
                  className="project-logo"
                  src={process.env.PUBLIC_URL + project.img}
                  alt={project.name}
                />
              </a>
            ))}
          </div>

          <div className="section-title mt-4">
            <span style={{ color: "var(--accent-2)" }}>// &nbsp;</span>
            Other Technical Skills
          </div>
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
