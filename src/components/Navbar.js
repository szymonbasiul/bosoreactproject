import './Navbar.css';
import homebutton from '../img/homebutton.png';
import aboutbutton from '../img/aboutbutton.png';
import contactbutton from '../img/contactbutton.png';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


function Navbutton(props){
    let pageCoreState = undefined;
    useEffect(() =>{
        pageCoreState = window.location.href;
     })
    const [currentPage, setCurrentPage] = useState(window.location.href)
    
    
    const changeStateOnbuttonClick = () =>{
        setTimeout(() => {
            setCurrentPage(
                (window.location.href).substr(21)
                );
            console.log('stan to',
             currentPage,
             'rzeczywisty adres strony to',
             (window.location.href).substr(21));
        },100)
        
    }
    
    const navbutton = (
        <Link to={props.link}>
            <div className="nav-button">
            <img className="button-img"
             src={props.src}
             title={props.title}
             alt="cant find"
             onClick={() => changeStateOnbuttonClick() }
             >
            </img>
            </div>
        </Link>
    )
    console.log(
        currentPage === '/'
        );
    return navbutton;
}
function Navbar(){

    const navbarDisplay = (
        <div id="nav-bar">
            <Navbutton
             src={contactbutton} 
             link="/contact" 
             title="contact" />

            <Navbutton src={aboutbutton} link="/about" title="about"/>

            <Navbutton src={homebutton} link="/" title="home"/>
        </div>
    )
    
    return navbarDisplay;
}

export default Navbar;