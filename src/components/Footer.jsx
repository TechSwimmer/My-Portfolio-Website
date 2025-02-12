import { useState, useEffect } from "react";
import "./styles/styles.css"

import githubLogo from "../assets/icons8-github-50.png"
import contactLogo from "../assets/icons8-contact-50.png"
import linkedinLogo from "../assets/icons8-linked-in-50.png"

const Footer = () => {



    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-content-left">
                <div className="footer-left-name">
                    <h2>NIKHIL PILLAI</h2>
                </div>
                <div className="footer-left-content">
                    <p>I am a Full-stack web developer building and managing websites and web applications
                    with intuitive and responsive design.</p>
                </div>
                </div>
                <div className="footer-content-right">
                    <div className="footer-right-head">
                        <h2>SOCIAL</h2>
                    </div>
                    <div className="footer-right-logos">
                        <div className="footer-logo"><img src={githubLogo} alt="github"></img></div>
                        <div className="footer-logo"><img src={linkedinLogo} alt="linked-in"></img></div>
                        <div className="footer-logo"><img src={contactLogo} alt="contact"></img></div>
                    </div>
                </div>
            </div>
            <div className="footer-footnote">
                <p>© Copyright 2025. Made by Nikhil Pillai</p>
            </div>
        </div>
    )
}


export default Footer;