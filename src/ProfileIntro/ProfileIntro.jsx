import React, { Component } from 'react';
import Shreesha from '../images/shreesha.jpg';
import './ProfileIntro.css';
import Typewriter from 'typewriter-effect';

export default class ProfileIntro extends Component {
    render() {
        return (
            <div className="profileintro-container">
                <img src={Shreesha} alt="shreesha"/>
                <h1>Shreesha Bhat</h1>
                <div class="info">
                    <p>I'm a Passionate </p>
                    <p><Typewriter
                        options={{
                            strings: ['Frontend Developer 💻', 'Backend Engineer ⌨️'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></p>
                </div>
                <a href="/images/myw3schoolsimage.jpg" download><button className="download-cv">Download My CV <i className="fa fa-download" aria-hidden="true"></i></button></a>
            </div>
        )
    }
}
