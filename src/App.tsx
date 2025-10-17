import React from "react";
import "./App.css";
import Landing from "./components/landing";
import WebApps from "./components/webApps";
import PhoneApps from "./components/phoneApps";
function App() {
  return (
    <div className="">
      <div className="blob b1"></div>
      <div className="blob b2"></div>
      <Landing />
      <WebApps />
      <PhoneApps />
      <div className="mt-4 mb-4"></div>
    </div>
  );
}

export default App;
