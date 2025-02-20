import { useState } from "react";
import './styles/styles.css'
import profilePic from '../assets/cool-profile-pictures-monkey-face-0jxwmq6bpm3hs9cb.jpg'


import { Link,useLocation } from "react-router-dom"

const Navbar = ({navigateToSection}) => {
    
    const location = useLocation();
    const isProjectPage = location.pathname.startsWith('/Projects/');
  
    return (
        <div className="navbar">
        <div className="navbar-left">
          <img className="profilePic" src={profilePic} alt="Profile" />
          <h2>NIKHIL PILLAI</h2>
        </div>
        <div className="navbar-right">
          {isProjectPage ? (
            // If on a project page, use function to navigate back to sections
            <>
              <h4 onClick={() => navigateToSection("home")}>HOME</h4>
              <h4 onClick={() => navigateToSection("about")}>ABOUT</h4>
              <h4 onClick={() => navigateToSection("project")}>PROJECTS</h4>
              <h4 onClick={() => navigateToSection("contact")}>CONTACT</h4>
            </>
          ) : (
            // If on home page, use hash links
            <>
              <h4><a href="#home">HOME</a></h4>
              <h4><a href="#about">ABOUT</a></h4>
              <h4><a href="#project">PROJECTS</a></h4>
              <h4><a href="#contact">CONTACT</a></h4>
            </>
          )}
        </div>
      </div>
    )
}


export default Navbar;