import React from 'react'
import "./Benner01.css"
import image1 from '../img/image 1.png'
import BG from '../img/BG.png'

let bannerData = {
    title: "Your data with",
    title1: "real-time analytics",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam velit iure aut delectus sapiente omnis adipisci expedita ipsam, possimus impedit minus vero dolor? Reprehenderit eveniet, minus pariatur aperiam voluptate labore?"
}

function Benner01() {
    return (
        <div className="banner-bg">

            <div className="container">

                <div className="banner-con">
                    <div className="image1">
                        <img src={image1} alt="image1"/>
                    </div>
                    
                    <div className="banner-text">
                        <h1>{bannerData.title}</h1>
                        <h1>{bannerData.title1}</h1>
                        <p>
                            {bannerData.desc}
                        </p>
                        <a href="#" className="banner-btn1">Stsrt free trial</a>
                        <a href="#" className="banner-btn2">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benner01
