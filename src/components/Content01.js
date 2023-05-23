import React from 'react'
import "./Content01.css"
import Group21 from '../img/Group 21.png'
import image6 from '../img/image 6.png'
import { BsStars } from "react-icons/bs"

function Content01() {
    return (
        <div className="container">
            <section className="content-con">
                <div className="content-l">
                    <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80" alt=""/>
                </div>
                <div className="content-r">
                    <h2>Some title</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                </div>
            </section>
            <section className="content-con">
                <div className="content-l">
                <img src={Group21} alt="Group21" className="Group21"/>
                </div>
                <div className="content-r">
                    <button className="button"><b><BsStars /> v3.1 released. <a href='#'>Learn more</a></b></button>
                    <h2>Some title</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                </div>
            </section>
            <section className="content-con">
                <div className="content-r">
                    <button className="button"><b><BsStars /> v3.1 released. <a href='#'>Learn more</a></b></button>
                    <h2>Some title</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                </div>
                <div className="content-l">
                <img src={image6} alt="image6" className="image6"/>
                </div>
            </section>
        </div>
    )
}

export default Content01
