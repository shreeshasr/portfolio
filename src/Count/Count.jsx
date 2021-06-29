import React, { Component } from 'react'
import SingleCount from '../SingleCount/SingleCount';
import './Count.css'

export default class Count extends Component {
    render() {
        return (
            <div className="count-container">
                <SingleCount icon="smile-o" count="30" info="Happy Client"/>
                <SingleCount icon="trophy" count="2" info="Award Won"/>
                <SingleCount icon="coffee" count="300" info="Cup of Coffee"/>
                <SingleCount icon="thumbs-up" count="36" info="Project Complete"/>
            </div>
        )
    }
}