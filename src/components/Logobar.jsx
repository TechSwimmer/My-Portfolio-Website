import { useState } from "react";
import "./styles/styles.css"

import githubLogo from "../assets/icons8-github-50.png"
import contactLogo from "../assets/icons8-contact-50.png"
import linkedinLogo from "../assets/icons8-linked-in-50.png"


const Logobar = () => {

    return (
        <div className="logobar">
            <img className="logo" src={contactLogo} alt="contact"></img>
            <img className="logo" src={githubLogo} alt="github"></img>
            <img className="logo" src={linkedinLogo} alt="linked-in"></img>
        </div>
    )
}

export default Logobar;