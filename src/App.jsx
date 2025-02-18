import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'
import Logobar from './components/Logobar'
import Themebar from './components/Themebar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import TodoAppDetails from './components/Projects/TodoAppDetails';


const AppContent = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/Projects/');


  return (
    <div>
        <Navbar/>
        <Logobar/>
        <Themebar/>

        {!isProjectPage && (

          <>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>


          </>
        )}


        <Routes>
          <Route path="/Projects/TodoAppDetails" element={<TodoAppDetails />}/>
        </Routes>


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
