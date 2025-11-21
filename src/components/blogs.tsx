import React from "react";
import "./blogs.css";

const Blogs = () => {
  const blogs = [
    {
      img: "/images/blogs/mcp-llm-super-app.png",
      name: "MCP and LLMs: The Next Super App",
      link: "https://medium.com/@paivivek002/mcp-llms-the-next-super-app-85a226804d77",
    },
    {
      img: "/images/blogs/generic-cache-mechanism.png",
      name: "Generic Cache Mechanism",
      link: "https://medium.com/@paivivek002/generic-cache-mechanism-for-desired-apis-and-intervals-6aec1379cb1a",
    },
    {
      img: "/images/blogs/microfrontend-perfect-for-saas.png",
      name: "Microfrontend Perfect for SaaS",
      link: "https://metricdust.com/reflect/microfrontend_perfect_for_saas",
    },
    {
      img: "/images/blogs/metric-talks-3rd-webinar.png",
      name: "MetricTalks 3rd Webinar",
      link: "https://metricdust.com/reflect/MetricTalks_3rd_Webinar",
    },
  ];

  return (
    <div className="container mt-48">
      <div className="section-title pt-48">
        <span className="comment-style">
          <span style={{ color: "var(--accent-2)" }}>// &nbsp;</span>
          My Technical Writings
        </span>
      </div>

      <div className="blogs">
        {blogs.map((blog, index) => (
          <a
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="dev-blog-card"
          >
            <div className="window-header">
              <div className="window-dots">
                <span className="dot close"></span>
                <span className="dot minimize"></span>
                <span className="dot maximize"></span>
              </div>
              <div className="window-title">post_{index + 1}.md</div>
            </div>
            <div className="window-content">
              <div className="img-container">
                <img
                  className="blog-image"
                  src={process.env.PUBLIC_URL + blog.img}
                  alt={blog.name}
                />
                <div className="overlay">
                  <span className="read-cmd">{">"} read</span>
                </div>
              </div>
              <div className="blog-info">
                <span className="const-keyword">const</span>{" "}
                <span className="var-name">title</span> ={" "}
                <span className="string-value">"{blog.name}"</span>;
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
