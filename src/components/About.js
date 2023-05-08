import React from 'react'
import './photo.css'

export default function About() {
  return (
    <>
    <div  className="superClass">
    
    <div className="circular-image" >
    <img
        src="CVmin.jpg"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "5px solid black",
          boxSizing: "border-box",
          animation: "border-pulse 2s infinite",
        }}
        alt="Shubham Singh"
      />

    </div >
    <div className="text" style={{textAlign: 'center', justifyContent:'center'}}>
      <h1>About Me</h1>
      
      This is Shubham Singh Mahar, I am First Year Undergrad persuing Bachelors in Technology with Computer Science Eng. major from a tier-3 college in Ghaziabad.
      I belong to Haldwani, Nanital, Uttarakhand.
      This Website is made using React 18.
      The code is available in this github reposetory: aaaa
    </div>
    </div>
    
    </>
  );
}
