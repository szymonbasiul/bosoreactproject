import './styles/Navbar.scss';
import homebutton from '../img/homebutton.png';
import aboutbutton from '../img/aboutbutton.png';
import contactbutton from '../img/contactbutton.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbutton(props) {

    const navbutton = (
        <div className="nav-button">
            <Link to={props.link}>
                <img className="button-img"
                    src={props.src}
                    title={props.title}
                    alt="cant find"
                    onClick={props.trigger}
                >
                </img>
            </Link>
        </div>
    )

    return navbutton;
}
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
    const changeState = () => {
        setTimeout(() => {
            setPage((window.location.href).substr(21));

        }, 0)
    }

    const filterDisplay = navbuttons.filter(buttonObject =>
        buttonObject.link !== Page

    )
    const navbarDisplay = filterDisplay.map(buttonObject =>
        <Navbutton
            key={buttonObject.title}
            link={buttonObject.link}
            src={buttonObject.src}
            title={buttonObject.title}
            trigger={changeState}
        />
    )

    return <div className="nav-bar">{navbarDisplay}</div>;
}

export default Navbar;