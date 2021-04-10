import './styles/Navbar.css';
import homebutton from '../img/homebutton.png';
import aboutbutton from '../img/aboutbutton.png';
import contactbutton from '../img/contactbutton.png';
import React from 'react';
import { Link } from 'react-router-dom';


/*************************************************************************/
function Navbar(props) {


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
        buttonObject.link !== props.parentState

    )

    const navbarDisplay = filterDisplay.map(buttonObject => {
        return (<div className="nav-button" key={buttonObject.title}>
            <Link to={buttonObject.link}>
                <img className="button-img"
                    src={buttonObject.src}
                    title={buttonObject.title}
                    alt="navbarAlt"
                    onClick={() => { props.currentChildHref((window.location.href).substr(21)) }}
                />
            </Link>
        </div>)
    }
    )

    return <div className="nav-bar">{navbarDisplay}</div> ;
}

export default Navbar;