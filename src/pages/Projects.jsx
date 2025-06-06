import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './pageStyles/Projects.css'
import ProjectList from "../components/ProjectList";


function Projects(){
    return (
        <>
        <h1 className="project-title-main">My Projects</h1>
        <p className="project-subtitle-main">Showing all my Projects</p>
        <ProjectList />
        </>
    )
}

export default Projects;