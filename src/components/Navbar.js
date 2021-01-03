import './Navbar.css';
import homebutton from '../img/homebutton.png';
import aboutbutton from '../img/aboutbutton.png';
import contactbutton from '../img/contactbutton.png';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


function Navbutton(props){
    const[Page, setPage] = useState(window.location.href);

    let currentPage = window.location.href;




    const navbutton = (
        <Link to={props.link}>
            <div className="nav-button">
            <img className="button-img"
             src={props.src}
             title={props.title}
             alt="cant find"

             >
            </img>
            </div>
        </Link>
    )

    return navbutton;
}
function Navbar(){

    let currentPage = window.location.href
    const[Page, setPage] = useState(window.location.href);

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

    const changeRouteOnButtonClick = () =>{
        setTimeout(() => {
            setPage(window.location.href);
           currentPage =
                (window.location.href).substr(21);
                console.log(
                    (window.location.href).substr(21) === '/'
                    );
            console.log('page to',
             currentPage);
        },0)

    }
    const filterDisplay = navbuttons.filter(buttonObject =>
        buttonObject.link != Page.substr(21)
        )
    const navbarDisplay = filterDisplay.map(buttonObject =>
     <Navbutton link = {buttonObject.link} src={buttonObject.src} title={buttonObject.title} onClick = {() => changeRouteOnButtonClick}/>
    )

    return <div id = "nav-bar"> {navbarDisplay} </div>;
}

export default Navbar;