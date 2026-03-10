import "./styles/styles.css"
import "./styles/home.css"
 
const Home = ({navigateToSection}) => {
    return (
        <div id="home" className="home-container">
            <h1 className="home-head">Nikhil Pillai | Full-Stack MERN Developer</h1>
            <p className="home-content">
                I build scalable full-stack web applications from idea to deployment using React, Node.js, Express, and MongoDB.
                I have shipped three portfolio products with authentication, real-time UI updates, and production deployment.
            </p>
            <button type="button" className="home-projects-button" onClick={() => navigateToSection("project")}>VIEW PROJECTS</button>
            <p className="home-team-line">
                I can help your team ship reliable features faster with clean, maintainable code.
            </p>
        </div>
    )
}



export default Home;
