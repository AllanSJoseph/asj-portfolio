import React from "react";
import ProjectCard from "./ProjectCard"
import projectData from "../data/projects.json"

const ProjectList = ({limit}) => {
    const projectsToShow = limit ? projectData.slice(0,limit) : projectData;
    return (
        <div className="project-list">
            {
                projectsToShow.map((project, ind) => {
                    return <ProjectCard key={project.projectCode} data={project} />
                })
            }
        </div>
    );
};

export default ProjectList;