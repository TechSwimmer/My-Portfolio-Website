import { useState, useEffect } from "react";
import "./styles/styles.css";

import lightlogo from "../assets/icons8-sun-50.png";
import darklogo from "../assets/icons8-dark-60.png";

const Themebar = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") === "dark" ? false : true;
    });

    useEffect(() => {
        const elements = {
            homeContainer: document.querySelector('.home-container'),
            body: document.querySelector('body'),
            tasknestContainer: document.querySelector('.tasknest-container'),
            aboutContainer: document.querySelector('.about-container'),
            contactForm: document.querySelector('.contact-form'),
            projectContainer: document.querySelector('.project-container'),
            homeProjectsButton: document.querySelector('.home-projects-button'),
            aboutContactTab: document.querySelector('.about-contact-tab'),
            contactSubmitButton: document.querySelector('.contact-submit-button'),
            projectImgBtn: document.querySelector('.project-img-content-btn'),
            
        };

        Object.values(elements).forEach(el => {
            if (el) {
                el.classList.toggle("light-mode", theme);
                el.classList.toggle("dark-mode", !theme);
            }
          
        });

        const elementsTwo = {
            navbar: document.querySelector('.navbar'),
            logobar: document.querySelector('.logobar'),
            footerContainer: document.querySelector('.footer-container'),
            tasknestHeadBtn: document.querySelector('.tasknest-heading-btn'),
            dropdownMenu: document.querySelector('.dropdown-menu')
        };

        Object.values(elementsTwo).forEach(el => {
            if (el) {
                el.classList.toggle("navbar-light", theme);
                el.classList.toggle("navbar-dark", !theme);
            }
            if(elementsTwo.tasknestHeadBtn) {
                elementsTwo.tasknestHeadBtn.classList.toggle("navbar-light", theme);
                elementsTwo.tasknestHeadBtn.classList.toggle("navbar-dark", !theme);
                
            }
        });

        const elementsThree = {
            themeBar: document.querySelector('.themebar'),
            themebarlight: document.querySelector('.themebar-light'),
            themebarDark: document.querySelector('.themebar-dark'),
        };

        Object.values(elementsThree).forEach(el => {
            if (el) {
                el.classList.toggle("navbar-light", theme);
                el.classList.toggle("navbar-dark", !theme);
            }
        });

        if (elementsThree.themebarlight) {
            elementsThree.themebarlight.classList.toggle("active-scale", theme);
            elementsThree.themebarlight.classList.toggle("light-mode", theme);
        }

        if (elementsThree.themebarDark) {
            elementsThree.themebarDark.classList.toggle("active-scale", !theme);
            elementsThree.themebarDark.classList.toggle("dark-mode", !theme);
        }

        // Handle elements with multiple items
        document.querySelectorAll('.navbar a, .skill-tab').forEach(link => {
            if (theme) {
                link.classList.add('navbar-links-light', 'navbar-light');
                link.classList.remove('navbar-links-dark', 'navbar-dark');
            } else {
                link.classList.add('navbar-links-dark', 'navbar-dark');
                link.classList.remove('navbar-links-light', 'navbar-light');
            }
        });
        // handle tools per theme

        document.querySelectorAll('.tasknest-tool').forEach(link => {
            if (theme) {
                link.classList.add('logobar-light')
                link.classList.remove('logobar-dark')
            }
            else {
                link.classList.add('logobar-dark')
                link.classList.remove('logobarlight')
            }
        })

        // handle project page buttion

        document.querySelectorAll('.tasknest-link-btn').forEach(link => {
            if(theme) {
                link.classList.add('logobar-light')
                link.classList.remove('logobar-dark')
            }
            else {
                link.classList.add('logobar-dark')
                link.classList.remove('logobar-light')
            }
        })
        
        // handle home page button
        
      

        // Update localStorage
        localStorage.setItem("theme", theme ? "light" : "dark");

    }, [theme]); // This dependency array ensures effect runs when `theme` changes

    return (
        <div className="themebar">
            <div className={`themebar-light ${theme ? "active-scale" : ""}`} onClick={() => setTheme(true)}>
                <img src={lightlogo} alt="light-mode" />
            </div>
            <div className={`themebar-dark ${!theme ? "active-scale" : ""}`} onClick={() => setTheme(false)}>
                <img src={darklogo} alt="dark-mode" />
            </div>
        </div>
    );
};

export default Themebar;