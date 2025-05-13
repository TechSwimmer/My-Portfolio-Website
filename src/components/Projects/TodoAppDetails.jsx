import { useState,useEffect } from "react";

import { useNavigate } from "react-router-dom";

import basicProjImg from "../../assets/basic-shot-2.png"

import allTaskImg from "../../assets/all-task-shot.png"

import createTaskShot from  "../../assets/create-task-shot.png"


import "../styles/tasknestStyles.css"



const TodoAppDetails = () => {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="tasknest-container">
            <div className="tasknest-header">
                <h2 className="tasknest-heading">TASKNEST</h2>
                <p className="tasknest-heading-content">This page contains the case study of TaskNest, a project
                     that includes the project overview, tools used, and live links to the official product.</p>
                <button className="tasknest-heading-btn"><a href="https://github.com/TechSwimmer/Todo-list-app">PROJECT LINK</a></button>
            </div>
            <div className="tasknest-content">
                <h3>PROJECT OVERVIEW</h3>
                <div className="tasknest-content-img">

                    <img src={basicProjImg} className="tasknest-project-image" alt="project-image"></img>
                </div>
                <div className="tasknest-content-img-overview">
                    <p>TaskNest is a full-stack web application built using Node.js, Express, MongoDB, HTML, CSS, and
                        Vanilla JavaScript. Designed to help users manage their daily tasks seamlessly, TaskNest 
                        offers an intuitive and organized way to plan, track, and complete tasks.</p>

                        <div className="tasknest-content-img">

                            <img src={allTaskImg} className="tasknest-project-image" alt="project-image"></img>
                        </div>
                        <p>With a dynamic calendar view, users can effortlessly navigate through their schedules, add tasks with due 
                        dates, mark them as completed,edit specific tasks and even filter tasks based on their status.</p>
                        

                        <div className="tasknest-content-img">

                            <img src={createTaskShot} className="tasknest-project-image" alt="project-image"></img>
                        </div>

                        <p>This project highlights my ability to build a complete web application from scratch using core web technologies,
                        focusing on both functionality and user experience. TaskNest not only helps users stay productive but also
                        showcases my skills in full-stack development, database management, and responsive design.</p>
                </div>
            </div>
            <div className="tasknest-tools">
                <div className="tasknest-tool-head">
                    <h3>Tools used</h3>
                </div>

                <div className="tasknest-toolbox">
                <div className="tasknest-tool">HTML</div>
                <div className="tasknest-tool">CSS</div>
                <div className="tasknest-tool">JAVASCRIPT</div>
                <div className="tasknest-tool">GIT</div>
                <div className="tasknest-tool">GITHUB</div>
                <div className="tasknest-tool">NODE.JS</div>

                </div>
            </div>
            <div className="tasknest-links">
                <button type="click" className="tasknest-link-btn"><a href="https://todotasknest.netlify.app">PROJECT LINK</a></button> 
                <button type="click" className="tasknest-link-btn" onClick={() => navigate('/Home')}>GO BACK</button> 

            </div>
        </div>
    )
}




export default TodoAppDetails;