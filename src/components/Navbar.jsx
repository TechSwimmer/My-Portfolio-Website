import { useState } from "react";
import './styles/styles.css'
import profilePic from '../assets/cool-profile-pictures-monkey-face-0jxwmq6bpm3hs9cb.jpg'

const Navbar = () => {
    

    return (
        <div className="navbar">
            <div className="navbar-left">
                <img className="profilePic" src={profilePic}></img>
                <h2>NIKHIL PILLAI</h2>
            </div>
            <div className="navbar-right">
            <h4> <a href="#">HOME</a></h4>
            <h4> <a href="#">ABOUT</a></h4>
            <h4> <a href="#">PROJECT</a></h4>
            <h4> <a href="#">CONTACT</a></h4>
            </div>
            
        </div>
    )
}


export default Navbar;