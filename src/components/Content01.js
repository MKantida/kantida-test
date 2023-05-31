import React from 'react'
import "./Content01.css"
import Group21 from '../img/Group 21.png'
import image6 from '../img/image 6.png'
import { BsStars } from "react-icons/bs"

function Content01() {
    return (
        <div className="container">

            <section className="content-con">
                <div className="content-r">
                <button className="content-button"><b><BsStars /> v3.1 released. <a href='https://github.com/ohmiler/react-landing-page/blob/main/src/components/Content.css'>Learn more</a></b></button>

                    <h2>Some title</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                </div>
                <div className="content-l">
                <img src={image6} alt="image6" />
                </div>
            </section>

            <section className="content-con">
                <div className="content-l">
                    <img src={Group21} alt=""/>
                </div>
                <div className="content-r">
                <button className="content-button"><b><BsStars /> v3.1 released. <a href='https://github.com/ohmiler/react-landing-page/blob/main/src/components/Content.css'>Learn more</a></b></button>
                    <h2>Some title</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                </div>
            </section>

            <section className="content-con">
                <div className="content-r">
                <button className="content-button"><b><BsStars /> v3.1 released. <a href='https://github.com/ohmiler/react-landing-page/blob/main/src/components/Content.css'>Learn more</a></b></button>

                    <h2>Some title</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                </div>
                <div className="content-l">
                <img src={image6} alt="image6" />
                </div>
            </section>
        </div>
    )
}

export default Content01
