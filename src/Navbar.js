import React from 'react'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import OurServices from './OurServices';
import Doctors from './Doctors';
import Patient from './Patient';
import SignUp from './SignUp';
import Logo from './images/favicon4.png';


import './Navbar.css';




function Navbar() {
  return (
    
     <>
     
     <BrowserRouter>
    <nav class="navbar navbar-expand-sm sticky-top navbar-light bg-light">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src={Logo} alt="" width="60" height="60" className='img-logo'/>
    </a>
   
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="./">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="./about">Sloat Booking</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="./contact">Get All Doctors</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="./OurServices">Our Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="./Doctors">Doctors</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="./Patient">Patient</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link" to="./SignUp">SignUp</Link>
        </li>
      </ul>
    </div>

  
</nav>
     <Routes>
       <Route path="/"  element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/OurServices" element={<OurServices/>} />
       <Route path="/Doctors" element={<Doctors/>} />
       <Route path="/Patient" element={<Patient/>} />
       <Route path="/SignUp" element={<SignUp/>} />
     </Routes>
    </BrowserRouter>




     </> 
    
  )
}

export default Navbar
