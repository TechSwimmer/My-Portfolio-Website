import { useState } from 'react'
import Navbar from './components/Navbar'
import Logobar from './components/Logobar'
import Themebar from './components/Themebar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {


  return (
    <div>
      <Navbar/>
      <Logobar/>
      <Themebar/>
      <Home/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
