import { useState } from "react";

import './styles/styles.css'
import './styles/navbar.css'
import profilePic from '../assets/my-img.jpg'

import menuIcon from '../assets/134216_menu_lines_hamburger_icon.svg'

const Navbar = ({navigateToSection}) => {
    const [menuStatus, setMenuStatus] = useState(false);
    const navItems = [
      { id: "home", label: "HOME" },
      { id: "about", label: "ABOUT" },
      { id: "project", label: "PROJECTS" },
      { id: "contact", label: "CONTACT" },
    ];

    const handleNav = (sectionId) => {
      navigateToSection(sectionId);
      setMenuStatus(false);
    };
  
    return (
        <div className="navbar">
        <div className="navbar-left">
          <img className="profilePic" src={profilePic} alt="Profile" />
          <h2>NIKHIL PILLAI</h2>
        </div>
        <div className="navbar-right">
          {navItems.map((item) => (
            <h4 key={item.id} onClick={() => handleNav(item.id)}>{item.label}</h4>
          ))}
          <div className="hamburger" onClick={() => setMenuStatus(!menuStatus)}><img src={menuIcon} alt="Menu-icon"></img></div>
          <div className={`dropdown-menu ${menuStatus ? "open" : ""}`}>
                {navItems.map((item) => (
                  <button key={item.id} type="button" onClick={() => handleNav(item.id)}>{item.label}</button>
                ))}
            </div>
        </div>
      </div>
    )
}


export default Navbar;
