import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectItem(props) {
    const{name,image,id}=props;
    const navigate=useNavigate();
    return (
        <div className='projectItem'>
            <div style={{backgroundImage:`url(${image})`}} className='bgImage'
            onClick={()=>{
                    navigate('/project/'+id)
            }}></div>

            <h1>{name}</h1>
            
        </div>
    );
}

export default ProjectItem;