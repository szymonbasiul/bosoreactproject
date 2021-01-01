import './Navbar.css';
import homebutton from '../img/homebutton.png';
import aboutbutton from '../img/aboutbutton.png';
import contactbutton from '../img/contactbutton.png';
import React from 'react';


function Navbutton(props){
    const navbutton = (
        <div class="nav-button">
            <img class="button-img" src={props.src}>

            </img>
        </div>
    )
    
    return navbutton;
}
function Navbar(){

    const navbarDisplay = (
        <div id="nav-bar">
            <Navbutton src={contactbutton}/>
            <Navbutton src={aboutbutton}/>
            <Navbutton src={homebutton}/>
            
        </div>
    )
    return navbarDisplay;
}

export default Navbar;