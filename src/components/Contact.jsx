import { useState, useEffect } from "react";
import "./styles/styles.css"

const Contact = () => {


    return (
        <div className="contact-container">
            <div className="contact-head">
            <h2 className="contact-header">CONTACT</h2>
            <p className="contact-header-content">Feel free to Contact me by submitting the form
                 below and I will get back to you as soon as possible</p>
            </div>
            <form className="contact-form">
                <div className="contact-form-field">
                    <label className="contact-form-label" htmlFor="name">Name</label>

                    <input required placeholder="Enter your name" type="text" className="contact-form-input" name="Name">

                    </input>

                </div>
                <div className="contact-form-field">
                    <label className="contact-form-label" htmlFor="email">E-mail</label>

                    <input required placeholder="Enter your e-mail" type="email" className="contact-form-input" name="email">
                        
                    </input>

                </div>
                <div className="contact-form-field">
                    <label className="contact-form-label" htmlFor="message">Message</label>

                    <textarea required placeholder="Enter your message"  className="contact-form-input-message" name="message">
                        
                    </textarea>

                </div>
                <button type="submit" className="contact-submit-button">SUBMIT</button>
            </form>
        </div>
    )
}


export default Contact;
