import React, {useState, useEffect} from "react";
import './pageStyles/Home.css'
import './pageStyles/Projects.css'
import { Link } from "react-router-dom";
import SkillsSection from "../components/SkillsSection";
import ProjectList from "../components/ProjectList";
import ContactSection from "../components/ContactMe"
import githubIcon from '../assets/github_logo.svg'
import linkedInIcon from '../assets/linkedin_logo.svg'
import profileImage from '../assets/profile_img.png'
import locationIcon from '../assets/location.svg'
import calendarIcon from '../assets/calendar.svg'
import institutionIcon from '../assets/institution.svg'

function Home() {
    const toTypewrite = [
        "AI & ML",
        "Full Stack Development",
        "App Development (Android)",
        "Prompt Engineering"
    ];

    const [typewriterText, setTypewriterText] = useState('');
    const [typewriterIndex, setTypewriterIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);


    useEffect(() => {
        const typewriterEffect = () => {
            const currentPhrase = toTypewrite[typewriterIndex];

            const speed = isDeleting ? 50 : typingSpeed;

            if (!isDeleting && charIndex < currentPhrase.length){
                setTypewriterText(currentPhrase.substring(0, charIndex + 1))
                setCharIndex(charIndex + 1);
            } else if (!isDeleting && charIndex === currentPhrase.length){
                setIsDeleting(true);
                setTypingSpeed(100);
                setTimeout(() => {}, 1500);
            } else if (isDeleting && charIndex > 0){
                setTypewriterText(currentPhrase.substring(0, charIndex -1));
                setCharIndex(charIndex - 1);
            } else if (isDeleting && charIndex === 0){
                setIsDeleting(false);
                setTypewriterIndex((typewriterIndex + 1) % toTypewrite.length);
                setTypingSpeed(150);
            }
        };

        const timer = setTimeout(typewriterEffect, isDeleting ? 50 : typingSpeed);
        return () => clearTimeout(timer);
    }, [typewriterText , typewriterIndex , charIndex , isDeleting , typingSpeed]);





    return (
        <>

        <section className="hello_container">
            <div className="hello_content">
                <div className="left_hello">

                    <div className="greeting">
                        <h1>Hi!</h1>
                        <h1>Allan here!</h1>
                    </div>

                    <div className="typewriter">
                        <h2>I do  <span className="typewriter-text">{typewriterText}</span><span className="cursor">.</span></h2>
                    </div>
                    <h3><span><img src={locationIcon} alt="location" width={20} height={20} className="location_icon"/></span> Kochi, Kerala, India</h3>
                    <div className="connect_me">
                        <a href="https://github.com/AllanSJoseph" target="_blank" rel="noopener noreferrer" className="social-link"><img src={githubIcon} alt="GitHub"/>GitHub</a>
                        <a href="https://www.linkedin.com/in/allan-s-joseph-bb2597258/" target="_blank" rel="noopener noreferrer" className="social-link"><img src={linkedInIcon} alt="LinkedIn"/>LinkedIn</a>
                    </div>

                </div>
                <div className="right_hello_img">
                    <div className="profile-image-container">
                        <img src={profileImage} alt="Allan" className="profile-image" />
                    </div>
                </div>
            </div>           
        </section>

        <section className="about_me">
            <h1><u>About Me</u></h1>
            <p>
            I am <span><b>Allan S Joseph</b></span>! An Aspiring Programmer and AI engineer. I am currently pursuing my <span><b>Bachelors in Information Technology</b></span> at <span><b>Cochin University of Science and Technology</b></span>. <br /><br />
            My interests involve <span><b>Backend Development</b></span>, <span><b>Large Language Models</b></span> and <span><b>Deep Learning</b></span>. I am currently learning and researching more on the technologies like <span><b>PyTorch</b></span> and <span><b>LangChain</b></span> and improving my current programming skills on <span><b>Python</b></span> and <span><b>JavaScript</b></span>. I have other interests on <span><b>Android</b></span> App Development and some Frontend tools like <span><b>React</b></span> and Backend tools like <span><b>Django</b></span>.<br /><br />
            Aside from Programming, I am interested in <span><b>Video Editing</b></span>, <span><b>Photography</b></span> and <span><b>Drawing</b></span>.
            </p>
        </section>

        <SkillsSection/>

        <div className="project-section">
            <h1 className="project-title">Projects</h1>
            <ProjectList limit={4}/>
            <div className="view-all-container">
                <Link to="/projects">
                    <button className="show-all-btn">Show All Projects</button>
                </Link>
            </div>
        </div>

        <div className="experience-n-education">

            <div className="eduexp-section">
                <h1>Work Experience</h1>
                <div className="eduexp-container">
                    <div className="eduexp-detail">
                        <h2 className="eduexp-title">Intern</h2>
                        <h3 className="institution-name"><img src={institutionIcon} alt="institution"/>Gadgeon Smart Systems Pvt Ltd</h3>
                        <h4 className="eduexp-date"><img src={calendarIcon} alt="date"/>May 2025 - Jun 2025</h4>
                        <ul>
                            <li>Designed and Implemented a SQL-based Database for HRM System.</li>
                            <li>Got Hands on Experience with PostgreSQL Database.</li>
                        </ul>
                    </div>
                    <div className="eduexp-detail">
                        <h2 className="eduexp-title">Student Placement Coordinator</h2>
                        <h3 className="institution-name"><img src={institutionIcon} alt="institution"/>Cochin University Of Science And Technology</h3>
                        <h4 className="eduexp-date"><img src={calendarIcon} alt="date"/>Feb 2025 - Present</h4>
                        <ul>
                            <li>Student Placement Coordinator representing IT 2026 Batch @ CUSAT CUCEK Campus</li>
                        </ul>
                    </div>
                    <div className="eduexp-detail">
                        <h2 className="eduexp-title">Tech Team Member (Part Time)</h2>
                        <h3 className="institution-name"><img src={institutionIcon} alt="institution"/>SEDS CUSAT</h3>
                        <h4 className="eduexp-date"><img src={calendarIcon} alt="date"/>2025 - Present </h4>
                        <ul>
                            <li>Joined as Member on SEDS Tech Team.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="eduexp-section">
                <h1>Education</h1>
                <div className="eduexp-container">
                    <div className="eduexp-detail">
                        <h2 className="eduexp-title">B.Tech in Information Technology</h2>
                        <h3 className="institution-name"><img src={institutionIcon} alt="institution"/>Cochin University Of Science And Technology</h3>
                        <h4 className="eduexp-date"><img src={calendarIcon} alt="date"/>2022-2026</h4>
                        <p><i>Currently Undergoing</i></p>
                    </div>
                    <div className="eduexp-detail">
                        <h2 className="eduexp-title">High School</h2>
                        <h3 className="institution-name"><img src={institutionIcon} alt="institution"/>Naipunnya Public School, Kochi</h3>
                        <h4 className="eduexp-date"><img src={calendarIcon} alt="date"/>2022</h4>
                    </div>
                </div>
            </div>

        </div>



        <ContactSection/>
        </>
    )
}

export default Home;