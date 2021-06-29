import React, { Component } from 'react';
import SingleOffer from '../SingleOffer/SingleOffer.jsx';
import './Offer.css'
export default class Offer extends Component {
    render() {
        return (
            <div className="offer-container">
                <p>WHAT DO I OFFER ?</p>
                <div className="offers-list-container">
                <SingleOffer icon="laptop" field="Web Development" explanation="A Full Stack Development in Node JS, MongoDB, Python, Javascript, React JS, and Fastify, VueJS, etc."/>
                <SingleOffer icon="mobile" field="App Development" explanation="Android and iOS App development using React Native. Good skills in Firebase, Fastify."/>
                <SingleOffer icon="cube" field="UI/UX Designer" explanation="UI/UX Design with 2+ years of experience in Adobe XD and Figma with wireframing and Prototyping."/>
                <SingleOffer icon="pencil" field="Graphic Designer" explanation="A freelance verified Graphic Designer at upwork.com. 30+ projects completed on Upwork with total review of 4.2/5."/>
                <SingleOffer icon="cog" field="Web security and DevOps" explanation="Building skills in AWS, Linux, Windows, DevOps (Build & Release Management)and middlewares."/>
                <SingleOffer icon="clock-o" field="Penetration Testing" explanation="Building and having good experince in Vulnerability Assessment and Penetration Testing."/>
                </div>
            </div>
        )
    }
}
