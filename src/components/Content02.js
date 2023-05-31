import React from 'react'
import "./Content02.css"

import bg2 from '../img/Path 606.png'
import { BsStars } from "react-icons/bs"

function Content02() {
  return (
    <div className="Content02">
                    <div className='Content02-bg'>
                        <section className="Content02-con"  >
    
                            <div className="Content02-r">
                                    <button className="button"><b><BsStars /> v3.1 released. <a href='https://github.com/ohmiler/react-landing-page/blob/main/src/components/Content.css'>Learn more</a></b></button>
                                        <h2>Some title</h2>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                                            </p>
                            </div>

                        </section>
                        </div>
                        {<img src={bg2} alt="bg2" className="bg2" />}
                </div>
  )
}

export default Content02
