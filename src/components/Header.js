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
                                <a href='#'>About</a>
                            </li>
                            <li className="menu-link">
                                <a href='#'>Pricing</a>
                            </li>
                            <li className="menu-link">
                                <a href='#'>Contact Us</a>
                            </li>
                            <li className="menu-link">
                                <a href='#'>Login</a>
                            </li>
                            <li className="menu-link">
                                <a href='#'>Stsrt free trial</a>
                            </li>
                        </ul>
                </div>
        </div>
    </div>
    )
    }

export default Header
