import { useState, useEffect } from "react";


import { Link } from 'react-router-dom';
import "./styles/styles.css"

import basicShot from "../assets/create-task.gif";
import cvBuilderShot from "../assets/cvBuilderScreenshot.png";

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
            <div className="project-wrapper">
                <div className="project-content">
                    <div className="project-cvmaker-app">
                        <div className="project-img">
                            <img src={cvBuilderShot}></img>
                        </div>
                        <div className="project-img-content">
                            <h3>CV-Baker</h3>
                            <p>A dynamic and customizable CV builder built with React that allows users to input personal and professional details,
                                preview styled layouts in real-time, and download polished resumes as PDFs.
                                Features include layout switching, section visibility toggles, custom styling,
                                print-friendly formatting, and persistent data handling. Utilizes html2canvas, jsPDF, and responsive design principles
                                for a seamless user experience.</p>
                            <Link to="/Projects/CvBuilderDetails" className="project-img-content-btn">CASE STUDY</Link>
                        </div>
                    </div>
                </div>
            </div>
             <div className="project-wrapper">
                <div className="project-content">
                    <div className="project-cvmaker-app">
                        <div className="project-img">
                            <img src={affinaShot}></img>
                        </div>
                        <div className="project-img-content">
                            <h3>Affina</h3>
                            <p>Affina is a full-stack social media application that provides a seamless
                                platform for user connection and interaction. Built with the modern MERN
                                (MongoDB, Express.js, React, Node.js) stack, it features secure JWT 
                                authentication, allowing users to create and manage posts, engage with content
                                through real-time likes and comments, and personalize their profiles. With a
                                responsive design, image upload capabilities, and a dynamic user interface, 
                                Affina demonstrates robust full-stack development skills in creating a 
                                scalable and engaging social experience.</p>
                            <Link to="/Projects/AffinaDetails" className="project-img-content-btn">CASE STUDY</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Projects;