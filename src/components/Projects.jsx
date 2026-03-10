import { Link } from 'react-router-dom';
import "./styles/styles.css"
import "./styles/projects.css"

import basicShot from "../assets/create-task.gif";
import cvBuilderShot from "../assets/PORTFOLIO-BUILDER-DISPLAY.png";

import affinaShot from "../assets/affina.png"

const Projects = () => {


    return (
        <div id="project" className="project-container">

            <div className="project-header">
                <h2 className="project-heading">PROJECTS</h2>
                <p className="project-heading-content">Here you will find some of the personal and clients projects
                    that I created with each project containing its own case study</p>

            </div>
            <div className="project-wrapper">
                <div className="project-content">
                    <h3>TASKNEST</h3>
                    <div className="project-todo-app">
                        
                        <div className="project-img">
                            <img src={basicShot} alt="TaskNest project preview"></img>
                        </div>
                        <div className="project-img-content">

                            <p><strong>Problem:</strong> Users needed a simple way to manage daily tasks with clear deadline tracking.</p>
                            <p><strong>Role:</strong> Built the application end-to-end, including task workflows, API endpoints, and deployment.</p>
                            <p><strong>Stack:</strong> Node.js, Express, MongoDB Atlas, JavaScript, HTML, CSS.</p>
                            <p><strong>Result:</strong> Delivered a responsive task manager with secure auth, calendar-based tracking, and status categorization.</p>
                            <Link to="/Projects/TodoAppDetails" className="project-img-content-btn">CASE STUDY</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-wrapper">
                <div className="project-content">
                    <h3>ResumeBaker</h3>
                    <div className="project-cvmaker-app">
                        
                        <div className="project-img">
                            <img src={cvBuilderShot} alt="ResumeBaker project preview"></img>
                        </div>
                        <div className="project-img-content">

                            <p><strong>Problem:</strong> Resume builders often lack flexible customization and smooth real-time editing.</p>
                            <p><strong>Role:</strong> Implemented core resume creation flow, live preview behavior, and export-related features.</p>
                            <p><strong>Stack:</strong> React, JavaScript, Node.js, Express, MongoDB, html2canvas, jsPDF.</p>
                            <p><strong>Result:</strong> Delivered a multi-layout resume builder with real-time updates and downloadable CV output.</p>
                            <Link to="/Projects/CvBuilderDetails" className="project-img-content-btn">CASE STUDY</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-wrapper">
                <div className="project-content">
                    <h3>Affina</h3>
                    <div className="project-cvmaker-app">
                        
                        
                            <div className="project-img">
                                <img src={affinaShot} alt="Affina project preview"></img>
                            </div>
                            <div className="project-img-content">

                                <p><strong>Problem:</strong> Users needed a lightweight social platform for posting, interaction, and profile personalization.</p>
                                <p><strong>Role:</strong> Developed authentication, post interaction flows, and core frontend-backend integration.</p>
                                <p><strong>Stack:</strong> MongoDB, Express, React, Node.js, JWT, Cloudinary.</p>
                                <p><strong>Result:</strong> Delivered a responsive social app with secure auth, post management, likes/comments, and media support.</p>
                                <Link to="/Projects/AffinaDetails" className="project-img-content-btn">CASE STUDY</Link>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Projects;
