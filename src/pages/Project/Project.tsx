import type { Navigate } from "../../types";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import "./Project.css";

export default function Project({ navigate, projectId }: { navigate: Navigate; projectId: number }) {
  if (projectId === 2) return <Project2 navigate={navigate} />;
  if (projectId === 3) return <Project3 navigate={navigate} />;
  return <Project1 navigate={navigate} />;
}
