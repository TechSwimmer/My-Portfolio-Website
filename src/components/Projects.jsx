import { useState,useEffect } from "react";


import { Link } from 'react-router-dom';
import "./styles/styles.css"

import basicShot from "../assets/basic-shot.png";


const Projects = () => {


    return (
        <div id="project" className="project-container">
            <div className="project-header">
                <h2 className="project-heading">PROJECTS</h2>
                <p className="project-heading-content">Here you will find some of the personal and clients projects
                     that I created with each project containing its own case study</p>
                
            </div>
            <div className="project-content">
                <div className="project-todo-app">
                    <div className="project-img">
                        <img src={basicShot}></img>
                    </div>
                    <div className="project-img-content">
                        <h3>TASKNEST</h3>
                        <p>A full-stack todo application built using Node.js, Express, MongoDB Atlas, HTML, CSS,
                            and JavaScript. It features a dynamic calendar to manage daily tasks,
                            task categorization by due dates and completion status, and secure MongoDB 
                            authentication.</p>
                        <Link to="/Projects/TodoAppDetails" className="project-img-content-btn">CASE STUDY</Link> 
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Projects;