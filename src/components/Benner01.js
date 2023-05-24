import React from 'react'
import "./Benner01.css"
import image from '../img/image 1.png'
import BG from '../img/BG.png'
import { BsStars } from "react-icons/bs"

let bannerData = {
    title: "Your data with",
    title1: "real-time analytics",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam velit iure aut delectus sapiente omnis adipisci expedita ipsam, possimus impedit minus vero dolor? Reprehenderit eveniet, minus pariatur aperiam voluptate labore?"
}

function Benner01() {
    return (
        <div className="container">
            
            <section className="content-con">

                <div className="content-r">
                    <button className="button"><b><BsStars /> v3.1 released. <a href='#'>Learn more</a></b></button>
                        <h2>Some title</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                        </p>
                        <a href='#'><button className="button1">Stsrt free trial</button></a>
                        <a href='#'><button className="button2">Stsrt free trial</button></a>
                </div>
                <div className="content-l1">
                    <img src={image} alt="image"/>
                </div>


            </section>
            
        </div>
    )
}

export default Benner01
