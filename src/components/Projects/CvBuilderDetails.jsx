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

    return (
        <div className="cvbuilder-container">
            <div className="cvbuilder-header">
                <h2 className="cvbuilder-heading">CV-BAKER</h2>
                <p className="cvbuilder-heading-content">The CV Baker is a responsive and interactive resume-building application
                    that allows users to create, customize, and download professional CVs with ease. It is a
                    single-page React-based app designed to offer real-time preview and styling features, 
                    making resume creation seamless for users. The app provides multiple layouts and customization
                    options, ensuring flexibility for users with different resume needs. From structured data input
                    to final PDF download, every feature is built with user experience and functionality in mind.</p>
                <button className="cvbuilder-heading-btn"><a href="https://github.com/TechSwimmer/cv-Builder">PROJECT LINK</a></button>
            </div>
            <div className="cvbuilder-content">
                <h3>PROJECT OVERVIEW</h3>
                <div>
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
                    <div className='cvbuilder-form-content'>
                        <div className="cvbuilder-content-img">

                            <img src={cvFormImg} className="cvbuilder-project-image-left" alt="project-image"></img>
                        </div>
                        <p>On the left side of the app, users interact with the FormSection—a cleanly structured panel
                            where they can enter personal information, education history, work experience, and other CV
                            details. Each field updates the CV preview in real time. The form is broken into clearly visible
                            sections, and users can control the visibility of these sections to fine-tune their final resume. 
                            This section also adapts to the active tab, which can be toggled between "Content" and "Style".</p>
                    </div>
                    <div className="cvbuilder-stylepage-content">
                    
                        <div className="cvbuilder-content-img">

                            <img src={cvStyleImg} className="cvbuilder-project-image-left" alt="project-image"></img>
                        </div>
                        <p>When users switch to the StylePages tab, they are presented with styling options like color themes, 
                        font choices, spacing, and layout refinements. This tab shares the left panel space with the 
                        FormSection, and a "Download as PDF" and "Edit" button are consistently available on the screen, 
                        whether users are in the form or style view. This ensures users can access full preview or 
                        resume customization options at any time without navigating away from their progress.</p>
                    </div>

                    
                    <div className='cvbuilder-layout-img-content'>

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
                    <div className='cvbuilder-fullscreen-img-content'>
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
            <div className="cvbuilder-tools">
                <div className="cvbuilder-tool-head">
                    <h3>Tools used</h3>
                </div>

                <div className="cvbuilder-toolbox">
                    <div className="cvbuilder-tool">React</div>
                    <div className="cvbuilder-tool">Vite</div>
                    <div className="cvbuilder-tool">JavaScript</div>
                    <div className="cvbuilder-tool">HTML</div>
                    <div className="cvbuilder-tool">CSS</div>
                    <div className="cvbuilder-tool">html2canvas</div>
                    <div className="cvbuilder-tool">jsPDF</div>

                </div>
            </div>
            <div className="cvbuilder-links">
                <button type="click" className="cvbuilder-link-btn"><a href="https://resume-baker.netlify.app/">PROJECT LINK</a></button>
                <button type="click" className="cvbuilder-link-btn" onClick={() => navigate('/Home')}>GO BACK</button>

            </div>
        </div>
    )
}

export default CvBuilderDetails;