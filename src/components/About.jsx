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
                    <p>I specialize in MERN stack development, creating seamless user experiences with
                         React, and building efficient backend systems with Node.js and MongoDB. </p>
                    <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a 
                        good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                        <button type="button" onClick={() => navigateToSection("contact")} className="about-contact-tab">CONTACT</button>
                </div>
                <div className="about-skills">
                    <h4>My Skills</h4>
                    <div className="skill-tabs">
                        <div className="skill-tab">HTML</div>
                        <div className="skill-tab">CSS</div>
                        <div className="skill-tab">JAVASCRIPT</div>
                        <div className="skill-tab">REACT</div>
                        <div className="skill-tab">BOOTSTRAP</div>
                        <div className="skill-tab">GIT</div>
                        <div className="skill-tab">GITHUB</div>
                        <div className="skill-tab">RESPONSIVE DESIGN</div>
                        <div className="skill-tab">NODE.JS</div>
                        <div className="skill-tab">MONGO-DB</div>
                        <div className="skill-tab">EXPRESS</div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default About;