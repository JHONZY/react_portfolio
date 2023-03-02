import React, { useState } from "react"; 
import { MenuItems } from './menuitems'
import { HashLink as Link } from "react-router-hash-link";
import './navbar.css'

const Navbar = () => {

    const [state, setState] = useState(true);

    const handleClick = () => 
        setState(!state);

    const closeMobileMenu = () => 
        setState(!false);

        const [fix, setFix] = useState(false)
            function setFixed(){
                if(window.scrollY >= 300) {
                    setFix(true)
                } else {
                    setFix(false)
                }
            }

        window.addEventListener("scroll", setFixed)

        return(
            <>

            <nav className={fix ? 'NavbarItems fixed' : 'NavbarItems'}>
            <div className="menu-icon" onClick={handleClick}>
                    <i className={!state ? 'fa-sharp fa-solid fa-rectangle-xmark' : 'fa-solid fa-bars' }></i>
                </div>
                <h1 className="navbar-logo" onClick={closeMobileMenu}><i className="fa thin fa-user-secret"></i>JHONZ</h1>
                <ul className={!state? 'nav-menu active' : 'nav-menu'}>

                    {MenuItems.map((item, index) => {
                        return (
                        <li key={index} onClick={closeMobileMenu}>
                        <Link smooth to={item.url} className={item.cName} >{item.title}</Link>
                        </li>
                        )
                    })}
                </ul>
            </nav>
            </>
        )
    }

export default Navbar