import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Books from './components/Books';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import LoginForm from './components/Login';
import Footer from './components/Footer';
import Game from './components/Game'; // Add this import for the game component
import './index.css'


const App = () => {
    
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      
      <Route path="/" element={<Home/>}></Route>
      <Route path="/books" element={<Books/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/game" element={<Game/>}></Route>
      <Route path="/login" element={<LoginForm/>}></Route>
     
    </Routes>
    <Footer/>
    </Router>
  
   
    </>
  )
      
  
};

export default App;
