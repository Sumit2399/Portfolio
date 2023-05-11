import React from 'react';
import { useParams } from 'react-router-dom';
import { projectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css"
function ProjectDisplay(props) {
    const{id}=useParams();
    const project=projectList[id];
    return (
        <div className='project'>

                <h1>{project.name}</h1>
                <img src={project.image}/>
                <p><b>Skills:</b>{project.skill}</p>
                <a href={project.link} target="_blank">
                <GitHubIcon/>
                </a>
            
        </div>
    );
}

export default ProjectDisplay;