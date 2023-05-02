import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { projectList } from '../helpers/ProjectList';

import "../styles/Project.css"
function Projects(props) {
    return (
        <div className='projects'>
            <h1>My Personal Projects</h1>
            <div className='projectList'>
                {
                    projectList.map((project,idx)=>{
                        return <ProjectItem name={project.name} image={project.image} id={idx}/>
                    })
                }
               

            </div>
            
        </div>
    );
}

export default Projects;