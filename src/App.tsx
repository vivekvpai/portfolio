import React from "react";
import "./App.css";
import Landing from "./components/landing";
import WebApps from "./components/webApps";
import PhoneApps from "./components/phoneApps";
import CliApps from "./components/cliApps";
import Journey from "./components/journey";
import Achievements from "./components/achievements";

function App() {
  return (
    <div className="">
      <div className="blob b1"></div>
      <div className="blob b2"></div>
      <div id="home">
        <Landing />
      </div>

      <div id="journey">
        <Journey />
      </div>
      <div id="projects">
        <WebApps />
        <PhoneApps />
        <CliApps />
      </div>
      <div id="achievements">
        <Achievements />
      </div>

      <footer className="container mb-48" id="footer">
        © <span id="year"></span> Vivek V Pai — Built with ❤️ and a bit of CSS
        magic.
        <div className="contact-form" id="contact">
          <a
            className="contact-link"
            rel="noreferrer"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=paivivek002@gmail.com&su=Portfolio Contact&body=Hi Vivek,"
            target="_blank"
          >
            <img
              className="contact-icons"
              src={process.env.PUBLIC_URL + "/images/gm.png"}
              alt=""
            />
            paivivek002@gmail.com
          </a>

          <a
            className="contact-link"
            rel="noreferrer"
            href="https://www.linkedin.com/in/vivek-v-pai/"
            target="_blank"
          >
            <img
              className="contact-icons"
              src={process.env.PUBLIC_URL + "/images/in.png"}
              alt=""
            />
            @vivekvpai
          </a>
          <a
            className="contact-link"
            rel="noreferrer"
            href="https://github.com/vivekvpai"
            target="_blank"
          >
            <img
              className="contact-icons"
              src={process.env.PUBLIC_URL + "/images/gh.png"}
              alt=""
            />
            @vivekvpai
          </a>
          <a
            className="contact-link"
            rel="noreferrer"
            href="https://www.instagram.com/i.m_pai_vivek/"
            target="_blank"
          >
            <img
              className="contact-icons"
              src={process.env.PUBLIC_URL + "/images/ig.png"}
              alt=""
            />
            @i.m_pai_vivek
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
