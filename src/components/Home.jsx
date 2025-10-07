import { useState } from "react";
import "./styles/styles.css"

const Home = ({navigateToSection}) => {



    return (
        <div id="home" className="home-container">
            <h4 className="home-head">HEY, I'M NIKHIL  PILLAI</h4>
            <p className="home-content">A passionate full-stack developer crafting scalable web applications with the MERN stack. I transform complex problems into intuitive, user-friendly solutions.</p>
            <button type="button" className="home-projects-button" onClick={() => navigateToSection("project")}>PROJECTS</button>
        </div>
    )
}



export default Home;