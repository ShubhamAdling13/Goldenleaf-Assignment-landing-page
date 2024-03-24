import React from 'react'
import photu from "../images/Hero Images.png"
import logu from "../images/Logo/Sylvanscape Logo.png"
import "./Home.css"
function Home(){
   

  return (
    <div id='home' className='hh' >
        <div className='photu'> <img src={photu}  alt="" /></div>

        <div className='info'>   
        
         <div><button>Book a Site Visit</button></div>
         <div className='p1'><p>Welcome to </p></div>
         <div> <img src={logu } alt="" /></div>
         <div className='p2' ><p >Your Ultimate Destination for Premium Plots in Pune!</p></div>
        
        
        </div>
    </div>
  )
}

export default Home