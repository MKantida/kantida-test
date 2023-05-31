import React from 'react'
import "./Benner01.css"
import image from '../img/image 1.png'
import bg from '../img/BG.png'
import { BsStars } from "react-icons/bs"



function Benner01() {
    return (

            
            <div className="benner">
                {<img src={bg} alt="bg"className='bg'/>}
                    <section className="benner-con">

                        <div className="benner-r">
                                <button className="button"><b><BsStars /> v3.1 released. <a href='https://github.com/ohmiler/react-landing-page/blob/main/src/components/Content.css'>Learn more</a></b></button>
                                    <h2>Some title</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                                        </p>
                                            <a href='#'><button className="button1">Stsrt free trial</button></a>
                                            <a href='#'><button className="button2">Stsrt free trial</button></a>
                        </div>
                            <div className="benner-l">
                                <img src={image} alt="image"/>
                            </div>
                    </section>
        
            </div>
        

    )
}

export default Benner01
