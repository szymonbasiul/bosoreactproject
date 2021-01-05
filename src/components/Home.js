import React from 'react';
import './Home.css';
import project1pic from '../img/project1pic.png';
import project2pic from '../img/project2pic.png';
import project3pic from '../img/project3pic.png';

function Home(){
    const loremIpsum =(<div class="pro-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Pariatur fugit aperiam temporibus ut vel et, 
    id nostrum doloremque animi vero unde,<br/> cumque ipsum optio hic minima impedit quisquam reprehenderit iusto?<br/>
    n commodi animi ducimus neque repellat <br/>dignissimos doloribus ipsam nam labore asperiores,<br/>
</div>)
 const temporaryDivObject =(
    <div id="project-container"> 
            <div class="project-class" id="project1">
                <img class="pro-image"  src={project1pic}/>
                <div className="pro-text" >
                    <ul>First javascript project.<br/>
                   Tools used:
                    <li>css</li>
                    <li>html</li>
                    <li>js</li>
                    </ul>
                    <br/>
                    Calculator program made for training purposes. <br/>
                    Project by CodeTeam.
                </div>
            </div>
            <div class="project-class" id="project2">
                <img class="pro-image"  src={project2pic}/>
                {loremIpsum}
            </div>
            <div class="project-class" id="project3">
                <img class="pro-image"  src={project3pic} />
                {loremIpsum}
            </div>
    </div>
 )

    return temporaryDivObject
}
export default Home;