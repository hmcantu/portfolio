import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";

export default function Projects() {
  const [numberShown, setNumberShown] = useState(Math.min(projects.length, 3));

  function showMore() {
    setNumberShown((prevNumber) => Math.min(prevNumber + 3, projects.length));
  }

  const visibleProjects = projects.slice(0, numberShown);

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__title">Projects</h2>
        <ul className="projects__grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
        {projects.length > 3 && numberShown < projects.length && (
          <div className="projects__actions">
            <button
              className="button button--secondary"
              onClick={showMore}
              type="button"
            >
              Show more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
