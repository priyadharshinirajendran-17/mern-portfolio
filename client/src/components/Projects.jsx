import React, { useEffect, useState } from "react";
import { fetchProjects } from "../api/projects.js";
import { FALLBACK_PROJECTS } from "../utils/constants.js";
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);

  useEffect(() => {
    let isMounted = true;

    fetchProjects()
      .then((data) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setProjects(data);
        }
      })
      .catch(() => {
        // Keep fallback data — the API may not be running locally yet.
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="projects" className="section">
      <p className="eyebrow">04. Things I've built</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Projects</h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project._id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
