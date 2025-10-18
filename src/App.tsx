import React from "react";
import "./App.css";
import Landing from "./components/landing";
import WebApps from "./components/webApps";
import PhoneApps from "./components/phoneApps";
import CliApps from "./components/cliApps";
import Journey from "./components/journey";

function App() {
  return (
    <div className="">
      <div className="blob b1"></div>
      <div className="blob b2"></div>
      <Landing />

      <Journey />

      <div className="m-48">
        <h3 className="main-title text-center">My Projects</h3>

        <WebApps />
        <PhoneApps />
        <CliApps />
      </div>
    </div>
  );
}

export default App;
