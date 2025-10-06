import {usestate, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/AffinaStyles.css"


const AffinaDetails = () => {
    const navigate = useNavigate();
     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    function toggleIndex() {
        const index = document.getElementById('navIndex');
        index.classList.toggle('active');
    }


    return(
         <div className="project-details-container">
               <nav className='fixed-nav'>
                <button className='toggle-nav' onClick={() => toggleIndex()}><div></div><div className="vertical-label">Index</div> </button>
                <ul className='nav-index' id='navIndex'>
                    <li className='nav-index-item'><a href='#project-hero'>Project Heading</a></li>
                    <li className='nav-index-item'><a href='#project-overview'>Project overview</a></li>
                    <li className='nav-index-item'><a href='#tech-stack'>Technology Stack Content:</a></li>
                    <li className='nav-index-item'><a href='#key-features'>Key Features</a></li>
                    <li className='nav-index-item'><a href='#challenges'>Challenges</a></li>
                    <li className='nav-index-item'><a href='#project-impact'>Project Impact & Result</a></li>
                    <li className='nav-index-item'><a href='#api-docs'>API architecture</a></li>
                    <li className='nav-index-item'><a href='#lessons-learned'>Lessons learned</a></li>
                  
                    

                    <li className='nav-index-item'><a href='#projects-cta'>PROJECT LINK</a></li>
                </ul>
            </nav>
            {/* Header Section */}
            <div className="project-hero" id='project-hero'>
                <div className="hero-content">
                    <h1 className="project-title">Affina - Full-Stack Social Media Application</h1>
                    <p className="project-subtitle">A modern MERN stack social platform with real-time interactions</p>
                    <div className="project-links">
                       
                        <button className="btn-secondary">
                            <a href="https://your-affina-demo-link.com" target="_blank" rel="noopener noreferrer">PROJECT LINK</a>
                        </button>
                    </div>
                </div>
            </div>

            {/* Project Overview */}
            <section className="project-overview" id='project-overview'>
                <div className="container">
                    <h2>Project Overview</h2>
                    <div className="overview-grid">
                        <div className="overview-item">
                            <h4>Challenge</h4>
                            <p>Build a scalable social media platform that handles user interactions, media uploads, and real-time engagement while maintaining performance and security.</p>
                        </div>
                        <div className="overview-item">
                            <h4>Solution</h4>
                            <p>Developed a full-stack MERN application with JWT authentication, cloud image storage, and responsive design for seamless cross-platform user experience.</p>
                        </div>
                        <div className="overview-item">
                            <h4>My Role</h4>
                            <p>Full-Stack Developer - Designed, developed, and deployed both frontend and backend components, including database architecture and API integration.</p>
                        </div>
                        <div className="overview-item">
                            <h4>Duration</h4>
                            <p>6 weeks development cycle with ongoing optimizations</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="tech-stack" id='tech-stack'>
                <div className="container">
                    <h2>Technology Stack</h2>
                    <div className="tech-grid">
                        <div className="tech-category">
                            <h4>Frontend</h4>
                            <ul>
                                <li>React 18</li>
                                <li>React Router DOM</li>
                                <li>Context API</li>
                                <li>Tailwind CSS</li>
                                <li>Axios</li>
                                <li>React Icons</li>
                            </ul>
                        </div>
                        <div className="tech-category">
                            <h4>Backend</h4>
                            <ul>
                                <li>Node.js & Express.js</li>
                                <li>MongoDB with Mongoose</li>
                                <li>JWT Authentication</li>
                                <li>Multer & Cloudinary</li>
                                <li>Bcrypt</li>
                                <li>CORS & Security Middleware</li>
                            </ul>
                        </div>
                        <div className="tech-category">
                            <h4>Infrastructure</h4>
                            <ul>
                                <li>MongoDB Atlas</li>
                                <li>Cloudinary CDN</li>
                                <li>Vercel/Netlify (Frontend)</li>
                                <li>Render/Railway (Backend)</li>
                                <li>Git & GitHub</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="key-features" id='key-features'>
                <div className="container">
                    <h2>Key Features Implemented</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h4>🔐 Secure Authentication</h4>
                            <p>JWT-based login/register system with password hashing and protected routes</p>
                        </div>
                        <div className="feature-card">
                            <h4>📱 Post Management</h4>
                            <p>Create, edit, delete posts with text content and image upload capabilities</p>
                        </div>
                        <div className="feature-card">
                            <h4>❤️ Social Interactions</h4>
                            <p>Real-time like/unlike functionality and comment threading system</p>
                        </div>
                        <div className="feature-card">
                            <h4>👤 User Profiles</h4>
                            <p>Personalized profiles with avatar uploads and post history tracking</p>
                        </div>
                        <div className="feature-card">
                            <h4>📱 Responsive Design</h4>
                            <p>Mobile-first approach ensuring seamless experience across all devices</p>
                        </div>
                        <div className="feature-card">
                            <h4>🖼 Media Handling</h4>
                            <p>Efficient image upload and storage using Cloudinary CDN</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Challenges & Solutions */}
            <section className="challenges" id='challenges'>
                <div className="container">
                    <h2>Technical Challenges & Solutions</h2>
                    <div className="challenges-grid">
                        <div className="challenge-item">
                            <h4>State Management Complexity</h4>
                            <p><strong>Challenge:</strong> Managing authentication state and post data across multiple components</p>
                            <p><strong>Solution:</strong> Implemented React Context API for global state management, creating separate contexts for auth and posts</p>
                        </div>
                        <div className="challenge-item">
                            <h4>Image Upload Optimization</h4>
                            <p><strong>Challenge:</strong> Handling large file uploads efficiently without compromising performance</p>
                            <p><strong>Solution:</strong> Integrated Multer for file processing and Cloudinary for optimized image storage and delivery</p>
                        </div>
                        <div className="challenge-item">
                            <h4>Real-time Updates</h4>
                            <p><strong>Challenge:</strong> Ensuring immediate UI feedback for likes and comments</p>
                            <p><strong>Solution:</strong> Implemented optimistic updates with fallback error handling for seamless user experience</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Impact */}
            <section className="project-impact" id='project-impact'>
                <div className="container">
                    <h2>Project Impact & Results</h2>
                    <div className="impact-grid">
                        <div className="impact-item">
                            <h4>Technical Achievement</h4>
                            <p>Successfully built a production-ready social media application handling multiple concurrent users and media uploads</p>
                        </div>
                        <div className="impact-item">
                            <h4>Performance Metrics</h4>
                            <p>Optimized image loading resulting in 40% faster page load times compared to initial implementation</p>
                        </div>
                        <div className="impact-item">
                            <h4>Code Quality</h4>
                            <p>Implemented reusable components and clean architecture allowing for easy feature additions</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* API Documentation */}
            <section className="api-docs" id='api-docs'>
                <div className="container">
                    <h2>API Architecture</h2>
                    <div className="api-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Method</th>
                                    <th>Endpoint</th>
                                    <th>Description</th>
                                    <th>Auth Required</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>POST</td>
                                    <td>/api/auth/register</td>
                                    <td>User registration</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td>POST</td>
                                    <td>/api/auth/login</td>
                                    <td>User authentication</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>/api/auth/me</td>
                                    <td>Get current user</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>POST</td>
                                    <td>/api/posts</td>
                                    <td>Create new post</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>GET</td>
                                    <td>/api/posts</td>
                                    <td>Get all posts</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>PUT</td>
                                    <td>/api/posts/:id/like</td>
                                    <td>Like/unlike post</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>POST</td>
                                    <td>/api/posts/:id/comment</td>
                                    <td>Add comment</td>
                                    <td>Yes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Lessons Learned */}
            <section className="lessons-learned" id='lessons-learned'>
                <div className="container">
                    <h2>Lessons Learned</h2>
                    <div className="lessons-grid">
                        <div className="lesson-item">
                            <h4>🔧 Technical Insights</h4>
                            <p>Deepened understanding of JWT authentication flow and secure API design principles</p>
                        </div>
                        <div className="lesson-item">
                            <h4>📈 Performance Optimization</h4>
                            <p>Learned importance of image compression and CDN integration for media-heavy applications</p>
                        </div>
                        <div className="lesson-item">
                            <h4>🎯 User Experience</h4>
                            <p>Implemented progressive loading states and error boundaries for better UX</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="project-cta" id='projects-cta'>
                <div className="container">
                    <h2>Explore the Project</h2>
                    <p>Check out the live application or dive into the code to see the implementation details.</p>
                    <div className="cta-buttons">
                        <button className="btn-primary">
                            <a href="https://github.com/your-username/affina" target="_blank" rel="noopener noreferrer">VIEW SOURCE CODE</a>
                        </button>
                        <button className="btn-secondary">
                            <a href="https://your-affina-demo-link.com" target="_blank" rel="noopener noreferrer">EXPLORE LIVE DEMO</a>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default AffinaDetails;