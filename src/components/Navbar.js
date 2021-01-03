import './Navbar.css';
import homebutton from '../img/homebutton.png';
import aboutbutton from '../img/aboutbutton.png';
import contactbutton from '../img/contactbutton.png';
import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


function Navbutton(props){
    
    
    const navbutton = (
        <Link to={props.link}>
            <div className="nav-button">
            <img className="button-img"
             src={props.src}
             title={props.title}
             alt="cant find"
             onClick={props.trigger}
             >
            </img>
            </div>
        </Link>
    )

    return navbutton;
}
function Navbar(){
    const[Page, setPage] = useState((window.location.href).substr(21));
            
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
            title: "contact"
    }];
    const changeState = () =>{
        setTimeout(() => {
            setPage((window.location.href).substr(21));
            
        },0)
    }

    const filterDisplay = navbuttons.filter(buttonObject =>
        buttonObject.link !== Page

    )
    const navbarDisplay = filterDisplay.map(buttonObject =>
     <Navbutton 
        link = {buttonObject.link}
        src={buttonObject.src}
        title={buttonObject.title}
        trigger={changeState}
        />
    )

    return <div id = "nav-bar"> {navbarDisplay} </div>;
}

export default Navbar;