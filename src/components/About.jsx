import { useState } from "react";
import "./styles/styles.css";

import { Link,useLocation } from "react-router-dom";

const About = ({navigateToSection}) => {

    const location = useLocation();
    const isProjectPage = location.pathname.startsWith('/Projects/');

    return (
        <div id="about" className="about-container">
            <section className="about-header">
                <h2>ABOUT ME</h2>
                <p>Here you will find more information about me, what I do, and my current skills mostly
                     in terms of programming and technology</p>
            </section>
            <section className="about-content-skills">   
                <div className="about-content">
                    <h4>Get to know me!</h4>
                    <p>I'm a full-stack developer with a passion for turning complex problems into
                        elegant, user-friendly solutions. What excites me most is the entire development
                        process—from brainstorming initial ideas and designing database architecture to
                         the thrill of deploying live, functioning applications.</p>

                         <p>With a strong foundation in the MERN stack, I specialize in creating seamless
                            user experiences with React and building efficient backend systems with Node.js
                            and MongoDB. My core strength is my ability to rapidly learn and adapt—whether
                            it was mastering PDF generation for CV-Baker to ensure pixel-perfect results or
                            tackling new challenges in backend optimization</p>

                    <p>I'm passionate about writing clean, maintainable code and believe that every bug fixed
                        or feature implemented is an opportunity to learn and improve. When I'm not coding,
                        you'll find me exploring new technologies or writing poetry—a craft that sharpens my 
                        ability to communicate complex ideas with clarity and impact.</p>

                        <p>I'm currently seeking full-time opportunities where I can apply my full-stack expertise
                            to build impactful products. Let's connect and discuss how I can contribute to your team.</p>
                        <button type="button" onClick={() => navigateToSection("contact")} className="about-contact-tab">CONTACT</button>
                </div>
                <div className="about-skills">
                    <h4>My Skills</h4>
                    <div className="skill-tabs">
                        <div className="frontend-tabs">
                            <div className="skill-tabs-heading">
                                <h4>Frontend</h4>
                            </div>
                            <div className="skill-tabs-items">
                                <div className="skill-tab">HTML</div>
                                <div className="skill-tab">CSS</div>
                                <div className="skill-tab">JAVASCRIPT</div><div className="skill-tab">REACT</div>
                                <div className="skill-tab">BOOTSTRAP</div>
                                <div className="skill-tab">TAILWIND</div>
                                <div className="skill-tab">RESPONSIVE DESIGN</div>
                            </div>
                            
                        </div>
                        <div className="backend-tabs">
                            <div className="skill-tabs-heading">
                                <h4>Backend</h4>
                            </div>
                            <div className="skill-tabs-items">
                                <div className="skill-tab">NODE.JS</div>
                                <div className="skill-tab">EXPRESS</div>
                            </div>
                        </div>
                        <div className="database-tabs">
                            <div className="skill-tabs-heading">
                                <h4>Database</h4>
                            </div>
                            <div className="skill-tabs-items">
                                 <div className="skill-tab">MONGO-DB</div>
                            </div>
                        </div>
                        <div className="authentication-security-tabs">
                            <div className="skill-tabs-heading">
                                <h4>Authentication & Security</h4>
                            </div>
                            <div className="skill-tabs-items">
                                <div className="skill-tab">JWT</div>
                                <div className="skill-tab">BCRYPT</div>
                            </div>
                        </div>
                        <div className="tools-deployement-tabs">
                            <div className="skill-tabs-heading">
                                <h4>Tools & Deployement</h4>
                            </div>
                            <div className="skill-tabs-items">
                                <div className="skill-tab">GIT</div>
                                <div className="skill-tab">GITHUB</div>
                                <div className="skill-tab">CLOUDINARY</div>
                                <div className="skill-tab">NETLIFY</div>
                                <div className="skill-tab">RENDER</div>                        
                                <div className="skill-tab">AXIOS</div>                        
                                <div className="skill-tab">VITE</div>
                            </div>
                        </div>
                        
                      
                    </div>
                </div>
            </section>
        </div>
    )
}


export default About;