import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import cvPreviewImg from '../../assets/portfolio-builder-preview.png'
import cvFormImg from '../../assets/PORTFOLIO-BUILDER-FORMCONTENT.png'
import cvStyleImg from '../../assets/cvShotEditStyle.png'
import cvLayoutImg from '../../assets/portfolio-builder-layout.png'
import cvFullscreenImg from '../../assets/PORTFOLIO-BUILDER-FULLSCREEN.png'

import "../styles/cvBuilderstyles.css"


const CvBuilderDetails = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [indexOpen, setIndexOpen] = useState(false)
    const toggleIndex = () => {
        setIndexOpen(prev => !prev)
    };

    return (
        <div className="cvbuilder-container">
            <nav className='fixed-nav'>
                <button className='toggle-nav' onClick={() => toggleIndex()}><div></div><div className='vertical-label'>Index</div> </button>

                <div className={`nav-index ${indexOpen ? "active" : ""}`} id='navIndex'>
                    <a href='#project-highlights' onClick={toggleIndex}>PROJECT HIGHLIGHTS</a>
                    <a href='#technical-implementation-container' onClick={toggleIndex}>TECHNICAL IMPLEMENTATION CONTENT</a>
                    <a href='#backend-architecture-container' onClick={toggleIndex}>BACKEND ARCHITECTURE CONTENT</a>
                    <a href='#challenges-container' onClick={toggleIndex}>CHALLENGES AND SOLUTIONS CONTENT</a>
                    <a href='#cvbuilder-content' onClick={toggleIndex}>Real-Time CV Preview</a>
                    <a href='#cvbuilder-form-content' onClick={toggleIndex}>Dynamic Form Input System</a>
                    <a href='#cvbuilder-stylepage-content' onClick={toggleIndex}>Style Customization Panel</a>
                    <a href='#cvbuilder-layout-img-content-heading' onClick={toggleIndex}>Multiple Layout Templates</a>
                    <a href='#cvbuilder-fullscreen-img-content' onClick={toggleIndex}>Full-Screen Preview & PDF Export</a>
                    <a href='#cvbuilder-tools' onClick={toggleIndex}>Technology Stack Content</a>
                    <a href='#future-container' onClick={toggleIndex}>FUTURE ENHANCEMENTS CONTENT</a>

                    <a href='#cvbuilder-links'>PROJECT LINK</a>
                </div>


            </nav>
            <div className="cvbuilder-header">
                <h2 className="cvbuilder-heading">ResumeBaker : Full-stack resume builder</h2>
                <p className="cvbuilder-heading-content">ResumeBaker is a responsive and interactive resume-building application
                    that allows users to create, customize, and download professional CVs with ease. It is a
                    React-based app designed to offer real-time preview and styling features,
                    making resume creation seamless for users. The app provides multiple layouts and customization
                    options, ensuring flexibility for users with different resume needs. From structured data input
                    to final PDF download, every feature is built with user experience and functionality in mind.</p>
                <p className="cvbuilder-heading-content">Most resume builders either lack customization, perform poorly with real-time previews,
                    or generate PDFs that don’t match what users see on screen.
                    I built CV Baker to solve all three problems — performance, layout consistency,
                    and user-controlled customization — in a single full-stack application.</p>
                <button className="cvbuilder-heading-btn"><a href="https://resume-baker.netlify.app/">lIVE PROJECT LINK</a></button>
            </div>
            <div className='project-highlights' id="project-highlights">
                <h3>PROJECT HIGHLIGHTS</h3>
                <div className='highlight-content'>
                    <div className='highlight-item-1'>
                        <h4>Full-Stack Architecture</h4>
                        <p>MERN Stack (MongoDB, Express, React, Node.js)</p>
                    </div>
                    <div className='highlight-item-2'>
                        <h4>User Authentication</h4>
                        <p>JWT-based auth with guest access</p>
                    </div>
                    <div className='highlight-item-3'>
                        <h4>Real-time Preview</h4>
                        <p>Instant CV updates as users type</p>
                    </div>
                    <div className='highlight-item-4'>
                        <h4>PDF Generation</h4>
                        <p>Client-side PDF export with jsPDF</p>
                    </div>

                </div>

            </div>

            <div className='technical-implementation-container' id="technical-implementation-container">
                <h3>TECHNICAL IMPLEMENTATION CONTENT:</h3>
                <div className='tech-imp-item'>
                    <h4>Dual panel interface:</h4>
                    <p>Built a responsive two-panel layout using React state management to synchronize form inputs with
                        the live preview. Implemented complex state logic to handle multiple CV sections, conditional
                        rendering, and real-time updates.</p>
                    <ul>
                        <li>React Hooks (useState, useEffect, useRef) for state management</li>
                        <li>Component-based architecture for reusability</li>
                        <li>Real-time form validation and error handling</li>
                    </ul>
                </div>
                <div className='tech-imp-item'>
                    <h4>Dynamic Styling System:</h4>
                    <p>Developed a comprehensive style customization engine allowing users to modify colors, fonts, and
                        layouts. The system persists styling preferences and applies them across different CV templates.</p>
                    <ul>
                        <li>CSS-in-JS with dynamic style injection</li>
                        <li>Template system supporting multiple layout options</li>
                        <li>Style persistence in MongoDB database</li>
                    </ul>
                </div>
                <div className='tech-imp-item'>
                    <h4>PDF Generation & Export:</h4>
                    <p>Implemented client-side PDF generation using jsPDF and html2canvas, ensuring pixel-perfect
                        conversion of HTML/CSS to printable PDF format. Added optimization for ATS-friendly formatting.</p>
                    <ul>
                        <li>jsPDF for PDF document creation</li>
                        <li>html2canvas for accurate HTML to image conversion</li>
                        <li>Custom PDF styling for print optimization</li>
                    </ul>
                </div>
            </div>

            <div className='backend-architecture-container' id="backend-architecture-container">
                <h3>BACKEND ARCHITECTURE CONTENT:</h3>
                <div className='back-arch-item'>
                    <h4>RESTful API Design</h4>
                    <p>Built with Node.js and Express, featuring JWT authentication, secure password hashing
                        with bcrypt, and RESTful endpoints for CRUD operations on user data and CV templates.</p>
                </div>
                <div className='back-arch-item'>
                    <h4>Database Management</h4>
                    <p>MongoDB with Mongoose ODM for storing user profiles, CV data, and styling preferences.
                        Implemented data relationships for users to manage multiple resumes.</p>
                </div>
                <div className='back-arch-item'>
                    <h4>Authentication System</h4>
                    <p>Dual-mode access supporting both registered users (with data persistence) and guest users
                        (temporary sessions). Secure token-based authentication with protected routes.</p>
                </div>
            </div>

            <div className='challenges-container' id="challenges-container">
                <h3>Key engineering challenges solved : </h3>
                <ul>
                    <li className='challenge-item'>Prevented full re-renders during live CV typing using memoization and debounced updates</li>
                    <li className='challenge-item'>Designed a dual-render system (HTML preview + React-PDF export) while keeping layout parity</li>
                    <li className='challenge-item'>Built reusable layout templates that share data but differ structurally</li>
                    <li className='challenge-item'>Handled large DOM trees efficiently during PDF generation</li>
                </ul>
            </div>

            <div className="cvbuilder-content" id="cvbuilder-content">
                <h3>PROJECT OVERVIEW</h3>
                <div>
                    <h4>Real-Time CV Preview</h4>
                    <div className="cvbuilder-content-img">

                        <img src={cvPreviewImg} className="cvbuilder-project-image-preview" alt="project-image"></img>
                    </div>

                    <div className="cvbuilder-content-img-overview">
                        <p>CV Baker is a full-stack resume builder designed to handle real-time editing,
                            layout switching, and PDF export without performance degradation.</p>
                        <p>The preview panel renders a live representation of the CV as users type,
                            while avoiding full re-renders on every keystroke.
                            The system separates draft input state from preview state and uses memoized
                            layout components to keep interactions smooth even as the document grows.</p>
                    </div>
                    <div className='cvbuilder-form-content' id="cvbuilder-form-content">
                        <div className='cvbuilder-form-content-heading'>
                            <h4>Dynamic Form Input System</h4>
                        </div>
                        <div className='cvbuilder-form-content-content'>
                            <div className="cvbuilder-content-img">

                                <img src={cvFormImg} className="cvbuilder-project-image-left" alt="project-image"></img>
                            </div>
                            <p>The left panel uses a structured, section-based form system to collect CV data.
                                Each section is independently controlled, allowing users to toggle visibility
                                while maintaining synchronization with the preview in real time.</p>
                        </div>


                    </div>
                    <div className="cvbuilder-stylepage-content" id="cvbuilder-stylepage-content">
                        <div className='cvbuilder-stylepage-content-heading'>
                            <h4>Style Customization Panel</h4>
                        </div>
                        <div className='cvbuilder-stylepage-content-content'>
                            <div className="cvbuilder-content-img">

                                <img src={cvStyleImg} className="cvbuilder-project-image-left" alt="project-image"></img>
                            </div>
                            <p>The style editor allows users to modify colors, fonts, and spacing per layout.
                                Each CV layout is paired with its own style configuration, ensuring changes
                                remain scoped and predictable across templates.(This part is still being worked upon)</p>
                        </div>

                    </div>


                    <div className='cvbuilder-layout-img-content id="cvbuilder-layout-img-content'>
                        <div className='cvbuilder-layout-img-content-heading' id="cvbuilder-layout-img-content-heading">
                            <h4>Multiple Layout Templates</h4>
                        </div>
                        <div className='cvbuilder-layout-img-content-content'>
                            <p>Users can switch between multiple resume layouts without losing data.
                                Each layout consumes the same structured CV data but renders it differently,
                                demonstrating a shared-data / multiple-view architecture.</p>
                            <div className="cvbuilder-content-img">

                                <img src={cvLayoutImg} className="cvbuilder-project-image-right" alt="project-image"></img>
                            </div>
                        </div>



                    </div>
                    <div className='cvbuilder-fullscreen-img-content' id="cvbuilder-fullscreen-img-content">
                        <div className='cvbuilder-fullscreen-img-content-heading'>
                            <h4>Full-Screen Preview & PDF Export</h4>
                        </div>
                        <div className='cvbuilder-fullscreen-img-content-content'>
                            <div className="cvbuilder-content-img">

                                <img src={cvFullscreenImg} className="cvbuilder-fullscreen-image" alt="project-image"></img>
                            </div>
                            <p>Full-screen mode renders the CV using React-PDF for accurate pagination and export.
                                To avoid UI freezes during editing, PDF rendering is disabled during live typing
                                and activated only in preview or download mode.
                                This approach balances visual fidelity with performance.</p>
                        </div>


                    </div>
                </div>
            </div>
            <div className="cvbuilder-tools" id="cvbuilder-tools">
                <div className="cvbuilder-tool-head">
                    <h3>Technology Stack Content:</h3>
                </div>

                <div className="cvbuilder-toolbox">
                    <div className='toolbox-items'>
                        <h4>Frontend </h4>
                        <div className='toolbox-item'>
                            <div className="cvbuilder-tool">React</div>
                            <div className="cvbuilder-tool">JavaScript (E.S 6+)</div>
                            <div className="cvbuilder-tool">HTML5</div>
                            <div className="cvbuilder-tool">CSS3</div>
                            <div className="cvbuilder-tool">React Router</div>
                        </div>

                    </div>
                    <div className='toolbox-items'>
                        <h4>Backend </h4>
                        <div className='toolbox-item'>
                            <div className="cvbuilder-tool">Node.js</div>
                            <div className="cvbuilder-tool">Express.js</div>
                            <div className="cvbuilder-tool">MongoDB</div>
                            <div className="cvbuilder-tool">Mongoose</div>
                            <div className="cvbuilder-tool">JWT</div>
                            <div className="cvbuilder-tool">bcrypt</div>
                        </div>

                    </div>
                    <div className='toolbox-items'>
                        <h4>Libraries & Tools </h4>
                        <div className='toolbox-item'>
                            <div className="cvbuilder-tool">html2canvas</div>
                            <div className="cvbuilder-tool">jsPDF</div>
                            <div className="cvbuilder-tool">React-PDF</div>
                            <div className="cvbuilder-tool">Vite</div>
                            <div className="cvbuilder-tool">Git</div>
                        </div>

                    </div>








                </div>
            </div>

            <div className='future-container' id="future-container">
                <h3>FUTURE ENHANCEMENTS CONTENT </h3>
                <ul>
                    <li>Mobile-responsive design implementation (In-Progress)</li>
                    <li> ATS (Applicant Tracking System) optimization scoring</li>
                    <li>Collaborative editing and sharing features</li>
                    <li>Template marketplace with user submissions</li>
                </ul>
            </div>
            <div className="cvbuilder-links" id="cvbuilder-links">
                <button type="click" className="cvbuilder-link-btn"><a href="https://github.com/TechSwimmer/cv-Builder">GITHUB REPO</a></button>
                <button type="click" className="cvbuilder-link-btn" onClick={() => navigate('/Home')}>GO BACK</button>

            </div>
        </div>
    )
}

export default CvBuilderDetails;