import React from 'react'
import './ProgressIndicator.css'

function ProgressIndicator( {skills, percentage}) {
    if(skills.length !== 0 ){
        return(
            <div className="progress-indicator-container">
                <div className="percentage-container">
                    <div className="labels">
                        <label for="webdev">{skills}</label>
                        <label for="percentage">{percentage + "%"}</label>
                    </div>
                    <progress value={percentage} max="100"> {percentage +"%"} </progress>
                </div>
            </div>
        ) 
    }
}

export default ProgressIndicator
