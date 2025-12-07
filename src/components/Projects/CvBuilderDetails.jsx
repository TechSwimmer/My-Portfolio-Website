import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import cvPreviewImg from '../../assets/cvShotpreview.png'
import cvFormImg from '../../assets/cvShotformcontent.png'
import cvStyleImg from '../../assets/cvShotEditStyle.png'
import cvLayoutImg from '../../assets/cvShotLayout.png'
import cvFullscreenImg from '../../assets/fullscreenpreviewshot.png'

import "../styles/cvBuilderstyles.css"


const CvBuilderDetails = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  const [indexOpen,setIndexOpen] = useState(false)
    const toggleIndex = () => {
        setIndexOpen(prev => !prev)
    } ; 

    return (
        <div className="cvbuilder-container">
            <nav className='fixed-nav'>
                <button className='toggle-nav' onClick={() => toggleIndex()}><div></div><div className='vertical-label'>Index</div> </button>
               
                     <div  className={`nav-index ${indexOpen ? "active" : ""}`} id='navIndex'>
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
                <h2 className="cvbuilder-heading">CV-BAKER : Full-stack resume builder</h2>
                <p className="cvbuilder-heading-content">CV Baker is a responsive and interactive resume-building application
                    that allows users to create, customize, and download professional CVs with ease. It is a
                    React-based app designed to offer real-time preview and styling features,
                    making resume creation seamless for users. The app provides multiple layouts and customization
                    options, ensuring flexibility for users with different resume needs. From structured data input
                    to final PDF download, every feature is built with user experience and functionality in mind.</p>
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
                <h3>CHALLENGES AND SOLUTIONS CONTENT:</h3>
                <div className='challenge-item'>
                    <h4>Real-time Preview Synchronization</h4>
                    <p><strong>Challenge : </strong>Maintaining performance while synchronizing complex form state with
                        the preview component across multiple layout templates.</p>
                    <p><strong>Solution : </strong>Implemented React's useMemo and debounced input handling to optimize
                        re-renders, reducing latency by 70%.</p>
                </div>
                <div className='challenge-item'>
                    <h4>PDF Styling Consistency</h4>
                    <p><strong>Challenge : </strong>Ensuring CSS styles translated accurately from screen to PDF format
                        across different browsers.</p>
                    <p><strong>Solution : </strong>Created print-specific CSS and implemented client-side rendering
                        techniques to maintain visual fidelity.</p>
                </div>
            </div>

            <div className="cvbuilder-content" id="cvbuilder-content">
                <h3>PROJECT OVERVIEW</h3>
                <div>
                    <h4>Real-Time CV Preview</h4>
                    <div className="cvbuilder-content-img">

                        <img src={cvPreviewImg} className="cvbuilder-project-image-preview" alt="project-image"></img>
                    </div>

                    <div className="cvbuilder-content-img-overview">
                        <p>The preview section serves as the visual representation of the CV, updating live as users fill
                            out the form or adjust styles. This area occupies the right side of the screen and is the core
                            feedback mechanism that reflects the user’s data and design preferences in real time. The preview
                            is built using a flexible layout system that adapts to different screen sizes and resume formats.
                            Users can hover over specific sections within the preview to highlight editable areas, enhancing
                            interactivity and making it easier to understand how changes in the form or style tabs affect the
                            final result. The use of useRef ensures that the preview area can be programmatically accessed
                            for PDF generation and scrolling behavior, while CSS modules and inline styles keep the
                            structure clean and customizable.</p>
                    </div>
                    <div className='cvbuilder-form-content' id="cvbuilder-form-content">
                        <div className='cvbuilder-form-content-heading'>
                            <h4>Dynamic Form Input System</h4>
                        </div>
                        <div className='cvbuilder-form-content-content'>
                            <div className="cvbuilder-content-img">

                                <img src={cvFormImg} className="cvbuilder-project-image-left" alt="project-image"></img>
                            </div>
                            <p>On the left side of the app, users interact with the FormSection—a cleanly structured panel
                                where they can enter personal information, education history, work experience, and other CV
                                details. Each field updates the CV preview in real time. The form is broken into clearly visible
                                sections, and users can control the visibility of these sections to fine-tune their final resume.
                                This section also adapts to the active tab, which can be toggled between "Content" and "Style".</p>
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
                            <p>When users switch to the StylePages tab, they are presented with styling options like color themes,
                                font choices, spacing, and layout refinements. This tab shares the left panel space with the
                                FormSection, and a "Download as PDF" and "Edit" button are consistently available on the screen,
                                whether users are in the form or style view. This ensures users can access full preview or
                                resume customization options at any time without navigating away from their progress.</p>
                        </div>

                    </div>


                    <div className='cvbuilder-layout-img-content id="cvbuilder-layout-img-content'>
                        <div className='cvbuilder-layout-img-content-heading' id="cvbuilder-layout-img-content-heading">
                            <h4>Multiple Layout Templates</h4>
                        </div>
                        <div className='cvbuilder-layout-img-content-content'>
                            <p>The right side of the interface hosts the live CV preview, which dynamically reflects user
                                input and styling changes. Here, a layout slider allows users to choose from multiple CV
                                layouts, each with a different structure and design. The layout selector is fully dynamic,
                                meaning that selecting a new layout instantly updates the preview and automatically
                                switches the style editor to match the layout’s configuration. Each layout has a
                                corresponding style editor to provide targeted customization for that particular design.</p>
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
                            <p>In full-screen preview mode, users get an uninterrupted view of the resume. From here,
                                they can use the Download as PDF feature, which captures the CV preview as an image
                                using html2canvas, and generates a high-quality PDF via jsPDF. The app applies temporary
                                styling changes to ensure that the downloaded version appears clean and print-ready.
                                A dedicated print media query ensures buttons and unnecessary UI elements are hidden.
                                Clicking the Edit button while in full preview seamlessly brings the user back to the
                                editable form or style interface to make changes.</p>
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