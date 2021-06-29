import React, { Component } from 'react'
import Hobby from '../Hobby/Hobby.jsx';
import './Hobbies.css'
export default class Hobbies extends Component {
    render() {
        return (
            <div className="hobbies-container">
                <p>HOBBIES & INTERESTS</p>
                <div className="hobbies-list">
                     <Hobby hobby="Developing" icon="laptop"/>
                     <Hobby hobby="UI Designing" icon="stop-circle"/>
                     <Hobby hobby="Movies" icon="film"/>
                     <Hobby hobby="Coffee" icon="coffee"/>
                     <Hobby hobby="Music" icon="music"/>
                     <Hobby hobby="Games" icon="gamepad"/>
                     <Hobby hobby="Designing" icon="pencil"/>
                     <Hobby hobby="Sports" icon="trophy"/>
                     <Hobby hobby="Drawing" icon="paint-brush"/>
                     <Hobby hobby="Reading" icon="book"/>
                     <Hobby hobby="Android" icon="mobile"/>
                     <Hobby hobby="Other activity" icon="line-chart"/>
                </div>
                
            </div>
        )
    }
}
