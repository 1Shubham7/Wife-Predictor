import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Wife from './components/Wife';
import Footer from './components/Footer';
import Confirm from './components/Confirm'
import HowCanYouHelp from './components/HowCanYouHelp';
import './components/My.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/About'
import React, { useState } from "react";



function App() {


const refreshAboutPage = ()=>{
  setTimeout(() => {
    window.location.reload()
  }, 50);

}



  return (
    <div className="App">
      <Router>
      
    
  <div className="spacer layer1"></div>
      <nav className='mainnav'>
        <ul>
          
            
        <a  href={window.location.pathname==='/about'? '/' : '#wifeplay'} style={{color:'green'}}>
        <li className="news" onClick={window.location.pathname==='/about'?refreshAboutPage:null}>{window.location.pathname==='/' ? 'Play' : 'Home'}</li>
      </a>
          <a href="https://github.com/1Shubham7" target="_blank" rel="noreferrer"><li  className="news">GitHub</li></a>
          <a href="https://www.linkedin.com/in/shubham-singh-mahar-5a002b20b/" target="_blank" rel="noreferrer" ><li  className="news">LinkedIn</li></a>
          <Link to="/about" onClick={refreshAboutPage}><li  className="news">About</li></Link>
          
        </ul>
      </nav>
      

      <Routes>
  <Route path="/about" element={<About />} />
  {/* other routes here */}

    <Route path='/' element={<>
    <Wife></Wife>
      <Confirm></Confirm>
      <HowCanYouHelp></HowCanYouHelp>
      </>} />

</Routes>
      
    
      
      <Footer></Footer>
      
      </Router>
    </div>
  );
}

export default App;
