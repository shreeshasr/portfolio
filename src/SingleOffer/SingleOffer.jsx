import React, { Component } from 'react'
import './SingleOffer.css'
export default class SingleOffer extends Component {
    render() {
        return (
            <div className="single-offer-container">
                 <i className={`fa fa-${this.props.icon}`} aria-hidden="true"></i>
                 <p>{this.props.field}</p>
                 <p>{this.props.explanation}</p>
            </div>
        )
    }
}
