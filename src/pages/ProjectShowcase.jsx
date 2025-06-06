import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectData from '../data/projects.json';
import VideoComponent from '../components/VideoComponent';
import ImgCarousel from '../components/ImgCarousel';
import gitHubLogo from '../assets/github_logo.svg';
import CodeIcon from '../assets/code.svg';
import ToolIcon from '../assets/tools.svg';
import GroupIcon from '../assets/group.svg'; 
import VideoIcon from '../assets/video.svg'; 
import ImageIcon from '../assets/image.svg'; 
import './pageStyles/ProjectShowcase.css'; 

const ProjectShowcase = () => {
    const projectCode = useParams().projectCode; // Extracting project code from URL parameters

    const project = ProjectData.find((proj) => proj.projectCode === projectCode); // Finding the project data based on the code

    if (!project){
        return(
            <div className="project-not-found">
                <h1>Project Not Found</h1>
                <p>Sorry, the project you are looking for does not exist.</p>
            </div>
        );
    } else {
      return (
            <div className="project-showcase-container">
                <div className='project-showcase'>
                    <h1 className='project-title-showcase'>{project.projectName}</h1>
                    <h6 className='project-desc-brief'>{project.projectDesc}</h6>

                    <div className='project-github'>
                        <img src={gitHubLogo} className='github-link-proj'/><a href={project.projectRepo} className='github-link-proj-text' target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
                    </div>

                    <div className="project-demo">
                        <h2><span className='title-icon'><img src={VideoIcon} alt='video icon'/></span>Project Demo</h2>
                        <VideoComponent src={project.projectDemo}/>
                    </div>

                    <div className="project-details">
                        <h2>Overview</h2>
                        <p>{project.projectOverview}</p>


                        <div className='project-techs'>

                            <div className='project-tech-section'>
                                <h2>Technologies Used</h2>
                                <h3><span className='title-icon'><img src={CodeIcon} alt='video icon'/></span> Languages</h3>
                                <ul className="tech-list">
                                    {project.projectLang.map((lang, index) => (
                                        <li key={index} className="tech-list-item">{lang}</li>
                                    ))}   
                                </ul>
                            </div>

                            <div className='project-tech-section'>
                                <h3><span className='title-icon'><img src={ToolIcon} alt='video icon'/></span> Tools/Frameworks</h3>
                                <ul className="tech-list">
                                    {project.projectTools.map((tool, index) => (
                                        <li key={index} className="tech-list-item">{tool}</li>
                                    ))}
                                </ul>
                            </div>

                        </div>

                        <div className='project-members'>
                            <h2><span className='title-icon'><img src={GroupIcon} alt='video icon'/></span> Team Members (Collaborators)</h2>
                            <ul className="tech-list">
                                {project.projectMembers.map((member, index) => (
                                    <li key={index} className="tech-list-item">{member}</li>
                                ))}
                            </ul> 
                        </div>                    

                    </div>

                    <div className="project-images">
                        <h2><span className='title-icon'><img src={ImageIcon} alt='video icon'/></span> Project Screenshots</h2>
                        <div className="img-carousel">
                            <ImgCarousel images={project.projectScreenshots} />
                        </div> 
                    </div>
                </div>

            </div>
        );  
    }

    
};

export default ProjectShowcase;