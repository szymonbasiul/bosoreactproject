import React from 'react';
import './styles/_home.scss';
import project1pic from '../img/project1pic.png';
import project2pic from '../img/project2pic.png';
import project3pic from '../img/project3pic.png';
// import { Calculator } from './projects/calculator/Calculator';
import { Link } from 'react-router-dom';

function Home() {
    const loremIpsum = (<div className="pro-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Pariatur fugit aperiam temporibus ut vel et,
    id nostrum doloremque animi vero unde,<br /> cumque ipsum optio hic minima impedit quisquam reprehenderit iusto?<br />
    n commodi animi ducimus neque repellat <br />dignissimos doloribus ipsam nam labore asperiores,<br />
    </div>)
    const project1UlItemList = ['css', 'html', 'js'];
    const project1UlListDisplay = () => {

        return (<div className="pro-text" >
            <ul> First javascript project. <br />
                    Tools used: {
                    project1UlItemList.map(x => <li key={x}>{x}</li>)
                }</ul>
            <br />Calculator program made for training purposes. <br />Project by CodeTeam.
        </div>)
    }
    const projectClassList = [
        {
            src: project1pic,
            link: '/calculator'
        },
        {
            src: project2pic,
            link: '/calculator'
        },
        {
            src: project3pic,
            link: '/calculator'
        }
    ]
    const projectsInContainerDisplay = () => {
        return (<div id="project-container">
            <button>dupppka</button>
            {projectClassList.map(x => (
                <div className="project-class" key={x.src} >
                    <Link to={x.link}>
                        <img className="pro-image" src={x.src} alt="display project" />
                    </Link>
                    {x.src === project1pic ? project1UlListDisplay() : loremIpsum}
                </div>
            ))}
        </div>);
    }

    return projectsInContainerDisplay()
}
export default Home;