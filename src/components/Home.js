import React from 'react';
import './Home.css';
import project1pic from '../img/project1pic.png';
import project2pic from '../img/project2pic.png';
import project3pic from '../img/project3pic.png';

function Home(){
    const loremIpsum =(<div className="pro-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Pariatur fugit aperiam temporibus ut vel et,
    id nostrum doloremque animi vero unde,<br/> cumque ipsum optio hic minima impedit quisquam reprehenderit iusto?<br/>
    n commodi animi ducimus neque repellat <br/>dignissimos doloribus ipsam nam labore asperiores,<br/>
</div>)
    const project1UlItemList = ['css', 'html', 'js'];
    const project1UlListDisplay = () => {

              return       (<div className="pro-text" >
                  <ul> First javascript project. <br/>
                    Tools used: {
                        project1UlItemList.map(x=><li>{x}</li>)
                    }</ul>
                    <br/>Calculator program made for training purposes. <br/>Project by CodeTeam.
              </div>)
    }

    const projectClassList = [
        {
            src: project1pic
        },
        {
            src: project2pic
        },
        {
            src: project3pic
        }
    ]
    const projectsInContainerDisplay = ()=>{
        return (<div id="project-container">
        {projectClassList.map(x=>(
            <div className="project-class">
                <img className="pro-image" src={x.src} alt="display project"/>
                {x.src==project1pic?project1UlListDisplay():loremIpsum}
            </div>
        ))}
        </div>);
    }

//     const temporaryDivObject =(
//     <div id="project-container">
//             <div className="project-class" >
//                 <img className="pro-image" alt="display project" src={project1pic}/>
//                    {project1UlListDisplay()}
//             </div>
//             <div className="project-class" >
//                 <img className="pro-image" alt="display project" src={project2pic}/>
//                 {loremIpsum}
//             </div>
//             <div className="project-class" >
//                 <img className="pro-image" alt="display project" src={project3pic} />
//                 {loremIpsum}
//             </div>
//     </div>
//  )
    return projectsInContainerDisplay()
}
export default Home;