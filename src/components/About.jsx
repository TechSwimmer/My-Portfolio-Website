import "./styles/styles.css";
import "./styles/about.css";

const About = ({navigateToSection}) => {

    return (
        <div id="about" className="about-container">
            
            <section className="about-content-skills">   
                <div className="about-content">
                    <h4>Get to know me!</h4>
                    <ul className="about-value-list">
                        <li>I build end-to-end features: UI, API design, database modeling, and deployment.</li>
                        <li>I focus on maintainable architecture, performance, and user-friendly product experience.</li>
                        <li>I strengthen implementation quality through regular problem-solving practice (5 kyu, 140+ Codewars challenges).</li>
                    </ul>
                    <p className="about-looking-line">
                        Currently looking for full-time full-stack roles where I can contribute to product delivery and engineering quality.
                    </p>
                        <button type="button" onClick={() => navigateToSection("contact")} className="about-contact-tab">CONTACT</button>
                </div>
                <div className="about-skills">
                    <h4>My Skills</h4>
                    <div className="skill-tabs">
                        <div className="frontend-tabs">
                            <div className="skill-tabs-heading">
                                <h4>Frontend</h4>
                            </div>
                            <div className="skill-tabs-items">
                                <div className="skill-tab">HTML</div>
                                <div className="skill-tab">CSS</div>
                                <div className="skill-tab">JAVASCRIPT</div><div className="skill-tab">REACT</div>
                                <div className="skill-tab">BOOTSTRAP</div>
                                <div className="skill-tab">TAILWIND</div>
                                <div className="skill-tab">RESPONSIVE DESIGN</div>
                            </div>
                            
                        </div>
                        <div className="backend-tabs">
                            <div className="skill-tabs-heading">
                                <h4>Backend</h4>
                            </div>
                            <div className="skill-tabs-items">
                                <div className="skill-tab">NODE.JS</div>
                                <div className="skill-tab">EXPRESS</div>
                            </div>
                        </div>
                        <div className="database-tabs">
                            <div className="skill-tabs-heading">
                                <h4>Database</h4>
                            </div>
                            <div className="skill-tabs-items">
                                 <div className="skill-tab">MONGO-DB</div>
                            </div>
                        </div>
                        <div className="authentication-security-tabs">
                            <div className="skill-tabs-heading">
                                <h4>Authentication & Security</h4>
                            </div>
                            <div className="skill-tabs-items">
                                <div className="skill-tab">JWT</div>
                                <div className="skill-tab">BCRYPT</div>
                            </div>
                        </div>
                        <div className="tools-deployement-tabs">
                            <div className="skill-tabs-heading">
                                <h4>Tools & Deployement</h4>
                            </div>
                            <div className="skill-tabs-items">
                                <div className="skill-tab">GIT</div>
                                <div className="skill-tab">GITHUB</div>
                                <div className="skill-tab">CLOUDINARY</div>
                                <div className="skill-tab">NETLIFY</div>
                                <div className="skill-tab">RENDER</div>                        
                                <div className="skill-tab">AXIOS</div>                        
                                <div className="skill-tab">VITE</div>
                            </div>
                        </div>
                        
                      
                    </div>
                </div>
            </section>
        </div>
    )
}


export default About;
