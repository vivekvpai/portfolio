import React, { useState } from "react";
import "./cliApps.css";

const CliApps = () => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  const techStack = [
    {
      img: "/images/tech/ts.png",
      name: "TypeScript",
    },
    {
      img: "/images/tech/js.png",
      name: "JavaScript",
    },
    {
      img: "/images/tech/python.png",
      name: "Python",
    },
    {
      img: "/images/tech/electron.png",
      name: "Electron JS",
    },
    {
      img: "/images/tech/npm.png",
      name: "NPM",
    },
    {
      img: "/images/tech/node.png",
      name: "Node JS",
    },
  ];

  const toggleStartMenu = () => {
    setStartMenuOpen(!startMenuOpen);
  };

  const openWindow = (windowId: string) => {
    setActiveWindow(windowId);
    setStartMenuOpen(false);
  };

  const closeWindow = (e: React.MouseEvent, windowId: string) => {
    e.stopPropagation();
    if (activeWindow === windowId) {
      setActiveWindow(null);
    }
  };

  const showDesktopScreen = () => {
    return (
      <div className="windows-desktop">
        {/* Desktop Icons */}
        <div className="desktop">
          <div className="desktop-icon" onClick={() => openWindow("projects")}>
            <div className="desktop-icon-img computer-icon"></div>
            <span>My Projects</span>
          </div>

          <div className="desktop-icon" onClick={() => openWindow("terminal")}>
            <div className="desktop-icon-img terminal-icon"></div>
            <span>Terminal</span>
          </div>

          <div
            className="desktop-icon"
            onClick={() => openWindow("openmateApp")}
          >
            <img
              className="desktop-icon-img"
              src={process.env.PUBLIC_URL + "/images/projects/om.png"}
              alt=""
            />
            <span>OpenMate</span>
          </div>

          <div className="desktop-icon" onClick={() => openWindow("mcp")}>
            <img
              className="desktop-icon-img rounded"
              src={process.env.PUBLIC_URL + "/images/projects/mcp.png"}
              alt=""
            />
            <span>MCP Servers</span>
          </div>
        </div>

        {/* Windows */}

        {activeWindow === "projects" && (
          <div
            className="window active"
            onClick={() => setActiveWindow("projects")}
          >
            <div className="title-bar">
              <div className="title-bar-text">My Projects</div>
              <div className="title-bar-controls">
                <button
                  aria-label="Minimize"
                  onClick={(e) => closeWindow(e, "projects")}
                ></button>
                <button aria-label="Maximize"></button>
                <button
                  aria-label="Close"
                  onClick={(e) => closeWindow(e, "projects")}
                ></button>
              </div>
            </div>
            <div className="window-body">
              <p>My Projects</p>
              <p>
                Click on Terminal Icon to open my project Named - OpenMate Cli{" "}
              </p>
              <p>or</p>
              <p>
                Click here to open OpenMate Cli{" "}
                <span
                  className="text-warning"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    setActiveWindow(null); // Close current window
                    setTimeout(() => openWindow("terminal"), 0); // Open terminal after state update
                  }}
                >
                  OpenMate Cli
                </span>{" "}
              </p>
              <p>
                Click on OpenMate Icon to open my project Named - OpenMate
                Desktop App
              </p>
              <p>or</p>
              <p>
                Click here to open OpenMate Desktop App{" "}
                <span
                  className="text-warning"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    setActiveWindow(null); // Close current window
                    setTimeout(() => openWindow("openmateApp"), 0); // Open terminal after state update
                  }}
                >
                  OpenMate Desktop App
                </span>{" "}
              </p>
              <p>Click on MCP Icon to open my MCP servers</p>
              <p>or</p>
              <p>
                Click here to open MCP{" "}
                <span
                  className="text-warning"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    setActiveWindow(null); // Close current window
                    setTimeout(() => openWindow("mcp"), 0); // Open terminal after state update
                  }}
                >
                  MCP Servers
                </span>{" "}
              </p>
            </div>
          </div>
        )}

        {activeWindow === "terminal" && (
          <div
            className="window active"
            onClick={() => setActiveWindow("terminal")}
          >
            <div className="title-bar">
              <div className="title-bar-text">Terminal</div>
              <div className="title-bar-controls">
                <button
                  aria-label="Minimize"
                  onClick={(e) => closeWindow(e, "terminal")}
                ></button>
                <button aria-label="Maximize"></button>
                <button
                  aria-label="Close"
                  onClick={(e) => closeWindow(e, "terminal")}
                ></button>
              </div>
            </div>
            <div className="window-body">
              <p>Windows Command Prompt [Version 10.0.19045.3570]</p>
              <p>(c) Microsoft Corporation. All rights reserved.</p>
              <p>
                C:\Users\User&gt; <span className="text-warning">npm</span>{" "}
                install -g openmate
              </p>
              <p>
                Install openmate cli from npm
                <a
                  className="ms-2"
                  href="https://www.npmjs.com/package/openmate"
                >
                  https://www.npmjs.com/package/openmate
                </a>
              </p>

              <p>C:\Users\User&gt; </p>
              <p>
                C:\Users\User&gt; <span className="text-warning">openmate</span>{" "}
                --info
              </p>
              <p>📦 Name: OpenMate CLI</p>
              <p>🧩 Version: v1.3.2</p>
              <p>🧠 Description:</p>
              <p>
                OpenMate CLI is a lightweight command-line tool that lets you
                instantly open your local repositories in your favorite IDEs
                like VS Code, IntelliJ, or Android Studio. No more digging
                through folders — just run one simple command, and your project
                launches right where you need it. It’s fast, developer-friendly,
                and built to simplify your workflow.
              </p>

              <p>C:\Users\User&gt; </p>
              <p>
                C:\Users\User&gt; <span className="text-warning">openmate</span>{" "}
                --highlights
              </p>
              <p>⚡ Highlights:</p>
              <p></p>
              <p>1. 🚀 Quick repo launch directly from terminal.</p>
              <p>2. 🧭 Smart project path detection for seamless access.</p>
              <p>
                3. 🧩 Supports multiple IDEs (VS Code, IntelliJ, Android
                Studio).
              </p>
              <p>
                4. ⚙️ Cross-platform support — works on Windows, macOS, and
                Linux.
              </p>
              <p>5. 💡 Simple setup, zero configuration needed.</p>
            </div>
          </div>
        )}

        {activeWindow === "openmateApp" && (
          <div
            className="window active"
            onClick={() => setActiveWindow("openmateApp")}
          >
            <div className="title-bar">
              <div className="title-bar-text">My Projects</div>
              <div className="title-bar-controls">
                <button
                  aria-label="Minimize"
                  onClick={(e) => closeWindow(e, "openmateApp")}
                ></button>
                <button aria-label="Maximize"></button>
                <button
                  aria-label="Close"
                  onClick={(e) => closeWindow(e, "openmateApp")}
                ></button>
              </div>
            </div>
            <div className="window-body">
              <div className="d-flex align-items-center ">
                <div>
                  <img
                    className=""
                    style={{ width: "100px", height: "100px" }}
                    src={process.env.PUBLIC_URL + "/images/projects/om.png"}
                    alt=""
                  />
                </div>
                <div className="">
                  <div>
                    <a
                      className="my-2"
                      href="https://github.com/vivekvpai/OpenMate"
                      target="_blank"
                    >
                      <h3> GitHub </h3>
                    </a>
                  </div>
                  <div>
                    <a
                      className="my-2"
                      href="https://github.com/vivekvpai/OpenMate/releases/tag/v1.4.0"
                      target="_blank"
                    >
                      <h3> Release </h3>
                    </a>
                  </div>
                </div>
              </div>

              <p>
                OpenMate is a sleek and efficient desktop application built with
                Electron that allows developers to instantly open repositories
                or projects directly in their preferred IDEs (like VS Code,
                IntelliJ, or Android Studio) with a single click. Designed for
                speed and convenience, it provides a clean, minimal UI for
                managing and launching local projects without manually
                navigating folders. OpenMate streamlines daily workflows,
                helping developers jump straight into coding — saving time and
                clicks every day.
              </p>

              <p>
                🚀 Instant Access - Quickly open repositories or folders
                directly in your IDE from the app.
              </p>
              <p>
                🧭 Smart Project Detection - Automatically detects and psts
                projects from selected directories.
              </p>
              <p>
                🧩 Multi-IDE Support - Works seamlessly with popular IDEs like
                VS Code, IntelliJ, and Android Studio.
              </p>
              <p>
                🎨 Minimal & Intuitive UI - Clean Electron-based interface
                focused purely on productivity.
              </p>
              <p>⚙️ Windows Ready - Runs smoothly on Windows Platform.</p>
            </div>
          </div>
        )}

        {activeWindow === "mcp" && (
          <div className="window active" onClick={() => setActiveWindow("mcp")}>
            <div className="title-bar">
              <div className="title-bar-text">MCP</div>
              <div className="title-bar-controls">
                <button
                  aria-label="Minimize"
                  onClick={(e) => closeWindow(e, "mcp")}
                ></button>
                <button aria-label="Maximize"></button>
                <button
                  aria-label="Close"
                  onClick={(e) => closeWindow(e, "mcp")}
                ></button>
              </div>
            </div>
            <div className="window-body">
              <p>MCP Servers</p>
              <p className="text-warning">OpenMate MCP</p>
              <p>
                A repository and IDE management tool that helps developers
                organize and quickly access their code projects across multiple
                IDEs.
              </p>
              <a href="https://www.npmjs.com/package/openmcp" target="_blank">
                NPM : OpenMate MCP
              </a>
              <br />
              <a
                href="https://github.com/vivekvpai/OpenMate-MCP"
                target="_blank"
              >
                GitHub : OpenMate MCP
              </a>
              <ul>
                <li>
                  Manage repositories and collections with simple commands for
                  adding, removing, and listing projects
                </li>
                <li>
                  Open projects instantly in your preferred IDE (VS Code,
                  Windsurf, Cursor, IntelliJ, PyCharm)
                </li>
                <li>
                  Create collections to group related repositories and open them
                  all at once in your chosen editor
                </li>
              </ul>
              <p className="text-warning">Property Search MCP</p>
              <p>
                A real estate search tool that finds property listings for sale
                across cities in the United States with customizable filters.
              </p>
              <a
                href="https://github.com/vivek-metricdust/property-search-mcp"
                target="_blank"
              >
                GitHub : Property Search MCP
              </a>
              <ul>
                <li>
                  Search properties by city and state with price range filters
                  (min/max)
                </li>
                <li>
                  Filter results by number of bedrooms and bathrooms to match
                  your requirements
                </li>
                <li>
                  Get comprehensive listing details to help you find the perfect
                  property
                </li>
              </ul>

              <p className="text-warning">Crypto Search MCP (CoinDCX)</p>
              <p>
                A cryptocurrency market data tool that provides real-time
                information about trading pairs and account balances from
                CoinDCX.
              </p>
              <a
                href="https://github.com/vivekvpai/coin-dcx-mcp"
                target="_blank"
              >
                GitHub : CoinDCX MCP
              </a>
              <ul>
                <li>
                  Check account balances and get market details for specific or
                  all cryptocurrency trading pairs
                </li>
                <li>
                  Search for cryptocurrencies by name or symbol to find relevant
                  trading pairs
                </li>
                <li>
                  View top cryptocurrencies ranked by maximum allowed trade
                  quantity
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Taskbar */}
        <div className="taskbar">
          <button className="start-button" onClick={toggleStartMenu}>
            <span>Start</span>
          </button>

          {startMenuOpen && (
            <div className="start-menu">
              <div className="start-menu-header">Start Menu</div>
              <div
                className="start-menu-item"
                onClick={() => openWindow("projects")}
              >
                <div className="start-menu-icon computer-icon"></div>
                <span>My Projects</span>
              </div>

              <div
                className="start-menu-item"
                onClick={() => openWindow("terminal")}
              >
                <div className="start-menu-icon terminal-icon"></div>
                <span>Terminal</span>
              </div>

              <div
                className="start-menu-item"
                onClick={() => openWindow("openmateApp")}
              >
                <img
                  className="start-menu-icon"
                  src={process.env.PUBLIC_URL + "/images/projects/om.png"}
                  alt=""
                />
                <span>OpenMate</span>
              </div>

              <div
                className="start-menu-item"
                onClick={() => openWindow("mcp")}
              >
                <img
                  className="start-menu-icon"
                  src={process.env.PUBLIC_URL + "/images/projects/mcp.png"}
                  alt=""
                />
                <span>MCP Servers</span>
              </div>
            </div>
          )}

          <div className="taskbar-icons">
            <div
              className={`taskbar-icon ${
                activeWindow === "projects" ? "active" : ""
              }`}
              onClick={() => openWindow("projects")}
            >
              <div className="taskbar-icon-img computer-icon"></div>
            </div>

            <div
              className={`taskbar-icon ${
                activeWindow === "terminal" ? "active" : ""
              }`}
              onClick={() => openWindow("terminal")}
            >
              <div className="taskbar-icon-img terminal-icon"></div>
            </div>

            <div
              className={`taskbar-icon ${
                activeWindow === "openmateApp" ? "active" : ""
              }`}
              onClick={() => openWindow("openmateApp")}
            >
              <img
                className="taskbar-icon-img"
                src={process.env.PUBLIC_URL + "/images/projects/om.png"}
                alt=""
              />
            </div>

            <div
              className={`taskbar-icon ${
                activeWindow === "mcp" ? "active" : ""
              }`}
              onClick={() => openWindow("mcp")}
            >
              <img
                className="taskbar-icon-img"
                src={process.env.PUBLIC_URL + "/images/projects/mcp.png"}
                alt=""
              />
            </div>
          </div>

          <div className="me-4">Click on any icon to open it</div>
        </div>
      </div>
    );
  };

  return (
    <div className="container m-48">
      <h3 className="section-title pt-48 pb-48">
        CLI / Electron Apps / MCP Servers
      </h3>
      <div className="row">
        <div className="col-lg-10 col-md-12">{showDesktopScreen()}</div>
        <div className="col-lg-2 col-md-12">
          <div className="section-title">Tech Stack</div>
          <div className="glass">
            <div className="d-flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
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

export default CliApps;
