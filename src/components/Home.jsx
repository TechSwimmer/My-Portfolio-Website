import { useState } from "react";
import "./styles/styles.css"

const Home = ({navigateToSection}) => {



    return (
        <div id="home" className="home-container">
            <h4 className="home-head">HEY, I'M NIKHIL  PILLAI</h4>
            <p className="home-content">A full stack web developer building and managing websites and web applications with intuitive and responsive design.</p>
            <button type="button" className="home-projects-button" onClick={() => navigateToSection("project")}>PROJECTS</button>
        </div>
    )
}



export default Home;