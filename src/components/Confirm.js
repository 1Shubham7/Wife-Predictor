import React, { useState } from "react";
import './bestbutton.css'

function ConfirmationCheckbox() {

  const buttonStyle = {
    backgroundColor: '#132a13',
    color:"yellowgreen",
    border: "3px solid currentcolor" ,
    boxShadow:"0 0 3px currentcolor",
    borderRadius: '20px',
  }





  const [isActive, setIsActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  function handleClick(){
    if(isChecked===false){
        setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }

  function checkboxon(){
    setIsActive(!isActive);
  }

  const play = () => {
    console.log('play');
  }


  const wifestyle2 = {
    margin: '0',
    color: 'white',
    background:'yellow',
    position:'relative',
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    padding: "100px 20vw",
    minHeight: '400px',
    // fontFamily:
  }


  return (
    <>

      {!isChecked && (
        <div >
        <input type="checkbox" onChange={checkboxon}/>
          Whatever Wife I get I will accept her for rest of my life
          <p></p>
          <button disabled={!isActive} style={buttonStyle} id='wifeplay' onClick={handleClick} type="button" class="btn letsgo btn-success ">Let's go</button>
          

      </div>
      )} 

        {isChecked && ( 
        <section style={wifestyle2} >
        <h1 style={{textDecoration:'underline'}}>Ready!</h1>
        <p>You have agreed to accept the women about to come as your future wife. Backing away from it would mean that you are not a man. This means that you must be a gay.</p>
        <div href="#" className='bestbutton' style={{ '--clr': '#6eff3e' }} onClick={play}><span>Who's My Wife</span><i></i></div>
        </section>)}
    </>
  );
}

export default ConfirmationCheckbox;
