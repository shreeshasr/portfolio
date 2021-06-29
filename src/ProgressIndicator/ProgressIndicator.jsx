import React, { Component } from 'react'
import './ProgressIndicator.css'
export default class ProgressIndicator extends Component {
    render() {
        return (
            <div className="progress-indicator-container">
                <button>{this.props.field}</button>
                <div className="percentage-container">
                    <div className="labels">
                        <label for="webdev">{this.props.skills}</label>
                        <label for="percentage">{this.props.percentage + "%"}</label>
                    </div>
                    <progress value={this.props.percentage} max="100"> {this.props.percentage +"%"} </progress>
                </div>
               
            </div>
        )
    }
}
