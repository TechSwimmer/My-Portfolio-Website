import { useState, useEffect } from "react";
import "./styles/styles.css"

import githubLogo from "../assets/icons8-github-50.png"
import contactLogo from "../assets/icons8-contact-50.png"
import linkedinLogo from "../assets/icons8-linked-in-50.png"

import codewarsLogo from "../assets/icons8-codewars-48.png"
import hackerEarthLogo from "../assets/hackerearth.png"

const Footer = () => {



    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-content-left">
                <div className="footer-left-name">
                    <h2>NIKHIL PILLAI</h2>
                </div>
                <div className="footer-left-content">
                    <p>(FULL STACK WEB DEV)</p>
                </div>
                </div>
                <div className="footer-content-right">
                    <div className="footer-right-head">
                        <h2>SOCIAL</h2>
                    </div>
                    <div className="footer-right-logos">
                        <div className="footer-logo"><a href="https://github.com/TechSwimmer"><img src={githubLogo} alt="github"></img></a></div>
                        <div className="footer-logo"><a href="https://linkedin.com/in/techdevnikhil"><img src={linkedinLogo} alt="linked-in"></img></a></div>
                        <div className="footer-logo"><a href="#contact"><img src={contactLogo} alt="contact"></img></a></div>
                        <div className="footer-logo"><a href="https://www.codewars.com/users/code_toad"><img src={codewarsLogo} alt="codewars"></img></a></div>
                        <div className="footer-logo"><a href="https://www.hackerearth.com/@niku101095/"><img src={hackerEarthLogo} alt="hackerearth"></img></a></div>
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