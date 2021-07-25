import {React, useState} from 'react'
import {ProjectsList} from '../ProjectsList/ProjectsList';
import SingleProject from '../SingleProject/SingleProject';
import './Projects.css'

function Projects() {
    const [projects, setProjects] = useState(ProjectsList);

    const showProjects = (type) => {
        const result = ProjectsList.filter( (project) => {
            return project.type.includes(type)
        })
        setProjects(result);
    }
    return (
        <div>
        <div className="project-container">
           <p>MY PORTFOLIO</p>
               <div className="buttons">
                   <button default onClick={() => setProjects(ProjectsList)}>All</button>
                   <button onClick={() => showProjects("Branding")}>Branding</button>
                   <button onClick={() => showProjects("Designing")}>Designing</button>
                   <button onClick={() => showProjects("Photography")}>Photography</button>
                   <button onClick={() => showProjects("Development")}>Development</button>
               </div>
               <div className="projects-list">
               {
               projects.map( (project) => {
                   return(
                       <SingleProject project={project}/>
                    )
               })}
               </div>
       </div>
   </div>  
)
}

export default Projects
