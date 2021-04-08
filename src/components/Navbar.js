import './styles/Navbar.css';
import homebutton from '../img/homebutton.png';
import aboutbutton from '../img/aboutbutton.png';
import contactbutton from '../img/contactbutton.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


/*************************************************************************/
function Navbar() {
    const [Page, setPage] = useState((window.location.href).substr(21));

    const navbuttons = [
        {
            src: contactbutton,
            link: "/contact",
            title: "contact"
        },
        {
            src: aboutbutton,
            link: "/about",
            title: "about"

        },
        {
            src: homebutton,
            link: "/",
            title: "home"
        }];

    const filterDisplay = navbuttons.filter(buttonObject =>
        buttonObject.link !== Page

    )

    console.log((window.location.href).substr(21), Page)
    const navbarDisplay = filterDisplay.map(buttonObject => {
        return (<div className="nav-button" key={buttonObject.title}>
            <Link to={buttonObject.link}>
                <img className="button-img"
                    src={buttonObject.src}
                    title={buttonObject.title}
                    alt="navbarAlt"
                    onClick={() => { setPage((window.location.href).substr(21)) }}
                />
            </Link>
        </div>)
    }
    )

    return <div className="nav-bar">{navbarDisplay}</div>;
}

export default Navbar;