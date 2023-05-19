import React from 'react'
import BG from '../img/BG.png'
import image1 from '../img/image 1.png'
import './Benner.css'

function Banner() {
  return (
    <div className="banner">
         <img src={BG} alt="BG" className="BG"  /> 
         <img src={image1} alt="image1" className="image1"  />
            <div className="container">
                <div className="banner-con">
                    <div className="bg-container">
                             
                    </div>
                        
                </div>
        </div>
    </div>

  )
}

export default Banner
