import React from "react";
import githubIcon from "../assets/github_logo.svg";
import { Link } from "react-router-dom";
import ImageComponent from "./ImageComponent";

const ProjectCard = ({data}) => {
    return (
        <div className="project-card">
            <div className="project-banner">
                <ImageComponent url={data.projectThumbnail} alt="Project Banner" className="project-image" />
            </div>
            <div className="project-desc">
                <h3 className="project-name">{data.projectName}</h3>
                <h5 className="project-type">{data.projectType}</h5>
                <h6 className="project-lang">{data.projectLang[0]}</h6>
                <p className="project-desc">{data.projectDesc}</p>
            </div>
            <div className="project-links">
                <Link to={`/projects/${data.projectCode}`} className="learn-more-link">Learn More</Link>
                <a href={data.projectRepo} target="_blank" rel="noopener noreferrer" className="repo-link"><img src={githubIcon} alt="GitHub" /></a>
            </div>
        </div>
    )
};

export default ProjectCard;