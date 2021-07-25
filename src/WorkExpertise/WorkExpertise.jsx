import {React, useState} from 'react'
import './WorkExpertise.css';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator'
import Shreesha from '../images/shreesha2.jpeg';

function WorkExpertise() {
    let number= 0;
    const [skills, setSkills] = useState([]);
    let knowledge = []
    const showSkills = (type) => {
        switch(type){
            case "web" : knowledge = [
                    {
                        fields: "HTML5, CSS3",
                        percentage: "94"
                    },
                    {
                        fields: "Javascript, JQuery",
                        percentage: "80"
                    },
                    {
                        fields: "ReactJS, Redux, Hooks, VueJS",
                        percentage: "85"
                    },
                    {
                        fields: "REST API",
                        percentage: "75"
                    }
                    ]
                    break;
            case "app" : knowledge = [
                {
                    fields: "React native",
                    percentage: "60"
                },
                {
                    fields: "Firebase",
                    percentage: "85"
                },
                {
                    fields: "Fastify",
                    percentage: "70"
                },
                {
                    fields: "MongoDB",
                    percentage: "77"
                }
                
            ]
            break;
            case "ux" : knowledge = [
                {
                    fields: "Figma",
                    percentage: "50"
                },
                {
                    fields: "Adobe",
                    percentage: "55"
                },
                {
                    fields: "Design",
                    percentage: "77"
                },
            ]
            break;
            default : knowledge = [];

        }
        setSkills(knowledge);
    }
    return (
        <div>
             <div className="work-expertise-container">
                <p>WORK EXPERTISE</p>
                <div className="image-skills">
                <div className="image">
                    <img src={Shreesha} alt="shreesha"/>
                </div>
                <div className="buttons-with-progress">
                    <div className="buttons">
                        <button onClick={() => showSkills("web")}>Web development</button>
                        <button onClick={() => showSkills("app")}>App development</button>
                        <button onClick={() => showSkills("ux")}>UI/UX development</button>
                    </div>
                    {
                    skills.map( (skill) => {
                        return <ProgressIndicator skills={skill.fields} percentage={skill.percentage} key={number++}/>
                    })}
                
                </div>
                </div>
               
                
            </div>
        </div>
    )
}

export default WorkExpertise
