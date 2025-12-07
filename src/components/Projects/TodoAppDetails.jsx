import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import basicProjImg from "../../assets/basic-shot-2.png"

import allTaskImg from "../../assets/editTaskgif.gif"

import createTaskShot from "../../assets/create-task.gif"


import "../styles/tasknestStyles.css"



const TodoAppDetails = () => {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [indexOpen,setIndexOpen] = useState(false)
    const toggleIndex = () => {
        setIndexOpen(prev => !prev)
    } ; 
  
    return (

        <div className="tasknest-container">

            <nav className='fixed-nav'>
                <button className='toggle-nav'onClick={toggleIndex}><div></div><div className="vertical-label">Index</div> </button>
               
                      <div className={`nav-index ${indexOpen ? "active" : ""}`} id='navIndex'>
                    <a href='#tasknest-content' onClick={toggleIndex}>Project overview</a>
                   <a href='#vanilla-js-container' onClick={toggleIndex}>The Vanilla JavaScript Approach</a>
                    <a href='#key-features-section' onClick={toggleIndex}>Key Features</a>
                    <a href='#achievements-list' onClick={toggleIndex}>Key achievements</a>
                    <a href='#architecture-calendar' onClick={toggleIndex}>Architeture & Calendar behaviour</a>
                    <a href='#security-notes' onClick={toggleIndex}>Security notes</a>
                   <a href='#api-endpoints' onClick={toggleIndex}>API endpoints (server routes)</a>
                    <a href='#challenges' onClick={toggleIndex}>Challenges</a>
                    <a href='#future-improvement' onClick={toggleIndex}>Future improvements</a>
                    <a href='#tasknest-tools' onClick={toggleIndex}>Technology Stack Content:</a>
                    

                    <a href='#tasknest-links' onClick={toggleIndex}>PROJECT LINK</a>
                </div>
              
              
            </nav>

            <div className="tasknest-header">
                <h2 className="tasknest-heading">TASKNEST</h2>
                <p className="tasknest-heading-content">This page contains the case study of TaskNest, Feature-Rich Full-Stack Todo Application, this page
                    includes the project overview, tools used, and live links to the official product.</p>
                <button className="tasknest-heading-btn"><a href="https://todotasknest.netlify.app">LIVE PROJECT LINK</a></button>
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
                    <div className="vanilla-js-content"><p>I built TaskNest to gain a deep understanding of how
                        the web truly works under the hood — without relying on a frontend framework. The app is
                        written in<strong> vanilla JavaScript (≈1400 lines), intentionally showcasing real-world patterns
                        such as centralized DOM caching, manual state synchronization, event delegation versus
                        per-element listeners, calendar rendering logic, REST API interaction with auth tokens, 
                        and essential UI/UX behavior</strong>  for small-scale applications. This approach highlights 
                        practical full-stack skills and demonstrates how modern web apps can be constructed 
                        without framework abstractions.</p></div>

                </div>

                <div className="key-features-section" id="key-features-section">
                    <h3>Key Features</h3>
                    <ul className="features-list">
                        <li>🔐 <strong>User Authentication:</strong> Secure login/register with JWT</li>
                        <li>📅 <strong>Calendar Integration:</strong> Custom calendar UI with date highlighting and click-to-load tasks</li>
                        <li>✅ <strong>Full CRUD Operations:</strong> Full CRUD for tasks (user-scoped)</li>
                        <li>👀 <strong>Smart Task Filtering:</strong> Today, Tomorrow, and All Tasks views</li>
                        <li>🌤️ <strong>Real-time Weather:</strong> Fetches weather based on user’s location and displays a live ticking local time.</li>
                        <li>📱 <strong>Responsive Design:</strong> Responsive layout and mobile friendly navigation</li>
                        <li>💬 <strong>Feedback System:</strong> Integrated contact form with email notifications (Nodemailer)</li>
                        <li>✅ <strong>hand-crafted DOM logic:</strong>  1400+ lines of vanilla JS (intentional learning choice)</li>
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
            <div className="architecture-calendar" id="architecture-calendar">
                <div className="architecture-calendar-main-head"><h3>Architeture & Calendar behaviour</h3></div>
                <div className="architecture-calendar-head"><h3>High-level</h3></div>
                <div className="architecture-calendar-notes">
                    <ul>
                        <li>Frontend calls backend under /api/... for protected actions.</li>
                        <li>Frontend stores authToken (JWT) and userID in localStorage.</li>
                        <li>Calendar is rendered by creating &lt;tr&gt; / &lt;td&gt; elements in JS, with at most 6 rows (weeks) and 7 columns (days).</li>
                        <li>Calendar interaction uses event delegation on the calendar body (#table-body) where possible to avoid re-attaching listeners every re-render.</li>
                        <li>When a date is selected the app highlights the cell and calls /api/user/tasks/fetch with the selected date to load tasks on that specific date.</li>
                    </ul>
                </div>
                <div className="architecture-calendar-head"><h3>Important calendar notes</h3></div>
                <div className="architecture-calendar-notes">
                    <ul>
                        <li>Months are shown by name (array months[]) and converted to month number when calling APIs.</li>
                        <li>Dates in UI are compared to today / tomorrow using canonical YYYY-M-D or YYYY-M-DD as appropriate — there's a helper formatDate() to normalize comparisons.</li>
                        <li>Rendering functions clear tableBody and re-create cells each month change</li>
                        
                    </ul>
                </div>
            </div>
            <div className="api-endpoints" id="api-endpoints">
                <div className="api-endpoints-main-head"><h3>API Endpoints (server routes)</h3></div>
                <div className="api-endpoints-head"><h3>Auth:</h3></div>
                <div className="api-endpoints-points">
                    <ul>
                        <li>POST /api/auth/user/register -- Register (return token and userID)</li>
                        <li>POST /api/auth/user/login -- Login (returns token & userID)</li>
                       
                    </ul>
                </div>
                 <div className="api-endpoints-head"><h3>Tasks:</h3></div>
                <div className="api-endpoints-points">
                    <ul>
                        <li>POST /api/user/tasks/add -- add task (protected)</li>
                        <li>GET /api/user/tasks/fetch?year=&month=&day=&userID= -- fetch tasks for a specific date (protected)</li>
                        <li>GET /api/user/tasks/alltasks -- fetch all tasks for user (protected)</li>
                        <li>PUT /api/user/tasks/update/:id -- update a specific task (protected)</li>
                        <li>DELETE /api/user/tasks/delete/:id -- delete a specific tas (protected)</li>
                    </ul>
                </div>
                 <div className="api-endpoints-head"><h3>Other:</h3></div>
                <div className="api-endpoints-points">
                    <ul>
                        <li>PATCH /api/tasks/completed/:id -- mark task completed (protected)</li>
                        <li>DELETE /api/tasks/delete-completed -- delete all completed tasks (protected)</li>
                        <li>POST /api/submit-feedback -- submit feedback (sends email; optional DB model - current setup sends email)</li>
                        
                    </ul>
                </div>
            </div>
            <div className="security-notes" id="security-notes">
                <div className="security-notes-head">
                    <h3>Security notes</h3>
                </div>
                <div className="security-notes-points">
                    <ul>
                        <li>Passwords hashed with bcrypt on the server.</li>
                        <li>JWT tokens are used for auth and sent in Authorization headers.</li>
                        <li>Backend is hosted with HTTPS (Render), CORS enabled to allow frontend origins</li>
                        <li>Currently JWT stored in localStorage (easy to implement, but XSS risk — see improvements).</li>
                        <li>No sensitive data is stored on the frontend.</li>
                    </ul>
                </div>
              
            </div>
            <div className="challenges" id="challenges">
                <div className="challenges-head">
                    <h3>Challenges & what I learned</h3>
                </div>
                <div className="challenges-points">
                    <ul>
                        <li>Manual calendar rendering and event delegation (no framework) taught me DOM performance patterns.</li>
                        <li>De-bouncing and avoiding duplicate event listeners were critical as UI grew.</li>
                        <li>Handling geolocation permission fallbacks and graceful UI when WeatherAPI fails.</li>
                        <li>Building auth + protected routes end-to-end — hashing, tokens, and middleware.</li>
                    </ul>
                </div>
            </div>
            <div className="future-improvement" id="future-improvement">
                <div className="future-improvement-head">
                    <h3>Future improvements</h3>
                </div>
                <div className="future-improvement-points">
                    <ul>
                        <li>Move JWT from localStorage → HttpOnly cookies (better XSS protection).</li>
                        <li>Add token expiry & refresh tokens (prevent unlimited login sessions).</li>
                        <li>Add tests (unit + integration).</li>
                        <li>Add rate limiting on backend and input validation (e.g., express-validator).</li>
                        <li>Add CI/CD + automated deploy preview on PRs.</li>
                        <li>Convert frontend to a component-based framework (React) and compare performance → but
                            only after abstracting DOM logic</li>
                    </ul>
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
                <button type="click" className="tasknest-link-btn"><a href="https://github.com/TechSwimmer/Todo-list-app">GITHUB REPO</a></button>
                <button type="click" className="tasknest-link-btn" onClick={() => navigate('/Home')}>BACK TO PORTFOLIO</button>

            </div>
        </div>
    )
}




export default TodoAppDetails;