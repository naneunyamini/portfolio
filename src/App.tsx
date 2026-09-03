import { useEffect, useState } from "react";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import type { Screen } from "./types";
import "./App.css";

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [projectId, setProjectId] = useState(1);

  useEffect(() => {
    const syncPath = () => {
      const projectMatch = window.location.pathname.match(
        /^\/project\/(1|2|3)\/?$/,
      );
      if (projectMatch) {
        setScreen("project");
        setProjectId(Number(projectMatch[1]));
      } else if (window.location.pathname === "/about") {
        setScreen("about");
      } else {
        setScreen("home");
      }
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    syncPath();
    window.addEventListener("popstate", syncPath);
    return () => window.removeEventListener("popstate", syncPath);
  }, []);

  const navigate = (next: Screen, nextProjectId = 1) => {
    const path =
      next === "home"
        ? "/"
        : next === "project"
          ? `/project/${nextProjectId}`
          : "/about";
    window.history.pushState({}, "", path);
    setScreen(next);
    if (next === "project") setProjectId(nextProjectId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`site screen-${screen}`}>
      <header className="site-header">
        <button
          className="wordmark"
          onClick={() => navigate("home")}
          aria-label="홈으로 이동"
        >
          jimin.
        </button>
        <a className="email-pill" href="https://github.com/naneunyamini">
          hello@jimin.dev
        </a>
      </header>
      {screen === "home" && <Home navigate={navigate} />}
      {screen === "about" && <About navigate={navigate} />}
      {screen === "project" && (
        <Project navigate={navigate} projectId={projectId} />
      )}
      <footer className="site-footer">
        <span>© 2026 Jimin</span>
        <span>Frontend Developer · Seoul</span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top ↑
        </button>
      </footer>
    </div>
  );
}
