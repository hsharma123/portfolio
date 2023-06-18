import React from 'react'
import "./assets/css/App.css";
import Home from './Page/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Page/About';
import Project from './Page/Project';
import Contact from './Page/Contact';

const App = () => {
  return (
    <div className="App">

      <Router>
      
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path= "/project" element={<Project/>}></Route>
                <Route path= "/contact" element={<Contact />}></Route>
            </Routes>
       
      </Router>
    </div>
  )
}

export default App