import React ,{useState} from 'react'
import Logo from '../img/Logo.png'
import './Header.css'
import { FiMenu, FiX } from "react-icons/fi";

function Header() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log(click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="header">
            <div className="header-h">
                    
                    <div className="header-con">
                    <div className="logo-container">
                            <img src={Logo} alt="Logo"  />    
                    </div>
                        <ul className={click ? "menu active" : "menu"}>
                            <li className="menu-link" onClick={closeMobileMenu}>
                                <a href='#'><b>About</b></a>
                            </li>
                            <li className="menu-link" onClick={closeMobileMenu}>
                                <a href='#'><b>Pricing</b></a>
                            </li>
                            <li className="menu-link" onClick={closeMobileMenu}>
                                <a href='#'><b>Contact Us</b></a>
                            </li>
                            <li className="menu-link" onClick={closeMobileMenu}>
                                <a href='#'><b>Login</b></a>
                            </li>
                            <li className="menu-link" onClick={closeMobileMenu}>
                                 <a href='#'><button className="button"><b>Stsrt free trial</b></button></a>

                                
                            </li>
                        </ul>
                        <div className="mobile-menu" onClick={handleClick}>
                        {click ? (
                            <FiX />
                        ) : (
                            <FiMenu />
                        )}
                    </div>
                </div>
        </div>
    </div>
    )
    }

export default Header
