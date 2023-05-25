import React from 'react'
import "./Content.css"
import Group21 from '../img/Group 21.png'
import image6 from '../img/image 6.png'

function Content() {
    return (
        <div className="container">
            <section className="content-con">
                <div className="content-l">
                    <img src={Group21} alt="Group21" className="Group21"/>
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
                    <h2>Some title</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                </div>
            </section>
            <section className="content-con">
                <div className="content-r">
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

export default Content