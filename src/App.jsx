import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation,useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import Logobar from './components/Logobar'
import Themebar from './components/Themebar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import TodoAppDetails from './components/Projects/TodoAppDetails';
import CvBuilderDetails from './components/Projects/cvBuilderdetails';


const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectPage = location.pathname.startsWith('/Projects/');

    // Handle scrolling to sections when URL hash changes
  useEffect(() => {
    if (!isProjectPage) {
      const sectionId = location.hash.replace('#', ''); // Extract ID from hash
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  }, [location]);

    // Handle navigation from project pages back to home sections
    const navigateToSection = (section) => {
      navigate(`/#${section}`);
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    };
  

  return (
    <div>
        <Navbar navigateToSection = {navigateToSection} />
        <Logobar navigateToSection = {navigateToSection}/>
        <Themebar/>
        <Routes>
          <Route path="/Projects/TodoAppDetails" element={<TodoAppDetails />}/>
          <Route path="/Projects/CvBuilderDetails" element={<CvBuilderDetails />}/>
          
          <Route path="/Projects" element={<Projects />}/>
          
        </Routes>


        {!isProjectPage && (

          <>
            <Home id="home" navigateToSection={navigateToSection} />
            <About id="about" navigateToSection={navigateToSection} />
            <Projects id="project" navigateToSection={navigateToSection} />
            <Contact id="contact" navigateToSection={navigateToSection} />


          </>
        )}


        

        <Footer/>
    </div>
  )
}


const App = () => {


  return(
    
      <AppContent/>
      
  )
}

export default App
