import React from 'react'
import BG from '../img/BG.png'
import image1 from '../img/image 1.png'
import './Benner.css'
import { BsStars } from "react-icons/bs"

function Banner() {
  return (
    
<div className="Banner">
    
    <div className="banner1">
          <img src={BG} alt="BG" className="BG"  /> 
          <img src={image1} alt="image1" className="image1"/>

        <div className="button-b0">           
            <button className="button"><b><BsStars /> v3.1 released. <a href='#'>Learn more</a></b></button>
        </div>

        <div className="text-h1">
            <h1>Your data with </h1>
            <h1> real-time analytics</h1>
        </div>
        
        <div className="text-h3">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam velit iure aut delectus sapiente omnis adipisci expedita ipsam, possimus impedit minus vero dolor?</h3>

        </div>
        <div className="button-b1">
            <a href='#'><button className="button">Stsrt free trial</button></a>
        </div>
        <div className="button-b2">           
            <a href='#'><button className="button">Learn more</button></a>
        </div>

    </div>
</div>
    


  )
}

export default Banner
