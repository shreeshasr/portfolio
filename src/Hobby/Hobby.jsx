import React, { Component } from 'react';
import './Hobby.css'

export default class Hobby extends Component {
    render() {
        return (
            <div className="hobby-container">
                <i className={`fa fa-${this.props.icon}`} aria-hidden="true"></i>
                <p>{this.props.hobby}</p>
            </div>
        )
    }
}
