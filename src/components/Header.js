import React ,{useState} from 'react'
import Logo from '../img/Logo.png'
import './Header.css'

function Header() {


    return (
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                            <img src={Logo} alt="Logo" className="Logo" />   
                    </div>
                        <ul className="menu">
                            <li className="menu-link">
                                <a href='#'><b>About</b></a>
                            </li>
                            <li className="menu-link">
                                <a href='#'><b>Pricing</b></a>
                            </li>
                            <li className="menu-link">
                                <a href='#'><b>Contact Us</b></a>
                            </li>
                            <li className="menu-link">
                                <a href='#'><b>Login</b></a>
                            </li>
                            <li className="menu-link">
                                 <a href='#'><button className="button"><b>Stsrt free trial</b></button></a>

                                
                            </li>
                        </ul>
                </div>
        </div>
    </div>
    )
    }

export default Header
