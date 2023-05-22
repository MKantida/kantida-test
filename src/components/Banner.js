import React from 'react'
import BG from '../img/BG.png'
import image1 from '../img/image 1.png'
import './Benner.css'

function Banner() {
  return (
<div className="banner">
    <div className="banner1">
          <img src={BG} alt="BG" className="BG"  /> 
          <img src={image1} alt="image1" className="image1"/>
        <div className="text-h1">
            <h1>Your data with </h1>
            <h1> real-time analytics</h1>
        </div>
        <div className="text-h3">
            <h3>Your data withYour data withYour data withYour data with </h3>
            <h3> Your data withYour data withYour data withYour data with </h3>
        </div>
        <div className="button-b1">
            <a href='#'><button className="button">Stsrt free trial</button></a>
        </div>
        <div className="button-b2">           
            <a href='#'><button className="button">Stsrt free trial</button></a>
        </div>

    </div>
</div>
    


  )
}

export default Banner
