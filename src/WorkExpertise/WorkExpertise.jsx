import React, { Component } from 'react'
import './WorkExpertise.css';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator.jsx';

export default class WorkExpertise extends Component {
    render() {
        return (
            <div className="work-expertise-container">
                <p>WORK EXPERTISE</p>
                <ProgressIndicator field="Web Development" skills="HTML5, CSS3" percentage="94"/>
                <ProgressIndicator field="APP Development" skills="HTML5, CSS3" percentage="84"/>
                <ProgressIndicator field="UI/UX DESIGN" skills="HTML5, CSS3" percentage="74"/>
            </div>
        )
    }
}
