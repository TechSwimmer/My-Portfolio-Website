import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import basicProjImg from "../../assets/basic-shot-2.png"

import allTaskImg from "../../assets/all-task-shot.png"

import createTaskShot from "../../assets/create-task-shot.png"


import "../styles/tasknestStyles.css"



const TodoAppDetails = () => {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

      function toggleIndex() {
        const index = document.getElementById('navIndex');
        index.classList.toggle('active');
    }


    return (

        <div className="tasknest-container">

            <nav className='fixed-nav'>
                <button className='toggle-nav' onClick={() => toggleIndex()}><div></div><div className="vertical-label">Index</div> </button>
                <ul className='nav-index' id='navIndex'>
                    <li className='nav-index-item'><a href='#tasknest-content'>Project overview</a></li>
                    <li className='nav-index-item'><a href='#vanilla-js-container'>The Vanilla JavaScript Approach</a></li>
                    <li className='nav-index-item'><a href='#key-features-section'>Key Features</a></li>
                    <li className='nav-index-item'><a href='#achievements-list'>Key achievements</a></li>
                    <li className='nav-index-item'><a href='#tasknest-tools'>Technology Stack Content:</a></li>
                    

                    <li className='nav-index-item'><a href='#tasknest-links'>PROJECT LINK</a></li>
                </ul>
            </nav>

            <div className="tasknest-header">
                <h2 className="tasknest-heading">TASKNEST</h2>
                <p className="tasknest-heading-content">This page contains the case study of TaskNest, Feature-Rich Full-Stack Todo Application, this page
                    includes the project overview, tools used, and live links to the official product.</p>
                <button className="tasknest-heading-btn"><a href="https://github.com/TechSwimmer/Todo-list-app">PROJECT LINK</a></button>
            </div>
            <div className="tasknest-content" id="tasknest-content">
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
                        showcases my skills in full-stack development, database management, and responsive design.Features secure user authentication and real-time data persistence.</p>
                </div>
                <div className="vanilla-js-container" id="vanilla-js-container">
                    <div className="vanilla-js-head"><h3>The Vanilla JavaScript Approach</h3></div>
                    <div className="vanilla-js-content"><p>This project represents a conscious learning decision to master foundational web
                        development skills by building the entire frontend with vanilla JavaScript. While modern frameworks offer
                        convenience, I wanted to deeply understand the underlying mechanics of single-page applications, including
                        manual DOM manipulation, event delegation, AJAX requests, and client-side routing. Working without framework
                        abstractions forced me to solve challenges like state synchronization and UI updates through pure JavaScript,
                        giving me a robust understanding of how web applications actually work at their core.</p></div>

                </div>

                <div className="key-features-section" id="key-features-section">
                    <h3>Key Features</h3>
                    <ul className="features-list">
                        <li>🔐 <strong>User Authentication:</strong> Secure login/register with JWT</li>
                        <li>📅 <strong>Calendar Integration:</strong> Interactive date-based task management</li>
                        <li>✅ <strong>Full CRUD Operations:</strong> Add, edit, delete, and complete tasks</li>
                        <li>👀 <strong>Smart Task Filtering:</strong> Today, Tomorrow, and All Tasks views</li>
                        <li>🌤️ <strong>Real-time Weather:</strong> Location-based weather and time display</li>
                        <li>📱 <strong>Responsive Design:</strong> Works seamlessly across all devices</li>
                        <li>💬 <strong>Feedback System:</strong> Integrated contact form with email notifications</li>
                    </ul>
                </div>

                <div className="achievements-list" id="achievements-list">
                    <div className="achievement-list-head">
                        <h3>Key achievements</h3>
                    </div>
                    <div className="achievements-list-points">
                        <ul>
                            <li>Engineered a secure RESTful API backend with Node.js and Express, implementing JWT-based authentication for user registration and login.</li>
                            <li>Developed a dynamic frontend with vanilla JavaScript, creating a single-page application (SPA) that manipulates the DOM for a seamless user experience.</li>
                            <li>Designed and integrated a responsive UI with a functional calendar, allowing users to view, add, edit, and manage tasks for specific dates.</li>
                            <li>Implemented full CRUD functionality for user tasks, connected to a MongoDB database via Mongoose ODM.</li>
                            <li>Secured application secrets using environment variables and successfully deployed the frontend to Netlify and backend to Render, configuring CORS for cross-origin requests.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="tasknest-tools" id="tasknest-tools">
                <div className="tasknest-tool-head">
                    <h3>Technology Stack Content:</h3>
                </div>

                <div className="tasknest-toolbox">
                  
                    <div>
                        <h4>Frontend</h4>
                        <div className="frontend-tools">
                            <div className="tasknest-tool">HTML</div>
                            <div className="tasknest-tool">CSS</div>
                            <div className="tasknest-tool">JAVASCRIPT</div>
                        </div>
                    </div>
                    <div>
                        <h4>Backend</h4>
                        <div className="backend-tools">
                            <div className="tasknest-tool">NODE.JS</div>
                            <div className="tasknest-tool">Express.js</div>
                            <div className="tasknest-tool">MongoDB</div>
                            <div className="tasknest-tool">Mongoose</div>
                            <div className="tasknest-tool">JWT</div>
                            <div className="tasknest-tool">REST APIs</div>
                        </div>
                    </div>
                    <div>
                        <h4>Libraries & Tools</h4>
                        <div className="libraries-tools">


                            <div className="tasknest-tool">GIT</div>
                            <div className="tasknest-tool">GITHUB</div>

                            <div className="tasknest-tool">Netlify</div>
                            <div className="tasknest-tool">Render</div>

                        </div>
                    </div>



                </div>
            </div>
            <div className="tasknest-links" id="tasknest-links">
                <button type="click" className="tasknest-link-btn"><a href="https://todotasknest.netlify.app">SEE IT LIVE</a></button>
                <button type="click" className="tasknest-link-btn" onClick={() => navigate('/Home')}>BACK TO PORTFOLIO</button>

            </div>
        </div>
    )
}




export default TodoAppDetails;