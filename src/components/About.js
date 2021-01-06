import React from 'react';
import './About.css';
import bb from '../img/bodzio-bodzio.png';
import ss from '../img/szym-szym.png'; 

const About = function(){
const loremIpsum = (
<>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Quam, sapiente facere dignissimos debitis aliquam odio 
    architecto et dicta nulla ab a perspiciatis voluptas 
    assumenda similique iure soluta aspernatur repellat? Tenetur.          
</>
)
const bInfo = (
    <div className="personal-info">
            <p>&nbsp;Info</p><br/>
            Name: Vilaider<br/>
            Surname: KNT<br/>
            E-mail:nie@uk.co<br/>
    </div>
);   
const sInfo =(
    <div className="personal-info">
        <p>&nbsp;Info</p><br/>
        Name: Tomb<br/>
        Surname: Raider<br/>
        E-mail:google@wp.pl<br/>
    </div>
)
const projectsInContainerDisplay = (
<div id="cv-container">
    <div className="profiles-class" id="profile-a">
        <img className="profile-img-box" src={bb} alt='b-face'/>
            {bInfo}
        <div className="personal-experience">
            <p>&nbsp;Experience</p><br/>
            {loremIpsum}
        </div>
        <div className="personal-skills">
            <p>&nbsp;Skills</p><br/>
            {loremIpsum}
        </div>
    </div>
    <div className="profiles-class" id="profile-b">
        <img className="profile-img-box" src={ss} alt='s-face'/>
            {sInfo}
        <div className="personal-experience">
            <p>&nbsp;Experience</p><br/>
            {loremIpsum}
        </div>
        <div className="personal-skills">
            <p>&nbsp;Skills</p><br/>
            {loremIpsum}
        </div>
    </div>
</div>
) 
return projectsInContainerDisplay;
}

export default About