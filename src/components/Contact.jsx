import { useState } from "react";
import "./styles/styles.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload

        const response = await fetch("https://my-portfolio-website-83bd.onrender.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error("Failed to send email");
        }

        const result = await response.json();
        alert(result.message); // Show success/error message
    };

    return (
        <div id="contact" className="contact-container">
            <div className="contact-head">
                <h2 className="contact-header">CONTACT</h2>
                <p className="contact-header-content">
                    Feel free to contact me by submitting the form below, and I will get back to you as soon as possible.
                </p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-field">
                    <label className="contact-form-label" htmlFor="name">Name</label>
                    <input
                        required
                        placeholder="Enter your name"
                        type="text"
                        className="contact-form-input"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="contact-form-field">
                    <label className="contact-form-label" htmlFor="email">E-mail</label>
                    <input
                        required
                        placeholder="Enter your e-mail"
                        type="email"
                        className="contact-form-input"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="contact-form-field">
                    <label className="contact-form-label" htmlFor="message">Message</label>
                    <textarea
                        required
                        placeholder="Enter your message"
                        className="contact-form-input-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="contact-submit-button">SUBMIT</button>
            </form>
        </div>
    );
};

export default Contact;
