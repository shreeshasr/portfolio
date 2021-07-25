import React from 'react'
import './SingleProject.css'
function SingleProject( {project} ) {
    return (
        <div className="project-card">
            <img src={project.image} alt=""/>
            <h3>{project.name}</h3>
            <h5>{project.field}</h5>
        </div>
    )
}

export default SingleProject
