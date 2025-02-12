import { useState, useEffect } from "react";
import "./styles/styles.css"

import lightlogo from "../assets/icons8-sun-50.png"
import darklogo from "../assets/icons8-dark-60.png"



const Themebar = () => {

    const [theme, setTheme] = useState(() => {

        return localStorage.getItem("theme") === "dark" ? false : true;
    });

    useEffect(() => {
        if(theme){
            document.querySelector('.home-container').classList.add("light-mode")
            document.querySelector('.home-container').classList.remove("dark-mode")
            document.querySelector('.themebar').classList.remove("navbar-dark")
            document.querySelector('.themebar').classList.add("navbar-light")
            document.querySelector('.themebar-light').classList.add("light-mode", "active-scale")
            document.querySelector('.themebar-dark').classList.remove("dark-mode", "active-scale")
            document.querySelector('.logobar').classList.add("logobar-light")
            document.querySelector('.logobar').classList.remove("logobar-dark")
            document.querySelector('.navbar').classList.add('navbar-light')
            document.querySelector('.navbar').classList.remove('navbar-dark')
            document.querySelector('.home-projects-button').classList.add('navbar-light');
            document.querySelector('.home-projects-button').classList.remove('navbar-dark');
            document.querySelectorAll('.navbar a').forEach((link) => {link.classList.add('navbar-links-light')});
            document.querySelectorAll('.navbar a').forEach((link) => {link.classList.remove('navbar-links-dark')});
            document.querySelector('.about-container').classList.add("light-mode")
            document.querySelector('.about-container').classList.remove("dark-mode")
            document.querySelector('body').classList.add('light-mode');
            document.querySelector('body').classList.remove('dark-mode');
            document.querySelectorAll('.skill-tab').forEach((e) => {e.classList.add('navbar-light')})
            document.querySelectorAll('.skill-tab').forEach((e) => {e.classList.remove('navbar-dark')})
            document.querySelector('.about-contact-tab').classList.add('navbar-light')  
            document.querySelector('.about-contact-tab').classList.remove('navbar-dark')  

            document.querySelector('.contact-form').classList.add('navbar-light');
            document.querySelector('.contact-form').classList.remove('navbar-dark');
            document.querySelector('.contact-submit-button').classList.add('button-light')
            document.querySelector('.contact-submit-button').classList.remove('button-dark')
            document.querySelector('.footer-container').classList.add('navbar-light')
            document.querySelector('.footer-container').classList.remove('navbar-dark')
            localStorage.setItem("theme", "light")
        }
        else{
            document.querySelector('.home-container').classList.add("dark-mode")
            document.querySelector('.home-container').classList.remove("light-mode")
            document.querySelector('.themebar').classList.add("navbar-dark")
            document.querySelector('.themebar-dark').classList.add("dark-mode", "active-scale")
            document.querySelector('.themebar-light').classList.remove("light-mode", "active-scale")
            document.querySelector('.logobar').classList.add("logobar-dark")
            document.querySelector('.logobar').classList.remove("logobar-light")
            document.querySelector('.navbar').classList.add('navbar-dark')
            document.querySelector('.navbar').classList.remove('navbar-light')
            document.querySelector('.home-projects-button').classList.add('navbar-dark');
            document.querySelector('.home-projects-button').classList.remove('navbar-light')
            document.querySelectorAll('.navbar a').forEach((link) => {link.classList.add('navbar-links-dark')});
            document.querySelectorAll('.navbar a').forEach((link) => {link.classList.remove('navbar-links-light')});
            document.querySelector('.about-container').classList.add("dark-mode")
            document.querySelector('.about-container').classList.remove("light-mode")
            document.querySelector('body').classList.add('dark-mode');
            document.querySelector('body').classList.remove('light-mode');
            document.querySelectorAll('.skill-tab').forEach((e) => {e.classList.add('navbar-dark')})
            document.querySelectorAll('.skill-tab').forEach((e) => {e.classList.remove('navbar-light')})
            document.querySelector('.about-contact-tab').classList.add('navbar-dark')  
            document.querySelector('.about-contact-tab').classList.remove('navbar-light')  
            document.querySelector('.contact-form').classList.add('navbar-dark');
            document.querySelector('.contact-form').classList.remove('navbar-light');
            document.querySelector('.contact-submit-button').classList.add('button-dark')
            document.querySelector('.contact-submit-button').classList.remove('button-light')
            document.querySelector('.footer-container').classList.add('navbar-dark')
            document.querySelector('.footer-container').classList.remove('navbar-light')
            localStorage.setItem("theme", "dark")
        }
    },[theme])
    

    const handleLightClick = () => {
        setTheme(true);
    }

    const handleDarkClick = () => {
        setTheme(false);
    }


    return (
        <div className="themebar">
            <div className="themebar-light">
                <img src={lightlogo} onClick={handleLightClick} alt="light-mode"></img>
            </div>
            <div className="themebar-dark">
                <img src={darklogo} onClick={handleDarkClick} alt="dark-mode"></img>
            </div>
        </div>
    )
}




export default Themebar;