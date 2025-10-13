import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './styles/styles.css'
import profilePic from '../assets/my-img.jpg'

import menuIcon from '../assets/134216_menu_lines_hamburger_icon.svg'


import { Link,useLocation } from "react-router-dom"

const Navbar = ({navigateToSection}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isProjectPage = location.pathname.startsWith('/Projects/');

    const [menuStatus, setMenuStatus] = useState(false);
  
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
          <div className="hamburger" onClick={() => setMenuStatus(!menuStatus)}><img src={menuIcon} alt="Menu-icon"></img></div>
          <div className={`dropdown-menu ${menuStatus ? "open" : ""}`}>
                <Link  to="/#home" onClick={() => setMenuStatus(false)}>Home</Link>
                <Link  to="/#about" onClick={() => setMenuStatus(false)}>About</Link>
                <Link  to="/#project" onClick={() => setMenuStatus(false)}>Projects</Link>
                <Link  to="/#contact" onClick={() => setMenuStatus(false)}>Contact</Link>
            </div>
        </div>
      </div>
    )
}


export default Navbar;