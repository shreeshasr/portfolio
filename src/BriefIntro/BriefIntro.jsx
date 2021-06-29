import React, { Component } from 'react';
import './BriefIntro.css';
import Shreesha from '../images/shreesha.jpg';

export default class BriefIntro extends Component {
    render() {
        return (
            <div className="brief-intro-container">
                <div className="shreesha-image">
                     <img src={Shreesha} alt="shreesha"/>
                </div>
                <div className="intro">
                    <p>Shreesha Bhat</p>
                    <p>I'm a passionate <span>Full Stack Engineer</span></p>
                    <p>Dedicated and efficient full stack developer with passionate experience in application layers, presentation layers, and databases. Certified in both Front End and Back End technologies. Spearheaded successful transition from the Front End to Full-Stack. In the Journey of turning dreams into Reality by converting ideas into #Code 🚀</p>
                    <button className="portfolio-button">View Portfolio</button>
                </div>
            </div>
        )
    }
}
